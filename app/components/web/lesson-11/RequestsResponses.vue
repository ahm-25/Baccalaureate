<template>
  <section id="requests-responses" class="py-16 bg-slate-900 text-white relative overflow-hidden">
    <div class="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-900 via-slate-900 to-slate-900"></div>

    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <h2 class="text-2xl md:text-3xl font-bold text-sky-300 mb-8">3. طلبات HTTP والاستجابات</h2>

      <p class="text-lg text-slate-300 leading-relaxed mb-6">
        <span class="font-bold text-slate-500">(1)</span>
        تتضمن الطلبات المرسلة من العميل إلى الخادم معلومات تسمى <strong class="text-rose-300">طريقة طلب HTTP</strong> توضح "نوع العملية المطلوبة".
      </p>
      <div class="overflow-x-auto rounded-2xl border border-slate-700 mb-10">
        <table class="w-full text-right min-w-[560px]">
          <thead class="bg-slate-800 text-slate-200">
            <tr><th class="p-4 font-bold w-28">الأسلوب</th><th class="p-4 font-bold">الدور</th><th class="p-4 font-bold">أمثلة</th></tr>
          </thead>
          <tbody>
            <tr class="border-t border-slate-700 bg-slate-900/60">
              <td class="p-4 font-bold font-mono text-sky-300">GET</td>
              <td class="p-4 text-slate-300">يُستخدم عادةً لطلب مورد أو بيانات من الخادم</td>
              <td class="p-4 text-slate-300">عرض صفحة ويب، استرجاع نتائج البحث</td>
            </tr>
            <tr class="border-t border-slate-700 bg-slate-900/60">
              <td class="p-4 font-bold font-mono text-amber-300">POST</td>
              <td class="p-4 text-slate-300">يُستخدم عادةً لإرسال بيانات ليعالجها الخادم</td>
              <td class="p-4 text-slate-300">إرسال معلومات تسجيل الدخول، إرسال محتويات نموذج</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p class="text-lg text-slate-300 leading-relaxed mb-6">
        <span class="font-bold text-slate-500">(2)</span>
        تتضمن الاستجابات المرسلة من الخادم إلى العميل رقمًا يشير إلى نتيجة المعالجة، يسمى <strong class="text-rose-300">رمز حالة HTTP</strong>. فيما يلي بعض الأمثلة النموذجية.
      </p>
      <div class="overflow-x-auto rounded-2xl border border-slate-700 mb-12">
        <table class="w-full text-right min-w-[480px]">
          <thead class="bg-slate-800 text-slate-200">
            <tr><th class="p-4 font-bold w-36">رمز حالة HTTP</th><th class="p-4 font-bold">المعنى</th></tr>
          </thead>
          <tbody>
            <tr v-for="c in codes" :key="c.code" class="border-t border-slate-700 bg-slate-900/60">
              <td class="p-4 font-bold font-mono" :class="c.text">{{ c.code }}</td>
              <td class="p-4 text-slate-300">{{ c.meaning }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Request simulator -->
      <div class="bg-slate-800/80 border border-slate-700 rounded-3xl p-6 md:p-8 shadow-2xl">
        <h3 class="text-xl font-bold mb-2">🧪 محاكي الطلبات: اختر العملية والطريقة ثم أرسل الطلب</h3>
        <p class="text-slate-400 mb-6">شاهد الطلب يذهب إلى الخادم، والاستجابة تعود برمز حالة.</p>

        <div class="grid lg:grid-cols-5 gap-6">
          <div class="lg:col-span-2 space-y-4">
            <div class="space-y-2">
              <p class="text-sm font-bold text-slate-400">① العملية:</p>
              <button v-for="(a, i) in actions" :key="a.text" @click="pickAction(i)"
                      class="w-full text-right p-3 rounded-xl border transition-all flex items-center gap-3 text-sm font-bold"
                      :class="action === i ? 'bg-slate-700 border-sky-400' : 'bg-slate-900/60 border-slate-700 hover:border-slate-500'">
                <span class="text-xl">{{ a.icon }}</span>{{ a.text }}
              </button>
            </div>
            <div>
              <p class="text-sm font-bold text-slate-400 mb-2">② طريقة الطلب:</p>
              <div class="flex gap-2" dir="ltr">
                <button v-for="m in ['GET', 'POST']" :key="m" @click="pickMethod(m)"
                        class="flex-1 py-2 rounded-xl border-2 font-mono font-bold transition-colors"
                        :class="method === m ? (m === 'GET' ? 'bg-sky-500 border-sky-500 text-slate-900' : 'bg-amber-400 border-amber-400 text-slate-900') : 'bg-slate-900 border-slate-700 text-slate-300'">{{ m }}</button>
              </div>
            </div>
            <button @click="send" :disabled="action === null || !method || busy"
                    class="w-full py-3 bg-sky-500 hover:bg-sky-400 disabled:opacity-40 text-slate-900 font-bold rounded-xl transition-colors">
              📨 أرسل الطلب
            </button>
          </div>

          <div class="lg:col-span-3 bg-slate-900 border border-slate-700 rounded-2xl p-5 flex flex-col gap-5">
            <div class="flex items-center justify-between gap-2">
              <div class="flex flex-col items-center w-20 shrink-0"><Monitor class="w-9 h-9 text-sky-300" /><span class="text-xs mt-1 text-slate-400">العميل</span></div>
              <div class="flex-1 relative h-16">
                <div class="absolute inset-x-0 top-1/3 h-0.5 bg-slate-700"></div>
                <div class="absolute inset-x-0 top-2/3 h-0.5 bg-slate-700"></div>
                <div v-if="stage === 'request'" class="packet req bg-sky-500 text-slate-900" dir="ltr">{{ method }}</div>
                <div v-if="stage === 'response'" class="packet res text-white" :class="result.bg" dir="ltr">{{ result.code }}</div>
              </div>
              <div class="flex flex-col items-center w-20 shrink-0">
                <Server class="w-9 h-9" :class="stage === 'processing' ? 'text-amber-300 animate-pulse' : 'text-cyan-300'" />
                <span class="text-xs mt-1 text-slate-400">الخادم</span>
              </div>
            </div>

            <!-- Raw messages -->
            <div class="grid sm:grid-cols-2 gap-3 text-xs font-mono" dir="ltr">
              <div class="bg-slate-950 border border-slate-700 rounded-xl p-3 min-h-[4.5rem]">
                <span class="text-slate-500">// request</span><br>
                <span v-if="action !== null && method" class="text-sky-300">{{ method }} {{ actions[action].path }} HTTP/1.1</span>
              </div>
              <div class="bg-slate-950 border border-slate-700 rounded-xl p-3 min-h-[4.5rem]">
                <span class="text-slate-500">// response</span><br>
                <span v-if="stage === 'done'" :class="result.text">HTTP/1.1 {{ result.code }} {{ result.label }}</span>
              </div>
            </div>

            <div class="min-h-[5rem] rounded-xl p-4 text-sm leading-relaxed"
                 :class="stage === 'done' ? 'bg-slate-800 border border-slate-600 text-slate-100' : 'bg-slate-800/40 text-slate-500'">
              <template v-if="stage === 'done'">
                <p><strong :class="result.text">رمز الحالة {{ result.code }}:</strong> {{ result.meaning }}</p>
                <p class="mt-2" :class="methodOk ? 'text-emerald-300' : 'text-amber-300'">
                  {{ methodOk ? '✓' : '⚠️' }} {{ methodNote }}
                </p>
              </template>
              <template v-else-if="busy">جارٍ إرسال الطلب ومعالجته…</template>
              <template v-else>اختر العملية والطريقة، ثم اضغط «أرسل الطلب».</template>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-10 grid md:grid-cols-2 gap-4">
        <div class="bg-slate-800/70 border border-slate-700 rounded-2xl p-4 text-slate-200">
          <strong class="text-rose-300">طريقة طلب HTTP</strong> – يوضح ما هو مطلوب (GET، POST).
        </div>
        <div class="bg-slate-800/70 border border-slate-700 rounded-2xl p-4 text-slate-200">
          <strong class="text-rose-300">رمز حالة HTTP</strong> – يبلغ عن النتيجة (200، 404، 500).
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onUnmounted } from 'vue'
import { Monitor, Server } from 'lucide-vue-next'

