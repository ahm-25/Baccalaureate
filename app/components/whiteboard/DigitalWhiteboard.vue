<template>
  <!-- Board mode: a full whiteboard panel over a dimmed page -->
  <div v-if="mode === 'board'" class="fixed inset-0 z-50 overflow-hidden font-arabic transition-opacity duration-300">
    <!-- Dimmed background of the lesson -->
    <div class="absolute inset-0 bg-black/30 backdrop-blur-sm pointer-events-none transition-opacity"></div>
    
    <!-- Whiteboard Container -->
    <div class="absolute inset-4 md:inset-8 bg-[#FCFBF8] rounded-3xl shadow-2xl overflow-hidden border border-white/50 flex flex-col">
      
      <!-- Canvas Area -->
      <div class="flex-1 relative">
        <WhiteboardCanvas ref="canvasComponentRef" mode="board" />
      </div>
      
      <!-- Overlays -->
      <WhiteboardBackgrounds :is-open="showBgMenu" @close="showBgMenu = false" />
      <WhiteboardToolbar @toggle-bg-menu="showBgMenu = !showBgMenu" @export="handleExport" />
      
    </div>
  </div>

  <!-- Annotate mode: a transparent layer to write on the page itself -->
  <div v-else class="fixed inset-0 z-50 font-arabic pointer-events-none">
    <WhiteboardCanvas ref="canvasComponentRef" mode="annotate" :interactive="isLayerInteractive" />

    <!-- Frame that shows whether the layer is catching the pointer -->
    <div class="absolute inset-0 pointer-events-none border-4 transition-colors duration-300"
         :class="isLayerInteractive ? 'border-primary/30' : 'border-transparent'"></div>

    <div v-if="isPassThrough && currentTool !== 'laser'"
         class="absolute top-6 left-1/2 -translate-x-1/2 bg-white/90 glass-panel text-maintext text-sm font-bold px-4 py-2 rounded-full shadow-lg border border-gray-100 pointer-events-none">
      وضع التصفح — الرسم متوقف مؤقتاً
    </div>

    <div v-if="currentTool === 'laser'"
         class="absolute top-6 left-1/2 -translate-x-1/2 bg-white/90 glass-panel text-maintext text-sm font-bold px-4 py-2 rounded-full shadow-lg border border-gray-100 pointer-events-none flex items-center gap-2">
      <span class="w-2.5 h-2.5 rounded-full bg-red-500 shadow-[0_0_8px_#ef4444]"></span>
      مؤشر الليزر — شاور على أي كلمة، والصفحة لسه شغالة
    </div>

    <WhiteboardToolbar @toggle-bg-menu="showBgMenu = !showBgMenu" @export="handleExport" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useWhiteboard } from '~/composables/useWhiteboard'

const { mode, isPassThrough, currentTool } = useWhiteboard()

// The laser never draws, so it hands the pointer back to the page: the
// teacher can point at a word and still scroll or click while doing it.
const isLayerInteractive = computed(() => !isPassThrough.value && currentTool.value !== 'laser')

const showBgMenu = ref(false)
const canvasComponentRef = ref<any>(null)

const handleExport = () => {
  const canvas = canvasComponentRef.value?.getCanvas()
  if (!canvas) return
  
  try {
    let source: HTMLCanvasElement = canvas

    // Annotations live on a transparent canvas: flatten them onto paper first
    if (mode.value === 'annotate') {
      const flat = document.createElement('canvas')
      flat.width = canvas.width
      flat.height = canvas.height
      const ctx = flat.getContext('2d')
      if (ctx) {
        ctx.fillStyle = '#FCFBF8'
        ctx.fillRect(0, 0, flat.width, flat.height)
        ctx.drawImage(canvas, 0, 0)
        source = flat
      }
    }

    const dataUrl = source.toDataURL('image/png')
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
