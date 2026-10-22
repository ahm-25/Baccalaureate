<template>
  <header id="hero" class="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-emerald-50 py-20 border-b border-slate-200">
    <div class="absolute -top-24 -right-24 w-96 h-96 bg-emerald-100/60 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>
    <div class="absolute -bottom-24 -left-24 w-96 h-96 bg-teal-100/60 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>

    <div class="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-12">
      <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-200 mb-8">
        <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        <span class="text-sm font-bold text-slate-800">الدرس 4-3 • تصميم الويب والوسائط</span>
      </div>

      <h1 class="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
        طرق تقييم <span class="text-transparent bg-clip-text bg-gradient-to-l from-emerald-600 to-teal-500">المواقع الإلكترونية</span>
      </h1>

      <p class="text-xl font-medium text-slate-600 max-w-2xl mx-auto leading-relaxed mb-10">
        كيف تعرف ما إذا كان الموقع يعمل جيدًا لمستخدميه؟ الأرقام تكشف ما يحدث… والمستخدمون يكشفون الأسباب.
      </p>

      <!-- "How many?" versus "Why?" -->
      <div class="flex justify-center items-stretch gap-3 sm:gap-6 mb-10">
        <div class="bg-white p-4 sm:p-5 rounded-2xl border border-emerald-200 shadow-sm w-36 sm:w-44">
          <ChartColumn class="w-9 h-9 text-emerald-600 mx-auto mb-2" />
          <span class="block text-lg font-black text-emerald-700">كم؟</span>
          <span class="text-slate-600 text-xs sm:text-sm font-bold">التقييم الكمي</span>
        </div>
        <div class="flex items-center text-2xl font-black text-slate-300">+</div>
        <div class="bg-white p-4 sm:p-5 rounded-2xl border border-teal-200 shadow-sm w-36 sm:w-44">
          <MessageCircle class="w-9 h-9 text-teal-600 mx-auto mb-2" />
          <span class="block text-lg font-black text-teal-700">لماذا؟</span>
          <span class="text-slate-600 text-xs sm:text-sm font-bold">التقييم النوعي</span>
        </div>
      </div>

      <div class="flex flex-col sm:flex-row justify-center items-center gap-4">
        <button @click="scrollTo('objectives')" class="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-2xl shadow-lg shadow-emerald-600/20 transition-colors">
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
import { ChartColumn, MessageCircle } from 'lucide-vue-next'

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>
