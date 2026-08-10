<template>
  <div class="w-full relative py-20" ref="gameContainer">
    
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-12">
        <h3 class="text-4xl font-black text-maintext mb-4">{{ dikLessonData.miniGame.title }}</h3>
        <p class="text-xl text-mutedtext">اختر الإجابة الصحيحة لكل مما يلي:</p>
      </div>
      
      <div v-if="!gameFinished" class="bg-white/90 backdrop-blur-2xl border border-white p-8 md:p-12 rounded-[3rem] shadow-2xl relative overflow-hidden">
        
        <!-- Progress -->
        <div class="flex gap-2 mb-10 justify-center">
          <div v-for="(_, index) in dikLessonData.miniGame.questions" :key="index"
               class="h-2 rounded-full transition-all duration-500"
               :class="index === currentQuestion ? 'w-12 bg-primary' : index < currentQuestion ? 'w-4 bg-green-500' : 'w-4 bg-border'">
          </div>
        </div>
        
        <Transition name="fade-slide" mode="out-in">
          <div :key="currentQuestion" class="flex flex-col items-center">
            
            <div class="bg-surface border border-border p-8 rounded-2xl mb-10 w-full text-center shadow-inner">
              <h4 class="text-3xl font-black text-maintext leading-snug" dir="auto">
                {{ dikLessonData.miniGame.questions[currentQuestion].text }}
              </h4>
            </div>
            
            <p class="text-2xl font-bold text-maintext mb-8">{{ dikLessonData.miniGame.questions[currentQuestion].question }}</p>
            
            <div class="flex flex-col md:flex-row w-full gap-4">
              <button v-for="opt in dikLessonData.miniGame.questions[currentQuestion].options" :key="opt.id"
                      @click="handleAnswer(opt.id)"
                      :disabled="isAnswering"
                      class="flex-1 py-5 px-6 rounded-2xl font-bold text-xl transition-all border-2 flex items-center justify-center gap-3 relative overflow-hidden group"
                      :class="[
                        selectedAnswer === opt.id && selectedAnswer === dikLessonData.miniGame.questions[currentQuestion].correct 
                          ? 'border-green-500 bg-green-50 text-green-700 shadow-lg' 
                          : selectedAnswer === opt.id 
                            ? 'border-red-500 bg-red-50 text-red-700'
                            : selectedAnswer 
                              ? 'border-border bg-surface opacity-50'
                              : 'border-border bg-white hover:border-primary hover:bg-primary/5 hover:shadow-md'
                      ]">
                
                <span class="relative z-10">{{ opt.text }}</span>
                
                <div v-if="selectedAnswer === opt.id" class="relative z-10">
                  <Check v-if="selectedAnswer === dikLessonData.miniGame.questions[currentQuestion].correct" size="24" class="text-green-600" stroke-width="3" />
                  <X v-else size="24" class="text-red-600" stroke-width="3" />
                </div>
              </button>
            </div>
            
          </div>
        </Transition>
        
      </div>
      
      <!-- Finished State -->
      <div v-else class="bg-white/90 backdrop-blur-2xl border border-green-200 p-12 md:p-16 rounded-[3rem] shadow-2xl text-center">
        <div class="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce shadow-inner">
          <Trophy size="48" stroke-width="2" />
        </div>
        <h3 class="text-4xl md:text-5xl font-black text-maintext mb-6 whitespace-pre-line">{{ dikLessonData.miniGame.completionMessage }}</h3>
        <button @click="resetGame" class="mt-8 bg-surface hover:bg-border text-primary font-bold px-8 py-4 rounded-full transition-colors flex items-center gap-2 mx-auto">
          <RotateCcw size="20" stroke-width="2" />
          العب مرة أخرى
        </button>
      </div>
      
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { dikLessonData } from '~/data/lessons/first-baccalaureate/data-information-knowledge'
import { Check, X, Trophy, RotateCcw } from 'lucide-vue-next'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const currentQuestion = ref(0)
const selectedAnswer = ref<string | null>(null)
const isAnswering = ref(false)
const gameFinished = ref(false)
const gameContainer = ref<HTMLElement | null>(null)

const handleAnswer = (optId: string) => {
  if (isAnswering.value) return
  
  selectedAnswer.value = optId
  isAnswering.value = true
  
  const correct = dikLessonData.miniGame.questions[currentQuestion.value].correct
  
  setTimeout(() => {
    if (optId === correct) {
      if (currentQuestion.value < dikLessonData.miniGame.questions.length - 1) {
        currentQuestion.value++
        selectedAnswer.value = null
        isAnswering.value = false
      } else {
        gameFinished.value = true
      }
    } else {
      // Wrong answer, let them try again
      setTimeout(() => {
        selectedAnswer.value = null
        isAnswering.value = false
      }, 800)
    }
  }, 1000)
}

const resetGame = () => {
  currentQuestion.value = 0
  selectedAnswer.value = null
  isAnswering.value = false
  gameFinished.value = false
}

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)
  
  if (gameContainer.value) {
    gsap.fromTo(gameContainer.value,
      { opacity: 0, y: 50 },
      {
        scrollTrigger: {
          trigger: gameContainer.value,
          start: 'top 80%'
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out'
      }
    )
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
</style>
