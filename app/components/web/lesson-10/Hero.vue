<template>
  <header id="hero" class="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-violet-50 py-20 border-b border-slate-200">
    <div class="absolute -top-24 -right-24 w-96 h-96 bg-violet-100/60 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>
    <div class="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-100/60 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>

    <div class="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-12">
      <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-200 mb-8">
        <span class="w-2 h-2 rounded-full bg-violet-500 animate-pulse"></span>
        <span class="text-sm font-bold text-slate-800">الدرس 3-1 • تطبيقات الويب</span>
      </div>

      <h1 class="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
        البنية العامة <span class="text-transparent bg-clip-text bg-gradient-to-l from-violet-600 to-indigo-600">لتطبيقات الويب</span>
      </h1>

      <p class="text-xl font-medium text-slate-600 max-w-2xl mx-auto leading-relaxed mb-10">
        خلف كل موقع فيديو أو متجر إلكتروني أو بريد على الويب تعمل ثلاث طبقات معًا… من يعرض؟ ومن يعالج؟ وأين تُحفظ البيانات؟
      </p>

      <!-- User → front-end → back-end → database -->
      <div class="flex justify-center items-center gap-2 sm:gap-4 mb-10 flex-wrap">
        <div v-for="(n, i) in nodes" :key="n.label" class="flex items-center gap-2 sm:gap-4">
          <div class="bg-white p-3 sm:p-4 rounded-2xl border shadow-sm flex flex-col items-center w-20 sm:w-28" :class="n.border">
            <component :is="n.icon" class="w-8 h-8 mb-2" :class="n.color" />
            <span class="text-slate-700 text-xs sm:text-sm font-bold">{{ n.label }}</span>
          </div>
          <div v-if="i < nodes.length - 1" class="h-1 w-4 sm:w-8 bg-gradient-to-l from-violet-400 to-indigo-500 rounded-full"></div>
        </div>
      </div>

      <div class="flex flex-col sm:flex-row justify-center items-center gap-4">
        <button @click="scrollTo('objectives')" class="px-8 py-4 bg-violet-600 hover:bg-violet-700 text-white font-bold rounded-2xl shadow-lg shadow-violet-600/20 transition-colors">
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
import { User, Monitor, Server, Database } from 'lucide-vue-next'

const nodes = [
  { label: 'المستخدم', icon: User, color: 'text-slate-500', border: 'border-slate-200' },
  { label: 'الواجهة الأمامية', icon: Monitor, color: 'text-violet-600', border: 'border-violet-200' },
  { label: 'الواجهة الخلفية', icon: Server, color: 'text-indigo-600', border: 'border-indigo-200' },
  { label: 'قاعدة البيانات', icon: Database, color: 'text-sky-600', border: 'border-sky-200' },
]

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>
