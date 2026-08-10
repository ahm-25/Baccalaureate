<template>
  <div class="w-full relative py-12" ref="flowContainer">
    <!-- Teacher Note -->
    <div v-if="isTeacherMode" class="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-xl mb-12 shadow-sm text-yellow-900 animate-fade-in max-w-4xl mx-auto">
      <div class="flex items-center gap-2 mb-3 font-bold text-yellow-700">
        <Lightbulb size="20" />
        <span>ملاحظة للمعلم</span>
      </div>
      <p class="font-bold mb-3">اسأل الطلاب:</p>
      <ul class="space-y-2">
        <li class="flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-yellow-400"></span>
          لو قلتلك 20، 30، 40... دي بيانات ولا معلومات؟ 
          <span class="text-primary font-bold bg-white px-2 py-1 rounded shadow-sm text-sm">بيانات</span>
        </li>
        <li class="flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-yellow-400"></span>
          لو قلتلك متوسط الفصل 30؟ 
          <span class="text-accent font-bold bg-white px-2 py-1 rounded shadow-sm text-sm">معلومات</span>
        </li>
        <li class="flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-yellow-400"></span>
          لو قررت تزود حصص المراجعة بناءً على النتيجة؟ 
          <span class="text-green-600 font-bold bg-white px-2 py-1 rounded shadow-sm text-sm">معرفة</span>
        </li>
      </ul>
    </div>

    <div class="flex flex-col lg:flex-row items-stretch justify-between gap-6 relative z-10 max-w-7xl mx-auto">
      
      <!-- Stage: Data -->
      <div class="dik-stage relative flex-1 bg-white/80 backdrop-blur-xl border border-border rounded-3xl p-8 flex flex-col justify-between shadow-lg">
        <div class="mb-6">
          <div class="text-blue-500/20 font-black text-6xl mb-2">{{ dikLessonData.flow[0].number }}</div>
          <h3 class="text-3xl font-bold text-blue-600 mb-4">{{ dikLessonData.flow[0].title }}</h3>
          <p class="text-mutedtext leading-relaxed font-medium">{{ dikLessonData.flow[0].definition }}</p>
        </div>
        
        <div class="bg-blue-50/50 rounded-2xl p-6 border border-blue-100 text-center relative overflow-hidden group min-h-[220px] flex flex-col justify-center">
          <div class="flex justify-center gap-3 flex-wrap mb-6 relative z-10">
            <span v-for="num in dikLessonData.flow[0].example" :key="num" class="text-2xl font-black text-blue-600 bg-white shadow-sm border border-blue-100 px-4 py-2 rounded-xl">
              {{ num }}
            </span>
          </div>
          <p class="text-sm font-semibold text-blue-800/60 mb-6 relative z-10">{{ dikLessonData.flow[0].label }}</p>
          
          <button @click="showDataReveal = !showDataReveal" 
                  class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-bold transition-all relative z-10 shadow-md hover:shadow-lg hover:-translate-y-0.5 mx-auto">
            {{ dikLessonData.flow[0].buttonLabel }}
          </button>
          
          <Transition name="fade-slide-up">
            <div v-if="showDataReveal" class="absolute inset-0 bg-blue-600 text-white p-6 flex items-center justify-center text-center z-20 backdrop-blur-md">
              <p class="font-medium leading-relaxed text-lg">{{ dikLessonData.flow[0].revealText }}</p>
              <button @click="showDataReveal = false" class="absolute top-4 right-4 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors">
                <X size="20" stroke-width="2.5" />
              </button>
            </div>
          </Transition>
        </div>
      </div>
      
      <!-- Arrow Data -> Info -->
      <div class="hidden lg:flex items-center justify-center shrink-0 w-12 dik-arrow">
        <ArrowLeft size="40" stroke-width="1.5" class="text-blue-200" />
      </div>
      <div class="flex lg:hidden items-center justify-center shrink-0 h-12 dik-arrow">
        <ArrowDown size="40" stroke-width="1.5" class="text-blue-200" />
      </div>
      
      <!-- Stage: Information -->
      <div class="dik-stage relative flex-1 bg-white/80 backdrop-blur-xl border border-border rounded-3xl p-8 flex flex-col justify-between shadow-lg">
        <div class="mb-6">
          <div class="text-purple-500/20 font-black text-6xl mb-2">{{ dikLessonData.flow[1].number }}</div>
          <h3 class="text-3xl font-bold text-purple-600 mb-4">{{ dikLessonData.flow[1].title }}</h3>
          <p class="text-mutedtext leading-relaxed font-medium">{{ dikLessonData.flow[1].definition }}</p>
        </div>
        
        <div class="bg-purple-50/50 rounded-2xl p-6 border border-purple-100 text-center flex flex-col justify-center items-center min-h-[220px]">
          <div class="text-2xl font-black text-purple-700 bg-white shadow-sm border border-purple-100 px-6 py-4 rounded-xl mb-6 w-full">
            {{ dikLessonData.flow[1].example }}
          </div>
          <p class="text-sm font-semibold text-purple-800/60 mt-auto">{{ dikLessonData.flow[1].label }}</p>
        </div>
      </div>
      
      <!-- Arrow Info -> Knowledge -->
      <div class="hidden lg:flex items-center justify-center shrink-0 w-12 dik-arrow">
        <ArrowLeft size="40" stroke-width="1.5" class="text-purple-200" />
      </div>
      <div class="flex lg:hidden items-center justify-center shrink-0 h-12 dik-arrow">
        <ArrowDown size="40" stroke-width="1.5" class="text-purple-200" />
      </div>
      
      <!-- Stage: Knowledge -->
      <div class="dik-stage relative flex-1 bg-white/80 backdrop-blur-xl border border-border rounded-3xl p-8 flex flex-col justify-between shadow-lg border-b-4 border-b-green-500">
        <div class="mb-6">
          <div class="text-green-500/20 font-black text-6xl mb-2">{{ dikLessonData.flow[2].number }}</div>
          <h3 class="text-3xl font-bold text-green-600 mb-4">{{ dikLessonData.flow[2].title }}</h3>
          <p class="text-mutedtext leading-relaxed font-medium">{{ dikLessonData.flow[2].definition }}</p>
        </div>
        
        <div class="bg-green-50/50 rounded-2xl p-6 border border-green-100 text-center flex flex-col justify-center items-center min-h-[220px]">
          <div class="text-xl font-bold text-green-700 bg-white shadow-sm border border-green-100 px-6 py-4 rounded-xl mb-6 w-full leading-snug">
            {{ dikLessonData.flow[2].example }}
          </div>
          <p class="text-sm font-semibold text-green-800/60 mt-auto">{{ dikLessonData.flow[2].label }}</p>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { dikLessonData } from '~/data/lessons/first-baccalaureate/data-information-knowledge'
import { ArrowLeft, ArrowDown, X, Lightbulb } from 'lucide-vue-next'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useTeacherMode } from '~/composables/useTeacherMode'

const { isTeacherMode } = useTeacherMode()
const showDataReveal = ref(false)
const flowContainer = ref<HTMLElement | null>(null)

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)
  
  if (flowContainer.value) {
    const stages = flowContainer.value.querySelectorAll('.dik-stage')
    const arrows = flowContainer.value.querySelectorAll('.dik-arrow')
    
    gsap.fromTo(stages, 
      { opacity: 0, y: 50 },
      {
        scrollTrigger: {
          trigger: flowContainer.value,
          start: 'top 75%'
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'back.out(1.2)'
      }
    )
    
    gsap.fromTo(arrows,
      { opacity: 0, scale: 0.5 },
      {
        scrollTrigger: {
          trigger: flowContainer.value,
          start: 'top 75%'
        },
        opacity: 1,
        scale: 1,
        duration: 0.6,
        delay: 0.4,
        stagger: 0.2,
        ease: 'power2.out'
      }
    )
  }
})
</script>

<style scoped>
.fade-slide-up-enter-active,
.fade-slide-up-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.fade-slide-up-enter-from,
.fade-slide-up-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