const codes = [
  { code: 200, meaning: 'نجاح (تمت معالجة الطلب بنجاح)', text: 'text-emerald-300' },
  { code: 404, meaning: 'المورد المطلوب غير موجود بهذا العنوان', text: 'text-amber-300' },
  { code: 500, meaning: 'خطأ داخلي في الخادم منعه من إكمال الطلب؛ ولا يحدد الرمز وحده السبب التفصيلي', text: 'text-rose-300' },
]

// `fits` is the method normally used for the action; `status` is what the server answers
const actions = [
  { icon: '🏠', text: 'عرض الصفحة الرئيسية للموقع', path: '/home', fits: 'GET', status: 200 },
  { icon: '🔎', text: 'استرجاع نتائج البحث عن "كتب"', path: '/search?q=books', fits: 'GET', status: 200 },
  { icon: '🔑', text: 'إرسال اسم المستخدم وكلمة المرور', path: '/login', fits: 'POST', status: 200 },
  { icon: '✉️', text: 'إرسال محتويات نموذج التواصل', path: '/contact', fits: 'POST', status: 200 },
  { icon: '🗑️', text: 'فتح رابط قديم لصفحة حُذفت', path: '/old-page', fits: 'GET', status: 404 },
  { icon: '💥', text: 'طلب نتائج الامتحان أثناء عطل في الخادم', path: '/results', fits: 'GET', status: 500 },
]
const statusInfo = {
  200: { code: 200, label: 'OK', meaning: 'نجاح — تمت معالجة الطلب بنجاح، وأعاد الخادم البيانات أو النتيجة المطلوبة.', text: 'text-emerald-300', bg: 'bg-emerald-600' },
  404: { code: 404, label: 'Not Found', meaning: 'المورد المطلوب غير موجود بهذا العنوان — قد تكون الصفحة حُذفت أو العنوان خاطئ.', text: 'text-amber-300', bg: 'bg-amber-600' },
  500: { code: 500, label: 'Internal Server Error', meaning: 'خطأ داخلي في الخادم منعه من إكمال الطلب — المشكلة في جانب الخادم، والرمز وحده لا يحدد السبب التفصيلي.', text: 'text-rose-300', bg: 'bg-rose-600' },
}

