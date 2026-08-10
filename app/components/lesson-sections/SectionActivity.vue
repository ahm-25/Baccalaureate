<template>
  <section id="activity" class="min-h-screen relative flex flex-col justify-center py-24 px-6 sm:px-12 bg-background overflow-hidden">
    <!-- Premium Ambient Background -->
    <div class="absolute inset-0 z-0 pointer-events-none">
      <div class="absolute top-[20%] left-[20%] w-[40vw] h-[40vw] bg-primary/10 rounded-full blur-[100px]"></div>
      <div class="absolute bottom-[20%] right-[20%] w-[30vw] h-[30vw] bg-accent/10 rounded-full blur-[100px]"></div>
    </div>
    
    <div class="max-w-5xl mx-auto w-full z-10">
      
      <div class="text-center mb-16 opacity-0 translate-y-8" ref="headerRef">
        <div class="inline-flex items-center justify-center w-20 h-20 rounded-[1.5rem] bg-primary/10 text-primary mb-8 border border-primary/20 shadow-inner">
          <Gamepad2 size="40" stroke-width="1.5" />
        </div>
        <h2 class="text-5xl md:text-6xl font-black text-maintext mb-6 tracking-tight">{{ data.activity.title }}</h2>
        <p class="text-xl text-mutedtext max-w-2xl mx-auto font-medium">اقرأ السيناريو بتركيز واختر الإجابة التي تعتقد أنها صحيحة.</p>
      </div>
      
      <div class="relative w-full opacity-0 translate-y-12" ref="cardRef">
        <!-- Decorative Background Layer -->
        <div class="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-[3rem] transform rotate-1 opacity-20 blur-sm"></div>
        <div class="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-[3rem] transform -rotate-1 opacity-30"></div>
        
        <!-- Main Card -->
        <div class="relative bg-white/90 backdrop-blur-2xl rounded-[3rem] p-10 md:p-16 border border-white shadow-2xl flex flex-col min-h-[450px] overflow-hidden">
          
          <!-- Progress Indicator -->
          <div class="flex items-center gap-3 mb-12 justify-center" v-if="!isCompleted">
            <div v-for="i in data.activity.scenarios.length" :key="i"
                 class="h-2 rounded-full transition-all duration-500"
                 :class="i - 1 === currentScenario ? 'w-12 bg-primary shadow-lg shadow-primary/30' : 'w-3 bg-border'"></div>
          </div>
          
          <!-- Content Transition Wrapper -->
          <div class="flex-1 flex flex-col justify-center relative">
            <Transition name="fade-slide" mode="out-in">
              
              <div v-if="isCompleted" key="completed" class="w-full text-center py-10">
                <div class="w-24 h-24 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner border border-green-200">
                  <Trophy size="48" stroke-width="1.5" />
                </div>
                <h3 class="text-4xl font-black text-maintext mb-4">أحسنت! أتممت النشاط</h3>
                <p class="text-xl text-mutedtext mb-10">لقد تدربت بنجاح على التفرقة بين البيانات والمعلومات والمعرفة.</p>
                <button @click="scrollToNext" 
                        class="bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-2xl font-bold text-xl hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-3">
                  متابعة الدرس
                  <ArrowDown size="24" stroke-width="2.5" />
                </button>
              </div>
              
              <div v-else :key="currentScenario" class="w-full">
                <h3 class="text-3xl md:text-4xl font-black leading-relaxed text-maintext mb-12 text-center tracking-tight">
                  "{{ data.activity.scenarios[currentScenario].text }}"
                </h3>
                
                <div class="flex flex-wrap justify-center gap-6">
                  <button v-for="(opt, index) in data.activity.scenarios[currentScenario].options" :key="index"
                          @click="checkAnswer(index)"
                          class="relative overflow-hidden px-8 py-5 rounded-2xl border-2 transition-all duration-300 font-bold text-xl min-w-[200px] flex items-center justify-center gap-3 group"
                          :class="[
                            showResult && index === data.activity.scenarios[currentScenario].correct ? 'border-green-500 bg-green-50 text-green-700 scale-105 shadow-xl shadow-green-500/20 z-10' :
                            showResult && index === selectedOption && index !== data.activity.scenarios[currentScenario].correct ? 'border-red-500 bg-red-50 text-red-700 opacity-60 scale-95' :
                            showResult ? 'border-border bg-surface/50 opacity-40 scale-95' :
                            'border-border bg-white hover:border-primary hover:text-primary hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1'
                          ]"
                          :disabled="showResult">
                    
                    <div v-if="showResult && index === data.activity.scenarios[currentScenario].correct" 
                         class="absolute inset-0 bg-green-500/10 animate-pulse"></div>
                         
                    <Check v-if="showResult && index === data.activity.scenarios[currentScenario].correct" size="24" stroke-width="3" />
                    <X v-if="showResult && index === selectedOption && index !== data.activity.scenarios[currentScenario].correct" size="24" stroke-width="3" />
                    
                    {{ opt }}
                  </button>
                </div>
              </div>
            </Transition>
          </div>
          
          <!-- Footer / Next Action -->
          <div v-if="!isCompleted" class="mt-12 h-16 flex flex-col sm:flex-row items-center justify-between border-t border-border pt-8 relative overflow-hidden gap-4 sm:gap-0">
            <Transition name="fade">
              <div v-if="showResult" class="font-black text-xl flex items-center gap-3 w-full sm:w-auto justify-center sm:justify-start"
                   :class="isCorrect ? 'text-green-600' : 'text-red-500'">
                <div class="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                     :class="isCorrect ? 'bg-green-100' : 'bg-red-100'">
                  <component :is="isCorrect ? Trophy : AlertCircle" size="24" stroke-width="2.5" />
                </div>
                <span>{{ isCorrect ? 'ممتاز! إجابة دقيقة.' : 'للأسف، إجابة غير صحيحة.' }}</span>
              </div>
              <div v-else></div>
            </Transition>
            
            <Transition name="fade-slide-up">
              <button v-if="showResult" @click="nextScenario" 
                      class="bg-primary text-white px-8 py-3.5 rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-primary/30 hover:scale-105 transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center"
                      :class="currentScenario < data.activity.scenarios.length - 1 ? 'bg-primary' : 'bg-maintext hover:bg-maintext/90 hover:shadow-maintext/20'">
                {{ currentScenario < data.activity.scenarios.length - 1 ? 'السؤال التالي' : 'إنهاء النشاط' }}
                <component :is="currentScenario < data.activity.scenarios.length - 1 ? ArrowLeft : Check" size="20" stroke-width="2.5" />
              </button>
            </Transition>
          </div>
          
        </div>
      </div>
      
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { lessonData } from '~/data/lessons/first-baccalaureate/lesson-01'
import { Check, X, Gamepad2, Trophy, AlertCircle, ArrowLeft, ArrowDown } from 'lucide-vue-next'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const data = lessonData
const currentScenario = ref(0)
const showResult = ref(false)
const selectedOption = ref<number | null>(null)
const isCorrect = ref(false)
const isCompleted = ref(false)

