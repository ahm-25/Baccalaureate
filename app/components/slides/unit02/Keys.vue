<template>
  <!-- Encryption-keys chapter: symmetric vs public-key. `f` is the local frame (0..3).
       Browser on the right, server on the left (messages flow right → left, RTL). -->
  <div class="absolute inset-0" dir="rtl">
    <!-- Header -->
    <div class="absolute top-8 inset-x-0 flex flex-col items-center">
      <div class="flex items-center gap-3 text-5xl font-black text-white">
        <KeyRound class="w-12 h-12 text-amber-300" />
        {{ titles[f]?.title }}
      </div>
      <p class="mt-2 text-xl font-bold text-slate-400">{{ titles[f]?.sub }}</p>
    </div>

    <Transition name="frame" mode="out-in">
      <!-- ───── Scenes with the two parties (frames 0–2) ───── -->
      <div v-if="f <= 2" :key="`scene-${f}`" class="absolute inset-0" dir="ltr">
        <!-- server (left) -->
        <div class="absolute top-[230px] left-[70px] w-[240px] flex flex-col items-center">
          <div class="w-[170px] h-[170px] rounded-3xl bg-slate-800/80 border-2 border-indigo-400/50 flex items-center justify-center"
               :class="{ 'opened-glow': f === 0, 'opened-glow late': f === 2 }">
            <Server class="w-20 h-20 text-indigo-300" />
          </div>
          <span class="mt-3 text-2xl font-black text-white" dir="rtl">الخادم</span>
        </div>
        <!-- browser (right) -->
        <div class="absolute top-[230px] left-[970px] w-[240px] flex flex-col items-center">
          <div class="w-[170px] h-[170px] rounded-3xl bg-slate-800/80 border-2 border-sky-400/50 flex items-center justify-center">
            <Laptop class="w-20 h-20 text-sky-300" />
          </div>
          <span class="mt-3 text-2xl font-black text-white" dir="rtl">المتصفح</span>
        </div>
        <!-- wire -->
        <div class="absolute top-[314px] left-[310px] w-[660px] h-[4px] wire"></div>

        <!-- ── frame 0: one shared key ── -->
        <template v-if="f === 0">
          <div v-for="x in [190, 1090]" :key="x" class="seq key-chip absolute top-[168px] -translate-x-1/2 bg-amber-400 text-amber-950"
               :style="{ left: `${x}px`, '--d': x === 190 ? '.3s' : '.5s' }" dir="rtl">
            <KeyRound class="w-6 h-6" /> المفتاح المشترك
          </div>
          <div class="msg absolute top-[215px] msg-sym">
            <div class="relative w-[200px] h-[64px]">
              <div class="layer plain-seq bg-white text-slate-900 border-slate-300" dir="rtl">✉️ مرحبًا</div>
              <div class="layer cipher-seq bg-slate-950 text-amber-300 border-amber-400 font-mono" dir="ltr"><Lock class="w-5 h-5" /> #x9@Lq!</div>
            </div>
          </div>
          <div class="seq absolute top-[420px] left-1/2 -translate-x-1/2 flex items-center gap-4" style="--d: 4.6s" dir="rtl">
            <span class="badge border-amber-400 text-amber-200 bg-amber-500/15"><KeyRound class="w-6 h-6" /> مفتاح واحد للتشفير ولفك التشفير</span>
            <span class="badge border-emerald-400 text-emerald-200 bg-emerald-500/15"><Zap class="w-6 h-6" /> سريع وكفء</span>
          </div>
        </template>

        <!-- ── frame 1: how do we share that key? ── -->
        <template v-if="f === 1">
          <div class="key-chip absolute top-[168px] left-[1090px] -translate-x-1/2 bg-amber-400 text-amber-950" dir="rtl">
            <KeyRound class="w-6 h-6" /> المفتاح المشترك
          </div>
          <div class="key-travel key-chip absolute top-[290px] bg-amber-400 text-amber-950" dir="rtl">
            <KeyRound class="w-6 h-6" /> المفتاح المشترك
          </div>
          <div class="seq absolute top-[380px] left-[640px] -translate-x-1/2 flex items-center gap-4" style="--d: .4s" dir="rtl">
            <div class="flex flex-col items-center">
              <div class="w-20 h-20 rounded-full bg-rose-950 border-2 border-rose-500 flex items-center justify-center shadow-[0_0_30px_rgba(244,63,94,.5)]">
                <VenetianMask class="w-11 h-11 text-rose-400" />
              </div>
              <span class="mt-1 text-lg font-black text-rose-300">متطفل</span>
            </div>
            <div class="seq key-chip bg-amber-400/90 text-amber-950 copy-pulse" style="--d: 1.9s"><Copy class="w-5 h-5" /> نسخة من المفتاح!</div>
          </div>
          <div class="seq absolute top-[490px] left-1/2 -translate-x-1/2 rounded-2xl border-2 border-rose-400 bg-rose-500/15 px-5 py-2 text-2xl font-black text-rose-200 whitespace-nowrap" style="--d: 2.8s" dir="rtl">
            😈 أصبح معي المفتاح… أستطيع فك كل الرسائل!
          </div>
          <div class="seq absolute top-[180px] left-1/2 -translate-x-1/2 rounded-2xl bg-amber-400 text-amber-950 px-6 py-2 text-2xl font-black whitespace-nowrap" style="--d: 3.8s" dir="rtl">
            المشكلة: كيف نتبادل المفتاح المشترك بأمان؟
          </div>
        </template>

        <!-- ── frame 2: a public/private key pair ── -->
        <template v-if="f === 2">
          <!-- the server's pair -->
          <div class="seq absolute top-[160px] left-[190px] -translate-x-1/2 flex items-center gap-2" style="--d: .3s" dir="rtl">
            <span class="key-chip bg-emerald-400 text-emerald-950"><KeyRound class="w-6 h-6" /> المفتاح العام</span>
            <span class="key-chip bg-rose-500 text-white"><KeyRound class="w-6 h-6" /> الخاص <Lock class="w-4 h-4" /></span>
          </div>
          <div class="seq absolute top-[455px] left-[190px] -translate-x-1/2 text-center text-base font-bold text-slate-300 w-[380px]" style="--d: .6s" dir="rtl">
            <span class="text-emerald-300 font-black">العام</span> يمكن مشاركته ·
            <span class="text-rose-300 font-black">الخاص</span> يبقى سريًا
          </div>
          <!-- public key travels to the browser -->
          <div class="pub-travel key-chip absolute top-[160px] bg-emerald-400 text-emerald-950" dir="rtl">
            <KeyRound class="w-6 h-6" /> المفتاح العام
          </div>
          <!-- the message gets locked with it, then travels -->
          <div class="msg absolute top-[215px] msg-pub">
            <div class="relative w-[200px] h-[64px]">
              <div class="layer plain-pub bg-white text-slate-900 border-slate-300" dir="rtl">✉️ مرحبًا</div>
              <div class="layer locked-pub bg-slate-950 text-emerald-300 border-emerald-400" dir="rtl"><Lock class="w-5 h-5" /> مقفلة بالمفتاح العام</div>
              <div class="layer opened-pub bg-emerald-50 text-emerald-800 border-emerald-400" dir="rtl"><LockOpen class="w-5 h-5" /> مرحبًا ✓</div>
            </div>
          </div>
          <!-- eavesdropper also has the public key, but it can't open the box -->
          <div class="seq absolute top-[380px] left-[640px] -translate-x-1/2 flex items-center gap-4" style="--d: 1.6s" dir="rtl">
            <div class="flex flex-col items-center">
              <div class="w-20 h-20 rounded-full bg-slate-800 border-2 border-slate-500 flex items-center justify-center">
                <VenetianMask class="w-11 h-11 text-slate-400" />
              </div>
              <span class="mt-1 text-lg font-black text-slate-400">متطفل</span>
            </div>
            <div class="relative w-[330px] h-[72px]">
              <div class="layer bubble-a rounded-2xl border-2 border-slate-500 bg-slate-800/90 text-slate-200 text-lg">معي المفتاح العام أيضًا 😏</div>
              <div class="layer bubble-b rounded-2xl border-2 border-rose-400 bg-rose-500/15 text-rose-200 text-lg"><X class="w-5 h-5" /> لكنه لا يفتح القفل!</div>
            </div>
          </div>
          <div class="seq absolute top-[500px] left-1/2 -translate-x-1/2 rounded-2xl bg-rose-500 text-white px-6 py-2 text-2xl font-black whitespace-nowrap flex items-center gap-2" style="--d: 5.6s" dir="rtl">
            <KeyRound class="w-6 h-6" /> لا يفتحها إلا المفتاح الخاص للخادم
          </div>
        </template>
      </div>

      <!-- ───── Comparison (frame 3) ───── -->
      <div v-else key="compare" class="absolute inset-x-0 top-[128px] bottom-[110px] flex flex-col items-center justify-center">
        <div class="w-[1080px] rounded-3xl overflow-hidden border-2 border-white/10 bg-slate-900/85">
          <div class="grid grid-cols-[200px_1fr_1fr] text-2xl font-black">
            <span class="px-4 py-3"></span>
            <span class="px-4 py-3 flex items-center gap-2 text-amber-300 bg-amber-500/10"><KeyRound class="w-7 h-7" /> التشفير المتماثل</span>
            <span class="px-4 py-3 flex items-center gap-2 text-emerald-300 bg-emerald-500/10"><KeyRound class="w-7 h-7" /> التشفير بالمفتاح العام</span>
          </div>
          <div v-for="(r, i) in compareRows" :key="r.k"
               class="seq grid grid-cols-[200px_1fr_1fr] border-t border-white/10 text-[21px] font-bold leading-snug"
               :style="{ '--d': `${0.3 + i * 0.6}s` }">
            <span class="px-4 py-2.5 font-black text-slate-300">{{ r.k }}</span>
            <span class="px-4 py-2.5 text-white bg-amber-500/5">{{ r.sym }}</span>
            <span class="px-4 py-2.5 text-white bg-emerald-500/5">{{ r.pub }}</span>
          </div>
        </div>
        <div class="seq mt-5 flex items-center gap-3 px-6 py-2.5 rounded-2xl bg-sky-500/15 border-2 border-sky-400/60 text-2xl font-black text-sky-100" style="--d: 3s">
          <Handshake class="w-8 h-8 text-sky-300" /> لذلك يجمع TLS بين النوعين: كلٌّ في المكان الذي يناسبه
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { KeyRound, Server, Laptop, Lock, LockOpen, Zap, VenetianMask, Copy, X, Handshake } from 'lucide-vue-next'

