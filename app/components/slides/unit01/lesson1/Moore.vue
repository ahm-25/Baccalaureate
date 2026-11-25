<template>
  <!-- Moore's law. f = 0 definition + book figure 1.1.1 (transistors per chip, log scale, doubling ~2 years),
       1 the limits of shrinking and how performance keeps improving (multi-core, parallel, specialised; quantum is different). -->
  <div class="absolute inset-0">
    <SlidesTitle icon="📈" title="قانون مور" :sub="f === 0 ? 'الشكل 1.1.1 – قانون مور: عدد الترانزستورات عبر الزمن' : 'هل يستمر الاتجاه إلى الأبد؟'" />

    <Transition name="sl-frame" mode="out-in">
      <!-- ───── f0: the law + chart ───── -->
      <div v-if="f === 0" key="law" class="absolute inset-0">
        <div class="sl-in absolute left-[50px] top-[148px] w-[650px] h-[425px] rounded-3xl border-2 border-white/15 bg-slate-950/80" style="--d: .2s">
          <svg width="650" height="425" class="absolute inset-0">
            <!-- grid + axes -->
            <g v-for="e in 9" :key="e">
              <line :x1="X0" :x2="X1" :y1="yOf(e + 2)" :y2="yOf(e + 2)" stroke="#334155" stroke-width="1" />
              <text :x="X0 - 8" :y="yOf(e + 2) + 5" fill="#94a3b8" font-size="13" text-anchor="end" font-family="ui-monospace,monospace">10<tspan dy="-6" font-size="10">{{ e + 2 }}</tspan></text>
            </g>
            <g v-for="yr in [1970, 1980, 1990, 2000, 2010, 2020]" :key="yr">
              <line :x1="xOf(yr)" :x2="xOf(yr)" :y1="yOf(3)" :y2="yOf(3) + 6" stroke="#64748b" />
              <text :x="xOf(yr)" :y="yOf(3) + 22" fill="#94a3b8" font-size="13" text-anchor="middle" font-family="ui-monospace,monospace">{{ yr }}</text>
            </g>
            <text x="22" y="210" fill="#cbd5e1" font-size="13" font-weight="700" transform="rotate(-90 22 210)" text-anchor="middle" font-family="ui-monospace,monospace">Transistors per chip</text>
            <!-- doubling every ~2 years -->
            <line class="trend" :x1="xOf(1971)" :y1="yOf(trend(1971))" :x2="xOf(2023)" :y2="yOf(trend(2023))"
                  stroke="#fbbf24" stroke-width="3" stroke-dasharray="10 8" />
            <!-- actual processors -->
            <g v-for="(c, i) in chips" :key="c.name" class="pt" :style="{ '--d': `${1.4 + i * 0.6}s` }">
              <circle :cx="xOf(c.year)" :cy="yOf(Math.log10(c.n))" r="8" fill="#38bdf8" stroke="#0c4a6e" stroke-width="2" />
              <text :x="xOf(c.year) + (c.left ? -14 : 14)" :y="yOf(Math.log10(c.n)) - 4" fill="#f1f5f9" font-size="14" font-weight="800"
                    :text-anchor="c.left ? 'end' : 'start'" font-family="ui-monospace,monospace">{{ c.name }}</text>
              <text :x="xOf(c.year) + (c.left ? -14 : 14)" :y="yOf(Math.log10(c.n)) + 13" fill="#94a3b8" font-size="12"
                    :text-anchor="c.left ? 'end' : 'start'" font-family="ui-monospace,monospace">{{ c.label }}</text>
            </g>
          </svg>
          <div class="sl-fade absolute left-[90px] top-[18px] flex flex-col gap-1 rounded-lg bg-slate-900/90 border border-white/10 px-3 py-1.5 font-mono text-[13px] text-slate-300" style="--d: 1s">
            <span><span class="text-amber-300">- - -</span> Doubling every ~2 years</span>
            <span><span class="text-sky-400">●</span> Actual processors</span>
          </div>
        </div>

        <div class="absolute left-[730px] top-[148px] w-[490px] flex flex-col gap-3" dir="rtl">
          <div class="sl-in sl-card border-amber-400/60 px-6 py-4" style="--d: .5s">
            <p class="text-[22px] font-bold text-white leading-snug">
              <span class="sl-hl-amber font-black">قانون مور</span>: يصف اتجاهًا تاريخيًا لازدياد عدد الترانزستورات في الدوائر المتكاملة
              بمعدل يقارب <span class="text-amber-300 font-black">الضعف كل عامين</span>.
            </p>
          </div>
          <div class="sl-in rounded-2xl border-2 border-rose-400/60 bg-rose-950/40 px-5 py-2.5 text-[19px] font-black text-rose-100" style="--d: 2.4s">
            ⚠️ وهو ليس قانونًا فيزيائيًا ثابتًا
          </div>
          <div class="sl-in rounded-2xl border-2 border-sky-400/60 bg-sky-950/45 px-5 py-3" style="--d: 5.2s">
            <div class="flex items-center justify-between gap-2 font-mono font-black" dir="ltr">
              <span class="text-[22px] text-sky-200">2,300</span>
              <span class="text-[15px] text-slate-400">1971 ━━━━▶ 2022</span>
              <span class="text-[22px] text-emerald-300">114 billion</span>
            </div>
            <p class="mt-1 text-[17px] font-bold text-slate-200 text-center">ترانزستور على الشريحة الواحدة</p>
          </div>
          <div class="sl-in rounded-2xl border-2 border-emerald-400/60 bg-emerald-950/40 px-5 py-3 text-[19px] font-bold text-white leading-snug" style="--d: 6.4s">
            🚀 استمر هذا الاتجاه عقودًا، وأسهم في زيادة قدرات الحوسبة وتحسين أداء المعالجات.
          </div>
        </div>
      </div>

      <!-- ───── f1: limits ───── -->
      <div v-else key="limits" class="absolute inset-0" dir="rtl">
        <div class="absolute top-[150px] inset-x-0 flex justify-center items-stretch gap-3">
          <div class="sl-in w-[360px] rounded-3xl border-2 border-rose-400/60 bg-rose-950/35 px-6 py-5 flex flex-col items-center text-center" style="--d: .3s">
            <span class="text-[50px] leading-none">🔬</span>
            <div class="mt-2 text-[23px] font-black text-white">تصغير المكونات له حدود</div>
            <p class="mt-2 text-[18px] font-bold text-slate-200 leading-snug">يواجه استمرار تصغير مكوّنات الدوائر تحديات هندسية وفيزيائية، منها:</p>
            <div class="mt-3 flex flex-col gap-2 w-full">
              <span class="sl-pop sl-badge !text-[18px] justify-center border-rose-400/60 bg-rose-600/20 text-rose-100" style="--d: 1.2s">⚡ ازدياد تيارات التسرب</span>
              <span class="sl-pop sl-badge !text-[17px] !whitespace-normal justify-center border-rose-400/60 bg-rose-600/20 text-rose-100" style="--d: 1.6s">🌀 تأثيرات كمومية مثل النفق الكمومي</span>
            </div>
          </div>
          <span class="sl-fade self-center text-[40px] font-black text-slate-400" style="--d: 2.4s">◀</span>
          <div class="sl-in w-[360px] rounded-3xl border-2 border-emerald-400/60 bg-emerald-950/40 px-6 py-5 flex flex-col items-center text-center" style="--d: 2.6s">
            <!-- a chip with four cores -->
            <div class="grid grid-cols-2 gap-1.5 w-[84px] h-[84px] p-1.5 rounded-xl border-2 border-emerald-300 bg-emerald-900/50">
              <span v-for="n in 4" :key="n" class="core rounded-md bg-emerald-400/70" :style="{ '--d': `${3.2 + n * 0.25}s` }"></span>
            </div>
            <div class="mt-2 text-[23px] font-black text-white">فيعتمد تحسين الأداء أيضًا على</div>
            <div class="mt-3 flex flex-col gap-2 w-full">
              <span v-for="(w, i) in ways" :key="w" class="sl-pop sl-badge !text-[18px] justify-center border-emerald-400/60 bg-emerald-600/20 text-emerald-100"
                    :style="{ '--d': `${3.4 + i * 0.4}s` }">{{ w }}</span>
            </div>
          </div>
          <div class="sl-in w-[360px] rounded-3xl border-2 border-violet-400/60 bg-violet-950/40 px-6 py-5 flex flex-col items-center text-center" style="--d: 5.4s">
            <span class="text-[50px] leading-none">⚛️</span>
            <div class="mt-2 text-[23px] font-black text-white">أما الحوسبة الكمومية</div>
            <p class="mt-2 text-[19px] font-bold text-slate-200 leading-snug">فهي نهج مختلف قد يفيد في فئات محددة من المسائل،</p>
            <span class="sl-pop mt-3 sl-badge !text-[18px] !whitespace-normal justify-center border-amber-400/70 bg-amber-600/20 text-amber-100" style="--d: 6.6s">
              وليست بديلًا عامًا لكل الحواسيب التقليدية
            </span>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import SlidesTitle from '~/components/slides/Title.vue'

