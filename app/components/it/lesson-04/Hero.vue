<template>
  <section id="hero" class="min-h-screen relative flex items-center justify-center overflow-hidden bg-background">
    <div class="absolute inset-0 z-0">
      <div class="absolute top-1/4 -right-[10%] w-[50vw] h-[50vw] bg-primary/5 rounded-full blur-[100px] animate-float"></div>
      <div class="absolute bottom-1/4 -left-[10%] w-[50vw] h-[50vw] bg-accent/5 rounded-full blur-[100px] animate-float" style="animation-delay: -3s"></div>
    </div>
    
    <div class="max-w-7xl mx-auto px-6 lg:px-12 w-full z-10 flex flex-col items-center text-center py-20 relative">
      <!-- Label -->
      <div class="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-surface border border-border shadow-sm mb-8">
        <span class="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
        <span class="text-sm font-bold text-maintext">الدرس 1-1 | تكنولوجيا المعلومات والمجتمع</span>
      </div>
      
      <!-- Title -->
      <h1 class="text-5xl md:text-7xl font-black text-maintext mb-6 tracking-tight leading-tight max-w-5xl">
        تطور تكنولوجيا المعلومات والتحول الاجتماعي
      </h1>
      
      <!-- Subtitle -->
      <p class="text-2xl md:text-3xl text-primary font-bold mb-6 max-w-3xl leading-relaxed">
        من الحواسب الأولى إلى الحوسبة السحابية والتقنيات الناشئة
      </p>

      <!-- Hook -->
      <p class="text-xl md:text-2xl text-mutedtext mb-8 max-w-3xl leading-relaxed font-medium">
        التكنولوجيا لم تغيّر الأجهزة فقط... بل غيّرت طريقة تواصلنا وعملنا وتعلمنا وتجارِتنا ودفعنا.
      </p>

      <!-- Teacher -->
      <div class="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 mb-12">
        <User class="w-5 h-5 text-primary" />
        <span class="text-lg font-bold text-primary">المهندس أحمد عبد الناصر</span>
      </div>

      <!-- Main Question Badge -->
      <div class="bg-surface border-2 border-primary/20 rounded-3xl p-8 max-w-3xl w-full shadow-lg mb-12">
        <div class="flex items-center gap-3 justify-center mb-4">
          <HelpCircle class="w-7 h-7 text-primary" />
          <span class="text-lg font-bold text-primary">السؤال المحوري للدرس</span>
        </div>
        <p class="text-2xl md:text-3xl font-black text-maintext leading-relaxed">
          كيف تطورت تكنولوجيا المعلومات عبر مراحلها الرئيسية، وكيف غيّرت كل مرحلة المجتمع؟
        </p>
      </div>

      <button @click="startLesson" class="bg-primary hover:bg-primary/90 text-white px-12 py-5 rounded-2xl font-bold text-2xl shadow-xl shadow-primary/30 hover:-translate-y-1 transition-all flex items-center gap-4">
        ابدأ الدرس <ArrowDown class="w-6 h-6" />
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowDown, User, HelpCircle } from 'lucide-vue-next'

const startLesson = () => {
  const el = document.getElementById('objectives')
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>
