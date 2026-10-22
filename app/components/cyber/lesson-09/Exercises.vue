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
        👇 استخدم <button @click="scrollTo('practice-quiz')" class="text-rose-700 font-bold underline">اختبر فهمك</button> في الأسفل، ثم ارجع إلى
        <button @click="scrollTo('security-incident')" class="text-rose-700 font-bold underline">قسم ملحوظة مهمة</button> للمراجعة.
      </p>

      <!-- 2: fill the blanks -->
      <div class="bg-amber-50/60 border border-amber-200 rounded-2xl px-5 py-3 font-bold text-amber-900 mb-4">2 اقرأ الفقرة التالية وأجب عن كل سؤال.</div>
      <div class="bg-white border-r-4 border-rose-500 rounded-xl p-5 text-slate-700 leading-loose mb-4">
        يُسمى الحدث الذي يؤثر في سرية المعلومات أو سلامتها أو توافرها، أو يهددها بجدية،
        <span class="blank" :class="blankClass(0)">{{ shown(0) }}</span>.
        وفي نموذج الدرس، يُستخدم
        <span class="blank" :class="blankClass(1)">{{ shown(1) }}</span>
        للحد من انتشار الضرر، ثم تُنفذ
        <span class="blank" :class="blankClass(2)">{{ shown(2) }}</span>
        لإزالة التهديد ومسبباته، وتليها
        <span class="blank" :class="blankClass(3)">{{ shown(3) }}</span>
        لإعادة الأنظمة والخدمات، ثم تأتي
        <span class="blank" :class="blankClass(4)">{{ shown(4) }}</span>
        لتحليل ما حدث وتحسين الحماية.
      </div>
      <p class="font-bold text-slate-800 mb-3">1. املأ الفراغات (أ) – (هـ): اختر لكل فراغ الكلمة المناسبة.</p>
      <div class="grid sm:grid-cols-2 gap-3 mb-4">
        <div v-for="(b, i) in blanks" :key="i" class="bg-white border border-slate-200 rounded-xl p-3 flex items-center gap-3">
          <span class="font-bold text-rose-700 shrink-0">({{ letters[i] }})</span>
          <select v-model="answers[i]" class="flex-1 bg-slate-50 border border-slate-200 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-rose-400">
            <option :value="null" disabled>اختر…</option>
            <option v-for="w in wordBank" :key="w" :value="w">{{ w }}</option>
          </select>
        </div>
      </div>
      <button @click="checked = !checked" class="mb-12 bg-rose-600 hover:bg-rose-700 text-white font-bold py-2 px-6 rounded-xl transition-colors">
        {{ checked ? 'إخفاء الحل' : 'تحقق من إجاباتك' }}
      </button>

      <!-- 3 -->
      <div class="bg-amber-50/60 border border-amber-200 rounded-2xl px-5 py-3 font-bold text-amber-900 mb-4">3 أجب عن الأسئلة التالية.</div>
      <p class="text-slate-800 font-medium leading-relaxed mb-4">
        (1) استخدم مصفوفة الدرس والقيم المعطاة لتحديد أولوية المخاطر (أ – د). إذا تساوت درجتان أو لم تكفِ المعلومات للترتيب، فاذكر ذلك وفسّر إجابتك.
      </p>
      <div class="space-y-3 mb-4">
        <div v-for="(r, i) in riskItems" :key="i" class="bg-white border border-slate-200 rounded-2xl p-4 flex flex-col md:flex-row md:items-center gap-3">
          <p class="flex-1 text-slate-800 font-medium">
            <span class="font-bold text-rose-700 ml-2">{{ letters[i] }}</span>التأثير: {{ r.impactText }}، الاحتمالية: {{ r.likelihoodText }}
          </p>
          <div class="flex gap-2 shrink-0">
            <button v-for="n in 4" :key="n" @click="rank[i] = n"
                    class="w-10 h-10 rounded-xl border-2 font-bold transition-colors"
                    :class="rankClass(i, n)">{{ n }}</button>
          </div>
        </div>
      </div>
      <button @click="showRank = !showRank" class="mb-4 bg-rose-600 hover:bg-rose-700 text-white font-bold py-2 px-6 rounded-xl transition-colors">
        {{ showRank ? 'إخفاء الحل' : 'إظهار الحل' }}
      </button>
      <div v-if="showRank" class="bg-white border border-emerald-200 rounded-2xl p-5 text-slate-800 leading-relaxed mb-10 space-y-1">
        <p><strong class="text-rose-700">أ</strong> (كبير × عالية) = <strong>مرتفع جدًا</strong> ← الأولوية الأولى.</p>
        <p><strong class="text-rose-700">ب</strong> (صغير × عالية) = <strong>متوسط</strong>، و<strong class="text-rose-700">ج</strong> (كبير × منخفضة) = <strong>متوسط</strong> ← درجتان متساويتان؛ لا تكفي المصفوفة وحدها لترتيبهما، ويُحسم ترتيبهما بالسياق والضوابط المتاحة (فيقبل الترتيب 2 أو 3 لكل منهما).</p>
        <p><strong class="text-rose-700">د</strong> (صغير × منخفضة) = <strong>منخفض جدًا</strong> ← الأولوية الأخيرة.</p>
      </div>

      <p class="text-slate-800 font-medium leading-relaxed mb-4">
        (2) من بين الخيارات التالية (أ – د)، اختر الوصف الأدق للتسلسل العام في نموذج الاستجابة للحوادث، مع مراعاة أن بعض الأنشطة قد تتداخل أو تتكرر.
      </p>
      <CyberLesson07SingleChoice
        :options="sequenceOptions"
        :ans="1"
        explanation="التسلسل العام: التحضير ← الاكتشاف ← الاحتواء ← الاستئصال ← الاستعادة ← الدروس المستفادة والتحسين، مع إمكانية التداخل أو العودة لمرحلة سابقة."
      />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const letters = ['أ', 'ب', 'ج', 'د', 'هـ']
