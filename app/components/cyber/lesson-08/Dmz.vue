<template>
  <section id="dmz" class="py-16 bg-white">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-2xl md:text-3xl font-bold text-teal-800 mb-8" dir="rtl">3. المنطقة المعزولة <span dir="ltr">(DMZ – Demilitarized Zone)</span></h2>

      <div class="grid lg:grid-cols-3 gap-6 mb-10">
        <div class="lg:col-span-2 space-y-5 text-lg text-slate-700 leading-relaxed">
          <p>
            <span class="font-bold text-slate-400">(1)</span>
            <strong class="text-rose-600">(DMZ)</strong>... منطقة تُوضع فيها الخوادم المعرَّضة للشبكة الخارجية (خوادم الويب، خوادم البريد، إلخ) بشكل منفصل عن الشبكة الداخلية.
          </p>
          <p>
            <span class="font-bold text-slate-400">(2)</span>
            يساعد فصل الخوادم العامة في منطقة معزولة على تقليل احتمال وصول الهجوم منها إلى الشبكة الداخلية إذا تعرض أحدها للاختراق.
          </p>
        </div>
        <div class="bg-white border-2 border-slate-200 rounded-3xl p-6">
          <h3 class="font-bold text-teal-700 mb-3">مصطلحات أساسية</h3>
          <p class="text-slate-700 leading-relaxed">
            <strong class="text-rose-600">المنطقة المعزولة (DMZ)</strong> – منطقة للخوادم المواجهة للجمهور، منفصلة عن الشبكة الداخلية.
          </p>
        </div>
      </div>

      <!-- Figure 2.2.1 as an attack simulation -->
      <div class="bg-slate-50 rounded-3xl border border-slate-200 p-5 md:p-8">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <span class="inline-block text-xs font-bold text-teal-700 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full mb-2">الشكل 2.2.1 – تكوين شبكة المنطقة المعزولة</span>
            <h3 class="text-xl font-bold text-slate-900">🧪 هاجم خادم الويب… وشاهد إلى أين يصل الضرر</h3>
          </div>
          <div class="flex bg-white border border-slate-200 rounded-2xl p-1 shrink-0">
            <button v-for="m in modes" :key="m.key" @click="setMode(m.key)"
                    class="px-4 py-2 rounded-xl font-bold text-sm transition-colors"
                    :class="mode === m.key ? 'bg-teal-600 text-white' : 'text-slate-600 hover:bg-slate-100'">
              {{ m.label }}
            </button>
          </div>
        </div>

        <div class="flex flex-col md:flex-row items-stretch gap-3">
          <!-- Internal network (right in RTL, as in the book figure) -->
          <div class="flex-1 rounded-2xl border-2 p-4 transition-colors"
               :class="internalHit ? 'border-rose-400 bg-rose-50' : 'border-teal-300 bg-white'">
            <h4 class="font-bold text-center" :class="internalHit ? 'text-rose-700' : 'text-teal-800'">الشبكة الداخلية <span class="text-xs font-normal">(المنظمة)</span></h4>
            <div class="grid grid-cols-2 gap-2 mt-3">
              <div v-for="d in internalDevices" :key="d.name" class="rounded-xl border p-2 text-center text-xs font-bold transition-colors"
                   :class="internalHit ? 'border-rose-300 bg-rose-100 text-rose-800' : 'border-slate-200 bg-slate-50 text-slate-700'">
                <div class="text-xl">{{ internalHit ? '☠️' : d.icon }}</div>{{ d.name }}
              </div>
              <div v-if="mode === 'flat'" class="rounded-xl border p-2 text-center text-xs font-bold transition-colors col-span-2"
                   :class="webHit ? 'border-rose-300 bg-rose-100 text-rose-800' : 'border-amber-300 bg-amber-50 text-amber-800'">
                <div class="text-xl">{{ webHit ? '☠️' : '🌐' }}</div>خادم الويب (داخل الشبكة!)
              </div>
            </div>
            <div class="mt-3 rounded-xl border p-2 text-center text-sm font-bold"
                 :class="internalHit ? 'border-rose-400 bg-rose-200 text-rose-900' : 'border-teal-200 bg-teal-50 text-teal-800'">
              {{ internalHit ? '🔓 البيانات السرية مكشوفة' : '🔒 بيانات سرية' }}
            </div>
          </div>

          <!-- Firewall between DMZ and internal -->
          <div v-if="mode === 'dmz'" class="md:w-8 h-8 md:h-auto rounded-lg bg-slate-800 text-white text-[10px] font-bold flex items-center justify-center md:[writing-mode:vertical-rl] relative">
            جدار الحماية
            <span v-if="blocked" class="absolute -top-3 md:top-1/2 md:-translate-y-1/2 bg-emerald-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-base shadow">🛡️</span>
          </div>

          <!-- DMZ -->
          <div v-if="mode === 'dmz'" class="flex-1 rounded-2xl border-2 border-dashed p-4 transition-colors"
               :class="webHit ? 'border-rose-400 bg-rose-50' : 'border-amber-400 bg-amber-50/50'">
            <h4 class="font-bold text-center text-amber-800">DMZ <span class="text-xs font-normal">(المنطقة المعزولة)</span></h4>
            <div class="grid grid-cols-2 gap-2 mt-3">
              <div class="rounded-xl border p-2 text-center text-xs font-bold transition-colors"
                   :class="webHit ? 'border-rose-300 bg-rose-100 text-rose-800' : 'border-amber-200 bg-white text-slate-700'">
                <div class="text-xl">{{ webHit ? '☠️' : '🌐' }}</div>خادم الويب
              </div>
              <div class="rounded-xl border border-amber-200 bg-white p-2 text-center text-xs font-bold text-slate-700">
                <div class="text-xl">✉️</div>خادم البريد
              </div>
            </div>
            <div class="mt-3 rounded-xl border border-amber-200 bg-white p-2 text-center text-sm font-bold text-amber-800">الخوادم المعرَّضة للإنترنت</div>
          </div>

          <!-- Firewall at the edge -->
          <div class="md:w-8 h-8 md:h-auto rounded-lg bg-slate-800 text-white text-[10px] font-bold flex items-center justify-center md:[writing-mode:vertical-rl]">جدار الحماية</div>

          <!-- External network -->
          <div class="md:w-40 rounded-2xl border-2 border-slate-300 bg-white p-4 flex flex-col items-center justify-center gap-2">
            <h4 class="font-bold text-slate-700 text-center">الشبكة الخارجية <span class="text-xs font-normal">(الإنترنت)</span></h4>
            <div class="text-3xl" :class="{ 'animate-bounce': running }">🕵️</div>
            <span class="text-xs text-slate-500">مهاجم</span>
          </div>
        </div>

        <div class="mt-6 flex flex-col md:flex-row items-center gap-4">
          <button @click="attack" :disabled="running"
                  class="px-6 py-3 bg-rose-600 hover:bg-rose-700 disabled:opacity-60 text-white font-bold rounded-xl transition-colors shrink-0">
            ⚡ اختراق خادم الويب العام
          </button>
          <button @click="reset" class="px-4 py-3 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-100 transition-colors shrink-0">إعادة</button>
          <p class="flex-1 font-bold leading-relaxed min-h-[3rem] flex items-center" :class="messageClass">{{ message }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onUnmounted } from 'vue'

