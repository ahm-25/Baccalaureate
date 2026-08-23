<template>
  <transition
    enter-active-class="transition duration-150 ease-out"
    enter-from-class="opacity-0 translate-y-2"
    leave-active-class="transition duration-100 ease-in"
    leave-to-class="opacity-0 translate-y-2">
    <div v-if="isOpen"
         class="absolute bottom-24 left-1/2 -translate-x-1/2 bg-surface/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-border z-50 pointer-events-auto">
      <div class="flex gap-4">
        <button v-for="bg in backgrounds" :key="bg.id"
                @click="selectBackground(bg.id)"
                class="flex flex-col items-center gap-2 group">
          <div class="w-16 h-12 rounded-lg border-2 transition-all overflow-hidden relative"
               :style="{ backgroundColor: paper }"
               :class="currentBackground === bg.id ? 'border-primary shadow-md scale-105' : 'border-border group-hover:border-primary/50'">
            <!-- Previews follow the board's own paper colour -->
            <div v-if="bg.id === 'grid'" class="absolute inset-0"
                 :style="{ backgroundImage: `linear-gradient(${line} 1px, transparent 1px), linear-gradient(90deg, ${line} 1px, transparent 1px)`, backgroundSize: '8px 8px' }"></div>
            <div v-else-if="bg.id === 'lines'" class="absolute inset-0"
                 :style="{ backgroundImage: `linear-gradient(${line} 1px, transparent 1px)`, backgroundSize: '100% 8px' }"></div>
            <div v-else-if="bg.id === 'dots'" class="absolute inset-0"
                 :style="{ backgroundImage: `radial-gradient(${line} 1px, transparent 1px)`, backgroundSize: '8px 8px' }"></div>
          </div>
          <span class="text-xs text-mutedtext group-hover:text-primary font-medium">{{ bg.label }}</span>
        </button>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useWhiteboard } from '~/composables/useWhiteboard'
import { BOARD_PALETTES } from '~/composables/whiteboard/Engine'
import type { BackgroundType } from '~/types/whiteboard'

defineProps<{ isOpen: boolean }>()
const emit = defineEmits(['close'])

const { currentBackground, currentTheme, setBackground } = useWhiteboard()

const paper = computed(() => BOARD_PALETTES[currentTheme.value].paper)
const line = computed(() => currentTheme.value === 'dark' ? 'rgba(255,255,255,0.22)' : 'rgba(0,0,0,0.12)')

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
