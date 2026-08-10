import type { 
  WhiteboardElement, WhiteboardTool, BackgroundType, Point, StrokeStyle, PathElement, ShapeElement, TextElement, ShapeType
} from '~/app/types/whiteboard'

export class WhiteboardEngine {
  private canvas: HTMLCanvasElement
  private ctx: CanvasRenderingContext2D
  
  // State
  private elements: WhiteboardElement[] = []
  private historyStack: WhiteboardElement[][] = []
  private redoStack: WhiteboardElement[][] = []
  
  private view = { x: 0, y: 0, scale: 1 }
  private background: BackgroundType = 'plain'
  
  // Tool state
  private activeTool: WhiteboardTool = 'pen'
  private currentColor: string = '#292638'
  private currentWidth: number = 4
  
  // Interaction state
  private isDrawing = false
  private isPanning = false
  private currentPath: PathElement | null = null
  private currentShape: ShapeElement | null = null
  
  private lastPointer: Point = { x: 0, y: 0 }
  
  // Laser
  private laserPointer: Point | null = null
  private laserTrail: Point[] = []
  
  // Selection
  private selectedElementId: string | null = null
  private dragOffset: Point = { x: 0, y: 0 }

  // Callbacks
  public onTextRequest?: (x: number, y: number) => void
  public onSelectionChange?: (id: string | null) => void

  private animationFrameId: number = 0

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas
    const ctx = canvas.getContext('2d', { alpha: false })
    if (!ctx) throw new Error('Could not get 2d context')
    this.ctx = ctx
    
    this.resize = this.resize.bind(this)
    this.render = this.render.bind(this)
    
