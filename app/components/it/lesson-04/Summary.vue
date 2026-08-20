<template>
  <section id="summary" class="min-h-screen flex flex-col justify-center py-24 px-6 sm:px-12 bg-primary text-white overflow-hidden relative">
    <div class="absolute inset-0 opacity-10" style="background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 32px 32px;"></div>
    
    <div class="max-w-5xl mx-auto w-full z-10">
      <div class="text-center mb-16">
        <h2 class="text-5xl md:text-6xl font-black text-white mb-6">الخلاصة</h2>
      </div>

      <!-- Visual Timeline Summary -->
      <div class="flex flex-wrap justify-center items-center gap-3 mb-16 text-lg font-bold">
        <div v-for="(s, i) in evolutionSteps" :key="i" class="flex items-center gap-3">
          <div class="bg-white/20 backdrop-blur-md px-5 py-2 rounded-full border border-white/30">{{ s }}</div>
          <ArrowLeft v-if="i < evolutionSteps.length - 1" class="w-5 h-5 text-white/40 hidden md:block" />
        </div>
      </div>

      <!-- Social Changes Summary -->
      <div class="flex flex-wrap justify-center gap-4 mb-16">
        <div v-for="c in socialChanges" :key="c" class="bg-white/10 border border-white/20 px-5 py-3 rounded-full font-bold">
          {{ c }}
        </div>
      </div>

      <!-- Key Statement -->
      <div class="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-10 mb-10">
        <p class="text-2xl md:text-3xl font-bold text-white leading-relaxed text-center">
          في كل مرحلة أضافت تكنولوجيا المعلومات جهازًا أو خدمة جديدة، وغيّرت معها طريقة تواصل المجتمع وعمله وتعلمه وتجارته وسداده للمدفوعات.
        </p>
      </div>

      <div class="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
        <p class="text-xl font-bold text-white/80 leading-relaxed">
          التطور التكنولوجي لا يعني أجهزة أسرع وأصغر فقط، بل يؤدي إلى تغيرات اجتماعية واقتصادية، ويخلق فوائد وتحديات جديدة.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowLeft } from 'lucide-vue-next'

const evolutionSteps = ['الحواسب', 'الإنترنت', 'الهواتف الذكية', 'الحوسبة السحابية']
const socialChanges = ['تواصل', 'عمل', 'تعلم', 'تجارة', 'دفع']
</script>
