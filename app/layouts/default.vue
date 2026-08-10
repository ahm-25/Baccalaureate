<template>
  <div class="min-h-screen relative font-arabic transition-all duration-500 bg-background text-maintext"
       :class="{ 'text-lg': isProjectorMode, 'cursor-none': isProjectorMode && currentTool === 'laser' }">
    <UiFloatingNavigation />
    <UiLessonProgress />
    
    <!-- Floating Whiteboard Button -->
    <button v-if="!isWhiteboardOpen" @click="toggleWhiteboard"
            class="fixed bottom-6 right-6 z-40 bg-white glass-panel text-maintext px-6 py-3 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-2 hover:bg-gray-50 transition-colors font-bold text-lg group">
      <span class="text-xl">✏</span>
      <span class="group-hover:text-primary transition-colors">السبورة</span>
    </button>

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
const { isOpen: isWhiteboardOpen, toggleWhiteboard, currentTool } = useWhiteboard()
const { isTeacherMode, toggleTeacherMode } = useTeacherMode()

const handleKeydown = (e: KeyboardEvent) => {
  // Ignore if typing in input
  if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return

  // Prevent defaults for shortcuts
  if (e.key.toLowerCase() === 'f') {
    e.preventDefault()
    toggleFullscreen()
  } else if (e.key.toLowerCase() === 'w' || e.key.toLowerCase() === 'b') {
    e.preventDefault()
    toggleWhiteboard()
  } else if (e.key.toLowerCase() === 'p' && e.ctrlKey) {
    e.preventDefault()
    toggleProjectorMode()
  } else if (e.key.toLowerCase() === 't' && e.ctrlKey) {
    e.preventDefault()
    toggleTeacherMode()
  }

  // Whiteboard specific shortcuts
  if (isWhiteboardOpen.value) {
    const { setTool, engine } = useWhiteboard()
    switch (e.key.toLowerCase()) {
      case 'p': if(!e.ctrlKey) setTool('pen'); break;
      case 'h': setTool('highlighter'); break;
      case 'e': setTool('eraser'); break;
      case 't': if(!e.ctrlKey) setTool('text'); break;
      case 'l': setTool('laser'); break;
      case 'v': setTool('select'); break;
      case 'z': 
        if (e.ctrlKey && e.shiftKey) engine.value?.redo();
        else if (e.ctrlKey) engine.value?.undo();
        break;
      case 'y':
        if (e.ctrlKey) engine.value?.redo();
        break;
    }
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>
