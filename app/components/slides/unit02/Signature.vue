<template>
  <!-- Digital-signature chapter. `f` is the local frame (0..5). Sender (school)
       on the right, receiver on the left, so messages flow right → left (RTL). -->
  <div class="absolute inset-0" dir="rtl">
    <!-- Header -->
    <div class="absolute top-8 inset-x-0 flex flex-col items-center">
      <div class="flex items-center gap-3 text-5xl font-black text-white">
        <Signature class="w-12 h-12 text-pink-300" />
        التوقيع الرقمي
      </div>
      <p class="mt-2 text-xl font-bold text-slate-400">سلامة البيانات وعدم التنصل</p>
    </div>

    <Transition name="frame" mode="out-in">
      <!-- ───── Travel scenes (frames 0 and 2) ───── -->
      <div v-if="f === 0 || f === 2" :key="`travel-${f}`" class="absolute inset-0" dir="ltr">
        <!-- receiver (left) -->
        <div class="absolute top-[230px] left-[70px] w-[240px] flex flex-col items-center">
          <div class="w-[170px] h-[170px] rounded-3xl bg-slate-800/80 border-2 border-sky-400/50 flex items-center justify-center"
               :class="f === 2 ? 'arrive-glow' : ''">
            <User class="w-20 h-20 text-sky-300" />
          </div>
          <span class="mt-3 text-2xl font-black text-white" dir="rtl">المستقبل</span>
          <span class="text-lg font-bold text-sky-300" dir="rtl">ولي الأمر</span>
          <div v-if="f === 0" class="seq absolute top-[250px] left-1/2 -translate-x-1/2 px-4 py-2 rounded-2xl bg-amber-400 text-amber-950 text-xl font-black whitespace-nowrap" style="--d: 4.6s" dir="rtl">
            هل هي أصلية؟ 🤔
          </div>
        </div>
        <!-- sender (right) -->
        <div class="absolute top-[230px] left-[970px] w-[240px] flex flex-col items-center">
          <div class="w-[170px] h-[170px] rounded-3xl bg-slate-800/80 border-2 border-pink-400/50 flex items-center justify-center">
            <GraduationCap class="w-20 h-20 text-pink-300" />
          </div>
          <span class="mt-3 text-2xl font-black text-white" dir="rtl">المرسل</span>
          <span class="text-lg font-bold text-pink-300" dir="rtl">إدارة المدرسة</span>
        </div>
        <!-- wire -->
        <div class="absolute top-[314px] left-[310px] w-[660px] h-[4px] wire"></div>

        <!-- travelling document -->
        <div class="doc absolute top-[200px]" :class="f === 0 ? 'doc-intercepted' : 'doc-direct'">
          <div class="relative w-[230px] rounded-2xl bg-white shadow-2xl border-2 border-slate-200 p-4" dir="rtl">
            <div class="flex items-center gap-2 text-lg font-black text-slate-700 mb-2"><FileText class="w-6 h-6 text-pink-500" /> نتيجة الطالب علي</div>
            <div class="relative h-9 text-2xl font-black">
              <span class="absolute inset-0 text-emerald-600" :class="{ 'swap-out': f === 0 }">النتيجة: ناجح ✅</span>
              <span v-if="f === 0" class="swap-in absolute inset-0 text-rose-600">النتيجة: راسب ❌</span>
            </div>
            <!-- attached signature -->
            <div v-if="f === 2" class="absolute -bottom-7 -right-7 w-[76px] h-[76px] rounded-full bg-gradient-to-br from-pink-400 to-fuchsia-600 border-4 border-white flex flex-col items-center justify-center text-white shadow-xl rotate-[-12deg]">
              <Signature class="w-7 h-7" />
              <span class="text-[10px] font-black">توقيع رقمي</span>
            </div>
          </div>
        </div>

        <!-- eavesdropper editing the document -->
        <div v-if="f === 0" class="seq absolute top-[380px] left-[640px] -translate-x-1/2 flex flex-col items-center" style="--d: 1.4s">
          <div class="w-20 h-20 rounded-full bg-rose-950 border-2 border-rose-500 flex items-center justify-center shadow-[0_0_30px_rgba(244,63,94,.5)]">
            <VenetianMask class="w-11 h-11 text-rose-400" />
          </div>
          <span class="mt-1 text-xl font-black text-rose-300" dir="rtl">محتال يغيّر المحتوى ✏️</span>
        </div>
      </div>

      <!-- ───── Signing pipeline (frame 1) ───── -->
      <div v-else-if="f === 1" key="sign" class="absolute inset-x-0 top-[140px] bottom-[110px] flex flex-col items-center justify-center">
        <div class="seq flex items-center gap-2 text-2xl font-black text-pink-200 mb-6" style="--d: .1s">
          <GraduationCap class="w-7 h-7" /> عند المرسل (إدارة المدرسة)
        </div>
        <div class="flex items-center gap-3">
          <template v-for="(b, i) in signChain" :key="i">
            <span v-if="i" class="seq text-4xl font-black text-slate-500" :style="{ '--d': `${0.3 + i * 0.7 - 0.2}s` }">←</span>
            <div class="seq box" :class="b.cls" :style="{ '--d': `${0.3 + i * 0.7}s` }">
              <component :is="b.icon" class="w-11 h-11" :class="[b.iconCls, b.spin ? 'spin' : '']" />
              <span class="text-xl font-black text-white text-center leading-snug">{{ b.title }}</span>
              <span class="text-base font-bold text-center" :class="b.subCls" :dir="b.ltr ? 'ltr' : 'rtl'">{{ b.sub }}</span>
            </div>
          </template>
        </div>
        <div class="seq mt-10 flex items-center gap-6 px-8 py-4 rounded-2xl bg-slate-900/85 border-2 border-pink-400/60" style="--d: 3.8s">
          <span class="text-3xl font-black font-mono text-pink-200" dir="ltr">Sign(Hash, PrKey)</span>
          <span class="w-px h-10 bg-white/15"></span>
          <span class="text-2xl font-black text-white">التوقيع = البصمة مشفّرة <span class="text-rose-300">بالمفتاح الخاص</span> للمرسل</span>
        </div>
      </div>

      <!-- ───── Verification (frames 3 and 4) ───── -->
      <div v-else-if="verify" :key="`verify-${f}`" class="absolute inset-x-0 top-[130px] bottom-[100px] flex flex-col items-center justify-center">
        <div class="seq flex items-center gap-2 text-2xl font-black text-sky-200 mb-5" style="--d: .1s">
          <User class="w-7 h-7" /> عند المستقبل: يتحقق من التوقيع
        </div>
        <div class="flex items-center gap-6">
          <!-- two lanes -->
          <div class="flex flex-col gap-5">
            <div v-for="(lane, li) in verify.lanes" :key="li" class="flex items-center gap-3">
              <template v-for="(b, i) in lane" :key="i">
                <span v-if="i" class="seq text-3xl font-black text-slate-500" :style="{ '--d': `${0.4 + li * 1.6 + i * 0.5 - 0.2}s` }">←</span>
                <div class="seq box-sm" :class="b.cls" :style="{ '--d': `${0.4 + li * 1.6 + i * 0.5}s` }">
                  <component :is="b.icon" class="w-8 h-8 shrink-0" :class="b.iconCls" />
                  <div class="flex flex-col leading-tight">
                    <span class="text-lg font-black text-white">{{ b.title }}</span>
                    <span class="text-base font-bold" :class="b.subCls" :dir="b.ltr ? 'ltr' : 'rtl'">{{ b.sub }}</span>
                  </div>
                </div>
              </template>
            </div>
          </div>
          <!-- both fingerprints feed the comparison -->
          <div class="flex flex-col gap-5 -mx-3">
            <span v-for="li in [0, 1]" :key="li" class="seq h-[92px] flex items-center text-3xl font-black text-slate-500"
                  :style="{ '--d': `${3.5 + li * 0.1}s` }">←</span>
          </div>
          <!-- compare -->
          <div class="seq compare flex flex-col items-center justify-center w-[190px] h-[230px] rounded-3xl border-4"
               :class="verify.ok ? 'border-emerald-400 bg-emerald-500/15' : 'border-rose-500 bg-rose-500/15 shake-x'" style="--d: 3.8s">
            <span class="text-2xl font-black font-mono text-white" dir="ltr">A7F3…</span>
            <component :is="verify.ok ? Equal : EqualNot" class="w-12 h-12 my-1" :class="verify.ok ? 'text-emerald-300' : 'text-rose-300'" />
            <span class="text-2xl font-black font-mono" :class="verify.ok ? 'text-white' : 'text-rose-300'" dir="ltr">{{ verify.ok ? 'A7F3…' : '9C21…' }}</span>
            <span class="mt-2 text-lg font-black" :class="verify.ok ? 'text-emerald-300' : 'text-rose-300'">{{ verify.ok ? 'متطابقتان' : 'غير متطابقتين' }}</span>
          </div>
        </div>
        <div class="seq mt-6 flex items-center gap-3 px-6 py-3 rounded-2xl text-2xl font-black"
             :class="verify.ok ? 'bg-emerald-500 text-white' : 'bg-rose-600 text-white'" style="--d: 4.6s">
          <component :is="verify.ok ? FileCheck : FileX" class="w-8 h-8" />
          {{ verify.ok ? 'المستند سليم ومن المرسل الحقيقي' : 'تم اكتشاف التلاعب! المستند غير موثوق' }}
        </div>
        <div v-if="!verify.ok" class="seq mt-3 text-xl font-bold text-slate-300 flex items-center gap-2" style="--d: 5.4s">
          <KeyRound class="w-6 h-6 text-rose-300" /> ولا يستطيع المحتال توقيعه من جديد، لأنه لا يملك المفتاح الخاص للمرسل.
        </div>
      </div>

      <!-- ───── Definition (frame 5) ───── -->
      <div v-else-if="f === 5" key="def" class="absolute inset-x-0 top-[128px] bottom-[100px] flex flex-col items-center justify-center">
        <div class="seq card-def mb-5" style="--d: .2s">
          <span class="text-pink-300">التوقيع الرقمي</span> يكشف التلاعب وانتحال الشخصية، ويوفر دليلًا يدعم عدم التنصل.
        </div>
        <div class="flex items-stretch gap-6">
          <div v-for="(p, i) in pillars" :key="p.title"
               class="seq w-[320px] rounded-3xl border-2 px-5 py-4 bg-slate-900/85 flex flex-col items-center text-center"
               :class="p.border" :style="{ '--d': `${0.9 + i * 0.6}s` }">
            <div class="w-16 h-16 rounded-2xl flex items-center justify-center mb-2" :class="p.bg">
              <component :is="p.icon" class="w-9 h-9 text-white" />
            </div>
            <span class="text-3xl font-black" :class="p.text">{{ p.title }}</span>
            <span class="mt-2 text-xl font-bold text-slate-300 leading-snug">{{ p.desc }}</span>
          </div>
        </div>
        <!-- how it differs from TLS -->
        <div class="seq mt-5 flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-slate-900/85 border-2 border-white/10 text-xl font-bold text-slate-200" style="--d: 3s">
          <Lock class="w-6 h-6 text-emerald-300 shrink-0" />
          <span><span class="text-emerald-300 font-black">TLS</span> يحمي البيانات أثناء النقل، أما <span class="text-pink-300 font-black">التوقيع الرقمي</span> فيُثبت التوقيع على بيانات أو رسائل محددة عندما يتطلب النظام ذلك.</span>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import {
  Signature, FileText, User, GraduationCap, VenetianMask, Hash, Fingerprint, KeyRound,
  LockOpen, Lock, Equal, EqualNot, FileCheck, FileX, UserCheck, Stamp,
} from 'lucide-vue-next'

