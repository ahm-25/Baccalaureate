<template>
  <!-- Firewall chapter. f = 0 definition, 1 where a firewall can sit,
       2..4 a request checked against the rules top-down.
       Internet on the left, internal network on the right (as in the book's figures). -->
  <div class="absolute inset-0">
    <SlidesTitle icon="🧱" :title="f === 0 ? 'دور جدار الحماية' : f === 1 ? 'أين يوجد جدار الحماية؟' : 'جدار الحماية يفحص الطلب'"
                 :sub="f === 0 ? 'Firewall' : f === 1 ? 'ثلاثة مواضع في الشبكة نفسها' : cs?.sub" />

    <Transition name="sl-frame" mode="out-in">
      <!-- ───── f1: the three places ───── -->
      <div v-if="f === 1" key="places" class="absolute inset-0">
        <!-- Internet -->
        <div class="absolute left-[30px] top-[170px] w-[180px] h-[200px] rounded-3xl border-2 border-dashed border-slate-500/60 bg-slate-800/30" dir="rtl">
          <div class="absolute top-3 inset-x-0 text-center text-xl font-black text-slate-300">🌐 الإنترنت</div>
          <div class="absolute top-[70px] inset-x-0 flex flex-col items-center">
            <span class="text-6xl">🕵️</span>
            <span class="text-lg font-black text-rose-200 mt-1">مهاجم</span>
          </div>
        </div>

        <!-- ① edge firewall -->
        <div class="pl-wall left-[226px] top-[160px] h-[220px]" :class="{ 'pl-glow-1': true }"><BrickWall class="w-7 h-7 text-amber-100" /></div>
        <div class="pl-num left-[226px] top-[118px] sl-pop" style="--d: .6s">1</div>
        <div class="pl-bounce" style="--d: 1.1s">⚡</div>

        <!-- company network -->
        <div class="absolute left-[290px] top-[150px] w-[960px] h-[240px] rounded-3xl border-2 border-indigo-400/50 bg-indigo-950/30" dir="rtl">
          <div class="absolute top-2 right-6 text-xl font-black text-indigo-200">🏢 شبكة المؤسسة</div>
        </div>

        <!-- employees segment -->
        <div class="absolute left-[310px] top-[195px] w-[420px] h-[175px] rounded-2xl border-2 border-sky-400/40 bg-slate-900/60" dir="rtl">
          <div class="absolute top-2 inset-x-0 text-center text-lg font-black text-sky-200">قسم الموظفين</div>
          <div class="absolute top-[52px] inset-x-0 flex justify-center gap-12" dir="ltr">
            <div class="flex flex-col items-center"><span class="text-5xl">💻</span><span class="text-sm font-black text-slate-300 mt-1">جهاز 1</span></div>
            <div class="flex flex-col items-center"><span class="text-5xl">💻</span><span class="text-sm font-black text-slate-300 mt-1">جهاز 2</span></div>
            <!-- ③ host firewall -->
            <div class="relative flex flex-col items-center">
              <span class="text-5xl">💻</span>
              <span class="text-sm font-black text-slate-300 mt-1">جهاز 3</span>
              <span class="host-shield sl-pop absolute -top-3 -right-5" style="--d: 4.2s"><BrickWall class="w-5 h-5 text-amber-100" /></span>
            </div>
          </div>
        </div>
        <div class="pl-num left-[684px] top-[238px] sl-pop" style="--d: 4.2s">3</div>

        <!-- ② internal firewall between segments -->
        <div class="pl-wall left-[748px] top-[195px] h-[175px] pl-glow-2"><BrickWall class="w-7 h-7 text-amber-100" /></div>
        <div class="pl-num left-[748px] top-[153px] sl-pop" style="--d: 2.4s">2</div>

        <!-- servers segment -->
        <div class="absolute left-[810px] top-[195px] w-[420px] h-[175px] rounded-2xl border-2 border-emerald-400/40 bg-slate-900/60" dir="rtl">
          <div class="absolute top-2 inset-x-0 text-center text-lg font-black text-emerald-200">قسم الخوادم</div>
          <div class="absolute top-[52px] inset-x-0 flex justify-center gap-14">
            <div class="flex flex-col items-center"><span class="text-5xl">🗄️</span><span class="text-sm font-black text-slate-300 mt-1">قاعدة البيانات</span></div>
            <div class="flex flex-col items-center"><span class="text-5xl">🌐</span><span class="text-sm font-black text-slate-300 mt-1">خادم الويب</span></div>
          </div>
        </div>

        <!-- explanations -->
        <div class="absolute top-[408px] inset-x-0 flex justify-center gap-4" dir="rtl">
          <div v-for="(p, i) in placeCards" :key="p.title" class="sl-in w-[392px] rounded-2xl border-2 border-amber-400/60 bg-slate-900/85 px-5 py-3"
               :style="{ '--d': `${0.6 + i * 1.8}s` }">
            <div class="flex items-center gap-2 text-[22px] font-black text-amber-200 mb-1">
              <span class="w-8 h-8 rounded-full bg-amber-400 text-amber-950 text-lg flex items-center justify-center shrink-0">{{ i + 1 }}</span>
              {{ p.title }}
            </div>
            <p class="text-[18px] font-bold text-slate-100 leading-snug">{{ p.text }}</p>
          </div>
        </div>
      </div>

      <div v-else :key="f" class="absolute inset-0">
        <!-- Internet zone -->
        <div class="absolute left-[40px] top-[160px] w-[300px] h-[200px] rounded-3xl border-2 border-dashed border-slate-500/60 bg-slate-800/30">
          <div class="absolute top-3 inset-x-0 text-center text-xl font-black text-slate-300" dir="rtl">🌐 الإنترنت</div>
          <div v-if="f === 0" class="absolute top-[70px] inset-x-0 flex justify-center gap-6 text-6xl">
            <span>👤</span><span>🕵️</span>
          </div>
          <div v-else class="absolute top-[64px] inset-x-0 flex justify-center">
            <div class="sl-pop w-[100px] h-[100px] rounded-full bg-slate-700/80 border-2 border-slate-400 flex items-center justify-center text-6xl">{{ cs?.who }}</div>
          </div>
        </div>

        <!-- Wires -->
        <div class="absolute top-[268px] left-[340px] w-[260px] h-[4px] sl-wire"></div>
        <div class="absolute top-[268px] left-[670px] w-[230px] h-[4px] sl-wire"></div>
        <div v-if="cs?.allow" class="absolute top-[268px] left-[670px] w-[230px] h-[4px] sl-wire sl-wire-ok sl-fade" :style="{ '--d': `${tv}s` }"></div>

        <!-- The wall -->
        <div class="fw-wall absolute left-[600px] top-[150px] w-[70px] h-[220px] rounded-xl flex items-center justify-center"
             :class="cs ? (cs.allow ? 'fw-wall-ok' : 'fw-wall-bad') : ''" :style="{ '--tv': `${tv}s` }">
          <BrickWall class="w-10 h-10 text-amber-100" />
        </div>
        <div class="absolute left-[535px] top-[378px] w-[200px] text-center text-xl font-black text-amber-200" dir="rtl">جدار الحماية</div>

        <!-- Verdict stamp on the wall -->
        <div v-if="cs" class="absolute left-[595px] top-[220px] sl-pop" :style="{ '--d': `${tv}s` }">
          <div class="w-[80px] h-[80px] rounded-full flex items-center justify-center border-4 shadow-2xl"
               :class="cs.allow ? 'bg-emerald-500 border-emerald-200' : 'bg-rose-600 border-rose-200'">
            <component :is="cs.allow ? Check : X" class="w-12 h-12 text-white" stroke-width="3.5" />
          </div>
        </div>

        <!-- Internal network -->
        <div class="absolute left-[900px] top-[160px] w-[340px] h-[200px] rounded-3xl border-2 border-indigo-400/50 bg-indigo-950/40">
          <div class="absolute top-3 inset-x-0 text-center text-xl font-black text-indigo-200" dir="rtl">🏢 الشبكة الداخلية</div>
          <div v-for="(t, i) in targets" :key="t.name"
               class="absolute left-[30px] w-[280px] h-[44px] rounded-xl border-2 flex items-center justify-between px-4 text-lg font-black"
               :class="targetClass(i)" :style="{ top: `${40 + i * 54}px`, '--tv': `${tv + 1.1}s` }" dir="rtl">
            <span>{{ t.icon }} {{ t.name }}</span>
            <span v-if="cs && cs.target === i && !cs.allow" class="sl-fade text-sm text-emerald-300" :style="{ '--d': `${tv + 0.4}s` }">🛡️ محمي</span>
            <span v-if="cs && cs.target === i && cs.allow" class="sl-fade text-sm text-emerald-300" :style="{ '--d': `${tv + 1.1}s` }">✓ وصل</span>
          </div>
        </div>

        <!-- Packets -->
        <template v-if="f === 0">
          <div class="fw-packet fw-loop-pass bg-sky-500 border-sky-200">✉️</div>
          <div class="fw-packet fw-loop-block bg-rose-500 border-rose-200">✉️</div>
        </template>
        <div v-else class="fw-packet"
             :class="cs!.allow ? 'fw-pass bg-sky-500 border-sky-200' : 'fw-block bg-rose-500 border-rose-200'"
             :style="{ '--tv': `${tv}s`, '--ty': `${targetTop(cs!.target)}px` }">✉️</div>

        <!-- f0: definition + where a firewall can sit -->
        <div v-if="f === 0" class="absolute top-[420px] inset-x-0 flex flex-col items-center gap-4" dir="rtl">
          <div class="sl-in px-8 py-4 rounded-2xl bg-slate-900/80 border-2 border-amber-400/60 text-[26px] font-bold text-white" style="--d: .4s">
            <span class="sl-hl-amber font-black">جدار الحماية</span>: يراقب حركة مرور الشبكة ويسمح بها
            <span class="text-emerald-300">✓</span> أو يمنعها <span class="text-rose-300">✗</span> وفق قواعد أمنية
          </div>
          <div class="flex items-center gap-3">
            <span class="sl-in text-xl font-black text-slate-300" style="--d: 1.4s">📍 قد يوجد:</span>
            <span v-for="(p, i) in places" :key="p" class="sl-in sl-badge border-amber-400/70 text-amber-100 bg-amber-500/10 !text-xl"
                  :style="{ '--d': `${1.7 + i * 0.4}s` }">{{ p }}</span>
          </div>
        </div>

        <!-- f1..3: the rule table, scanned top-down -->
        <div v-else class="absolute top-[408px] left-[220px] w-[840px] flex flex-col gap-[6px]" dir="rtl">
          <div v-for="(r, i) in rules" :key="i"
               class="fw-rule h-[36px] rounded-xl border-2 border-slate-700 bg-slate-900/70 flex items-center gap-3 px-3 text-[17px] font-bold text-slate-200"
               :class="ruleClass(i)" :style="{ '--d': `${T0 + i * STEP}s` }">
            <span class="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center text-sm font-black shrink-0">{{ i + 1 }}</span>
            <span class="flex-1 truncate">{{ r.text }}</span>
            <span class="px-2.5 py-0.5 rounded-lg text-sm font-black shrink-0"
                  :class="r.allow ? 'bg-emerald-500/20 text-emerald-300' : 'bg-rose-500/20 text-rose-300'">
              {{ r.allow ? 'سماح ✓' : 'منع ✗' }}
            </span>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { BrickWall, Check, X } from 'lucide-vue-next'
import SlidesTitle from '~/components/slides/Title.vue'

const props = defineProps<{ f: number }>()

const rules = [
  { text: 'السماح لأي جهاز بفتح موقع المؤسسة على خادم الويب (HTTPS)', allow: true },
  { text: 'منع أي وصول خارجي مباشر إلى قاعدة البيانات', allow: false },
  { text: 'السماح للموظفين المتصلين عبر VPN بالوصول إلى الشبكة الداخلية', allow: true },
  { text: 'القاعدة الافتراضية: منع أي اتصال آخر', allow: false },
]
const targets = [
  { icon: '🌐', name: 'خادم الويب' },
  { icon: '🗄️', name: 'قاعدة البيانات' },
  { icon: '💻', name: 'جهاز داخلي' },
]
const cases = [
  { who: '👤', sub: 'زائر يفتح موقع المؤسسة', target: 0, rule: 0 },
  { who: '🕵️', sub: 'مهاجم يحاول الاتصال بقاعدة البيانات مباشرة', target: 1, rule: 1 },
  { who: '❓', sub: 'اتصال مجهول على منفذ غير معروف', target: 2, rule: 3 },
].map(c => ({ ...c, allow: rules[c.rule]!.allow }))
const places = ['عند حدود الشبكة', 'بين أجزائها', 'على جهاز مضيف']
const placeCards = [
  { title: 'عند حدود الشبكة', text: 'بين الإنترنت وشبكة المؤسسة، فيحمي الشبكة كلها من الاتصالات القادمة من الخارج.' },
  { title: 'بين أجزائها', text: 'يفصل قسمًا عن قسم داخل المؤسسة، فلو أُصيب جهاز في قسم الموظفين لا يصل بسهولة إلى الخوادم.' },
  { title: 'على جهاز مضيف', text: 'برنامج على الجهاز نفسه (مثل جدار حماية ويندوز)، يحمي هذا الجهاز وحده أينما كان.' },
]

const T0 = 1.7   // packet reaches the wall
const STEP = 0.75 // time spent on each rule
const cs = computed(() => (props.f >= 2 ? cases[props.f - 2] : undefined))
const tv = computed(() => (cs.value ? T0 + cs.value.rule * STEP + 0.6 : 0)) // verdict time

const targetTop = (i: number) => 160 + 40 + i * 54 - 4
const ruleClass = (i: number) => {
  const c = cs.value
  if (!c || i > c.rule) return ''
  if (i < c.rule) return 'fw-skip'
  return c.allow ? 'fw-hit-ok' : 'fw-hit-bad'
}
const targetClass = (i: number) => {
  const c = cs.value
  if (!c || c.target !== i) return 'border-slate-600 bg-slate-800/70 text-slate-200'
  return c.allow ? 'fw-target fw-target-ok' : 'fw-target'
}
</script>

<style scoped>
.fw-wall {
  background: repeating-linear-gradient(0deg, #b45309 0 24px, #78350f 24px 28px);
  border: 3px solid #fbbf24; box-shadow: 0 0 30px rgba(251,191,36,.35);
}
.fw-wall-ok { animation: wallOk .5s ease var(--tv) forwards; }
.fw-wall-bad { animation: wallBad .5s ease var(--tv) forwards; }
@keyframes wallOk { to { border-color: #34d399; box-shadow: 0 0 40px rgba(52,211,153,.7) } }
@keyframes wallBad { to { border-color: #fb7185; box-shadow: 0 0 40px rgba(244,63,94,.7) } }

.fw-packet {
  position: absolute; top: 244px; left: 224px; width: 52px; height: 52px; border-radius: 14px; border-width: 2px;
  display: flex; align-items: center; justify-content: center; font-size: 26px; opacity: 0; z-index: 5;
  box-shadow: 0 8px 24px rgba(0,0,0,.4);
}
@keyframes fwGo { from { left: 224px; opacity: 0 } 15% { opacity: 1 } to { left: 540px; opacity: 1 } }
.fw-pass { animation: fwGo 1.3s cubic-bezier(.45,0,.25,1) .3s forwards, fwPass 1.1s cubic-bezier(.45,0,.25,1) var(--tv) forwards; }
@keyframes fwPass { from { left: 540px; top: 244px; opacity: 1 } 80% { opacity: 1 } to { left: 905px; top: var(--ty); opacity: 0 } }
.fw-block { animation: fwGo 1.3s cubic-bezier(.45,0,.25,1) .3s forwards, fwBlock .9s ease var(--tv) forwards; }
@keyframes fwBlock { from { left: 540px; opacity: 1 } to { left: 400px; opacity: .35; filter: grayscale(1) } }

/* f0 ambience: one packet passes, one bounces, forever */
.fw-loop-pass { animation: loopPass 4.4s ease-in-out infinite; }
.fw-loop-block { animation: loopBlock 4.4s ease-in-out 2.2s infinite; }
@keyframes loopPass {
  0% { left: 224px; opacity: 0 } 8% { opacity: 1 } 40%, 55% { left: 540px; opacity: 1 }
  90% { left: 905px; opacity: 1 } 100% { left: 905px; opacity: 0 }
}
@keyframes loopBlock {
  0% { left: 224px; opacity: 0; filter: none } 8% { opacity: 1 } 40%, 55% { left: 540px; opacity: 1; filter: none }
  85% { left: 400px; opacity: .4; filter: grayscale(1) } 100% { left: 400px; opacity: 0 }
}

/* f1: where a firewall can sit */
.pl-wall {
  position: absolute; width: 42px; border-radius: .7rem; display: flex; align-items: center; justify-content: center; z-index: 2;
  background: repeating-linear-gradient(0deg, #b45309 0 22px, #78350f 22px 26px); border: 3px solid #fbbf24;
}
.pl-glow-1 { animation: plGlow .7s ease .6s 2 alternate; }
.pl-glow-2 { animation: plGlow .7s ease 2.4s 2 alternate; }
@keyframes plGlow { to { box-shadow: 0 0 40px rgba(251,191,36,.95); transform: scale(1.06) } }
.pl-num {
  position: absolute; width: 42px; height: 34px; border-radius: 9999px; z-index: 3;
  background: #fbbf24; color: #451a03; font-size: 1.3rem; font-weight: 900; display: flex; align-items: center; justify-content: center;
  box-shadow: 0 0 20px rgba(251,191,36,.6);
}
.host-shield {
  width: 30px; height: 30px; border-radius: .5rem; display: flex; align-items: center; justify-content: center;
  background: repeating-linear-gradient(0deg, #b45309 0 8px, #78350f 8px 10px); border: 2px solid #fbbf24;
  box-shadow: 0 0 18px rgba(251,191,36,.8);
}
.pl-bounce {
  position: absolute; top: 246px; left: 150px; width: 44px; height: 44px; border-radius: 9999px; z-index: 4;
  background: #e11d48; border: 3px solid #fecdd3; display: flex; align-items: center; justify-content: center;
  font-size: 1.2rem; opacity: 0; animation: plBounce 1.6s ease var(--d) forwards;
}
@keyframes plBounce {
  0% { left: 120px; opacity: 0 } 15% { opacity: 1 } 50% { left: 178px; opacity: 1 }
  100% { left: 110px; opacity: 0; filter: grayscale(1) }
}

/* rule scan */
.fw-skip { animation: skip .7s ease var(--d) forwards; }
@keyframes skip {
  0% { } 35% { border-color: #fbbf24; background: rgba(251,191,36,.18) }
  100% { border-color: #334155; background: rgba(15,23,42,.7); opacity: .5 }
}
.fw-hit-ok { animation: hitOk .5s ease var(--d) forwards; }
.fw-hit-bad { animation: hitBad .5s ease var(--d) forwards; }
@keyframes hitOk { to { border-color: #34d399; background: rgba(16,185,129,.28); transform: scale(1.03) } }
@keyframes hitBad { to { border-color: #fb7185; background: rgba(225,29,72,.28); transform: scale(1.03) } }

/* the requested target */
.fw-target { border-color: #fbbf24; background: rgba(120,53,15,.35); color: #fef3c7; }
.fw-target-ok { animation: targetOk .5s ease var(--tv) forwards; }
@keyframes targetOk { to { border-color: #34d399; background: rgba(6,78,59,.6); box-shadow: 0 0 24px rgba(52,211,153,.5) } }
</style>
