<template>
  <section id="solved-example" class="py-12 bg-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center gap-3 mb-8">
        <span class="text-3xl">✏️</span>
        <h2 class="text-2xl font-bold text-slate-900">مثال محلول</h2>
      </div>

      <!-- Part 1: true / false -->
      <div class="bg-rose-50/40 border border-rose-100 rounded-3xl p-6 md:p-8 mb-8">
        <h3 class="text-lg font-bold text-slate-800 mb-2">(1) ضع علامة ○ أمام كل عبارة (أ – د) إذا كانت صحيحة، أو علامة × إذا كانت خاطئة.</h3>
        <p class="text-sm text-slate-500 mb-6">اختر إجابتك أولًا، ثم اعرض الحل.</p>

        <div class="space-y-4">
          <div v-for="(q, i) in statements" :key="i" class="bg-white border border-slate-200 rounded-2xl p-4">
            <div class="flex flex-col md:flex-row md:items-center gap-3">
              <p class="flex-1 text-slate-800 font-medium leading-relaxed">
                <span class="font-bold text-sky-700 ml-2">{{ letters[i] }}</span>{{ q.text }}
              </p>
              <div class="flex gap-2 shrink-0">
                <button v-for="opt in [true, false]" :key="String(opt)" @click="q.pick = opt"
                        class="w-12 h-10 rounded-xl border-2 font-bold text-lg transition-colors"
                        :class="buttonClass(q, opt)">
                  {{ opt ? '○' : '×' }}
                </button>
              </div>
            </div>
            <p v-if="showPart1" class="mt-3 text-sm leading-relaxed p-3 rounded-xl"
               :class="q.ans ? 'bg-emerald-50 text-emerald-900' : 'bg-rose-50 text-rose-900'">
              <strong>{{ q.ans ? '○' : '×' }}</strong> — {{ q.why }}
            </p>
          </div>
        </div>

        <button @click="showPart1 = !showPart1" class="mt-6 bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 px-8 rounded-xl transition-colors">
          {{ showPart1 ? 'إخفاء الحل' : 'إظهار الحل' }}
        </button>
      </div>

      <!-- Part 2: match need to technique -->
      <div class="bg-rose-50/40 border border-rose-100 rounded-3xl p-6 md:p-8">
        <h3 class="text-lg font-bold text-slate-800 mb-4">(2) طابق كل تهديد (أ – ج) بأنسب تقنية أمان من الخيارات التالية (أ – ج).</h3>
        <div class="bg-white border border-slate-200 rounded-xl p-3 mb-6 font-bold text-slate-700">
          [الخيارات] <span class="text-sky-700">أ</span> التشفير
          <span class="text-sky-700 mr-3">ب</span> التوقيع الرقمي
          <span class="text-sky-700 mr-3">ج</span> الشهادة الرقمية
        </div>

        <div class="space-y-4">
          <div v-for="(n, i) in needs" :key="i" class="bg-white border border-slate-200 rounded-2xl p-4 flex flex-col md:flex-row md:items-center gap-3">
            <p class="flex-1 text-slate-800 font-medium leading-relaxed">
              <span class="font-bold text-sky-700 ml-2">{{ letters[i] }}</span>{{ n.text }}
            </p>
            <div class="flex gap-2 shrink-0">
              <button v-for="(o, j) in options" :key="o" @click="n.pick = j"
                      class="px-3 h-10 rounded-xl border-2 font-bold text-sm transition-colors"
                      :class="matchClass(n, j)">
                {{ o }}
              </button>
            </div>
          </div>
        </div>

        <div v-if="showPart2" class="mt-6 bg-white border border-emerald-200 rounded-2xl p-5 space-y-2 text-slate-800">
          <p v-for="(n, i) in needs" :key="i">
            <strong class="text-sky-700">{{ letters[i] }}:</strong> {{ n.summary }} هو <strong class="text-rose-600">{{ options[n.ans] }}</strong>.
          </p>
        </div>

        <button @click="showPart2 = !showPart2" class="mt-6 bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 px-8 rounded-xl transition-colors">
          {{ showPart2 ? 'إخفاء الحل' : 'إظهار الحل' }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'

const letters = ['أ', 'ب', 'ج', 'د']
const options = ['أ التشفير', 'ب التوقيع الرقمي', 'ج الشهادة الرقمية']

const statements = reactive([
  { text: 'يستخدم اتصال HTTPS كلًا من التشفير بالمفتاح العام والتشفير المتماثل.', ans: true, pick: null,
    why: 'يستخدم اتصال HTTPS آليات المفتاح العام للمصادقة والاتفاق الآمن على مفاتيح الجلسة، ثم التشفير المتماثل لحماية بيانات الجلسة.' },
  { text: 'يتبادل اتصال HTTPS جميع البيانات باستخدام التشفير بالمفتاح العام.', ans: false, pick: null,
    why: 'تبادل جميع البيانات باستخدام التشفير بالمفتاح العام سيكون بطيئًا، لذا يُستخدم التشفير المتماثل لتبادل البيانات.' },
  { text: 'المصادقة الثنائية (2FA) تستخدم عاملين مستقلين من فئتين مختلفتين لإثبات الهوية.', ans: true, pick: null,
    why: 'تعريف صحيح للمصادقة الثنائية باستخدام عاملين مختلفين.' },
  { text: 'من أمثلة المصادقة الثنائية (2FA)، تعيين كلمتي مرور.', ans: false, pick: null,
    why: 'حتى لو تم تعيين كلمتي مرور فإن كلتيهما من عامل "المعرفة"، وبالتالي لا يشكل ذلك مصادقة ثنائية باستخدام عاملين مختلفين (بل هو مصادقة متعددة الخطوات باستخدام نفس العامل).' },
])

const needs = reactive([
  { text: 'أريد منع قراءة محتوى الاتصال من قبل أطراف ثالثة.', ans: 0, pick: null, summary: 'منع قراءة محتوى الاتصال' },
  { text: 'أريد التحقق من أن رسالة موقّعة لم يتم تعديلها، وأنها صدرت عن الموقِّع المزعوم.', ans: 1, pick: null, summary: 'التحقق من سلامة رسالة موقّعة وهوية موقّعها' },
  { text: 'أريد التحقق من أن الطرف المقابل في الاتصال حقيقي.', ans: 2, pick: null, summary: 'التحقق من صحة الطرف المقابل في الاتصال' },
])

const showPart1 = ref(false)
const showPart2 = ref(false)

function buttonClass(q, opt) {
  if (showPart1.value && q.ans === opt) return 'bg-emerald-500 border-emerald-500 text-white'
  if (q.pick === opt) return showPart1.value ? 'bg-rose-500 border-rose-500 text-white' : 'bg-sky-100 border-sky-500 text-sky-900'
  return 'bg-white border-slate-200 text-slate-600 hover:border-slate-400'
}

function matchClass(n, j) {
  if (showPart2.value && n.ans === j) return 'bg-emerald-500 border-emerald-500 text-white'
  if (n.pick === j) return showPart2.value ? 'bg-rose-500 border-rose-500 text-white' : 'bg-sky-100 border-sky-500 text-sky-900'
  return 'bg-white border-slate-200 text-slate-600 hover:border-slate-400'
}
</script>
