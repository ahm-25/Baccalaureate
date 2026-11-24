<template>
  <!-- How the three layers work together (book figure 3.1.2): searching for «حقيبة» in an online shop.
       f = 0 the user types the search and presses «ابحث», 1..6 the figure's six steps, the packet
       moving one hop per frame; f = 6 ends with the results on the user's screen. -->
  <div class="absolute inset-0">
    <SlidesTitle icon="🔁" title="كيف تعمل الطبقات الثلاث معًا؟"
                 :sub="f === 0 ? 'شكل 3.1.2 – مثال: البحث عن منتج في متجر إلكتروني' : `الخطوة ${f} من 6`" />

    <!-- nodes: user on the right, data layer on the left -->
    <div v-for="(n, i) in nodes" :key="n.label" class="absolute top-[150px] w-[190px] h-[112px]" :style="{ left: `${cx[i]! - 95}px` }">
      <div class="node" :class="active.includes(i) ? [n.on, 'ring-4 scale-105'] : 'border-slate-600 bg-slate-900/70'">
        <component :is="n.icon" class="w-9 h-9" :class="n.ico" />
        <span class="text-[20px] font-black" :class="active.includes(i) ? 'text-white' : 'text-slate-300'">{{ n.label }}</span>
      </div>
    </div>

    <!-- track -->
    <div class="absolute top-[290px] h-[4px] track" :style="{ left: `${cx[3]}px`, width: `${cx[0]! - cx[3]!}px` }"></div>

    <Transition name="sl-frame" mode="out-in">
      <div :key="f" class="absolute inset-0">
        <!-- packet -->
        <div v-if="s" class="packet absolute top-[272px] w-0 flex justify-center"
             :style="{ '--x0': `${cx[s.from]}px`, '--x1': `${cx[s.to]}px` }">
          <div class="whitespace-nowrap px-4 py-1.5 rounded-xl border-2 text-[19px] font-black shadow-xl" dir="rtl"
               :class="s.back ? 'border-emerald-400 bg-emerald-950 text-emerald-100' : 'border-violet-400 bg-violet-950 text-violet-100'">
            {{ s.packet }}
          </div>
        </div>

        <!-- what the user sees -->
        <div class="absolute left-[50px] top-[338px] w-[560px] h-[232px] rounded-2xl border-2 border-violet-400/60 bg-slate-900/90 overflow-hidden">
          <div class="h-[30px] bg-slate-800 flex items-center gap-1.5 px-3">
            <span class="w-2 h-2 rounded-full bg-rose-400"></span>
            <span class="w-2 h-2 rounded-full bg-amber-400"></span>
            <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span class="ml-2 w-[200px] h-[16px] rounded-md bg-slate-700/80 text-[11px] text-slate-400 font-mono flex items-center px-2">shop.example</span>
          </div>
          <div class="px-5 pt-3" dir="rtl">
            <div class="flex items-center gap-3">
              <div class="relative flex-1 h-[48px] rounded-xl border-2 border-slate-600 bg-slate-800 flex items-center px-4 gap-2 text-[22px] font-bold text-white">
                🔍 <span :class="{ typing: f === 0 }">{{ term }}</span>
              </div>
              <div class="relative">
                <span class="block px-5 py-2.5 rounded-xl bg-violet-500 text-white text-[20px] font-black" :class="{ press: f === 0 }">ابحث</span>
                <span v-if="f === 0" class="sl-pop absolute -bottom-6 -left-3 text-[30px]" style="--d: 2s">👆</span>
              </div>
            </div>
            <div class="mt-3">
              <div v-if="f === 0" class="sl-fade text-[19px] font-bold text-slate-400" style="--d: 2.6s">🖥️ الواجهة الأمامية تستقبل كلمات البحث…</div>
              <div v-else-if="f < 6" class="flex items-center gap-3 text-[19px] font-bold text-slate-400">
                <span class="spin inline-block">⏳</span> جارٍ البحث… الطلب يتنقل بين الطبقات
              </div>
              <div v-else>
                <p class="sl-fade text-[18px] font-black text-emerald-300 mb-1.5" style="--d: 1.4s">نتائج البحث عن «{{ term }}»:</p>
                <div v-for="(r, i) in results" :key="r.name" class="sl-in flex justify-between items-center rounded-xl bg-slate-800 border border-white/10 px-4 py-1 mb-1.5"
                     :style="{ '--d': `${1.8 + i * 0.4}s` }">
                  <span class="text-[20px] font-bold text-white">{{ r.icon }} {{ r.name }}</span>
                  <span class="text-[18px] font-black text-amber-300">{{ r.price }} ج.م</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- the six steps -->
        <div class="absolute left-[650px] top-[338px] w-[580px] flex flex-col gap-[5px]" dir="rtl">
          <div v-for="(st, i) in steps" :key="i" class="h-[34px] rounded-xl border-2 flex items-center gap-3 px-3 text-[18px] font-bold"
               :class="rowCls(i)">
            <span class="w-6 h-6 rounded-full flex items-center justify-center text-[14px] font-black shrink-0"
                  :class="i + 1 < f ? 'bg-emerald-500 text-slate-900' : i + 1 === f ? (st.back ? 'bg-emerald-400 text-slate-900' : 'bg-violet-400 text-slate-900') : 'bg-slate-700 text-slate-300'">
              {{ i + 1 < f ? '✓' : i + 1 }}
            </span>
            {{ st.short }}
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { User, Monitor, Server, Database } from 'lucide-vue-next'
import SlidesTitle from '~/components/slides/Title.vue'

