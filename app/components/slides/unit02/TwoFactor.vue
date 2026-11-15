<template>
  <!-- 2FA chapter. `f` is the local frame (0..5); each frame replays its own
       animation sequence on enter, driven by the --d delay on `.seq` items. -->
  <div class="absolute inset-0" dir="rtl">
    <!-- Header -->
    <div class="absolute top-8 inset-x-0 flex flex-col items-center">
      <div class="flex items-center gap-3 text-5xl font-black text-white">
        <ShieldCheck class="w-12 h-12 text-violet-300" />
        المصادقة الثنائية <span class="text-violet-300" dir="ltr">(2FA)</span>
      </div>
      <p class="mt-2 text-xl font-bold text-slate-400">حماية الدخول بأكثر من عامل</p>
    </div>

    <Transition name="frame" mode="out-in">
      <!-- ───── Login flows (frames 0, 3, 4) ───── -->
      <div v-if="login" :key="`login-${f}`" class="absolute inset-x-0 top-[130px] bottom-[105px] flex items-center justify-center gap-16 px-16">
        <!-- actor -->
        <div class="flex flex-col items-center gap-4 w-[300px]">
          <div class="relative">
            <div class="w-28 h-28 rounded-full flex items-center justify-center border-4"
                 :class="login.hacker ? 'bg-rose-950 border-rose-500 shadow-[0_0_40px_rgba(244,63,94,.45)]' : 'bg-sky-950 border-sky-400 shadow-[0_0_40px_rgba(56,189,248,.35)]'">
              <component :is="login.hacker ? VenetianMask : User" class="w-16 h-16" :class="login.hacker ? 'text-rose-400' : 'text-sky-300'" />
            </div>
            <!-- stolen password note flying to the field -->
            <div v-if="login.hacker" class="note absolute -top-4 -left-24 px-3 py-2 rounded-lg bg-yellow-200 text-slate-900 font-black text-lg rotate-[-8deg] shadow-lg" dir="rtl">
              🔑 كلمة المرور: <span dir="ltr">1234</span>
            </div>
          </div>
          <span class="text-2xl font-black" :class="login.hacker ? 'text-rose-300' : 'text-sky-200'">
            {{ login.hacker ? 'محتال سرق كلمة المرور' : 'صاحب الحساب الحقيقي' }}
          </span>

          <!-- phone (only the real owner has it) -->
          <div v-if="login.twoStep && !login.hacker" class="seq phone relative w-[150px] h-[250px] rounded-[28px] bg-slate-900 border-4 border-slate-600 p-2 shadow-2xl" style="--d: 2.4s">
            <div class="w-12 h-1.5 rounded-full bg-slate-700 mx-auto mb-2"></div>
            <div class="h-[200px] rounded-2xl bg-gradient-to-b from-slate-800 to-slate-900 flex flex-col items-center justify-start pt-4 px-2">
              <Smartphone class="w-7 h-7 text-slate-500 mb-3" />
              <div class="seq w-full rounded-xl bg-white/95 p-2 text-center shadow-lg" style="--d: 3.2s">
                <div class="flex items-center justify-center gap-1 text-[11px] font-black text-violet-700"><MessageSquare class="w-3.5 h-3.5" /> بوابة المدرسة</div>
                <div class="text-xs font-bold text-slate-600 mt-1">رمز الدخول:</div>
                <div class="text-2xl font-black text-slate-900 tracking-widest" dir="ltr">482913</div>
              </div>
            </div>
          </div>
          <div v-if="login.twoStep && login.hacker" class="seq w-[400px] rounded-2xl border-2 border-rose-400 bg-rose-500/15 px-4 py-3 text-xl font-black text-rose-200 text-center leading-relaxed" style="--d: 3.4s">
            الرمز وصل إلى هاتف صاحب الحساب<br />وأنا لا أملك الهاتف! 😟
          </div>
        </div>

        <!-- login card -->
        <div class="seq w-[520px] rounded-3xl bg-white shadow-2xl overflow-hidden" style="--d: .2s">
          <div class="bg-violet-600 text-white px-6 py-3 flex items-center gap-3 text-xl font-black">
            <GraduationCap class="w-7 h-7" /> بوابة المدرسة
          </div>
          <div class="px-6 py-4 flex flex-col gap-3">
            <div>
              <div class="text-base font-bold text-slate-500 mb-1">اسم المستخدم</div>
              <div class="h-10 rounded-xl border-2 border-slate-200 px-4 flex items-center text-xl font-black text-slate-800" dir="ltr">ali</div>
            </div>
            <div>
              <div class="text-base font-bold text-slate-500 mb-1 flex items-center gap-2">
                كلمة المرور
                <span class="seq inline-flex items-center gap-1 text-emerald-600 text-sm font-black" style="--d: 1.8s"><CircleCheck class="w-4 h-4" /> صحيحة</span>
              </div>
              <div class="relative h-10 rounded-xl border-2 border-slate-200 px-4 flex items-center overflow-hidden" dir="ltr">
                <span class="dots text-3xl tracking-[0.3em] text-slate-800 leading-none">••••••</span>
              </div>
            </div>

            <!-- second factor -->
            <div v-if="login.twoStep" class="seq rounded-2xl border-2 border-violet-300 bg-violet-50 px-4 py-3" style="--d: 2.6s">
              <div class="flex items-center gap-2 text-lg font-black text-violet-800 mb-2">
                <Smartphone class="w-5 h-5" /> العامل الثاني: أدخل الرمز المرسل إلى هاتفك
              </div>
              <div class="relative h-10 rounded-xl bg-white border-2 px-4 flex items-center justify-center text-2xl font-black tracking-[0.4em]"
                   :class="login.hacker ? 'code-bad border-rose-400 text-rose-600' : 'border-violet-300 text-slate-900'" dir="ltr">
                <span class="seq" style="--d: 4.2s">{{ login.hacker ? '??????' : '482913' }}</span>
              </div>
            </div>

            <!-- outcome -->
            <div class="seq rounded-2xl px-5 py-2 flex items-center gap-3 text-2xl font-black"
                 :class="login.outcomeClass" :style="{ '--d': login.twoStep ? '5.2s' : '2.6s' }">
              <component :is="login.outcomeIcon" class="w-8 h-8 shrink-0" />
              {{ login.outcome }}
            </div>
          </div>
        </div>
      </div>

      <!-- ───── Factor categories (frame 1) ───── -->
      <div v-else-if="f === 1" key="cats" class="absolute inset-x-0 top-[150px] bottom-[110px] flex items-center justify-center gap-8">
        <div v-for="(c, i) in categories" :key="c.name"
             class="seq w-[330px] rounded-3xl border-2 p-7 bg-slate-900/85 flex flex-col items-center text-center"
             :class="c.border" :style="{ '--d': `${0.3 + i * 0.6}s` }">
          <div class="w-24 h-24 rounded-3xl flex items-center justify-center mb-4" :class="c.bg">
            <component :is="c.icon" class="w-14 h-14 text-white" />
          </div>
          <div class="text-4xl font-black" :class="c.text">{{ c.name }}</div>
          <div class="text-2xl font-bold text-white mt-1 mb-5">{{ c.desc }}</div>
          <div class="flex flex-wrap justify-center gap-2">
            <span v-for="e in c.examples" :key="e" class="px-3 py-1 rounded-full bg-white/10 text-lg font-bold text-slate-200">{{ e }}</span>
          </div>
        </div>
      </div>

      <!-- ───── Definition (frame 2) ───── -->
      <div v-else-if="f === 2" key="def" class="absolute inset-x-0 top-[140px] bottom-[110px] flex flex-col items-center justify-center">
        <div class="flex items-center gap-8">
          <div class="seq factor border-amber-400" style="--d: .3s">
            <Brain class="w-14 h-14 text-amber-300" />
            <span class="text-3xl font-black text-white">كلمة المرور</span>
            <span class="chip-sm bg-amber-500">المعرفة</span>
          </div>
          <span class="seq text-6xl font-black text-slate-400" style="--d: .9s">+</span>
          <div class="seq factor border-sky-400" style="--d: 1.3s">
            <Smartphone class="w-14 h-14 text-sky-300" />
            <span class="text-3xl font-black text-white">رمز على الهاتف</span>
            <span class="chip-sm bg-sky-500">الحيازة</span>
          </div>
          <span class="seq text-6xl font-black text-slate-400" style="--d: 1.9s">=</span>
          <div class="seq factor border-violet-300 bg-violet-600/30 shadow-[0_0_60px_rgba(167,139,250,.45)]" style="--d: 2.3s">
            <ShieldCheck class="w-16 h-16 text-violet-200" />
            <span class="text-5xl font-black text-white" dir="ltr">2FA</span>
            <span class="text-lg font-bold text-violet-200">مصادقة ثنائية</span>
          </div>
        </div>
        <div class="seq card-def mt-10" style="--d: 3s">
          المصادقة الثنائية تستخدم <span class="hl">عاملين مستقلين</span> من <span class="hl">فئتين مختلفتين</span> لإثبات الهوية.
        </div>
      </div>

      <!-- ───── Is it 2FA? (frame 5) ───── -->
      <div v-else-if="f === 5" key="quiz" class="absolute inset-x-0 top-[140px] bottom-[110px] flex flex-col items-center justify-center gap-4">
        <div class="seq text-3xl font-black text-white mb-2" style="--d: .1s">هل هي مصادقة ثنائية؟ 🤔</div>
        <div v-for="(q, i) in quiz" :key="i"
             class="seq w-[1000px] flex items-center gap-4 rounded-2xl bg-slate-900/85 border-2 border-white/10 px-5 py-3"
             :style="{ '--d': `${0.4 + i * 1.2}s` }">
          <span class="chip-f" :class="q.a.cls"><component :is="q.a.icon" class="w-6 h-6" /> {{ q.a.name }}</span>
          <span class="text-3xl font-black text-slate-500">+</span>
          <span class="chip-f" :class="q.b.cls"><component :is="q.b.icon" class="w-6 h-6" /> {{ q.b.name }}</span>
          <span class="flex-1"></span>
          <span class="seq flex items-center gap-2 text-xl font-black px-4 py-2 rounded-xl"
                :class="q.ok ? 'bg-emerald-500/20 text-emerald-300' : 'bg-rose-500/20 text-rose-300'"
                :style="{ '--d': `${1.0 + i * 1.2}s` }">
            <component :is="q.ok ? CircleCheck : CircleX" class="w-7 h-7" /> {{ q.why }}
          </span>
        </div>
        <div class="seq mt-3 text-xl font-bold text-slate-300" style="--d: 4.2s">
          وتُسمى <span class="text-violet-300 font-black">المصادقة متعددة العوامل (MFA)</span> عند استخدام عاملين أو أكثر من فئات مختلفة.
        </div>
      </div>

      <!-- ───── 2FA in real services (frame 6) ───── -->
      <div v-else-if="f === 6" key="services" class="absolute inset-x-0 top-[135px] bottom-[105px] flex flex-col items-center justify-center gap-3">
        <div class="seq text-3xl font-black text-white mb-2" style="--d: .1s">المصادقة الثنائية في الخدمات الفعلية</div>
        <div v-for="(s, i) in services" :key="s.name"
             class="seq w-[1040px] flex items-center gap-4 rounded-2xl bg-slate-900/85 border-2 border-white/10 px-5 py-3"
             :style="{ '--d': `${0.4 + i * 0.7}s` }">
          <span class="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center shrink-0"><component :is="s.icon" class="w-8 h-8 text-slate-200" /></span>
          <span class="w-[330px] text-2xl font-black text-white">{{ s.name }}</span>
          <span class="chip-f" :class="s.a.cls"><component :is="s.a.icon" class="w-6 h-6" /> {{ s.a.name }}</span>
          <span class="text-3xl font-black text-slate-500">+</span>
          <span class="chip-f" :class="s.b.cls"><component :is="s.b.icon" class="w-6 h-6" /> {{ s.b.name }}</span>
        </div>
        <div class="seq mt-3 flex items-center gap-5 text-lg font-bold text-slate-300" style="--d: 3.4s">
          <span class="flex items-center gap-2"><span class="w-4 h-4 rounded-full bg-amber-400"></span> المعرفة</span>
          <span class="flex items-center gap-2"><span class="w-4 h-4 rounded-full bg-sky-400"></span> الحيازة</span>
          <span class="flex items-center gap-2"><span class="w-4 h-4 rounded-full bg-emerald-400"></span> السمات الحيوية</span>
          <span class="text-white font-black">← دائمًا فئتان مختلفتان</span>
        </div>
      </div>

      <!-- ───── Security vs accessibility (frame 7) ───── -->
      <div v-else-if="f === 7" key="evaluate" class="absolute inset-x-0 top-[132px] bottom-[100px] flex flex-col items-center justify-center">
        <div class="seq flex items-center gap-3 px-6 py-3 rounded-2xl bg-slate-900/85 border-2 border-violet-400/60 text-2xl font-black text-white mb-5" style="--d: .1s">
          <GraduationCap class="w-8 h-8 text-violet-300" />
          بوابة مدرسة فيها درجات ومدفوعات، وبعض الطلاب لا يملكون هاتفًا ذكيًا. ما أفضل طريقة دخول؟
        </div>
        <div class="flex items-stretch gap-5">
          <div v-for="(o, i) in options" :key="o.name"
               class="seq relative w-[340px] rounded-3xl border-2 bg-slate-900/85 p-5 flex flex-col gap-3"
               :class="o.best ? 'border-emerald-400 best' : 'border-white/15'"
               :style="{ '--d': `${0.6 + i * 0.6}s` }">
            <span v-if="o.best" class="seq absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-emerald-500 text-white text-lg font-black whitespace-nowrap star" style="--d: 3s">⭐ التوصية</span>
            <div class="text-2xl font-black text-white leading-snug min-h-[64px] flex items-center">{{ o.name }}</div>
            <div v-for="m in meters" :key="m.key" class="flex items-center gap-3">
              <span class="w-[150px] text-lg font-bold text-slate-300 whitespace-nowrap">{{ m.label }}</span>
              <div class="flex gap-1.5">
                <span v-for="n in 3" :key="n" class="seg" :class="n <= o[m.key] ? m.on : 'bg-white/10'"
                      :style="{ animationDelay: `${0.9 + i * 0.6 + n * 0.12}s` }"></span>
              </div>
            </div>
            <div class="text-lg font-bold leading-snug" :class="o.best ? 'text-emerald-200' : 'text-slate-400'">{{ o.note }}</div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import {
  ShieldCheck, VenetianMask, User, Smartphone, MessageSquare, GraduationCap,
  CircleCheck, CircleX, Brain, Fingerprint, CreditCard, ShieldX, TriangleAlert,
  Landmark, MessagesSquare, Building2, ShoppingCart,
} from 'lucide-vue-next'

