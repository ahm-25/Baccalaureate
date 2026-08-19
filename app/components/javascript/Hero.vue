<template>
  <section id="hero" class="min-h-screen relative flex items-center justify-center overflow-hidden bg-background">
    <div class="absolute inset-0 z-0">
      <div class="absolute top-1/4 -right-[10%] w-[50vw] h-[50vw] bg-primary/5 rounded-full blur-[100px] animate-float"></div>
      <div class="absolute bottom-1/4 -left-[10%] w-[50vw] h-[50vw] bg-accent/5 rounded-full blur-[100px] animate-float" style="animation-delay: -3s"></div>
    </div>
    
    <div class="max-w-7xl mx-auto px-6 lg:px-12 w-full z-10 flex flex-col items-center text-center py-20 relative">
      <div class="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-surface border border-border shadow-sm mb-8">
        <span class="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
        <span class="text-sm font-bold text-maintext">الدرس الأول</span>
      </div>
      
      <div class="mb-4">
        <span class="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent tracking-widest uppercase">JavaScript</span>
      </div>

      <h1 class="text-5xl md:text-7xl font-black text-maintext mb-8 tracking-tight leading-tight max-w-4xl">
        أساسيات البرمجة باستخدام JavaScript
      </h1>
      
      <p class="text-2xl text-mutedtext mb-12 max-w-3xl leading-relaxed font-medium">
        هنبدأ من الصفر ونتعلم أساسيات البرمجة باستخدام JavaScript خطوة بخطوة.
      </p>

      <div class="flex flex-wrap justify-center gap-4 mb-16">
        <div class="bg-surface border border-border px-6 py-3 rounded-2xl flex items-center gap-2 shadow-sm">
          <span class="text-green-500 text-xl">🌱</span>
          <span class="font-bold text-maintext">Beginner Friendly</span>
        </div>
        <div class="bg-surface border border-border px-6 py-3 rounded-2xl flex items-center gap-2 shadow-sm">
          <span class="text-blue-500 text-xl">🧩</span>
          <span class="font-bold text-maintext">Programming Fundamentals</span>
        </div>
        <div class="bg-surface border border-border px-6 py-3 rounded-2xl flex items-center gap-2 shadow-sm">
          <span class="text-purple-500 text-xl">💡</span>
          <span class="font-bold text-maintext">Practical Examples</span>
        </div>
      </div>
      
      <button @click="startLesson" class="bg-primary hover:bg-primary/90 text-white px-12 py-5 rounded-2xl font-bold text-2xl shadow-xl shadow-primary/30 hover:-translate-y-1 transition-all flex items-center gap-4">
        ابدأ الدرس <span>↓</span>
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
const startLesson = () => {
  const el = document.getElementById('opening')
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>
