<template>
  <header id="hero" class="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-orange-50 py-20 border-b border-slate-200">
    <div class="absolute -top-24 -right-24 w-96 h-96 bg-orange-100/60 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>
    <div class="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-100/60 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>

    <div class="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-12">
      <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-200 mb-8">
        <span class="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
        <span class="text-sm font-bold text-slate-800">الدرس 3-3 • تطبيقات الويب</span>
      </div>

      <h1 class="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
        أساسيات تقنية <span class="text-transparent bg-clip-text bg-gradient-to-l from-orange-600 to-amber-500">الواجهة الأمامية</span>
      </h1>

      <p class="text-xl font-medium text-slate-600 max-w-2xl mx-auto leading-relaxed mb-10">
        HTML يبني الهيكل، وCSS ينسّق المظهر، وJavaScript يضيف السلوك… وكيف تجعل HTML الدلالية والتصميم المتجاوب وأطر العمل الصفحة ذات معنى وقابلة للتكيف؟
      </p>

      <!-- The three layers -->
      <div class="flex justify-center items-center gap-3 sm:gap-5 mb-10 flex-wrap">
        <div v-for="(l, i) in layers" :key="l.name" class="flex items-center gap-3 sm:gap-5">
          <div class="bg-white p-4 rounded-2xl border shadow-sm flex flex-col items-center w-24 sm:w-32" :class="l.border">
            <component :is="l.icon" class="w-8 h-8 mb-2" :class="l.color" />
            <span class="font-black text-slate-800" dir="ltr">{{ l.name }}</span>
            <span class="text-xs text-slate-500 font-bold mt-1">{{ l.role }}</span>
          </div>
          <span v-if="i < layers.length - 1" class="text-2xl font-black text-orange-400">+</span>
        </div>
      </div>

      <div class="flex flex-col sm:flex-row justify-center items-center gap-4">
        <button @click="scrollTo('objectives')" class="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-2xl shadow-lg shadow-orange-600/20 transition-colors">
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
import { Code, Palette, Zap } from 'lucide-vue-next'

const layers = [
  { name: 'HTML', role: 'البنية', icon: Code, color: 'text-orange-600', border: 'border-orange-200' },
  { name: 'CSS', role: 'المظهر', icon: Palette, color: 'text-sky-600', border: 'border-sky-200' },
  { name: 'JavaScript', role: 'السلوك', icon: Zap, color: 'text-amber-500', border: 'border-amber-200' },
]

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>
