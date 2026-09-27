<template>
  <section id="solved-example" class="py-12 bg-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center gap-3 mb-8">
        <span class="text-3xl">✏️</span>
        <h2 class="text-2xl font-bold text-slate-900">مثال محلول</h2>
      </div>

      <div class="bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-10 shadow-sm">
        <h3 class="text-xl font-bold text-slate-800 mb-6 leading-relaxed">
          إذا استخدم نظام ذكاء اصطناعي بيانات تدريب متحيزة، فما المشكلة الأخلاقية المحتملة؟
        </h3>

        <div class="space-y-3 mb-8">
          <div class="p-4 rounded-xl border border-slate-200 bg-white flex items-center gap-3">
            <span class="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-500 shrink-0">A</span>
            <span class="text-slate-700 font-medium">زيادة سرعة معالجة البيانات</span>
          </div>
          <div class="p-4 rounded-xl border-2 transition-colors flex items-center gap-3" :class="showSolution ? 'border-emerald-500 bg-emerald-50' : 'border-slate-200 bg-white'">
            <span class="w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0 transition-colors" :class="showSolution ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-500'">B</span>
            <span class="font-medium transition-colors" :class="showSolution ? 'text-emerald-900' : 'text-slate-700'">ظهور نتائج متحيزة أو غير عادلة</span>
          </div>
          <div class="p-4 rounded-xl border border-slate-200 bg-white flex items-center gap-3">
            <span class="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-500 shrink-0">C</span>
            <span class="text-slate-700 font-medium">زيادة مساحة التخزين</span>
          </div>
          <div class="p-4 rounded-xl border border-slate-200 bg-white flex items-center gap-3">
            <span class="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-500 shrink-0">D</span>
            <span class="text-slate-700 font-medium">تحسين سرعة الإنترنت</span>
          </div>
        </div>

        <button 
          @click="showSolution = true" 
          v-if="!showSolution"
          class="w-full md:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-xl transition-colors shadow-sm"
        >
          إظهار الحل
        </button>

        <transition
          enter-active-class="transition-all duration-500 ease-out"
          enter-from-class="opacity-0 translate-y-4"
          enter-to-class="opacity-100 translate-y-0"
        >
          <div v-if="showSolution" class="mt-6 bg-emerald-100/50 border border-emerald-200 rounded-xl p-5">
            <h4 class="font-bold text-emerald-900 mb-2 flex items-center gap-2">
              <span class="text-xl">✅</span> الإجابة الصحيحة: B
            </h4>
            <p class="text-emerald-800 font-medium">
              يتعلم الذكاء الاصطناعي الأنماط من بيانات التدريب، فإذا كانت البيانات متحيزة، فإن النظام سيكرر هذا التحيز، مما يؤدي إلى نتائج غير عادلة وتعارض مبدأ العدالة.
            </p>
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const showSolution = ref(false)
</script>