const props = defineProps<{ f: number }>()

const signChain = [
  { icon: FileText, title: 'المستند', sub: 'النتيجة: ناجح', cls: 'border-slate-400', iconCls: 'text-slate-200', subCls: 'text-slate-400' },
  { icon: Hash, title: 'دالة التجزئة', sub: 'Hash', ltr: true, spin: false, cls: 'border-amber-400', iconCls: 'text-amber-300', subCls: 'text-amber-200' },
  { icon: Fingerprint, title: 'بصمة المستند', sub: 'A7F3…', ltr: true, cls: 'border-sky-400', iconCls: 'text-sky-300', subCls: 'text-sky-200 font-mono' },
  { icon: KeyRound, title: 'المفتاح الخاص للمرسل', sub: 'سري لا يملكه غيره', cls: 'border-rose-400', iconCls: 'text-rose-300', subCls: 'text-rose-200' },
  { icon: Signature, title: 'التوقيع الرقمي', sub: 'يُرفق بالمستند', cls: 'border-pink-400 bg-pink-500/20 shadow-[0_0_40px_rgba(244,114,182,.4)]', iconCls: 'text-pink-200', subCls: 'text-pink-200' },
]

const verify = computed(() => {
  if (props.f !== 3 && props.f !== 4) return null
  const ok = props.f === 3
  return {
    ok,
    lanes: [
      [
        { icon: Signature, title: 'التوقيع المرفق', sub: 'من المرسل', cls: 'border-pink-400', iconCls: 'text-pink-300', subCls: 'text-pink-200' },
        { icon: LockOpen, title: 'المفتاح العام للمرسل', sub: 'متاح للجميع', cls: 'border-emerald-400', iconCls: 'text-emerald-300', subCls: 'text-emerald-200' },
        { icon: Fingerprint, title: 'البصمة الأصلية', sub: 'A7F3…', ltr: true, cls: 'border-sky-400', iconCls: 'text-sky-300', subCls: 'text-sky-200 font-mono' },
      ],
      [
        { icon: FileText, title: 'المستند المستلم', sub: ok ? 'النتيجة: ناجح' : 'النتيجة: راسب', cls: ok ? 'border-slate-400' : 'border-rose-500 bg-rose-500/10', iconCls: ok ? 'text-slate-200' : 'text-rose-300', subCls: ok ? 'text-slate-400' : 'text-rose-300' },
        { icon: Hash, title: 'دالة التجزئة', sub: 'Hash', ltr: true, cls: 'border-amber-400', iconCls: 'text-amber-300', subCls: 'text-amber-200' },
        { icon: Fingerprint, title: 'البصمة المحسوبة', sub: ok ? 'A7F3…' : '9C21…', ltr: true, cls: ok ? 'border-sky-400' : 'border-rose-500', iconCls: ok ? 'text-sky-300' : 'text-rose-300', subCls: (ok ? 'text-sky-200' : 'text-rose-300') + ' font-mono' },
      ],
    ],
  }
})

