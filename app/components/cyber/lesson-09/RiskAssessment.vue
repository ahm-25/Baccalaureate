<template>
  <section id="risk-assessment" class="py-16 bg-white">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-2xl md:text-3xl font-bold text-rose-800 mb-8">3. مفهوم تقييم المخاطر</h2>

      <div class="grid lg:grid-cols-3 gap-6 mb-10">
        <div class="lg:col-span-2 space-y-5 text-lg text-slate-700 leading-relaxed">
          <p>
            <span class="font-bold text-slate-400">(1)</span>
            <strong class="text-rose-600">الخطر</strong>: احتمال أن يقع حدث يسبب ضررًا، مع مراعاة احتمال وقوعه وحجم أثره.
          </p>
          <p><span class="font-bold text-slate-400">(2)</span> في هذا الدرس نستخدم طريقة مبسطة لتقدير درجة الخطر اعتمادًا على عاملين:</p>
          <div class="text-center">
            <span class="inline-block bg-rose-600 text-white font-black text-xl md:text-2xl px-6 py-3 rounded-2xl shadow">درجة الخطر = درجة التأثير × درجة الاحتمالية</span>
          </div>
          <div class="grid sm:grid-cols-2 gap-3">
            <div class="bg-rose-50 border border-rose-200 rounded-2xl p-4"><strong class="text-rose-700">① التأثير:</strong> حجم الضرر إذا وقع الحدث.</div>
            <div class="bg-amber-50 border border-amber-200 rounded-2xl p-4"><strong class="text-amber-700">② الاحتمالية:</strong> مدى احتمال وقوع الحدث.</div>
          </div>
        </div>
        <div class="bg-white border-2 border-slate-200 rounded-3xl p-6 space-y-4">
          <h3 class="font-bold text-rose-700">مصطلحات أساسية</h3>
          <p class="text-slate-700 leading-relaxed"><strong class="text-rose-600">التأثير</strong> – مقدار الضرر إذا وقعت المخاطرة.</p>
          <p class="text-slate-700 leading-relaxed"><strong class="text-rose-600">الاحتمالية</strong> – مدى احتمالية وقوع المخاطرة.</p>
        </div>
      </div>

      <!-- Interactive matrix (figure 2.3.2) -->
      <div class="bg-slate-50 rounded-3xl border border-slate-200 p-6 md:p-8 mb-10">
        <div class="text-center mb-6">
          <span class="inline-block text-xs font-bold text-rose-700 bg-rose-50 border border-rose-200 px-3 py-1 rounded-full mb-2">الشكل 2.3.2 – مصفوفة تقييم المخاطر</span>
          <h3 class="text-xl font-bold text-slate-900">🧪 اختر التأثير والاحتمالية، وشاهد درجة الخطر</h3>
        </div>

        <div class="grid lg:grid-cols-2 gap-8 items-center">
          <!-- Matrix: drawn left-to-right like the book figure (likelihood grows to the right) -->
          <div dir="ltr" class="flex gap-2">
            <div class="flex flex-col justify-around text-xs font-bold text-slate-500 w-14 text-right" dir="rtl">
              <span v-for="r in [2, 1, 0]" :key="r">{{ levels[r] }}</span>
            </div>
            <div class="flex-1">
              <div class="grid grid-cols-3 gap-1.5">
                <template v-for="r in [2, 1, 0]" :key="r">
                  <button v-for="c in [0, 1, 2]" :key="`${r}-${c}`" @click="impact = r; likelihood = c"
                          class="h-16 rounded-lg text-sm font-bold transition-all"
                          :class="[cellColor(r, c), impact === r && likelihood === c ? 'ring-4 ring-slate-900 scale-105 z-10' : 'hover:scale-[1.03]']">
                    {{ matrix[r][c] }}
                  </button>
                </template>
              </div>
              <div class="grid grid-cols-3 gap-1.5 mt-1 text-xs font-bold text-slate-500 text-center">
                <span v-for="c in [0, 1, 2]" :key="c">{{ levels[c] }}</span>
              </div>
              <p class="text-center text-xs font-bold text-slate-600 mt-1" dir="rtl">الاحتمالية ←</p>
            </div>
            <p class="text-xs font-bold text-slate-600 self-center [writing-mode:vertical-rl] rotate-180" dir="rtl">التأثير ←</p>
          </div>

          <!-- Controls + result -->
          <div class="space-y-5">
            <div>
              <p class="font-bold text-slate-700 mb-2">التأثير (حجم الضرر):</p>
              <div class="flex gap-2">
                <button v-for="(l, i) in levels" :key="l" @click="impact = i"
                        class="flex-1 py-2 rounded-xl border-2 font-bold transition-colors"
                        :class="impact === i ? 'bg-rose-600 border-rose-600 text-white' : 'bg-white border-slate-200 text-slate-600'">{{ l }}</button>
              </div>
            </div>
            <div>
              <p class="font-bold text-slate-700 mb-2">الاحتمالية (مدى احتمال الوقوع):</p>
              <div class="flex gap-2">
                <button v-for="(l, i) in levels" :key="l" @click="likelihood = i"
                        class="flex-1 py-2 rounded-xl border-2 font-bold transition-colors"
                        :class="likelihood === i ? 'bg-amber-500 border-amber-500 text-white' : 'bg-white border-slate-200 text-slate-600'">{{ l }}</button>
              </div>
            </div>
            <div class="rounded-2xl p-5 text-center border-2" :class="resultBox">
              <p class="text-sm font-bold opacity-80">التأثير ({{ impact + 1 }}) × الاحتمالية ({{ likelihood + 1 }}) = {{ (impact + 1) * (likelihood + 1) }}</p>
              <p class="text-3xl font-black mt-1">درجة الخطر: {{ matrix[impact][likelihood] }}</p>
              <p class="text-sm mt-2 font-medium">{{ advice }}</p>
            </div>
          </div>
        </div>
        <p class="text-center font-bold text-rose-700 mt-6">يجب معالجة المخاطر ذات التأثير المرتفع والاحتمالية المرتفعة أولًا.</p>
      </div>

      <p class="text-lg text-slate-700 leading-relaxed mb-10">
        <span class="font-bold text-slate-400">(3)</span>
        تُعد المخاطر ذات التأثير العالي والاحتمالية العالية من أعلى الأولويات في هذا النموذج المبسط. أما ترتيب الحالات الأخرى فيعتمد على درجات المصفوفة والسياق والضوابط المتاحة.
      </p>

      <!-- Prioritise school risks -->
      <div class="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 md:p-8 mb-10">
        <h3 class="text-xl font-bold text-slate-900 mb-2">🗂️ رتّب مخاطر المدرسة حسب الأولوية</h3>
        <p class="text-slate-600 mb-5">قدّر درجة كل خطر من المصفوفة، ثم اضغط «رتّب» لترى الترتيب.</p>
        <div class="space-y-3">
          <div v-for="r in displayedRisks" :key="r.text" class="flex flex-col md:flex-row md:items-center gap-3 p-4 rounded-2xl border border-slate-200 bg-slate-50 transition-all">
            <span class="text-2xl">{{ r.icon }}</span>
            <p class="flex-1 font-medium text-slate-800">{{ r.text }}</p>
            <span class="text-xs font-bold text-slate-500 shrink-0">التأثير: {{ levels[r.impact] }} • الاحتمالية: {{ levels[r.likelihood] }}</span>
            <span v-if="sorted" class="shrink-0 font-bold text-sm px-3 py-1 rounded-lg" :class="cellColor(r.impact, r.likelihood)">{{ matrix[r.impact][r.likelihood] }}</span>
          </div>
        </div>
        <button @click="sorted = !sorted" class="mt-5 px-6 py-3 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-xl transition-colors">
          {{ sorted ? 'إلغاء الترتيب' : 'رتّب حسب الأولوية' }}
        </button>
        <p v-if="sorted" class="mt-4 text-slate-700 leading-relaxed">
          ✓ هجوم الفدية أولًا (مرتفع جدًا). خطران حصلا على الدرجة نفسها (متوسط)، فيُحسم ترتيبهما بالسياق والضوابط المتاحة — وليس بالمصفوفة وحدها.
        </p>
      </div>

      <div class="bg-amber-50 border-2 border-amber-200 rounded-3xl p-6 md:p-8">
        <h3 class="font-bold text-amber-700 mb-2">⭐ الفكرة الرئيسة</h3>
        <p class="text-lg font-bold text-slate-800 leading-relaxed">
          تعامل مع الحوادث وفق التسلسل العام — احتوِ، ثم أزل السبب، ثم استعد، ثم استخلص الدروس المستفادة وحسّن الضوابط لتقليل احتمال التكرار —
          وحدد أولويات المخاطر بناءً على التأثير × الاحتمالية، بحيث يظل الضرر صغيرًا ولا تتكرر المشكلات.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const levels = ['منخفض', 'متوسط', 'مرتفع']
