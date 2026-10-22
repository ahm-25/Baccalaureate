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
          <button v-if="!open.includes(i)" @click="open.push(i)" class="text-indigo-700 font-bold bg-indigo-50 hover:bg-indigo-100 px-4 py-2 rounded-lg text-sm transition-colors">
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
        (1) من الخيارات التالية (أ – د)، اختر ما يقابل «تحقّق (Check)» في دورة PDCA.
      </p>
      <CyberLesson07SingleChoice
        :options="checkOptions"
        :ans="2"
        explanation="قياس النتائج بعد التغيير هو خطوة تحقّق. أما (أ) فهي خطّط، و(ب) نفّذ، و(د) تصرّف."
        class="mb-10"
      />

      <p class="text-slate-800 font-medium leading-relaxed mb-4">
        (2) من الخيارات التالية (أ – د)، اختر ما لا يُعد طريقة مناسبة لإجراء اختبار A/B.
      </p>
      <CyberLesson07SingleChoice
        :options="abOptions"
        :ans="1"
        explanation="تغيير عدة عناصر في الوقت نفسه يقيس أثر الحزمة ولا يكشف أثر كل عنصر منفردًا؛ لذلك لا يناسب تجربة هدفها معرفة أثر تغيير واحد."
      />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const open = ref([])

const shortQuestions = [
  { q: 'ما مصطلح طريقة التحسين التي تكرر الخطوات الأربع خطّط ← نفّذ ← تحقّق ← تصرّف؟', a: 'دورة PDCA.' },
  { q: 'ما مصطلح طريقة التفكير لاكتشاف المشكلات وتوليد الحلول من منظور المستخدم؟', a: 'التفكير التصميمي (Design Thinking).' },
  { q: 'ما مصطلح الطريقة التي يُعدّ فيها نمطان ويُقارَنان بالبيانات لمعرفة أيهما أكثر فعالية؟', a: 'اختبار A/B.' },
  { q: 'اذكر الأنماط الخمسة في النموذج المستخدم في هذا الدرس، مع العلم أنه يمكن العودة بينها.', a: 'التعاطف، والتعريف، وتوليد الأفكار، والنموذج الأولي، والاختبار.' },
]

const checkOptions = [
  'حدّد هدف خفض معدل الارتداد بنسبة 10%.',
  'غيّر تصميم الصفحة الرئيسية.',
  'قِس معدل الارتداد بعد التغيير.',
  'فكّر في إجراء تحسين آخر.',
]

const abOptions = [
  'إعداد نمطين ومقارنتهما.',
  'تغيير عدة عناصر في الوقت نفسه.',
  'اتخاذ القرارات فقط بعد جمع كمية كافية من البيانات.',
  'عرض كل نمط على مستخدمين فعليين.',
]
</script>
