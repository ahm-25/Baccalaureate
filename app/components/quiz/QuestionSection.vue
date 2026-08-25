<template>
  <div :id="`quiz-section-${sectionId}`" class="w-full max-w-4xl mx-auto my-16 font-arabic">
    
    <!-- Start Screen -->
    <div v-if="!isStarted" class="bg-white/80 backdrop-blur-xl border border-white/50 p-10 md:p-14 rounded-[2.5rem] text-center shadow-xl relative overflow-hidden">
      <!-- Glow Decor -->
      <div class="absolute -top-32 -right-32 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none"></div>
      
      <div class="w-20 h-20 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6 border border-primary/20">
        <Brain size="40" stroke-width="1.5" />
      </div>
      <h3 class="text-3xl font-black mb-4 text-maintext">اختبر فهمك: {{ sectionTitle }}</h3>
      <p class="text-xl text-mutedtext mb-8 max-w-2xl mx-auto leading-relaxed">
        لقد انتهيت من دراسة جزء: <strong class="text-primary">{{ sectionTitle }}</strong>.<br>
        دعنا نراجع الفهم من خلال 8 أسئلة تفاعلية متنوعة ومميزة.
      </p>
      <button @click="startQuiz" class="bg-primary hover:bg-primary/95 text-white font-bold py-4.5 px-12 rounded-2xl text-xl transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
        ابدأ التحدي الآن
      </button>
    </div>

    <!-- Quiz Content -->
    <div v-else-if="!isFinished" class="bg-white/90 backdrop-blur-xl border border-white/50 p-6 md:p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
      <!-- Glow Decor -->
      <div class="absolute -top-32 -right-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <!-- Progress Bar -->
      <QuizQuestionProgress 
        :total="questions.length" 
        :current="currentIndex" 
        :correct-count="score" 
        class="mb-8 relative z-10"
      />
      
      <!-- Question Card Wrapper -->
      <div class="relative z-10 min-h-[350px]">
        <Transition name="fade-question" mode="out-in">
          <div :key="currentQuestion.id" class="w-full">
            <QuizQuestionCard 
              :question="currentQuestion" 
              :is-answered="!!currentFeedback"
              @answer="handleAnswer"
            />
          </div>
        </Transition>

        <!-- Feedback -->
        <Transition name="slide-feedback">
          <QuizQuestionFeedback 
            v-if="currentFeedback"
            :is-correct="currentFeedback.isCorrect"
            :explanation="currentQuestion.explanation"
            :has-next="currentIndex < questions.length - 1"
            @next="nextQuestion"
            @retry="retryCurrent"
          />
        </Transition>
      </div>
    </div>

    <!-- Results Screen -->
    <div v-else class="relative z-10">
      <QuizQuestionResult 
        :total-count="questions.length"
        :correct-count="score"
        :wrong-questions-count="wrongQuestionsCount"
        :has-next-section="true"
        @retry="restart"
        @continue="scrollToNext"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Brain } from 'lucide-vue-next'
import type { QuizQuestion } from '~/types/quiz'

const props = defineProps<{
  questions: QuizQuestion[]
  sectionTitle: string
  sectionId: string
}>()

const isStarted = ref(false)
const isFinished = ref(false)
const currentIndex = ref(0)
const score = ref(0)
const currentFeedback = ref<{ isCorrect: boolean } | null>(null)
const wrongQuestionsCount = ref(0)

const currentQuestion = computed<QuizQuestion>(() => {
  return props.questions[currentIndex.value]
})

const startQuiz = () => {
  isStarted.value = true
  isFinished.value = false
  currentIndex.value = 0
  score.value = 0
  currentFeedback.value = null
  wrongQuestionsCount.value = 0
}

const handleAnswer = (isCorrect: boolean) => {
  currentFeedback.value = { isCorrect }
  if (isCorrect) {
    score.value++
  } else {
    wrongQuestionsCount.value++
  }
}

const nextQuestion = () => {
  currentFeedback.value = null
  if (currentIndex.value < props.questions.length - 1) {
    currentIndex.value++
  } else {
    isFinished.value = true
  }
}

const retryCurrent = () => {
  currentFeedback.value = null
}

const restart = () => {
  startQuiz()
}

const scrollToNext = () => {
  const el = document.getElementById('quiz-section-' + props.sectionId)
  if (el) {
    const nextSection = el.nextElementSibling
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    }
  }
}
</script>

<style scoped>
.fade-question-enter-active,
.fade-question-leave-active {
  transition: opacity 0.25s ease;
}
.fade-question-enter-from,
.fade-question-leave-to {
  opacity: 0;
}

.slide-feedback-enter-active,
.slide-feedback-leave-active {
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}
.slide-feedback-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.slide-feedback-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
