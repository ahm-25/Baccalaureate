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
        👇 استخدم <button @click="scrollTo('practice-quiz')" class="text-teal-700 font-bold underline">اختبر فهمك</button> في الأسفل، ثم ارجع إلى
        <button @click="scrollTo('firewall')" class="text-teal-700 font-bold underline">قسم ملحوظة مهمة</button> للمراجعة.
      </p>

      <!-- 2: fill the blanks -->
      <div class="bg-amber-50/60 border border-amber-200 rounded-2xl px-5 py-3 font-bold text-amber-900 mb-4">2 اقرأ الفقرة التالية وأجب عن كل سؤال.</div>
      <div class="bg-white border-r-4 border-teal-500 rounded-xl p-5 text-slate-700 leading-loose mb-4">
        لحماية شبكة مؤسسة، تُستخدم طبقات متعددة. يراقب
        <span class="blank" :class="blankClass(0)">{{ shown(0) }}</span>
        حركة الشبكة ويسمح بها أو يمنعها وفق قواعد. وتوضع الخوادم العامة في
        <span class="blank" :class="blankClass(1)">{{ shown(1) }}</span>
        منفصلة عن الشبكة الداخلية. ويُحمى الاتصال البعيد عبر
        <span class="blank" :class="blankClass(2)">{{ shown(2) }}</span>.
        ويسمى استخدام طبقات متعددة من الضوابط الأمنية
        <span class="blank" :class="blankClass(3)">{{ shown(3) }}</span>.
      </div>
      <p class="font-bold text-slate-800 mb-3">1. املأ الفراغات (أ) – (د): اختر لكل فراغ الكلمة المناسبة.</p>
      <div class="grid sm:grid-cols-2 gap-3 mb-4">
        <div v-for="(b, i) in blanks" :key="i" class="bg-white border border-slate-200 rounded-xl p-3 flex items-center gap-3">
          <span class="font-bold text-teal-700 shrink-0">({{ letters[i] }})</span>
          <select v-model="answers[i]" class="flex-1 bg-slate-50 border border-slate-200 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400">
            <option :value="null" disabled>اختر…</option>
            <option v-for="w in wordBank" :key="w" :value="w">{{ w }}</option>
          </select>
        </div>
      </div>
      <button @click="checked = !checked" class="mb-12 bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-6 rounded-xl transition-colors">
        {{ checked ? 'إخفاء الحل' : 'تحقق من إجاباتك' }}
      </button>

      <!-- 3 -->
      <div class="bg-amber-50/60 border border-amber-200 rounded-2xl px-5 py-3 font-bold text-amber-900 mb-4">3 أجب عن الأسئلة التالية.</div>
      <p class="text-slate-800 font-medium leading-relaxed mb-4">
        (1) من بين الخيارات التالية (أ – د)، اختر السبب الأنسب لاستخدام منطقة معزولة (DMZ).
      </p>
      <CyberLesson07SingleChoice
        :options="dmzOptions"
        :ans="2"
        explanation="الغرض من DMZ فصل الخوادم المواجهة للجمهور عن الشبكة الداخلية، فإذا تعرض أحدها للهجوم يقل احتمال وصول الضرر إلى الداخل."
        class="mb-10"
      />

      <p class="text-slate-800 font-medium leading-relaxed mb-4">
        (2) من بين الخيارات التالية (أ – د)، اختر الخيار الذي يصف مفهوم نهج انعدام الثقة بأنسب طريقة.
      </p>
      <CyberLesson07SingleChoice
        :options="zeroTrustOptions"
        :ans="2"
        explanation="نهج انعدام الثقة لا يمنح الثقة تلقائيًا بناءً على موقع المستخدم أو الجهاز، ويتحقق من كل طلب وصول وفق الهوية والصلاحيات والسياق."
      />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const letters = ['أ', 'ب', 'ج', 'د']
const blanks = ['جدار الحماية', 'المنطقة المعزولة (DMZ)', 'الشبكة الافتراضية الخاصة (VPN)', 'الدفاع في العمق']
const wordBank = ['الدفاع في العمق', 'جدار الحماية', 'الشبكة الافتراضية الخاصة (VPN)', 'المنطقة المعزولة (DMZ)', 'نهج انعدام الثقة']
const answers = ref([null, null, null, null])
const checked = ref(false)

function shown(i) {
  if (checked.value) return blanks[i]
  return answers.value[i] ?? `( ${letters[i]} )`
}
function blankClass(i) {
  if (!checked.value) return answers.value[i] ? 'bg-teal-50 text-teal-800 border-teal-300' : 'bg-slate-100 text-slate-500 border-slate-300'
  return answers.value[i] === blanks[i] ? 'bg-emerald-100 text-emerald-800 border-emerald-400' : 'bg-rose-100 text-rose-800 border-rose-400'
}

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

const dmzOptions = [
  'لتحسين سرعة الاتصال.',
  'لتعريض جميع الخوادم للخارج.',
  'لمنع الضرر عن الشبكة الداخلية حتى لو تعرض خادم مواجه للجمهور للهجوم.',
  'للكشف عن الفيروسات وإزالتها تلقائيًا.',
]

const zeroTrustOptions = [
  'الوصول من داخل شبكة المؤسسة آمن، لذا فإن التحقق غير ضروري.',
  'جدار الحماية وحده كافٍ لحماية الشبكة.',
  'لا تُمنح الثقة تلقائيًا بناءً على موقع المستخدم أو الجهاز، ويُتحقق من كل طلب وصول وفق الهوية والصلاحيات والسياق.',
  'يحتاج فقط الوصول من الخارج إلى المراقبة.',
]
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
