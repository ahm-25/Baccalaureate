<template>
  <div class="w-full relative py-20 overflow-hidden" ref="takeawayContainer">
    
    <!-- Animated Background Words -->
    <div class="absolute inset-0 z-0 pointer-events-none flex flex-col justify-center items-center opacity-5 overflow-hidden">
      <div v-for="keyword in dikLessonData.takeaway.keywords" :key="keyword.id" 
           class="text-[15vw] font-black leading-none whitespace-nowrap text-maintext takeaway-bg-word"
           :class="keyword.id === 'data' ? 'text-blue-900' : keyword.id === 'meaning' ? 'text-purple-900' : 'text-green-900'">
        {{ keyword.en }}
      </div>
    </div>
    
    <div class="max-w-5xl mx-auto relative z-10 flex flex-col items-center gap-12">
      
      <!-- Step 1 -->
      <div class="takeaway-step text-center max-w-2xl">
        <h2 class="text-4xl md:text-5xl font-black text-blue-600 mb-6 drop-shadow-sm">البيانات</h2>
        <p class="text-2xl md:text-3xl font-bold text-maintext leading-relaxed">
          {{ dikLessonData.takeaway.dataText }}
        </p>
      </div>
      
      <div class="takeaway-arrow">
        <ArrowDown size="48" class="text-blue-300" stroke-width="2" />
      </div>
      
      <!-- Step 2 -->
      <div class="takeaway-step text-center max-w-2xl">
        <h2 class="text-4xl md:text-5xl font-black text-purple-600 mb-6 drop-shadow-sm">المعلومات</h2>
        <p class="text-2xl md:text-3xl font-bold text-maintext leading-relaxed">
          {{ dikLessonData.takeaway.infoText }}
        </p>
      </div>
      
      <div class="takeaway-arrow">
        <ArrowDown size="48" class="text-purple-300" stroke-width="2" />
      </div>
      
      <!-- Step 3 -->
      <div class="takeaway-step text-center max-w-2xl bg-white/60 backdrop-blur-md p-10 rounded-3xl border-2 border-green-200 shadow-2xl relative overflow-hidden group">
        <div class="absolute inset-0 bg-gradient-to-br from-green-400/10 to-transparent z-0"></div>
        <h2 class="text-5xl md:text-6xl font-black text-green-600 mb-6 drop-shadow-md relative z-10">المعرفة</h2>
        <p class="text-3xl md:text-4xl font-black text-maintext leading-relaxed relative z-10">
          {{ dikLessonData.takeaway.knowledgeText }}
        </p>
      </div>
      
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { dikLessonData } from '~/data/lessons/first-baccalaureate/data-information-knowledge'
import { ArrowDown } from 'lucide-vue-next'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const takeawayContainer = ref<HTMLElement | null>(null)

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)
  
  if (takeawayContainer.value) {
    const steps = takeawayContainer.value.querySelectorAll('.takeaway-step')
    const arrows = takeawayContainer.value.querySelectorAll('.takeaway-arrow')
    const bgWords = takeawayContainer.value.querySelectorAll('.takeaway-bg-word')
    
    // Background words subtle parallax
    gsap.to(bgWords, {
      scrollTrigger: {
        trigger: takeawayContainer.value,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
      },
      y: (i) => (i + 1) * -50,
      opacity: 0.1,
      stagger: 0.1
    })

    // Staggered reveal for main steps
    gsap.fromTo(steps,
      { opacity: 0, y: 50, scale: 0.95 },
      {
        scrollTrigger: {
          trigger: takeawayContainer.value,
          start: 'top 70%'
        },
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.4,
        ease: 'back.out(1.2)'
      }
    )

    gsap.fromTo(arrows,
      { opacity: 0, scale: 0.5 },
      {
        scrollTrigger: {
          trigger: takeawayContainer.value,
          start: 'top 70%'
        },
        opacity: 1,
        scale: 1,
        duration: 0.5,
        stagger: 0.4,
        delay: 0.4,
        ease: 'power2.out'
      }
    )
  }
})
</script>
