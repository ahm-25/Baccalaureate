<template>
  <section id="opening" class="min-h-screen relative flex flex-col items-center justify-center py-24 px-6 sm:px-12 bg-surface">
    <div class="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-accent/5 rounded-full blur-[120px]"></div>
    </div>
    
    <div class="max-w-5xl mx-auto w-full z-10 text-center">
      <div class="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 text-primary mb-8 border border-primary/20 shadow-inner">
        <span class="text-5xl">🤔</span>
      </div>
      
      <h2 class="text-4xl md:text-5xl font-black text-maintext mb-6">قبل ما نبدأ... فكر</h2>
      
      <p class="text-2xl md:text-3xl text-primary font-bold mb-16 leading-relaxed">
        هل تتخيل شكل الكمبيوتر والاتصالات قبل الإنترنت والهواتف الذكية؟
      </p>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-white/80 backdrop-blur-md p-8 rounded-3xl border border-white shadow-xl hover:-translate-y-2 transition-transform duration-300">
          <MessageCircle class="w-12 h-12 text-blue-500 mb-6 mx-auto" />
          <h3 class="text-xl font-bold text-maintext leading-relaxed">كيف كان الناس يتواصلون قبل الإنترنت؟</h3>
        </div>
        
        <div class="bg-white/80 backdrop-blur-md p-8 rounded-3xl border border-white shadow-xl hover:-translate-y-2 transition-transform duration-300 delay-100">
          <Monitor class="w-12 h-12 text-purple-500 mb-6 mx-auto" />
          <h3 class="text-xl font-bold text-maintext leading-relaxed">كيف كانت أجهزة الكمبيوتر في الماضي؟</h3>
        </div>
        
        <div class="bg-white/80 backdrop-blur-md p-8 rounded-3xl border border-white shadow-xl hover:-translate-y-2 transition-transform duration-300 delay-200">
          <Zap class="w-12 h-12 text-amber-500 mb-6 mx-auto" />
          <h3 class="text-xl font-bold text-maintext leading-relaxed">لماذا أصبحت التكنولوجيا اليوم أسرع وأصغر وأكثر انتشارًا؟</h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { MessageCircle, Monitor, Zap } from 'lucide-vue-next'
</script>
