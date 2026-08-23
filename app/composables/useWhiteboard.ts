import { ref, shallowRef } from 'vue'
import type { WhiteboardTool, BackgroundType, BoardTheme, WhiteboardMode } from '~/types/whiteboard'
import { BOARD_PALETTES, type WhiteboardEngine } from './whiteboard/Engine'

const isOpen = ref(false)
const mode = ref<WhiteboardMode>('board')
const isPassThrough = ref(false)
const currentTool = ref<WhiteboardTool>('pen')
const currentColor = ref(BOARD_PALETTES.light.ink)
const currentWidth = ref(4)
const currentFontSize = ref(28)
const currentBackground = ref<BackgroundType>('plain')
const currentTheme = ref<BoardTheme>('light')
const zoom = ref(1)
const hasSelection = ref(false)
const canUndo = ref(false)
const canRedo = ref(false)
const engine = shallowRef<WhiteboardEngine | null>(null)

/** Stroke widths, shared by the toolbar and the `[` / `]` shortcuts. */
export const WIDTH_STEPS = [2, 4, 6, 10, 16]

/** The ink colours offered for each board theme. First entry is the default. */
export const INK_PALETTES: Record<BoardTheme, string[]> = {
  light: ['#292638', '#EF4444', '#3B82F6', '#10B981', '#8B5CF6', '#F97316', '#000000'],
  dark: ['#F6F4EF', '#FCA5A5', '#7DD3FC', '#6EE7B7', '#C4B5FD', '#FDBA74', '#FDE047']
}

export const useWhiteboard = () => {
  const openWhiteboard = (newMode: WhiteboardMode = 'board') => {
    mode.value = newMode
    isPassThrough.value = false
    isOpen.value = true
  }

  const closeWhiteboard = () => {
    isOpen.value = false
    isPassThrough.value = false
  }

  const toggleWhiteboard = () => {
    if (isOpen.value) closeWhiteboard()
    else openWhiteboard('board')
  }

  // Write directly on top of the current page
  const toggleAnnotate = () => {
    if (isOpen.value && mode.value === 'annotate') closeWhiteboard()
    else openWhiteboard('annotate')
  }

  const setMode = (newMode: WhiteboardMode) => {
    mode.value = newMode
    isPassThrough.value = false
  }

  // Let clicks/scroll reach the page while the annotations stay visible
  const togglePassThrough = () => {
    isPassThrough.value = !isPassThrough.value
  }

  const setTool = (tool: WhiteboardTool) => {
    currentTool.value = tool
    engine.value?.setTool(tool)
  }

  const setColor = (color: string) => {
    currentColor.value = color
    engine.value?.setColor(color)
  }

  const setWidth = (width: number) => {
    currentWidth.value = width
    engine.value?.setWidth(width)
  }

  const setFontSize = (size: number) => {
    currentFontSize.value = size
  }

  /** Move one step up or down the width scale (the `[` and `]` keys). */
  const stepWidth = (direction: number) => {
    const index = WIDTH_STEPS.indexOf(currentWidth.value)
    const next = WIDTH_STEPS[Math.min(Math.max((index === -1 ? 1 : index) + direction, 0), WIDTH_STEPS.length - 1)]
    if (next !== undefined) setWidth(next)
  }

  const setBackground = (bg: BackgroundType) => {
    currentBackground.value = bg
    engine.value?.setBackground(bg)
  }

  /**
   * Switching the paper also switches the chalk — both the pen in hand and
   * everything already on the board. Otherwise flipping to the dark board
   * leaves the whole lesson written in near-black ink on near-black paper.
   */
  const setTheme = (theme: BoardTheme) => {
    const previous = currentTheme.value
    if (previous === theme) return
    currentTheme.value = theme
    engine.value?.setTheme(theme)
    engine.value?.remapInk(INK_PALETTES[previous], INK_PALETTES[theme])

    const index = INK_PALETTES[previous].indexOf(currentColor.value)
    if (index !== -1) setColor(INK_PALETTES[theme][index] ?? INK_PALETTES[theme][0]!)
  }

  const toggleTheme = () => setTheme(currentTheme.value === 'light' ? 'dark' : 'light')

  const zoomIn = () => engine.value?.zoomIn()
  const zoomOut = () => engine.value?.zoomOut()
  const resetZoom = () => engine.value?.resetZoom()
  const fitToContent = () => engine.value?.fitToContent()

  const registerEngine = (newEngine: WhiteboardEngine) => {
    engine.value = newEngine
    // Sync initial state
    newEngine.setTransparent(mode.value === 'annotate')
    newEngine.setTool(currentTool.value)
    newEngine.setColor(currentColor.value)
    newEngine.setWidth(currentWidth.value)
    newEngine.setBackground(currentBackground.value)
    newEngine.setTheme(currentTheme.value)

    newEngine.onViewChange = scale => { zoom.value = scale }
    newEngine.onSelectionChange = id => { hasSelection.value = id !== null }
    newEngine.onHistoryChange = (undoable, redoable) => {
      canUndo.value = undoable
      canRedo.value = redoable
    }
    zoom.value = newEngine.getZoom()
    canUndo.value = newEngine.canUndo()
    canRedo.value = newEngine.canRedo()
  }

  const unregisterEngine = () => {
    engine.value = null
    hasSelection.value = false
    canUndo.value = false
    canRedo.value = false
    zoom.value = 1
  }

  return {
    isOpen,
    mode,
    isPassThrough,
    currentTool,
    currentColor,
    currentWidth,
    currentFontSize,
    currentBackground,
    currentTheme,
    zoom,
    hasSelection,
    canUndo,
    canRedo,
    engine,
    openWhiteboard,
    closeWhiteboard,
    toggleWhiteboard,
    toggleAnnotate,
    setMode,
    togglePassThrough,
    setTool,
    setColor,
    setWidth,
    stepWidth,
    setFontSize,
    setBackground,
    setTheme,
    toggleTheme,
    zoomIn,
    zoomOut,
    resetZoom,
    fitToContent,
    registerEngine,
    unregisterEngine
  }
}
