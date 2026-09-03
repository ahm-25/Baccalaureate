<template>
  <section id="hallucination" class="py-20 bg-white">
    <div class="container mx-auto px-6 max-w-4xl">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 flex items-center justify-center gap-3">
          <span class="text-4xl">⚠️</span> هل الذكاء الاصطناعي دائمًا على حق؟
        </h2>
      </div>

      <div class="bg-gray-50 rounded-3xl p-8 border border-gray-200 shadow-md mb-12">
        <div class="flex items-start gap-4 mb-6">
          <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center shrink-0">
            <span class="text-2xl">🤖</span>
          </div>
          <div class="bg-white p-4 rounded-2xl rounded-tr-none border border-gray-200 shadow-sm relative">
            <p class="text-gray-800 text-lg">
              "أول رائد فضاء عربي نزل على سطح المريخ كان في عام 1995 في مهمة دولية مشتركة..."
            </p>
            <div class="absolute -left-3 top-1/2 -translate-y-1/2 text-2xl animate-bounce">
              ❌
            </div>
          </div>
        </div>

        <div class="bg-red-50 p-6 rounded-2xl border border-red-100 mb-8">
          <h3 class="text-xl font-bold text-red-900 mb-2">الهلوسة (Hallucination)</h3>
          <p class="text-red-700 leading-relaxed">
            هي ظاهرة يقوم فيها الذكاء الاصطناعي بتوليد معلومات غير صحيحة أو غير مدعومة بالواقع، لكنها تبدو مقنعة جدًا وصياغتها سليمة.
          </p>
        </div>

        <div class="text-center mb-8">
          <h4 class="text-lg font-bold text-gray-800 mb-6">كيف نتعامل مع مخرجات الذكاء الاصطناعي؟</h4>
          
          <div class="flex flex-col md:flex-row items-center justify-center gap-4">
            <div class="bg-blue-100 text-blue-900 p-3 rounded-xl font-bold text-sm w-40">
              🤖 مخرجات AI
            </div>
            <div class="text-gray-400 rotate-90 md:rotate-0">➔</div>
            <div class="bg-yellow-100 text-yellow-900 p-3 rounded-xl font-bold text-sm w-40">
              ❓ هل المعلومة مهمة؟
            </div>
            <div class="text-gray-400 rotate-90 md:rotate-0">➔</div>
            <div class="bg-orange-100 text-orange-900 p-3 rounded-xl font-bold text-sm w-40">
              🔍 قارن وراجع المصدر
            </div>
            <div class="text-gray-400 rotate-90 md:rotate-0">➔</div>
            <div class="bg-green-100 text-green-900 p-3 rounded-xl font-bold text-sm w-40">
              ✅ اعتمد الإجابة
            </div>
          </div>
        </div>

        <div class="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
          <h4 class="font-bold text-gray-900 mb-4 text-lg">☑️ قائمة التحقق (Checklist):</h4>
          <ul class="space-y-3">
            <li class="flex items-center gap-3 text-gray-700 hover:bg-gray-50 p-2 rounded cursor-pointer transition-colors" @click="check1 = !check1">
              <input type="checkbox" class="w-5 h-5 text-purple-600 rounded focus:ring-purple-500" :checked="check1">
              <span>تحقق من المصدر الأصلي للمعلومة.</span>
            </li>
            <li class="flex items-center gap-3 text-gray-700 hover:bg-gray-50 p-2 rounded cursor-pointer transition-colors" @click="check2 = !check2">
              <input type="checkbox" class="w-5 h-5 text-purple-600 rounded focus:ring-purple-500" :checked="check2">
              <span>قارن مع مصادر أخرى موثوقة.</span>
            </li>
            <li class="flex items-center gap-3 text-gray-700 hover:bg-gray-50 p-2 rounded cursor-pointer transition-colors" @click="check3 = !check3">
              <input type="checkbox" class="w-5 h-5 text-purple-600 rounded focus:ring-purple-500" :checked="check3">
              <span>تأكد من الأرقام، الإحصائيات، والتواريخ.</span>
            </li>
            <li class="flex items-center gap-3 text-gray-700 hover:bg-gray-50 p-2 rounded cursor-pointer transition-colors" @click="check4 = !check4">
              <input type="checkbox" class="w-5 h-5 text-purple-600 rounded focus:ring-purple-500" :checked="check4">
              <span class="font-bold text-red-600">لا تعتمد على AI وحده كمرجع نهائي للمعلومات المهمة!</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const check1 = ref(false);
const check2 = ref(false);
const check3 = ref(false);
const check4 = ref(false);
</script>