defineProps<{ f: number }>()

const titles = [
  { title: 'التشفير المتماثل', sub: 'Symmetric Encryption' },
  { title: 'مشكلة توزيع المفتاح', sub: 'المفتاح المشترك يجب أن يصل للطرفين' },
  { title: 'التشفير بالمفتاح العام', sub: 'زوج من المفاتيح المرتبطة: عام + خاص' },
  { title: 'المقارنة', sub: 'لماذا يحتاج TLS إلى النوعين؟' },
]

const compareRows = [
  { k: 'المفاتيح', sym: 'مفتاح واحد مشترك بين الطرفين', pub: 'زوج مرتبط: عام يُشارَك، وخاص يبقى سريًا' },
  { k: 'السرعة', sym: '⚡ سريع وكفء مع البيانات الكبيرة', pub: '🐢 أبطأ؛ تبادل كل البيانات به بطيء' },
  { k: 'الميزة', sym: 'حماية كميات كبيرة من البيانات', pub: 'الاتفاق على الأسرار دون إرسال مفتاح سري مسبقًا' },
  { k: 'دوره في TLS', sym: 'تبادل البيانات بعد المصافحة', pub: 'المصافحة: المصادقة والاتفاق على مفاتيح الجلسة' },
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

.key-chip {
  display: inline-flex; align-items: center; gap: .4rem; padding: .35rem .9rem; border-radius: 9999px;
  font-size: 1.15rem; font-weight: 900; white-space: nowrap; box-shadow: 0 0 24px rgba(251,191,36,.35);
}
.badge { display: inline-flex; align-items: center; gap: .5rem; padding: .5rem 1.1rem; border-radius: 1rem; border-width: 2px; font-size: 1.4rem; font-weight: 900; white-space: nowrap; }

/* message card: stacked layers that swap during the frame */
.msg { left: 840px; z-index: 5; }
.layer {
  position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; gap: .5rem;
  border-width: 2px; border-radius: 1rem; font-size: 1.4rem; font-weight: 900; box-shadow: 0 10px 30px rgba(0,0,0,.35);
}

/* frame 0 — lock at the browser, travel, unlock at the server */
.msg-sym { animation: travelSym 2s cubic-bezier(.45,0,.25,1) 1.8s forwards; }
@keyframes travelSym { to { left: 340px } }
.plain-seq { animation: plainSym 4.8s linear forwards; }
@keyframes plainSym { 0%, 25% { opacity: 1 } 28%, 86% { opacity: 0 } 90%, 100% { opacity: 1 } }
.cipher-seq { opacity: 0; animation: cipherSym 4.8s linear forwards; }
@keyframes cipherSym { 0%, 25% { opacity: 0 } 28%, 86% { opacity: 1 } 90%, 100% { opacity: 0 } }
.opened-glow { animation: glow .8s ease 4.4s forwards; }
.opened-glow.late { animation-delay: 5.3s; }
@keyframes glow { to { border-color: #34d399; box-shadow: 0 0 40px rgba(52,211,153,.5) } }

/* frame 1 — the shared key itself crosses the wire */
.key-travel { left: 1010px; opacity: 0; animation: keyTravel 2.2s cubic-bezier(.45,0,.25,1) .7s forwards; }
@keyframes keyTravel { 0% { left: 1010px; opacity: 0 } 10% { opacity: 1 } 100% { left: 330px; opacity: 1 } }
.copy-pulse { box-shadow: 0 0 30px rgba(244,63,94,.6); }

/* frame 2 — public key goes to the browser, message locked, travels, opened */
.pub-travel { left: 120px; opacity: 0; animation: pubTravel 1.6s cubic-bezier(.45,0,.25,1) 1s forwards; }
@keyframes pubTravel { 0% { left: 120px; opacity: 0 } 10% { opacity: 1 } 100% { left: 1010px; opacity: 1 } }
.msg-pub { animation: travelPub 2s cubic-bezier(.45,0,.25,1) 3.2s forwards; }
@keyframes travelPub { to { left: 340px } }
.plain-pub { animation: fadeOut .3s ease 2.7s forwards; }
.locked-pub { opacity: 0; animation: fadeIn .3s ease 2.7s forwards, fadeOut .3s ease 5.3s forwards; }
.opened-pub { opacity: 0; animation: fadeIn .3s ease 5.3s forwards; }
.bubble-a { padding: 0 1rem; animation: fadeOut .3s ease 4s forwards; }
.bubble-b { padding: 0 1rem; opacity: 0; animation: fadeIn .3s ease 4s forwards; }
@keyframes fadeOut { to { opacity: 0 } }
@keyframes fadeIn { to { opacity: 1 } }

.frame-enter-active, .frame-leave-active { transition: opacity .35s ease; }
.frame-enter-from, .frame-leave-to { opacity: 0; }
</style>
