<template>
  <section id="think-engineer" class="py-20 bg-gray-50 border-t border-gray-200">
    <div class="container mx-auto px-6 max-w-4xl">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 flex items-center justify-center gap-3">
          <span class="text-4xl">⚙️</span> فكر كمهندس ذكاء اصطناعي
        </h2>
      </div>

      <div class="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg">
        <div class="bg-blue-50 p-6 rounded-2xl border border-blue-100 mb-8">
          <h3 class="text-xl font-bold text-blue-900 mb-2">الموقف:</h3>
          <p class="text-blue-800 text-lg">
            "يريد مزارع استخدام نظام ذكاء اصطناعي للتمييز بين صور المحاصيل السليمة والمصابة بالأمراض."
          </p>
        </div>

        <!-- Interactive Pipeline -->
        <div class="flex flex-col md:flex-row items-center justify-between gap-4 mb-12 bg-gray-50 p-6 rounded-2xl border border-gray-200">
          
          <div class="text-center w-full md:w-1/3">
            <div class="bg-white p-4 rounded-xl border border-gray-200 shadow-sm mb-2">
              <span class="text-2xl block mb-2">🌿 🥀 🌿 🥀</span>
              <span class="font-bold text-gray-700">صور المحاصيل</span>
            </div>
          </div>
          
          <div class="text-gray-400 rotate-90 md:rotate-0">➔</div>

          <div class="text-center w-full md:w-1/3">
            <div class="bg-purple-100 p-4 rounded-xl border border-purple-200 shadow-sm mb-2 relative overflow-hidden group">
              <div class="absolute inset-0 bg-purple-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <span class="text-2xl block mb-2 relative z-10">🧠</span>
              <span class="font-bold text-purple-900 relative z-10">نموذج AI</span>
            </div>
            <span class="text-xs text-gray-500">يتدرب على البيانات</span>
          </div>

          <div class="text-gray-400 rotate-90 md:rotate-0">➔</div>

          <div class="text-center w-full md:w-1/3">
            <div class="bg-white p-4 rounded-xl border border-gray-200 shadow-sm mb-2">
              <span class="text-2xl block mb-2">📸</span>
              <span class="font-bold text-gray-700">صورة جديدة</span>
            </div>
            <div class="flex gap-2 justify-center mt-2">
              <span class="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-bold">سليم</span>
              <span class="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-bold">مصاب</span>
            </div>
          </div>
        </div>

        <!-- Questions -->
        <div class="space-y-6">
          <div class="border border-gray-200 rounded-2xl p-6">
            <p class="font-bold text-gray-800 mb-4 text-lg">1. ما نوع البيانات التي يحتاجها النظام للتدريب؟</p>
            <button v-if="!showHint1" @click="showHint1 = true" class="text-blue-600 underline text-sm hover:text-blue-800">عرض تلميح</button>
            <div v-if="showHint1" class="text-gray-700 bg-blue-50 p-3 rounded-lg border border-blue-100">
              يحتاج إلى آلاف الصور الواضحة والمتنوعة لمحاصيل <strong>سليمة</strong> وأخرى <strong>مصابة</strong>، مع تصنيف كل صورة بشكل صحيح (Labels).
            </div>
          </div>

          <div class="border border-gray-200 rounded-2xl p-6">
            <p class="font-bold text-gray-800 mb-4 text-lg">2. ما العامل الذي قد يجعل التنبؤ خاطئًا؟</p>
            <button v-if="!showHint2" @click="showHint2 = true" class="text-blue-600 underline text-sm hover:text-blue-800">عرض تلميح</button>
            <div v-if="showHint2" class="text-gray-700 bg-blue-50 p-3 rounded-lg border border-blue-100">
              إذا كانت بيانات التدريب متحيزة (مثلاً صور في النهار فقط)، فقد يخطئ النظام في تصنيف صورة ملتقطة في الليل. أو إذا واجه آفة زراعية جديدة لم يتدرب عليها من قبل.
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const showHint1 = ref(false);
const showHint2 = ref(false);
</script>
