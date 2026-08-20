<template>
  <section id="core-idea" class="min-h-screen flex items-center justify-center py-24 px-6 sm:px-12 bg-primary text-white overflow-hidden relative">
    <div class="absolute inset-0 z-0 opacity-10" style="background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 32px 32px;"></div>
    
    <div class="max-w-5xl mx-auto w-full z-10 text-center">
      <div class="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/20 border border-white/30 text-white font-bold mb-10 shadow-sm backdrop-blur-sm">
        <Brain class="w-5 h-5" />
        مش مطلوب تحفظ... حاول تفهم
      </div>
      
      <h2 class="text-4xl md:text-5xl font-black mb-12 leading-tight text-white">
        لماذا تتطور التكنولوجيا أساساً؟
      </h2>
      
      <p class="text-2xl text-white/90 font-bold mb-16 max-w-3xl mx-auto leading-relaxed">
        التكنولوجيا لا تتطور من تلقاء نفسها، بل تتطور لأن الإنسان دائماً يبحث عن:
      </p>
      
      <!-- Core Cycle -->
      <div class="flex flex-col md:flex-row items-center justify-center gap-6 mb-16">
        
        <div class="bg-white/10 backdrop-blur-md border-2 border-white/20 p-8 rounded-3xl w-full md:w-64 flex flex-col items-center">
          <UserPlus class="w-16 h-16 text-yellow-300 mb-4" />
          <h3 class="text-2xl font-black text-white">احتياج إنساني</h3>
        </div>
        
        <ArrowLeft class="w-10 h-10 text-white/50 hidden md:block" />
        <ArrowDown class="w-10 h-10 text-white/50 md:hidden" />
        
        <div class="bg-white/10 backdrop-blur-md border-2 border-white/20 p-8 rounded-3xl w-full md:w-64 flex flex-col items-center">
          <Cpu class="w-16 h-16 text-blue-300 mb-4" />
          <h3 class="text-2xl font-black text-white">تطور تكنولوجي</h3>
        </div>
        
        <ArrowLeft class="w-10 h-10 text-white/50 hidden md:block" />
        <ArrowDown class="w-10 h-10 text-white/50 md:hidden" />
        
        <div class="bg-white/10 backdrop-blur-md border-2 border-white/20 p-8 rounded-3xl w-full md:w-64 flex flex-col items-center">
          <Sparkles class="w-16 h-16 text-green-300 mb-4" />
          <h3 class="text-2xl font-black text-white">حل جديد وتأثير مجتمعي</h3>
        </div>

      </div>
      
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="bg-white/5 p-4 rounded-xl text-center border border-white/10">
          <p class="font-bold">حلول أسرع</p>
        </div>
        <div class="bg-white/5 p-4 rounded-xl text-center border border-white/10">
          <p class="font-bold">تواصل أفضل</p>
        </div>
        <div class="bg-white/5 p-4 rounded-xl text-center border border-white/10">
          <p class="font-bold">عمل بكفاءة أعلى</p>
        </div>
        <div class="bg-white/5 p-4 rounded-xl text-center border border-white/10">
          <p class="font-bold">وصول أسهل للمعلومة</p>
        </div>
      </div>
      
    </div>
  </section>
</template>

<script setup lang="ts">
import { Brain, UserPlus, Cpu, Sparkles, ArrowLeft, ArrowDown } from 'lucide-vue-next'
</script>
