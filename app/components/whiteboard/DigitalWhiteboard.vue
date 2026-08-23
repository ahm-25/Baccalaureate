<template>
  <!-- Board mode: a full whiteboard panel over a dimmed page -->
  <div v-if="mode === 'board'" class="fixed inset-0 z-50 overflow-hidden font-arabic">
    <!-- Dimmed background of the lesson -->
    <div class="absolute inset-0 bg-black/30 backdrop-blur-sm pointer-events-none"></div>

    <!-- Whiteboard Container -->
    <div class="absolute inset-4 md:inset-8 rounded-3xl shadow-2xl overflow-hidden border transition-colors duration-300 flex flex-col"
         :style="{ backgroundColor: paper }"
         :class="currentTheme === 'dark' ? 'border-white/10' : 'border-white/50'">

      <!-- Canvas Area -->
      <div class="flex-1 relative">
        <WhiteboardCanvas mode="board" />
      </div>

      <!-- Overlays -->
      <WhiteboardBackgrounds :is-open="showBgMenu" @close="showBgMenu = false" />
      <WhiteboardToolbar @toggle-bg-menu="showBgMenu = !showBgMenu" @export="handleExport" />

      <!-- A short hint instead of a help screen nobody opens -->
      <div class="absolute top-4 left-4 text-[11px] pointer-events-none select-none transition-opacity"
           :class="currentTheme === 'dark' ? 'text-white/35' : 'text-maintext/30'">
        مسافة + سحب للتحريك · Ctrl+عجلة للتكبير · Shift أثناء الرسم للاستقامة
      </div>
    </div>
  </div>

  <!-- Annotate mode: a transparent layer to write on the page itself -->
  <div v-else class="fixed inset-0 z-50 font-arabic pointer-events-none">
    <WhiteboardCanvas mode="annotate" :interactive="isLayerInteractive" />

    <!-- Frame that shows whether the layer is catching the pointer -->
    <div class="absolute inset-0 pointer-events-none border-4 transition-colors duration-300"
         :class="isLayerInteractive ? 'border-primary/30' : 'border-transparent'"></div>

    <div v-if="isPassThrough && currentTool !== 'laser'"
         class="absolute top-6 left-1/2 -translate-x-1/2 bg-surface/90 backdrop-blur-md text-maintext text-sm font-bold px-4 py-2 rounded-full shadow-lg border border-border pointer-events-none">
      وضع التصفح — الرسم متوقف مؤقتاً
    </div>

    <div v-if="currentTool === 'laser'"
         class="absolute top-6 left-1/2 -translate-x-1/2 bg-surface/90 backdrop-blur-md text-maintext text-sm font-bold px-4 py-2 rounded-full shadow-lg border border-border pointer-events-none flex items-center gap-2">
      <span class="w-2.5 h-2.5 rounded-full bg-red-500 shadow-[0_0_8px_#ef4444]"></span>
      مؤشر الليزر — شاور على أي كلمة، والصفحة لسه شغالة
    </div>

    <WhiteboardToolbar @toggle-bg-menu="showBgMenu = !showBgMenu" @export="handleExport" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useWhiteboard } from '~/composables/useWhiteboard'
import { BOARD_PALETTES } from '~/composables/whiteboard/Engine'

const { mode, isPassThrough, currentTool, currentTheme, engine } = useWhiteboard()

const paper = computed(() => BOARD_PALETTES[currentTheme.value].paper)

// The laser never draws, so it hands the pointer back to the page: the
// teacher can point at a word and still scroll or click while doing it.
const isLayerInteractive = computed(() => !isPassThrough.value && currentTool.value !== 'laser')

const showBgMenu = ref(false)

const handleExport = () => {
  // The engine crops to the ink and renders at 2x, so the PNG is a clean
  // drawing rather than a screenshot of the viewport at whatever zoom.
  const dataUrl = engine.value?.exportPNG(2)
  if (!dataUrl) return

  try {
    const a = document.createElement('a')
    a.href = dataUrl
    a.download = `whiteboard-${Date.now()}.png`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  } catch (err) {
    console.error('Failed to export canvas', err)
  }
}
</script>