const props = defineProps<{ f: number }>()

const login = computed(() => {
  if (props.f === 0) return {
    hacker: true, twoStep: false,
    outcome: 'تم الدخول… لكنه المحتال! 😱', outcomeIcon: TriangleAlert,
    outcomeClass: 'bg-rose-100 text-rose-700 border-2 border-rose-300 shake-x',
  }
  if (props.f === 3) return {
    hacker: false, twoStep: true,
    outcome: 'تم الدخول بنجاح', outcomeIcon: CircleCheck,
    outcomeClass: 'bg-emerald-100 text-emerald-700 border-2 border-emerald-300',
  }
  if (props.f === 4) return {
    hacker: true, twoStep: true,
    outcome: 'تم رفض الدخول', outcomeIcon: ShieldX,
    outcomeClass: 'bg-rose-100 text-rose-700 border-2 border-rose-300',
  }
  return null
})

const categories = [
  { name: 'المعرفة', desc: 'شيء تعرفه', icon: Brain, examples: ['كلمة المرور', 'رمز PIN', 'سؤال سري'],
    border: 'border-amber-400/70', bg: 'bg-amber-500', text: 'text-amber-300' },
  { name: 'الحيازة', desc: 'شيء تملكه', icon: Smartphone, examples: ['الهاتف', 'مفتاح أمان', 'بطاقة دخول'],
    border: 'border-sky-400/70', bg: 'bg-sky-500', text: 'text-sky-300' },
  { name: 'السمات الحيوية', desc: 'شيء من صفاتك', icon: Fingerprint, examples: ['بصمة الإصبع', 'بصمة الوجه'],
    border: 'border-emerald-400/70', bg: 'bg-emerald-500', text: 'text-emerald-300' },
]

