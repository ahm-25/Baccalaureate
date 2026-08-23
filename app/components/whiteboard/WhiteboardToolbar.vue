<template>
  <div class="absolute bottom-5 left-1/2 -translate-x-1/2 z-50 pointer-events-auto max-w-[96vw] flex flex-col items-center gap-2">

    <!-- Context row: only the options that apply to the active tool, so the
         bar stays short instead of showing every control all the time. -->
    <transition
      enter-active-class="transition duration-150 ease-out"
      enter-from-class="opacity-0 translate-y-1"
      leave-active-class="transition duration-100 ease-in"
      leave-to-class="opacity-0 translate-y-1">
      <div v-if="showColors || showWidths || showTextOptions"
           class="bg-surface/95 backdrop-blur-md rounded-2xl shadow-lg border border-border px-3 py-2 flex items-center gap-3 flex-wrap justify-center">

        <!-- Colors — not for the eraser, which has no colour of its own -->
        <div v-if="showColors" class="flex gap-1.5 items-center">
          <button v-for="color in palette" :key="color"
                  @click="setColor(color)"
                  class="w-7 h-7 rounded-full border-2 transition-transform hover:scale-110"
                  :class="currentColor === color ? 'border-maintext scale-110 shadow-sm' : 'border-black/10'"
                  :style="{ backgroundColor: color }"
                  :aria-label="color">
          </button>
        </div>

        <div v-if="showColors && (showWidths || showTextOptions)" class="w-px h-6 bg-border"></div>

        <!-- Stroke width (doubles as the eraser size) -->
        <div v-if="showWidths" class="flex gap-1 items-center">
          <button v-for="w in widths" :key="w"
                  @click="setWidth(w)"
                  class="w-8 h-8 rounded-lg flex items-center justify-center transition-colors"
                  :class="currentWidth === w ? 'bg-softhighlight' : 'hover:bg-gray-100'"
                  :aria-label="`سُمك ${w}`">
            <div class="rounded-full transition-colors"
                 :class="currentWidth === w ? 'bg-primary' : 'bg-gray-500'"
                 :style="{ width: w + 'px', height: w + 'px' }"></div>
          </button>
        </div>

        <!-- Font size -->
        <div v-if="showTextOptions" class="flex gap-1 items-center">
          <button v-for="size in fontSizes" :key="size"
                  @click="setFontSize(size)"
                  class="h-8 px-2.5 rounded-lg transition-colors font-bold leading-none flex items-center"
                  :class="currentFontSize === size ? 'bg-softhighlight text-primary' : 'hover:bg-gray-100 text-gray-600'"
                  :style="{ fontSize: Math.round(10 + size / 4) + 'px' }">
            أ
          </button>
        </div>
      </div>
    </transition>

    <!-- Main bar -->
    <!-- Wraps rather than scrolls: on a narrow projector the close and export
         buttons used to end up off the edge of a horizontally scrolling bar. -->
    <div class="bg-surface/95 backdrop-blur-md p-2 flex flex-wrap gap-1 shadow-2xl items-center justify-center rounded-2xl border border-border max-w-[96vw]">

      <!-- Tools -->
      <div class="flex gap-1 shrink-0">
        <button v-for="tool in tools" :key="tool.id"
                @click="setTool(tool.id)"
                class="w-10 h-10 rounded-xl flex items-center justify-center transition-all group relative shrink-0"
                :class="currentTool === tool.id ? 'bg-primary text-white shadow-md' : 'hover:bg-gray-100 text-gray-600 hover:text-primary'">
          <component :is="tool.icon" :size="20" />
          <span class="absolute -top-9 bg-maintext text-white text-[10px] px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
            {{ tool.label }}
          </span>
        </button>
      </div>

      <div class="w-px h-8 bg-border mx-1 shrink-0"></div>

      <!-- History -->
      <div class="flex gap-1 shrink-0">
        <button @click="engine?.undo()" :disabled="!canUndo"
                class="w-10 h-10 rounded-xl flex items-center justify-center transition-colors disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-100 text-gray-600"
                title="تراجع (Ctrl+Z)">
          <Undo2 :size="20" />
        </button>
        <button @click="engine?.redo()" :disabled="!canRedo"
                class="w-10 h-10 rounded-xl flex items-center justify-center transition-colors disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-100 text-gray-600"
                title="إعادة (Ctrl+Shift+Z)">
          <Redo2 :size="20" />
        </button>
        <button v-if="hasSelection" @click="engine?.deleteSelected()"
                class="w-10 h-10 rounded-xl flex items-center justify-center hover:bg-red-50 text-red-500 transition-colors"
                title="حذف المحدد (Delete)">
          <Scissors :size="20" />
        </button>
      </div>

      <div class="w-px h-8 bg-border mx-1 shrink-0"></div>

      <!-- View (full board only: the annotate layer follows the page) -->
      <div v-if="mode === 'board'" class="flex gap-1 items-center shrink-0">
        <button @click="zoomOut" class="w-9 h-10 rounded-xl flex items-center justify-center hover:bg-gray-100 text-gray-600 transition-colors" title="تصغير">
          <ZoomOut :size="18" />
        </button>
        <button @click="resetZoom"
                class="h-10 px-1 min-w-[3.25rem] rounded-xl hover:bg-gray-100 text-gray-600 text-xs font-bold tabular-nums transition-colors"
                title="إعادة العرض 100%">
          {{ Math.round(zoom * 100) }}%
        </button>
        <button @click="zoomIn" class="w-9 h-10 rounded-xl flex items-center justify-center hover:bg-gray-100 text-gray-600 transition-colors" title="تكبير">
          <ZoomIn :size="18" />
        </button>
        <button @click="fitToContent" class="w-10 h-10 rounded-xl flex items-center justify-center hover:bg-gray-100 text-gray-600 transition-colors" title="ملاءمة المحتوى">
          <Scan :size="20" />
        </button>

        <button @click="$emit('toggle-bg-menu')" class="w-10 h-10 rounded-xl flex items-center justify-center hover:bg-gray-100 text-gray-600 transition-colors" title="الخلفية">
          <Grid :size="20" />
        </button>
        <button @click="toggleTheme"
                class="w-10 h-10 rounded-xl flex items-center justify-center transition-colors"
                :class="currentTheme === 'dark' ? 'bg-maintext text-white' : 'hover:bg-gray-100 text-gray-600'"
                :title="currentTheme === 'dark' ? 'ورق فاتح' : 'سبورة داكنة'">
          <component :is="currentTheme === 'dark' ? Sun : Moon" :size="20" />
        </button>
      </div>

      <!-- Pass-through toggle (page annotation only) -->
      <button v-if="mode === 'annotate'" @click="togglePassThrough"
              class="w-10 h-10 rounded-xl flex items-center justify-center transition-colors shrink-0"
              :class="isPassThrough ? 'bg-accent text-white shadow-md' : 'hover:bg-gray-100 text-gray-600'"
              title="تصفح الصفحة (إيقاف الرسم مؤقتاً)">
        <Hand :size="20" />
      </button>

      <div class="w-px h-8 bg-border mx-1 shrink-0"></div>

      <div class="flex gap-1 shrink-0">
        <!-- Switch between writing on the page and the full board -->
        <button @click="setMode(mode === 'annotate' ? 'board' : 'annotate')"
                class="w-10 h-10 rounded-xl flex items-center justify-center hover:bg-gray-100 text-gray-600 transition-colors"
                :title="mode === 'annotate' ? 'فتح السبورة الكاملة' : 'الكتابة على الصفحة'">
          <component :is="mode === 'annotate' ? Maximize2 : Layers" :size="20" />
        </button>

        <button @click="confirmClear"
                class="w-10 h-10 rounded-xl flex items-center justify-center hover:bg-red-50 text-red-400 hover:text-red-600 transition-colors"
                :title="mode === 'annotate' ? 'مسح الكتابة' : 'مسح السبورة'">
          <Trash2 :size="20" />
        </button>

        <button @click="$emit('export')" class="w-10 h-10 rounded-xl flex items-center justify-center hover:bg-gray-100 text-gray-600 transition-colors" title="حفظ كصورة">
          <Download :size="20" />
        </button>

        <div class="w-px h-8 bg-border mx-1"></div>

        <button @click="closeWhiteboard" class="w-10 h-10 rounded-xl flex items-center justify-center hover:bg-gray-100 text-gray-600 transition-colors" title="إغلاق (Esc)">
          <X :size="20" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useWhiteboard, INK_PALETTES, WIDTH_STEPS } from '~/composables/useWhiteboard'