    this.setupEvents()
    window.addEventListener('resize', this.resize)
    this.resize()
  }

  public start() {
    this.render()
  }

  public stop() {
    cancelAnimationFrame(this.animationFrameId)
    window.removeEventListener('resize', this.resize)
    this.removeEvents()
  }

  private resize() {
    const rect = this.canvas.parentElement?.getBoundingClientRect()
    if (rect) {
      this.canvas.width = rect.width
      this.canvas.height = rect.height
    }
  }

  // --- API ---

  public setTool(tool: WhiteboardTool) {
    this.activeTool = tool
    this.selectedElementId = null
    if (this.onSelectionChange) this.onSelectionChange(null)
  }

  public setColor(color: string) {
    this.currentColor = color
  }

  public setWidth(width: number) {
    this.currentWidth = width
  }

  public setBackground(bg: BackgroundType) {
    this.background = bg
  }

  public undo() {
    if (this.historyStack.length > 0) {
      this.redoStack.push(JSON.parse(JSON.stringify(this.elements)))
      this.elements = this.historyStack.pop()!
    }
  }

  public redo() {
    if (this.redoStack.length > 0) {
      this.historyStack.push(JSON.parse(JSON.stringify(this.elements)))
      this.elements = this.redoStack.pop()!
    }
  }

  public clear() {
    this.saveState()
    this.elements = []
  }

  public getElements() {
    return this.elements
  }

  public loadElements(elements: WhiteboardElement[]) {
    this.elements = elements
    this.historyStack = []
    this.redoStack = []
  }

  public addText(text: string, x: number, y: number, color: string, fontSize: number, fontFamily: string = 'Cairo, sans-serif', isBold: boolean = false) {
    if (!text.trim()) return
    this.saveState()
    
    // Convert screen coordinates to world coordinates
    const worldX = (x - this.view.x) / this.view.scale
    const worldY = (y - this.view.y) / this.view.scale

    const textEl: TextElement = {
      id: crypto.randomUUID(),
      type: 'text',
      text,
      x: worldX,
      y: worldY,
      color,
      fontSize,
      fontFamily,
      isBold
    }
    this.elements.push(textEl)
  }
  
  public setZoom(level: number) {
     // zoom towards center
     const centerX = this.canvas.width / 2;
     const centerY = this.canvas.height / 2;
     
     // world pos of center
     const worldX = (centerX - this.view.x) / this.view.scale;
     const worldY = (centerY - this.view.y) / this.view.scale;
     
     this.view.scale = level;
     
     // adjust view x, y so world pos stays at center
     this.view.x = centerX - worldX * this.view.scale;
     this.view.y = centerY - worldY * this.view.scale;
  }
  
  public resetZoom() {
      this.view.scale = 1;
      this.view.x = 0;
      this.view.y = 0;
  }

  // --- Events ---

  private setupEvents() {
    this.canvas.addEventListener('pointerdown', this.onPointerDown)
    this.canvas.addEventListener('pointermove', this.onPointerMove)
    this.canvas.addEventListener('pointerup', this.onPointerUp)
    this.canvas.addEventListener('pointerleave', this.onPointerLeave)
    this.canvas.addEventListener('wheel', this.onWheel, { passive: false })
  }

  private removeEvents() {
    this.canvas.removeEventListener('pointerdown', this.onPointerDown)
    this.canvas.removeEventListener('pointermove', this.onPointerMove)
    this.canvas.removeEventListener('pointerup', this.onPointerUp)
    this.canvas.removeEventListener('pointerleave', this.onPointerLeave)
    this.canvas.removeEventListener('wheel', this.onWheel)
  }

  private getWorldPoint(e: PointerEvent): Point {
    const rect = this.canvas.getBoundingClientRect()
    const screenX = e.clientX - rect.left
    const screenY = e.clientY - rect.top
    return {
      x: (screenX - this.view.x) / this.view.scale,
      y: (screenY - this.view.y) / this.view.scale
    }
  }

  private saveState() {
    this.historyStack.push(JSON.parse(JSON.stringify(this.elements)))
    this.redoStack = []
  }

  private onPointerDown = (e: PointerEvent) => {
    // Prevent default touch actions like scroll
    if (e.pointerType === 'touch') {
      this.canvas.setPointerCapture(e.pointerId)
    }

    // Two finger pan or middle click or space+click (assume simple pan for right/middle mouse for now)
    if (e.button === 1 || e.button === 2) {
      this.isPanning = true
      this.lastPointer = { x: e.clientX, y: e.clientY }
      return
    }

    const worldPt = this.getWorldPoint(e)

    if (this.activeTool === 'text') {
      if (this.onTextRequest) {
        this.onTextRequest(e.clientX, e.clientY)
      }
      return
    }

    if (this.activeTool === 'laser') {
      this.laserPointer = worldPt
      this.laserTrail = [worldPt]
      this.isDrawing = true
      return
    }

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
    this.saveState()

    const style: StrokeStyle = {
      color: this.currentColor,
      width: this.currentWidth,
      opacity: this.activeTool === 'highlighter' ? 0.3 : 1
    }

    if (['pen', 'highlighter'].includes(this.activeTool)) {
      this.currentPath = {
        id: crypto.randomUUID(),
        type: 'path',
        points: [worldPt],
        style,
        isHighlighter: this.activeTool === 'highlighter'
      }
      this.elements.push(this.currentPath)
    } else if (['line', 'arrow', 'rect', 'circle'].includes(this.activeTool)) {
      this.currentShape = {
        id: crypto.randomUUID(),
        type: 'shape',
        shapeType: this.activeTool as ShapeType,
        x: worldPt.x,
        y: worldPt.y,
        w: 0,
        h: 0,
        style
      }
      this.elements.push(this.currentShape)
    }
  }

  private onPointerMove = (e: PointerEvent) => {
    if (this.isPanning) {
      const dx = e.clientX - this.lastPointer.x
      const dy = e.clientY - this.lastPointer.y
      this.view.x += dx
      this.view.y += dy
      this.lastPointer = { x: e.clientX, y: e.clientY }
      return
    }

    const worldPt = this.getWorldPoint(e)

    if (this.activeTool === 'laser' && this.isDrawing) {
      this.laserPointer = worldPt
      this.laserTrail.push(worldPt)
      if (this.laserTrail.length > 20) this.laserTrail.shift()
      return
    }

    if (this.activeTool === 'eraser' && this.isDrawing) {
      this.eraseAt(worldPt)
      return
    }

    if (this.activeTool === 'select' && this.selectedElementId && this.isDrawing) {
      this.handleSelectMove(worldPt)
      return
    }

    if (!this.isDrawing) return

    if (this.currentPath) {
      this.currentPath.points.push(worldPt)
    } else if (this.currentShape) {
      this.currentShape.w = worldPt.x - this.currentShape.x
      this.currentShape.h = worldPt.y - this.currentShape.y
    }
  }

  private onPointerUp = (e: PointerEvent) => {
    this.isDrawing = false
    this.isPanning = false
    this.currentPath = null
    this.currentShape = null
    
    if (this.activeTool === 'laser') {
       this.laserPointer = null
       this.laserTrail = []
    }

    if (e.pointerType === 'touch') {
      this.canvas.releasePointerCapture(e.pointerId)
    }
  }

  private onPointerLeave = (e: PointerEvent) => {
    this.onPointerUp(e)
  }

  private onWheel = (e: WheelEvent) => {
    e.preventDefault()
    if (e.ctrlKey) {
      // Pinch to zoom
      const zoomSensitivity = 0.001
      const delta = -e.deltaY * zoomSensitivity
      const zoom = Math.exp(delta)
      
      const rect = this.canvas.getBoundingClientRect()
      const mx = e.clientX - rect.left
      const my = e.clientY - rect.top
      
      const newScale = this.view.scale * zoom
      // clamp scale
      if (newScale < 0.1 || newScale > 5) return

      this.view.x = mx - (mx - this.view.x) * zoom
      this.view.y = my - (my - this.view.y) * zoom
      this.view.scale = newScale
    } else {
      // Pan
      this.view.x -= e.deltaX
      this.view.y -= e.deltaY
    }
  }

  // --- Logic ---

  private handleSelectStart(worldPt: Point) {
    this.isDrawing = true
    // Find clicked element (reverse order for top-most)
    for (let i = this.elements.length - 1; i >= 0; i--) {
      const el = this.elements[i]
      if (this.isPointInElement(worldPt, el)) {
        this.selectedElementId = el.id
        if (this.onSelectionChange) this.onSelectionChange(el.id)
        
        // Calculate drag offset
        let elX = 0, elY = 0
        if (el.type === 'shape' || el.type === 'text') {
           elX = el.x; elY = el.y;
        } else if (el.type === 'path' && el.points.length > 0) {
           elX = el.points[0].x; elY = el.points[0].y;
        }
        this.dragOffset = { x: worldPt.x - elX, y: worldPt.y - elY }
        return
      }
    }
    this.selectedElementId = null
    if (this.onSelectionChange) this.onSelectionChange(null)
  }

  private handleSelectMove(worldPt: Point) {
    const el = this.elements.find(e => e.id === this.selectedElementId)
    if (!el) return

    const newX = worldPt.x - this.dragOffset.x
    const newY = worldPt.y - this.dragOffset.y

    if (el.type === 'shape' || el.type === 'text') {
      const dx = newX - el.x
      const dy = newY - el.y
      el.x = newX
      el.y = newY
      if (el.type === 'shape') {
          // don't change w/h for simple move
      }
    } else if (el.type === 'path') {
      const dx = newX - el.points[0].x
      const dy = newY - el.points[0].y
      for (const p of el.points) {
        p.x += dx
        p.y += dy
      }
    }
  }

  private isPointInElement(pt: Point, el: WhiteboardElement, padding = 10): boolean {
    if (el.type === 'shape') {
       const minX = Math.min(el.x, el.x + el.w) - padding
       const maxX = Math.max(el.x, el.x + el.w) + padding
       const minY = Math.min(el.y, el.y + el.h) - padding
       const maxY = Math.max(el.y, el.y + el.h) + padding
       return pt.x >= minX && pt.x <= maxX && pt.y >= minY && pt.y <= maxY
    } else if (el.type === 'text') {
       // approximate text bounds
       const w = el.text.length * (el.fontSize * 0.6)
       const h = el.fontSize
       return pt.x >= el.x && pt.x <= el.x + w && pt.y >= el.y - h && pt.y <= el.y
    } else if (el.type === 'path') {
       for (const p of el.points) {
         if (Math.abs(p.x - pt.x) < padding && Math.abs(p.y - pt.y) < padding) return true
       }
    }
    return false
  }

  private eraseAt(worldPt: Point) {
    const eraserRadius = 20 / this.view.scale
    this.elements = this.elements.filter(el => {
      return !this.isPointInElement(worldPt, el, eraserRadius)
    })
  }

  // --- Rendering ---

  private render() {
    this.ctx.fillStyle = '#FCFBF8' // Or based on theme
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)

    this.renderBackground()

    this.ctx.save()
    this.ctx.translate(this.view.x, this.view.y)
    this.ctx.scale(this.view.scale, this.view.scale)

    // Separate highlighter strokes (behind) and normal strokes (front)
    const highlighters = this.elements.filter(e => e.type === 'path' && e.isHighlighter)
    const others = this.elements.filter(e => !(e.type === 'path' && e.isHighlighter))

    this.ctx.globalCompositeOperation = 'multiply'
    for (const el of highlighters) this.renderElement(el)
    
    this.ctx.globalCompositeOperation = 'source-over'
    for (const el of others) this.renderElement(el)

    // Render Laser
    if (this.laserPointer && this.laserTrail.length > 0) {
      this.ctx.beginPath()
      this.ctx.moveTo(this.laserTrail[0].x, this.laserTrail[0].y)
      for (let i = 1; i < this.laserTrail.length; i++) {
        this.ctx.lineTo(this.laserTrail[i].x, this.laserTrail[i].y)
      }
      this.ctx.strokeStyle = 'rgba(255, 0, 0, 0.5)'
      this.ctx.lineWidth = 4 / this.view.scale
      this.ctx.lineCap = 'round'
      this.ctx.lineJoin = 'round'
      this.ctx.stroke()

      this.ctx.beginPath()
      this.ctx.arc(this.laserPointer.x, this.laserPointer.y, 6 / this.view.scale, 0, Math.PI * 2)
      this.ctx.fillStyle = 'red'
      this.ctx.fill()
      this.ctx.shadowColor = 'red'
      this.ctx.shadowBlur = 10
      this.ctx.fill()
      this.ctx.shadowBlur = 0
    }

    this.ctx.restore()

    this.animationFrameId = requestAnimationFrame(this.render)
  }

  private renderBackground() {
    this.ctx.save()
    this.ctx.strokeStyle = 'rgba(0,0,0,0.05)'
    this.ctx.lineWidth = 1

    const scaledGridSize = 40 * this.view.scale
    const offsetX = this.view.x % scaledGridSize
    const offsetY = this.view.y % scaledGridSize

    if (this.background === 'grid' || this.background === 'lines') {
      this.ctx.beginPath()
      // Horizontal lines
      for (let y = offsetY; y < this.canvas.height; y += scaledGridSize) {
        this.ctx.moveTo(0, y)
        this.ctx.lineTo(this.canvas.width, y)
      }
      if (this.background === 'grid') {
        // Vertical lines
        for (let x = offsetX; x < this.canvas.width; x += scaledGridSize) {
          this.ctx.moveTo(x, 0)
          this.ctx.lineTo(x, this.canvas.height)
        }
      }
      this.ctx.stroke()
    } else if (this.background === 'dots') {
      this.ctx.fillStyle = 'rgba(0,0,0,0.1)'
      for (let y = offsetY; y < this.canvas.height; y += scaledGridSize) {
        for (let x = offsetX; x < this.canvas.width; x += scaledGridSize) {
          this.ctx.beginPath()
          this.ctx.arc(x, y, 2, 0, Math.PI * 2)
          this.ctx.fill()
        }
      }
    }
    this.ctx.restore()
  }

  private renderElement(el: WhiteboardElement) {
    this.ctx.save()
    if (el.id === this.selectedElementId) {
       this.ctx.shadowColor = '#7C6AE6'
       this.ctx.shadowBlur = 10
    }

    if (el.type === 'path') {
      if (el.points.length === 0) { this.ctx.restore(); return }
      this.ctx.beginPath()
      this.ctx.moveTo(el.points[0].x, el.points[0].y)
      for (let i = 1; i < el.points.length; i++) {
        this.ctx.lineTo(el.points[i].x, el.points[i].y)
      }
      this.ctx.strokeStyle = el.style.color
      this.ctx.lineWidth = el.style.width
      this.ctx.globalAlpha = el.style.opacity
      this.ctx.lineCap = 'round'
      this.ctx.lineJoin = 'round'
      this.ctx.stroke()
    } else if (el.type === 'shape') {
      this.ctx.strokeStyle = el.style.color
      this.ctx.lineWidth = el.style.width
      this.ctx.globalAlpha = el.style.opacity
      this.ctx.lineCap = 'round'
      this.ctx.lineJoin = 'round'
      
      this.ctx.beginPath()
      if (el.shapeType === 'rect') {
        this.ctx.strokeRect(el.x, el.y, el.w, el.h)
      } else if (el.shapeType === 'circle') {
        const r = Math.sqrt(el.w * el.w + el.h * el.h)
        this.ctx.arc(el.x, el.y, r, 0, Math.PI * 2)
        this.ctx.stroke()
      } else if (el.shapeType === 'line') {
        this.ctx.moveTo(el.x, el.y)
        this.ctx.lineTo(el.x + el.w, el.y + el.h)
        this.ctx.stroke()
      } else if (el.shapeType === 'arrow') {
        this.ctx.moveTo(el.x, el.y)
        this.ctx.lineTo(el.x + el.w, el.y + el.h)
        this.ctx.stroke()
        // Draw arrowhead
        const angle = Math.atan2(el.h, el.w)
        const headLen = 15
        this.ctx.beginPath()
        this.ctx.moveTo(el.x + el.w, el.y + el.h)
        this.ctx.lineTo(el.x + el.w - headLen * Math.cos(angle - Math.PI / 6), el.y + el.h - headLen * Math.sin(angle - Math.PI / 6))
        this.ctx.lineTo(el.x + el.w - headLen * Math.cos(angle + Math.PI / 6), el.y + el.h - headLen * Math.sin(angle + Math.PI / 6))
        this.ctx.closePath()
        this.ctx.fillStyle = el.style.color
        this.ctx.fill()
      }
    } else if (el.type === 'text') {
      this.ctx.fillStyle = el.color
      this.ctx.font = `${el.isBold ? 'bold' : ''} ${el.fontSize}px ${el.fontFamily}`
      this.ctx.textBaseline = 'top'
      this.ctx.fillText(el.text, el.x, el.y)
    }

    this.ctx.restore()
  }
}
