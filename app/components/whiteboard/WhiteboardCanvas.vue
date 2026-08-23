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
        class="bg-transparent outline-none border border-dashed border-primary/60 rounded px-1 py-0 font-arabic leading-tight min-w-[8ch]"
        :style="{
          color: currentColor,
          fontSize: currentFontSize + 'px',
          lineHeight: 1.25,
          fontFamily: 'Cairo, sans-serif'
        }"
        placeholder="اكتب هنا..."
        dir="auto"
      />
    </div>

    <!-- Restoring the previous board used to be a blocking window.confirm()
         that fired the moment the board opened. This asks in place instead. -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      leave-active-class="transition duration-150 ease-in"
      leave-to-class="opacity-0 -translate-y-2">
      <div v-if="restorePrompt"
           class="absolute top-6 left-1/2 -translate-x-1/2 z-20 pointer-events-auto bg-surface/95 backdrop-blur-md border border-border rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3">
        <div class="text-sm">
          <p class="font-bold text-maintext">في سبورة محفوظة من قبل</p>
          <p class="text-xs text-mutedtext">{{ restoreSummary }}</p>
        </div>
        <button @click="acceptRestore"
                class="px-3 py-1.5 rounded-xl bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-colors">
          استعادة
        </button>
        <button @click="dismissRestore"
                class="px-3 py-1.5 rounded-xl text-mutedtext text-sm font-bold hover:bg-gray-100 transition-colors">
          ابدأ من جديد
        </button>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed, nextTick } from 'vue'
import { WhiteboardEngine } from '~/composables/whiteboard/Engine'
import { useWhiteboard } from '~/composables/useWhiteboard'
import { useWhiteboardStorage } from '~/composables/useWhiteboardStorage'
import type { BoardData, WhiteboardMode } from '~/types/whiteboard'

const props = withDefaults(defineProps<{
  mode?: WhiteboardMode
  interactive?: boolean
}>(), {
  mode: 'board',
  interactive: true
})

const BOARD_ID = 'default-board'
const AUTOSAVE_INTERVAL = 4000

const emit = defineEmits(['engine-ready'])
const canvasRef = ref<HTMLCanvasElement | null>(null)
let engineInstance: WhiteboardEngine | null = null
let autoSaveTimer: ReturnType<typeof setInterval> | null = null
// Autosave writes only when the board actually changed since the last write.
let savedRevision = 0

const {
  registerEngine, unregisterEngine, setBackground, setTheme,
  currentTool, currentColor, currentFontSize, currentBackground, currentTheme
} = useWhiteboard()
const storage = useWhiteboardStorage()

// Text tool state
const showTextInput = ref(false)
const textInputPos = ref({ x: 0, y: 0 })
const textValue = ref('')
const textInputRef = ref<HTMLInputElement | null>(null)

// Restore prompt state
const restorePrompt = ref<BoardData | null>(null)
const restoreSummary = computed(() => {
  const board = restorePrompt.value
  if (!board) return ''
  const count = board.elements.length
  return `${count} عنصر — ${new Date(board.updatedAt).toLocaleString('ar-EG', {
    day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit'
  })}`
})

const cursorClass = computed(() => {
  switch (currentTool.value) {
    case 'laser': return 'cursor-none'
    case 'select': return 'cursor-move'
    case 'text': return 'cursor-text'
    // The engine paints its own eraser ring, so the arrow only gets in the way.
    case 'eraser': return 'cursor-none'
    default: return 'cursor-crosshair'
  }
})

const saveNow = async () => {
  if (!engineInstance || props.mode === 'annotate') return
  const revision = engineInstance.getRevision()
  if (revision === savedRevision) return
  savedRevision = revision

  try {
    await storage.saveBoard({
      id: BOARD_ID,
      name: 'Main Board',
      elements: JSON.parse(JSON.stringify(engineInstance.getElements())), // deep copy
      background: currentBackground.value,
      theme: currentTheme.value,
      createdAt: Date.now(),
      updatedAt: Date.now()
    })
  } catch (e) {
    console.error('Error saving board', e)
  }
}

const acceptRestore = () => {
  const board = restorePrompt.value
  restorePrompt.value = null
  if (!board || !engineInstance) return
  engineInstance.loadElements(board.elements)
  setBackground(board.background)
  if (board.theme) setTheme(board.theme)
  savedRevision = engineInstance.getRevision()
  engineInstance.fitToContent()
}

const dismissRestore = () => {
  restorePrompt.value = null
}

onMounted(async () => {
  if (!canvasRef.value) return

  engineInstance = new WhiteboardEngine(canvasRef.value)
  engineInstance.setTransparent(props.mode === 'annotate')
  registerEngine(engineInstance)
  engineInstance.start()

  engineInstance.onTextRequest = (x, y) => {
    textInputPos.value = { x, y }
    textValue.value = ''
    showTextInput.value = true
    nextTick(() => textInputRef.value?.focus())
  }

  emit('engine-ready', engineInstance)

  // Annotations on top of the page are a live layer: nothing is restored
  // or persisted, so the saved board is never overwritten by them.
  if (props.mode === 'annotate') return

  try {
    const boards = await storage.getAllBoards()
    const latest = boards
      .filter(b => b.elements.length > 0)
      .sort((a, b) => b.updatedAt - a.updatedAt)[0]
    if (latest) restorePrompt.value = latest
  } catch (e) {
    console.error('Error loading boards', e)
  }

  autoSaveTimer = setInterval(saveNow, AUTOSAVE_INTERVAL)
})

onUnmounted(() => {
  if (autoSaveTimer) {
    clearInterval(autoSaveTimer)
    autoSaveTimer = null
  }
  // Closing the board should not cost the last few seconds of work.
  saveNow()
  engineInstance?.stop()
  engineInstance = null
  unregisterEngine()
})

const commitText = () => {
  if (textValue.value.trim() && engineInstance) {
    engineInstance.addText(
      textValue.value,
      textInputPos.value.x,
      textInputPos.value.y,
      currentColor.value,
      currentFontSize.value
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
  getCanvas: () => canvasRef.value,
  getEngine: () => engineInstance
})
</script>
