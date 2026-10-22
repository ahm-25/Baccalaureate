<template>
  <section id="defense-in-depth" class="py-16 bg-slate-900 text-white relative overflow-hidden">
    <div class="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-900 via-slate-900 to-slate-900"></div>

    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <h2 class="text-2xl md:text-3xl font-bold text-teal-300 mb-8">4. الدفاع في العمق <span class="text-lg text-slate-400" dir="ltr">(Defense in Depth)</span></h2>

      <div class="space-y-5 text-lg text-slate-300 leading-relaxed mb-10">
        <p>
          <span class="font-bold text-slate-500">(1)</span>
          <strong class="text-rose-300">(الدفاع في العمق)</strong>... استخدام طبقات متعددة من الضوابط الأمنية، بحيث تساعد طبقات أخرى على تقليل الخطر والحد من أثر الاختراق إذا فشلت إحدى الطبقات.
          <span class="block mt-2 text-teal-200 font-bold">إذا فشلت طبقة حماية، تبقى طبقات أخرى تقلل الخطر.</span>
        </p>
        <p><span class="font-bold text-slate-500">(2)</span> في أمان الشبكات، يتم الجمع بين عدة إجراءات على النحو التالي:</p>
      </div>

      <!-- Layers table -->
      <div class="overflow-x-auto rounded-2xl border border-slate-700 mb-12">
        <table class="w-full text-right min-w-[560px]">
          <thead class="bg-slate-800 text-slate-200">
            <tr>
              <th class="p-4 font-bold w-1/3">الطبقة</th>
              <th class="p-4 font-bold">أمثلة على الإجراءات</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(l, i) in layers" :key="l.name" class="border-t border-slate-700 bg-slate-900/60">
              <td class="p-4 font-bold" :class="l.text">{{ l.icon }} الطبقة {{ i + 1 }}: {{ l.name }}</td>
              <td class="p-4 text-slate-300">{{ l.action }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Lab -->
      <div class="bg-slate-800/80 border border-slate-700 rounded-3xl p-6 md:p-8 shadow-2xl">
        <h3 class="text-xl font-bold mb-2">🧪 مختبر الطبقات: هل يكفي جدار الحماية وحده؟</h3>
        <p class="text-slate-400 mb-6">فعّل الطبقات أو أوقفها، ثم أطلق أربع هجمات مختلفة على المؤسسة وشاهد أي طبقة توقف كل هجوم.</p>

        <div class="flex flex-wrap gap-2 mb-4">
          <button @click="preset('firewall')" class="px-4 py-2 rounded-xl text-sm font-bold bg-slate-700 hover:bg-slate-600">جدار الحماية وحده</button>
          <button @click="preset('all')" class="px-4 py-2 rounded-xl text-sm font-bold bg-teal-600 hover:bg-teal-500">كل الطبقات</button>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          <button v-for="(l, i) in layers" :key="l.name" @click="toggle(i)"
                  class="text-right p-4 rounded-2xl border-2 transition-all"
                  :class="enabled[i] ? l.on : 'bg-slate-900 border-slate-700 opacity-60'">
            <div class="flex items-center justify-between mb-2">
              <span class="text-2xl">{{ l.icon }}</span>
              <span class="text-xs font-bold px-2 py-0.5 rounded-full" :class="enabled[i] ? 'bg-white/20' : 'bg-slate-700 text-slate-400'">{{ enabled[i] ? 'مفعّلة' : 'متوقفة' }}</span>
            </div>
            <div class="font-bold">الطبقة {{ i + 1 }}: {{ l.name }}</div>
            <div class="text-xs mt-1 opacity-80">{{ l.short }}</div>
          </button>
        </div>

        <button @click="run" class="w-full md:w-auto px-8 py-3 bg-rose-600 hover:bg-rose-500 font-bold rounded-xl transition-colors mb-6">⚡ أطلق الهجمات</button>

        <div class="space-y-3">
          <div v-for="(a, i) in attacks" :key="a.text"
               class="flex flex-col md:flex-row md:items-center gap-3 p-4 rounded-2xl border transition-all duration-500"
               :class="resultClass(i)">
            <span class="text-2xl shrink-0">{{ a.icon }}</span>
            <p class="flex-1 font-medium">{{ a.text }}</p>
            <span v-if="results[i] !== null" class="font-bold text-sm shrink-0">
              {{ results[i] ? `🛡️ أوقفته الطبقة ${a.layer + 1} (${layers[a.layer].name})` : '☠️ نجح الهجوم' }}
            </span>
          </div>
        </div>

        <div v-if="done" class="mt-6 p-5 rounded-2xl font-bold leading-relaxed"
             :class="blockedCount === attacks.length ? 'bg-emerald-950 border border-emerald-600 text-emerald-200' : 'bg-amber-950 border border-amber-600 text-amber-200'">
          تم إيقاف {{ blockedCount }} من {{ attacks.length }} هجمات.
          <span v-if="blockedCount === attacks.length"> كل طبقة غطّت ثغرة لا تغطيها الطبقات الأخرى — هذا هو الدفاع في العمق.</span>
          <span v-else> الطبقات المتوقفة تركت ثغرات؛ لذلك لا يكفي الاعتماد على إجراء أمني واحد مثل جدار الحماية وحده.</span>
        </div>
      </div>

      <div class="mt-10 bg-teal-950/60 border border-teal-800 rounded-2xl p-5 text-teal-100 leading-relaxed">
        <strong class="text-teal-300">مصطلح أساسي:</strong> الدفاع في العمق – تكديس الإجراءات الأمنية في طبقات متعددة.
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onUnmounted } from 'vue'

