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

      <!-- Part 2: match description to term -->
      <div class="bg-rose-50/40 border border-rose-100 rounded-3xl p-6 md:p-8">
        <h3 class="text-lg font-bold text-slate-800 mb-4">(2) طابق كل وصف (1 – 3) مع المصطلح الأنسب من الخيارات أدناه (أ – ج).</h3>
        <div class="bg-white border border-slate-200 rounded-xl p-3 mb-6 font-bold text-slate-700">
          [الخيارات] <span class="text-sky-700">أ</span> HTTP
          <span class="text-sky-700 mr-3">ب</span> API
          <span class="text-sky-700 mr-3">ج</span> HTTPS
        </div>

        <div class="space-y-4">
          <div v-for="(n, i) in descriptions" :key="i" class="bg-white border border-slate-200 rounded-2xl p-4 flex flex-col md:flex-row md:items-center gap-3">
            <p class="flex-1 text-slate-800 font-medium leading-relaxed">
              <span class="font-bold text-sky-700 ml-2">{{ i + 1 }}</span>{{ n.text }}
            </p>
            <div class="flex flex-wrap gap-2 shrink-0">
              <button v-for="(o, j) in options" :key="o" @click="n.pick = j"
                      class="px-3 h-10 rounded-xl border-2 font-bold text-sm transition-colors"
                      :class="matchClass(n, j)">
                {{ o }}
              </button>
            </div>
          </div>
        </div>

        <div v-if="showPart2" class="mt-6 bg-white border border-emerald-200 rounded-2xl p-5 space-y-2 text-slate-800">
          <p v-for="(n, i) in descriptions" :key="i">
            <strong class="text-sky-700">{{ i + 1 }}:</strong> {{ n.summary }} <strong class="text-rose-600">{{ options[n.ans] }}</strong>.
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
const options = ['أ HTTP', 'ب API', 'ج HTTPS']

const statements = reactive([
  { text: 'العميل هو الجانب الذي يطلب البيانات أو المعالجة من الخادم، والخادم هو الجانب الذي يعيد الاستجابة.', ans: true, pick: null,
    why: 'وصف صحيح لأدوار العميل والخادم.' },
  { text: 'HTTPS هو استخدام HTTP عبر اتصال محمي بـ TLS.', ans: true, pick: null,
    why: 'يستخدم HTTPS بروتوكول HTTP عبر اتصال محمي بـ TLS.' },
  { text: 'أسلوب GET مخصص لإرسال البيانات إلى الخادم.', ans: false, pick: null,
    why: 'يُستخدم GET عادةً لطلب مورد أو بيانات، ويُستخدم POST عادةً لإرسال بيانات إلى الخادم لمعالجتها؛ فالعبارة تعكس الاستخدام المعتاد.' },
  { text: 'رمز حالة HTTP 404 يشير إلى أن المورد المطلوب غير موجود.', ans: true, pick: null,
    why: '404 رمز حالة يشير إلى أن المورد المطلوب غير موجود (وقد تكون صفحة مفقودة مثالًا على ذلك).' },
])

const descriptions = reactive([
  { text: 'بروتوكول اتصال لتبادل البيانات بين متصفحات الويب والخوادم', ans: 0, pick: null, summary: 'بروتوكول اتصال الويب هو' },
  { text: 'واجهة أو مجموعة قواعد محددة تتيح لبرنامج طلب بيانات أو وظائف من برنامج أو خدمة أخرى', ans: 1, pick: null, summary: 'الواجهة أو القواعد المحددة التي تتيح لبرنامج طلب بيانات أو وظائف من آخر هي' },
  { text: 'بروتوكول اتصال يضيف تشفيرًا إلى HTTP', ans: 2, pick: null, summary: 'HTTP مع إضافة التشفير هو' },
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
