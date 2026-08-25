<template>
  <div class="font-arabic w-full py-4">
    <!-- Header Area: Question Title and Difficulty Badge -->
    <div class="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8 mt-2 text-right">
      <h4 class="text-2xl md:text-3xl font-bold text-maintext leading-tight flex-1">
        {{ question.question }}
      </h4>
      
      <!-- Difficulty Badge -->
      <div 
        class="inline-flex py-1.5 px-4 rounded-full font-bold text-sm shadow-sm items-center gap-2 border shrink-0 self-start md:self-auto"
        :class="difficultyBadgeClass"
      >
        <span>{{ difficultyIcon }}</span>
        <span>{{ difficultyText }}</span>
      </div>
    </div>

    <!-- Dynamic Question Component -->
    <component 
      :is="questionComponent" 
      :question="question" 
      :is-answered="isAnswered"
      @answer="handleAnswer"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { QuizQuestion } from '~/types/quiz'

// Import all interactive components dynamically/statically
import MultipleChoiceQuestion from './MultipleChoiceQuestion.vue'
import TrueFalseQuestion from './TrueFalseQuestion.vue'
import ScenarioQuestion from './ScenarioQuestion.vue'
import MatchingQuestion from './MatchingQuestion.vue'
import ClassificationQuestion from './ClassificationQuestion.vue'
import OrderingQuestion from './OrderingQuestion.vue'

const props = defineProps<{
  question: QuizQuestion
  isAnswered: boolean
}>()

const emit = defineEmits<{
  (e: 'answer', isCorrect: boolean): void
}>()

const handleAnswer = (isCorrect: boolean) => {
  emit('answer', isCorrect)
}

const questionComponent = computed(() => {
  switch (props.question.type) {
    case 'multiple-choice':
      return MultipleChoiceQuestion
    case 'true-false':
      return TrueFalseQuestion
    case 'scenario':
      return ScenarioQuestion
    case 'matching':
      return MatchingQuestion
    case 'classification':
      return ClassificationQuestion
    case 'ordering':
      return OrderingQuestion
    default:
      return MultipleChoiceQuestion
  }
})

const difficultyMap = {
  easy: { text: 'سهل', icon: '🟢', class: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20' },
  medium: { text: 'متوسط', icon: '🟡', class: 'bg-amber-500/10 text-amber-600 border-amber-500/20' },
  hard: { text: 'صعب', icon: '🟠', class: 'bg-orange-500/10 text-orange-600 border-orange-500/20' },
  challenge: { text: 'تحدي', icon: '🔴', class: 'bg-rose-500/10 text-rose-600 border-rose-500/20' }
}

const difficultyText = computed(() => difficultyMap[props.question.difficulty || 'easy'].text)
const difficultyIcon = computed(() => difficultyMap[props.question.difficulty || 'easy'].icon)
const difficultyBadgeClass = computed(() => difficultyMap[props.question.difficulty || 'easy'].class)
</script>
