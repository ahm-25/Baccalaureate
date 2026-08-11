<template>
  <section id="next" class="min-h-screen py-24 bg-background relative flex flex-col justify-center overflow-hidden">
    <!-- Background effects -->
    <div class="absolute inset-0 z-0">
      <div class="absolute top-1/4 -right-[20%] w-[60vw] h-[60vw] bg-primary/5 rounded-full blur-[120px] animate-pulse" style="animation-duration: 4s"></div>
      <div class="absolute bottom-1/4 -left-[20%] w-[60vw] h-[60vw] bg-accent/5 rounded-full blur-[120px] animate-pulse" style="animation-duration: 5s"></div>
    </div>
    
    <div class="max-w-4xl mx-auto px-6 lg:px-12 w-full text-center z-10">
      <div class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-surface border border-border shadow-lg mb-12 animate-fade-in-up">
        <span class="w-3 h-3 rounded-full bg-primary animate-pulse"></span>
        <span class="text-sm font-bold text-maintext">نهاية الدرس الثالث</span>
      </div>
      
      <h2 class="text-5xl md:text-7xl font-black text-maintext mb-8 tracking-tight">
        دلوقتي البرنامج بقى يقدر
        <span class="block mt-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">ياخد قرار.</span>
      </h2>
      
      <p class="text-2xl md:text-3xl font-bold text-mutedtext mb-12 max-w-2xl mx-auto leading-relaxed">
        لكن...
        <br>
        <span class="opacity-80">ماذا لو عايزين نكرر نفس المهمة أكتر من مرة؟</span>
      </p>

      <div class="bg-surface/50 backdrop-blur-xl border border-border rounded-[2rem] p-8 md:p-12 shadow-2xl max-w-2xl mx-auto mb-16 transform transition-all hover:scale-105 duration-500">
        <div class="text-lg font-bold text-primary mb-2">الدرس القادم</div>
        <h3 class="text-4xl md:text-5xl font-black text-maintext mb-4">Loops — التكرار</h3>
        <p class="text-xl text-mutedtext">هنتعلم إزاي نخلي الكود يعيد نفسه بدون ما نكتبه مرة تانية.</p>
      </div>
      
      <NuxtLink 
        to="/second-baccalaureate/javascript/lesson-04"
        class="inline-flex items-center gap-4 bg-primary hover:bg-primary/90 text-white px-12 py-6 rounded-2xl font-bold text-2xl shadow-xl shadow-primary/30 hover:-translate-y-2 transition-all group"
      >
        <span>الدرس القادم</span>
        <span class="group-hover:-translate-x-2 transition-transform">←</span>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
// Component logic goes here
</script>

<style scoped>
.animate-fade-in-up {
  animation: fadeInUp 1s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
