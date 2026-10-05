<template>
  <header id="hero" class="relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 py-24 min-h-[90vh] flex items-center">
    <div class="absolute inset-0">
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/30 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-pulse"></div>
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/30 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-pulse" style="animation-delay: 2s;"></div>
    </div>
    
    <div class="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 backdrop-blur-sm border border-slate-700 mb-8">
        <span class="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
        <span class="text-sm font-bold text-slate-200">الوحدة 2 • الأمن السيبراني • الدرس 2-1</span>
      </div>
      
      <h1 class="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight">
        تقنيات <span class="text-transparent bg-clip-text bg-gradient-to-l from-cyan-400 to-indigo-400">التشفير والمصادقة</span>
      </h1>
      
      <p class="text-xl md:text-2xl font-medium text-slate-300 max-w-3xl mx-auto leading-relaxed mb-12">
        من HTTPS إلى المصادقة الثنائية... إزاي البيانات والحسابات بتتحمى على الإنترنت؟
      </p>
      
      <!-- Visual Educational Graphic -->
      <div class="flex justify-center items-center gap-6 mb-12 flex-wrap">
        <div class="bg-slate-800/50 p-4 rounded-2xl border border-slate-700 flex flex-col items-center w-32">
          <div class="text-4xl mb-2">🌐</div>
          <span class="text-slate-300 text-sm font-bold">متصفح</span>
        </div>
        <div class="flex items-center gap-2 text-cyan-400">
          <span class="text-2xl">🔒</span>
          <div class="h-1 w-16 bg-gradient-to-l from-cyan-400 to-indigo-400 rounded"></div>
          <span class="text-2xl">🔑</span>
        </div>
        <div class="bg-slate-800/50 p-4 rounded-2xl border border-slate-700 flex flex-col items-center w-32">
          <div class="text-4xl mb-2">🖥️</div>
          <span class="text-slate-300 text-sm font-bold">خادم</span>
        </div>
      </div>
      
      <div class="flex flex-col sm:flex-row justify-center items-center gap-4">
        <button @click="scrollTo('opening')" class="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold rounded-2xl shadow-lg shadow-cyan-500/20 transition-all flex items-center gap-2">
          <span>ابدأ الدرس</span>
        </button>
        <button @click="scrollTo('practice-quiz')" class="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-2xl border border-slate-700 transition-all">
          اختبر معلوماتك
        </button>
      </div>
    </div>
  </header>
</template>
<script setup>
const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};
</script>
