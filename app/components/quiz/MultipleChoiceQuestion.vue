<template>
  <div class="flex flex-col gap-4 mt-6">
    <QuizQuestionOption 
      v-for="(option, index) in normalizedOptions"
      :key="option.id"
      :text="option.text"
      :label="String.fromCharCode(65 + index)"
      :is-selected="selectedOptionId === option.id"
      :is-correct="option.id === correctOptionId"
      :is-answered="isAnswered"
      :disabled="isAnswered"
      @select="selectOption(option.id)"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'

interface NormalizedOption {
  id: string
  text: string
}

// Supports both data shapes used across the project:
//  - options: { id, text }[]  +  correctOptionId   (JavaScript lessons)
//  - options: string[]        +  correctAnswerIndex (IT lesson-04 questions)
const props = defineProps<{
  question: any
  isAnswered: boolean
}>()

const emit = defineEmits<{
  (e: 'answer', isCorrect: boolean): void
}>()

const normalizedOptions = computed<NormalizedOption[]>(() => {
  const options = props.question?.options ?? []
  return options.map((option: any, index: number) => 
    typeof option === 'string'
      ? { id: String(index), text: option }
      : { id: String(option.id ?? index), text: option.text ?? '' }
  )
})

const correctOptionId = computed(() => {
  if (props.question?.correctOptionId !== undefined) return String(props.question.correctOptionId)
  if (props.question?.correctAnswerIndex !== undefined) return String(props.question.correctAnswerIndex)
  return null
})

const selectedOptionId = ref<string | null>(null)

// Reset selection when the question ID changes
watch(() => props.question.id, () => {
  selectedOptionId.value = null
})

const selectOption = (optionId: string) => {
  if (props.isAnswered) return
  selectedOptionId.value = optionId
  emit('answer', optionId === correctOptionId.value)
}
</script>
