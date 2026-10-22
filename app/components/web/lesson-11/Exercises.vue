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
        👇 استخدم <button @click="scrollTo('practice-quiz')" class="text-sky-700 font-bold underline">اختبر فهمك</button> في الأسفل، ثم ارجع إلى
        <button @click="scrollTo('client-server')" class="text-sky-700 font-bold underline">قسم ملحوظة مهمة</button> للمراجعة.
      </p>

      <!-- 2: fill the blanks -->
      <div class="bg-amber-50/60 border border-amber-200 rounded-2xl px-5 py-3 font-bold text-amber-900 mb-4">2 اقرأ الفقرة التالية وأجب عن كل سؤال.</div>
      <div class="bg-white border-r-4 border-sky-500 rounded-xl p-5 text-slate-700 leading-loose mb-4">
        يعتمد كثير من تطبيقات الويب على الاتصال بين
        <span class="blank" :class="blankClass(0)">{{ shown(0) }}</span>، الذي يرسل طلبًا، و<span class="blank" :class="blankClass(1)">{{ shown(1) }}</span>،
        الذي يستقبل الطلب ويعالجه ويعيد استجابة. ويستخدم الويب بروتوكولًا يسمى
        <span class="blank" :class="blankClass(2)">{{ shown(2) }}</span>
        لتبادل الرسائل. ويسمى استخدام
        <span class="blank" :class="blankClass(2)">{{ shown(2) }}</span>
        عبر اتصال TLS آمن
        <span class="blank" :class="blankClass(3)">{{ shown(3) }}</span>.
      </div>
      <p class="font-bold text-slate-800 mb-3">1. املأ الفراغات (أ) – (د): اختر لكل فراغ الكلمة المناسبة.</p>
      <div class="grid sm:grid-cols-2 gap-3 mb-4">
        <div v-for="(b, i) in blanks" :key="i" class="bg-white border border-slate-200 rounded-xl p-3 flex items-center gap-3">
          <span class="font-bold text-sky-700 shrink-0">({{ letters[i] }})</span>
          <select v-model="answers[i]" class="flex-1 bg-slate-50 border border-slate-200 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400">
            <option :value="null" disabled>اختر…</option>
            <option v-for="w in wordBank" :key="w" :value="w">{{ w }}</option>
          </select>
        </div>
      </div>
      <button @click="checked = !checked" class="mb-12 bg-sky-600 hover:bg-sky-700 text-white font-bold py-2 px-6 rounded-xl transition-colors">
        {{ checked ? 'إخفاء الحل' : 'تحقق من إجاباتك' }}
      </button>

      <!-- 3 -->
      <div class="bg-amber-50/60 border border-amber-200 rounded-2xl px-5 py-3 font-bold text-amber-900 mb-4">3 أجب عن الأسئلة التالية.</div>
      <p class="text-slate-800 font-medium leading-relaxed mb-4">
        (1) لكل من العمليات (1 – 4)، حدد طريقة طلب HTTP المستخدم: <span class="text-sky-700 font-bold">أ</span> GET، <span class="text-sky-700 font-bold">ب</span> POST.
      </p>
      <CyberLesson07ChoiceItems :items="methodItems" :options="methodOptions" class="mb-10" />

      <p class="text-slate-800 font-medium leading-relaxed mb-4">
        (2) من بين الخيارات التالية (أ – د)، اختر الخيار الذي يصف HTTPS بأنسب شكل.
      </p>
      <CyberLesson07SingleChoice
        :options="httpsOptions"
        :ans="2"
        explanation="HTTPS هو استخدام HTTP عبر اتصال محمي بـ TLS، يحمي سرية الاتصال وسلامته ويصادق الخادم."
      />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const letters = ['أ', 'ب', 'ج', 'د']
const blanks = ['العميل', 'الخادم', 'HTTP', 'HTTPS']
const wordBank = ['HTTPS', 'العميل', 'JSON', 'الخادم', 'HTTP', 'API']
const answers = ref([null, null, null, null])
const checked = ref(false)

function shown(i) {
  if (checked.value) return blanks[i]
  return answers.value[i] ?? `( ${letters[i]} )`
}
function blankClass(i) {
  if (!checked.value) return answers.value[i] ? 'bg-sky-50 text-sky-800 border-sky-300' : 'bg-slate-100 text-slate-500 border-slate-300'
  return answers.value[i] === blanks[i] ? 'bg-emerald-100 text-emerald-800 border-emerald-400' : 'bg-rose-100 text-rose-800 border-rose-400'
}

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

const methodOptions = ['أ GET', 'ب POST']
const methodItems = [
  { text: 'عرض صفحة ويب', ans: 0 },
  { text: 'إدخال معرّف وكلمة مرور في نموذج تسجيل الدخول وإرسالها', ans: 1 },
  { text: 'عرض نتائج البحث', ans: 0 },
  { text: 'إرسال محتويات نموذج التواصل', ans: 1 },
]

const httpsOptions = [
  'أسلوب لاسترجاع البيانات من الخادم',
  'نظام لتبادل البيانات بين برمجيات مختلفة',
  'بروتوكول يستخدم HTTP عبر اتصال محمي بـ TLS',
  'رمز حالة يشير إلى حدوث مشكلة في جانب الخادم',
]
</script>

<style scoped>
.blank {
  display: inline-block;
  min-width: 5rem;
  margin: 0 0.25rem;
  padding: 0 0.6rem;
  border-width: 1px;
  border-style: dashed;
  border-radius: 0.5rem;
  font-weight: 700;
  text-align: center;
}
</style>