const props = defineProps<{ f: number }>()

const term = 'حقيبة'
const cx = [1130, 830, 530, 230] // centres: user, front end, back end, data layer
const nodes = [
  { label: 'المستخدم', icon: User, ico: 'text-slate-200', on: 'border-slate-300 bg-slate-700/80 ring-slate-300/30' },
  { label: 'الواجهة الأمامية', icon: Monitor, ico: 'text-violet-300', on: 'border-violet-400 bg-violet-950/80 ring-violet-400/40' },
  { label: 'الواجهة الخلفية', icon: Server, ico: 'text-amber-300', on: 'border-amber-400 bg-amber-950/70 ring-amber-400/40' },
  { label: 'قاعدة البيانات', icon: Database, ico: 'text-sky-300', on: 'border-sky-400 bg-sky-950/80 ring-sky-400/40' },
]

// from / to are node indexes; the full sentence of each step is the deck's subtitle
const steps = [
  { from: 0, to: 1, short: 'الأمامية تستقبل كلمات البحث من المستخدم', packet: `🔤 «${term}»` },
  { from: 1, to: 2, short: 'الأمامية ترسل كلمات البحث إلى الخلفية', packet: `📨 طلب: «${term}»` },
  { from: 2, to: 3, short: 'الخلفية تطلب المنتجات المطابقة من طبقة البيانات', packet: '🔎 منتجات مطابقة؟' },
  { from: 3, to: 2, short: 'طبقة البيانات تعيد النتائج إلى الخلفية', packet: '📦 النتائج', back: true },
  { from: 2, to: 1, short: 'الخلفية تجهز النتائج وترسلها إلى الأمامية', packet: '📋 نتائج جاهزة', back: true },
  { from: 1, to: 0, short: 'الأمامية تعرض النتائج على شاشة المستخدم', packet: '🖥️ عرض النتائج', back: true },
]

const results = [
  { icon: '🎒', name: 'حقيبة مدرسية', price: 650 },
  { icon: '💼', name: 'حقيبة لابتوب', price: 900 },
]

const s = computed(() => (props.f >= 1 ? steps[props.f - 1]! : null))
const active = computed(() => (s.value ? [s.value.from, s.value.to] : [0, 1]))
const rowCls = (i: number) => {
  if (i + 1 === props.f) return steps[i]!.back ? 'border-emerald-400 bg-emerald-950/60 text-white' : 'border-violet-400 bg-violet-950/60 text-white'
  if (i + 1 < props.f) return 'border-emerald-700/50 bg-slate-900/50 text-slate-300'
  return 'border-slate-700 bg-slate-900/40 text-slate-500'
}
</script>

<style scoped>
.node {
  position: absolute; inset: 0; border-radius: 1.25rem; border-width: 2px; display: flex; flex-direction: column;
  align-items: center; justify-content: center; gap: .3rem; text-align: center; direction: rtl; transition: all .5s ease;
}
.track { background: repeating-linear-gradient(90deg, #475569 0 14px, transparent 14px 24px); }

.packet { left: var(--x0); animation: move 1.6s cubic-bezier(.5,0,.3,1) .6s forwards; }
@keyframes move { from { left: var(--x0) } to { left: var(--x1) } }

/* the search term is typed in right-to-left */
.typing { display: inline-block; clip-path: inset(0 0 0 100%); animation: type 1s steps(5) .5s forwards; }
@keyframes type { to { clip-path: inset(0 0 0 0) } }
.press { animation: press .3s ease 2.2s 1; }
@keyframes press { 50% { transform: scale(.9); filter: brightness(1.3) } }
.spin { animation: spin 1.2s linear infinite; }
@keyframes spin { to { transform: rotate(360deg) } }
</style>
