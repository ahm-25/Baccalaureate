<template>
  <!-- HTTP requests and responses. f = 0 request methods (GET / POST), 1 status codes (200 / 404 / 500),
       2 a log of real exchanges: each request with its method, and the status code that comes back. -->
  <div class="absolute inset-0">
    <SlidesTitle :icon="head.icon" :title="head.title" :sub="head.sub" />

    <Transition name="sl-frame" mode="out-in">
      <!-- ───── f0: methods ───── -->
      <div v-if="f === 0" key="methods" class="absolute inset-0">
        <div class="absolute top-[150px] inset-x-0 flex justify-center gap-7" dir="rtl">
          <div v-for="(m, i) in methods" :key="m.name" class="sl-in w-[530px] min-h-[345px] rounded-3xl border-2 px-7 py-5 flex flex-col"
               :class="m.cls" :style="{ '--d': `${0.4 + i * 2.2}s` }">
            <div class="flex items-center justify-between">
              <span class="text-[54px] font-black font-mono leading-none" :class="m.text" dir="ltr">{{ m.name }}</span>
              <span class="text-[46px]">{{ m.icon }}</span>
            </div>
            <p class="mt-3 text-[23px] font-bold text-white leading-snug">{{ m.role }}</p>
            <!-- mini picture of the direction of the data -->
            <div class="mt-4 h-[64px] shrink-0 rounded-2xl bg-black/30 flex items-center justify-between px-5" dir="ltr">
              <span class="text-[17px] font-black text-sky-200">💻 العميل</span>
              <span class="relative flex-1 mx-4 h-[3px] bg-white/20">
                <span class="dot absolute top-[-14px] text-[24px]" :class="m.dot" :style="{ '--d': `${1 + i * 2.2}s` }">{{ m.payload }}</span>
              </span>
              <span class="text-[17px] font-black text-amber-200">الخادم 🖥️</span>
            </div>
            <div class="mt-4 text-[17px] font-black text-slate-400">أمثلة</div>
            <div class="mt-1 flex flex-wrap gap-2">
              <span v-for="(e, j) in m.examples" :key="e" class="sl-pop sl-badge !text-[18px] border-white/20 bg-white/5 text-slate-100"
                    :style="{ '--d': `${1.6 + i * 2.2 + j * 0.3}s` }">{{ e }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- ───── f1: status codes ───── -->
      <div v-else-if="f === 1" key="codes" class="absolute inset-0">
        <div class="absolute top-[150px] inset-x-0 flex justify-center gap-5" dir="rtl">
          <div v-for="(c, i) in codes" :key="c.code" class="sl-in w-[360px] h-[330px] rounded-3xl border-2 px-6 py-5 flex flex-col items-center text-center"
               :class="c.cls" :style="{ '--d': `${0.4 + i * 1.6}s` }">
            <span class="text-[46px] leading-none">{{ c.icon }}</span>
            <span class="mt-2 text-[72px] font-black font-mono leading-none" :class="c.text">{{ c.code }}</span>
            <span class="mt-1 text-[19px] font-bold font-mono text-slate-300" dir="ltr">{{ c.label }}</span>
            <div class="h-px w-full bg-white/10 my-3"></div>
            <p class="text-[21px] font-bold text-white leading-snug">{{ c.meaning }}</p>
            <p v-if="c.note" class="mt-2 text-[17px] font-bold text-rose-200 leading-snug">{{ c.note }}</p>
          </div>
        </div>
        <div class="absolute top-[502px] inset-x-0 flex justify-center">
          <span class="sl-in sl-badge !text-[20px] border-sky-400/60 bg-sky-600/20 text-sky-100" style="--d: 5.2s" dir="rtl">
            📮 رمز حالة HTTP: رقم في الاستجابة يشير إلى نتيجة معالجة الطلب
          </span>
        </div>
      </div>

      <!-- ───── f2: exchange log ───── -->
      <div v-else key="log" class="absolute inset-0">
        <div class="absolute top-[150px] inset-x-0 flex flex-col items-center gap-3.5">
          <div v-for="(r, i) in log" :key="r.path" class="sl-in w-[1140px] h-[74px] rounded-2xl border-2 border-white/10 bg-slate-900/85 flex items-center gap-4 px-5"
               :style="{ '--d': `${0.3 + i * 1.5}s` }" dir="rtl">
            <span class="w-[350px] shrink-0 text-[20px] font-bold text-white leading-snug">{{ r.icon }} {{ r.text }}</span>
            <div class="flex-1 flex items-center gap-3" dir="ltr">
              <span class="px-3 py-1.5 rounded-lg border-2 font-mono text-[18px] font-bold whitespace-nowrap"
                    :class="r.method === 'GET' ? 'border-sky-400 bg-sky-950 text-sky-100' : 'border-amber-400 bg-amber-950 text-amber-100'">
                <b>{{ r.method }}</b> {{ r.path }}
              </span>
              <span class="flex-1 h-[3px] sl-wire"></span>
              <span class="sl-pop px-3 py-1.5 rounded-lg border-2 font-mono text-[18px] font-black whitespace-nowrap"
                    :class="statusCls[r.status]" :style="{ '--d': `${1.1 + i * 1.5}s` }">
                {{ r.status }} {{ labels[r.status] }}
              </span>
            </div>
          </div>
        </div>
        <div class="absolute top-[500px] inset-x-0 flex justify-center gap-4" dir="rtl">
          <span class="sl-in sl-badge !text-[19px] border-sky-400/60 bg-sky-600/15 text-sky-100" style="--d: 6.4s">📨 الطلب يحمل الطريقة ← نوع العملية</span>
          <span class="sl-in sl-badge !text-[19px] border-emerald-400/60 bg-emerald-600/15 text-emerald-100" style="--d: 7s">📮 الاستجابة تحمل رمز الحالة ← النتيجة</span>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import SlidesTitle from '~/components/slides/Title.vue'

const props = defineProps<{ f: number }>()

const methods = [
  { name: 'GET', icon: '📥', cls: 'border-sky-400/70 bg-sky-950/50', text: 'text-sky-300', dot: 'dot-l', payload: '📄',
    role: 'يُستخدم عادةً لطلب مورد أو بيانات من الخادم.', examples: ['🌐 عرض صفحة ويب', '🔎 استرجاع نتائج البحث'] },
  { name: 'POST', icon: '📤', cls: 'border-amber-400/70 bg-amber-950/40', text: 'text-amber-300', dot: 'dot-r', payload: '📝',
    role: 'يُستخدم عادةً لإرسال بيانات ليعالجها الخادم.', examples: ['🔑 إرسال معلومات تسجيل الدخول', '✉️ إرسال محتويات نموذج'] },
]

const codes = [
  { code: 200, label: 'OK', icon: '✅', cls: 'border-emerald-400/70 bg-emerald-950/45', text: 'text-emerald-300',
    meaning: 'نجاح: تمت معالجة الطلب بنجاح.' },
  { code: 404, label: 'Not Found', icon: '🔍', cls: 'border-amber-400/70 bg-amber-950/40', text: 'text-amber-300',
    meaning: 'المورد المطلوب غير موجود بهذا العنوان.' },
  { code: 500, label: 'Internal Server Error', icon: '💥', cls: 'border-rose-400/70 bg-rose-950/40', text: 'text-rose-300',
    meaning: 'خطأ داخلي في الخادم منعه من إكمال الطلب.', note: 'ولا يحدد الرمز وحده السبب التفصيلي.' },
]

const log = [
  { icon: '🔎', text: 'استرجاع نتائج البحث عن «كتب»', method: 'GET', path: '/search?q=books', status: 200 },
  { icon: '🔑', text: 'إرسال اسم المستخدم وكلمة المرور', method: 'POST', path: '/login', status: 200 },
  { icon: '🗑️', text: 'فتح رابط قديم لصفحة حُذفت', method: 'GET', path: '/old-page', status: 404 },
  { icon: '💥', text: 'طلب النتائج أثناء عطل في الخادم', method: 'GET', path: '/results', status: 500 },
]
const labels: Record<number, string> = { 200: 'OK', 404: 'Not Found', 500: 'Internal Server Error' }
const statusCls: Record<number, string> = {
  200: 'border-emerald-400 bg-emerald-700/50 text-emerald-50',
  404: 'border-amber-400 bg-amber-700/50 text-amber-50',
  500: 'border-rose-400 bg-rose-700/50 text-rose-50',
}

const head = computed(() => [
  { icon: '📨', title: 'طريقة طلب HTTP', sub: 'توضح «نوع العملية المطلوبة»' },
  { icon: '📮', title: 'رمز حالة HTTP', sub: 'رقم يشير إلى نتيجة المعالجة' },
  { icon: '🧾', title: 'طلبات واستجابات حقيقية', sub: 'الطريقة في الطلب… ورمز الحالة في الاستجابة' },
][props.f]!)
</script>

<style scoped>
.dot { left: 0; animation: dotR 2.4s ease-in-out var(--d) infinite; opacity: 0; }
.dot-l { animation-name: dotL; }
.dot-r { animation-name: dotR; }
/* GET: the data comes back from the server; POST: the client sends data to the server */
@keyframes dotL { 0% { left: 100%; opacity: 0 } 10% { opacity: 1 } 90% { opacity: 1 } 100% { left: -24px; opacity: 0 } }
@keyframes dotR { 0% { left: -24px; opacity: 0 } 10% { opacity: 1 } 90% { opacity: 1 } 100% { left: 100%; opacity: 0 } }
</style>
