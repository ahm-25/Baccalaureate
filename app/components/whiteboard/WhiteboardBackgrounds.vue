<template>
  <div v-if="isOpen" class="absolute bottom-20 left-1/2 -translate-x-1/2 bg-white glass-panel p-4 rounded-2xl shadow-xl border border-gray-100 flex gap-4 z-50">
    <button v-for="bg in backgrounds" :key="bg.id"
            @click="selectBackground(bg.id)"
            class="flex flex-col items-center gap-2 group">
      <div class="w-16 h-12 rounded-lg border-2 transition-all flex items-center justify-center overflow-hidden relative bg-[#FCFBF8]"
           :class="currentBackground === bg.id ? 'border-primary shadow-md scale-105' : 'border-gray-200 group-hover:border-primary/50'">
        <!-- Previews -->
        <div v-if="bg.id === 'grid'" class="absolute inset-0" style="background-image: linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px); background-size: 8px 8px;"></div>
        <div v-else-if="bg.id === 'lines'" class="absolute inset-0" style="background-image: linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px); background-size: 100% 8px;"></div>
        <div v-else-if="bg.id === 'dots'" class="absolute inset-0" style="background-image: radial-gradient(rgba(0,0,0,0.1) 1px, transparent 1px); background-size: 8px 8px;"></div>
      </div>
      <span class="text-xs text-gray-600 group-hover:text-primary font-medium">{{ bg.label }}</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { useWhiteboard } from '~/composables/useWhiteboard'
import type { BackgroundType } from '~/app/types/whiteboard'

defineProps<{ isOpen: boolean }>()
const emit = defineEmits(['close'])

const { currentBackground, setBackground } = useWhiteboard()

const backgrounds: { id: BackgroundType, label: string }[] = [
  { id: 'plain', label: 'سادة' },
  { id: 'grid', label: 'شبكة' },
  { id: 'lines', label: 'سطور' },
  { id: 'dots', label: 'نقاط' }
]

const selectBackground = (id: BackgroundType) => {
  setBackground(id)
  emit('close')
}
</script>
