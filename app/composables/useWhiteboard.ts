import { ref, shallowRef } from 'vue'
import type { WhiteboardTool, BackgroundType, WhiteboardMode } from '~/app/types/whiteboard'
import type { WhiteboardEngine } from './whiteboard/Engine'

const isOpen = ref(false)
const mode = ref<WhiteboardMode>('board')
const isPassThrough = ref(false)
const currentTool = ref<WhiteboardTool>('pen')
const currentColor = ref('#292638')
const currentWidth = ref(4)
const currentBackground = ref<BackgroundType>('plain')
const engine = shallowRef<WhiteboardEngine | null>(null)

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

  const setBackground = (bg: BackgroundType) => {
    currentBackground.value = bg
    engine.value?.setBackground(bg)
  }

  const registerEngine = (newEngine: WhiteboardEngine) => {
    engine.value = newEngine
    // Sync initial state
    engine.value.setTransparent(mode.value === 'annotate')
    engine.value.setTool(currentTool.value)
    engine.value.setColor(currentColor.value)
    engine.value.setWidth(currentWidth.value)
    engine.value.setBackground(currentBackground.value)
  }

  const unregisterEngine = () => {
    engine.value = null
  }

  return {
    isOpen,
    mode,
    isPassThrough,
    currentTool,
    currentColor,
    currentWidth,
    currentBackground,
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
    setBackground,
    registerEngine,
    unregisterEngine
  }
}
