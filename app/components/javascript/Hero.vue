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
        <div class="bg-surface border-2 border-border px-8 py-4 rounded-3xl flex items-center gap-3 shadow-md hover:shadow-lg transition-shadow">
          <Leaf class="w-7 h-7 text-green-500" />
          <span class="font-black text-maintext text-xl">مناسب للمبتدئين</span>
        </div>
        <div class="bg-surface border-2 border-border px-8 py-4 rounded-3xl flex items-center gap-3 shadow-md hover:shadow-lg transition-shadow">
          <Puzzle class="w-7 h-7 text-blue-500" />
          <span class="font-black text-maintext text-xl">أساسيات البرمجة</span>
        </div>
        <div class="bg-surface border-2 border-border px-8 py-4 rounded-3xl flex items-center gap-3 shadow-md hover:shadow-lg transition-shadow">
          <Lightbulb class="w-7 h-7 text-purple-500" />
          <span class="font-black text-maintext text-xl">أمثلة عملية</span>
        </div>
      </div>
      
      <button @click="startLesson" class="bg-primary hover:bg-primary/90 text-white px-12 py-5 rounded-2xl font-bold text-2xl shadow-xl shadow-primary/30 hover:-translate-y-1 transition-all flex items-center gap-4">
        ابدأ الدرس <ArrowDown class="w-6 h-6" />
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Leaf, Puzzle, Lightbulb, ArrowDown } from 'lucide-vue-next'

const startLesson = () => {
  const el = document.getElementById('opening')
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>
