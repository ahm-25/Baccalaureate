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
          <button v-if="!open.includes(i)" @click="open.push(i)" class="text-orange-700 font-bold bg-orange-50 hover:bg-orange-100 px-4 py-2 rounded-lg text-sm transition-colors">
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
        (1) من بين الخيارات التالية (أ – د)، اختر الخيار الذي <strong class="text-rose-600">لا</strong> يمثل فائدة مناسبة لاستخدام HTML الدلالية.
      </p>
      <CyberLesson07SingleChoice
        :options="semanticOptions"
        :ans="2"
        explanation="فوائد HTML الدلالية تتعلق بإمكانية الوصول وفهم محركات البحث للمحتوى؛ ولا تجعل عرض الصفحة أسرع بالضرورة."
        class="mb-10"
      />

      <p class="text-slate-800 font-medium leading-relaxed mb-4">
        (2) من بين الخيارات التالية (أ – د)، اختر الخيار الذي يصف إطار العمل بأنسب شكل.
      </p>
      <CyberLesson07SingleChoice
        :options="frameworkOptions"
        :ans="1"
        explanation="إطار العمل بنية توفر مسبقًا وظائف ومكونات شائعة الاستخدام لجعل تطوير تطبيقات الويب أكثر كفاءة."
      />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const open = ref([])

const shortQuestions = [
  { q: 'ما هو الاختصار المكوّن من أربعة أحرف للتقنية التي تحدد بنية (هيكل) صفحة الويب؟', a: 'HTML.' },
  { q: 'ما هو الاختصار المكوّن من ثلاثة أحرف للتقنية التي تحدد مظهر صفحة الويب (الألوان، التخطيط، الحجم، إلخ)؟', a: 'CSS.' },
  { q: 'ما هو مصطلح التقنية التي تضيف السلوك والتفاعلية إلى صفحة الويب؟', a: 'JavaScript.' },
  { q: 'ما هو مصطلح مفهوم التصميم الذي يُضبط فيه التخطيط تلقائيًا وفقًا لأحجام الشاشات المختلفة؟', a: 'التصميم المتجاوب.' },
]

const semanticOptions = [
  'يمكن لبرامج قارئ الشاشة فهم بنية الصفحة بشكل صحيح.',
  'يمكن لمحركات البحث فهم محتوى صفحة الويب بسهولة أكبر.',
  'تصبح سرعة عرض صفحة الويب أسرع بالضرورة.',
  'يصبح إيصال المعلومات أسهل للمستخدمين ذوي الإعاقة البصرية.',
]

const frameworkOptions = [
  'لغة لتحديد بنية صفحة الويب',
  'بنية تجعل تطوير تطبيقات الويب أكثر كفاءة',
  'تقنية لتشفير البيانات وإرسالها بأمان',
  'مفهوم تصميمي لدعم أحجام الشاشات المختلفة',
]
</script>
