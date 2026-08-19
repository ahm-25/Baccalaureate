<template>
  <section id="next" class="py-24 bg-surface relative overflow-hidden">
    <div class="max-w-4xl mx-auto px-6 w-full z-10 relative text-center">
      
      <h2 class="text-4xl md:text-5xl font-black text-maintext mb-8">إيه اللي جاي؟</h2>
      
      <p class="text-2xl text-mutedtext mb-12 max-w-2xl mx-auto leading-relaxed">
        في الدرس القادم هنتعلم إزاي <span class="text-primary font-bold">نخزن البيانات</span> داخل البرنامج باستخدام حاجة اسمها <span class="text-maintext font-black px-2 py-1 bg-primary/10 rounded-lg">Variables</span> (المتغيرات).
      </p>

      <div class="flex flex-col md:flex-row items-center justify-center gap-6 mb-16">
        
        <div class="bg-background border-2 border-border px-8 py-6 rounded-3xl shadow-sm relative w-48 group hover:-translate-y-2 transition-transform">
          <Package class="w-10 h-10 mx-auto mb-2 text-gray-500" />
          <p class="font-bold text-maintext text-xl">Data</p>
        </div>

        <ArrowLeft class="w-8 h-8 text-gray-400 rotate-90 md:rotate-0" />

        <div class="bg-primary px-8 py-6 rounded-3xl shadow-lg relative w-48 group hover:-translate-y-2 transition-transform">
          <Tag class="w-10 h-10 mx-auto mb-2 text-white" />
          <p class="font-bold text-white text-xl">Variable</p>
        </div>

        <ArrowLeft class="w-8 h-8 text-gray-400 rotate-90 md:rotate-0" />

        <div class="bg-green-50 border-2 border-green-200 px-8 py-6 rounded-3xl shadow-sm relative w-48 group hover:-translate-y-2 transition-transform">
          <Rocket class="w-10 h-10 mx-auto mb-2 text-green-500" />
          <p class="font-bold text-green-700 text-xl">Use the Data</p>
        </div>

      </div>

      <div class="mt-8">
        <p class="text-4xl font-black text-maintext mb-8 flex items-center justify-center gap-4">مستعد؟ <Rocket class="w-10 h-10 text-primary animate-bounce" /></p>
        <button class="bg-maintext hover:bg-black text-white px-12 py-5 rounded-2xl font-bold text-2xl shadow-xl transition-all hover:-translate-y-1">
          <span class="flex items-center justify-center gap-2">الدرس القادم <ArrowLeft class="w-6 h-6" /></span>
        </button>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { Package, ArrowLeft, Tag, Rocket } from 'lucide-vue-next'
</script>
