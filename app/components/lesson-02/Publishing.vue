<template>
  <section id="publishing" class="min-h-screen relative flex flex-col justify-center py-24 px-6 sm:px-12 bg-surface overflow-hidden">
    <!-- Premium Ambient Background -->
    <div class="absolute inset-0 z-0 pointer-events-none">
      <div class="absolute top-[10%] left-[5%] w-[35vw] h-[35vw] bg-accent/5 rounded-full blur-[110px]"></div>
      <div class="absolute bottom-[15%] right-[5%] w-[40vw] h-[40vw] bg-primary/5 rounded-full blur-[120px]"></div>
    </div>

    <div class="max-w-6xl mx-auto w-full z-10">

      <!-- Header -->
      <div class="text-center mb-14 opacity-0 translate-y-8" ref="headerRef">
        <div class="inline-flex items-center justify-center w-20 h-20 rounded-[1.5rem] bg-accent/10 text-accent mb-8 border border-accent/20 shadow-inner">
          <Send size="36" stroke-width="1.5" />
        </div>
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-black text-maintext mb-4 tracking-tight text-balance">{{ data.title }}</h2>
      </div>

      <!-- Nature of information + spread demo -->
      <div ref="natureRef" class="opacity-0 translate-y-10 grid grid-cols-1 lg:grid-cols-2 gap-6 mb-20">

        <!-- Textbook statement -->
        <div class="bg-white rounded-[2rem] p-8 md:p-10 border border-border shadow-sm text-right flex flex-col justify-center">
          <div class="inline-flex self-start items-center gap-2 bg-primary/10 text-primary text-xs font-black px-4 py-1.5 rounded-full mb-6 border border-primary/20">
            <BookOpen size="14" stroke-width="2.5" />
            {{ data.natureTitle }}
          </div>
          <p class="text-2xl md:text-3xl font-bold text-maintext leading-[1.6] mb-6 text-balance">
            {{ data.nature }}
          </p>
          <p class="text-lg text-mutedtext font-medium leading-relaxed border-t border-border pt-6">
            {{ data.simple }}
          </p>
        </div>

        <!-- Spread animation: one post copies itself and never comes back -->
        <div class="bg-maintext rounded-[2rem] p-8 md:p-10 shadow-2xl shadow-maintext/20 relative overflow-hidden flex flex-col">
          <div class="absolute -top-20 -right-20 w-56 h-56 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>

          <div class="relative z-10 flex items-center justify-between gap-4 mb-8">
            <h3 class="text-xl font-black text-white">{{ data.spreadDemo.title }}</h3>
            <button @click="runSpread"
                    class="bg-white/10 hover:bg-white/20 text-white text-sm font-bold px-5 py-2.5 rounded-xl border border-white/20 transition-colors flex items-center gap-2 shrink-0">
              <component :is="spreadStep >= data.spreadDemo.steps.length ? RotateCcw : Play" size="16" stroke-width="2.5" />
              {{ spreadStep >= data.spreadDemo.steps.length ? 'إعادة' : 'انشر' }}
            </button>
          </div>

          <div class="relative z-10 flex-1 flex flex-col justify-center gap-3">
            <div v-for="(step, i) in data.spreadDemo.steps" :key="step"
                 class="flex items-center gap-4 rounded-2xl px-5 py-4 border transition-all duration-500"
                 :class="[
                   spreadStep > i
                     ? (i === data.spreadDemo.steps.length - 1
                         ? 'bg-accent/20 border-accent/40 translate-x-0 opacity-100'
                         : 'bg-white/10 border-white/20 translate-x-0 opacity-100')
                     : 'bg-white/5 border-white/5 opacity-25 translate-x-4'
                 ]">
              <span class="w-9 h-9 shrink-0 rounded-xl flex items-center justify-center font-black text-sm transition-colors duration-500"
                    :class="spreadStep > i
                      ? (i === data.spreadDemo.steps.length - 1 ? 'bg-accent text-maintext' : 'bg-primary text-white')
                      : 'bg-white/10 text-white/40'">
                {{ i + 1 }}
              </span>
              <span class="font-bold text-white/90 leading-snug">{{ step }}</span>
            </div>
          </div>

          <p class="relative z-10 text-white/60 text-sm font-medium mt-6 pt-6 border-t border-white/10 leading-relaxed">
            بمجرد ما المعلومة تنتشر، مبقاش عندك تحكّم فيها — عشان كده التفكير بيكون <span class="text-accent font-bold">قبل</span> النشر.
          </p>
        </div>
      </div>

      <!-- The six rules -->
      <div ref="rulesRef" class="opacity-0 translate-y-12">
        <h3 class="text-3xl md:text-4xl font-black text-maintext text-center mb-4 tracking-tight">الست قواعد اللي لازم تراعيها</h3>
        <p class="text-lg text-mutedtext text-center mb-6 max-w-2xl mx-auto font-medium">
          كل قاعدة من دول ممنوعة صراحةً في الكتاب — اضغط على أي قاعدة تشوف الغلط والصح فيها.
        </p>

        <!-- Which English terms come from the textbook itself -->
        <div class="flex flex-wrap items-center justify-center gap-4 mb-12 text-xs font-bold">
          <span class="flex items-center gap-2 text-mutedtext">
            <span class="px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">Copyright</span>
            {{ data.rulesLegend.book }}
          </span>
          <span class="flex items-center gap-2 text-mutedtext">
            <span class="px-3 py-1 rounded-full bg-maintext/5 text-mutedtext border border-border">Privacy</span>
            {{ data.rulesLegend.extra }}
          </span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
          <div v-for="(rule, i) in data.rules" :key="rule.id"
               @click="toggleRule(rule.id)"
               class="rule-card group bg-white rounded-[1.75rem] border shadow-sm hover:shadow-xl transition-all duration-300 text-right cursor-pointer overflow-hidden"
               :class="openRule === rule.id ? 'border-red-300 shadow-xl' : 'border-border hover:border-red-200'">

            <div class="p-6 md:p-7 flex gap-5 items-start">
              <div class="w-12 h-12 shrink-0 rounded-2xl flex items-center justify-center border transition-colors duration-300"
                   :class="openRule === rule.id ? 'bg-red-500 text-white border-red-500' : 'bg-red-50 text-red-500 border-red-100 group-hover:bg-red-500 group-hover:text-white'">
                <X size="24" stroke-width="3" />
              </div>

              <div class="flex-1">
                <div class="flex items-center gap-2 mb-2 flex-wrap">
                  <span class="text-xs font-black text-mutedtext/60">{{ String(i + 1).padStart(2, '0') }}</span>
                  <span class="text-xs font-black px-3 py-1 rounded-full border"
                        :class="rule.inBook ? 'text-primary bg-primary/10 border-primary/20' : 'text-mutedtext bg-maintext/5 border-border'">
                    {{ rule.en }}
                  </span>
                </div>
                <p class="text-lg font-bold text-maintext leading-relaxed mb-3">{{ rule.title }}</p>
                <p class="text-sm text-mutedtext font-medium leading-relaxed border-r-2 border-border pr-3">{{ rule.hint }}</p>
              </div>

              <ChevronDown size="20"
                           class="shrink-0 text-mutedtext transition-transform duration-300 mt-1"
                           :class="openRule === rule.id ? 'rotate-180 text-red-500' : ''" />
            </div>

            <!-- Wrong vs right, and what it costs -->
            <Transition name="expand">
              <div v-if="openRule === rule.id" class="px-6 md:px-7 pb-7">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                  <div class="bg-red-50/70 border border-red-100 rounded-2xl p-4">
                    <div class="flex items-center gap-2 text-red-600 font-black text-sm mb-2">
                      <X size="16" stroke-width="3" /> تصرّف غلط
                    </div>
                    <p class="text-sm text-maintext/80 font-medium leading-relaxed">{{ rule.wrong }}</p>
                  </div>
                  <div class="bg-emerald-50/70 border border-emerald-100 rounded-2xl p-4">
                    <div class="flex items-center gap-2 text-emerald-600 font-black text-sm mb-2">
                      <Check size="16" stroke-width="3" /> تصرّف سليم
                    </div>
                    <p class="text-sm text-maintext/80 font-medium leading-relaxed">{{ rule.right }}</p>
                  </div>
                </div>
                <div class="bg-maintext text-white rounded-2xl p-4 flex items-start gap-3">
                  <AlertTriangle size="18" class="text-accent shrink-0 mt-0.5" stroke-width="2.5" />
                  <p class="text-sm font-medium leading-relaxed">{{ rule.risk }}</p>
                </div>
              </div>
            </Transition>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { lessonData } from '~/data/lessons/first-baccalaureate/lesson-02'