import type { WhiteboardTool } from '~/types/whiteboard'
import {
  Pen, Highlighter, Eraser, Type, Minus, MoveUpRight, Square, Circle,
  MousePointer2, MousePointerClick, Undo2, Redo2, Trash2, Download, X, Grid,
  Hand, Layers, Maximize2, ZoomIn, ZoomOut, Scan, Sun, Moon, Scissors
} from 'lucide-vue-next'

defineEmits(['toggle-bg-menu', 'export'])

const {
  mode, isPassThrough, currentTool, currentColor, currentWidth, currentFontSize,
  currentTheme, zoom, hasSelection, canUndo, canRedo,
  setTool, setColor, setWidth, setFontSize, setMode, toggleTheme, togglePassThrough,
  zoomIn, zoomOut, resetZoom, fitToContent, closeWhiteboard, engine
} = useWhiteboard()

const tools: { id: WhiteboardTool, icon: any, label: string }[] = [
  { id: 'select', icon: MousePointerClick, label: 'تحديد (V)' },
  { id: 'laser', icon: MousePointer2, label: 'مؤشر ليزر (L)' },
  { id: 'pen', icon: Pen, label: 'قلم (P)' },
  { id: 'highlighter', icon: Highlighter, label: 'تمييز (H)' },
  { id: 'text', icon: Type, label: 'نص (T)' },
  { id: 'line', icon: Minus, label: 'خط — Shift للاستقامة' },
  { id: 'arrow', icon: MoveUpRight, label: 'سهم — Shift للاستقامة' },
  { id: 'rect', icon: Square, label: 'مستطيل — Shift لمربع' },
  { id: 'circle', icon: Circle, label: 'دائرة — Shift لدائرة متساوية' },
  { id: 'eraser', icon: Eraser, label: 'ممحاة (E)' }
]

// Tuned per theme so the ink always contrasts with the paper behind it.
const palette = computed(() => INK_PALETTES[currentTheme.value])
const widths = WIDTH_STEPS
const fontSizes = [20, 28, 40, 56]

const INK_TOOLS: WhiteboardTool[] = ['pen', 'highlighter', 'line', 'arrow', 'rect', 'circle']
const showColors = computed(() => INK_TOOLS.includes(currentTool.value) || currentTool.value === 'text')
// The eraser has no colour, but its size uses the same width scale.
const showWidths = computed(() => INK_TOOLS.includes(currentTool.value) || currentTool.value === 'eraser')
const showTextOptions = computed(() => currentTool.value === 'text')

const confirmClear = () => {
  const message = mode.value === 'annotate'
    ? 'هل تريد مسح كل الكتابة فوق الصفحة؟'
    : 'هل تريد مسح كل ما على السبورة؟'
  if (confirm(message)) engine.value?.clear()
}
</script>
