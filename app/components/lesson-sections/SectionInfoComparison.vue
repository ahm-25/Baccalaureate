<template>
  <section id="info" class="min-h-screen relative flex flex-col justify-center py-24 px-6 sm:px-12 bg-surface">
    <!-- Abstract background elements -->
    <div class="absolute inset-0 z-0 pointer-events-none">
      <div class="absolute top-[20%] left-[-10%] w-[50vw] h-[50vw] bg-primary/5 rounded-full blur-[120px]"></div>
      <div class="absolute bottom-[10%] right-[-10%] w-[40vw] h-[40vw] bg-accent/5 rounded-full blur-[100px]"></div>
    </div>
    
    <div class="max-w-7xl mx-auto w-full z-10">
      <div class="text-center mb-20" ref="headerRef">
        <h2 class="text-5xl md:text-6xl font-black text-maintext mb-6 tracking-tight">{{ data.infoComparison.title }}</h2>
        <div class="w-32 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
      </div>
      
      <!-- Interactive Split Screen -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16" ref="cardsRef">
        
        <!-- Primary Information Card -->
        <div class="info-card opacity-0 translate-y-12 relative rounded-[2.5rem] overflow-hidden group transition-all duration-700 hover:shadow-2xl shadow-xl hover:-translate-y-3"
             @mouseenter="hoveredSide = 'primary'" @mouseleave="hoveredSide = null"
             :class="hoveredSide === 'secondary' ? 'lg:scale-95 lg:opacity-60 blur-[2px]' : 'scale-100 opacity-100 blur-0'">
          
          <div class="absolute inset-0 bg-gradient-to-br from-primary to-[#5b46cc] z-0"></div>
          
          <!-- Decorative circle -->
          <div class="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
          
          <div class="relative z-10 p-10 md:p-14 h-full flex flex-col text-white">
            <div class="flex items-center gap-6 mb-8">
              <div class="w-20 h-20 shrink-0 rounded-[1.5rem] bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shadow-inner">
                <User size="40" stroke-width="1.5" />
              </div>
              <h3 class="text-3xl md:text-4xl font-bold leading-tight">{{ data.infoComparison.primary.title }}</h3>
            </div>
            
            <p class="text-xl md:text-2xl text-white/90 leading-relaxed mb-12 font-medium">
              {{ data.infoComparison.primary.description }}
            </p>
            
            <div class="mt-auto">
              <div class="flex items-center gap-3 mb-6">
                <div class="h-[1px] flex-1 bg-white/20"></div>
                <h4 class="text-sm font-bold uppercase tracking-wider text-white/70 px-4 py-1.5 rounded-full bg-white/10">أمثلة</h4>
                <div class="h-[1px] flex-1 bg-white/20"></div>
              </div>
              <div class="flex flex-wrap gap-3">
                <span v-for="(ex, i) in data.infoComparison.primary.examples" :key="i"
                      class="px-5 py-2.5 bg-white/10 hover:bg-white/25 transition-colors backdrop-blur-md rounded-2xl text-base font-semibold border border-white/20 shadow-sm">
                  {{ ex }}
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Secondary Information Card -->
        <div class="info-card opacity-0 translate-y-12 relative rounded-[2.5rem] overflow-hidden group transition-all duration-700 hover:shadow-2xl shadow-xl hover:-translate-y-3"
             @mouseenter="hoveredSide = 'secondary'" @mouseleave="hoveredSide = null"
             :class="hoveredSide === 'primary' ? 'lg:scale-95 lg:opacity-60 blur-[2px]' : 'scale-100 opacity-100 blur-0'">
          
          <div class="absolute inset-0 bg-white border border-border z-0"></div>
          
          <!-- Decorative circle -->
          <div class="absolute -bottom-20 -left-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
          
          <div class="relative z-10 p-10 md:p-14 h-full flex flex-col text-maintext">
            <div class="flex items-center gap-6 mb-8">
              <div class="w-20 h-20 shrink-0 rounded-[1.5rem] bg-secondary/15 flex items-center justify-center border border-secondary/20 shadow-inner text-accent">
                <BookOpen size="40" stroke-width="1.5" />
              </div>
              <h3 class="text-3xl md:text-4xl font-bold leading-tight">{{ data.infoComparison.secondary.title }}</h3>
            </div>
            
            <p class="text-xl md:text-2xl text-mutedtext leading-relaxed mb-8 font-medium">
              {{ data.infoComparison.secondary.description }}
            </p>

            <div v-if="data.infoComparison.secondary.note" class="bg-amber-500/5 border-r-4 border-amber-500 p-5 rounded-2xl mb-8 text-base text-amber-800 leading-relaxed font-semibold">
              ⚠️ {{ data.infoComparison.secondary.note }}
            </div>
            
            <div class="mt-auto">
              <div class="flex items-center gap-3 mb-6">
                <div class="h-[1px] flex-1 bg-border"></div>
                <h4 class="text-sm font-bold uppercase tracking-wider text-mutedtext/70 px-4 py-1.5 rounded-full bg-surface">أمثلة</h4>
                <div class="h-[1px] flex-1 bg-border"></div>
              </div>
              <div class="flex flex-wrap gap-3">
                <span v-for="(ex, i) in data.infoComparison.secondary.examples" :key="i"
                      class="px-5 py-2.5 bg-surface hover:bg-secondary/10 transition-colors rounded-2xl text-base font-semibold border border-border shadow-sm text-maintext">
                  {{ ex }}
                </span>
              </div>
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
import { User, BookOpen } from 'lucide-vue-next'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const data = lessonData
const hoveredSide = ref<'primary' | 'secondary' | null>(null)
const headerRef = ref<HTMLElement | null>(null)
const cardsRef = ref<HTMLElement | null>(null)

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)
  
  if (headerRef.value) {
    gsap.fromTo(headerRef.value, 
      { y: -40, opacity: 0 },
      {
        scrollTrigger: {
          trigger: headerRef.value,
          start: 'top 85%'
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out'
      }
    )
  }

  if (cardsRef.value) {
    const cards = cardsRef.value.querySelectorAll('.info-card')
    gsap.to(cards, {
      scrollTrigger: {
        trigger: cardsRef.value,
        start: 'top 80%',
      },
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.2,
      ease: 'back.out(1.2)'
    })
  }
})
</script>
