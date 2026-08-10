<template>
  <div class="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white glass-panel p-2 flex gap-1 pointer-events-auto shadow-2xl items-center rounded-2xl border border-gray-100 z-50 overflow-x-auto max-w-[95vw]">
    
    <!-- Tools -->
    <div class="flex gap-1">
      <button v-for="tool in tools" :key="tool.id" 
              @click="setTool(tool.id)"
              class="w-10 h-10 rounded-xl flex items-center justify-center transition-all group relative"
              :class="currentTool === tool.id ? 'bg-primary text-white shadow-md' : 'hover:bg-gray-100 text-gray-600 hover:text-primary'">
        <component :is="tool.icon" size="20" />
        <span class="absolute -top-10 bg-gray-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          {{ tool.label }}
        </span>
      </button>
    </div>

    <div class="w-[1px] h-8 bg-gray-200 mx-1"></div>

    <!-- Colors -->
    <div class="flex gap-1" v-if="['pen', 'highlighter', 'text', 'line', 'arrow', 'rect', 'circle'].includes(currentTool)">
      <button v-for="color in colors" :key="color"
              @click="setColor(color)"
              class="w-7 h-7 rounded-full border-2 transition-transform"
              :class="currentColor === color ? 'border-gray-800 scale-110 shadow-sm' : 'border-transparent hover:scale-110'"
              :style="{ backgroundColor: color }">
      </button>
    </div>

    <!-- Widths -->
    <div class="flex gap-1 ml-1" v-if="['pen', 'highlighter', 'line', 'arrow', 'rect', 'circle'].includes(currentTool)">
      <button v-for="w in widths" :key="w"
              @click="setWidth(w)"
              class="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              :class="currentWidth === w ? 'bg-gray-100' : ''">
        <div class="bg-gray-600 rounded-full" :style="{ width: w + 'px', height: w + 'px' }"></div>
      </button>
    </div>

    <div class="w-[1px] h-8 bg-gray-200 mx-1" v-if="['pen', 'highlighter', 'text', 'line', 'arrow', 'rect', 'circle'].includes(currentTool)"></div>

    <!-- Actions -->
    <div class="flex gap-1">
      <button @click="engine?.undo()" class="w-10 h-10 rounded-xl flex items-center justify-center hover:bg-gray-100 text-gray-600 transition-colors" title="تراجع (Ctrl+Z)">
        <Undo2 size="20" />
      </button>
      <button @click="engine?.redo()" class="w-10 h-10 rounded-xl flex items-center justify-center hover:bg-gray-100 text-gray-600 transition-colors" title="إعادة (Ctrl+Shift+Z)">
        <Redo2 size="20" />
      </button>
      
      <!-- Background Menu toggle -->
      <button @click="$emit('toggle-bg-menu')" class="w-10 h-10 rounded-xl flex items-center justify-center hover:bg-gray-100 text-gray-600 transition-colors relative" title="الخلفية">
        <Grid size="20" />
      </button>
      
      <button @click="confirmClear" class="w-10 h-10 rounded-xl flex items-center justify-center hover:bg-red-50 text-red-400 hover:text-red-600 transition-colors" title="مسح السبورة">
        <Trash2 size="20" />
      </button>

      <button @click="$emit('export')" class="w-10 h-10 rounded-xl flex items-center justify-center hover:bg-gray-100 text-gray-600 transition-colors" title="حفظ كصورة">
        <Download size="20" />
      </button>

      <div class="w-[1px] h-8 bg-gray-200 mx-1"></div>

      <button @click="toggleWhiteboard" class="w-10 h-10 rounded-xl flex items-center justify-center hover:bg-gray-100 text-gray-600 transition-colors font-bold" title="إغلاق (W)">
        <X size="20" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useWhiteboard } from '~/composables/useWhiteboard'
import type { WhiteboardTool } from '~/app/types/whiteboard'
import { 
  Pen, Highlighter, Eraser, Type, Minus, MoveUpRight, Square, Circle, 
  MousePointer2, MousePointerClick, Undo2, Redo2, Trash2, Download, X, Grid 
} from 'lucide-vue-next'

defineEmits(['toggle-bg-menu', 'export'])

const { currentTool, currentColor, currentWidth, setTool, setColor, setWidth, toggleWhiteboard, engine } = useWhiteboard()

const tools: { id: WhiteboardTool, icon: any, label: string }[] = [
  { id: 'select', icon: MousePointerClick, label: 'تحديد (V)' },
  { id: 'laser', icon: MousePointer2, label: 'مؤشر ليزر (L)' },
  { id: 'pen', icon: Pen, label: 'قلم (P)' },
  { id: 'highlighter', icon: Highlighter, label: 'تمييز (H)' },
  { id: 'text', icon: Type, label: 'نص (T)' },
  { id: 'line', icon: Minus, label: 'خط' },
  { id: 'arrow', icon: MoveUpRight, label: 'سهم' },
  { id: 'rect', icon: Square, label: 'مستطيل' },
  { id: 'circle', icon: Circle, label: 'دائرة' },
  { id: 'eraser', icon: Eraser, label: 'ممحاة (E)' }
]

// Professional comfortable colors (black, dark gray, red, blue, green, purple, orange)
const colors = ['#000000', '#292638', '#EF4444', '#3B82F6', '#10B981', '#8B5CF6', '#F97316']
const widths = [2, 4, 6, 10, 16]

const confirmClear = () => {
  if (confirm('هل تريد مسح كل ما على السبورة؟')) {
    engine.value?.clear()
  }
}
</script>
