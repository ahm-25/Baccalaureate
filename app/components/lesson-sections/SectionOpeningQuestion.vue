<template>
  <section id="opening" class="min-h-screen relative flex flex-col items-center justify-center py-24 px-6 sm:px-12 bg-surface overflow-hidden">
    <!-- Abstract Background -->
    <div class="absolute inset-0 z-0 pointer-events-none">
      <div class="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-secondary/10 rounded-full blur-[100px] animate-float opacity-50"></div>
      <div class="absolute bottom-[-10%] left-[-5%] w-[30vw] h-[30vw] max-w-[500px] max-h-[500px] bg-accent/5 rounded-full blur-[90px] animate-float" style="animation-delay: -2s"></div>
    </div>
    
    <div class="max-w-5xl w-full mx-auto text-center z-10" ref="containerRef">
      
      <div class="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 text-accent mb-10 shadow-inner border border-accent/20">
        <MessageCircleQuestion size="40" stroke-width="1.5" />
      </div>
      
      <h2 class="text-4xl font-black text-primary mb-6 tracking-tight">{{ data.openingQuestion.title }}</h2>
      <h3 class="text-4xl lg:text-5xl font-bold leading-[1.3] mb-20 text-maintext text-balance">
        "{{ data.openingQuestion.question }}"
      </h3>
      
      <!-- Choices -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 relative">
        <button v-for="option in data.openingQuestion.options" :key="option.id"
                @click="selectOption(option.id)"
                class="relative p-10 rounded-[2rem] border-2 transition-all duration-500 transform group outline-none"
                :class="[
                  selectedId === option.id 
                    ? 'border-primary bg-white scale-[1.02] shadow-2xl shadow-primary/20' 
                    : 'border-border bg-white hover:border-primary/40 hover:scale-[1.02] hover:shadow-xl shadow-sm'
                ]"
                :disabled="showFeedback">
          
          <!-- Inner gradient for hover, clipped to rounded shape without clipping external elements -->
          <div class="absolute inset-0 rounded-[2rem] overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-tr from-primary/5 via-primary/10 to-transparent opacity-0 transition-opacity duration-500"
                 :class="{'opacity-100': selectedId === option.id, 'group-hover:opacity-100': !selectedId}"></div>
          </div>
          
          <div class="text-3xl font-black transition-colors relative z-10"
               :class="selectedId === option.id ? 'text-primary' : 'text-maintext group-hover:text-primary'">
            {{ option.text }}
          </div>
          
          <!-- Correct mark if selected and feedback shown -->
          <div v-if="showFeedback && option.id === data.openingQuestion.feedback.correct" 
               class="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center shadow-xl transform scale-0 animate-pop-in z-20 border-4 border-surface">
            <Check size="24" stroke-width="3" />
          </div>
        </button>
      </div>
      
      <!-- Feedback Explanation -->
      <div class="min-h-[200px] w-full flex items-start justify-center">
        <div v-if="showFeedback" 
             ref="feedbackRef"
             class="w-full bg-gradient-to-br from-primary to-[#6350d4] text-white p-10 md:p-12 rounded-[2.5rem] shadow-2xl shadow-primary/30 flex flex-col md:flex-row items-center md:items-start gap-8 text-right opacity-0 translate-y-12 border border-primary-light">
          
          <div class="w-16 h-16 shrink-0 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 text-white">
            <Lightbulb size="32" stroke-width="2" />
          </div>
          
          <p class="text-2xl md:text-3xl font-medium leading-[1.6] text-balance">
            {{ data.openingQuestion.feedback.text }}
          </p>
          
        </div>
      </div>
      
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { lessonData } from '~/data/lessons/first-baccalaureate/lesson-01'
import { MessageCircleQuestion, Check, Lightbulb } from 'lucide-vue-next'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const data = lessonData
const selectedId = ref<string | null>(null)
const showFeedback = ref(false)
const containerRef = ref<HTMLElement | null>(null)
const feedbackRef = ref<HTMLElement | null>(null)

const selectOption = (id: string) => {
  if (showFeedback.value) return
  
  selectedId.value = id
  showFeedback.value = true
  
  setTimeout(() => {
    if (feedbackRef.value) {
      gsap.to(feedbackRef.value, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'back.out(1.2)'
      })
    }
  }, 100)
}

onMounted(() => {
  if (containerRef.value) {
    gsap.from(containerRef.value.children, {
      scrollTrigger: {
        trigger: containerRef.value,
        start: 'top 70%',
      },
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out'
    })
  }
})
</script>

<style scoped>
@keyframes pop-in {
  0% { transform: scale(0); }
  60% { transform: scale(1.2); }
  100% { transform: scale(1); }
}
.animate-pop-in {
  animation: pop-in 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
}
</style>