const headerRef = ref<HTMLElement | null>(null)
const cardRef = ref<HTMLElement | null>(null)

const checkAnswer = (index: number) => {
  selectedOption.value = index
  isCorrect.value = index === data.activity.scenarios[currentScenario.value].correct
  showResult.value = true
}

const nextScenario = () => {
  if (currentScenario.value < data.activity.scenarios.length - 1) {
    showResult.value = false
    setTimeout(() => {
      currentScenario.value++
      selectedOption.value = null
    }, 300) // wait for exit animation
  } else {
    // Finish activity
    showResult.value = false
    setTimeout(() => {
      isCompleted.value = true
    }, 300)
  }
}

const scrollToNext = () => {
  document.getElementById('summary')?.scrollIntoView({ behavior: 'smooth' })
}

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)
  
  if (headerRef.value) {
    gsap.to(headerRef.value, {
      scrollTrigger: { trigger: headerRef.value, start: 'top 85%' },
      y: 0, opacity: 1, duration: 0.8, ease: 'power3.out'
    })
  }

  if (cardRef.value) {
    gsap.to(cardRef.value, {
      scrollTrigger: { trigger: cardRef.value, start: 'top 80%' },
      y: 0, opacity: 1, duration: 1, ease: 'back.out(1.2)'
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-slide-up-enter-active,
.fade-slide-up-leave-active {
  transition: all 0.3s ease;
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
