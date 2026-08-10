<template>
  <section id="quiz" class="min-h-screen relative flex items-center justify-center py-24 px-6 sm:px-12 bg-background overflow-hidden">
    <!-- Premium Ambient Background -->
    <div class="absolute inset-0 z-0 pointer-events-none">
      <div class="absolute -top-[10%] -right-[10%] w-[50vw] h-[50vw] bg-primary/10 rounded-full blur-[120px]"></div>
      <div class="absolute -bottom-[10%] -left-[10%] w-[50vw] h-[50vw] bg-accent/10 rounded-full blur-[120px]"></div>
    </div>
    
    <div class="max-w-4xl mx-auto w-full z-10 opacity-0 translate-y-12" ref="quizContainer">
      
      <!-- Quiz Card -->
      <div v-if="!isFinished" class="bg-white/90 backdrop-blur-2xl rounded-[3rem] p-10 md:p-14 border border-white shadow-2xl relative overflow-hidden">
        
        <!-- Decorative Glow -->
        <div class="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[60px] pointer-events-none"></div>
        
        <!-- Progress Header -->
        <div class="flex items-center justify-between mb-10 relative z-10">
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
              <BrainCircuit size="24" stroke-width="2" />
            </div>
            <h2 class="text-3xl font-black text-maintext tracking-tight">اختبر معلوماتك</h2>
          </div>
          <div class="text-sm font-bold bg-white border border-border shadow-sm text-primary px-5 py-2.5 rounded-full">
            السؤال {{ String(currentQuestion + 1).padStart(2, '0') }} من {{ String(questions.length).padStart(2, '0') }}
          </div>
        </div>
        
        <!-- Progress Bar -->
        <div class="w-full h-3 bg-surface rounded-full mb-12 overflow-hidden shadow-inner border border-border">
          <div class="h-full bg-gradient-to-r from-primary to-accent transition-all duration-700 ease-out relative" 
               :style="{ width: `${((currentQuestion) / questions.length) * 100}%` }">
            <div class="absolute top-0 right-0 bottom-0 left-0 bg-white/20 animate-pulse"></div>
          </div>
        </div>
        
        <!-- Question Content -->
        <div class="relative z-10 min-h-[400px] flex flex-col">
          <Transition name="fade-slide" mode="out-in">
            <div :key="currentQuestion" class="flex-1 flex flex-col">
              
              <h3 class="text-3xl md:text-4xl font-bold mb-10 leading-snug text-maintext">{{ questions[currentQuestion].text }}</h3>
              
              <!-- Options -->
              <div class="space-y-4 mb-8 flex-1">
                <button v-for="(opt, index) in questions[currentQuestion].options" :key="index"
                        @click="handleAnswer(index)"
                        class="w-full text-right p-6 rounded-2xl border-2 transition-all duration-300 text-xl font-bold flex items-center justify-between group"
                        :class="[
                          hasAnswered && index === questions[currentQuestion].correct 
                            ? 'border-green-500 bg-green-50 text-green-700 shadow-lg shadow-green-500/10' 
                            : hasAnswered && index === selectedAnswer 
                              ? 'border-red-500 bg-red-50 text-red-700 opacity-80'
                              : hasAnswered 
                                ? 'border-border bg-surface opacity-50'
                                : 'border-border bg-white hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1'
                        ]"
                        :disabled="hasAnswered">
                  
                  <span class="flex-1 ml-4" :class="!hasAnswered ? 'group-hover:text-primary transition-colors' : ''">{{ opt }}</span>
                  
                  <div class="w-8 h-8 rounded-full border-2 flex items-center justify-center shrink-0 transition-all duration-300"
                       :class="[
                         hasAnswered && index === questions[currentQuestion].correct ? 'border-green-500 bg-green-500 text-white' :
                         hasAnswered && index === selectedAnswer ? 'border-red-500 bg-red-500 text-white' :
                         hasAnswered ? 'border-border' :
                         'border-border group-hover:border-primary group-hover:bg-primary/10'
                       ]">
                    <Check v-if="hasAnswered && index === questions[currentQuestion].correct" size="18" stroke-width="3" />
                    <X v-else-if="hasAnswered && index === selectedAnswer" size="18" stroke-width="3" />
                    <span v-else class="w-2.5 h-2.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  </div>
                </button>
              </div>
              
              <!-- Explanation -->
              <Transition name="fade-slide-up">
                <div v-if="hasAnswered" class="bg-blue-50/80 backdrop-blur-sm text-blue-800 p-6 rounded-2xl border border-blue-200 mb-8 flex gap-4 items-start shadow-sm">
                  <div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0 border border-blue-200">
                    <Info size="20" class="text-blue-600" stroke-width="2.5" />
                  </div>
                  <div class="mt-1">
                    <h4 class="font-bold mb-1 text-blue-900">توضيح</h4>
                    <p class="leading-relaxed font-medium">{{ feedbackText }}</p>
                  </div>
                </div>
              </Transition>
              
            </div>
          </Transition>
        </div>
        
        <!-- Next Button -->
        <div class="mt-4 border-t border-border pt-8 h-20 relative">
          <Transition name="fade-slide-up">
            <button v-if="hasAnswered" @click="handleNext" 
                    class="absolute left-0 bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-1 transition-all flex items-center gap-3">
              {{ currentQuestion < questions.length - 1 ? 'السؤال التالي' : 'عرض النتيجة النهائية' }}
              <ArrowLeft size="20" stroke-width="2.5" />
            </button>
          </Transition>
        </div>
        
      </div>
      
      <!-- Results Screen -->
      <div v-else class="bg-white/90 backdrop-blur-2xl rounded-[3rem] p-12 md:p-16 text-center border border-white shadow-2xl relative overflow-hidden">
        
        <div class="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 pointer-events-none"></div>
        
        <div class="w-40 h-40 rounded-full mx-auto mb-10 flex items-center justify-center bg-gradient-to-br relative z-10 shadow-2xl"
             :class="score > (questions.length / 2) ? 'from-green-400 to-green-600 shadow-green-500/30' : 'from-accent to-orange-400 shadow-accent/30'">
          <!-- Animated Glow -->
          <div class="absolute inset-0 rounded-full animate-ping opacity-20" :class="score > (questions.length / 2) ? 'bg-green-400' : 'bg-accent'"></div>
             
          <Award v-if="score > (questions.length / 2)" size="72" class="text-white" stroke-width="1.5" />
          <Target v-else size="72" class="text-white" stroke-width="1.5" />
        </div>
        
        <h2 class="text-5xl font-black text-maintext mb-6 relative z-10">النتيجة النهائية</h2>
        
        <div class="flex items-baseline justify-center gap-3 mb-8 relative z-10">
          <span class="text-8xl font-black text-primary tracking-tighter">{{ score }}</span>
          <span class="text-3xl font-bold text-mutedtext">/ {{ questions.length }}</span>
        </div>
        
        <p class="text-2xl text-maintext font-medium mb-16 max-w-xl mx-auto leading-relaxed relative z-10">
          <span v-if="score === questions.length" class="text-green-600 font-bold block mb-2">علامة كاملة! 🌟</span>
          {{ score > (questions.length / 2) ? 'لقد أثبتّ فهماً ممتازاً لمفاهيم البيانات والمعلومات.' : 'محاولة جيدة! راجع الدرس مرة أخرى وحاول تحسين نتيجتك.' }}
        </p>
        
        <button @click="resetAndPlay" 
                class="bg-white hover:bg-surface text-primary border-2 border-border hover:border-primary px-10 py-4 rounded-2xl font-bold text-xl transition-all flex items-center justify-center gap-3 mx-auto relative z-10 shadow-sm hover:shadow-lg">
          <RotateCcw size="24" stroke-width="2.5" />
          إعادة الاختبار
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useQuiz } from '~/composables/useQuiz'
import { Check, X, Info, ArrowLeft, Award, Target, RotateCcw, BrainCircuit } from 'lucide-vue-next'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const { currentQuestion, questions, score, isFinished, answerQuestion, nextQuestion, resetQuiz } = useQuiz()

const hasAnswered = ref(false)
const selectedAnswer = ref<number | null>(null)
const feedbackText = ref('')
const quizContainer = ref<HTMLElement | null>(null)

const handleAnswer = (index: number) => {
  if (hasAnswered.value) return
  
  selectedAnswer.value = index
  const result = answerQuestion(index)
  feedbackText.value = result.explanation
  hasAnswered.value = true
}

const handleNext = () => {
  hasAnswered.value = false
  selectedAnswer.value = null
  feedbackText.value = ''
  nextQuestion()
}

const resetAndPlay = () => {
  hasAnswered.value = false
  selectedAnswer.value = null
  feedbackText.value = ''
  resetQuiz()
}

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)
  
  if (quizContainer.value) {
    gsap.to(quizContainer.value, {
      scrollTrigger: {
        trigger: quizContainer.value,
        start: 'top 85%'
      },
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out'
    })
  }
})
</script>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.fade-slide-up-enter-active,
.fade-slide-up-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.fade-slide-up-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.fade-slide-up-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
