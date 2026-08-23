<template>
  <div class="w-full max-w-4xl mx-auto my-16 font-arabic" :id="'arena-' + sectionId">
    <!-- Header -->
    <div class="text-center mb-8">
      <div class="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-4 transform -rotate-6 shadow-sm border border-primary/20">
        <span class="text-3xl">💡</span>
      </div>
      <h3 class="text-2xl font-black text-maintext mb-2">اختبر فهمك: {{ sectionTitle }}</h3>
      <p class="text-mutedtext">أجب عن الأسئلة التالية للتأكد من استيعابك لهذا القسم قبل المتابعة.</p>
    </div>

    <!-- Arena Container -->
    <div v-if="!isFinished" class="bg-background rounded-[2.5rem] p-6 md:p-10 shadow-lg border border-border relative overflow-hidden">
      <!-- Background Decorations -->
      <div class="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      
      <!-- Progress -->
      <QuizQuestionProgress 
        :total="questions.length" 
        :current="currentIndex" 
        :correct-count="score" 
        class="mb-8 relative z-10"
      />
      
      <!-- Question Card Wrapper -->
      <div class="relative z-10 min-h-[400px]">
        <!-- Difficulty Badge -->
        <div class="absolute -top-4 -left-4 md:-left-6 py-1.5 px-4 rounded-full font-bold text-sm shadow-sm flex items-center gap-1.5 border"
             :class="difficultyBadgeClass">
          <span>{{ difficultyIcon }}</span>
          <span>{{ difficultyText }}</span>
        </div>

        <h4 class="text-2xl md:text-3xl font-bold text-maintext leading-tight mb-8 mt-4">
          {{ currentQuestion.text }}
        </h4>

        <!-- Dynamic Question Component -->
        <component 
          :is="questionComponent" 
          :question="currentQuestion" 
          :is-answered="isAnswered"
          @answer="handleAnswer"
        />

        <!-- Feedback -->
        <QuizQuestionFeedback 
          v-if="isAnswered"
          :is-correct="isCurrentCorrect"
          :explanation="currentQuestion.explanation"
          :has-next="currentIndex < questions.length - 1"
          @next="nextQuestion"
          @retry="retryCurrent"
        />
      </div>
    </div>

    <!-- Results Screen -->
    <QuizQuestionResult 
      v-else
      :total-count="questions.length"
      :correct-count="score"
      :wrong-questions-count="wrongQuestionsCount"
      :has-next-section="true"
      @retry="restart"
      @continue="scrollToNext"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Question } from '~/data/lessons/second-baccalaureate/it/lesson-04-questions'
import MultipleChoiceQuestion from './MultipleChoiceQuestion.vue'
import MatchQuestion from './MatchQuestion.vue'
import ArrangeQuestion from './ArrangeQuestion.vue'

const props = defineProps<{
  questions: Question[]
  sectionTitle: string
  sectionId: string
}>()

const currentIndex = ref(0)
const score = ref(0)
const isAnswered = ref(false)
const isCurrentCorrect = ref<boolean | null>(null)
const wrongQuestionsCount = ref(0)

const currentQuestion = computed(() => props.questions[currentIndex.value])
const isFinished = computed(() => currentIndex.value >= props.questions.length)

const questionComponent = computed(() => {
  switch (currentQuestion.value.type) {
    case 'mcq': return MultipleChoiceQuestion
    case 'match': return MatchQuestion
    case 'arrange': return ArrangeQuestion
    default: return MultipleChoiceQuestion
  }
})

const difficultyMap = {
  easy: { text: 'سهل', icon: '🟢', class: 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-900/30' },
  medium: { text: 'متوسط', icon: '🟡', class: 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-900/30' },
  hard: { text: 'صعب', icon: '🟠', class: 'bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-900/30' },
  challenge: { text: 'تحدي', icon: '🔴', class: 'bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-900/30' }
}

const difficultyText = computed(() => difficultyMap[currentQuestion.value.difficulty]?.text || 'سهل')
const difficultyIcon = computed(() => difficultyMap[currentQuestion.value.difficulty]?.icon || '🟢')
const difficultyBadgeClass = computed(() => difficultyMap[currentQuestion.value.difficulty]?.class || '')


const handleAnswer = (correct: boolean) => {
  isAnswered.value = true
  isCurrentCorrect.value = correct
  if (correct) {
    score.value++
  } else {
    wrongQuestionsCount.value++
  }
}

const nextQuestion = () => {
  isAnswered.value = false
  isCurrentCorrect.value = null
  currentIndex.value++
}

const retryCurrent = () => {
  isAnswered.value = false
  isCurrentCorrect.value = null
  wrongQuestionsCount.value-- // Remove the wrong attempt penalty since they are retrying
}

const restart = () => {
  currentIndex.value = 0
  score.value = 0
  wrongQuestionsCount.value = 0
  isAnswered.value = false
  isCurrentCorrect.value = null
}

const scrollToNext = () => {
  // Find next section dynamically
  const el = document.getElementById('arena-' + props.sectionId)
  if (el) {
    // Basic logic to scroll down past the arena
    const nextSection = el.nextElementSibling
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    }
  }
}
</script>
