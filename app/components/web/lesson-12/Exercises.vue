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
        👇 استخدم <button @click="scrollTo('practice-quiz')" class="text-orange-700 font-bold underline">اختبر فهمك</button> في الأسفل، ثم ارجع إلى
        <button @click="scrollTo('html-css-js')" class="text-orange-700 font-bold underline">قسم ملحوظة مهمة</button> للمراجعة.
      </p>

      <!-- 2: fill the blanks -->
      <div class="bg-amber-50/60 border border-amber-200 rounded-2xl px-5 py-3 font-bold text-amber-900 mb-4">2 اقرأ الفقرة التالية وأجب عن كل سؤال.</div>
      <div class="bg-white border-r-4 border-orange-500 rounded-xl p-5 text-slate-700 leading-loose mb-4">
        تستخدم كثير من صفحات الويب
        <span class="blank" :class="blankClass(0)">{{ shown(0) }}</span>
        لتحديد البنية، ويمكن أن تستخدم
        <span class="blank" :class="blankClass(1)">{{ shown(1) }}</span>
        لتنسيق المظهر، و
        <span class="blank" :class="blankClass(2)">{{ shown(2) }}</span>
        لإضافة السلوك والتفاعل. ويسمى تصميم التخطيط ليتكيف مع أحجام الشاشات المختلفة
        <span class="blank" :class="blankClass(3)">{{ shown(3) }}</span>.
      </div>
      <p class="font-bold text-slate-800 mb-3">1. املأ الفراغات (1) – (4): اختر لكل فراغ الكلمة المناسبة.</p>
      <div class="grid sm:grid-cols-2 gap-3 mb-4">
        <div v-for="(b, i) in blanks" :key="i" class="bg-white border border-slate-200 rounded-xl p-3 flex items-center gap-3">
          <span class="font-bold text-orange-700 shrink-0">({{ i + 1 }})</span>
          <select v-model="answers[i]" class="flex-1 bg-slate-50 border border-slate-200 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400">
            <option :value="null" disabled>اختر…</option>
            <option v-for="w in wordBank" :key="w" :value="w">{{ w }}</option>
          </select>
        </div>
      </div>
      <button @click="checked = !checked" class="mb-12 bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-6 rounded-xl transition-colors">
        {{ checked ? 'إخفاء الحل' : 'تحقق من إجاباتك' }}
      </button>

      <!-- 3 -->
      <div class="bg-amber-50/60 border border-amber-200 rounded-2xl px-5 py-3 font-bold text-amber-900 mb-4">3 أجب عن الأسئلة التالية.</div>
      <p class="text-slate-800 font-medium leading-relaxed mb-4">
        (1) بالنسبة لكل من المهام (1 – 6)، حدد التقنية المستخدمة لتحقيقها:
        <span class="text-orange-700 font-bold">أ</span> HTML، <span class="text-orange-700 font-bold">ب</span> CSS، <span class="text-orange-700 font-bold">ج</span> JavaScript.
      </p>
      <CyberLesson07ChoiceItems :items="tasks" :options="techOptions" class="mb-10" />

      <p class="text-slate-800 font-medium leading-relaxed mb-4">
        (2) من بين الخيارات التالية (أ – د)، اختر الخيار الذي يصف بأنسب شكل سبب الحاجة إلى التصميم المتجاوب.
      </p>
      <CyberLesson07SingleChoice
        :options="reasonOptions"
        :ans="1"
        explanation="يحتاج الموقع إلى التصميم المتجاوب لأن المستخدمين يصلون إليه من أجهزة متنوعة بأحجام شاشات مختلفة، فيُضبط التخطيط تلقائيًا ليناسب كل شاشة."
      />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const blanks = ['HTML', 'CSS', 'JavaScript', 'التصميم المتجاوب']
const wordBank = ['JavaScript', 'التصميم المتجاوب', 'HTML', 'إطار العمل', 'CSS']
const answers = ref([null, null, null, null])
const checked = ref(false)

function shown(i) {
  if (checked.value) return blanks[i]
  return answers.value[i] ?? `( ${i + 1} )`
}
function blankClass(i) {
  if (!checked.value) return answers.value[i] ? 'bg-orange-50 text-orange-800 border-orange-300' : 'bg-slate-100 text-slate-500 border-slate-300'
  return answers.value[i] === blanks[i] ? 'bg-emerald-100 text-emerald-800 border-emerald-400' : 'bg-rose-100 text-rose-800 border-rose-400'
}

const techOptions = ['أ HTML', 'ب CSS', 'ج JavaScript']
const tasks = [
  { text: 'وصف بنية العناوين والفقرات', ans: 0 },
  { text: 'تغيير لون النص وحجمه', ans: 1 },
  { text: 'تحديث جزء من الشاشة عند الضغط على زر', ans: 2 },
  { text: 'وضع الصور والروابط', ans: 0 },
  { text: 'تحديد لون خلفية الصفحة بأكملها', ans: 1 },
  { text: 'التحقق من صحة المحتويات المُدخلة في نموذج', ans: 2 },
]

const reasonOptions = [
  'لتحسين سرعة عرض المواقع الإلكترونية',
  'لأن المواقع الإلكترونية يتم الوصول إليها من أجهزة متنوعة مثل أجهزة الكمبيوتر والهواتف الذكية والأجهزة اللوحية',
  'لرفع الترتيب في محركات البحث',
  'لإضافة سلوك إلى صفحات الويب',
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