// matrix[impact][likelihood], as in figure 2.3.2
const matrix = [
  ['منخفض جدًا', 'منخفض', 'متوسط'],
  ['منخفض', 'متوسط', 'مرتفع'],
  ['متوسط', 'مرتفع', 'مرتفع جدًا'],
]
const colors = {
  'منخفض جدًا': 'bg-emerald-100 text-emerald-800',
  'منخفض': 'bg-emerald-200 text-emerald-900',
  'متوسط': 'bg-amber-200 text-amber-900',
  'مرتفع': 'bg-orange-400 text-white',
  'مرتفع جدًا': 'bg-rose-600 text-white',
}
const cellColor = (r, c) => colors[matrix[r][c]]

const impact = ref(2)
const likelihood = ref(2)

const resultBox = computed(() => {
  const l = matrix[impact.value][likelihood.value]
  if (l === 'مرتفع جدًا') return 'bg-rose-50 border-rose-400 text-rose-800'
  if (l === 'مرتفع') return 'bg-orange-50 border-orange-400 text-orange-800'
  if (l === 'متوسط') return 'bg-amber-50 border-amber-400 text-amber-800'
  return 'bg-emerald-50 border-emerald-400 text-emerald-800'
})
const advice = computed(() => {
  const l = matrix[impact.value][likelihood.value]
  if (l === 'مرتفع جدًا') return 'أعلى أولوية: عالجه أولًا.'
  if (l === 'مرتفع') return 'أولوية عالية بعد المخاطر المرتفعة جدًا.'
  if (l === 'متوسط') return 'يُرتَّب حسب السياق والضوابط المتاحة.'
  return 'أولوية منخفضة: راقبه وعالجه لاحقًا.'
})

const risks = [
  { icon: '🔌', text: 'انقطاع كهرباء قصير يوقف أجهزة المعمل دقائق', impact: 0, likelihood: 2 },
  { icon: '🦠', text: 'هجوم فدية يشفّر سجلات الطلاب', impact: 2, likelihood: 2 },
  { icon: '🌋', text: 'زلزال يدمّر غرفة الخوادم', impact: 2, likelihood: 0 },
  { icon: '🖨️', text: 'تعطل طابعة في مكتب الإدارة', impact: 0, likelihood: 0 },
]
const sorted = ref(false)
const score = (r) => (r.impact + 1) * (r.likelihood + 1)
const displayedRisks = computed(() => sorted.value ? [...risks].sort((a, b) => score(b) - score(a)) : risks)
</script>
