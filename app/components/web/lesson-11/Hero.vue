<template>
  <header id="hero" class="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-sky-50 py-20 border-b border-slate-200">
    <div class="absolute -top-24 -right-24 w-96 h-96 bg-sky-100/60 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>
    <div class="absolute -bottom-24 -left-24 w-96 h-96 bg-cyan-100/60 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>

    <div class="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-12">
      <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-200 mb-8">
        <span class="w-2 h-2 rounded-full bg-sky-500 animate-pulse"></span>
        <span class="text-sm font-bold text-slate-800">الدرس 3-2 • تطبيقات الويب</span>
      </div>

      <h1 class="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
        طرق اتصال <span class="text-transparent bg-clip-text bg-gradient-to-l from-sky-600 to-cyan-500">تطبيقات الويب</span>
      </h1>

      <p class="text-xl font-medium text-slate-600 max-w-2xl mx-auto leading-relaxed mb-10">
        عندما تنقر على رابط أو تبدأ بحثًا، يرسل المتصفح طلبًا ويعيد الخادم استجابة… ما القواعد والرسائل التي يستخدمانها؟
      </p>

      <!-- Client ⇄ server visual -->
      <div class="flex justify-center items-center gap-3 sm:gap-6 mb-10">
        <div class="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center w-24 sm:w-28">
          <Laptop class="w-9 h-9 text-sky-600 mb-2" />
          <span class="text-slate-700 text-sm font-bold">العميل</span>
        </div>
        <div class="flex flex-col items-center gap-1 text-xs font-bold">
          <span class="text-sky-700" dir="ltr">GET /page →</span>
          <div class="h-1 w-16 sm:w-28 bg-gradient-to-l from-sky-400 to-cyan-500 rounded-full"></div>
          <span class="text-emerald-700" dir="ltr">← 200 OK</span>
        </div>
        <div class="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center w-24 sm:w-28">
          <Server class="w-9 h-9 text-cyan-600 mb-2" />
          <span class="text-slate-700 text-sm font-bold">الخادم</span>
        </div>
      </div>

      <div class="flex flex-col sm:flex-row justify-center items-center gap-4">
        <button @click="scrollTo('objectives')" class="px-8 py-4 bg-sky-600 hover:bg-sky-700 text-white font-bold rounded-2xl shadow-lg shadow-sky-600/20 transition-colors">
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
import { Laptop, Server } from 'lucide-vue-next'

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>
