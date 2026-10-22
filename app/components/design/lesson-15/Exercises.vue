<template>
  <section id="exercises" class="py-16 bg-slate-50 border-t border-slate-200">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="inline-flex items-center gap-2 bg-red-700 text-white font-bold text-xl px-6 py-2 rounded-full shadow-sm mb-8">
        تمارين
      </div>

      <!-- 1 -->
      <div class="bg-amber-50/60 border border-amber-200 rounded-2xl px-5 py-3 font-bold text-amber-900 mb-3">
        1 اختبر فهمك: أجب عن الأسئلة الآتية دون الرجوع إلى قسم «ملحوظة مهمة»، ثم راجع إجاباتك.
      </div>
      <p class="text-slate-600 mb-10">
        👇 استخدم <button @click="scrollTo('practice-quiz')" class="text-emerald-700 font-bold underline">اختبر فهمك</button> في الأسفل، ثم ارجع إلى
        <button @click="scrollTo('qual-quant')" class="text-emerald-700 font-bold underline">قسم ملحوظة مهمة</button> للمراجعة.
      </p>

      <!-- 2: fill the blanks -->
      <div class="bg-amber-50/60 border border-amber-200 rounded-2xl px-5 py-3 font-bold text-amber-900 mb-4">2 اقرأ الفقرة التالية وأجب عن كل سؤال.</div>
      <div class="bg-white border-r-4 border-emerald-500 rounded-xl p-5 text-slate-700 leading-loose mb-4">
        تشمل طرق تقييم الموقع تقييمًا
        <span class="blank" :class="blankClass(0)">{{ shown(0) }}</span>
        يساعد على فهم تجربة المستخدم من خلال الملاحظة والمقابلات، وتقييمًا
        <span class="blank" :class="blankClass(1)">{{ shown(1) }}</span>
        يقيس السلوك والنتائج بالأرقام. ومن المقاييس الشائعة
        <span class="blank" :class="blankClass(2)">{{ shown(2) }}</span>
        لإجمالي مرات مشاهدة الصفحة، و
        <span class="blank" :class="blankClass(3)">{{ shown(3) }}</span>
        الذي يختلف تعريفه بحسب أداة التحليلات ويستخدم لمتابعة التفاعل، و
        <span class="blank" :class="blankClass(4)">{{ shown(4) }}</span>
        لنسبة المستخدمين أو الجلسات التي حققت هدفًا محددًا وفق طريقة الحساب.
      </div>
      <p class="font-bold text-slate-800 mb-3">1. املأ الفراغات (1) – (5): اختر لكل فراغ الكلمة المناسبة.</p>
      <div class="grid sm:grid-cols-2 gap-3 mb-4">
        <div v-for="(b, i) in blanks" :key="i" class="bg-white border border-slate-200 rounded-xl p-3 flex items-center gap-3">
          <span class="font-bold text-emerald-700 shrink-0">({{ i + 1 }})</span>
          <select v-model="answers[i]" class="flex-1 bg-slate-50 border border-slate-200 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400">
            <option :value="null" disabled>اختر…</option>
            <option v-for="w in wordBank" :key="w" :value="w">{{ w }}</option>
          </select>
        </div>
      </div>
      <button @click="checked = !checked" class="mb-12 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-6 rounded-xl transition-colors">
        {{ checked ? 'إخفاء الحل' : 'تحقق من إجاباتك' }}
      </button>

      <!-- 3 -->
      <div class="bg-amber-50/60 border border-amber-200 rounded-2xl px-5 py-3 font-bold text-amber-900 mb-4">3 أجب عن الأسئلة التالية.</div>
      <p class="text-slate-800 font-medium leading-relaxed mb-4">
        (1) لكل من طرق التقييم (1 – 3)، حدّد الفئة التي تندرج تحتها: <span class="text-emerald-700 font-bold">أ</span> التقييم النوعي، <span class="text-emerald-700 font-bold">ب</span> التقييم الكمي.
      </p>
      <CyberLesson07ChoiceItems :items="classifyItems" :options="classifyOptions" class="mb-10" />

      <p class="text-slate-800 font-medium leading-relaxed mb-4">
        (2) من الخيارات التالية (أ – د)، اختر الخيار الذي يصف التقييم الإرشادي بأفضل شكل.
      </p>
      <CyberLesson07SingleChoice
        :options="heuristicOptions"
        :ans="2"
        explanation="التقييم الإرشادي مراجعة يجريها خبراء لواجهة المستخدم استنادًا إلى قواعد أو مبادئ إرشادية عملية، وهو شكل من أشكال التقييم النوعي."
      />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const blanks = ['نوعيًا', 'كميًا', 'PV', 'معدل الارتداد', 'معدل التحويل (CVR)']
const wordBank = ['كميًا', 'معدل التحويل (CVR)', 'نوعيًا', 'معدل الارتداد', 'PV', 'اختبار A/B']
const answers = ref([null, null, null, null, null])
const checked = ref(false)

function shown(i) {
  if (checked.value) return blanks[i]
  return answers.value[i] ?? `( ${i + 1} )`
}
function blankClass(i) {
  if (!checked.value) return answers.value[i] ? 'bg-emerald-50 text-emerald-800 border-emerald-300' : 'bg-slate-100 text-slate-500 border-slate-300'
  return answers.value[i] === blanks[i] ? 'bg-emerald-100 text-emerald-800 border-emerald-400' : 'bg-rose-100 text-rose-800 border-rose-400'
}

const classifyOptions = ['أ التقييم النوعي', 'ب التقييم الكمي']
const classifyItems = [
  { text: 'جعل المستخدمين يستكشفون الموقع الإلكتروني فعليًا ومراقبة قابلية استخدامه', ans: 0 },
  { text: 'إحصاء عدد مرات الوصول ومشاهدات الصفحة للموقع الإلكتروني', ans: 1 },
  { text: 'إجراء مقابلات مع المستخدمين للاستماع إلى انطباعاتهم وطلبات التحسين', ans: 0 },
]

const heuristicOptions = [
  'طريقة يستكشف فيها المستخدمون الموقع وتُراقَب قابلية الاستخدام.',
  'طريقة يتم فيها إحصاء بيانات عددية وتحليل استخدام الموقع.',
  'طريقة يحدد فيها الخبراء مشكلات واجهة المستخدم استنادًا إلى قواعد عملية.',
  'طريقة يتم فيها إعداد نمطين ومقارنتهما بالبيانات لمعرفة أيهما أكثر فعالية.',
]

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
.blank {
  display: inline-block;
  min-width: 6rem;
  margin: 0 0.25rem;
  padding: 0 0.6rem;
  border-width: 1px;
  border-style: dashed;
  border-radius: 0.5rem;
  font-weight: 700;
  text-align: center;
}
</style>
