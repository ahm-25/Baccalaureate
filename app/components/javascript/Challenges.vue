<template>
  <section id="challenges" class="py-24 bg-background relative overflow-hidden">
    <!-- Decorative Glows -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-primary/5 rounded-full blur-[120px]"></div>
    </div>
    
    <div class="max-w-7xl mx-auto px-6 w-full z-10 relative">
      
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-black text-maintext mb-6 flex items-center justify-center gap-4">جرب بنفسك <Rocket class="w-12 h-12 text-primary" /></h2>
        <p class="text-2xl text-mutedtext max-w-2xl mx-auto leading-relaxed">
          اكتب كود <span class="text-primary font-bold">JavaScript</span> وشوف النتيجة بنفسك
        </p>
      </div>

      <InteractivePlayground />

    </div>
  </section>
</template>

<script setup lang="ts">
import InteractivePlayground from '../interactive/InteractivePlayground.vue'
import { Rocket } from 'lucide-vue-next'
</script>
