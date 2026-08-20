<template>
  <section id="real-life-scenario" class="min-h-screen flex items-center justify-center py-24 px-6 sm:px-12 bg-primary overflow-hidden relative">
    <div class="absolute inset-0 z-0">
      <div class="absolute top-1/4 -left-1/4 w-[50vw] h-[50vw] bg-white/5 rounded-full blur-[100px]"></div>
      <div class="absolute bottom-1/4 -right-1/4 w-[50vw] h-[50vw] bg-accent/20 rounded-full blur-[100px]"></div>
    </div>
    
    <div class="max-w-4xl mx-auto w-full z-10 text-center">
      <div class="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/10 text-white mb-8 border border-white/20 shadow-inner">
        <span class="text-5xl">🧐</span>
      </div>
      
      <h2 class="text-4xl md:text-5xl font-black text-white mb-6">تخيل حياتك بدون التكنولوجيا الحديثة</h2>
      
      <p class="text-3xl md:text-4xl text-accent font-bold mb-12 leading-relaxed">
        ماذا سيحدث لو لم يكن هناك إنترنت لمدة أسبوع؟
      </p>

      <div class="bg-white/10 backdrop-blur-xl rounded-[3rem] p-10 border border-white/20 shadow-2xl">
        <h3 class="text-2xl font-bold text-white mb-8">فكر في تأثير ذلك على:</h3>
        
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          <div class="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col items-center justify-center gap-3 hover:bg-white/10 transition-colors">
            <GraduationCap class="w-8 h-8 text-blue-300" />
            <span class="text-white font-bold">الدراسة</span>
          </div>
          
          <div class="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col items-center justify-center gap-3 hover:bg-white/10 transition-colors">
            <MessageCircle class="w-8 h-8 text-green-300" />
            <span class="text-white font-bold">التواصل</span>
          </div>
          
          <div class="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col items-center justify-center gap-3 hover:bg-white/10 transition-colors">
            <Briefcase class="w-8 h-8 text-purple-300" />
            <span class="text-white font-bold">العمل</span>
          </div>
          
          <div class="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col items-center justify-center gap-3 hover:bg-white/10 transition-colors">
            <ShoppingCart class="w-8 h-8 text-orange-300" />
            <span class="text-white font-bold">التسوق</span>
          </div>
          
          <div class="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col items-center justify-center gap-3 hover:bg-white/10 transition-colors md:col-span-2">
            <Landmark class="w-8 h-8 text-emerald-300" />
            <span class="text-white font-bold">الخدمات العامة</span>
          </div>
        </div>

        <div class="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-accent/20 border border-accent/50">
          <Info class="w-6 h-6 text-accent" />
          <p class="text-xl font-bold text-white">التكنولوجيا أصبحت جزءًا أساسيًا من حياتنا اليومية.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { GraduationCap, MessageCircle, Briefcase, ShoppingCart, Landmark, Info } from 'lucide-vue-next'
</script>
