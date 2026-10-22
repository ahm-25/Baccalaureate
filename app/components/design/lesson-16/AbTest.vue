<template>
  <section id="ab-test" class="py-16 bg-white">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-2xl md:text-3xl font-bold text-indigo-800 mb-8">3. اختبار <span dir="ltr">A/B</span></h2>

      <div class="grid lg:grid-cols-3 gap-6 mb-10">
        <div class="lg:col-span-2 space-y-5 text-lg text-slate-700 leading-relaxed">
          <p>
            <span class="font-bold text-slate-400">(1)</span>
            <strong class="text-rose-600">اختبار A/B</strong>: تجربة تقارن نسختين A وB وفق مقياس محدد مسبقًا، ويُوزَّع المستخدمون أو الزيارات بينهما بطريقة عشوائية قدر الإمكان أو وفق تصميم تجربة مناسب.
          </p>
          <p class="bg-slate-50 border-r-4 border-indigo-400 rounded-xl p-4 text-base italic">
            مثال: قارن الخيار A بزر شراء أحمر والخيار B بزر شراء أزرق لمعرفة أيهما يحصل على نقرات أكثر.
          </p>
          <p><span class="font-bold text-slate-400">(2)</span> النقاط الأساسية لاختبار A/B:</p>
          <p class="pr-4">① إذا كان هدف التجربة معرفة أثر فرق واحد بعينه، اجعل الفرق بين النسختين واضحًا ومحددًا. أما اختبار حزمة تغييرات فيقيس أثر الحزمة ولا يكشف أثر كل عنصر منفردًا.</p>
          <p class="pr-4">② حدّد المقياس وخطة التحليل قبل الاختبار، ثم اجمع عينة كافية قبل الحكم.</p>
        </div>
        <div class="bg-white border-2 border-slate-200 rounded-3xl p-6">
          <h3 class="font-bold text-indigo-700 mb-3">مصطلح أساسي</h3>
          <p class="text-slate-700 leading-relaxed"><strong class="text-rose-600">اختبار A/B</strong> – مقارنة خيارين ببيانات حقيقية.</p>
        </div>
      </div>

      <!-- Simulator -->
      <div class="bg-slate-50 rounded-3xl border border-slate-200 p-6 md:p-8">
        <h3 class="text-xl font-bold text-slate-900 mb-2">🧪 مختبر اختبار A/B: زر الشراء الأحمر أم الأزرق؟</h3>
        <p class="text-slate-600 mb-6">اتبع خطوات التجربة بالترتيب كما يحددها الكتاب، ثم شغّل الاختبار. يمكنك إعادة تشغيله عدة مرات لترى كيف تتغير النتائج.</p>

        <div class="grid lg:grid-cols-2 gap-6">
          <!-- Setup -->
          <div class="space-y-5">
            <!-- Versions -->
            <div class="grid grid-cols-2 gap-3">
              <div class="bg-white rounded-2xl border-2 border-rose-200 p-4 text-center">
                <span class="text-xs font-bold text-slate-500">الخيار A</span>
                <div class="mt-2 mx-auto w-28 py-2 rounded-xl bg-rose-600 text-white font-bold">اشترِ الآن</div>
              </div>
              <div class="bg-white rounded-2xl border-2 border-blue-200 p-4 text-center">
                <span class="text-xs font-bold text-slate-500">الخيار B</span>
                <div class="mt-2 mx-auto py-2 rounded-xl bg-blue-600 text-white font-bold" :class="bundle ? 'w-36 text-lg' : 'w-28'">{{ bundle ? 'أضف إلى السلة 🛒' : 'اشترِ الآن' }}</div>
              </div>
            </div>
            <label class="flex items-start gap-3 bg-white border border-slate-200 rounded-xl p-3 cursor-pointer">
              <input type="checkbox" v-model="bundle" class="mt-1 w-4 h-4 accent-amber-500" @change="clearRuns" />
              <span class="text-sm text-slate-700">غيّر في B أيضًا <strong>نص الزر وحجمه</strong> (حزمة تغييرات بدل تغيير واحد)</span>
            </label>

            <!-- 1. metric -->
            <div>
              <p class="font-bold text-slate-800 mb-2">① حدّد المقياس قبل الاختبار:</p>
              <div class="space-y-2">
                <button v-for="(m, i) in metrics" :key="m.text" @click="pickMetric(i)" :disabled="metric !== null"
                        class="w-full text-right p-3 rounded-xl border-2 text-sm font-bold transition-colors"
                        :class="metricClass(i)">
                  {{ m.text }}
                </button>
              </div>
              <p v-if="metric !== null" class="mt-2 text-sm leading-relaxed" :class="metrics[metric].ok ? 'text-emerald-700' : 'text-rose-700'">{{ metrics[metric].why }}</p>
            </div>

            <!-- 2. sample size -->
            <div>
              <p class="font-bold text-slate-800 mb-2">② عدد الزوار في التجربة:</p>
              <div class="grid grid-cols-4 gap-2">
                <button v-for="n in sizes" :key="n" @click="size = n; clearRuns()"
                        class="py-2 rounded-xl border-2 font-bold text-sm transition-colors"
                        :class="size === n ? 'bg-indigo-600 border-indigo-600 text-white' : 'bg-white border-slate-200 text-slate-600'">{{ n.toLocaleString('ar-EG') }}</button>
              </div>
            </div>

            <button @click="run" :disabled="!metricOk"
                    class="w-full py-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-colors">
              ③ وزّع الزوار عشوائيًا وشغّل الاختبار
            </button>
            <p v-if="!metricOk" class="text-xs text-slate-500 text-center">اختر مقياسًا مناسبًا أولًا — لا تبدأ التجربة قبل تحديد ما ستقيسه.</p>
          </div>

          <!-- Results -->
          <div class="bg-white rounded-2xl border border-slate-200 p-5">
            <p class="font-bold text-slate-800 mb-4">النتائج</p>
            <div v-if="last" class="space-y-4">
              <div v-for="v in ['A', 'B']" :key="v">
                <div class="flex justify-between text-sm font-bold mb-1">
                  <span :class="v === 'A' ? 'text-rose-700' : 'text-blue-700'">الخيار {{ v }}: {{ last[v].clicks.toLocaleString('ar-EG') }} نقرة من {{ last[v].visitors.toLocaleString('ar-EG') }} زائر</span>
                  <span>{{ pct(last[v]) }}%</span>
                </div>
                <div class="h-4 bg-slate-100 rounded-full overflow-hidden">
                  <div class="h-full rounded-full transition-all duration-700" :class="v === 'A' ? 'bg-rose-500' : 'bg-blue-500'" :style="{ width: Math.min(100, pct(last[v]) * 8) + '%' }"></div>
                </div>
              </div>
              <div class="rounded-xl p-4 text-sm leading-relaxed border" :class="verdict.cls">
                <strong>{{ verdict.title }}</strong> {{ verdict.text }}
              </div>
              <div v-if="bundle" class="rounded-xl p-3 text-sm bg-amber-50 border border-amber-300 text-amber-900">
                ⚠️ غيّرت في B اللون والنص والحجم معًا؛ لذلك يقيس الاختبار أثر <strong>الحزمة كلها</strong>، ولا يكشف أي عنصر منها سبّب الفرق.
              </div>
            </div>
            <p v-else class="text-slate-500 text-sm">شغّل الاختبار لترى النتائج هنا.</p>

            <div v-if="runs.length > 1" class="mt-5">
              <p class="text-sm font-bold text-slate-600 mb-2">نتائج المرات السابقة بنفس عدد الزوار (الفائز الظاهري):</p>
              <div class="flex flex-wrap gap-1.5">
                <span v-for="(r, i) in runs" :key="i" class="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-black text-white"
                      :class="leader(r) === 'A' ? 'bg-rose-500' : leader(r) === 'B' ? 'bg-blue-500' : 'bg-slate-400'">{{ leader(r) }}</span>
              </div>
              <p v-if="size < minSample && new Set(runs.map(leader)).size > 1" class="mt-2 text-sm text-rose-700 font-medium">
                لاحظ: مع عينة صغيرة يتغير «الفائز» من تشغيل لآخر بالصدفة؛ لذلك لا نحكم قبل جمع عينة كافية.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-10 bg-amber-50 border-2 border-amber-200 rounded-3xl p-6 md:p-8">
        <h3 class="font-bold text-amber-700 mb-2">⭐ الفكرة الرئيسة</h3>
        <p class="text-lg font-bold text-slate-800 leading-relaxed">
          لا تُبنى المواقع الإلكترونية الجيدة مثالية من أول مرة؛ بل تُحسَّن عبر حلقات متكررة. تكرر دورة PDCA خطّط ← نفّذ ← تحقّق ← تصرّف،
          ويعمل التفكير التصميمي من جانب المستخدم عبر خمس خطوات، ويحسم اختبار A/B الخيارات ببيانات حقيقية – كل تغيير صغير، مقاس، ومتكرر.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const metrics = [
  { text: 'نسبة الزوار الذين ينقرون على زر الشراء', ok: true, why: '✓ مقياس محدد مسبقًا ومرتبط مباشرة بالهدف (النقر على زر الشراء).' },
  { text: 'نختار المقياس بعد أن نرى أي النسختين تبدو أفضل', ok: false, why: '✗ يجب تحديد المقياس وخطة التحليل قبل الاختبار، وإلا قد نختار ما يناسب النتيجة. أعد الاختيار.' },
  { text: 'رأي مصمم الموقع في أي لون أجمل', ok: false, why: '✗ هذا رأي شخصي لا يقيس سلوك المستخدمين الفعليين. أعد الاختيار.' },
]
const metric = ref(null)
const metricOk = computed(() => metric.value !== null && metrics[metric.value].ok)
function pickMetric(i) {
  metric.value = i
  // A wrong choice is explained, then unlocked again so the student can pick the right one
  if (!metrics[i].ok) setTimeout(() => { if (metric.value === i) metric.value = null }, 2500)
}
function metricClass(i) {
  if (metric.value === i) return metrics[i].ok ? 'bg-emerald-50 border-emerald-500 text-emerald-900' : 'bg-rose-50 border-rose-400 text-rose-900'
  return 'bg-white border-slate-200 text-slate-700 hover:border-slate-400'
}