const K = { icon: Brain, cls: 'bg-amber-500/20 border-amber-400 text-amber-200' }
const H = { icon: CreditCard, cls: 'bg-sky-500/20 border-sky-400 text-sky-200' }
const B = { icon: Fingerprint, cls: 'bg-emerald-500/20 border-emerald-400 text-emerald-200' }
const quiz = [
  { a: { ...K, name: 'كلمة المرور' }, b: { ...K, name: 'سؤال سري' }, ok: false, why: 'لا — كلاهما من فئة المعرفة' },
  { a: { ...K, name: 'كلمة المرور' }, b: { ...B, name: 'بصمة الإصبع' }, ok: true, why: 'نعم — المعرفة + السمات الحيوية' },
  { a: { ...H, name: 'بطاقة دخول' }, b: { ...B, name: 'بصمة الإصبع' }, ok: true, why: 'نعم — الحيازة + السمات الحيوية' },
]

const P = { icon: Smartphone, cls: H.cls }
const services = [
  { name: 'الخدمات المصرفية عبر الإنترنت', icon: Landmark, a: { ...K, name: 'كلمة المرور' }, b: { ...P, name: 'كلمة مرور لمرة واحدة' } },
  { name: 'وسائل التواصل الاجتماعي', icon: MessagesSquare, a: { ...K, name: 'كلمة المرور' }, b: { ...P, name: 'رسالة SMS' } },
  { name: 'الدخول إلى مبنى مؤمَّن', icon: Building2, a: { ...H, name: 'بطاقة دخول' }, b: { ...B, name: 'بصمة الإصبع' } },
  { name: 'التسوق الإلكتروني', icon: ShoppingCart, a: { ...K, name: 'كلمة المرور' }, b: { ...H, name: 'التحقق من بطاقة الائتمان' } },
]