const pillars = [
  { title: 'سلامة البيانات', desc: 'أي تغيير في المستند يغيّر البصمة فيُكتشف التلاعب', icon: FileCheck, border: 'border-sky-400/70', bg: 'bg-sky-500', text: 'text-sky-300' },
  { title: 'هوية الموقِّع', desc: 'يكشف انتحال الشخصية ويثبت مَن وقّع المستند', icon: UserCheck, border: 'border-emerald-400/70', bg: 'bg-emerald-500', text: 'text-emerald-300' },
  { title: 'عدم التنصل', desc: 'لا يستطيع المرسل إنكار التوقيع، لأنه تم بمفتاحه الخاص وحده', icon: Stamp, border: 'border-pink-400/70', bg: 'bg-pink-500', text: 'text-pink-300' },
]
</script>

<style scoped>
.seq { opacity: 0; animation: seqIn .6s cubic-bezier(.2,.8,.2,1.1) var(--d, 0s) forwards; }
@keyframes seqIn { from { opacity: 0; transform: translateY(24px) scale(.96) } to { opacity: 1; transform: none } }
/* items centred with -translate-x-1/2 must keep that offset while animating */
.seq.-translate-x-1\/2 { animation-name: seqInCenter; }
@keyframes seqInCenter { from { opacity: 0; transform: translate(-50%, 24px) scale(.96) } to { opacity: 1; transform: translate(-50%, 0) } }

