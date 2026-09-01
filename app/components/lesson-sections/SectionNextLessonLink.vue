<template>
  <section id="next-lesson-link" class="relative flex items-center justify-center py-28 px-6 sm:px-12 bg-background overflow-hidden">
    <div class="absolute inset-0 z-0 pointer-events-none">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55vw] h-[55vw] bg-primary/5 rounded-full blur-[120px]"></div>
    </div>

    <div class="max-w-3xl mx-auto w-full text-center z-10">
      <div class="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-surface border border-border shadow-sm mb-10">
        <span class="w-3 h-3 rounded-full bg-green-500 animate-pulse"></span>
        <span class="font-bold text-maintext">خلصت الدرس الأول!</span>
      </div>

      <h2 class="text-4xl md:text-5xl font-black text-maintext mb-6 leading-tight text-balance">
        عرفنا إزاي المعلومة بتوصلنا... طب نتعامل معاها إزاي؟
      </h2>

      <NuxtLink to="/lesson-2"
                class="block bg-surface border border-border rounded-[2.5rem] p-10 shadow-2xl relative overflow-hidden group hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 text-right">
        <div class="absolute -right-10 -top-10 text-9xl opacity-5 transform group-hover:scale-110 group-hover:rotate-12 transition-all">🤝</div>

        <div class="relative z-10">
          <div class="text-lg text-primary font-bold mb-3">الدرس التالي:</div>
          <h3 class="text-3xl md:text-4xl font-black text-maintext mb-3">أخلاقيات المعلومات</h3>
          <p class="text-lg text-mutedtext font-medium mb-8">إيه اللي ينفع وإيه اللي مينفعش نعمله على الإنترنت؟</p>

          <span class="bg-primary group-hover:bg-primary/90 text-white font-bold text-xl px-10 py-4 rounded-2xl transition-all inline-flex items-center gap-3">
            ابدأ الدرس الثاني <ArrowLeft size="20" stroke-width="2.5" />
          </span>
        </div>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowLeft } from 'lucide-vue-next'
</script>
