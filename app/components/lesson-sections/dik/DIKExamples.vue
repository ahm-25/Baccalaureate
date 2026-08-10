<template>
  <div class="w-full relative py-16" ref="examplesContainer">
    
    <div class="text-center mb-12 opacity-0 translate-y-8" ref="headerRef">
      <h3 class="text-3xl md:text-4xl font-black text-maintext">{{ dikLessonData.examplesSection.title }}</h3>
    </div>
    
    <div class="max-w-6xl mx-auto opacity-0 translate-y-8" ref="contentRef">
      
      <!-- Examples Selector -->
      <div class="flex overflow-x-auto hide-scrollbar gap-3 pb-6 mb-8 px-2 snap-x">
        <button v-for="(ex, index) in dikLessonData.examplesSection.examples" :key="ex.id"
                @click="activeExample = index"
                class="shrink-0 px-6 py-3 rounded-full font-bold text-lg transition-all border-2 snap-start"
                :class="activeExample === index 
                  ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20 scale-105' 
                  : 'bg-white text-mutedtext border-border hover:border-primary/50 hover:text-maintext hover:bg-surface'">
          {{ ex.title }}
        </button>
      </div>
      
      <!-- Dynamic Example Display -->
      <div class="bg-white/80 backdrop-blur-xl border border-border rounded-[2.5rem] p-8 md:p-12 shadow-xl relative overflow-hidden">
        <!-- Abstract Bg -->
        <div class="absolute inset-0 z-0 pointer-events-none opacity-20 transition-colors duration-500"
             :class="activeExample % 3 === 0 ? 'bg-gradient-to-br from-blue-500/20 to-transparent' : activeExample % 3 === 1 ? 'bg-gradient-to-br from-purple-500/20 to-transparent' : 'bg-gradient-to-br from-green-500/20 to-transparent'"></div>
             
        <Transition name="fade-slide" mode="out-in">
          <div :key="activeExample" class="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
            
            <!-- Data -->
            <div class="flex-1 w-full text-center group">
              <div class="text-blue-500 font-bold mb-4 uppercase tracking-wider text-sm flex items-center justify-center gap-2">
                <div class="w-2 h-2 rounded-full bg-blue-500"></div>
                البيانات
              </div>
              <div class="bg-white rounded-2xl p-6 border border-blue-100 shadow-sm min-h-[160px] flex items-center justify-center group-hover:shadow-md group-hover:border-blue-200 transition-all">
                <div v-if="Array.isArray(dikLessonData.examplesSection.examples[activeExample].data)" class="flex flex-wrap gap-2 justify-center">
                  <span v-for="(item, i) in dikLessonData.examplesSection.examples[activeExample].data" :key="i"
                        class="bg-blue-50 text-blue-700 font-semibold px-3 py-1.5 rounded-lg text-sm border border-blue-100">
                    {{ item }}
                  </span>
                </div>
                <div v-else class="font-bold text-lg text-blue-800">
                  {{ dikLessonData.examplesSection.examples[activeExample].data }}
                </div>
              </div>
            </div>
            
            <!-- Arrow -->
            <div class="hidden md:block shrink-0 rotate-180 md:rotate-0">
              <ArrowLeft class="text-primary/30" size="32" stroke-width="2" />
            </div>
            <div class="block md:hidden shrink-0">
              <ArrowDown class="text-primary/30" size="32" stroke-width="2" />
            </div>
            
            <!-- Information -->
            <div class="flex-1 w-full text-center group">
              <div class="text-purple-500 font-bold mb-4 uppercase tracking-wider text-sm flex items-center justify-center gap-2">
                <div class="w-2 h-2 rounded-full bg-purple-500"></div>
                المعلومات
              </div>
              <div class="bg-white rounded-2xl p-6 border border-purple-100 shadow-sm min-h-[160px] flex items-center justify-center group-hover:shadow-md group-hover:border-purple-200 transition-all">
                <p class="font-bold text-xl text-purple-800 leading-snug">
                  {{ dikLessonData.examplesSection.examples[activeExample].information }}
                </p>
              </div>
            </div>
            
            <!-- Arrow -->
            <div class="hidden md:block shrink-0 rotate-180 md:rotate-0">
              <ArrowLeft class="text-accent/30" size="32" stroke-width="2" />
            </div>
            <div class="block md:hidden shrink-0">
              <ArrowDown class="text-accent/30" size="32" stroke-width="2" />
            </div>
            
            <!-- Knowledge -->
            <div class="flex-1 w-full text-center group">
              <div class="text-green-500 font-bold mb-4 uppercase tracking-wider text-sm flex items-center justify-center gap-2">
                <div class="w-2 h-2 rounded-full bg-green-500"></div>
                المعرفة
              </div>
              <div class="bg-white rounded-2xl p-6 border border-green-200 shadow-md min-h-[160px] flex items-center justify-center group-hover:shadow-lg group-hover:border-green-300 transition-all relative overflow-hidden">
                <div class="absolute top-0 right-0 w-16 h-16 bg-green-500/10 rounded-bl-full"></div>
                <p class="font-bold text-xl text-green-700 leading-snug relative z-10">
                  {{ dikLessonData.examplesSection.examples[activeExample].knowledge }}
                </p>
              </div>
            </div>
            
          </div>
        </Transition>
      </div>
      
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { dikLessonData } from '~/data/lessons/first-baccalaureate/data-information-knowledge'
import { ArrowLeft, ArrowDown } from 'lucide-vue-next'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const activeExample = ref(0)
const examplesContainer = ref<HTMLElement | null>(null)
const headerRef = ref<HTMLElement | null>(null)
const contentRef = ref<HTMLElement | null>(null)

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)
  
  if (headerRef.value) {
    gsap.to(headerRef.value, {
      scrollTrigger: { trigger: headerRef.value, start: 'top 85%' },
      opacity: 1, y: 0, duration: 0.8, ease: 'power3.out'
    })
  }

  if (contentRef.value) {
    gsap.to(contentRef.value, {
      scrollTrigger: { trigger: contentRef.value, start: 'top 80%' },
      opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.2
    })
  }
})
</script>

<style scoped>
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

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
