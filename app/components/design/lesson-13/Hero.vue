<template>
  <header id="hero" class="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-teal-50 py-20 border-b border-slate-200">
    <div class="absolute -top-24 -right-24 w-96 h-96 bg-teal-100/60 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>
    <div class="absolute -bottom-24 -left-24 w-96 h-96 bg-cyan-100/60 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>

    <div class="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-12">
      <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-200 mb-8">
        <span class="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
        <span class="text-sm font-bold text-slate-800">الدرس 4-1 • تصميم الويب والوسائط</span>
      </div>

      <h1 class="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
        أنواع الوسائط <span class="text-transparent bg-clip-text bg-gradient-to-l from-teal-600 to-cyan-600">وخصائصها</span>
      </h1>

      <p class="text-xl font-medium text-slate-600 max-w-2xl mx-auto leading-relaxed mb-10">
        التلفزيون، والراديو، والصحيفة، والموقع الإلكتروني، ووسائل التواصل الاجتماعي… لكل وسيلة نقاط قوة وقيود. كيف تختار الأنسب لرسالتك وجمهورك؟
      </p>

      <div class="flex justify-center items-center gap-2 sm:gap-4 mb-10 flex-wrap">
        <div v-for="m in media" :key="m.label" class="bg-white p-3 sm:p-4 rounded-2xl border shadow-sm flex flex-col items-center w-20 sm:w-28" :class="m.border">
          <component :is="m.icon" class="w-8 h-8 mb-2" :class="m.color" />
          <span class="text-slate-700 text-xs sm:text-sm font-bold">{{ m.label }}</span>
        </div>
      </div>

      <div class="flex flex-col sm:flex-row justify-center items-center gap-4">
        <button @click="scrollTo('objectives')" class="px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-2xl shadow-lg shadow-teal-600/20 transition-colors">
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
import { Tv, Radio, Newspaper, Globe, Share2 } from 'lucide-vue-next'

const media = [
  { label: 'التلفزيون', icon: Tv, color: 'text-rose-600', border: 'border-rose-200' },
  { label: 'الراديو', icon: Radio, color: 'text-amber-600', border: 'border-amber-200' },
  { label: 'الصحيفة', icon: Newspaper, color: 'text-slate-600', border: 'border-slate-200' },
  { label: 'الموقع', icon: Globe, color: 'text-teal-600', border: 'border-teal-200' },
  { label: 'التواصل', icon: Share2, color: 'text-sky-600', border: 'border-sky-200' },
]

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>
