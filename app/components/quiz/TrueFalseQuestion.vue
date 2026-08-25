<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
    <QuizQuestionOption 
      v-for="(option, index) in question.options"
      :key="option.id"
      :text="option.text"
      :label="index === 0 ? '✓' : '✗'"
      :is-selected="selectedOptionId === option.id"
      :is-correct="option.id === question.correctOptionId"
      :is-answered="isAnswered"
      :disabled="isAnswered"
      @select="selectOption(option.id)"
      class="sm:py-6"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import type { MultipleChoiceQuestion } from '~/types/quiz'

const props = defineProps<{
  question: MultipleChoiceQuestion
  isAnswered: boolean
}>()

const emit = defineEmits<{
  (e: 'answer', isCorrect: boolean): void
}>()

const selectedOptionId = ref<string | null>(null)

watch(() => props.question.id, () => {
  selectedOptionId.value = null
})

const selectOption = (optionId: string) => {
  if (props.isAnswered) return
  selectedOptionId.value = optionId
  const isCorrect = optionId === props.question.correctOptionId
  emit('answer', isCorrect)
}
</script>
