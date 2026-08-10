<template>
  <section id="data" class="min-h-screen relative flex flex-col justify-center py-24 px-6 sm:px-12 bg-[#0F111A] text-white overflow-hidden">
    <!-- Abstract Particles Background -->
    <div class="absolute inset-0 z-0 opacity-40 pointer-events-none" ref="particlesRef">
      <div class="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-primary/20 rounded-full blur-[120px]"></div>
      <div class="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] bg-accent/20 rounded-full blur-[100px]"></div>
      
      <div v-for="i in 40" :key="i" class="particle absolute w-1.5 h-1.5 rounded-full" 
           :class="i % 3 === 0 ? 'bg-primary' : i % 3 === 1 ? 'bg-accent' : 'bg-blue-400'"
           :style="{ left: Math.random() * 100 + '%', top: Math.random() * 100 + '%' }"></div>
    </div>
    
    <div class="max-w-7xl mx-auto w-full z-10 relative">
      <div class="text-center mb-24 opacity-0 translate-y-8" ref="headerRef">
        <h2 class="text-5xl md:text-6xl font-black mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">{{ data.dataToKnowledge.title }}</h2>
        <p class="text-xl text-white/60 max-w-2xl mx-auto font-medium">رحلة تحول الأرقام المجردة إلى قرارات ذكية</p>
      </div>
      
      <!-- Interactive Transformation Journey -->
      <div class="flex flex-col lg:flex-row items-stretch justify-between gap-8 lg:gap-12 relative" ref="journeyRef">
        
        <!-- Connecting Line -->
        <div class="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-blue-500/20 via-primary/50 to-accent hidden lg:block -translate-y-1/2 rounded-full z-0 opacity-50"></div>
        
        <!-- Steps -->
        <div v-for="(step, index) in data.dataToKnowledge.steps" :key="step.id"
             class="journey-step opacity-0 translate-y-12 relative flex-1 w-full lg:w-1/3 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 md:p-10 hover:bg-white/10 transition-all duration-500 group cursor-pointer z-10 hover:-translate-y-4 hover:shadow-2xl"
             :class="index === 0 ? 'hover:shadow-blue-500/20 hover:border-blue-500/30' : index === 1 ? 'hover:shadow-primary/20 hover:border-primary/30' : 'hover:shadow-accent/20 hover:border-accent/30'"
             @mouseenter="activeStep = index"
             @mouseleave="activeStep = null">
          
          <div class="w-20 h-20 rounded-2xl flex items-center justify-center mb-8 border transition-transform group-hover:scale-110 group-hover:rotate-6 duration-500 shadow-inner"
               :class="index === 0 ? 'bg-blue-500/20 border-blue-500/30 text-blue-400' : index === 1 ? 'bg-primary/20 border-primary/30 text-purple-400' : 'bg-accent/20 border-accent/30 text-accent'">
            <Database v-if="step.id === 'data'" size="40" stroke-width="1.5" />
            <FileText v-else-if="step.id === 'info'" size="40" stroke-width="1.5" />
            <Brain v-else size="40" stroke-width="1.5" />
          </div>
          
          <h3 class="text-3xl font-bold mb-4 transition-colors duration-300" 
              :class="index === 0 ? 'group-hover:text-blue-400' : index === 1 ? 'group-hover:text-purple-400' : 'group-hover:text-accent'">
            {{ step.title }}
          </h3>
          <p class="text-white/70 text-lg leading-relaxed mb-8 min-h-[90px]">{{ step.description }}</p>
          
          <!-- Example Reveal -->
          <div class="mt-auto p-5 rounded-2xl border border-white/5 bg-black/40 overflow-hidden relative group/example">
            <div class="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                 :class="index === 0 ? 'bg-blue-500' : index === 1 ? 'bg-primary' : 'bg-accent'"></div>
                 
            <div class="flex items-center gap-2 mb-3">
              <div class="w-2 h-2 rounded-full" :class="index === 0 ? 'bg-blue-400' : index === 1 ? 'bg-purple-400' : 'bg-accent'"></div>
              <div class="text-xs font-bold text-white/50 uppercase tracking-wider">مثال تطبيقي</div>
            </div>
            
            <div class="font-mono text-lg font-bold text-white/90 group-hover:text-white transition-colors relative z-10">
              <template v-if="step.id === 'data'">
                <div class="flex flex-wrap gap-2">
                  <span v-for="(grade, i) in data.dataToKnowledge.example.data" :key="i" class="bg-white/10 px-3 py-1.5 rounded-lg border border-white/5 shadow-sm">{{ grade }}</span>
                </div>
              </template>
              <template v-else-if="step.id === 'info'">
                <div class="leading-snug">{{ data.dataToKnowledge.example.info }}</div>
              </template>
              <template v-else>
                <div class="leading-snug text-base">{{ data.dataToKnowledge.example.knowledge }}</div>
              </template>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { lessonData } from '~/data/lessons/first-baccalaureate/lesson-01'
import { Database, FileText, Brain } from 'lucide-vue-next'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const data = lessonData
const activeStep = ref<number | null>(null)
const headerRef = ref<HTMLElement | null>(null)
const journeyRef = ref<HTMLElement | null>(null)
const particlesRef = ref<HTMLElement | null>(null)

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)
  
  if (headerRef.value) {
    gsap.to(headerRef.value, {
      scrollTrigger: {
        trigger: headerRef.value,
        start: 'top 85%'
      },
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'power3.out'
    })
  }

  if (journeyRef.value) {
    const steps = journeyRef.value.querySelectorAll('.journey-step')
    gsap.to(steps, {
      scrollTrigger: {
        trigger: journeyRef.value,
        start: 'top 80%'
      },
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.2,
      ease: 'back.out(1.2)'
    })
  }
  
  if (particlesRef.value) {
    const particles = particlesRef.value.querySelectorAll('.particle')
    gsap.to(particles, {
      y: 'random(-100, 100)',
      x: 'random(-100, 100)',
      opacity: 'random(0.2, 0.9)',
      duration: 'random(5, 12)',
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      stagger: 0.1
    })
  }
})
</script>
