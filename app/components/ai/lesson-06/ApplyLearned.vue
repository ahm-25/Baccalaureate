<template>
  <section id="apply-learned" class="py-16 bg-slate-50 border-t border-slate-200">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center gap-3 mb-8">
        <span class="text-3xl text-indigo-600">📝</span>
        <h2 class="text-2xl font-bold text-slate-900">طبّق ما تعلمته</h2>
      </div>

      <div class="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200">
        <h3 class="text-2xl font-bold text-slate-800 mb-4 border-b-2 border-indigo-100 pb-4 inline-block">حالة: نظام للتعرف على الوجه في مكان عام</h3>
        <p class="text-lg text-slate-600 font-medium mb-8 mt-2">
          تخيل أنه تم تركيب كاميرات ذكية في الشوارع للتعرف التلقائي على الوجوه لتحسين الأمن.
        </p>

        <div class="space-y-6">
          <div v-for="(q, index) in questions" :key="index" class="bg-slate-50 border border-slate-200 rounded-2xl p-6">
            <h4 class="font-bold text-slate-800 text-lg mb-4 flex items-center gap-2">
              <span class="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">{{ index + 1 }}</span>
              {{ q.q }}
            </h4>
            <button 
              @click="toggle(index)" 
              v-if="open !== index"
              class="text-indigo-600 font-bold hover:text-indigo-800 transition-colors bg-indigo-50 px-4 py-2 rounded-lg text-sm"
            >
              أظهر الإجابة المقترحة
            </button>
            <div v-show="open === index" class="mt-4 p-4 bg-white border border-slate-200 rounded-xl text-slate-700 font-medium leading-relaxed">
              {{ q.a }}
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const open = ref(null)
const toggle = (i) => {
  open.value = open.value === i ? null : i
}

const questions = [
  { q: "ما الفائدة المحتملة؟", a: "تحسين الأمن، العثور على المفقودين أو المطلوبين للعدالة بشكل أسرع." },
  { q: "ما الخطر المحتمل على الخصوصية؟", a: "جمع البيانات الشخصية وتتبع حركة المواطنين دون موافقتهم الصريحة أو علمهم." },
  { q: "كيف يمكن أن يظهر التحيز في هذا النظام؟", a: "إذا كانت بيانات التدريب متحيزة، فقد يخطئ النظام في التعرف على فئات معينة بشكل متكرر، مما قد يؤدي إلى اتهامات باطلة." },
  { q: "كيف يمكن استخدام XAI أو الشفافية هنا؟", a: "من خلال إعلام الجمهور بوجود الكاميرات (شفافية)، والقدرة على توضيح كيف ربط النظام صورة معينة بالشخص في حال حدوث خطأ (XAI)." },
  { q: "من المسؤول عن استخدام النظام بشكل خاطئ؟", a: "الجهة المشغلة (التي تستخدم الكاميرات)، والمطور (إذا لم يقم بتدريب النظام وتأمينه بشكل كافٍ)." }
]
</script>
