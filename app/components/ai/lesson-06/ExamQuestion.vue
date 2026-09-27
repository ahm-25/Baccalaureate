<template>
  <section id="exam-question" class="py-16 bg-slate-100 border-y border-slate-200">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center gap-3 mb-6">
        <span class="text-3xl text-rose-600">🎯</span>
        <h2 class="text-2xl font-bold text-slate-900">سؤال على نمط الامتحان — <span class="text-rose-600">[6 درجات]</span></h2>
      </div>

      <div class="bg-white rounded-3xl shadow-md border-t-4 border-t-rose-500 p-8 md:p-10 mb-8">
        <h3 class="text-xl font-bold text-slate-800 leading-relaxed mb-6">
          "حلّل كيف يمكن أن يؤدي استخدام الذكاء الاصطناعي إلى نتائج غير عادلة، ووضح دور بيانات التدريب والعدالة والشفافية والمساءلة في الحد من هذه المشكلة."
        </h3>

        <div class="bg-slate-50 border border-slate-200 rounded-2xl p-6">
          <h4 class="font-bold text-slate-700 mb-4 flex items-center gap-2">
            <span>📝</span> هيكل الإجابة المطلوب:
          </h4>
          <ol class="list-decimal list-inside space-y-2 text-slate-600 font-medium">
            <li>تعريف المشكلة (التحيز الخوارزمي).</li>
            <li>دور بيانات التدريب.</li>
            <li>مبدأ العدالة.</li>
            <li>مبدأ الشفافية.</li>
            <li>دور الذكاء الاصطناعي القابل للتفسير (XAI).</li>
            <li>المساءلة وتحديد المسؤول.</li>
          </ol>
        </div>
      </div>

      <div class="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
        <button 
          @click="showAnswer = !showAnswer" 
          class="w-full bg-slate-50 hover:bg-slate-100 text-right px-6 py-4 font-bold text-lg flex justify-between items-center transition-colors focus:outline-none"
        >
          <span class="text-slate-800">عرض نموذج الإجابة</span>
          <span class="text-slate-500 transform transition-transform" :class="{'rotate-180': showAnswer}">▼</span>
        </button>
        <div v-show="showAnswer" class="p-6 md:p-8 border-t border-slate-200 text-slate-700 leading-relaxed font-medium space-y-4">
          <p><span class="font-bold text-indigo-700 bg-indigo-50 px-2 rounded">1. المشكلة:</span> يمكن أن يؤدي إلى "تحيز خوارزمي" ينتج عنه التمييز ضد فئة معينة.</p>
          <p><span class="font-bold text-indigo-700 bg-indigo-50 px-2 rounded">2. بيانات التدريب:</span> إذا كانت البيانات الأساسية غير ممثلة للواقع أو متحيزة، سيتعلم النظام هذا النمط ويكرره.</p>
          <p><span class="font-bold text-indigo-700 bg-indigo-50 px-2 rounded">3. العدالة:</span> يجب ضمان عدم التمييز ظلمًا ضد أي شخص كشرط أخلاقي أساسي.</p>
          <p><span class="font-bold text-indigo-700 bg-indigo-50 px-2 rounded">4. الشفافية:</span> يجب توفير معلومات واضحة عن النظام وعمله لتجنب مشكلة "الصندوق الأسود".</p>
          <p><span class="font-bold text-indigo-700 bg-indigo-50 px-2 rounded">5. XAI:</span> استخدام أساليب تساعد في فهم العوامل التي أدت لقرار النظام لاكتشاف وعلاج التحيز.</p>
          <p><span class="font-bold text-indigo-700 bg-indigo-50 px-2 rounded">6. المساءلة:</span> تحديد الجهات المسؤولة (المطور أو الجهة المشغلة) عن إصلاح النظام أو تحمل تبعات قراراته الخاطئة.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const showAnswer = ref(false)
</script>
