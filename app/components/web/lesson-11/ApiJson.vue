<template>
  <section id="api-json" class="py-16 bg-white">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-2xl md:text-3xl font-bold text-sky-800 mb-8">4. واجهة برمجة التطبيقات (API)</h2>

      <div class="grid lg:grid-cols-3 gap-6 mb-10">
        <div class="lg:col-span-2 space-y-5 text-lg text-slate-700 leading-relaxed">
          <p>
            <span class="font-bold text-slate-400">(1)</span>
            <strong class="text-rose-600">واجهة برمجة التطبيقات (API)</strong>: مجموعة قواعد واضحة تسمح لبرنامج بطلب بيانات أو وظائف من برنامج آخر.
          </p>
          <p>
            <span class="font-bold text-slate-400">(2)</span>
            قد ترسل الواجهة الأمامية طلبات إلى خدمة خلفية عبر API وتستقبل منها البيانات.
          </p>
          <p>
            <span class="font-bold text-slate-400">(3)</span>
            قد تعيد API بيانات بصيغة <strong class="text-rose-600" dir="ltr">JSON (JavaScript Object Notation)</strong>، وهي صيغة نصية شائعة لتمثيل وتبادل
            البيانات المهيكلة باستخدام كائنات ومصفوفات وقيم بسيطة، وتدعمها لغات وأدوات برمجية كثيرة.
          </p>
        </div>
        <div class="bg-white border-2 border-slate-200 rounded-3xl p-6 space-y-4">
          <h3 class="font-bold text-sky-700">مصطلحات أساسية</h3>
          <p class="text-slate-700 leading-relaxed"><strong class="text-rose-600">API</strong> – تتيح لبرمجيات مختلفة تبادل البيانات.</p>
          <p class="text-slate-700 leading-relaxed"><strong class="text-rose-600">JSON</strong> – صيغة بيانات قابلة للقراءة.</p>
          <p class="text-xs text-slate-500 leading-relaxed" dir="ltr">API – Application Programming Interface: an interface or defined contract for communication between software.</p>
        </div>
      </div>

      <!-- API call + JSON viewer -->
      <div class="bg-slate-50 rounded-3xl border border-slate-200 p-6 md:p-8 mb-10">
        <h3 class="text-xl font-bold text-slate-900 mb-2">🧩 اقرأ البيانات (JSON)</h3>
        <p class="text-slate-600 mb-6">
          اضغط «اطلب من API» لتطلب الواجهة الأمامية الطقس من خدمة خلفية، ثم اضغط على أي <strong>مفتاح (key)</strong> لترى <strong>القيمة (value)</strong> المقابلة له.
        </p>

        <div class="grid lg:grid-cols-2 gap-6 items-start">
          <div class="space-y-4">
            <div class="flex items-center gap-3">
              <div class="flex-1 bg-white border border-slate-200 rounded-xl p-3 text-center">
                <div class="text-2xl">🖥️</div><span class="text-sm font-bold">الواجهة الأمامية</span>
              </div>
              <span class="font-bold text-sky-600">⇄ API ⇄</span>
              <div class="flex-1 bg-white border border-slate-200 rounded-xl p-3 text-center">
                <div class="text-2xl">🌦️</div><span class="text-sm font-bold">خدمة الطقس</span>
              </div>
            </div>
            <div class="bg-slate-900 rounded-xl p-3 font-mono text-sm text-sky-300" dir="ltr">GET /api/weather?city=Cairo</div>
            <button @click="call" :disabled="loading" class="w-full py-3 bg-sky-600 hover:bg-sky-700 disabled:opacity-60 text-white font-bold rounded-xl transition-colors">
              {{ loading ? 'جارٍ الطلب…' : '📡 اطلب من API' }}
            </button>
          </div>

          <div>
            <div class="bg-slate-900 rounded-2xl p-5 font-mono text-base min-h-[9rem] text-slate-300 leading-loose" dir="ltr">
              <template v-if="received">
                <div>{</div>
                <div v-for="(f, i) in fields" :key="f.key" class="pl-6">
                  <button @click="active = i" class="rounded px-1 transition-colors"
                          :class="active === i ? 'bg-sky-500 text-slate-900' : 'text-sky-300 hover:bg-slate-700'">"{{ f.key }}"</button>:
                  <span class="rounded px-1 transition-colors" :class="[f.cls, active === i ? 'bg-amber-300 text-slate-900' : '']">{{ f.raw }}</span><span v-if="i < fields.length - 1">,</span>
                </div>
                <div>}</div>
              </template>
              <span v-else class="text-slate-500">// waiting for the API response…</span>
            </div>
            <div class="mt-4 min-h-[4rem] rounded-xl p-4 border-2 transition-colors"
                 :class="active !== null ? 'bg-amber-50 border-amber-300 text-slate-800' : 'bg-white border-slate-200 text-slate-400'">
              <template v-if="active !== null">
                المفتاح (key): <code class="font-mono font-bold text-sky-700" dir="ltr">"{{ fields[active].key }}"</code> ←
                القيمة (value): <code class="font-mono font-bold text-amber-700" dir="ltr">{{ fields[active].raw }}</code>
                <span class="block text-sm mt-1 text-slate-600">{{ fields[active].note }}</span>
              </template>
              <template v-else>اضغط على مفتاح في البيانات لعرض قيمته.</template>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-amber-50 border-2 border-amber-200 rounded-3xl p-6 md:p-8">
        <h3 class="font-bold text-amber-700 mb-2">⭐ الفكرة الرئيسة</h3>
        <p class="text-lg font-bold text-slate-800 leading-relaxed">
          يتواصل تطبيق الويب كتبادل منظم: يطلب العميل ويستجيب الخادم، باستخدام بروتوكول (HTTP/HTTPS)، وطريقة طلب HTTP (GET/POST)، ورمز حالة،
          وغالبًا واجهة برمجة تطبيقات تعيد البيانات بصيغة JSON.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onUnmounted } from 'vue'

const fields = [
  { key: 'city', raw: '"Cairo"', cls: 'text-amber-300', note: 'قيمة نصية (تُكتب بين علامتي تنصيص): اسم المدينة.' },
  { key: 'temperature', raw: '31', cls: 'text-emerald-300', note: 'قيمة رقمية (تُكتب دون علامتي تنصيص): درجة الحرارة.' },
]

const received = ref(false)
const loading = ref(false)
const active = ref(null)
let timer = null

function call() {
  received.value = false
  active.value = null
  loading.value = true
  timer = setTimeout(() => { received.value = true; loading.value = false }, 900)
}

onUnmounted(() => clearTimeout(timer))
</script>