const blanks = ['الحادث الأمني', 'الاحتواء', 'إزالة التهديد (الاستئصال)', 'الاستعادة', 'الدروس المستفادة والتحسين']
const wordBank = ['الاستعادة', 'الحادث الأمني', 'الدروس المستفادة والتحسين', 'الاحتواء', 'التحضير', 'إزالة التهديد (الاستئصال)']
const answers = ref([null, null, null, null, null])
const checked = ref(false)

function shown(i) {
  if (checked.value) return blanks[i]
  return answers.value[i] ?? `( ${letters[i]} )`
}
function blankClass(i) {
  if (!checked.value) return answers.value[i] ? 'bg-rose-50 text-rose-800 border-rose-300' : 'bg-slate-100 text-slate-500 border-slate-300'
  return answers.value[i] === blanks[i] ? 'bg-emerald-100 text-emerald-800 border-emerald-400' : 'bg-rose-100 text-rose-800 border-rose-400'
}

// b and c tie on the matrix, so either of ranks 2 and 3 is accepted for them
const riskItems = [
  { impactText: 'كبير', likelihoodText: 'عالية', accept: [1] },
  { impactText: 'صغير', likelihoodText: 'عالية', accept: [2, 3] },
  { impactText: 'كبير', likelihoodText: 'منخفضة', accept: [2, 3] },
  { impactText: 'صغير', likelihoodText: 'منخفضة', accept: [4] },
]
const rank = ref([null, null, null, null])
const showRank = ref(false)
function rankClass(i, n) {
  const ok = riskItems[i].accept.includes(n)
  if (showRank.value && ok) return 'bg-emerald-500 border-emerald-500 text-white'
  if (rank.value[i] === n) return showRank.value ? 'bg-rose-500 border-rose-500 text-white' : 'bg-rose-100 border-rose-500 text-rose-900'
  return 'bg-white border-slate-200 text-slate-600 hover:border-slate-400'
}

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

const sequenceOptions = [
  'الاكتشاف ← الاستئصال ← الاحتواء ← الاستعادة',
  'التحضير ← الاكتشاف ← الاحتواء ← الاستئصال ← الاستعادة ← الدروس المستفادة والتحسين',
  'الاكتشاف ← الاستعادة ← الاحتواء ← الدروس المستفادة والتحسين',
  'الاحتواء ← الاكتشاف ← الاستئصال ← التحضير',
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