const sizes = [20, 200, 2000, 20000]
const minSample = 2000
const size = ref(200)
const bundle = ref(false)

// Hidden "true" click rates: B is genuinely a bit better
const trueRate = { A: 0.05, B: 0.065 }
const runs = ref([])
const last = computed(() => runs.value[runs.value.length - 1] || null)

function run() {
  const r = { A: { visitors: 0, clicks: 0 }, B: { visitors: 0, clicks: 0 } }
  for (let i = 0; i < size.value; i++) {
    const v = Math.random() < 0.5 ? 'A' : 'B' // random assignment of each visitor
    r[v].visitors++
    if (Math.random() < trueRate[v]) r[v].clicks++
  }
  runs.value.push(r)
}
function clearRuns() { runs.value = [] }

const pct = (x) => x.visitors ? Math.round((x.clicks / x.visitors) * 1000) / 10 : 0
function leader(r) {
  const a = pct(r.A), b = pct(r.B)
  return a === b ? '=' : a > b ? 'A' : 'B'
}

// Two-proportion z-test: only call a winner when the sample is large enough and the gap is clear
const verdict = computed(() => {
  const r = last.value
  if (!r) return {}
  if (size.value < minSample) {
    return { cls: 'bg-rose-50 border-rose-300 text-rose-900', title: '✗ العينة صغيرة جدًا للحكم.', text: `مع ${size.value.toLocaleString('ar-EG')} زائر فقط قد يكون الفرق بين النسختين مجرد صدفة. اجمع عينة كافية قبل اتخاذ القرار.` }
  }
  const pA = r.A.clicks / r.A.visitors, pB = r.B.clicks / r.B.visitors
  const p = (r.A.clicks + r.B.clicks) / (r.A.visitors + r.B.visitors)
  const se = Math.sqrt(p * (1 - p) * (1 / r.A.visitors + 1 / r.B.visitors))
  const z = se ? (pB - pA) / se : 0
  if (Math.abs(z) < 1.96) {
    return { cls: 'bg-amber-50 border-amber-300 text-amber-900', title: 'لا يوجد فرق واضح بعد.', text: 'الفرق بين النسبتين صغير مقارنة بحجم العينة؛ لا نعلن فائزًا. يمكن جمع بيانات أكثر.' }
  }
  const win = z > 0 ? 'B' : 'A'
  return { cls: 'bg-emerald-50 border-emerald-300 text-emerald-900', title: `✓ الخيار ${win} أفضل وفق المقياس المحدد.`, text: `العينة كافية والفرق واضح، فيمكن اعتماد الخيار ${win} — وهذه نتيجة خطوة «تحقّق» في دورة PDCA، ثم «تصرّف» باعتماده وتحديد التحسين التالي.` }
})
</script>
