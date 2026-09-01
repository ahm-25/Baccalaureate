<template>
  <section id="problems" class="min-h-screen relative flex flex-col justify-center py-24 px-6 sm:px-12 bg-surface overflow-hidden">
    <!-- Premium Ambient Background -->
    <div class="absolute inset-0 z-0 pointer-events-none">
      <div class="absolute top-[10%] left-[8%] w-[35vw] h-[35vw] bg-red-500/5 rounded-full blur-[110px]"></div>
      <div class="absolute bottom-[10%] right-[8%] w-[40vw] h-[40vw] bg-primary/5 rounded-full blur-[120px]"></div>
    </div>

    <div class="max-w-6xl mx-auto w-full z-10">

      <!-- Header -->
      <div class="text-center mb-14" ref="headerRef">
        <div class="inline-flex items-center justify-center w-20 h-20 rounded-[1.5rem] bg-red-50 text-red-500 mb-8 border border-red-100 shadow-inner">
          <Smartphone size="38" stroke-width="1.5" />
        </div>
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-black text-maintext mb-4 tracking-tight text-balance">{{ data.title }}</h2>
        <p class="text-lg text-mutedtext font-medium max-w-2xl mx-auto">خمس مشاكل بالظبط — احفظ الاسم العربي والإنجليزي والتعريف لكل واحدة.</p>
      </div>

      <!-- The five problems -->
      <div ref="cardsRef" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
        <div v-for="item in data.items" :key="item.id"
             class="problem-card bg-white rounded-[1.75rem] border border-border hover:border-red-300 shadow-sm hover:shadow-xl transition-all duration-300 text-right p-7 flex flex-col">

          <div class="flex items-start justify-between gap-3 mb-5">
            <div class="w-14 h-14 rounded-2xl flex items-center justify-center border shrink-0"
                 :class="styles[item.id].wrap">
              <component :is="styles[item.id].icon" size="26" stroke-width="1.8" />
            </div>
            <span class="text-4xl font-black text-border leading-none select-none">{{ String(item.num).padStart(2, '0') }}</span>
          </div>

          <h3 class="text-xl font-black text-maintext leading-snug mb-1">{{ item.title }}</h3>
          <p class="text-sm font-bold text-primary mb-4">({{ item.en }})</p>

          <p class="text-base text-mutedtext font-medium leading-relaxed mb-5 flex-1">{{ item.definition }}</p>

          <div class="bg-background rounded-2xl p-4 border border-border">
            <div class="flex items-center gap-2 text-xs font-black text-mutedtext/70 mb-1.5">
              <Eye size="13" stroke-width="2.5" /> مثال واقعي
            </div>
            <p class="text-sm text-maintext/80 font-medium leading-relaxed">{{ item.example }}</p>
          </div>
        </div>
      </div>

      <!-- The point examiners love: what "internet addiction" exactly means -->
      <div ref="noteRef" class="bg-maintext text-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-maintext/25 relative overflow-hidden">
        <div class="absolute -bottom-24 -left-24 w-72 h-72 bg-accent/20 rounded-full blur-3xl pointer-events-none"></div>
        <div class="relative z-10 flex flex-col md:flex-row gap-8 items-start text-right">
          <div class="w-16 h-16 shrink-0 rounded-2xl bg-accent/20 text-accent flex items-center justify-center border border-accent/30">
            <AlertCircle size="32" stroke-width="1.8" />
          </div>
          <div>
            <div class="inline-block bg-accent text-maintext text-xs font-black px-4 py-1.5 rounded-full mb-5">
              {{ data.note.title }}
            </div>
            <p class="text-xl md:text-2xl font-medium leading-[1.8] text-balance">{{ data.note.text }}</p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { lessonData } from '~/data/lessons/first-baccalaureate/lesson-02'
import {
  Smartphone, Eye, AlertCircle, Timer, Footprints, ShieldAlert, UserX, DatabaseBackup
} from 'lucide-vue-next'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const data = lessonData.problems

const headerRef = ref<HTMLElement | null>(null)
const cardsRef = ref<HTMLElement | null>(null)
const noteRef = ref<HTMLElement | null>(null)

// One icon and tint per problem so students recognise them by shape, not order.
const styles: Record<string, { icon: any; wrap: string }> = {
  addiction: { icon: Timer, wrap: 'bg-red-50 text-red-500 border-red-100' },
  walking: { icon: Footprints, wrap: 'bg-amber-50 text-amber-600 border-amber-100' },
  cybercrime: { icon: ShieldAlert, wrap: 'bg-rose-50 text-rose-600 border-rose-100' },
  identity: { icon: UserX, wrap: 'bg-primary/10 text-primary border-primary/20' },
  leakage: { icon: DatabaseBackup, wrap: 'bg-accent/10 text-accent border-accent/20' }
}

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)

  const reveal = (el: HTMLElement | null, delay = 0) => {
    if (!el) return
    gsap.set(el, { y: 40, opacity: 0 })
    gsap.to(el, {
      scrollTrigger: { trigger: el, start: 'top 85%', once: true },
      y: 0, opacity: 1, duration: 0.9, delay, ease: 'power3.out'
    })
  }

  reveal(headerRef.value)
  reveal(noteRef.value)

  if (cardsRef.value) {
    const cards = cardsRef.value.querySelectorAll('.problem-card')
    gsap.set(cards, { y: 30, opacity: 0 })
    gsap.to(cards, {
      scrollTrigger: { trigger: cardsRef.value, start: 'top 80%', once: true },
      y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out'
    })
  }

  ScrollTrigger.refresh()
})
</script>