// Security vs accessibility, rated 1–3 (the school-portal scenario from «فكّر كمهندس»)
const meters = [
  { key: 'sec', label: 'الأمان', on: 'bg-violet-400' },
  { key: 'acc', label: 'إمكانية الوصول', on: 'bg-sky-400' },
] as const
const options = [
  { name: 'كلمة مرور فقط', sec: 1, acc: 3, note: 'سهلة للجميع، لكن لو تسربت كلمة المرور دخل المحتال.' },
  { name: 'كلمة مرور + رمز لمرة واحدة عبر SMS', sec: 2, acc: 3, best: true, note: 'العامل الثاني يحمي الدرجات والمدفوعات، والرسالة تصل لأي هاتف ولو لم يكن ذكيًا، أو لهاتف ولي الأمر.' },
  { name: 'كلمة مرور + بصمة الإصبع', sec: 3, acc: 1, note: 'أمان عالٍ، لكنها تحتاج جهازًا بمستشعر بصمة لا يملكه كل الطلاب.' },
]
</script>

<style scoped>
.seq { opacity: 0; animation: seqIn .6s cubic-bezier(.2,.8,.2,1.1) var(--d, 0s) forwards; }
@keyframes seqIn { from { opacity: 0; transform: translateY(24px) scale(.96) } to { opacity: 1; transform: none } }

