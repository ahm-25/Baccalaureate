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
          <button v-if="!open.includes(i)" @click="open.push(i)" class="text-rose-700 font-bold bg-rose-50 hover:bg-rose-100 px-4 py-2 rounded-lg text-sm transition-colors">
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
        (1) من بين الخيارات التالية (أ – د)، اختر الخيار الذي <strong class="text-rose-600">لا</strong> يمثل مثالًا مناسبًا لحادث أمني.
      </p>
      <CyberLesson07SingleChoice
        :options="incidentOptions"
        :ans="2"
        explanation="تحديث البرنامج لإضافة ميزات جديدة لا يؤثر في سرية المعلومات أو سلامتها أو توافرها، ولا يخالف سياسة أمنية."
        class="mb-10"
      />

      <p class="text-slate-800 font-medium leading-relaxed mb-4">
        (2) من بين الخيارات التالية (أ – د)، اختر الخيار الذي يصف مفهوم تقييم المخاطر بأنسب طريقة.
      </p>
      <CyberLesson07SingleChoice
        :options="riskOptions"
        :ans="2"
        explanation="يُحدَّد حجم المخاطرة بالتأثير والاحتمالية معًا، وتُعالج المخاطر ذات التأثير العالي والاحتمالية العالية أولًا؛ فالفريق لا يستطيع معالجة كل المخاطر في وقت واحد."
      />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const open = ref([])

const shortQuestions = [
  { q: 'ما المصطلح الذي يُطلق على حدث يؤثر في سرية المعلومات أو سلامتها أو توافرها، أو يهددها بجدية؟', a: 'الحادث الأمني.' },
  { q: 'اذكر المراحل الست للاستجابة للحوادث حسب تسلسلها العام.', a: 'التحضير ← الاكتشاف ← الاحتواء ← إزالة التهديد (الاستئصال) ← الاستعادة ← الدروس المستفادة والتحسين.' },
  { q: 'ما العاملان المستخدمان لتحديد حجم المخاطرة؟', a: 'التأثير والاحتمالية (درجة الخطر = درجة التأثير × درجة الاحتمالية).' },
]

const incidentOptions = [
  'تم تشفير البيانات بسبب إصابة ببرنامج فدية.',
  'تسربت معلومات العملاء إلى الخارج عبر وصول غير مصرح به.',
  'تم إجراء تحديث للبرنامج لإضافة ميزات جديدة.',
  'أصبحت خدمة ويب غير متاحة بسبب هجوم على الخادم.',
]

const riskOptions = [
  'يكفي معالجة المخاطر ذات التأثير الكبير فقط.',
  'يكفي معالجة المخاطر ذات الاحتمالية العالية فقط.',
  'ينبغي معالجة المخاطر ذات التأثير العالي والاحتمالية العالية أولًا.',
  'يجب معالجة جميع المخاطر في آن واحد.',
]
</script>
