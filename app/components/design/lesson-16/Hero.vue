<template>
  <header id="hero" class="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50 py-20 border-b border-slate-200">
    <div class="absolute -top-24 -right-24 w-96 h-96 bg-blue-100/60 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>
    <div class="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-100/60 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>

    <div class="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-12">
      <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-200 mb-8">
        <span class="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
        <span class="text-sm font-bold text-slate-800">الدرس 4-4 • تصميم الويب والوسائط</span>
      </div>

      <h1 class="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
        عملية التحسين التكراري <span class="text-transparent bg-clip-text bg-gradient-to-l from-blue-600 to-indigo-600">للمواقع الإلكترونية</span>
      </h1>

      <p class="text-xl font-medium text-slate-600 max-w-2xl mx-auto leading-relaxed mb-10">
        لا تُبنى المواقع الإلكترونية الجيدة مثالية من أول مرة… بل تتحسن عبر حلقات متكررة: خطّط، نفّذ، تحقّق، تصرّف — ثم كرّر.
      </p>

      <!-- PDCA ring at a glance -->
      <div class="relative w-56 h-56 mx-auto mb-10">
        <div class="absolute inset-6 rounded-full border-4 border-dashed border-indigo-200 animate-[spin_18s_linear_infinite]"></div>
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="w-20 h-20 rounded-full bg-indigo-600 text-white flex flex-col items-center justify-center shadow-lg shadow-indigo-600/30">
            <RefreshCw class="w-7 h-7" />
            <span class="text-[11px] font-bold mt-1">التحسين المستمر</span>
          </div>
        </div>
        <div v-for="s in steps" :key="s.en" class="absolute w-16 h-16 rounded-2xl bg-white border-2 shadow-sm flex flex-col items-center justify-center" :class="[s.pos, s.border]">
          <span class="text-lg font-black" :class="s.text">{{ s.en }}</span>
          <span class="text-[11px] font-bold text-slate-600">{{ s.ar }}</span>
        </div>
      </div>

      <div class="flex flex-col sm:flex-row justify-center items-center gap-4">
        <button @click="scrollTo('objectives')" class="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-2xl shadow-lg shadow-indigo-600/20 transition-colors">
          ابدأ الدرس
        </button>
        <button @click="scrollTo('practice-quiz')" class="px-8 py-4 bg-white hover:bg-slate-50 text-slate-800 font-bold rounded-2xl border border-slate-200 transition-colors">
          اختبر معلوماتك
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { RefreshCw } from 'lucide-vue-next'

// Placed clockwise around the ring: Plan top, Do right, Check bottom, Act left
const steps = [
  { en: 'P', ar: 'خطّط', pos: 'top-0 left-1/2 -translate-x-1/2', border: 'border-blue-300', text: 'text-blue-600' },
  { en: 'D', ar: 'نفّذ', pos: 'top-1/2 right-0 -translate-y-1/2', border: 'border-indigo-300', text: 'text-indigo-600' },
  { en: 'C', ar: 'تحقّق', pos: 'bottom-0 left-1/2 -translate-x-1/2', border: 'border-violet-300', text: 'text-violet-600' },
  { en: 'A', ar: 'تصرّف', pos: 'top-1/2 left-0 -translate-y-1/2', border: 'border-sky-300', text: 'text-sky-600' },
]

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>
