<template>
  <section id="objectives" class="py-24 px-6 sm:px-12 bg-surface overflow-hidden relative">
    <div class="absolute inset-0 z-0 pointer-events-none">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-primary/5 rounded-full blur-[120px]"></div>
    </div>

    <div class="max-w-5xl mx-auto w-full z-10 relative">
      <div class="text-center mb-14">
        <div class="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
          <Target class="w-5 h-5 text-primary" />
          <span class="text-lg font-bold text-primary">أهداف التعلم</span>
        </div>
        <h2 class="text-4xl md:text-5xl font-black text-maintext">بنهاية هذا الدرس ستكون قادرًا على:</h2>
      </div>

      <div class="space-y-6">
        <div class="bg-white/90 backdrop-blur-md p-8 rounded-3xl border border-border shadow-md flex gap-6 items-start hover:shadow-lg transition-shadow">
          <div class="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center shrink-0 border border-blue-200 text-blue-600 font-black text-xl">1</div>
          <p class="text-xl md:text-2xl font-bold text-maintext leading-relaxed pt-2">
            شرح المراحل الرئيسية في تطور تكنولوجيا المعلومات وأثرها في المجتمع.
          </p>
        </div>

        <div class="bg-white/90 backdrop-blur-md p-8 rounded-3xl border border-border shadow-md flex gap-6 items-start hover:shadow-lg transition-shadow">
          <div class="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center shrink-0 border border-green-200 text-green-600 font-black text-xl">2</div>
          <p class="text-xl md:text-2xl font-bold text-maintext leading-relaxed pt-2">
            ذكر أمثلة على التغيرات الاجتماعية والتقنيات الناشئة التي أحدثتها تكنولوجيا المعلومات، وشرح خصائصها.
          </p>
        </div>

        <div class="bg-white/90 backdrop-blur-md p-8 rounded-3xl border border-border shadow-md flex gap-6 items-start hover:shadow-lg transition-shadow">
          <div class="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center shrink-0 border border-purple-200 text-purple-600 font-black text-xl">3</div>
          <p class="text-xl md:text-2xl font-bold text-maintext leading-relaxed pt-2">
            تحليل أثر إحدى تقنيات المعلومات في فئات مختلفة من المجتمع، وتبرير قرار مستند إلى الأدلة.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Target } from 'lucide-vue-next'
</script>
