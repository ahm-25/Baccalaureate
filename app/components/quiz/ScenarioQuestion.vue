<template>
  <div class="flex flex-col gap-6 mt-4">
    <!-- Scenario Context Badge -->
    <div class="bg-amber-500/5 border border-amber-500/20 rounded-2xl p-6 text-right relative overflow-hidden">
      <div class="absolute -top-6 -right-6 text-6xl text-amber-500/5 select-none font-bold">💬</div>
      <div class="text-xs font-bold text-amber-600 mb-2 flex items-center gap-1">
        <span>🎬</span> السيناريو والحالة الدراسية
      </div>
      <p class="text-lg md:text-xl font-medium text-maintext leading-relaxed">
        {{ question.question }}
      </p>
    </div>

    <!-- Options List -->
    <div class="flex flex-col gap-4">
      <QuizQuestionOption 
        v-for="(option, index) in question.options"
        :key="option.id"
        :text="option.text"
        :label="String.fromCharCode(65 + index)"
        :is-selected="selectedOptionId === option.id"
        :is-correct="option.id === question.correctOptionId"
        :is-answered="isAnswered"
        :disabled="isAnswered"
        @select="selectOption(option.id)"
      />
    </div>
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
