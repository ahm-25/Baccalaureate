<template>
  <header id="hero" class="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-rose-50 py-20 border-b border-slate-200">
    <div class="absolute -top-24 -right-24 w-96 h-96 bg-rose-100/60 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>
    <div class="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-100/60 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>

    <div class="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-12">
      <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-200 mb-8">
        <span class="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
        <span class="text-sm font-bold text-slate-800">الدرس 2-3 • الأمن السيبراني</span>
      </div>

      <h1 class="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
        الاستجابة للحوادث <span class="text-transparent bg-clip-text bg-gradient-to-l from-rose-600 to-amber-500">وإدارة المخاطر</span>
      </h1>

      <p class="text-xl font-medium text-slate-600 max-w-2xl mx-auto leading-relaxed mb-10">
        حتى النظام المحمي جيدًا قد يتعرض لحادث أمني… كيف نوقف انتشار الضرر، ونزيل السبب، ونستعيد الخدمة، ثم نقرر أي المخاطر نعالجها أولًا؟
      </p>

      <!-- The six phases at a glance -->
      <div class="flex justify-center items-center gap-1.5 sm:gap-3 mb-10 flex-wrap">
        <div v-for="(p, i) in phases" :key="p.name" class="flex items-center gap-1.5 sm:gap-3">
          <div class="bg-white px-3 py-2 rounded-xl border shadow-sm flex flex-col items-center w-[4.5rem] sm:w-24" :class="p.border">
            <span class="text-xl sm:text-2xl">{{ p.icon }}</span>
            <span class="text-slate-700 text-[11px] sm:text-xs font-bold mt-1">{{ p.name }}</span>
          </div>
          <span v-if="i < phases.length - 1" class="text-rose-400 font-black">←</span>
        </div>
      </div>

      <div class="flex flex-col sm:flex-row justify-center items-center gap-4">
        <button @click="scrollTo('objectives')" class="px-8 py-4 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-2xl shadow-lg shadow-rose-600/20 transition-colors">
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
const phases = [
  { icon: '📋', name: 'التحضير', border: 'border-slate-200' },
  { icon: '🔎', name: 'الاكتشاف', border: 'border-sky-200' },
  { icon: '🧯', name: 'الاحتواء', border: 'border-amber-200' },
  { icon: '🧹', name: 'الاستئصال', border: 'border-rose-200' },
  { icon: '♻️', name: 'الاستعادة', border: 'border-emerald-200' },
  { icon: '📚', name: 'الدروس', border: 'border-indigo-200' },
]

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>
