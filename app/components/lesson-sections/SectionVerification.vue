<template>
  <section id="verification" class="min-h-screen relative flex flex-col justify-center py-24 px-6 sm:px-12 bg-surface overflow-hidden">
    <!-- Premium Background -->
    <div class="absolute inset-0 z-0 pointer-events-none">
      <div class="absolute top-[10%] left-[10%] w-[30vw] h-[30vw] bg-red-500/5 rounded-full blur-[100px]"></div>
      <div class="absolute bottom-[20%] right-[10%] w-[40vw] h-[40vw] bg-primary/5 rounded-full blur-[120px]"></div>
    </div>
    
    <div class="max-w-7xl mx-auto w-full z-10">
      
      <!-- Header -->
      <div class="text-center mb-24 opacity-0 translate-y-10" ref="headerRef">
        <div class="inline-flex items-center justify-center w-20 h-20 rounded-[1.5rem] bg-red-50 text-red-500 mb-8 border border-red-100 shadow-inner">
          <ShieldAlert size="40" stroke-width="1.5" />
        </div>
        <h2 class="text-5xl md:text-6xl font-black text-maintext mb-6 tracking-tight">{{ data.verification.title }}</h2>
        <p class="text-xl text-mutedtext max-w-2xl mx-auto font-medium leading-relaxed">{{ data.verification.description }}</p>
      </div>
      
      <!-- The Journey / Pipeline -->
      <div class="relative w-full max-w-5xl mx-auto mb-32 opacity-0" ref="journeyRef">
        <!-- Connecting Line -->
        <div class="absolute top-1/2 left-0 w-full h-1.5 bg-gradient-to-r from-green-400 via-primary to-border -translate-y-1/2 rounded-full hidden md:block opacity-50"></div>
        
        <div class="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 relative z-10">
          
          <!-- Node 1: Info -->
          <div class="journey-node relative bg-white p-6 md:p-8 rounded-[2rem] border border-border shadow-xl shadow-maintext/5 flex flex-col items-center gap-4 w-40 hover:-translate-y-2 transition-transform duration-300">
            <div class="w-16 h-16 rounded-2xl bg-surface flex items-center justify-center text-mutedtext border border-border">
              <FileText size="32" stroke-width="1.5" />
            </div>
            <span class="font-bold text-maintext text-lg">معلومة</span>
          </div>
          
          <!-- Node 2: Source -->
          <div class="journey-node relative bg-white p-6 md:p-8 rounded-[2rem] border border-primary/20 shadow-2xl shadow-primary/10 flex flex-col items-center gap-4 w-40 hover:-translate-y-2 transition-transform duration-300 md:-translate-y-4">
            <div class="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
              <Search size="32" stroke-width="1.5" />
            </div>
            <span class="font-bold text-primary text-lg">المصدر</span>
          </div>
          
          <!-- Node 3: Compare -->
          <div class="journey-node relative bg-white p-6 md:p-8 rounded-[2rem] border border-accent/20 shadow-2xl shadow-accent/10 flex flex-col items-center gap-4 w-40 hover:-translate-y-2 transition-transform duration-300 md:translate-y-4">
            <div class="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent border border-accent/20">
              <Scale size="32" stroke-width="1.5" />
            </div>
            <span class="font-bold text-accent text-lg">مقارنة</span>
          </div>
          
          <!-- Node 4: Verify -->
          <div class="journey-node relative bg-white p-6 md:p-8 rounded-[2rem] border border-blue-400/20 shadow-2xl shadow-blue-500/10 flex flex-col items-center gap-4 w-40 hover:-translate-y-2 transition-transform duration-300 md:-translate-y-4">
            <div class="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-500 border border-blue-200">
              <BadgeCheck size="32" stroke-width="1.5" />
            </div>
            <span class="font-bold text-blue-600 text-lg">تحقق</span>
          </div>
          
          <!-- Node 5: Trusted -->
          <div class="journey-node relative bg-gradient-to-br from-green-400 to-green-600 p-6 md:p-8 rounded-[2rem] border border-green-300 shadow-2xl shadow-green-500/30 flex flex-col items-center gap-4 w-48 transform md:scale-110 hover:scale-[1.15] transition-transform duration-500 z-20">
            <div class="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/40 shadow-inner">
              <ShieldCheck size="40" stroke-width="2" />
            </div>
            <span class="font-black text-white text-xl text-center leading-tight">معلومة<br>موثوقة</span>
          </div>
          
        </div>
      </div>
      
      <!-- Interactive Questions Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" ref="questionsRef">
        <div v-for="(q, i) in data.verification.steps" :key="i"
             class="verification-card opacity-0 translate-y-12 bg-white p-10 rounded-[2.5rem] border border-white hover:border-primary/30 transition-all duration-500 group cursor-pointer shadow-lg shadow-maintext/5 hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden flex flex-col justify-center min-h-[220px]">
          
          <!-- Background Number Watermark -->
          <div class="absolute -right-4 -bottom-6 text-[12rem] font-black text-primary/[0.03] group-hover:text-primary/10 transition-colors duration-500 pointer-events-none select-none leading-none">
            {{ i + 1 }}
          </div>
          
          <!-- Decorative Top Corner -->
          <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div class="flex items-center gap-6 relative z-10">
            <div class="w-16 h-16 shrink-0 rounded-2xl bg-surface flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-500 font-bold text-3xl border border-border group-hover:border-primary shadow-sm">
              {{ i + 1 }}
            </div>
            <h4 class="text-2xl font-bold text-maintext group-hover:text-primary transition-colors duration-300 leading-snug">{{ q }}</h4>
          </div>
        </div>
      </div>
      
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { lessonData } from '~/data/lessons/first-baccalaureate/lesson-01'
import { ShieldAlert, FileText, Search, Scale, BadgeCheck, ShieldCheck } from 'lucide-vue-next'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const data = lessonData
const headerRef = ref<HTMLElement | null>(null)
const journeyRef = ref<HTMLElement | null>(null)
const questionsRef = ref<HTMLElement | null>(null)

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)
  
  if (headerRef.value) {
    gsap.to(headerRef.value, {
      scrollTrigger: { trigger: headerRef.value, start: 'top 85%' },
      y: 0, opacity: 1, duration: 0.8, ease: 'power3.out'
    })
  }

  if (journeyRef.value) {
    const nodes = journeyRef.value.querySelectorAll('.journey-node')
    
    gsap.to(journeyRef.value, {
      scrollTrigger: { trigger: journeyRef.value, start: 'top 80%' },
      opacity: 1, duration: 0.1
    })
    
    gsap.fromTo(nodes, 
      { scale: 0.5, opacity: 0, y: 40 },
      {
        scrollTrigger: { trigger: journeyRef.value, start: 'top 80%' },
        scale: (i) => i === 4 ? 1.1 : 1, // Final node is larger
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        stagger: 0.15, 
        ease: 'back.out(1.2)'
      }
    )
  }

  if (questionsRef.value) {
    const cards = questionsRef.value.querySelectorAll('.verification-card')
    gsap.to(cards, {
      scrollTrigger: { trigger: questionsRef.value, start: 'top 85%' },
      y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'back.out(1.2)'
    })
  }
})
</script>