import { Send, BookOpen, X, Check, Play, RotateCcw, ChevronDown, AlertTriangle } from 'lucide-vue-next'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const data = lessonData.publishing

const headerRef = ref<HTMLElement | null>(null)
const natureRef = ref<HTMLElement | null>(null)
const rulesRef = ref<HTMLElement | null>(null)

// One rule open at a time keeps the grid from jumping around on the projector.
const openRule = ref<string | null>(null)
const toggleRule = (id: string) => {
  openRule.value = openRule.value === id ? null : id
}

// The spread demo walks the steps one by one so the copying feels inevitable.
const spreadStep = ref(0)
let spreadTimer: ReturnType<typeof setInterval> | null = null

const runSpread = () => {
  if (spreadTimer) clearInterval(spreadTimer)
  spreadStep.value = 0
  spreadTimer = setInterval(() => {
    spreadStep.value++
    if (spreadStep.value >= data.spreadDemo.steps.length && spreadTimer) {
      clearInterval(spreadTimer)
      spreadTimer = null
    }
  }, 700)
}

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)

  const reveal = (el: HTMLElement | null, delay = 0) => {
    if (!el) return
    gsap.to(el, {
      scrollTrigger: { trigger: el, start: 'top 85%' },
      y: 0, opacity: 1, duration: 0.9, delay, ease: 'power3.out'
    })
  }

  reveal(headerRef.value)
  reveal(natureRef.value, 0.1)
  reveal(rulesRef.value)

  // The cards stagger in from a state set here rather than with gsap.from():
  // a from() tween paints them at opacity 0 on load, and if its ScrollTrigger
  // never fires (this section is lazy-loaded, so the layout shifts under it)
  // the six rules stay invisible.
  if (rulesRef.value) {
    const cards = rulesRef.value.querySelectorAll('.rule-card')
    gsap.set(cards, { y: 30, opacity: 0 })
    gsap.to(cards, {
      scrollTrigger: { trigger: rulesRef.value, start: 'top 80%', once: true },
      y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: 'power3.out'
    })
  }

  // Start the spread demo the first time it scrolls into view.
  if (natureRef.value) {
    ScrollTrigger.create({
      trigger: natureRef.value,
      start: 'top 60%',
      once: true,
      onEnter: runSpread
    })
  }

  // Lazy hydration means this section can mount after the page height settles;
  // without a refresh the triggers above keep stale positions and never fire.
  ScrollTrigger.refresh()
})

onUnmounted(() => {
  if (spreadTimer) clearInterval(spreadTimer)
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
  transform: translateY(-8px);
}
.expand-enter-to,
.expand-leave-from {
  opacity: 1;
  max-height: 500px;
}
</style>
