<template>
  <button
    :disabled="disabled"
    @click="$emit('select')"
    class="w-full text-right p-4 md:p-5 rounded-2xl transition-all duration-200 relative group flex items-center gap-4 border-2 outline-none select-none text-maintext"
    :class="optionClass"
  >
    <!-- Index Box (A, B, C, D...) -->
    <div
      class="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center font-black text-lg transition-all duration-300 shadow-sm"
      :class="indicatorClass"
    >
      {{ label }}
    </div>

    <!-- Option Text -->
    <span
      class="text-base md:text-lg font-bold leading-relaxed flex-1 transition-transform duration-300"
      :class="!disabled ? 'group-hover:-translate-x-1.5' : ''"
    >
      {{ text }}
    </span>

    <!-- Status Icons -->
    <div v-if="isAnswered && (isCorrect || isSelected)" class="absolute left-6 flex items-center justify-center animate-fade-in">
      <CheckCircle2 v-if="isCorrect" class="w-7 h-7 text-emerald-500" />
      <XCircle v-else class="w-7 h-7 text-rose-500" />
    </div>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { CheckCircle2, XCircle } from 'lucide-vue-next'

const props = defineProps<{
  text: string
  label: string
  isSelected: boolean
  isCorrect: boolean // Is this the actual correct option?
  isAnswered: boolean
  disabled: boolean
}>()

defineEmits<{
  (e: 'select'): void
}>()

const optionClass = computed(() => {
  if (!props.isAnswered) {
    return props.isSelected
      ? 'bg-primary/10 border-primary border-b-[6px] text-primary -translate-y-0.5'
      : 'bg-surface border-border border-b-[6px] hover:border-primary/40 hover:-translate-y-0.5 active:border-b-2 active:translate-y-0.5'
  }

  // Answered state
  if (props.isCorrect) {
    return 'bg-emerald-500/10 border-emerald-500 border-b-[6px] text-emerald-700 font-bold'
  }

  if (props.isSelected && !props.isCorrect) {
    return 'bg-rose-500/10 border-rose-500 border-b-[6px] text-rose-700 font-bold'
  }

  return 'bg-surface border-border border-b-2 opacity-40 translate-y-0.5 grayscale'
})

const indicatorClass = computed(() => {
  if (!props.isAnswered) {
    return props.isSelected
      ? 'bg-primary text-white scale-105 shadow-md'
      : 'bg-background text-mutedtext group-hover:bg-primary/10 group-hover:text-primary'
  }

  if (props.isCorrect) {
    return 'bg-emerald-500 text-white scale-105 shadow-md'
  }

  if (props.isSelected && !props.isCorrect) {
    return 'bg-rose-500 text-white scale-105 shadow-md'
  }

  return 'bg-background text-mutedtext/40'
})
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.25s ease-out forwards;
}
@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
}
</style>
