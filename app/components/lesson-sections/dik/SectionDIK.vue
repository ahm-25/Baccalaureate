<template>
  <section id="dik" class="min-h-screen relative flex flex-col pt-32 pb-24 px-6 sm:px-12 bg-surface overflow-hidden">
    <!-- Premium Ambient Background -->
    <div class="absolute inset-0 z-0 pointer-events-none">
      <div class="absolute top-[10%] left-[20%] w-[40vw] h-[40vw] bg-blue-500/5 rounded-full blur-[100px]"></div>
      <div class="absolute bottom-[10%] right-[20%] w-[40vw] h-[40vw] bg-green-500/5 rounded-full blur-[100px]"></div>
    </div>
    
    <div class="max-w-7xl mx-auto w-full relative z-10 flex flex-col gap-16">
      
      <!-- Header -->
      <div class="text-center max-w-4xl mx-auto opacity-0 translate-y-8" ref="headerRef">
        <h2 class="text-4xl md:text-5xl font-black text-maintext mb-6 tracking-tight">{{ dikLessonData.header.title }}</h2>
        <div class="inline-block bg-primary/10 text-primary font-bold px-8 py-3 rounded-full mb-8 shadow-sm border border-primary/20">
          {{ dikLessonData.header.subtitle }}
        </div>
        <p class="text-2xl text-maintext/90 leading-relaxed font-semibold">
          {{ dikLessonData.header.intro }}
        </p>
      </div>

      <!-- Main Transformation Flow -->
      <DIKFlow />
      
      <!-- Interactive Examples -->
      <DIKExamples />
      
      <!-- Conclusion Takeaway -->
      <DIKTakeaway />
      
      <!-- Mini Game -->
      <DIKMiniGame />
      
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { dikLessonData } from '~/data/lessons/first-baccalaureate/data-information-knowledge'
import DIKFlow from './DIKFlow.vue'
import DIKExamples from './DIKExamples.vue'
import DIKTakeaway from './DIKTakeaway.vue'
import DIKMiniGame from './DIKMiniGame.vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const headerRef = ref<HTMLElement | null>(null)

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)
  
  if (headerRef.value) {
    gsap.to(headerRef.value, {
      scrollTrigger: { trigger: headerRef.value, start: 'top 85%' },
      opacity: 1, y: 0, duration: 0.8, ease: 'power3.out'
    })
  }
})
</script>