const action = ref(null)
const method = ref(null)
const stage = ref('idle')
const busy = ref(false)
let timers = []

const result = computed(() => statusInfo[actions[action.value ?? 0].status])
const methodOk = computed(() => action.value !== null && actions[action.value].fits === method.value)
const methodNote = computed(() => {
  if (action.value === null) return ''
  const a = actions[action.value]
  if (methodOk.value) return a.fits === 'GET'
    ? 'اخترت GET وهو المناسب: يُستخدم عادةً لطلب مورد أو بيانات من الخادم.'
    : 'اخترت POST وهو المناسب: يُستخدم عادةً لإرسال بيانات ليعالجها الخادم.'
  return a.fits === 'GET'
    ? 'هذه العملية تطلب بيانات من الخادم، والطريقة المستخدمة لها عادةً هي GET لا POST.'
    : 'هذه العملية ترسل بيانات ليعالجها الخادم، والطريقة المستخدمة لها عادةً هي POST لا GET.'
})

function reset() {
  timers.forEach(clearTimeout)
  timers = []
  stage.value = 'idle'
  busy.value = false
}
function pickAction(i) { action.value = i; reset() }
function pickMethod(m) { method.value = m; reset() }
function send() {
  reset()
  busy.value = true
  stage.value = 'request'
  timers.push(setTimeout(() => { stage.value = 'processing' }, 1100))
  timers.push(setTimeout(() => { stage.value = 'response' }, 1900))
  timers.push(setTimeout(() => { stage.value = 'done'; busy.value = false }, 3000))
}

onUnmounted(() => timers.forEach(clearTimeout))
</script>

<style scoped>
.packet {
  position: absolute;
  transform: translateY(-50%);
  padding: 0.15rem 0.5rem;
  border-radius: 0.5rem;
  font-family: ui-monospace, monospace;
  font-size: 0.75rem;
  font-weight: 700;
}
/* Client on the right (RTL), server on the left */
.req { top: 33%; animation: toLeft 1.1s ease-in-out forwards; }
.res { top: 67%; animation: toRight 1.1s ease-in-out forwards; }
@keyframes toLeft { from { right: 0; } to { right: calc(100% - 3.5rem); } }
@keyframes toRight { from { right: calc(100% - 3.5rem); } to { right: 0; } }
</style>