.wire { background: repeating-linear-gradient(90deg, #64748b 0 14px, transparent 14px 24px); animation: dash 1s linear infinite; }
@keyframes dash { to { background-position: 24px 0 } }

/* document travel: x is the card's left edge (card is 230px wide) */
.doc { left: 760px; }
.doc-direct { animation: travelDirect 2.4s cubic-bezier(.45,0,.25,1) .6s forwards; }
@keyframes travelDirect { to { left: 330px } }
.doc-intercepted { animation: travelIntercept 4.4s ease-in-out .3s forwards; }
@keyframes travelIntercept {
  0% { left: 760px }
  30%, 62% { left: 525px }   /* stops above the eavesdropper */
  100% { left: 330px }
}
.swap-out { animation: fadeOut .3s ease 2.4s forwards; }
.swap-in { opacity: 0; animation: fadeIn .3s ease 2.5s forwards; }
@keyframes fadeOut { to { opacity: 0 } }
@keyframes fadeIn { to { opacity: 1 } }

.arrive-glow { animation: glow 1s ease 2.9s forwards; }
@keyframes glow { to { border-color: #34d399; box-shadow: 0 0 40px rgba(52,211,153,.5) } }

.box {
  width: 190px; height: 200px; border-width: 3px; border-radius: 24px; background: rgba(15,23,42,.88);
  display: flex; flex-direction: column; align-items: center; justify-content: center; gap: .5rem; padding: .75rem;
}
.box-sm {
  width: 250px; height: 92px; border-width: 3px; border-radius: 20px; background: rgba(15,23,42,.88);
  display: flex; align-items: center; gap: .75rem; padding: 0 1rem;
}
.spin { animation: spin 1.6s linear infinite; }
@keyframes spin { to { transform: rotate(360deg) } }

.shake-x { animation-name: seqIn, shakeX; animation-duration: .6s, .45s; animation-delay: var(--d), calc(var(--d) + .6s); animation-iteration-count: 1, 2; }
@keyframes shakeX { 25% { transform: translateX(-8px) } 75% { transform: translateX(8px) } }

.card-def {
  max-width: 1040px; padding: 22px 36px; border-radius: 24px; background: rgba(15,23,42,.88);
  border: 2px solid rgba(244,114,182,.6); font-size: 32px; line-height: 1.7; font-weight: 900; color: #fff; text-align: center;
}

.frame-enter-active, .frame-leave-active { transition: opacity .35s ease; }
.frame-enter-from, .frame-leave-to { opacity: 0; }
</style>
