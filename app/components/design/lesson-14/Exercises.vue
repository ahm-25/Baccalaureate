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
        👇 استخدم <button @click="scrollTo('practice-quiz')" class="text-fuchsia-700 font-bold underline">اختبر فهمك</button> في الأسفل، ثم ارجع إلى
        <button @click="scrollTo('persona')" class="text-fuchsia-700 font-bold underline">قسم ملحوظة مهمة</button> للمراجعة.
      </p>

      <!-- 2: fill the blanks -->
      <div class="bg-amber-50/60 border border-amber-200 rounded-2xl px-5 py-3 font-bold text-amber-900 mb-4">2 اقرأ الفقرة التالية وأجب عن كل سؤال.</div>
      <div class="bg-white border-r-4 border-fuchsia-500 rounded-xl p-5 text-slate-700 leading-loose mb-4">
        عند تصميم موقع، ابدأ بفهم المستخدم وسياق الاستخدام. ويمكنك استخدام
        <span class="blank" :class="blankClass(0)">{{ shown(0) }}</span>
        لتلخيص نوع من المستخدمين واحتياجاته، و
        <span class="blank" :class="blankClass(1)">{{ shown(1) }}</span>
        لتخطيط أماكن العناصر وأولوياتها. كما يمكن استخدام
        <span class="blank" :class="blankClass(2)">{{ shown(2) }}</span>
        – التباين والتكرار والمحاذاة والتقارب – لتنظيم الشكل، مع اختبار قابلية الاستخدام وإمكانية الوصول وتحسين التصميم تكراريًا.
      </div>
      <p class="font-bold text-slate-800 mb-3">1. املأ الفراغات (1) – (3): اختر لكل فراغ الكلمة المناسبة.</p>
      <div class="grid sm:grid-cols-3 gap-3 mb-4">
        <div v-for="(b, i) in blanks" :key="i" class="bg-white border border-slate-200 rounded-xl p-3 flex items-center gap-3">
          <span class="font-bold text-fuchsia-700 shrink-0">({{ i + 1 }})</span>
          <select v-model="answers[i]" class="flex-1 bg-slate-50 border border-slate-200 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-fuchsia-400">
            <option :value="null" disabled>اختر…</option>
            <option v-for="w in wordBank" :key="w" :value="w">{{ w }}</option>
          </select>
        </div>
      </div>
      <button @click="checked = !checked" class="mb-12 bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-bold py-2 px-6 rounded-xl transition-colors">
        {{ checked ? 'إخفاء الحل' : 'تحقق من إجاباتك' }}
      </button>

      <!-- 3 -->
      <div class="bg-amber-50/60 border border-amber-200 rounded-2xl px-5 py-3 font-bold text-amber-900 mb-4">3 أجب عن الأسئلة التالية.</div>
      <p class="text-slate-800 font-medium leading-relaxed mb-4">
        (1) من الخيارات التالية (أ – د)، اختر الخيار غير المدرج ضمن المبادئ الأربعة للتصميم (مبادئ CRAP).
      </p>
      <CyberLesson07SingleChoice
        :options="crapOptions"
        :ans="1"
        explanation="مبادئ CRAP هي: التباين (Contrast)، والتكرار (Repetition)، والمحاذاة (Alignment)، والتقارب (Proximity). التشفير ليس منها."
        class="mb-10"
      />

      <p class="text-slate-800 font-medium leading-relaxed mb-4">
        (2) من الخيارات التالية (أ – د)، اختر الخيار الذي يصف مفهوم التصميم المتمحور حول المستخدم بأنسب شكل.
      </p>
      <CyberLesson07SingleChoice
        :options="ucdOptions"
        :ans="2"
        explanation="التصميم المتمحور حول المستخدم نهج يجعل فهم المستخدمين واحتياجاتهم وسياق استخدامهم أساسًا لقرارات التصميم."
      />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const blanks = ['شخصية المستخدم', 'المخطط الهيكلي', 'مبادئ CRAP']
const wordBank = ['المخطط الهيكلي', 'مبادئ CRAP', 'شخصية المستخدم', 'التصميم النهائي']
const answers = ref([null, null, null])
const checked = ref(false)

function shown(i) {
  if (checked.value) return blanks[i]
  return answers.value[i] ?? `( ${i + 1} )`
}
function blankClass(i) {
  if (!checked.value) return answers.value[i] ? 'bg-fuchsia-50 text-fuchsia-800 border-fuchsia-300' : 'bg-slate-100 text-slate-500 border-slate-300'
  return answers.value[i] === blanks[i] ? 'bg-emerald-100 text-emerald-800 border-emerald-400' : 'bg-rose-100 text-rose-800 border-rose-400'
}

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

const crapOptions = ['التباين', 'التشفير', 'المحاذاة', 'التقارب']
const ucdOptions = [
  'إعطاء الأولوية للتصميم الذي يجده المطوّر سهل الاستخدام.',
  'إعطاء الأهمية القصوى للتصميم البصري.',
  'بدء التصميم انطلاقًا مما يحتاجه المستخدم.',
  'استخدام أكبر عدد ممكن من أحدث التقنيات.',
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
