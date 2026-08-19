<template>
  <section id="what-is-js" class="py-24 bg-surface relative overflow-hidden">
    <!-- Decorative Background Elements -->
    <div class="absolute inset-0 z-0 pointer-events-none">
      <div class="absolute top-0 right-0 w-[40vw] h-[40vw] bg-primary/5 rounded-full blur-[100px]"></div>
      <div class="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-[#F7DF1E]/10 rounded-full blur-[100px]"></div>
    </div>

    <div class="max-w-6xl mx-auto px-6 w-full z-10 relative">
      
      <div class="text-center mb-20">
        <div class="inline-flex items-center justify-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full font-bold text-sm mb-6 border border-primary/20">
          <Target class="w-4 h-4" /> الهدف القادم
        </div>
        <h2 class="text-4xl md:text-5xl font-black text-maintext mb-6 tracking-tight">طيب إزاي نكتب التعليمات دي؟</h2>
        <p class="text-2xl text-mutedtext max-w-3xl mx-auto leading-relaxed font-medium">
          علشان الكمبيوتر يفهمنا، لازم نكلمه بلغته... بنستخدم <span class="text-primary font-black">لغات البرمجة</span>.
        </p>
      </div>

      <!-- Programming Languages Showcase -->
      <div class="flex flex-col md:flex-row justify-center items-center gap-12 mb-24 relative">
        <!-- Background connector line (desktop only) -->
        <div class="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-gray-200 -translate-y-1/2 z-0"></div>

        <!-- Python -->
        <div class="w-64 bg-white border-2 border-gray-100 p-8 rounded-[2rem] flex flex-col items-center justify-center gap-4 hover:-translate-y-2 transition-all duration-300 shadow-sm relative z-10 grayscale hover:grayscale-0 opacity-70 hover:opacity-100">
          <div class="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center shadow-inner overflow-hidden border border-gray-100" dir="ltr">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" class="w-12 h-12" />
          </div>
          <span class="text-2xl font-bold text-gray-600">Python</span>
        </div>

        <!-- JavaScript (The Hero) -->
        <div class="w-72 bg-gradient-to-br from-[#F7DF1E] to-[#D4B800] p-10 rounded-[2rem] flex flex-col items-center justify-center gap-4 shadow-2xl shadow-[#F7DF1E]/40 transform scale-110 relative z-20 border-4 border-white">
          <div class="absolute -top-7 left-1/2 -translate-x-1/2 bg-black text-white text-xl font-black px-8 py-2.5 rounded-full shadow-2xl border-4 border-white animate-bounce flex items-center gap-2 whitespace-nowrap z-30">
            ⭐ اختيارنا!
          </div>
          <div class="w-24 h-24 bg-white rounded-2xl flex items-center justify-center shadow-inner overflow-hidden border border-gray-100" dir="ltr">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" class="w-16 h-16 rounded-xl" />
          </div>
          <span class="text-3xl font-black text-black">JavaScript</span>
        </div>
      </div>

      <!-- Introducing JavaScript Section -->
      <div class="bg-background rounded-[3rem] p-10 md:p-16 border-2 border-border shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center gap-10">
        <!-- Glow -->
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-primary/5 via-[#F7DF1E]/10 to-accent/5 blur-[80px]"></div>
        
        <div class="flex-1 relative z-10 text-center md:text-right">
          <h3 class="text-4xl md:text-5xl font-black text-maintext mb-6 leading-tight">
            إحنا هنستخدم <br>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#D4B800] to-[#E5A900] text-5xl md:text-7xl">JavaScript</span>
          </h3>
          <p class="text-2xl font-bold text-mutedtext leading-relaxed">
            هي لغة برمجة قوية وممتعة، وهتكون <span class="text-primary font-black">أول خطوة</span> ليك عشان تتعلم وتفهم أساسيات البرمجة كلها.
          </p>
        </div>

        <div class="flex-1 relative z-10 flex justify-center">
          <div class="relative w-64 h-64">
            <div class="absolute inset-0 bg-gradient-to-br from-[#F7DF1E] to-[#D4B800] rounded-full opacity-20 blur-2xl animate-pulse"></div>
            <div class="w-full h-full bg-white rounded-full border-8 border-gray-100 shadow-2xl flex items-center justify-center transform hover:rotate-12 transition-transform duration-500">
              <Rocket class="w-24 h-24 text-primary" />
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { Target, Settings, Rocket } from 'lucide-vue-next'
</script>
