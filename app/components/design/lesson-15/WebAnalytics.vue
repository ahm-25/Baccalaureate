<template>
  <section id="web-analytics" class="py-16 bg-slate-50">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-2xl md:text-3xl font-bold text-emerald-800 mb-8">2. المؤشرات الرئيسية في تحليلات الويب</h2>

      <div class="grid lg:grid-cols-3 gap-6 mb-10">
        <div class="lg:col-span-2 space-y-5 text-lg text-slate-700 leading-relaxed">
          <p>
            <span class="font-bold text-slate-400">(1)</span>
            <strong class="text-rose-600">تحليلات الويب</strong>: جمع وقياس وتحليل بيانات استخدام الموقع لفهم الوصول والتفاعل والنتائج.
            وهي إحدى أدوات التقييم الكمي، وتختلف أسماء المقاييس وطرق حسابها باختلاف الأداة وإعداداتها.
          </p>
        </div>
        <div class="bg-white border-2 border-slate-200 rounded-3xl p-6 space-y-3">
          <h3 class="font-bold text-emerald-700">مصطلحات أساسية</h3>
          <p class="text-slate-700 text-sm leading-relaxed"><strong class="text-rose-600">PV</strong> – إجمالي مشاهدات الصفحة.</p>
          <p class="text-slate-700 text-sm leading-relaxed"><strong class="text-rose-600">معدل الارتداد (Bounce Rate)</strong> – مؤشر للتفاعل يختلف تعريفه وطريقة حسابه بحسب أداة التحليل وإعداداتها؛ لذلك يجب تفسيره وفق تعريف الأداة المستخدمة.</p>
          <p class="text-slate-700 text-sm leading-relaxed"><strong class="text-rose-600">CVR</strong> – نسبة المستخدمين أو الجلسات التي حققت إجراءً مستهدفًا، مع تحديد المقام وطريقة الحساب.</p>
        </div>
      </div>

      <!-- Metrics table -->
      <div class="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm mb-12">
        <table class="w-full text-right min-w-[640px]">
          <thead class="bg-slate-100 text-slate-800">
            <tr>
              <th class="p-4 font-bold w-[20%]">المؤشر</th>
              <th class="p-4 font-bold w-[38%]">المعنى</th>
              <th class="p-4 font-bold">الوصف</th>
            </tr>
          </thead>
          <tbody class="bg-white">
            <tr v-for="m in metrics" :key="m.name" class="border-t border-slate-200 align-top">
              <td class="p-4 font-bold text-emerald-800">{{ m.name }}</td>
              <td class="p-4 text-slate-700">{{ m.meaning }}</td>
              <td class="p-4 text-slate-700">{{ m.desc }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Mini analytics dashboard -->
      <div class="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 md:p-8">
        <h3 class="text-xl font-bold text-slate-900 mb-2">🧪 لوحة تحليلات مصغّرة: متجر «كتابي» الإلكتروني</h3>
        <p class="text-slate-600 mb-6">
          هذا سجل زيارات تجريبي ليوم واحد. غيّر عدد الصفحات التي شاهدها كل زائر، أو اجعله يشتري، أو أضف زيارة جديدة — وشاهد كيف تتغير المؤشرات.
        </p>

        <div class="grid lg:grid-cols-5 gap-6">
          <!-- Visit log -->
          <div class="lg:col-span-3">
            <div class="rounded-2xl border border-slate-200 overflow-hidden">
              <div class="grid grid-cols-12 gap-2 bg-slate-100 px-3 py-2 text-xs font-bold text-slate-600">
                <span class="col-span-1">#</span>
                <span class="col-span-4">الزائر</span>
                <span class="col-span-4 text-center">الصفحات المشاهدة</span>
                <span class="col-span-3 text-center">اشترى؟</span>
              </div>
              <div v-for="(v, i) in visits" :key="v.id" class="grid grid-cols-12 gap-2 items-center px-3 py-2 border-t border-slate-100 text-sm">
                <span class="col-span-1 text-slate-400 font-bold">{{ i + 1 }}</span>
                <span class="col-span-4 font-bold text-slate-800">{{ v.who }}</span>
                <div class="col-span-4 flex items-center justify-center gap-2">
                  <button @click="v.pages > 1 && v.pages--" class="w-7 h-7 rounded-lg bg-white border border-slate-300 font-bold text-slate-600">−</button>
                  <span class="w-6 text-center font-extrabold text-slate-900">{{ v.pages }}</span>
                  <button @click="v.pages < 9 && v.pages++" class="w-7 h-7 rounded-lg bg-emerald-600 text-white font-bold">+</button>
                </div>
                <div class="col-span-3 flex justify-center">
                  <button @click="v.bought = !v.bought" class="px-3 py-1 rounded-lg text-xs font-bold border-2 transition-colors"
                          :class="v.bought ? 'bg-emerald-500 border-emerald-500 text-white' : 'bg-white border-slate-200 text-slate-500'">
                    {{ v.bought ? '🛒 نعم' : 'لا' }}
                  </button>
                </div>
              </div>
            </div>
            <div class="flex flex-wrap gap-2 mt-3">
              <button v-for="n in names" :key="n" @click="addVisit(n)" class="px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700">
                + زيارة من {{ n }}
              </button>
              <button @click="removeVisit" :disabled="visits.length <= 1" class="px-3 py-1.5 rounded-lg text-xs font-bold bg-rose-50 hover:bg-rose-100 text-rose-700 disabled:opacity-40">− حذف آخر زيارة</button>
            </div>
          </div>

          <!-- Results -->
          <div class="lg:col-span-2 space-y-3">
            <div class="rounded-2xl bg-emerald-50 border border-emerald-200 p-4">
              <div class="text-xs font-bold text-emerald-700">PV (مشاهدات الصفحة)</div>
              <div class="text-3xl font-black text-emerald-800">{{ pv }}</div>
              <div class="text-xs text-slate-600 mt-1">مجموع كل الصفحات المشاهدة. عدد الزوار الفريدين: <strong>{{ unique }}</strong> — لاحظ أن PV لا يساوي عدد الأشخاص.</div>
            </div>
            <div class="rounded-2xl bg-teal-50 border border-teal-200 p-4">
              <div class="text-xs font-bold text-teal-700">معدل التحويل (CVR)</div>
              <div class="text-3xl font-black text-teal-800">{{ cvr }}%</div>
              <div class="text-xs text-slate-600 mt-1">
                المقام هنا: <strong>الجلسات</strong> (الزيارات). الحساب: الجلسات التي تم فيها شراء ({{ bought }}) ÷ إجمالي الجلسات ({{ visits.length }}) × 100.
              </div>
            </div>
            <div class="rounded-2xl bg-amber-50 border border-amber-200 p-4">
              <div class="text-xs font-bold text-amber-700">معدل الارتداد — <span class="underline">مثال على تعريف واحد فقط</span></div>
              <div class="text-3xl font-black text-amber-800">{{ bounce }}%</div>
              <div class="text-xs text-slate-600 mt-1">
                في هذا المثال المبسط فقط: الجلسات التي انتهت بعد صفحة واحدة ({{ single }}) ÷ إجمالي الجلسات. تختلف طريقة حسابه بحسب أداة التحليلات، ولا يفسر السبب وحده.
              </div>
            </div>
          </div>
        </div>

        <div class="mt-6 p-4 rounded-2xl bg-slate-900 text-slate-100 leading-relaxed">
          💡 الأرقام تخبرك <strong class="text-emerald-300">ماذا يحدث</strong> (مثلًا: كثير من المشاهدات وقليل من الشراء)، لكنها لا تخبرك <strong class="text-amber-300">لماذا</strong>؛
          لمعرفة السبب نحتاج طريقة نوعية مثل اختبار قابلية الاستخدام أو المقابلات.
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const metrics = [
  { name: 'PV (مشاهدات الصفحة)', meaning: 'العدد الإجمالي لمرات مشاهدة الصفحة.', desc: 'يقيس إجمالي مرات المشاهدة، وقد يشمل مشاهدات متكررة؛ ولا يساوي عدد الأشخاص الفريدين.' },
  { name: 'معدل الارتداد', meaning: 'مؤشر تختلف طريقة حسابه بين أدوات التحليلات؛ لذلك يجب الرجوع إلى تعريف الأداة المستخدمة.', desc: 'قد يساعد مع مؤشرات أخرى على ملاحظة ضعف التفاعل، لكنه لا يفسر السبب وحده.' },
  { name: 'معدل التحويل (CVR)', meaning: 'نسبة المستخدمين أو الجلسات التي حققت إجراءً مستهدفًا، مع تحديد المقام وطريقة الحساب.', desc: 'مؤشر يساعد على قياس تحقيق هدف محدد، مثل التسجيل أو الشراء، بحسب هدف الموقع.' },
]

const names = ['سارة', 'عمر', 'ليلى']
let nextId = 7
const visits = ref([
  { id: 1, who: 'سارة', pages: 5, bought: true },
  { id: 2, who: 'عمر', pages: 1, bought: false },
  { id: 3, who: 'سارة', pages: 2, bought: false },
  { id: 4, who: 'ليلى', pages: 4, bought: false },
  { id: 5, who: 'يوسف', pages: 1, bought: false },
  { id: 6, who: 'منى', pages: 3, bought: true },
])

function addVisit(who) {
  if (visits.value.length < 12) visits.value.push({ id: nextId++, who, pages: 1, bought: false })
}
function removeVisit() {
  if (visits.value.length > 1) visits.value.pop()
}

const pv = computed(() => visits.value.reduce((s, v) => s + v.pages, 0))
const unique = computed(() => new Set(visits.value.map(v => v.who)).size)
const bought = computed(() => visits.value.filter(v => v.bought).length)
const single = computed(() => visits.value.filter(v => v.pages === 1).length)
const pct = (n) => Math.round((n / visits.value.length) * 1000) / 10
const cvr = computed(() => pct(bought.value))
const bounce = computed(() => pct(single.value))
</script>
