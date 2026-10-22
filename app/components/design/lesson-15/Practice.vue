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
          <button v-if="!open.includes(i)" @click="open.push(i)" class="text-emerald-700 font-bold bg-emerald-50 hover:bg-emerald-100 px-4 py-2 rounded-lg text-sm transition-colors">
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
        (1) من الخيارات التالية (أ – د)، اختر <strong class="text-emerald-700">جميع</strong> المصطلحات التي تُعد جزءًا من طرق التقييم الكمي.
      </p>
      <div class="space-y-2 mb-4">
        <button v-for="(o, i) in quantOptions" :key="o.text" @click="toggle(i)"
                class="w-full text-right p-4 rounded-xl border-2 flex items-center gap-3 transition-colors"
                :class="multiClass(i)">
          <span class="w-5 h-5 shrink-0 rounded border-2 flex items-center justify-center text-xs"
                :class="selected.includes(i) ? 'border-emerald-500 bg-emerald-500 text-white' : 'border-slate-300'">{{ selected.includes(i) ? '✓' : '' }}</span>
          <span class="font-bold text-emerald-700">{{ letters[i] }}</span>
          <span class="font-medium">{{ o.text }}</span>
        </button>
      </div>
      <button @click="checked = !checked" class="mb-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-6 rounded-xl transition-colors">
        {{ checked ? 'إخفاء الحل' : 'تحقق من اختيارك' }}
      </button>
      <div v-if="checked" class="mb-10 p-4 rounded-xl text-sm leading-relaxed border"
           :class="allRight ? 'bg-emerald-50 text-emerald-900 border-emerald-200' : 'bg-rose-50 text-rose-900 border-rose-200'">
        <strong>{{ allRight ? '✅ إجابة صحيحة.' : '❌ الإجابة الصحيحة: ب و د.' }}</strong>
        تحليلات الويب واختبار A/B طريقتان كميتان تعتمدان على الأرقام؛ أما اختبار قابلية الاستخدام والمقابلات فطريقتان نوعيتان.
      </div>

      <p class="text-slate-800 font-medium leading-relaxed mb-4">
        (2) من الخيارات التالية (أ – د)، اختر الخيار الذي يصف معدل التحويل بأفضل شكل.
      </p>
      <CyberLesson07SingleChoice
        :options="cvrOptions"
        :ans="2"
        explanation="معدل التحويل: نسبة المستخدمين أو الجلسات التي حققت إجراءً مستهدفًا (شراء منتج، تسجيل عضوية، إلخ)، مع تحديد المقام وطريقة الحساب."
      />
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const open = ref([])
const letters = ['أ', 'ب', 'ج', 'د']

const shortQuestions = [
  { q: 'ما المصطلح الخاص بالطريقة التي تُقيِّم نوعيًا من خلال مراقبة آراء المستخدمين وسلوكهم؟', a: 'التقييم النوعي.' },
  { q: 'ما المصطلح الخاص بالطريقة التي تُقيِّم كميًا باستخدام بيانات عددية؟', a: 'التقييم الكمي.' },
  { q: 'ما الاختصار المكوّن من حرفين للمؤشر الذي يُظهر عدد مرات مشاهدة صفحة ما؟', a: 'PV (مشاهدات الصفحة).' },
  { q: 'ما المصطلح الخاص بالطريقة التي يحدد فيها الخبراء مشكلات واجهة المستخدم استنادًا إلى قواعد عملية؟', a: 'التقييم الإرشادي.' },
]

const quantOptions = [
  { text: 'اختبار قابلية الاستخدام', quant: false },
  { text: 'تحليلات الويب', quant: true },
  { text: 'المقابلات', quant: false },
  { text: 'اختبار A/B', quant: true },
]
const selected = ref([])
const checked = ref(false)
function toggle(i) {
  checked.value = false
  const k = selected.value.indexOf(i)
  if (k === -1) selected.value.push(i)
  else selected.value.splice(k, 1)
}
const allRight = computed(() => quantOptions.every((o, i) => o.quant === selected.value.includes(i)))
function multiClass(i) {
  if (!checked.value) return selected.value.includes(i) ? 'bg-emerald-50 border-emerald-400 text-slate-800' : 'bg-white border-slate-200 text-slate-700 hover:border-emerald-400'
  if (quantOptions[i].quant) return 'bg-emerald-500 border-emerald-500 text-white'
  return selected.value.includes(i) ? 'bg-rose-50 border-rose-400 text-rose-900' : 'bg-white border-slate-100 text-slate-400'
}

const cvrOptions = [
  'نسبة مرات مشاهدة صفحة ما.',
  'نسبة المستخدمين الذين غادروا الموقع بعد مشاهدة الصفحة الأولى فقط.',
  'نسبة المستخدمين الذين حققوا إجراءً مستهدفًا (شراء منتج، تسجيل عضوية، إلخ).',
  'نسبة الصفحات المشاهدة إلى إجمالي عدد صفحات الموقع.',
]
</script>
