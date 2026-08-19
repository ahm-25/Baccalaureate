<template>
  <div class="relative w-full h-full overflow-hidden"
       :class="interactive ? 'pointer-events-auto' : 'pointer-events-none'">
    <!-- Canvas Element -->
    <canvas 
      ref="canvasRef" 
      class="absolute inset-0 w-full h-full touch-none"
      :class="cursorClass"
    ></canvas>
    
    <!-- Text Input Overlay -->
    <div v-if="showTextInput" 
         class="absolute z-10"
         :style="{ left: textInputPos.x + 'px', top: textInputPos.y + 'px' }">
      <input 
        ref="textInputRef"
        v-model="textValue"
        @blur="commitText"
        @keydown.enter="commitText"
        @keydown.esc="cancelText"
        class="bg-transparent outline-none border border-primary/50 shadow-sm px-1 font-arabic"
        :style="{ 
          color: currentColor, 
          fontSize: '24px',
          fontFamily: 'Cairo, sans-serif'
        }"
        placeholder="اكتب هنا..."
        dir="auto"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed, nextTick } from 'vue'
import { WhiteboardEngine } from '~/composables/whiteboard/Engine'
import { useWhiteboard } from '~/composables/useWhiteboard'
import { useWhiteboardStorage } from '~/composables/useWhiteboardStorage'
import type { WhiteboardMode } from '~/app/types/whiteboard'

const props = withDefaults(defineProps<{
  mode?: WhiteboardMode
  interactive?: boolean
}>(), {
  mode: 'board',
  interactive: true
})

const emit = defineEmits(['engine-ready'])
const canvasRef = ref<HTMLCanvasElement | null>(null)
let engineInstance: WhiteboardEngine | null = null
let autoSaveTimer: ReturnType<typeof setInterval> | null = null

const { registerEngine, unregisterEngine, currentTool, currentColor } = useWhiteboard()
const storage = useWhiteboardStorage()

// Text tool state
const showTextInput = ref(false)
const textInputPos = ref({ x: 0, y: 0 })
const textValue = ref('')
const textInputRef = ref<HTMLInputElement | null>(null)

const cursorClass = computed(() => {
  switch(currentTool.value) {
    case 'laser': return 'cursor-none'
    case 'select': return 'cursor-default'
    case 'text': return 'cursor-text'
    case 'eraser': return 'cursor-crosshair'
    default: return 'cursor-crosshair'
  }
})

onMounted(async () => {
  if (canvasRef.value) {
    engineInstance = new WhiteboardEngine(canvasRef.value)
    engineInstance.setTransparent(props.mode === 'annotate')
    registerEngine(engineInstance)
    engineInstance.start()
    
    engineInstance.onTextRequest = (x, y) => {
      textInputPos.value = { x, y }
      textValue.value = ''
      showTextInput.value = true
      nextTick(() => {
        textInputRef.value?.focus()
      })
    }

    emit('engine-ready', engineInstance)

    // Annotations on top of the page are a live layer: nothing is restored
    // or persisted, so the saved board is never overwritten by them.
    if (props.mode === 'annotate') return
    
    // Auto-load last board logic
    try {
      const boards = await storage.getAllBoards()
      if (boards.length > 0) {
        // Load the most recently updated board
        const latestBoard = boards.sort((a, b) => b.updatedAt - a.updatedAt)[0]
        if (confirm('استعادة السبورة السابقة؟\nRestore previous board?')) {
          engineInstance.loadElements(latestBoard.elements)
          engineInstance.setBackground(latestBoard.background)
          useWhiteboard().setBackground(latestBoard.background)
        }
      }
    } catch (e) {
      console.error('Error loading boards', e)
    }

    // Auto-save interval
    autoSaveTimer = setInterval(() => {
      if (engineInstance) {
        storage.saveBoard({
          id: 'default-board',
          name: 'Main Board',
          elements: JSON.parse(JSON.stringify(engineInstance.getElements())), // deep copy
          background: useWhiteboard().currentBackground.value,
          createdAt: Date.now(),
          updatedAt: Date.now()
        }).catch(console.error)
      }
    }, 5000)
  }
})

onUnmounted(() => {
  if (autoSaveTimer) {
    clearInterval(autoSaveTimer)
    autoSaveTimer = null
  }
  if (engineInstance) {
    engineInstance.stop()
  }
  unregisterEngine()
})

const commitText = () => {
  if (textValue.value.trim() && engineInstance) {
    engineInstance.addText(
      textValue.value,
      textInputPos.value.x,
      textInputPos.value.y,
      currentColor.value,
      24 // default font size
    )
  }
  showTextInput.value = false
  textValue.value = ''
}

const cancelText = () => {
  showTextInput.value = false
  textValue.value = ''
}

defineExpose({
  getCanvas: () => canvasRef.value
})
</script>
