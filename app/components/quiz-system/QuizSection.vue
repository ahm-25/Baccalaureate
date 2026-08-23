<template>
  <section :id="`quiz-${sectionId}`" class="min-h-screen flex items-center justify-center bg-background py-24 relative overflow-hidden">
    <!-- Decorative Background -->
    <div class="absolute inset-0 z-0 pointer-events-none">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-accent/5 rounded-full blur-[120px]"></div>
    </div>

    <div class="container mx-auto px-4 relative z-10 max-w-4xl" v-if="quizData">
      
      <!-- Start Screen -->
      <div v-if="!isStarted" class="bg-white/80 backdrop-blur-xl border border-white/50 p-8 md:p-12 rounded-[2rem] text-center shadow-xl">
        <div class="w-20 h-20 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6 border border-primary/20">
          <Brain size="40" stroke-width="1.5" />
        </div>
        <h2 class="text-3xl md:text-4xl font-bold mb-4 text-maintext">اختبر فهمك</h2>
        <p class="text-xl text-mutedtext mb-8">لقد انتهيت من دراسة جزء: <strong class="text-primary">{{ quizData.title }}</strong><br>دعنا نراجع أهم المفاهيم من خلال 8 أسئلة سريعة.</p>
        <button @click="startQuiz" class="bg-primary hover:bg-primary-hover text-white font-bold py-4 px-10 rounded-full text-xl transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
          ابدأ الاختبار الآن
        </button>
      </div>

      <!-- Quiz Content -->
      <div v-else-if="!isFinished" class="bg-white/90 backdrop-blur-xl border border-white/50 p-6 md:p-10 rounded-[2rem] shadow-2xl">
        <QuizSystemQuizProgress :current="currentIndex + 1" :total="quizData.questions.length" />
        
        <Transition name="fade" mode="out-in">
          <div :key="currentQuestion.id">
            <QuizSystemQuizCard 
              :question="currentQuestion" 
              @answer="handleAnswer"
              :is-answered="!!currentFeedback"
            />
          </div>
        </Transition>
        
        <Transition name="slide-up">
          <QuizSystemQuizFeedback 
            v-if="currentFeedback" 
            :is-correct="currentFeedback.isCorrect"
            :explanation="currentQuestion.explanation"
            @next="nextQuestion"
            :is-last="currentIndex === quizData.questions.length - 1"
          />
        </Transition>
      </div>

      <!-- Result Screen -->
      <div v-else>
        <QuizSystemQuizResult :score="score" :total="quizData.questions.length" @retry="resetQuiz" />
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Brain } from 'lucide-vue-next'
import { lesson01Quizzes } from '~/data/it/lesson-01-quizzes'
import type { QuizSectionData, QuizQuestion } from '~/types/quiz'

const props = defineProps<{
  sectionId: string
}>()

const quizData = computed<QuizSectionData | undefined>(() => {
  return lesson01Quizzes.find(q => q.id === props.sectionId)
})

const isStarted = ref(false)
const isFinished = ref(false)
const currentIndex = ref(0)
const score = ref(0)

const currentFeedback = ref<{ isCorrect: boolean } | null>(null)

const currentQuestion = computed<QuizQuestion>(() => {
  return quizData.value?.questions[currentIndex.value] as QuizQuestion
})

const startQuiz = () => {
  isStarted.value = true
  isFinished.value = false
  currentIndex.value = 0
  score.value = 0
  currentFeedback.value = null
}

const handleAnswer = (isCorrect: boolean) => {
  currentFeedback.value = { isCorrect }
  if (isCorrect) score.value++
}

const nextQuestion = () => {
  if (!quizData.value) return
  currentFeedback.value = null
  if (currentIndex.value < quizData.value.questions.length - 1) {
    currentIndex.value++
  } else {
    isFinished.value = true
  }
}

const resetQuiz = () => {
  startQuiz()
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.4s ease;
}
.slide-up-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
