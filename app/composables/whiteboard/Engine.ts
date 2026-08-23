import type {
  WhiteboardElement, WhiteboardTool, BackgroundType, BoardTheme, Point, StrokePoint,
  Bounds, StrokeStyle, PathElement, ShapeElement, TextElement, ShapeType
} from '~/types/whiteboard'

type Ctx2D = CanvasRenderingContext2D

/** Undo depth. Deep enough for a whole lesson, shallow enough to stay cheap. */
const MAX_HISTORY = 80
/** Samples closer than this (in world px) are dropped: smoother and lighter. */
const MIN_SAMPLE_DISTANCE = 1.1
/** How long the laser trail stays visible. */
const LASER_TRAIL_MS = 420
/** Retina is worth paying for; 4x displays are not. */
const MAX_DPR = 2.5
const MIN_SCALE = 0.2
const MAX_SCALE = 6

export const BOARD_PALETTES: Record<BoardTheme, {
  paper: string
  grid: string
  dot: string
  ink: string
  selection: string
}> = {
  light: {
    paper: '#FCFBF8',
    grid: 'rgba(41, 38, 56, 0.07)',
    dot: 'rgba(41, 38, 56, 0.16)',
    ink: '#292638',
    selection: '#7C6AE6'
  },
  dark: {
    paper: '#16211F',
    grid: 'rgba(255, 255, 255, 0.08)',
    dot: 'rgba(255, 255, 255, 0.18)',
    ink: '#F6F4EF',
    selection: '#A89CF2'
  }
}

const uid = () =>
  typeof crypto !== 'undefined' && 'randomUUID' in crypto
    ? crypto.randomUUID()
    : `el-${Math.random().toString(36).slice(2)}${Date.now().toString(36)}`

const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v))

/** Shortest distance from p to the segment ab. */
function distToSegment(p: Point, a: Point, b: Point): number {
  const dx = b.x - a.x
  const dy = b.y - a.y
  const lenSq = dx * dx + dy * dy
  if (lenSq === 0) return Math.hypot(p.x - a.x, p.y - a.y)
  const t = clamp(((p.x - a.x) * dx + (p.y - a.y) * dy) / lenSq, 0, 1)
  return Math.hypot(p.x - (a.x + t * dx), p.y - (a.y + t * dy))
}

/** Turn a possibly negative w/h box into a positive-extent rect. */
function normalize(x: number, y: number, w: number, h: number): Bounds {
  return { x: Math.min(x, x + w), y: Math.min(y, y + h), w: Math.abs(w), h: Math.abs(h) }
}

const mid = (a: Point, b: Point): Point => ({ x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 })

export class WhiteboardEngine {
  private canvas: HTMLCanvasElement
  private ctx: Ctx2D

  // Committed content. The stroke being drawn right now lives outside this
  // array until it is finished, which keeps the static cache below valid.
  private elements: WhiteboardElement[] = []
  private historyStack: WhiteboardElement[][] = []
  private redoStack: WhiteboardElement[][] = []

  private view = { x: 0, y: 0, scale: 1 }
  private background: BackgroundType = 'plain'
  private theme: BoardTheme = 'light'

  // Overlay mode: canvas is drawn directly on top of the page
  private transparent = false
  private scrollOffset = 0

  // Tool state
  private activeTool: WhiteboardTool = 'pen'
  private currentColor: string = BOARD_PALETTES.light.ink
  private currentWidth = 4

  // Interaction state
  private isDrawing = false
  private isPanning = false
  private spaceHeld = false
  private currentPath: PathElement | null = null
  private currentShape: ShapeElement | null = null
  private shapeOrigin: Point | null = null

  private lastPointer: Point = { x: 0, y: 0 }
  private lastSample: StrokePoint | null = null
  private lastSampleTime = 0
  private smoothedPressure = 1

  // Multi-touch: two fingers pan and pinch instead of drawing.
  private pointers = new Map<number, Point>()
  private pinchDistance = 0
  private gestureCenter: Point | null = null

  // Laser pointer. Kept in screen space (not world space) so the dot always
  // sits under the cursor, even while the page scrolls underneath it.
  private laserTrail: { x: number; y: number; t: number }[] = []

  // Where the cursor is over the canvas, in screen px (eraser ring feedback).
  private hoverPoint: Point | null = null

  // Selection
  private selectedElementId: string | null = null
  private dragAnchor: Point = { x: 0, y: 0 }
  // History is only recorded once the selection is actually dragged, so
  // clicking an element does not wipe the redo stack.
  private dragRecorded = false

  // Offscreen cache of everything already committed. Re-painted only when the
  // content or the view actually changes, so drawing a long stroke costs one
  // blit plus that stroke, not a full repaint of the whole board.
  private cache: HTMLCanvasElement
  private cacheCtx: Ctx2D
  private cacheValid = false

  // Rendering budget: repaint on demand instead of 60fps of identical frames.
  private dirty = true
  private revision = 0

  private dpr = 1
  private cssWidth = 0
  private cssHeight = 0
  private resizeObserver: ResizeObserver | null = null
  private animationFrameId = 0

