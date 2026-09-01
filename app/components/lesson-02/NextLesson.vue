<template>
  <section id="next" class="min-h-screen relative flex items-center justify-center py-24 px-6 sm:px-12 bg-background overflow-hidden">
    <div class="absolute inset-0 z-0 pointer-events-none">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-primary/5 rounded-full blur-[120px] animate-pulse"></div>
    </div>

    <div class="max-w-4xl mx-auto w-full text-center z-10" ref="wrapRef">

      <div class="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-surface border border-border shadow-sm mb-12">
        <span class="w-3 h-3 rounded-full bg-green-500 animate-pulse"></span>
        <span class="font-bold text-maintext">{{ data.badge }}</span>
      </div>

      <h2 class="text-4xl md:text-6xl font-black text-maintext mb-8 leading-tight text-balance">
        {{ data.title }}
      </h2>

      <p class="text-2xl md:text-3xl font-bold text-mutedtext mb-16">
        {{ data.question }}
      </p>

      <!-- Next lesson teaser -->
      <div class="bg-surface border border-border rounded-[2.5rem] p-10 max-w-2xl mx-auto shadow-2xl relative overflow-hidden group hover:border-primary/50 transition-colors">
        <div class="absolute -right-10 -top-10 text-9xl opacity-5 transform group-hover:scale-110 group-hover:rotate-12 transition-all">⚖️</div>

        <div class="relative z-10">
          <div class="text-xl text-primary font-bold mb-4">{{ data.label }}</div>
          <h3 class="text-3xl md:text-4xl font-black text-maintext mb-4 leading-snug">{{ data.lessonTitle }}</h3>
          <p class="text-lg text-mutedtext font-medium mb-2">{{ data.lessonSubtitle }}</p>
          <p class="text-base font-bold text-primary mb-8">({{ data.en }})</p>

          <button disabled
                  class="bg-border text-mutedtext font-bold text-xl px-10 py-4 rounded-2xl cursor-not-allowed inline-flex items-center gap-3">
            قريبًا <Lock size="20" stroke-width="2.5" />
          </button>
        </div>
      </div>

      <!-- Lesson navigation -->
      <div class="mt-16 flex flex-wrap items-center justify-center gap-4">
        <NuxtLink to="/"
                  class="bg-white border border-border text-maintext hover:text-primary hover:border-primary/40 font-bold px-8 py-4 rounded-2xl transition-all hover:-translate-y-0.5 shadow-sm inline-flex items-center gap-3">
          <ArrowRight size="20" stroke-width="2.5" />
          <span>
            الدرس الأول
            <span class="block text-xs font-medium text-mutedtext mt-0.5">المعلومات والوسائط</span>
          </span>
        </NuxtLink>

        <button @click="scrollToTop"
                class="bg-maintext hover:bg-primary text-white font-bold px-8 py-4 rounded-2xl transition-all hover:-translate-y-0.5 shadow-lg inline-flex items-center gap-3">
          <ArrowUp size="20" stroke-width="2.5" />
          راجع الدرس من أوله
        </button>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { lessonData } from '~/data/lessons/first-baccalaureate/lesson-02'
import { Lock, ArrowRight, ArrowUp } from 'lucide-vue-next'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const data = lessonData.next
const wrapRef = ref<HTMLElement | null>(null)

const scrollToTop = () => {
  document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })
}

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
