<template>
  <div class="fixed inset-0 z-50 overflow-hidden font-arabic transition-opacity duration-300">
    <!-- Dimmed background of the lesson -->
    <div class="absolute inset-0 bg-black/30 backdrop-blur-sm pointer-events-none transition-opacity"></div>
    
    <!-- Whiteboard Container -->
    <div class="absolute inset-4 md:inset-8 bg-[#FCFBF8] rounded-3xl shadow-2xl overflow-hidden border border-white/50 flex flex-col">
      
      <!-- Canvas Area -->
      <div class="flex-1 relative">
        <WhiteboardCanvas ref="canvasComponentRef" />
      </div>
      
      <!-- Overlays -->
      <WhiteboardBackgrounds :is-open="showBgMenu" @close="showBgMenu = false" />
      <WhiteboardToolbar @toggle-bg-menu="showBgMenu = !showBgMenu" @export="handleExport" />
      
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const showBgMenu = ref(false)
const canvasComponentRef = ref<any>(null)

const handleExport = () => {
  const canvas = canvasComponentRef.value?.getCanvas()
  if (!canvas) return
  
  try {
    const dataUrl = canvas.toDataURL('image/png')
    const a = document.createElement('a')
    a.href = dataUrl
    a.download = `whiteboard-${new Date().getTime()}.png`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  } catch (err) {
    console.error('Failed to export canvas', err)
  }
}
</script>