defineProps<{ f: number }>()

// plot area inside the 650x425 svg
const X0 = 90, X1 = 620, YT = 30, YB = 375
const xOf = (yr: number) => X0 + ((yr - 1968) / (2026 - 1968)) * (X1 - X0)
const yOf = (log: number) => YB - ((log - 3) / (11 - 3)) * (YB - YT)
const trend = (yr: number) => Math.log10(2300) + ((yr - 1971) / 2) * Math.log10(2)

// the processors plotted in figure 1.1.1
const chips = [
  { name: 'Intel 4004 (1971)', label: '2,300', year: 1971, n: 2300 },
  { name: 'Intel 8086 (1978)', label: '29,000', year: 1978, n: 29000 },
  { name: 'Intel 80486 (1989)', label: '1,200,000', year: 1989, n: 1.2e6 },
  { name: 'Pentium 4 (2000)', label: '42,000,000', year: 2000, n: 4.2e7 },
  { name: 'Core i7 (2010)', label: '1.17 billion', year: 2010, n: 1.17e9, left: true },
  { name: 'Apple M1 Ultra', label: '(2022) 114 billion', year: 2022, n: 1.14e11, left: true },
]

const ways = ['🧩 تعدد الأنوية', '🔀 المعالجة المتوازية', '🎯 تصميمات متخصصة']
</script>

<style scoped>
.trend { stroke-dashoffset: 0; opacity: 0; animation: trend 1.4s ease .8s forwards; }
@keyframes trend { from { opacity: 1; clip-path: inset(0 100% 0 0) } to { opacity: 1; clip-path: inset(0 0 0 0) } }
.pt { opacity: 0; animation: pt .4s ease var(--d) forwards; }
@keyframes pt { to { opacity: 1 } }
.core { opacity: .15; animation: core .4s ease var(--d) forwards; }
@keyframes core { to { opacity: 1; box-shadow: 0 0 10px rgba(52,211,153,.8) } }
</style>
