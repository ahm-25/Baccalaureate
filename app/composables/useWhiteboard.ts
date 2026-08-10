import { ref, shallowRef } from 'vue'
import type { WhiteboardTool, BackgroundType } from '~/app/types/whiteboard'
import type { WhiteboardEngine } from './whiteboard/Engine'

const isOpen = ref(false)
const currentTool = ref<WhiteboardTool>('pen')
const currentColor = ref('#292638')
const currentWidth = ref(4)
const currentBackground = ref<BackgroundType>('plain')
const engine = shallowRef<WhiteboardEngine | null>(null)

export const useWhiteboard = () => {
  const toggleWhiteboard = () => {
    isOpen.value = !isOpen.value
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
    currentTool,
    currentColor,
    currentWidth,
    currentBackground,
    engine,
    toggleWhiteboard,
    setTool,
    setColor,
    setWidth,
    setBackground,
    registerEngine,
    unregisterEngine
  }
}