  // Callbacks
  public onTextRequest?: (x: number, y: number) => void
  public onSelectionChange?: (id: string | null) => void
  public onViewChange?: (scale: number) => void
  /** Fires when the undo/redo stacks change, so the UI can enable buttons. */
  public onHistoryChange?: (canUndo: boolean, canRedo: boolean) => void

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas
    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) throw new Error('Could not get 2d context')
    this.ctx = ctx

    this.cache = document.createElement('canvas')
    const cacheCtx = this.cache.getContext('2d', { alpha: true })
    if (!cacheCtx) throw new Error('Could not get 2d context')
    this.cacheCtx = cacheCtx

    this.resize = this.resize.bind(this)
    this.render = this.render.bind(this)

    this.setupEvents()
    this.resize()
  }

  public start() {
    if (!this.animationFrameId) this.render()
  }

  public stop() {
    cancelAnimationFrame(this.animationFrameId)
    this.animationFrameId = 0
    this.resizeObserver?.disconnect()
    this.resizeObserver = null
    window.removeEventListener('resize', this.resize)
    window.removeEventListener('scroll', this.onScroll)
    this.removeEvents()
  }

  // --- Invalidation ---

  /** An overlay changed: repaint, but the cached content is still good. */
  private markDirty() {
    this.dirty = true
  }

  /** Committed content changed: repaint, rebuild the cache, bump revision. */
  private markContentChanged() {
    this.cacheValid = false
    this.dirty = true
    this.revision++
  }

  /** Only the camera moved: the cache is painted in world space, so redo it. */
  private markViewChanged() {
    this.cacheValid = false
    this.dirty = true
  }

  private onScroll = () => {
    this.scrollOffset = window.scrollY
    this.markViewChanged()
  }

  // Overlay (annotate) mode: no paper behind the ink, and drawings stay
  // anchored to the page content while it scrolls.
  public setTransparent(value: boolean) {
    if (this.transparent === value) return
    this.transparent = value
    if (value) {
      this.scrollOffset = window.scrollY
      window.addEventListener('scroll', this.onScroll, { passive: true })
    } else {
      this.scrollOffset = 0
      window.removeEventListener('scroll', this.onScroll)
    }
    this.markViewChanged()
  }

  private resize() {
    const rect = this.canvas.parentElement?.getBoundingClientRect()
    if (!rect || rect.width === 0 || rect.height === 0) return

    // Back the canvas with real device pixels: on a retina laptop or a 4K
    // projector the old 1:1 canvas made every stroke look soft.
    const dpr = clamp(window.devicePixelRatio || 1, 1, MAX_DPR)
    const width = Math.round(rect.width * dpr)
    const height = Math.round(rect.height * dpr)
    if (this.canvas.width === width && this.canvas.height === height) return

    this.dpr = dpr
    this.cssWidth = rect.width
    this.cssHeight = rect.height
    this.canvas.width = width
    this.canvas.height = height
    this.cache.width = width
    this.cache.height = height
    this.markViewChanged()
  }

  // --- API ---

  public setTool(tool: WhiteboardTool) {
    if (this.activeTool === tool) return
    this.activeTool = tool
    if (tool !== 'laser') this.laserTrail = []
    if (tool !== 'select') this.clearSelection()
    this.markDirty()
  }

  public setColor(color: string) {
    this.currentColor = color
  }

  public setWidth(width: number) {
    this.currentWidth = width
    this.markDirty()
  }

  public setBackground(bg: BackgroundType) {
    if (this.background === bg) return
    this.background = bg
    this.markViewChanged()
  }

  public setTheme(theme: BoardTheme) {
    if (this.theme === theme) return
    this.theme = theme
    this.markViewChanged()
  }

  public getTheme() {
    return this.theme
  }

  /**
   * Swap every stroke still using a palette colour over to the matching entry
   * in another palette. Without this, flipping to the dark board leaves all
   * the existing near-black ink invisible on it.
   */
  public remapInk(from: string[], to: string[]) {
    const lookup = new Map<string, string>()
    from.forEach((color, i) => {
      const replacement = to[i]
      if (replacement && replacement !== color) lookup.set(color.toLowerCase(), replacement)
    })
    if (lookup.size === 0) return

    const targets = this.elements.filter(el =>
      lookup.has((el.type === 'text' ? el.color : el.style.color).toLowerCase())
    )
    if (targets.length === 0) return

    this.saveState()
    for (const el of targets) {
      const current = el.type === 'text' ? el.color : el.style.color
      const next = lookup.get(current.toLowerCase())!
      if (el.type === 'text') el.color = next
      else el.style.color = next
    }
    this.markContentChanged()
  }

  /** Eraser radius in world px, driven by the same width buttons as the pen. */
  public getEraserRadius() {
    return (8 + this.currentWidth * 2.5) / this.view.scale
  }

  public undo() {
    const previous = this.historyStack.pop()
    if (!previous) return
    this.redoStack.push(this.snapshot())
    this.elements = previous
    this.abortLiveElement()
    this.clearSelection()
    this.markContentChanged()
    this.notifyHistory()
  }

  public redo() {
    const next = this.redoStack.pop()
    if (!next) return
    this.historyStack.push(this.snapshot())
    this.elements = next
    this.abortLiveElement()
    this.clearSelection()
    this.markContentChanged()
    this.notifyHistory()
  }

  public canUndo() {
    return this.historyStack.length > 0
  }

  public canRedo() {
    return this.redoStack.length > 0
  }

  public clear() {
    if (this.elements.length === 0) return
    this.saveState()
    this.elements = []
    this.abortLiveElement()
    this.clearSelection()
    this.markContentChanged()
  }

  public getElements() {
    return this.elements
  }

  /** Bumped on every content change, so autosave can skip an idle board. */
  public getRevision() {
    return this.revision
  }

  public loadElements(elements: WhiteboardElement[]) {
    this.elements = elements
    this.historyStack = []
    this.redoStack = []
    this.clearSelection()
    this.markContentChanged()
    this.notifyHistory()
  }

  public getSelectedId() {
    return this.selectedElementId
  }

  public deleteSelected() {
    if (!this.selectedElementId) return
    this.saveState()
    this.elements = this.elements.filter(el => el.id !== this.selectedElementId)
    this.clearSelection()
    this.markContentChanged()
  }

  public nudgeSelected(dx: number, dy: number) {
    const el = this.elements.find(e => e.id === this.selectedElementId)
    if (!el) return
    this.saveState()
    this.moveElement(el, dx / this.view.scale, dy / this.view.scale)
    this.markContentChanged()
  }

  public addText(
    text: string,
    x: number,
    y: number,
    color: string,
    fontSize: number,
    fontFamily = 'Cairo, sans-serif',
    isBold = false
  ) {
    if (!text.trim()) return
    this.saveState()

    // Convert screen coordinates to world coordinates
    const world = this.toWorld({ x, y })

    const textEl: TextElement = {
      id: uid(),
      type: 'text',
      text,
      x: world.x,
      y: world.y,
      color,
      fontSize,
      fontFamily,
      isBold
    }
    this.elements.push(textEl)
    this.markContentChanged()
  }

  // --- View ---

  public getZoom() {
    return this.view.scale
  }

  public setZoom(level: number) {
    this.zoomTo(level, { x: this.cssWidth / 2, y: this.cssHeight / 2 })
  }

  public zoomIn() {
    this.setZoom(this.view.scale * 1.2)
  }

  public zoomOut() {
    this.setZoom(this.view.scale / 1.2)
  }

  public resetZoom() {
    this.view = { x: 0, y: 0, scale: 1 }
    this.onViewChange?.(1)
    this.markViewChanged()
  }

  /** Pan and zoom so everything drawn on the board fits on screen. */
  public fitToContent(padding = 60) {
    const bounds = this.getContentBounds()
    if (!bounds || this.cssWidth === 0) {
      this.resetZoom()
      return
    }

    const scale = clamp(
      Math.min(
        (this.cssWidth - padding * 2) / Math.max(bounds.w, 1),
        (this.cssHeight - padding * 2) / Math.max(bounds.h, 1)
      ),
      MIN_SCALE,
      1.5
    )
    this.view.scale = scale
    this.view.x = this.cssWidth / 2 - (bounds.x + bounds.w / 2) * scale
    this.view.y = this.cssHeight / 2 - (bounds.y + bounds.h / 2) * scale + this.scrollOffset
    this.onViewChange?.(scale)
    this.markViewChanged()
  }

  private zoomTo(level: number, anchor: Point) {
    const newScale = clamp(level, MIN_SCALE, MAX_SCALE)
    if (newScale === this.view.scale) return
    const ratio = newScale / this.view.scale
    this.view.x = anchor.x - (anchor.x - this.view.x) * ratio
    this.view.y = anchor.y - (anchor.y - this.view.y) * ratio
    this.view.scale = newScale
    this.onViewChange?.(newScale)
    this.markViewChanged()
  }

  // --- Events ---

  private setupEvents() {
    this.canvas.addEventListener('pointerdown', this.onPointerDown)
    this.canvas.addEventListener('pointermove', this.onPointerMove)
    this.canvas.addEventListener('pointerup', this.onPointerUp)
    this.canvas.addEventListener('pointercancel', this.onPointerUp)
    this.canvas.addEventListener('pointerleave', this.onPointerLeave)
    this.canvas.addEventListener('wheel', this.onWheel, { passive: false })
    this.canvas.addEventListener('contextmenu', this.onContextMenu)
    window.addEventListener('pointermove', this.onLaserMove)
    window.addEventListener('keydown', this.onKeyDown)
    window.addEventListener('keyup', this.onKeyUp)
    window.addEventListener('blur', this.onWindowBlur)
    window.addEventListener('resize', this.resize)
    document.addEventListener('pointerleave', this.onLaserOut)

    if (typeof ResizeObserver !== 'undefined' && this.canvas.parentElement) {
      this.resizeObserver = new ResizeObserver(this.resize)
      this.resizeObserver.observe(this.canvas.parentElement)
    }
  }

  private removeEvents() {
    this.canvas.removeEventListener('pointerdown', this.onPointerDown)
    this.canvas.removeEventListener('pointermove', this.onPointerMove)
    this.canvas.removeEventListener('pointerup', this.onPointerUp)
    this.canvas.removeEventListener('pointercancel', this.onPointerUp)
    this.canvas.removeEventListener('pointerleave', this.onPointerLeave)
    this.canvas.removeEventListener('wheel', this.onWheel)
    this.canvas.removeEventListener('contextmenu', this.onContextMenu)
    window.removeEventListener('pointermove', this.onLaserMove)
    window.removeEventListener('keydown', this.onKeyDown)
    window.removeEventListener('keyup', this.onKeyUp)
    window.removeEventListener('blur', this.onWindowBlur)
    document.removeEventListener('pointerleave', this.onLaserOut)
  }

  // Right-drag pans the board, so the browser menu would only get in the way.
  private onContextMenu = (e: MouseEvent) => e.preventDefault()

  private onKeyDown = (e: KeyboardEvent) => {
    if (e.code !== 'Space' || this.spaceHeld) return
    const target = e.target as HTMLElement | null
    if (target && /^(INPUT|TEXTAREA)$/.test(target.tagName)) return
    this.spaceHeld = true
    this.markDirty()
  }

  private onKeyUp = (e: KeyboardEvent) => {
    if (e.code !== 'Space') return
    this.spaceHeld = false
    this.markDirty()
  }

  private onWindowBlur = () => {
    this.spaceHeld = false
    this.pointers.clear()
    this.isPanning = false
  }

  // The laser tracks the pointer at the window level: it needs no button held
  // down, and it keeps working while the canvas is in pass-through mode.
  private onLaserMove = (e: PointerEvent) => {
    if (this.activeTool !== 'laser') return

    const rect = this.canvas.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    if (x < 0 || y < 0 || x > rect.width || y > rect.height) {
      this.laserTrail = []
      this.markDirty()
      return
    }

    this.laserTrail.push({ x, y, t: performance.now() })
    if (this.laserTrail.length > 90) this.laserTrail.shift()
    this.markDirty()
  }

  private onLaserOut = () => {
    this.laserTrail = []
    this.markDirty()
  }

  private getScreenPoint(e: PointerEvent): Point {
    const rect = this.canvas.getBoundingClientRect()
    return { x: e.clientX - rect.left, y: e.clientY - rect.top }
  }

  private toWorld(screen: Point): Point {
    return {
      x: (screen.x - this.view.x) / this.view.scale,
      y: (screen.y - this.view.y + this.scrollOffset) / this.view.scale
    }
  }

  private snapshot(): WhiteboardElement[] {
    return JSON.parse(JSON.stringify(this.elements))
  }

  private saveState() {
    this.historyStack.push(this.snapshot())
    if (this.historyStack.length > MAX_HISTORY) this.historyStack.shift()
    this.redoStack = []
    this.notifyHistory()
  }

  private notifyHistory() {
    this.onHistoryChange?.(this.historyStack.length > 0, this.redoStack.length > 0)
  }

  private clearSelection() {
    if (!this.selectedElementId) return
    this.selectedElementId = null
    this.onSelectionChange?.(null)
    this.markDirty()
  }

  /** Drop the half-finished stroke without committing it. */
  private abortLiveElement() {
    this.isDrawing = false
    this.currentPath = null
    this.currentShape = null
    this.shapeOrigin = null
    this.lastSample = null
    this.markDirty()
  }

  private onPointerDown = (e: PointerEvent) => {
    // Capture keeps a stroke alive when the cursor leaves the canvas mid-draw.
    // It throws for pointer ids the browser no longer considers active, which
    // must not take the rest of the handler down with it.
    try {
      this.canvas.setPointerCapture(e.pointerId)
    } catch {
      /* not capturable; drawing still works inside the canvas */
    }
    this.pointers.set(e.pointerId, { x: e.clientX, y: e.clientY })

    // A second finger turns the gesture into pan + pinch, and the stroke the
    // first finger started is thrown away rather than left as a stray mark.
    if (this.pointers.size === 2) {
      this.abortLiveElement()
      this.isPanning = true
      this.pinchDistance = 0
      this.gestureCenter = null
      return
    }
    if (this.pointers.size > 2) return

    // Middle/right button, or space held: pan the camera.
    if (e.button === 1 || e.button === 2 || this.spaceHeld) {
      this.isPanning = true
      this.lastPointer = { x: e.clientX, y: e.clientY }
      return
    }

    const screenPt = this.getScreenPoint(e)
    const worldPt = this.toWorld(screenPt)

    if (this.activeTool === 'text') {
      this.onTextRequest?.(screenPt.x, screenPt.y)
      return
    }

    // The laser is pure pointing: it never draws and never takes the pointer.
    if (this.activeTool === 'laser') return

    if (this.activeTool === 'select') {
      this.handleSelectStart(worldPt)
      return
    }

    if (this.activeTool === 'eraser') {
      this.isDrawing = true
      this.saveState()
      this.eraseAt(worldPt)
      return
    }

    this.isDrawing = true

    const style: StrokeStyle = {
      color: this.currentColor,
      width: this.currentWidth,
      opacity: this.activeTool === 'highlighter' ? 0.3 : 1
    }

    if (this.activeTool === 'pen' || this.activeTool === 'highlighter') {
      this.lastSample = null
      this.smoothedPressure = 0.85
      const sample: StrokePoint = { ...worldPt, p: this.samplePressure(e, worldPt) }
      this.currentPath = {
        id: uid(),
        type: 'path',
        points: [sample],
        style,
        isHighlighter: this.activeTool === 'highlighter'
      }
      this.lastSample = sample
      this.lastSampleTime = e.timeStamp
    } else if (['line', 'arrow', 'rect', 'circle'].includes(this.activeTool)) {
      this.shapeOrigin = worldPt
      this.currentShape = {
        id: uid(),
        type: 'shape',
        shapeType: this.activeTool as ShapeType,
        x: worldPt.x,
        y: worldPt.y,
        w: 0,
        h: 0,
        style
      }
    }
    this.markDirty()
  }

  private onPointerMove = (e: PointerEvent) => {
    if (this.pointers.has(e.pointerId)) {
      this.pointers.set(e.pointerId, { x: e.clientX, y: e.clientY })
    }

    if (this.pointers.size >= 2) {
      this.handlePinch()
      return
    }

    const screenPt = this.getScreenPoint(e)
    this.hoverPoint = screenPt

    if (this.isPanning) {
      this.view.x += e.clientX - this.lastPointer.x
      this.view.y += e.clientY - this.lastPointer.y
      this.lastPointer = { x: e.clientX, y: e.clientY }
      this.markViewChanged()
      return
    }

    const worldPt = this.toWorld(screenPt)

    if (this.activeTool === 'eraser') {
      if (this.isDrawing) this.eraseAt(worldPt)
      this.markDirty() // keep the eraser ring under the cursor
      return
    }

    if (this.activeTool === 'select' && this.selectedElementId && this.isDrawing) {
      this.handleSelectMove(worldPt)
      return
    }

    if (!this.isDrawing) return

    if (this.currentPath) {
      this.appendSample(e, worldPt)
    } else if (this.currentShape && this.shapeOrigin) {
      this.updateShape(worldPt, e.shiftKey)
      this.markDirty()
    }
  }

  private onPointerUp = (e: PointerEvent) => {
    this.pointers.delete(e.pointerId)
    try {
      if (this.canvas.hasPointerCapture(e.pointerId)) {
        this.canvas.releasePointerCapture(e.pointerId)
      }
    } catch {
      /* already released */
    }

    if (this.pointers.size < 2) {
      this.pinchDistance = 0
      this.gestureCenter = null
    }
    if (this.pointers.size === 1) {
      // Keep panning with the finger that is still down, from where it is now.
      const remaining = [...this.pointers.values()][0]
      if (remaining) this.lastPointer = { ...remaining }
      return
    }
    if (this.pointers.size > 0) return

    this.isPanning = false

    if (this.currentPath) {
      // A single tap still deserves a dot, but nothing shorter than that.
      this.saveState()
      this.elements.push(this.currentPath)
      this.markContentChanged()
    } else if (this.currentShape) {
      // A click with no drag would otherwise leave an invisible zero-size shape.
      const tiny = Math.abs(this.currentShape.w) < 3 && Math.abs(this.currentShape.h) < 3
      if (!tiny) {
        this.saveState()
        this.elements.push(this.currentShape)
        this.markContentChanged()
      }
    }

    this.isDrawing = false
    this.dragRecorded = false
    this.currentPath = null
    this.currentShape = null
    this.shapeOrigin = null
    this.lastSample = null
    this.markDirty()
  }

  private onPointerLeave = () => {
    this.hoverPoint = null
    this.markDirty()
  }

  private onWheel = (e: WheelEvent) => {
    // In overlay mode the wheel belongs to the page underneath
    if (this.transparent) return
    e.preventDefault()

    const rect = this.canvas.getBoundingClientRect()
    const anchor = { x: e.clientX - rect.left, y: e.clientY - rect.top }

    if (e.ctrlKey || e.metaKey) {
      // Pinch to zoom / ctrl+wheel
      this.zoomTo(this.view.scale * Math.exp(-e.deltaY * 0.001), anchor)
    } else if (e.shiftKey) {
      this.view.x -= e.deltaY
      this.markViewChanged()
    } else {
      this.view.x -= e.deltaX
      this.view.y -= e.deltaY
      this.markViewChanged()
    }
  }

  // --- Gestures ---

  private handlePinch() {
    const [a, b] = [...this.pointers.values()]
    if (!a || !b) return

    const rect = this.canvas.getBoundingClientRect()
    const center = { x: (a.x + b.x) / 2 - rect.left, y: (a.y + b.y) / 2 - rect.top }
    const distance = Math.hypot(a.x - b.x, a.y - b.y)

    if (this.pinchDistance > 0 && distance > 0) {
      const ratio = distance / this.pinchDistance
      if (Math.abs(ratio - 1) > 0.004) this.zoomTo(this.view.scale * ratio, center)
    }
    this.pinchDistance = distance

    // Two-finger drag pans as well as pinches.
    if (this.gestureCenter) {
      this.view.x += center.x - this.gestureCenter.x
      this.view.y += center.y - this.gestureCenter.y
      this.markViewChanged()
    }
    this.gestureCenter = center
  }

  // --- Ink sampling ---

  /**
   * Stylus pressure when the hardware reports it, otherwise a speed-derived
   * substitute: fast strokes thin out the way a real pen does.
   */
  private samplePressure(e: PointerEvent, worldPt: Point): number {
    if (this.activeTool === 'highlighter') return 1

    let raw: number
    if (e.pointerType === 'pen' && e.pressure > 0 && e.pressure < 1) {
      raw = 0.35 + e.pressure * 0.9
    } else if (this.lastSample) {
      const dt = Math.max(e.timeStamp - this.lastSampleTime, 1)
      const speed = Math.hypot(worldPt.x - this.lastSample.x, worldPt.y - this.lastSample.y) / dt
      raw = clamp(1.05 - speed * 0.22, 0.55, 1.05)
    } else {
      raw = 0.85
    }

    // Smooth it, or the stroke width jitters with every sample.
    this.smoothedPressure = this.lastSample ? this.smoothedPressure * 0.7 + raw * 0.3 : raw
    return clamp(this.smoothedPressure, 0.4, 1.15)
  }

  private appendSample(e: PointerEvent, worldPt: Point) {
    if (!this.currentPath) return
    const last = this.lastSample

    // Thin the stream: pointer events can fire far faster than the stroke
    // needs, and every extra vertex shows up as a wobble.
    if (last && Math.hypot(worldPt.x - last.x, worldPt.y - last.y) < MIN_SAMPLE_DISTANCE / this.view.scale) {
      return
    }

    const sample: StrokePoint = { ...worldPt, p: this.samplePressure(e, worldPt) }
    this.currentPath.points.push(sample)
    this.lastSample = sample
    this.lastSampleTime = e.timeStamp
    this.markDirty()
  }

  private updateShape(worldPt: Point, shiftKey: boolean) {
    const shape = this.currentShape
    const origin = this.shapeOrigin
    if (!shape || !origin) return

    let w = worldPt.x - origin.x
    let h = worldPt.y - origin.y

    if (shiftKey) {
      if (shape.shapeType === 'line' || shape.shapeType === 'arrow') {
        // Snap to the nearest 45 degrees.
        const length = Math.hypot(w, h)
        const angle = Math.round(Math.atan2(h, w) / (Math.PI / 4)) * (Math.PI / 4)
        w = Math.cos(angle) * length
        h = Math.sin(angle) * length
      } else {
        // Perfect square / circle.
        const size = Math.max(Math.abs(w), Math.abs(h))
        w = (w < 0 ? -1 : 1) * size
        h = (h < 0 ? -1 : 1) * size
      }
    }

    shape.w = w
    shape.h = h
  }

  // --- Selection ---

  private handleSelectStart(worldPt: Point) {
    this.isDrawing = true
    // Find clicked element (reverse order for top-most)
    for (let i = this.elements.length - 1; i >= 0; i--) {
      const el = this.elements[i]
      if (!el) continue
      const b = this.getBounds(el)
      const pad = 6 / this.view.scale
      const inside =
        worldPt.x >= b.x - pad && worldPt.x <= b.x + b.w + pad &&
        worldPt.y >= b.y - pad && worldPt.y <= b.y + b.h + pad
      if (!inside) continue

      if (this.selectedElementId !== el.id) {
        this.selectedElementId = el.id
        this.onSelectionChange?.(el.id)
      }
      this.dragAnchor = { ...worldPt }
      this.dragRecorded = false
      this.markDirty()
      return
    }
    this.clearSelection()
  }

  private handleSelectMove(worldPt: Point) {
    const el = this.elements.find(e => e.id === this.selectedElementId)
    if (!el) return
    if (!this.dragRecorded) {
      this.saveState()
      this.dragRecorded = true
    }
    // Move by the delta since the last event, so the element follows the
    // cursor instead of snapping its origin onto it.
    this.moveElement(el, worldPt.x - this.dragAnchor.x, worldPt.y - this.dragAnchor.y)
    this.dragAnchor = { ...worldPt }
    this.markContentChanged()
  }

  private moveElement(el: WhiteboardElement, dx: number, dy: number) {
    if (el.type === 'path') {
      for (const p of el.points) {
        p.x += dx
        p.y += dy
      }
    } else {
      el.x += dx
      el.y += dy
    }
  }

  // --- Hit testing ---

  private strokeWidthOf(el: WhiteboardElement) {
    return el.type === 'text' ? 0 : el.style.width
  }

  private getBounds(el: WhiteboardElement): Bounds {
    if (el.type === 'shape') {
      const pad = el.style.width / 2
      const r = normalize(el.x, el.y, el.w, el.h)
      return { x: r.x - pad, y: r.y - pad, w: r.w + pad * 2, h: r.h + pad * 2 }
    }

    if (el.type === 'text') {
      this.ctx.save()
      this.ctx.font = this.fontFor(el)
      const width = this.ctx.measureText(el.text).width
      this.ctx.restore()
      // Text is painted with textBaseline 'top', so the box grows downward —
      // the old hit box grew upward and never matched what was on screen.
      return { x: el.x, y: el.y, w: width, h: el.fontSize * 1.25 }
    }

    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity
    for (const p of el.points) {
      if (p.x < minX) minX = p.x
      if (p.y < minY) minY = p.y
      if (p.x > maxX) maxX = p.x
      if (p.y > maxY) maxY = p.y
    }
    if (minX === Infinity) return { x: 0, y: 0, w: 0, h: 0 }
    const pad = el.style.width / 2
    return { x: minX - pad, y: minY - pad, w: maxX - minX + pad * 2, h: maxY - minY + pad * 2 }
  }

  /** Distance from a point to the element's actual ink, not its bounding box. */
  private distanceToInk(pt: Point, el: WhiteboardElement): number {
    if (el.type === 'path') {
      const pts = el.points
      const first = pts[0]
      if (!first) return Infinity
      if (pts.length === 1) return Math.hypot(pt.x - first.x, pt.y - first.y)

      let best = Infinity
      for (let i = 1; i < pts.length; i++) {
        const a = pts[i - 1]
        const b = pts[i]
        if (!a || !b) continue
        const d = distToSegment(pt, a, b)
        if (d < best) best = d
        if (best === 0) break
      }
      return best
    }

    if (el.type === 'shape') {
      if (el.shapeType === 'line' || el.shapeType === 'arrow') {
        return distToSegment(pt, { x: el.x, y: el.y }, { x: el.x + el.w, y: el.y + el.h })
      }
      const r = normalize(el.x, el.y, el.w, el.h)
      if (el.shapeType === 'rect') {
        const corners: Point[] = [
          { x: r.x, y: r.y },
          { x: r.x + r.w, y: r.y },
          { x: r.x + r.w, y: r.y + r.h },
          { x: r.x, y: r.y + r.h }
        ]
        let best = Infinity
        for (let i = 0; i < 4; i++) {
          const a = corners[i]
          const b = corners[(i + 1) % 4]
          if (!a || !b) continue
          const d = distToSegment(pt, a, b)
          if (d < best) best = d
        }
        return best
      }
      // Ellipse: closest point on the outline, close enough for erasing.
      const cx = r.x + r.w / 2
      const cy = r.y + r.h / 2
      const rx = Math.max(r.w / 2, 0.001)
      const ry = Math.max(r.h / 2, 0.001)
      const angle = Math.atan2((pt.y - cy) / ry, (pt.x - cx) / rx)
      return Math.hypot(pt.x - (cx + rx * Math.cos(angle)), pt.y - (cy + ry * Math.sin(angle)))
    }

    // Text erases as a solid box.
    const b = this.getBounds(el)
    const dx = Math.max(b.x - pt.x, 0, pt.x - (b.x + b.w))
    const dy = Math.max(b.y - pt.y, 0, pt.y - (b.y + b.h))
    return Math.hypot(dx, dy)
  }

  /**
   * Scrub-erase against the ink itself. The old version used the bounding
   * box, so brushing anywhere inside a big rectangle deleted the whole thing.
   */
  private eraseAt(worldPt: Point) {
    const radius = this.getEraserRadius()
    const kept = this.elements.filter(
      el => this.distanceToInk(worldPt, el) > radius + this.strokeWidthOf(el) / 2
    )
    if (kept.length !== this.elements.length) {
      this.elements = kept
      this.markContentChanged()
    }
  }

  public getContentBounds(): Bounds | null {
    if (this.elements.length === 0) return null
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity
    for (const el of this.elements) {
      const b = this.getBounds(el)
      minX = Math.min(minX, b.x)
      minY = Math.min(minY, b.y)
      maxX = Math.max(maxX, b.x + b.w)
      maxY = Math.max(maxY, b.y + b.h)
    }
    if (minX === Infinity) return null
    return { x: minX, y: minY, w: maxX - minX, h: maxY - minY }
  }

  // --- Export ---

  /**
   * Export just the ink, cropped to what was actually drawn and rendered at
   * `scale` device pixels — not a screenshot of the current viewport.
   */
  public exportPNG(scale = 2): string | null {
    const bounds = this.getContentBounds()
    const pad = 48

    const out = document.createElement('canvas')
    const ctx = out.getContext('2d')
    if (!ctx) return null

    const width = bounds ? bounds.w + pad * 2 : this.cssWidth
    const height = bounds ? bounds.h + pad * 2 : this.cssHeight
    if (width <= 0 || height <= 0) return null

    out.width = Math.ceil(width * scale)
    out.height = Math.ceil(height * scale)
    ctx.setTransform(scale, 0, 0, scale, 0, 0)

    ctx.fillStyle = BOARD_PALETTES[this.theme].paper
    ctx.fillRect(0, 0, width, height)

    if (bounds) ctx.translate(-bounds.x + pad, -bounds.y + pad)
    this.paintElements(ctx, this.elements, false)

    return out.toDataURL('image/png')
  }

  // --- Rendering ---

  private render() {
    this.animationFrameId = requestAnimationFrame(this.render)
    // The laser trail animates on its own; everything else repaints on demand.
    if (!this.dirty && this.laserTrail.length === 0) return
    this.dirty = false
    this.draw()
  }

  private draw() {
    if (this.cssWidth === 0 || this.cssHeight === 0) return
    if (!this.cacheValid) this.rebuildCache()

    const ctx = this.ctx
    ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0)
    ctx.clearRect(0, 0, this.cssWidth, this.cssHeight)

    // Everything already committed arrives as a single blit.
    ctx.drawImage(this.cache, 0, 0, this.cssWidth, this.cssHeight)

    // The stroke in progress, painted on top.
    const live: WhiteboardElement | null = this.currentPath ?? this.currentShape
    if (live) {
      ctx.save()
      this.applyWorldTransform(ctx)
      if (live.type === 'path' && live.isHighlighter && !this.transparent) {
        ctx.globalCompositeOperation = this.highlighterBlend()
      }
      this.paintElement(ctx, live)
      ctx.restore()
    }

    if (this.selectedElementId) {
      const el = this.elements.find(e => e.id === this.selectedElementId)
      if (el) {
        ctx.save()
        this.applyWorldTransform(ctx)
        this.paintSelection(ctx, this.getBounds(el))
        ctx.restore()
      }
    }

    // Screen-space overlays.
    this.paintEraserRing(ctx)
    this.paintLaser(ctx)
  }

  private applyWorldTransform(ctx: Ctx2D) {
    ctx.translate(this.view.x, this.view.y - this.scrollOffset)
    ctx.scale(this.view.scale, this.view.scale)
  }

  private rebuildCache() {
    const ctx = this.cacheCtx
    ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0)
    ctx.clearRect(0, 0, this.cssWidth, this.cssHeight)

    if (!this.transparent) {
      ctx.fillStyle = BOARD_PALETTES[this.theme].paper
      ctx.fillRect(0, 0, this.cssWidth, this.cssHeight)
      this.paintBackground(ctx)
    }

    ctx.save()
    this.applyWorldTransform(ctx)
    this.paintElements(ctx, this.elements, !this.transparent)
    ctx.restore()

    this.cacheValid = true
  }

  private paintElements(ctx: Ctx2D, elements: WhiteboardElement[], blendHighlighter: boolean) {
    // Highlighter goes behind the ink and multiplies into it, the way a real
    // marker does — but only over opaque paper; on the transparent overlay
    // 'multiply' has no backdrop to blend with.
    const highlighters = elements.filter(e => e.type === 'path' && e.isHighlighter)
    const rest = elements.filter(e => !(e.type === 'path' && e.isHighlighter))

    if (highlighters.length) {
      ctx.save()
      ctx.globalCompositeOperation = blendHighlighter ? this.highlighterBlend() : 'source-over'
      for (const el of highlighters) this.paintElement(ctx, el)
      ctx.restore()
    }

    for (const el of rest) this.paintElement(ctx, el)
  }

  private paintBackground(ctx: Ctx2D) {
    const palette = BOARD_PALETTES[this.theme]
    const step = 40 * this.view.scale
    if (step < 6) return // too dense to read; skip it

    // Modulo can go negative once the view is panned left or up.
    const offsetX = ((this.view.x % step) + step) % step
    const offsetY = (((this.view.y - this.scrollOffset) % step) + step) % step

    ctx.save()
    if (this.background === 'grid' || this.background === 'lines') {
      ctx.strokeStyle = palette.grid
      ctx.lineWidth = 1
      ctx.beginPath()
      for (let y = offsetY; y < this.cssHeight; y += step) {
        ctx.moveTo(0, y)
        ctx.lineTo(this.cssWidth, y)
      }
      if (this.background === 'grid') {
        for (let x = offsetX; x < this.cssWidth; x += step) {
          ctx.moveTo(x, 0)
          ctx.lineTo(x, this.cssHeight)
        }
      }
      ctx.stroke()
    } else if (this.background === 'dots') {
      ctx.fillStyle = palette.dot
      const r = clamp(1.6 * this.view.scale, 1, 3)
      for (let y = offsetY; y < this.cssHeight; y += step) {
        for (let x = offsetX; x < this.cssWidth; x += step) {
          ctx.beginPath()
          ctx.arc(x, y, r, 0, Math.PI * 2)
          ctx.fill()
        }
      }
    }
    ctx.restore()
  }

  /**
   * 'multiply' is what a marker does to white paper, but on a blackboard it
   * just paints a black smear — there the highlight has to lighten instead.
   */
  private highlighterBlend(): GlobalCompositeOperation {
    return this.theme === 'dark' ? 'screen' : 'multiply'
  }

  private fontFor(el: TextElement) {
    return `${el.isBold ? 'bold ' : ''}${el.fontSize}px ${el.fontFamily}`
  }

  private paintElement(ctx: Ctx2D, el: WhiteboardElement) {
    ctx.save()
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'

    if (el.type === 'path') {
      this.paintPath(ctx, el)
    } else if (el.type === 'shape') {
      this.paintShape(ctx, el)
    } else {
      ctx.fillStyle = el.color
      ctx.font = this.fontFor(el)
      ctx.textBaseline = 'top'
      ctx.fillText(el.text, el.x, el.y)
    }

    ctx.restore()
  }

  private paintPath(ctx: Ctx2D, el: PathElement) {
    const pts = el.points
    const first = pts[0]
    const last = pts[pts.length - 1]
    if (!first || !last) return

    ctx.globalAlpha = el.style.opacity
    ctx.strokeStyle = el.style.color

    if (pts.length === 1) {
      ctx.fillStyle = el.style.color
      ctx.beginPath()
      ctx.arc(first.x, first.y, Math.max(el.style.width / 2, 0.5), 0, Math.PI * 2)
      ctx.fill()
      return
    }

    const tapered = !el.isHighlighter && pts.some(p => p.p !== undefined && p.p !== 1)

    if (!tapered) {
      // One smooth quadratic run through the midpoints: no polyline corners.
      ctx.lineWidth = el.style.width
      ctx.beginPath()
      ctx.moveTo(first.x, first.y)
      for (let i = 1; i < pts.length - 1; i++) {
        const c = pts[i]
        const n = pts[i + 1]
        if (!c || !n) continue
        const m = mid(c, n)
        ctx.quadraticCurveTo(c.x, c.y, m.x, m.y)
      }
      ctx.lineTo(last.x, last.y)
      ctx.stroke()
      return
    }

    // Pressure varies along the stroke, so each segment gets its own width.
    // Round caps make the overlapping segments read as one continuous line.
    for (let i = 1; i < pts.length; i++) {
      const a = pts[i - 1]
      const b = pts[i]
      if (!a || !b) continue
      ctx.lineWidth = Math.max(el.style.width * (((a.p ?? 1) + (b.p ?? 1)) / 2), 0.4)
      ctx.beginPath()
      ctx.moveTo(a.x, a.y)
      ctx.lineTo(b.x, b.y)
      ctx.stroke()
    }
  }

  private paintShape(ctx: Ctx2D, el: ShapeElement) {
    ctx.strokeStyle = el.style.color
    ctx.lineWidth = el.style.width
    ctx.globalAlpha = el.style.opacity

    if (el.shapeType === 'rect') {
      const r = normalize(el.x, el.y, el.w, el.h)
      const radius = Math.max(Math.min(6, r.w / 2, r.h / 2), 0)
      ctx.beginPath()
      if (radius > 1 && typeof (ctx as any).roundRect === 'function') {
        ;(ctx as any).roundRect(r.x, r.y, r.w, r.h, radius)
      } else {
        ctx.rect(r.x, r.y, r.w, r.h)
      }
      ctx.stroke()
      return
    }

    if (el.shapeType === 'circle') {
      // The drag box is the ellipse's bounding box — dragging a wide box now
      // gives a wide oval instead of a circle centred on the first click.
      const r = normalize(el.x, el.y, el.w, el.h)
      ctx.beginPath()
      ctx.ellipse(r.x + r.w / 2, r.y + r.h / 2, r.w / 2, r.h / 2, 0, 0, Math.PI * 2)
      ctx.stroke()
      return
    }

    const endX = el.x + el.w
    const endY = el.y + el.h
    ctx.beginPath()
    ctx.moveTo(el.x, el.y)
    ctx.lineTo(endX, endY)
    ctx.stroke()

    if (el.shapeType === 'arrow') {
      const angle = Math.atan2(el.h, el.w)
      const headLen = clamp(el.style.width * 4, 12, 34)
      ctx.beginPath()
      ctx.moveTo(endX, endY)
      ctx.lineTo(endX - headLen * Math.cos(angle - Math.PI / 7), endY - headLen * Math.sin(angle - Math.PI / 7))
      ctx.lineTo(endX - headLen * Math.cos(angle + Math.PI / 7), endY - headLen * Math.sin(angle + Math.PI / 7))
      ctx.closePath()
      ctx.fillStyle = el.style.color
      ctx.fill()
    }
  }

  private paintSelection(ctx: Ctx2D, b: Bounds) {
    const palette = BOARD_PALETTES[this.theme]
    const pad = 8 / this.view.scale
    ctx.save()
    ctx.strokeStyle = palette.selection
    ctx.lineWidth = 1.5 / this.view.scale
    ctx.setLineDash([6 / this.view.scale, 4 / this.view.scale])
    ctx.strokeRect(b.x - pad, b.y - pad, b.w + pad * 2, b.h + pad * 2)

    ctx.setLineDash([])
    ctx.fillStyle = palette.selection
    const handle = 4 / this.view.scale
    const corners: [number, number][] = [
      [b.x - pad, b.y - pad],
      [b.x + b.w + pad, b.y - pad],
      [b.x - pad, b.y + b.h + pad],
      [b.x + b.w + pad, b.y + b.h + pad]
    ]
    for (const [hx, hy] of corners) {
      ctx.beginPath()
      ctx.arc(hx, hy, handle, 0, Math.PI * 2)
      ctx.fill()
    }
    ctx.restore()
  }

  private paintEraserRing(ctx: Ctx2D) {
    if (this.activeTool !== 'eraser' || !this.hoverPoint) return
    const r = this.getEraserRadius() * this.view.scale
    ctx.save()
    ctx.beginPath()
    ctx.arc(this.hoverPoint.x, this.hoverPoint.y, r, 0, Math.PI * 2)
    ctx.fillStyle = this.theme === 'dark' ? 'rgba(255,255,255,0.10)' : 'rgba(41,38,56,0.06)'
    ctx.fill()
    ctx.lineWidth = 1.5
    ctx.strokeStyle = this.theme === 'dark' ? 'rgba(255,255,255,0.55)' : 'rgba(41,38,56,0.45)'
    ctx.stroke()
    ctx.restore()
  }

  private paintLaser(ctx: Ctx2D) {
    if (this.activeTool !== 'laser' || this.laserTrail.length === 0) return

    const now = performance.now()
    // Drop expired samples; the render loop keeps ticking while any survive.
    let oldest = this.laserTrail[0]
    while (oldest && now - oldest.t > LASER_TRAIL_MS) {
      this.laserTrail.shift()
      oldest = this.laserTrail[0]
    }
    const head = this.laserTrail[this.laserTrail.length - 1]
    if (!head) return

    ctx.save()
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'

    // Comet tail: older samples are thinner and fainter, which makes a quick
    // gesture readable from the back of the room.
    for (let i = 1; i < this.laserTrail.length; i++) {
      const a = this.laserTrail[i - 1]
      const b = this.laserTrail[i]
      if (!a || !b) continue
      const life = 1 - (now - b.t) / LASER_TRAIL_MS
      if (life <= 0) continue
      ctx.globalAlpha = life * 0.55
      ctx.lineWidth = 2 + life * 5
      ctx.strokeStyle = '#EF4444'
      ctx.beginPath()
      ctx.moveTo(a.x, a.y)
      ctx.lineTo(b.x, b.y)
      ctx.stroke()
    }

    ctx.globalAlpha = 1

    // Soft halo, so the dot carries across a projector without a hard edge.
    const glow = ctx.createRadialGradient(head.x, head.y, 0, head.x, head.y, 20)
    glow.addColorStop(0, 'rgba(239, 68, 68, 0.5)')
    glow.addColorStop(0.5, 'rgba(239, 68, 68, 0.16)')
    glow.addColorStop(1, 'rgba(239, 68, 68, 0)')
    ctx.fillStyle = glow
    ctx.beginPath()
    ctx.arc(head.x, head.y, 20, 0, Math.PI * 2)
    ctx.fill()

    ctx.beginPath()
    ctx.arc(head.x, head.y, 6, 0, Math.PI * 2)
    ctx.fillStyle = '#EF4444'
    ctx.fill()

    // A hairline rim keeps the dot legible on a dark code block too.
    ctx.lineWidth = 1.5
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.85)'
    ctx.stroke()

    ctx.restore()
  }
}
