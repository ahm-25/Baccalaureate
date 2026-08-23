<template>
  <div class="flex flex-col gap-4 mt-6">
    <button
      v-for="(option, index) in question.options"
      :key="index"
      @click="selectOption(index)"
      :disabled="isAnswered"
      class="w-full text-right p-5 rounded-2xl border-2 transition-all duration-300 relative overflow-hidden group"
      :class="getOptionClass(index)"
    >
      <!-- Background highlight on hover for unselected -->
      <div v-if="!isAnswered && selectedOption !== index" class="absolute inset-0 bg-primary/5 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
      
      <div class="relative z-10 flex items-center gap-4">
        <div class="flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold text-sm transition-colors"
             :class="getIndicatorClass(index)">
          {{ String.fromCharCode(65 + index) }}
        </div>
        <span class="text-lg md:text-xl font-medium leading-relaxed">{{ option }}</span>
      </div>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import type { MCQQuestion } from '~/data/lessons/second-baccalaureate/it/lesson-04-questions'

const props = defineProps<{
  question: MCQQuestion
  isAnswered: boolean
}>()

const emit = defineEmits<{
  (e: 'answer', isCorrect: boolean): void
}>()

const selectedOption = ref<number | null>(null)

// Reset when question changes
watch(() => props.question.id, () => {
  selectedOption.ref = null
  selectedOption.value = null
})

const selectOption = (index: number) => {
  if (props.isAnswered) return
  selectedOption.value = index
  const isCorrect = index === props.question.correctAnswerIndex
  emit('answer', isCorrect)
}

const getOptionClass = (index: number) => {
  if (!props.isAnswered) {
    return selectedOption.value === index 
      ? 'border-primary bg-primary/10 text-primary' 
      : 'border-border hover:border-primary/50 bg-surface text-maintext'
  }
  
  if (index === props.question.correctAnswerIndex) {
    return 'border-emerald-500 bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-400'
  }
  
  if (selectedOption.value === index && index !== props.question.correctAnswerIndex) {
    return 'border-rose-500 bg-rose-50 text-rose-700 dark:bg-rose-900/20 dark:text-rose-400'
  }
  
  return 'border-border bg-surface opacity-50'
}

const getIndicatorClass = (index: number) => {
  if (!props.isAnswered) {
    return selectedOption.value === index
      ? 'border-primary bg-primary text-white'
      : 'border-border text-mutedtext'
  }
  
  if (index === props.question.correctAnswerIndex) {
    return 'border-emerald-500 bg-emerald-500 text-white'
  }
  
  if (selectedOption.value === index && index !== props.question.correctAnswerIndex) {
    return 'border-rose-500 bg-rose-500 text-white'
  }
  
  return 'border-slate-300 dark:border-slate-600 text-slate-400'
}
</script>