const modes = [
  { key: 'dmz', label: 'مع منطقة معزولة' },
  { key: 'flat', label: 'بدون منطقة معزولة' },
]
const internalDevices = [
  { icon: '💻', name: 'جهاز الكمبيوتر الشخصي' },
  { icon: '🗄️', name: 'خادم قاعدة البيانات' },
]

const mode = ref('dmz')
const webHit = ref(false)
const internalHit = ref(false)
const blocked = ref(false)
const running = ref(false)
let timers = []

const message = computed(() => {
  if (running.value && !webHit.value) return 'المهاجم يستهدف خادم الويب العام…'
  if (!webHit.value) return 'اختر التكوين، ثم اضغط زر الاختراق.'
  if (mode.value === 'dmz') return blocked.value
    ? '✓ اختُرق خادم الويب في DMZ، لكن جدار الحماية بين DMZ والشبكة الداخلية منع وصول الهجوم؛ الشبكة الداخلية لا تزال محمية.'
    : 'تم اختراق خادم الويب… هل يصل المهاجم إلى الداخل؟'
  return internalHit.value
    ? '✗ خادم الويب كان داخل الشبكة الداخلية، فانتقل المهاجم منه مباشرة إلى الأجهزة والبيانات السرية.'
    : 'تم اختراق خادم الويب… هل يصل المهاجم إلى الداخل؟'
})
const messageClass = computed(() => {
  if (mode.value === 'dmz' && blocked.value) return 'text-emerald-700'
  if (internalHit.value) return 'text-rose-700'
  return 'text-slate-600'
})

function clearTimers() {
  timers.forEach(clearTimeout)
  timers = []
}
function reset() {
  clearTimers()
  webHit.value = false
  internalHit.value = false
  blocked.value = false
  running.value = false
}
function setMode(m) {
  mode.value = m
  reset()
}
function attack() {
  reset()
  running.value = true
  timers.push(setTimeout(() => { webHit.value = true }, 900))
  timers.push(setTimeout(() => {
    if (mode.value === 'dmz') blocked.value = true
    else internalHit.value = true
    running.value = false
  }, 2000))
}

onUnmounted(clearTimers)
</script>
