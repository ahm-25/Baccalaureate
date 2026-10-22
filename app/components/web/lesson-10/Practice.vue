<template>
  <section id="practice" class="py-16 bg-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="inline-flex items-center gap-2 bg-amber-500 text-white font-bold text-xl px-6 py-2 rounded-full shadow-sm mb-8">
        تدرّب
      </div>

      <!-- Q1: short answers -->
      <div class="bg-amber-50/60 border border-amber-200 rounded-2xl px-5 py-3 font-bold text-amber-900 mb-4">1 أجب عن الأسئلة التالية.</div>
      <div class="space-y-4 mb-12">
        <div v-for="(q, i) in shortQuestions" :key="i" class="bg-slate-50 border border-slate-200 rounded-2xl p-5">
          <h4 class="font-bold text-slate-800 mb-3 leading-relaxed">{{ i + 1 }}. {{ q.q }}</h4>
          <button v-if="!open.includes(i)" @click="open.push(i)" class="text-violet-700 font-bold bg-violet-50 hover:bg-violet-100 px-4 py-2 rounded-lg text-sm transition-colors">
            أظهر الإجابة النموذجية
          </button>
          <div v-else class="p-4 bg-white border border-slate-200 rounded-xl text-slate-700 leading-relaxed">
            {{ q.a }}
          </div>
        </div>
      </div>

      <!-- Q2 -->
      <div class="bg-amber-50/60 border border-amber-200 rounded-2xl px-5 py-3 font-bold text-amber-900 mb-4">2 أجب عن الأسئلة التالية.</div>

      <p class="text-slate-800 font-medium leading-relaxed mb-4">
        (1) عند البحث عن منتج على موقع تسوق إلكتروني، أي مما يلي مسؤول عن البحث في البيانات عن المنتجات المطابقة لكلمات البحث؟
      </p>
      <CyberLesson07SingleChoice
        :options="searchOptions"
        :ans="1"
        explanation="الواجهة الخلفية تعالج الطلب على الخادم، وتطلب من طبقة البيانات المنتجات التي تطابق عبارة البحث."
        class="mb-10"
      />

      <p class="text-slate-800 font-medium leading-relaxed mb-4">
        (2) لكل من 1 – 6، حدد إلى أي طبقة من طبقات موقع التجارة الإلكترونية ينتمي:
        <span class="text-violet-700 font-bold">أ</span> الواجهة الأمامية، <span class="text-violet-700 font-bold">ب</span> الواجهة الخلفية، <span class="text-violet-700 font-bold">ج</span> قاعدة البيانات.
      </p>
      <CyberLesson07ChoiceItems :items="shopItems" :options="layerOptions" />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const open = ref([])

const shortQuestions = [
  { q: 'ما هو المصطلح الذي يُطلق على تطبيق يُستخدم عبر متصفح الويب؟', a: 'تطبيق الويب.' },
  { q: 'ما هو المصطلح الذي يُطلق على مكوّن الشاشة الذي يراه المستخدمون مباشرة؟', a: 'الواجهة الأمامية.' },
  { q: 'ما هو المصطلح الذي يُطلق على الجزء المسؤول عن المعالجة من جانب الخادم التي لا يراها المستخدمون؟', a: 'الواجهة الخلفية.' },
  { q: 'ما هو المصطلح الذي يُطلق على نظام ينظم البيانات ويخزنها ويديرها؟', a: 'قاعدة البيانات.' },
]

const searchOptions = ['الواجهة الأمامية', 'الواجهة الخلفية', 'قاعدة البيانات']

const layerOptions = ['أ الواجهة الأمامية', 'ب الواجهة الخلفية', 'ج قاعدة البيانات']
const shopItems = [
  { text: 'صفحة عرض المنتجات', ans: 0 },
  { text: 'معالجة التحقق من المخزون', ans: 1 },
  { text: 'تخزين معلومات العملاء', ans: 2 },
  { text: 'شاشة سلة التسوق', ans: 0 },
  { text: 'معالجة الدفع', ans: 1 },
  { text: 'تخزين سجل الطلبات', ans: 2 },
]
</script>
