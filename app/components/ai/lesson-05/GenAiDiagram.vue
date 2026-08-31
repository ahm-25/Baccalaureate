<template>
  <div class="my-12 max-w-4xl mx-auto bg-gradient-to-br from-white to-orange-50/40 rounded-3xl p-8 md:p-12 shadow-sm border border-orange-100 hover:shadow-md transition-all duration-700 relative overflow-hidden group">
    <div class="text-center mb-16">
      <h4 class="text-2xl font-bold text-gray-800 flex items-center justify-center gap-2">
        <span class="text-3xl text-yellow-500 animate-pulse">✨</span> كيف يعمل الذكاء الاصطناعي التوليدي؟
      </h4>
      <p class="text-gray-500 mt-2 text-sm font-medium">اضغط على بطاقة "المدخل" لترى كيف يعمل النموذج</p>
    </div>

    <!-- Interactive Diagram Canvas -->
    <div class="relative max-w-3xl mx-auto z-10 py-4 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">
      
      <!-- Flow Lines (Visible on Desktop) -->
      <svg class="absolute inset-0 w-full h-full pointer-events-none hidden md:block" style="z-index: -1;">
        <!-- Input to AI -->
        <path d="M 120,100 L 320,100" stroke="#fed7aa" stroke-width="3" stroke-dasharray="6,6" :class="step >= 1 ? 'animate-dash-flow stroke-orange-400' : ''" />
        
        <!-- AI to Text -->
        <path d="M 480,100 C 530,100 530,30 L 610,30" stroke="#fed7aa" stroke-width="3" stroke-dasharray="6,6" :class="step >= 2 ? 'animate-dash-flow stroke-orange-400' : ''" fill="none" />
        
        <!-- AI to Image -->
        <path d="M 480,100 L 610,100" stroke="#fed7aa" stroke-width="3" stroke-dasharray="6,6" :class="step >= 3 ? 'animate-dash-flow stroke-orange-400' : ''" />
        
        <!-- AI to Audio -->
        <path d="M 480,100 C 530,100 530,170 L 610,170" stroke="#fed7aa" stroke-width="3" stroke-dasharray="6,6" :class="step >= 4 ? 'animate-dash-flow stroke-orange-400' : ''" fill="none" />
      </svg>

      <!-- 1. Input -->
      <div 
        class="w-40 bg-white border-2 rounded-2xl p-4 shadow-sm flex flex-col items-center gap-3 cursor-pointer transition-all duration-300 hover:scale-105 z-10 relative group"
        :class="step >= 1 ? 'border-orange-400 shadow-[0_0_20px_rgba(251,146,60,0.3)]' : 'border-gray-200'"
        @click="runAnimation"
      >
        <div class="absolute -top-3 -right-3 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow animate-bounce" v-if="step === 0">اضغط هنا</div>
        <div class="w-16 h-16 bg-gray-50 rounded-xl flex flex-col justify-center gap-2 p-3 border border-gray-100 transition-colors" :class="step >= 1 ? 'bg-orange-50' : ''">
          <div class="w-full h-1.5 bg-gray-300 rounded-full transition-colors" :class="step >= 1 ? 'bg-orange-400' : ''"></div>
          <div class="w-3/4 h-1.5 bg-gray-300 rounded-full transition-colors" :class="step >= 1 ? 'bg-orange-400' : ''"></div>
          <div class="w-full h-1.5 bg-gray-300 rounded-full transition-colors" :class="step >= 1 ? 'bg-orange-400' : ''"></div>
        </div>
        <span class="font-bold text-gray-700 text-center text-sm">المدخل (Prompt)</span>
      </div>

      <!-- Arrow Mobile -->
      <div class="md:hidden text-orange-300 text-3xl font-bold" :class="step >= 1 ? 'animate-pulse text-orange-500' : ''">⬇</div>

      <!-- 2. GenAI Model -->
      <div 
        class="w-48 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-6 shadow-lg flex flex-col items-center justify-center text-center transition-all duration-500 z-10 relative overflow-hidden"
        :class="step >= 2 && step <= 4 ? 'scale-110 shadow-[0_0_30px_rgba(37,99,235,0.5)]' : ''"
      >
        <div class="absolute inset-0 bg-white/20 opacity-0 transition-opacity duration-300" :class="step >= 2 && step <= 4 ? 'opacity-100 animate-pulse' : ''"></div>
        <span class="text-4xl mb-3 relative z-10 drop-shadow-md">🤖</span>
        <span class="font-bold text-white text-base relative z-10 leading-tight">الذكاء الاصطناعي التوليدي</span>
      </div>

      <!-- Arrow Mobile -->
      <div class="md:hidden text-orange-300 text-3xl font-bold" :class="step >= 2 ? 'animate-pulse text-orange-500' : ''">⬇</div>

      <!-- 3. Outputs -->
      <div class="flex flex-col gap-4 z-10 w-48 relative md:left-4">
        <!-- Text -->
        <div 
          class="bg-white border-2 rounded-xl p-3 flex items-center gap-3 transition-all duration-500"
          :class="step >= 2 ? 'border-blue-400 shadow-lg translate-x-0 opacity-100' : 'border-gray-100 opacity-40 translate-x-4'"
        >
          <div class="text-2xl drop-shadow-sm">📝</div>
          <div class="flex flex-col gap-1.5 w-full">
            <div class="w-full h-1.5 bg-blue-200 rounded-full"></div>
            <div class="w-4/5 h-1.5 bg-blue-200 rounded-full"></div>
          </div>
          <span class="text-sm font-bold text-gray-700">نص</span>
        </div>
        
        <!-- Image -->
        <div 
          class="bg-white border-2 rounded-xl p-3 flex items-center gap-3 transition-all duration-500 delay-100"
          :class="step >= 3 ? 'border-orange-400 shadow-lg translate-x-0 opacity-100' : 'border-gray-100 opacity-40 translate-x-4'"
        >
          <div class="text-2xl drop-shadow-sm">🎨</div>
          <div class="w-10 h-8 bg-orange-100 rounded flex items-center justify-center">
            <div class="w-3 h-3 bg-orange-400 rounded-full"></div>
          </div>
          <span class="text-sm font-bold text-gray-700">صورة</span>
        </div>

        <!-- Audio -->
        <div 
          class="bg-white border-2 rounded-xl p-3 flex items-center gap-3 transition-all duration-500 delay-200"
          :class="step >= 4 ? 'border-purple-400 shadow-lg translate-x-0 opacity-100' : 'border-gray-100 opacity-40 translate-x-4'"
        >
          <div class="text-2xl drop-shadow-sm">🎵</div>
          <div class="flex items-end gap-0.5 h-6">
            <div class="w-1.5 bg-purple-400 rounded-t-full h-full" :class="step >= 4 ? 'animate-[bounce_1s_infinite]' : ''"></div>
            <div class="w-1.5 bg-purple-400 rounded-t-full h-3" :class="step >= 4 ? 'animate-[bounce_1s_infinite_200ms]' : ''"></div>
            <div class="w-1.5 bg-purple-400 rounded-t-full h-5" :class="step >= 4 ? 'animate-[bounce_1s_infinite_400ms]' : ''"></div>
            <div class="w-1.5 bg-purple-400 rounded-t-full h-2" :class="step >= 4 ? 'animate-[bounce_1s_infinite_600ms]' : ''"></div>
          </div>
          <span class="text-sm font-bold text-gray-700">صوت</span>
        </div>
      </div>
    </div>

    <!-- Caption -->
    <div class="mt-16 text-center px-4">
      <p class="text-lg font-bold text-gray-700 mb-2">يستقبل الذكاء الاصطناعي التوليدي Prompt ثم يستخدم الأنماط التي تعلمها لإنتاج محتوى جديد.</p>
      <p class="text-gray-500 font-medium">بناءً على التعليمات، يمكنه إنشاء نصوص، صور، مقاطع صوتية، أو كود برمجي.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const step = ref(0);
let isAnimating = false;

const runAnimation = () => {
  if (isAnimating) return;
  isAnimating = true;
  step.value = 0;
  
  setTimeout(() => { step.value = 1; }, 100); 
  setTimeout(() => { step.value = 2; }, 800); 
  setTimeout(() => { step.value = 3; }, 1600); 
  setTimeout(() => { step.value = 4; }, 2400); 
  
  setTimeout(() => { 
    isAnimating = false; 
    setTimeout(() => {
        if(!isAnimating) step.value = 0; // Reset after a while
    }, 6000);
  }, 3000);
};
</script>

<style scoped>
@keyframes dash-flow {
  to {
    stroke-dashoffset: -12;
  }
}
.animate-dash-flow {
  animation: dash-flow 0.5s linear infinite;
}
</style>