const layers = [
  { icon: '🧱', name: 'مدخل الشبكة', short: 'جدار الحماية', action: 'منع الاتصال غير المصرح به باستخدام جدار الحماية', text: 'text-rose-300', on: 'bg-rose-600/30 border-rose-400' },
  { icon: '🔒', name: 'مسار الاتصال', short: 'الشبكة الافتراضية الخاصة', action: 'تشفير الاتصال باستخدام الشبكة الافتراضية الخاصة', text: 'text-indigo-300', on: 'bg-indigo-600/30 border-indigo-400' },
  { icon: '🏝️', name: 'وضع الخوادم', short: 'المنطقة المعزولة', action: 'فصل الخوادم المواجهة للجمهور عن الشبكة الداخلية باستخدام المنطقة المعزولة (DMZ)', text: 'text-amber-300', on: 'bg-amber-600/30 border-amber-400' },
  { icon: '💻', name: 'الأجهزة الطرفية', short: 'مكافحة الفيروسات والتحديث', action: 'تثبيت برنامج مكافحة الفيروسات والحفاظ على تحديث نظام التشغيل', text: 'text-emerald-300', on: 'bg-emerald-600/30 border-emerald-400' },
]

// Each attack exploits the gap that one specific layer is meant to close
const attacks = [
  { icon: '🚪', text: 'محاولة اتصال غير مصرح به من الإنترنت بجهاز داخلي', layer: 0 },
  { icon: '📡', text: 'تنصّت على اتصال موظف يعمل من مقهى عبر Wi-Fi عامة', layer: 1 },
  { icon: '🌐', text: 'اختراق خادم الويب العام ثم محاولة الانتقال منه إلى الشبكة الداخلية', layer: 2 },
  { icon: '📎', text: 'ملف مصاب يصل إلى جهاز موظف داخل مرفق بريد إلكتروني', layer: 3 },
]

const enabled = ref([true, false, false, false])
const results = ref(attacks.map(() => null))
const done = ref(false)
let timers = []

const blockedCount = computed(() => results.value.filter(r => r === true).length)

function clearTimers() {
  timers.forEach(clearTimeout)
  timers = []
}
function resetResults() {
  clearTimers()
  results.value = attacks.map(() => null)
  done.value = false
}
function toggle(i) {
  enabled.value[i] = !enabled.value[i]
  resetResults()
}
function preset(kind) {
  enabled.value = kind === 'all' ? [true, true, true, true] : [true, false, false, false]
  resetResults()
}
function run() {
  resetResults()
  attacks.forEach((a, i) => {
    timers.push(setTimeout(() => {
      results.value[i] = enabled.value[a.layer]
      if (i === attacks.length - 1) done.value = true
    }, 500 + i * 600))
  })
}
function resultClass(i) {
  if (results.value[i] === null) return 'bg-slate-900/60 border-slate-700 text-slate-300'
  return results.value[i] ? 'bg-emerald-950/70 border-emerald-600 text-emerald-100' : 'bg-rose-950/70 border-rose-600 text-rose-100'
}

onUnmounted(clearTimers)
</script>
