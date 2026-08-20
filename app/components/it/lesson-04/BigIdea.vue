<template>
  <section id="big-idea" class="min-h-screen flex items-center justify-center py-24 px-6 sm:px-12 bg-primary text-white overflow-hidden relative">
    <div class="absolute inset-0 opacity-10" style="background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 32px 32px;"></div>
    
    <div class="max-w-6xl mx-auto w-full z-10 text-center">
      <h2 class="text-5xl md:text-7xl font-black mb-8 leading-tight text-white tracking-tight">
        تكنولوجيا المعلومات لم تتطور مرة واحدة...
      </h2>
      
      <p class="text-2xl md:text-3xl text-white/80 font-bold max-w-4xl mx-auto leading-relaxed mb-16">
        مرت تكنولوجيا المعلومات بسلسلة من المراحل المتتابعة، وفي كل مرحلة تغيّرت طريقة تواصل الناس وعملهم وتعلمهم ودفعهم.
      </p>

      <!-- Visual Chain -->
      <div class="flex flex-wrap justify-center items-center gap-4 text-xl font-bold">
        <div v-for="(stage, i) in stages" :key="i" class="flex items-center gap-4">
          <div class="bg-white/20 backdrop-blur-md px-6 py-3 rounded-full border border-white/30">{{ stage }}</div>
          <ArrowLeft v-if="i < stages.length - 1" class="w-6 h-6 text-white/50 hidden md:block" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowLeft } from 'lucide-vue-next'

const stages = [
  'الحواسيب',
  'الإنترنت',
  'الهواتف الذكية',
  'الحوسبة السحابية',
  'تقنيات ناشئة جديدة'
]
</script>
