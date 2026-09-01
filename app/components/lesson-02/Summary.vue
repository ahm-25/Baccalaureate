<template>
  <section id="summary" class="min-h-screen relative flex flex-col justify-center py-24 px-6 sm:px-12 bg-surface overflow-hidden">
    <!-- Premium Ambient Background -->
    <div class="absolute inset-0 z-0 pointer-events-none">
      <div class="absolute top-[15%] left-[10%] w-[35vw] h-[35vw] bg-primary/5 rounded-full blur-[110px]"></div>
      <div class="absolute bottom-[15%] right-[10%] w-[35vw] h-[35vw] bg-accent/5 rounded-full blur-[110px]"></div>
    </div>

    <div class="max-w-4xl mx-auto w-full z-10">

      <div class="text-center mb-12" ref="headerRef">
        <div class="inline-flex items-center justify-center w-20 h-20 rounded-[1.5rem] bg-accent/10 text-accent mb-8 border border-accent/20 shadow-inner">
          <ListChecks size="38" stroke-width="1.5" />
        </div>
        <h2 class="text-5xl md:text-6xl font-black text-maintext mb-6 tracking-tight">{{ data.title }}</h2>
        <p class="text-xl text-mutedtext font-medium">{{ data.subtitle }}</p>
      </div>

      <!-- Accordion -->
      <div class="space-y-4" ref="listRef">
        <div v-for="(card, i) in data.cards" :key="card.id"
             class="summary-card bg-white rounded-[2rem] border-2 shadow-sm transition-all duration-300 overflow-hidden"
             :class="open === card.id ? 'border-primary/40 shadow-xl' : 'border-border hover:border-primary/20'">

          <button @click="toggle(card.id)"
                  class="w-full flex items-center gap-5 p-6 md:p-7 text-right">
            <div class="w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center font-black text-xl transition-colors duration-300"
                 :class="open === card.id ? 'bg-primary text-white shadow-lg shadow-primary/30' : 'bg-primary/10 text-primary border border-primary/20'">
              {{ String(i + 1).padStart(2, '0') }}
            </div>

            <div class="flex-1">
              <h3 class="text-xl md:text-2xl font-black text-maintext leading-snug">{{ card.title }}</h3>
              <p class="text-sm font-bold text-primary mt-1">({{ card.en }})</p>
            </div>

            <ChevronDown size="24"
                         class="shrink-0 transition-transform duration-300"
                         :class="open === card.id ? 'rotate-180 text-primary' : 'text-mutedtext'" />
          </button>

          <Transition name="expand">
            <div v-if="open === card.id" class="px-6 md:px-7 pb-7">
              <ul class="space-y-3 border-t border-border pt-6">
                <li v-for="point in card.points" :key="point"
                    class="flex items-start gap-3 text-lg text-mutedtext font-medium leading-relaxed">
                  <span class="w-6 h-6 shrink-0 rounded-lg bg-primary/10 text-primary flex items-center justify-center mt-1">
                    <Check size="14" stroke-width="3" />
                  </span>
                  {{ point }}
                </li>
              </ul>
            </div>
          </Transition>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { lessonData } from '~/data/lessons/first-baccalaureate/lesson-02'
import { ListChecks, ChevronDown, Check } from 'lucide-vue-next'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const data = lessonData.summary

const headerRef = ref<HTMLElement | null>(null)
const listRef = ref<HTMLElement | null>(null)

// The first card starts open so the section never reads as an empty list.
const open = ref<string | null>(data.cards[0]?.id ?? null)
const toggle = (id: string) => {
  open.value = open.value === id ? null : id
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
  reveal(listRef.value, 0.1)

  ScrollTrigger.refresh()
})
</script>

<style scoped>
.expand-enter-active,
.expand-leave-active {
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}
.expand-enter-from,
.expand-leave-to {
  opacity: 0;
  max-height: 0;
}
.expand-enter-to,
.expand-leave-from {
  opacity: 1;
  max-height: 600px;
}
</style>
