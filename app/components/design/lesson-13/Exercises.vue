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
        <button @click="scrollTo('media-comparison')" class="text-teal-700 font-bold underline">قسم ملحوظة مهمة</button> للمراجعة.
      </p>

      <!-- 2: fill the blanks -->
      <div class="bg-amber-50/60 border border-amber-200 rounded-2xl px-5 py-3 font-bold text-amber-900 mb-4">2 اقرأ الفقرة التالية وأجب عن كل سؤال.</div>
      <div class="bg-white border-r-4 border-teal-500 rounded-xl p-5 text-slate-700 leading-loose mb-4">
        لكل وسيلة خصائص مختلفة. يمكن للموقع عرض نصوص وصور وصوت وفيديو وتحديثها، وتحتاج معظم وظائفه إلى
        <span class="blank" :class="blankClass(0)">{{ shown(0) }}</span>،
        مع إمكان توفير محتوى محدود دون اتصال في بعض الحالات. وغالبًا يحتاج المستخدم إلى
        <span class="blank" :class="blankClass(1)">{{ shown(1) }}</span>
        الموقع لرؤية محتواه، ما لم تستخدم الخدمة إشعارات أو قنوات أخرى. وفي الحملات الفعلية كثيرًا ما تُجمع
        <span class="blank" :class="blankClass(2)">{{ shown(2) }}</span>
        متعددة، مثل توجيه المشاهد من إعلان إلى موقع.
      </div>
      <p class="font-bold text-slate-800 mb-3">1. املأ الفراغات (1) – (3): اختر لكل فراغ الكلمة المناسبة.</p>
      <div class="grid sm:grid-cols-3 gap-3 mb-4">
        <div v-for="(b, i) in blanks" :key="i" class="bg-white border border-slate-200 rounded-xl p-3 flex items-center gap-3">
          <span class="font-bold text-teal-700 shrink-0">({{ i + 1 }})</span>
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
        (1) من بين الخيارات التالية (أ – د)، اختر الخيار الذي يصف خصائص الوسائط بأنسب شكل.
      </p>
      <CyberLesson07SingleChoice
        :options="traitOptions"
        :ans="2"
        explanation="وسائل التواصل الاجتماعي تنشر المعلومات بسرعة وتسمح للمستخدمين بالنشر والمشاركة والتفاعل. أما الراديو فينقل الصوت فقط، والصحف ليست الأسرع في النشر، والتلفزيون عادةً اتجاه واحد."
        class="mb-10"
      />

      <p class="text-slate-800 font-medium leading-relaxed mb-4">
        (2) من بين الخيارات التالية (أ – د)، اختر الخيار الذي يصف اختيار الوسائط بأنسب شكل.
      </p>
      <CyberLesson07SingleChoice
        :options="choiceOptions"
        :ans="2"
        explanation="لا توجد وسيلة واحدة هي الأفضل لكل شيء؛ لذلك نختار الوسيلة الأنسب وفقًا للغرض والجمهور المستهدف، وغالبًا نجمع بين عدة وسائط."
      />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const blanks = ['اتصال', 'فتح', 'وسائط']
const wordBank = ['فتح', 'وسائط', 'اتصال', 'طباعة', 'بث']
const answers = ref([null, null, null])
const checked = ref(false)

function shown(i) {
  if (checked.value) return blanks[i]
  return answers.value[i] ?? `( ${i + 1} )`
}
function blankClass(i) {
  if (!checked.value) return answers.value[i] ? 'bg-teal-50 text-teal-800 border-teal-300' : 'bg-slate-100 text-slate-500 border-slate-300'
  return answers.value[i] === blanks[i] ? 'bg-emerald-100 text-emerald-800 border-emerald-400' : 'bg-rose-100 text-rose-800 border-rose-400'
}

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

const traitOptions = [
  'الراديو وسيلة تنقل المعلومات من خلال الفيديو والصوت.',
  'الصحف وسائل فعّالة للغاية في نشر المعلومات بسرعة.',
  'وسائل التواصل الاجتماعي وسيلة تتيح للمستخدمين نشر المعلومات ومشاركتها.',
  'التلفزيون وسيلة تتيح التفاعل ثنائي الاتجاه مع المستخدمين.',
]

const choiceOptions = [
  'يجب أن يستخدم نشر المعلومات دائمًا وسيلة واحدة فقط.',
  'بغض النظر عن الغرض أو الجمهور المستهدف، يكفي الموقع الإلكتروني.',
  'من المهم اختيار الوسيلة الأنسب وفقًا للغرض والجمهور المستهدف.',
  'مع وسائل التواصل الاجتماعي، لا حاجة إلى التلفزيون والمواقع الإلكترونية.',
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