/* password dots type in */
.dots { display: inline-block; overflow: hidden; white-space: nowrap; width: 0; animation: type 1s steps(6) 1s forwards; }
@keyframes type { to { width: 7.5ch } }

/* stolen note flies toward the password field (to the left in this layout) */
.note { animation: fly 1.1s cubic-bezier(.5,0,.3,1) .5s forwards; }
@keyframes fly {
  0% { transform: rotate(-8deg) }
  100% { transform: translate(-360px, 150px) rotate(4deg) scale(.6); opacity: 0 }
}

.code-bad { animation: shakeX .45s ease 4.6s 2; }
.shake-x { animation-name: seqIn, shakeX; animation-duration: .6s, .45s; animation-delay: var(--d), calc(var(--d) + .6s); animation-iteration-count: 1, 2; }
@keyframes shakeX { 25% { transform: translateX(-8px) } 75% { transform: translateX(8px) } }

.factor {
  width: 250px; height: 220px; border-width: 3px; border-radius: 28px; background: rgba(15,23,42,.85);
  display: flex; flex-direction: column; align-items: center; justify-content: center; gap: .6rem;
}
.chip-sm { padding: .15rem .9rem; border-radius: 9999px; color: #fff; font-weight: 900; font-size: 1.1rem; }
.chip-f { display: inline-flex; align-items: center; gap: .5rem; padding: .45rem 1rem; border-radius: 9999px; border-width: 2px; font-size: 1.4rem; font-weight: 900; }

.card-def {
  max-width: 1000px; padding: 22px 36px; border-radius: 24px; background: rgba(15,23,42,.88);
  border: 2px solid rgba(167,139,250,.6); font-size: 32px; line-height: 1.7; font-weight: 900; color: #fff; text-align: center;
}
.hl { color: #c4b5fd; background: linear-gradient(transparent 62%, rgba(167,139,250,.28) 62%); }

/* rating meters fill in one segment at a time */
.seg { width: 44px; height: 14px; border-radius: 9999px; transform-origin: right; animation: segIn .35s ease backwards; }
@keyframes segIn { from { transform: scaleX(0) } }
.best { box-shadow: 0 0 50px rgba(52,211,153,.35); }
.star.seq { animation-name: starIn; }
@keyframes starIn { from { opacity: 0; transform: translate(-50%, -12px) scale(1.6) } to { opacity: 1; transform: translate(-50%, 0) } }

.frame-enter-active, .frame-leave-active { transition: opacity .35s ease; }
.frame-enter-from, .frame-leave-to { opacity: 0; }
</style>
