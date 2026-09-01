<template>
  <section id="homework" class="min-h-screen relative flex flex-col justify-center py-24 px-6 sm:px-12 bg-surface overflow-hidden">
    <!-- Premium Ambient Background -->
    <div class="absolute inset-0 z-0 pointer-events-none">
      <div class="absolute top-[20%] right-[15%] w-[30vw] h-[30vw] bg-accent/10 rounded-full blur-[100px]"></div>
      <div class="absolute bottom-[20%] left-[15%] w-[30vw] h-[30vw] bg-primary/5 rounded-full blur-[100px]"></div>
    </div>

    <div class="max-w-3xl mx-auto w-full z-10" ref="wrapRef">

      <div class="text-center mb-12">
        <div class="inline-flex items-center justify-center w-20 h-20 rounded-[1.5rem] bg-primary/10 text-primary mb-8 border border-primary/20 shadow-inner">
          <ClipboardList size="38" stroke-width="1.5" />
        </div>
        <h2 class="text-4xl md:text-5xl font-black text-maintext mb-6 tracking-tight">{{ data.title }}</h2>
        <p class="text-xl text-mutedtext font-medium">{{ data.subtitle }}</p>
      </div>

      <div class="bg-white border border-border rounded-[2.5rem] p-6 md:p-10 shadow-xl">
        <div class="space-y-3">
          <label v-for="(task, i) in data.tasks" :key="task.title"
                 class="flex items-start gap-4 p-5 rounded-2xl border transition-all cursor-pointer group"
                 :class="done[i] ? 'bg-emerald-50/60 border-emerald-200' : 'bg-background border-border hover:border-primary/30'">

            <div class="relative flex items-center justify-center mt-1 shrink-0">
              <input type="checkbox" v-model="done[i]"
                     class="w-6 h-6 rounded-md border-2 border-border checked:bg-primary checked:border-primary appearance-none transition-colors peer cursor-pointer" />
              <svg class="absolute w-4 h-4 text-white pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity"
                   xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
            </div>

            <div class="flex-1 text-right">
              <div class="flex items-center gap-2 mb-1.5">
                <span class="text-xs font-black text-mutedtext/60">مهمة {{ i + 1 }}</span>
              </div>
              <div class="text-lg md:text-xl font-bold transition-colors leading-relaxed"
                   :class="done[i] ? 'text-emerald-700 line-through decoration-emerald-400' : 'text-maintext group-hover:text-primary'">
                {{ task.title }}
              </div>
              <p class="text-sm text-mutedtext font-medium mt-2 flex items-start gap-2">
                <Lightbulb size="14" class="text-accent shrink-0 mt-0.5" stroke-width="2.5" />
                {{ task.hint }}
              </p>
            </div>
          </label>
        </div>

        <!-- Progress -->
        <div class="mt-8 pt-6 border-t border-border flex items-center justify-between gap-4">
          <span class="font-bold text-mutedtext">خلّصت {{ doneCount }} من {{ data.tasks.length }}</span>
          <div class="flex-1 max-w-[200px] h-2.5 rounded-full bg-border overflow-hidden">
            <div class="h-full bg-primary rounded-full transition-all duration-500"
                 :style="{ width: (doneCount / data.tasks.length) * 100 + '%' }"></div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { lessonData } from '~/data/lessons/first-baccalaureate/lesson-02'
import { ClipboardList, Lightbulb } from 'lucide-vue-next'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const data = lessonData.homework
const wrapRef = ref<HTMLElement | null>(null)

const done = ref<boolean[]>(data.tasks.map(() => false))
const doneCount = computed(() => done.value.filter(Boolean).length)

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)

  if (wrapRef.value) {
    gsap.set(wrapRef.value, { y: 40, opacity: 0 })
    gsap.to(wrapRef.value, {
      scrollTrigger: { trigger: wrapRef.value, start: 'top 85%', once: true },
      y: 0, opacity: 1, duration: 0.9, ease: 'power3.out'
    })
  }

  ScrollTrigger.refresh()
})
</script>
