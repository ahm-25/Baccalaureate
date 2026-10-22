<template>
  <section id="client-server" class="py-16 bg-white">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="inline-flex items-center gap-2 bg-emerald-600 text-white font-bold px-5 py-2 rounded-full shadow-sm mb-6">📌 ملحوظة مهمة</div>
      <h2 class="text-2xl md:text-3xl font-bold text-sky-800 mb-8">1. العميل والخادم</h2>

      <div class="grid lg:grid-cols-3 gap-6 mb-10">
        <div class="lg:col-span-2 space-y-5 text-lg text-slate-700 leading-relaxed">
          <p>
            <span class="font-bold text-slate-400">(1)</span>
            <strong class="text-rose-600">العميل</strong>: برنامج أو جهاز يرسل طلبًا إلى خدمة أخرى؛ ومن أمثلته متصفح الويب وتطبيق الهاتف.
          </p>
          <p>
            <span class="font-bold text-slate-400">(2)</span>
            <strong class="text-rose-600">(الخادم)</strong>... الجانب الذي يستقبل الطلبات من العملاء، ويعالجها، ويعيد الاستجابات.
          </p>
          <p>
            <span class="font-bold text-slate-400">(3)</span>
            تعتمد كثير من تطبيقات الويب على إرسال العميل طلبًا وإعادة الخادم استجابة.
          </p>
        </div>
        <div class="bg-white border-2 border-slate-200 rounded-3xl p-6 space-y-4">
          <h3 class="font-bold text-sky-700">مصطلحات أساسية</h3>
          <p class="text-slate-700 leading-relaxed"><strong class="text-rose-600">العميل</strong> – الجانب الذي يطلب البيانات أو المعالجة.</p>
          <p class="text-slate-700 leading-relaxed"><strong class="text-rose-600">الخادم</strong> – الجانب الذي يعالج الطلبات ويعيد الاستجابات.</p>
        </div>
      </div>

      <!-- Figure 3.2.1 -->
      <div class="bg-slate-50 rounded-3xl border border-slate-200 p-6 md:p-8">
        <div class="text-center mb-6">
          <span class="inline-block text-xs font-bold text-sky-700 bg-sky-50 border border-sky-200 px-3 py-1 rounded-full mb-2">الشكل 3.2.1 – اتصال العميل بالخادم</span>
          <h3 class="text-xl font-bold text-slate-900">التواصل بين العميل والخادم</h3>
          <p class="text-slate-500 text-sm mt-1">اضغط «أرسل الطلب» لترى دورة الطلب والاستجابة.</p>
        </div>

        <div class="flex items-center justify-between gap-3">
          <!-- Server on the right, as in the book figure -->
          <div class="flex flex-col items-center w-28 shrink-0">
            <div class="w-20 h-20 rounded-2xl bg-white border-2 flex items-center justify-center transition-colors"
                 :class="phase === 'processing' ? 'border-amber-400 ring-4 ring-amber-200' : 'border-cyan-300'">
              <Server class="w-10 h-10 text-cyan-700" />
            </div>
            <span class="font-bold mt-2">الخادم</span>
            <span class="text-xs text-slate-500 text-center">خادم الويب / خادم التطبيقات</span>
          </div>

          <div class="flex-1 relative h-28">
            <div class="absolute inset-x-2 top-[30%] h-0.5 bg-slate-300"></div>
            <div class="absolute inset-x-2 top-[70%] h-0.5 bg-slate-300"></div>
            <span class="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-[130%] text-xs font-bold text-sky-700 bg-white px-2 rounded-full border border-sky-200 whitespace-nowrap">الطلب: "أرني هذه الصفحة"</span>
            <span class="absolute top-[70%] left-1/2 -translate-x-1/2 translate-y-[40%] text-xs font-bold text-emerald-700 bg-white px-2 rounded-full border border-emerald-200 whitespace-nowrap">الاستجابة: إعادة البيانات المطلوبة</span>
            <div v-if="phase === 'request'" class="msg msg-to-server bg-sky-600 text-white">📨</div>
            <div v-if="phase === 'response'" class="msg msg-to-client bg-emerald-600 text-white">📄</div>
          </div>

          <div class="flex flex-col items-center w-28 shrink-0">
            <div class="w-20 h-20 rounded-2xl bg-white border-2 flex items-center justify-center transition-colors"
                 :class="phase === 'done' ? 'border-emerald-400 ring-4 ring-emerald-200' : 'border-sky-300'">
              <Monitor class="w-10 h-10 text-sky-700" />
            </div>
            <span class="font-bold mt-2">العميل</span>
            <span class="text-xs text-slate-500 text-center">المتصفح / تطبيق الهاتف</span>
          </div>
        </div>

        <div class="mt-6 flex flex-col md:flex-row items-center gap-4">
          <button @click="run" :disabled="busy" class="px-6 py-3 bg-sky-600 hover:bg-sky-700 disabled:opacity-60 text-white font-bold rounded-xl transition-colors shrink-0">
            📨 أرسل الطلب
          </button>
          <p class="flex-1 font-bold text-slate-700 min-h-[3rem] flex items-center">{{ messages[phase] }}</p>
        </div>
        <p class="mt-4 text-center text-sm font-bold text-slate-500">يطلب العميل البيانات أو المعالجة؛ ويعالج الخادم الطلب ويعيد استجابة.</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onUnmounted } from 'vue'
import { Server, Monitor } from 'lucide-vue-next'

const phase = ref('idle')
const busy = ref(false)
const messages = {
  idle: 'اضغط الزر لتبدأ.',
  request: '① العميل (المتصفح) يرسل طلبًا إلى الخادم…',
  processing: '② الخادم يستقبل الطلب ويعالجه…',
  response: '③ الخادم يعيد استجابة تحمل البيانات المطلوبة…',
  done: '④ العميل يستقبل الاستجابة ويعرض الصفحة. ✓',
}
let timers = []

function run() {
  timers.forEach(clearTimeout)
  timers = []
  busy.value = true
  phase.value = 'request'
  timers.push(setTimeout(() => { phase.value = 'processing' }, 1300))
  timers.push(setTimeout(() => { phase.value = 'response' }, 2300))
  timers.push(setTimeout(() => { phase.value = 'done'; busy.value = false }, 3600))
}

onUnmounted(() => timers.forEach(clearTimeout))
</script>

<style scoped>
.msg {
  position: absolute;
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(-50%);
}
/* Client is on the left, server on the right */
.msg-to-server { top: 30%; animation: toRight 1.3s ease-in-out forwards; }
.msg-to-client { top: 70%; animation: toLeft 1.3s ease-in-out forwards; }
@keyframes toRight { from { left: 0; } to { left: calc(100% - 2.2rem); } }
@keyframes toLeft { from { left: calc(100% - 2.2rem); } to { left: 0; } }
</style>
