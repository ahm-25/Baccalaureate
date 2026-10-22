<template>
  <section id="solved-example" class="py-12 bg-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center gap-3 mb-8">
        <span class="text-3xl">✏️</span>
        <h2 class="text-2xl font-bold text-slate-900">مثال محلول</h2>
      </div>

      <!-- Part 1: true / false -->
      <div class="bg-rose-50/40 border border-rose-100 rounded-3xl p-6 md:p-8 mb-8">
        <h3 class="text-lg font-bold text-slate-800 mb-2">(1) ضع علامة ○ أو × أمام كل عبارة (أ – د) حسب صحتها.</h3>
        <p class="text-sm text-slate-500 mb-6">اختر إجابتك أولًا، ثم اعرض الحل.</p>

        <div class="space-y-4">
          <div v-for="(q, i) in statements" :key="i" class="bg-white border border-slate-200 rounded-2xl p-4">
            <div class="flex flex-col md:flex-row md:items-center gap-3">
              <p class="flex-1 text-slate-800 font-medium leading-relaxed">
                <span class="font-bold text-emerald-700 ml-2">{{ letters[i] }}</span>{{ q.text }}
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

        <button @click="showPart1 = !showPart1" class="mt-6 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-xl transition-colors">
          {{ showPart1 ? 'إخفاء الحل' : 'إظهار الحل' }}
        </button>
      </div>

      <!-- Part 2: description to metric -->
      <div class="bg-rose-50/40 border border-rose-100 rounded-3xl p-6 md:p-8">
        <h3 class="text-lg font-bold text-slate-800 mb-4">(2) طابق كل وصف (أ – ج) بالمؤشر الأنسب من الخيارات أدناه (أ – ج).</h3>
        <div class="bg-white border border-slate-200 rounded-xl p-3 mb-6 font-bold text-slate-700">
          [الخيارات] <span class="text-emerald-700">أ</span> PV (مشاهدات الصفحة)
          <span class="text-emerald-700 mr-3">ب</span> معدل الارتداد
          <span class="text-emerald-700 mr-3">ج</span> معدل التحويل
        </div>

        <div class="space-y-4">
          <div v-for="(n, i) in descriptions" :key="i" class="bg-white border border-slate-200 rounded-2xl p-4 flex flex-col md:flex-row md:items-center gap-3">
            <p class="flex-1 text-slate-800 font-medium leading-relaxed">
              <span class="font-bold text-emerald-700 ml-2">{{ letters[i] }}</span>{{ n.text }}
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
            <strong class="text-emerald-700">{{ letters[i] }}:</strong> {{ n.summary }} <strong class="text-rose-600">{{ options[n.ans] }}</strong>.
          </p>
        </div>

        <button @click="showPart2 = !showPart2" class="mt-6 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-xl transition-colors">
          {{ showPart2 ? 'إخفاء الحل' : 'إظهار الحل' }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'

const letters = ['أ', 'ب', 'ج', 'د']
const options = ['أ PV', 'ب معدل الارتداد', 'ج معدل التحويل']

const statements = reactive([
  { text: 'التقييم النوعي طريقة تستخدم بيانات عددية للتقييم كميًا.', ans: false, pick: null,
    why: 'التقييم النوعي يراقب آراء المستخدمين وسلوكهم للتقييم نوعيًا. استخدام البيانات العددية هو التقييم الكمي.' },
  { text: 'PV (مشاهدات الصفحة) مؤشر يوضح عدد مرات مشاهدة صفحة ما.', ans: true, pick: null,
    why: 'تعريف صحيح لـ PV.' },
  { text: 'معدل الارتداد مؤشر يوضح نسبة المستخدمين الذين حققوا إجراءً مستهدفًا.', ans: false, pick: null,
    why: 'يختلف تعريف معدل الارتداد وطريقة حسابه بحسب أداة التحليل (ومن أمثلته المبسطة نسبة الجلسات التي تنتهي بعد صفحة واحدة)، أما نسبة تحقيق الإجراء المستهدف فهي معدل التحويل.' },
  { text: 'التقييم الإرشادي طريقة يحدد فيها الخبراء مشكلات واجهة المستخدم استنادًا إلى قواعد عملية.', ans: true, pick: null,
    why: 'تعريف صحيح للتقييم الإرشادي.' },
])

const descriptions = reactive([
  { text: 'عدد مرات مشاهدة صفحة ما', ans: 0, pick: null, summary: 'عدد مشاهدات الصفحة هو' },
  { text: 'نسبة المستخدمين الذين غادروا الموقع بعد مشاهدة الصفحة الأولى فقط', ans: 1, pick: null, summary: 'هذا مثال مبسط على معدل الارتداد (الذي يختلف تعريفه بحسب الأداة):' },
  { text: 'نسبة المستخدمين الذين حققوا إجراءً مستهدفًا', ans: 2, pick: null, summary: 'نسبة من حققوا إجراءً مستهدفًا هي' },
])

const showPart1 = ref(false)
const showPart2 = ref(false)

function buttonClass(q, opt) {
  if (showPart1.value && q.ans === opt) return 'bg-emerald-500 border-emerald-500 text-white'
  if (q.pick === opt) return showPart1.value ? 'bg-rose-500 border-rose-500 text-white' : 'bg-emerald-100 border-emerald-500 text-emerald-900'
  return 'bg-white border-slate-200 text-slate-600 hover:border-slate-400'
}

function matchClass(n, j) {
  if (showPart2.value && n.ans === j) return 'bg-emerald-500 border-emerald-500 text-white'
  if (n.pick === j) return showPart2.value ? 'bg-rose-500 border-rose-500 text-white' : 'bg-emerald-100 border-emerald-500 text-emerald-900'
  return 'bg-white border-slate-200 text-slate-600 hover:border-slate-400'
}
</script>
