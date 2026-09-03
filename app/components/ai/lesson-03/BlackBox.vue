<template>
  <section id="black-box" class="py-20 bg-gray-900 text-white">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-extrabold mb-4 flex items-center justify-center gap-3">
          <span class="text-4xl">🖤</span> مشكلة الصندوق الأسود
        </h2>
        <div class="w-24 h-1 bg-gray-600 mx-auto rounded-full"></div>
      </div>

      <div class="max-w-4xl mx-auto text-center mb-12">
        <p class="text-xl text-gray-300 bg-gray-800 p-6 rounded-2xl border border-gray-700">
          <strong class="text-white block mb-2">ما هو الصندوق الأسود (Black Box)؟</strong>
          عندما يتخذ الذكاء الاصطناعي قرارًا، ولكنه يكون معقدًا لدرجة أنه من غير الواضح <span class="text-red-400">كيف</span> توصل إلى هذا الحكم حتى بالنسبة لمبرمجيه.
        </p>
      </div>

      <!-- Visualization -->
      <div class="flex flex-col items-center justify-center relative py-10">
        
        <!-- Input -->
        <div class="bg-blue-900 border border-blue-500 rounded-xl p-4 w-48 text-center shadow-[0_0_15px_rgba(59,130,246,0.5)] z-10">
          <span class="text-3xl block mb-2">📄</span>
          <span class="font-bold text-blue-200">البيانات (Data)</span>
        </div>

        <div class="h-12 w-1 bg-blue-500 animate-pulse my-2"></div>
        <div class="text-blue-500 mb-2">▼</div>

        <!-- The Black Box -->
        <div 
          class="bg-black border-2 border-gray-700 rounded-2xl w-64 h-48 flex items-center justify-center cursor-pointer relative overflow-hidden group shadow-[0_0_30px_rgba(0,0,0,1)] z-10 transition-transform duration-300 hover:scale-105"
          @click="showInside = !showInside"
        >
          <!-- Stars/Particles inside to represent complex math -->
          <div v-if="showInside" class="absolute inset-0 bg-gray-900 flex flex-wrap items-center justify-center gap-2 p-4 animate-fade-in text-xs font-mono text-green-500 opacity-60">
            <span>w1*x+b</span> <span>Σ(xi)</span> <span>ReLU(x)</span> <span>Matrix</span>
            <span>Backprop</span> <span>Gradient</span> <span>Tensor</span>
          </div>

          <div class="relative z-20 text-center pointer-events-none">
            <span class="text-5xl block mb-2">🖤</span>
            <span class="font-bold text-gray-300 block">AI Model</span>
            <span class="text-xs text-gray-500 mt-2 block" v-if="!showInside">اضغط لتكتشف التعقيد</span>
          </div>
        </div>

        <div class="text-green-500 mt-2">▼</div>
        <div class="h-12 w-1 bg-green-500 animate-pulse my-2"></div>

        <!-- Output -->
        <div class="bg-green-900 border border-green-500 rounded-xl p-4 w-48 text-center shadow-[0_0_15px_rgba(34,197,94,0.5)] z-10">
          <span class="text-3xl block mb-2">🎯</span>
          <span class="font-bold text-green-200">القرار (Result)</span>
        </div>
      </div>

      <div class="max-w-2xl mx-auto text-center mt-8">
        <p class="text-gray-400 text-sm">
          بسبب هذه المشكلة، يصعب تفسير <strong>سبب</strong> رفض طلب قرض أو تقديم تشخيص طبي معين، مما يثير تساؤلات حول الشفافية والمسؤولية.
        </p>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const showInside = ref(false);
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.5s ease-in;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>
