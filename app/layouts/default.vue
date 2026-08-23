<template>
  <div class="min-h-screen relative font-arabic transition-all duration-500 bg-background text-maintext"
       :class="{ 'text-lg': isProjectorMode, 'cursor-none': isWhiteboardOpen && currentTool === 'laser' }">
    <UiFloatingNavigation />
    <UiLessonProgress />
    
    <!-- Floating Whiteboard Buttons -->
    <div v-if="!isWhiteboardOpen" class="fixed bottom-6 right-6 z-40 flex items-center gap-2">
      <!-- Point at anything on the page without drawing on it -->
      <button @click="toggleLaser"
              class="bg-white glass-panel text-maintext px-5 py-3 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-2 hover:bg-gray-50 transition-colors font-bold text-lg group"
              title="مؤشر ليزر (L)">
        <span class="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_10px_#ef4444]"></span>
        <span class="group-hover:text-primary transition-colors">ليزر</span>
      </button>

      <!-- Write directly on top of the current page -->
      <button @click="toggleAnnotate"
              class="bg-white glass-panel text-maintext px-5 py-3 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-2 hover:bg-gray-50 transition-colors font-bold text-lg group"
              title="الكتابة فوق الصفحة (A)">
        <span class="text-xl">🖊</span>
        <span class="group-hover:text-primary transition-colors">اكتب على الصفحة</span>
      </button>

      <button @click="toggleWhiteboard"
              class="bg-white glass-panel text-maintext px-6 py-3 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-2 hover:bg-gray-50 transition-colors font-bold text-lg group"
              title="السبورة الكاملة (W)">
        <span class="text-xl">✏</span>
        <span class="group-hover:text-primary transition-colors">السبورة</span>
      </button>
    </div>

    <WhiteboardDigitalWhiteboard v-if="isWhiteboardOpen" />
    <TeacherModeTeacherPanel v-if="isTeacherMode" />
    <slot />
  </div>
</template>

<script setup lang="ts">
import { usePresentation } from '~/composables/usePresentation'
import { useWhiteboard } from '~/composables/useWhiteboard'
import { useTeacherMode } from '~/composables/useTeacherMode'
import { onMounted, onUnmounted } from 'vue'

const { isProjectorMode, toggleProjectorMode, toggleFullscreen } = usePresentation()
const {
  isOpen: isWhiteboardOpen, toggleWhiteboard, toggleAnnotate,
  openWhiteboard, closeWhiteboard, currentTool, setTool, stepWidth,
  zoomIn, zoomOut, resetZoom, fitToContent, engine
} = useWhiteboard()

// The laser is the annotate layer with the laser tool: it points at the page
// without drawing on it, so clicks and scrolling still reach the lesson.
const toggleLaser = () => {
  if (isWhiteboardOpen.value && currentTool.value === 'laser') {
    closeWhiteboard()
    return
  }
  openWhiteboard('annotate')
  setTool('laser')
}
const { isTeacherMode, toggleTeacherMode } = useTeacherMode()

// Shortcuts key off `e.code` (the physical key) rather than `e.key`, so they
// keep working when the keyboard is on the Arabic layout and `e.key` is 'ص'.
const handleKeydown = (e: KeyboardEvent) => {
  const target = e.target as HTMLElement | null
  if (
    target instanceof HTMLInputElement ||
    target instanceof HTMLTextAreaElement ||
    target?.isContentEditable
  ) return

  const ctrl = e.ctrlKey || e.metaKey

  if (ctrl) {
    switch (e.code) {
      case 'KeyZ':
        if (!isWhiteboardOpen.value) return
        e.preventDefault()
        if (e.shiftKey) engine.value?.redo()
        else engine.value?.undo()
        return
      case 'KeyY':
        if (!isWhiteboardOpen.value) return
        e.preventDefault()
        engine.value?.redo()
        return
      case 'KeyP':
        e.preventDefault()
        toggleProjectorMode()
        return
      case 'KeyT':
        e.preventDefault()
        toggleTeacherMode()
        return
    }
    return
  }

  // Tool and view shortcuts, only while the board is up.
  if (isWhiteboardOpen.value) {
    switch (e.code) {
      case 'Escape': e.preventDefault(); closeWhiteboard(); return
      case 'Delete':
      case 'Backspace': e.preventDefault(); engine.value?.deleteSelected(); return
      case 'KeyP': setTool('pen'); return
      case 'KeyH': setTool('highlighter'); return
      case 'KeyE': setTool('eraser'); return
      case 'KeyT': setTool('text'); return
      case 'KeyL': setTool('laser'); return
      case 'KeyV': setTool('select'); return
      case 'KeyR': setTool('rect'); return
      case 'KeyO': setTool('circle'); return
      case 'KeyG': setTool('arrow'); return
      case 'BracketLeft': stepWidth(-1); return
      case 'BracketRight': stepWidth(1); return
      case 'Equal': e.preventDefault(); zoomIn(); return
      case 'Minus': e.preventDefault(); zoomOut(); return
      case 'Digit0': e.preventDefault(); resetZoom(); return
      case 'Digit1': e.preventDefault(); fitToContent(); return
      case 'ArrowUp':
      case 'ArrowDown':
      case 'ArrowLeft':
      case 'ArrowRight': {
        // Nudge whatever is selected; without a selection the page keeps its
        // normal arrow-key scrolling.
        if (!engine.value?.getSelectedId()) return
        e.preventDefault()
        const step = e.shiftKey ? 10 : 1
        const dx = e.code === 'ArrowRight' ? step : e.code === 'ArrowLeft' ? -step : 0
        const dy = e.code === 'ArrowDown' ? step : e.code === 'ArrowUp' ? -step : 0
        engine.value.nudgeSelected(dx, dy)
        return
      }
    }
  }

  switch (e.code) {
    case 'KeyF': e.preventDefault(); toggleFullscreen(); break
    case 'KeyW':
    case 'KeyB': e.preventDefault(); toggleWhiteboard(); break
    case 'KeyA': e.preventDefault(); toggleAnnotate(); break
    case 'KeyL': e.preventDefault(); toggleLaser(); break
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>
