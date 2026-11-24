<template>
  <!-- HTTP and HTTPS. f = 0 definitions (HTTPS = HTTP over TLS), 1 a login sent over plain HTTP and read by an
       eavesdropper, 2 the same login over HTTPS (the spy sees only ciphertext), 3 stop & think. -->
  <div class="absolute inset-0">
    <SlidesTitle :icon="head.icon" :title="head.title" :sub="head.sub" />

    <Transition name="sl-frame" mode="out-in">
      <!-- ───── f0: definitions ───── -->
      <div v-if="f === 0" key="def" class="absolute inset-0" dir="rtl">
        <div class="absolute top-[150px] inset-x-0 flex justify-center items-center gap-4" dir="ltr">
          <span class="sl-pop px-7 py-3 rounded-2xl border-2 border-slate-300 bg-slate-700/60 text-[36px] font-black text-white font-mono" style="--d: .3s">HTTP</span>
          <span class="sl-fade text-[40px] font-black text-slate-400" style="--d: .8s">+</span>
          <span class="sl-pop px-7 py-3 rounded-2xl border-2 border-emerald-400 bg-emerald-800/50 text-[36px] font-black text-white font-mono" style="--d: 1.1s">🔒 TLS</span>
          <span class="sl-fade text-[40px] font-black text-slate-400" style="--d: 1.6s">=</span>
          <span class="sl-pop px-7 py-3 rounded-2xl border-2 border-emerald-300 bg-emerald-500/40 text-[36px] font-black text-white font-mono shadow-[0_0_40px_rgba(52,211,153,.45)]" style="--d: 1.9s">HTTPS</span>
        </div>
        <div class="absolute top-[258px] inset-x-0 flex justify-center gap-6">
          <div class="sl-in w-[520px] h-[190px] rounded-3xl border-2 border-slate-400/60 bg-slate-900/80 px-6 py-4" style="--d: 2.6s">
            <div class="text-[24px] font-black text-white"><span dir="ltr" class="font-mono">HTTP</span> · بروتوكول نقل النص التشعبي</div>
            <p class="mt-2 text-[21px] font-bold text-slate-200 leading-snug">بروتوكول يُستخدم لتبادل الرسائل بين عميل وخادم على الويب.</p>
          </div>
          <div class="sl-in w-[560px] h-[190px] rounded-3xl border-2 border-emerald-400/70 bg-emerald-950/50 px-6 py-4" style="--d: 3.6s">
            <div class="text-[24px] font-black text-white"><span dir="ltr" class="font-mono">HTTPS</span> · HTTP عبر اتصال TLS آمن</div>
            <p class="mt-2 text-[20px] font-bold text-slate-200 leading-snug">المواقع التي تبدأ عناوينها بـ <span dir="ltr" class="font-mono text-emerald-300">https://</span> تستخدم اتصال HTTPS.</p>
            <div class="mt-3 h-[40px] rounded-xl bg-slate-800 border border-white/10 flex items-center gap-2 px-3 font-mono text-[18px]" dir="ltr">
              <Lock class="w-5 h-5 text-emerald-400" /><span class="text-emerald-300">https://</span><span class="text-slate-300">school.example</span>
            </div>
          </div>
        </div>
        <div class="absolute top-[478px] inset-x-0 flex justify-center items-center gap-3">
          <span class="sl-in text-[21px] font-black text-slate-300" style="--d: 4.6s">يساعد TLS على:</span>
          <span v-for="(b, i) in benefits" :key="b" class="sl-pop sl-badge !text-[20px] border-emerald-400/60 bg-emerald-600/20 text-emerald-100"
                :style="{ '--d': `${5 + i * 0.4}s` }">{{ b }}</span>
        </div>
      </div>

      <!-- ───── f1, f2: the eavesdropper ───── -->
      <div v-else-if="f <= 2" :key="`spy-${f}`" class="absolute inset-0">
        <!-- browser with a login form -->
        <div class="sl-in absolute left-[60px] top-[160px] w-[380px] h-[300px] rounded-2xl border-2 bg-slate-900/90 overflow-hidden"
             :class="safe ? 'border-emerald-400/70' : 'border-rose-400/70'" style="--d: .2s">
          <div class="h-[44px] bg-slate-800 flex items-center gap-2 px-3 font-mono text-[17px]">
            <component :is="safe ? Lock : LockOpen" class="w-5 h-5" :class="safe ? 'text-emerald-400' : 'text-rose-400'" />
            <span :class="safe ? 'text-emerald-300' : 'text-rose-300'">{{ safe ? 'https://' : 'http://' }}</span><span class="text-slate-300">school.example/login</span>
          </div>
          <div class="px-6 pt-4 flex flex-col gap-3" dir="rtl">
            <label class="text-[16px] font-bold text-slate-400">اسم المستخدم
              <div class="mt-1 h-[40px] rounded-lg bg-slate-800 border border-white/10 flex items-center px-3 font-mono text-[18px] text-white" dir="ltr">student01</div>
            </label>
            <label class="text-[16px] font-bold text-slate-400">كلمة المرور
              <div class="mt-1 h-[40px] rounded-lg bg-slate-800 border border-white/10 flex items-center px-3 font-mono text-[18px] text-white" dir="ltr">••••••••</div>
            </label>
            <span class="press self-start mt-1 px-6 py-2 rounded-xl bg-sky-500 text-white text-[18px] font-black">تسجيل الدخول</span>
          </div>
        </div>

        <!-- server -->
        <div class="sl-in absolute left-[1020px] top-[220px] w-[200px] h-[180px] rounded-3xl border-2 border-amber-400 bg-amber-950/50 flex flex-col items-center justify-center" style="--d: .4s">
          <Server class="w-14 h-14 text-amber-300" />
          <span class="mt-2 text-[22px] font-black text-white">الخادم</span>
        </div>

        <!-- wire (+ TLS tunnel) -->
        <div class="absolute left-[440px] top-[308px] w-[580px] h-[4px] bg-slate-500/70"></div>
        <div v-if="safe" class="sl-fade absolute left-[452px] top-[278px] w-[556px] h-[64px] rounded-full border-[3px] border-emerald-400/80 bg-emerald-500/10 shadow-[0_0_30px_rgba(52,211,153,.35)]" style="--d: .6s">
          <span class="absolute -top-[30px] left-1/2 -ml-[60px] w-[120px] text-center text-[17px] font-black text-emerald-300">🔒 نفق TLS</span>
        </div>
        <div class="packet absolute top-[290px] w-0 flex justify-center">
          <span class="whitespace-nowrap px-3 py-1 rounded-lg border-2 font-mono text-[15px] font-bold"
                :class="safe ? 'border-emerald-400 bg-emerald-950 text-emerald-200' : 'border-rose-400 bg-rose-950 text-rose-100'">
            {{ safe ? '🔒 9f e2 1c 7b 0d…' : 'password=S3cret!' }}
          </span>
        </div>

        <!-- the spy taps the wire -->
        <div class="absolute left-[728px] top-[312px] w-[4px] h-[60px] tap"></div>
        <div class="sl-pop absolute left-[690px] top-[368px] w-[80px] h-[80px] rounded-full border-2 border-rose-400 bg-rose-950 flex items-center justify-center text-[44px]" style="--d: .8s">🕵️</div>
        <div class="sl-in absolute left-[500px] top-[462px] w-[460px] rounded-2xl border-2 border-white/15 bg-black/70 px-4 py-2.5" style="--d: 1.2s">
          <div class="text-[15px] font-black text-slate-400" dir="rtl">ما يراه المتجسس:</div>
          <div class="relative h-[52px] font-mono text-[16px] leading-[26px]" dir="ltr">
            <span class="sl-out absolute inset-0 text-slate-500" style="--d: 2.6s">— (waiting for traffic) —</span>
            <span v-if="safe" class="sl-fade absolute inset-0 text-emerald-300" style="--d: 2.6s">17 03 03 00 4a 9f e2 1c 7b 0d …<br>c8 51 aa 3e 06 f4 9b 72 d1 …</span>
            <span v-else class="sl-fade absolute inset-0 text-rose-300" style="--d: 2.6s">POST /login HTTP/1.1<br>username=student01&amp;password=S3cret!</span>
          </div>
        </div>

        <!-- verdict -->
        <div class="absolute left-[60px] top-[478px] w-[400px] flex justify-center" dir="rtl">
          <span class="sl-pop sl-badge !text-[19px] !whitespace-normal text-center leading-snug" style="--d: 3.4s"
                :class="safe ? 'border-emerald-400 bg-emerald-600/30 text-emerald-50' : 'border-rose-400 bg-rose-600/30 text-rose-50'">
            {{ safe ? '✓ لا يستطيع قراءته أو تعديله بسهولة' : '✗ قرأ اسم المستخدم وكلمة المرور!' }}
          </span>
        </div>
      </div>

      <!-- ───── f3: stop & think ───── -->
      <div v-else key="think" class="absolute inset-0 flex flex-col items-center pt-[150px] gap-5" dir="rtl">
        <div class="sl-in sl-card border-amber-400/70 px-10 py-4 text-[30px] font-black text-white text-center" style="--d: .2s">
          لماذا يجب أن تستخدم <span class="text-amber-300">صفحة تسجيل الدخول</span> HTTPS بدلًا من HTTP العادي؟
        </div>
        <div class="flex flex-col gap-3 w-[1060px]">
          <div v-for="(r, i) in thinkRows" :key="r.text" class="sl-in flex items-center gap-4 rounded-2xl border-2 px-6 py-3" :class="r.cls"
               :style="{ '--d': `${1.4 + i * 1.3}s` }">
            <span class="text-[34px]">{{ r.icon }}</span>
            <p class="text-[22px] font-bold text-white leading-snug" v-html="r.text"></p>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Lock, LockOpen, Server } from 'lucide-vue-next'
