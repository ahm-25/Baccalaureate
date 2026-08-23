<template>
  <div class="flex flex-col gap-4 mt-6">
    <button
      v-for="(option, index) in question.options"
      :key="index"
      @click="selectOption(index)"
      :disabled="isAnswered"
      class="w-full text-right p-4 md:p-5 rounded-2xl transition-all duration-200 relative group flex items-center gap-4 border-2"
      :class="getOptionClass(index)"
    >
      <!-- Indicator Box -->
      <div class="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center font-black text-xl transition-all duration-300 shadow-sm"
           :class="getIndicatorClass(index)">
        {{ String.fromCharCode(65 + index) }}
      </div>
      
      <!-- Option Text -->
      <span class="text-lg md:text-xl font-bold leading-relaxed flex-1 transition-transform duration-300"
            :class="!isAnswered ? 'group-hover:-translate-x-2' : ''">
        {{ option }}
      </span>

      <!-- Status Icon -->
      <div v-if="isAnswered && (index === question.correctAnswerIndex || selectedOption === index)" 
           class="absolute left-6 opacity-0 animate-fade-in flex items-center justify-center">
        <CheckCircle2 v-if="index === question.correctAnswerIndex" class="w-8 h-8 text-emerald-500" />
        <XCircle v-else class="w-8 h-8 text-rose-500" />
      </div>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { CheckCircle2, XCircle } from 'lucide-vue-next'
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
      ? 'bg-primary/10 border-primary border-b-[6px] text-primary -translate-y-1' 
      : 'bg-surface border-border border-b-[6px] hover:border-primary/50 hover:bg-background hover:-translate-y-1 active:border-b-2 active:translate-y-1 text-maintext'
  }
  
  if (index === props.question.correctAnswerIndex) {
    return 'bg-emerald-500/10 border-emerald-500 border-b-[6px] text-emerald-700 dark:text-emerald-400'
  }
  
  if (selectedOption.value === index && index !== props.question.correctAnswerIndex) {
    return 'bg-rose-500/10 border-rose-500 border-b-[6px] text-rose-700 dark:text-rose-400'
  }
  
  return 'bg-surface border-border border-b-2 opacity-50 translate-y-1 grayscale'
}

const getIndicatorClass = (index: number) => {
  if (!props.isAnswered) {
    return selectedOption.value === index
      ? 'bg-primary text-white scale-110 shadow-md'
      : 'bg-background text-mutedtext group-hover:bg-primary/20 group-hover:text-primary'
  }
  
  if (index === props.question.correctAnswerIndex) {
    return 'bg-emerald-500 text-white scale-110 shadow-md'
  }
  
  if (selectedOption.value === index && index !== props.question.correctAnswerIndex) {
    return 'bg-rose-500 text-white scale-110 shadow-md'
  }
  
  return 'bg-background text-mutedtext/50'
}
</script>