import SlidesTitle from '~/components/slides/Title.vue'

const props = defineProps<{ f: number }>()

const safe = computed(() => props.f === 2)
const benefits = ['🤫 سرية الاتصال', '🛡️ سلامته', '🪪 مصادقة الخادم']
const thinkRows = [
  { icon: '🔑', cls: 'border-white/15 bg-slate-900/80', text: 'لأن صفحة تسجيل الدخول ترسل <span class="text-amber-300 font-black">اسم المستخدم وكلمة المرور</span> عبر الشبكة.' },
  { icon: '🔒', cls: 'border-emerald-400/60 bg-emerald-950/50', text: 'مع <span class="text-emerald-300 font-black">HTTPS</span> ينتقل HTTP عبر اتصال TLS آمن يحمي السرية والسلامة ويصادق الخادم؛ فلا يستطيع المتجسس قراءة البيانات أو تعديلها بسهولة.' },
  { icon: '🔓', cls: 'border-rose-400/60 bg-rose-950/40', text: 'أما مع <span class="text-rose-300 font-black">HTTP العادي</span> فتنتقل البيانات دون هذه الحماية، فقد تُقرأ كلمة المرور.' },
]

const head = computed(() => {
  if (props.f === 0) return { icon: '🌐', title: 'HTTP و HTTPS', sub: 'قواعد تبادل الرسائل على الويب' }
  if (props.f === 1) return { icon: '🔓', title: 'تسجيل الدخول عبر HTTP', sub: 'متجسس على الشبكة يراقب الرسائل…' }
  if (props.f === 2) return { icon: '🔒', title: 'تسجيل الدخول عبر HTTPS', sub: 'نفس المتجسس… لكن الاتصال محمي بـ TLS' }
  return { icon: '💡', title: 'توقف وفكر', sub: '' }
})
</script>

<style scoped>
.press { animation: press .3s ease .9s 1; }
@keyframes press { 50% { transform: scale(.9); filter: brightness(1.3) } }
.packet { left: 470px; opacity: 0; animation: go 2.4s ease-in-out 1.1s forwards; }
@keyframes go { 0% { left: 470px; opacity: 0 } 8% { opacity: 1 } 92% { opacity: 1 } 100% { left: 990px; opacity: 0 } }
.tap { background: repeating-linear-gradient(180deg, #fb7185 0 8px, transparent 8px 14px); }
</style>
