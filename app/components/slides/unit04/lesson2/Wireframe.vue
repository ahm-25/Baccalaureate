<template>
  <!-- Wireframe. f = 0 definition + the book image "a wireframe evolves into a complete final design",
       1 book figure 4.2.1 built block by block, 2 «توقف وفكر»: why place information before colours and fonts. -->
  <div class="absolute inset-0">
    <SlidesTitle :icon="titles[f]!.icon" :title="titles[f]!.title" :sub="titles[f]!.sub" />

    <Transition name="sl-frame" mode="out-in">
      <!-- ───── f0: definition + evolution ───── -->
      <div v-if="f === 0" key="def" class="absolute inset-0">
        <div class="absolute top-[148px] inset-x-0 flex justify-center">
          <div class="sl-in w-[1120px] rounded-3xl border-2 border-violet-400/70 bg-violet-950/45 px-7 py-3.5" style="--d: .3s" dir="rtl">
            <p class="text-[22px] font-bold text-slate-100 leading-relaxed">
              <span class="font-black text-white">المخطط الهيكلي <span class="font-mono text-violet-300" dir="ltr">(Wireframe)</span>:</span>
              مخطط أولي يساعد على تحديد <span class="sl-hl-amber font-black">أماكن العناصر وأولوياتها</span>. وغالبًا يستخدم تفاصيل بصرية قليلة حتى يركز الفريق على
              <span class="sl-hl-green font-black">البنية</span> قبل التصميم البصري النهائي.
            </p>
          </div>
        </div>

        <!-- three stages: wireframe (right) → final (left), as in the book image -->
        <div v-for="(s, i) in stages" :key="s.label" class="absolute top-[282px] w-[300px]" :style="{ left: `${s.x}px` }">
          <div class="sl-in" :style="{ '--d': `${1.6 + i * 1.6}s` }">
            <div class="h-[226px] rounded-2xl border-2 p-2.5 flex flex-col gap-2" :class="s.frame">
              <div class="h-[20px] rounded-md flex items-center justify-between px-2" :class="s.header">
                <span class="w-[46px] h-[7px] rounded" :class="s.ink"></span>
                <span class="w-[26px] h-[7px] rounded" :class="s.ink"></span>
              </div>
              <div class="relative h-[74px] rounded-lg overflow-hidden" :class="s.hero">
                <svg v-if="i === 0" class="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <line x1="0" y1="0" x2="100" y2="100" stroke="#94a3b8" stroke-width="1.5" vector-effect="non-scaling-stroke" />
                  <line x1="100" y1="0" x2="0" y2="100" stroke="#94a3b8" stroke-width="1.5" vector-effect="non-scaling-stroke" />
                </svg>
                <span v-else class="absolute top-[12px] right-[22px] w-[26px] h-[26px] rounded-full" :class="s.sun"></span>
                <span v-if="i > 0" class="absolute bottom-0 inset-x-0 h-[28px] rounded-t-[60%]" :class="s.hill"></span>
              </div>
              <div class="flex gap-2">
                <div v-for="(c, j) in s.cards" :key="j" class="flex-1 h-[52px] rounded-md" :class="c"></div>
              </div>
              <div class="flex flex-col gap-1.5 mt-auto">
                <span class="w-[85%] h-[6px] rounded" :class="s.ink"></span>
                <span class="w-[60%] h-[6px] rounded" :class="s.ink"></span>
              </div>
            </div>
            <div class="mt-2.5 text-center text-[19px] font-black whitespace-nowrap" :class="s.labelCls" dir="rtl">{{ s.label }}</div>
          </div>
        </div>
        <div v-for="(a, i) in [{ x: 820, d: 2.6 }, { x: 410, d: 4.2 }]" :key="i" class="sl-fade absolute top-[392px] w-[58px] h-[4px]"
             :style="{ left: `${a.x}px`, '--d': `${a.d}s` }">
          <div class="relative w-full h-full flow-l"><span class="ah ah-l"></span></div>
        </div>
      </div>

      <!-- ───── f1: figure 4.2.1 ───── -->
      <div v-else-if="f === 1" key="fig" class="absolute inset-0">
        <!-- what a wireframe shows / leaves out -->
        <div class="sl-in absolute left-[1000px] top-[160px] w-[220px] rounded-3xl border-2 border-white/15 bg-slate-900/85 px-5 py-4" style="--d: 4.2s" dir="rtl">
          <div class="text-[20px] font-black text-white mb-2">يُظهر:</div>
          <div class="text-[19px] font-bold text-emerald-300 whitespace-nowrap">✔ أماكن العناصر</div>
          <div class="text-[19px] font-bold text-emerald-300 whitespace-nowrap">✔ أولوياتها</div>
          <div class="text-[20px] font-black text-white mt-3 mb-2">يؤجّل:</div>
          <div class="text-[19px] font-bold text-slate-400 whitespace-nowrap">✖ الألوان</div>
          <div class="text-[19px] font-bold text-slate-400 whitespace-nowrap">✖ الخطوط</div>
          <div class="text-[19px] font-bold text-slate-400 whitespace-nowrap">✖ الزخارف</div>
        </div>
        <div class="sl-in absolute left-[60px] top-[200px] w-[220px] rounded-3xl border-2 border-dashed border-slate-500 bg-slate-900/50 px-4 py-5 flex flex-col items-center gap-3" style="--d: 5s" dir="rtl">
          <div class="flex gap-1.5">
            <span class="w-[30px] h-[30px] rounded-full bg-rose-400/40"></span>
            <span class="w-[30px] h-[30px] rounded-full bg-amber-400/40"></span>
            <span class="w-[30px] h-[30px] rounded-full bg-sky-400/40"></span>
            <span class="w-[30px] h-[30px] rounded-full bg-emerald-400/40"></span>
          </div>
          <div class="text-[20px] font-black text-slate-300 whitespace-nowrap">🎨 التصميم البصري</div>
          <div class="text-[18px] font-bold text-slate-400 whitespace-nowrap">⏳ لمرحلة لاحقة</div>
        </div>

        <!-- the wireframe -->
        <div class="absolute left-[300px] top-[150px] w-[680px] h-[346px] rounded-2xl border-[3px] border-dashed border-slate-300/80 bg-slate-950/40" dir="rtl">
          <div v-for="(b, i) in blocks" :key="b.t" class="absolute" :style="b.pos">
            <div class="sl-in w-full h-full rounded-xl flex flex-col items-center px-3" :class="b.cls" :style="{ '--d': `${0.3 + i * 0.7}s` }">
              <div class="flex items-center gap-2" :class="b.row ? 'h-full' : 'pt-2'">
                <span class="w-[26px] h-[26px] rounded-full bg-white text-slate-900 text-[15px] font-black flex items-center justify-center shrink-0">{{ i + 1 }}</span>
                <span class="text-[21px] font-black text-white whitespace-nowrap">{{ b.t }}</span>
                <span v-if="b.row" class="text-[16px] font-bold text-slate-200 whitespace-nowrap">{{ b.s }}</span>
              </div>
              <div v-if="!b.row" class="text-[15px] font-bold text-slate-200 text-center leading-snug">{{ b.s }}</div>
              <div v-if="b.lines" class="mt-2 w-full flex flex-col gap-2 px-2">
                <span v-for="w in b.lines" :key="w" class="h-[5px] rounded bg-white/25" :style="{ width: w }"></span>
              </div>
            </div>
          </div>
        </div>
        <div class="absolute top-[512px] inset-x-0 flex justify-center">
          <div class="sl-in rounded-2xl border-2 border-white/15 bg-slate-900/85 px-6 py-2.5 text-[20px] font-bold text-slate-100" style="--d: 3.8s" dir="rtl">
            تُظهر الإطارات السلكية <span dir="ltr" class="inline-block font-mono text-violet-300">(Wireframes)</span> الهيكل وتخطيط المعلومات، تاركةً التصميم البصري لمرحلة لاحقة.
          </div>
        </div>
      </div>

      <!-- ───── f2: stop and think ───── -->
      <div v-else key="think" class="absolute inset-0" dir="rtl">
        <!-- colours first -->
        <div class="sl-in absolute left-[655px] top-[158px] w-[555px] h-[300px] rounded-3xl border-2 border-rose-400/60 bg-rose-950/30 px-6 py-4 flex flex-col" style="--d: .4s">
          <div class="text-[23px] font-black text-white whitespace-nowrap">🎨 الألوان والخطوط أولًا</div>
          <div class="relative flex-1">
            <div class="absolute left-[200px] top-[58px] text-[64px] leading-none">🎨</div>
            <div v-for="(b, j) in tastes" :key="b.t" class="absolute" :style="{ left: `${b.x}px`, top: `${b.y}px` }">
              <div class="sl-pop px-3.5 py-1.5 rounded-2xl border-2 border-rose-300/60 bg-slate-800 text-[17px] font-black text-rose-100 whitespace-nowrap"
                   :style="{ '--d': `${1 + j * 0.4}s` }">{{ b.t }}</div>
            </div>
          </div>
          <div class="sl-pop self-center px-4 py-2 rounded-2xl border-2 border-rose-400 bg-rose-500/30 text-[18px] font-black text-rose-50 whitespace-nowrap" style="--d: 2.4s">
            ❌ تنجرف النقاشات نحو التفضيلات الشخصية في المظهر
          </div>
        </div>
        <!-- placement first -->
        <div class="sl-in absolute left-[70px] top-[158px] w-[555px] h-[300px] rounded-3xl border-2 border-emerald-400/60 bg-emerald-950/30 px-6 py-4 flex flex-col" style="--d: 3.4s">
          <div class="text-[23px] font-black text-white whitespace-nowrap">📐 مكان المعلومات وأولويتها أولًا</div>
          <div class="relative flex-1 flex items-center justify-center gap-8">
            <div class="w-[150px] h-[130px] rounded-xl border-2 border-dashed border-slate-400 p-2 flex flex-col gap-1.5">
              <span class="h-[16px] rounded bg-slate-500/70"></span>
              <span class="h-[10px] rounded bg-slate-600"></span>
              <div class="flex-1 flex gap-1.5"><span class="flex-[2] rounded bg-slate-500/40"></span><span class="flex-1 rounded bg-slate-500/60"></span></div>
              <span class="h-[14px] rounded bg-slate-500/70"></span>
            </div>
            <div class="sl-pop flex flex-col items-center" style="--d: 4.4s">
              <span class="text-[60px] leading-none">🤝</span>
              <span class="mt-1 text-[19px] font-black text-emerald-200 whitespace-nowrap">اتفاق</span>
            </div>
          </div>
          <div class="sl-pop self-center px-4 py-2 rounded-2xl border-2 border-emerald-400 bg-emerald-500/30 text-[19px] font-black text-emerald-50 whitespace-nowrap" style="--d: 5s">
            ✅ يسهُل على أصحاب المصلحة الوصول إلى اتفاق
          </div>
        </div>
        <div class="absolute top-[478px] inset-x-0 flex justify-center">
          <div class="sl-in w-[1140px] rounded-2xl border-2 border-violet-400/60 bg-violet-950/40 px-7 py-3 text-[20px] font-bold text-slate-100 leading-snug text-center" style="--d: 6.2s">
            باستخدام المخطط الهيكلي، يمكن النظر في <span class="sl-hl-amber font-black">«توزيع المعلومات ومواضعها»</span> بمعزل عن التصميم البصري.
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import SlidesTitle from '~/components/slides/Title.vue'

defineProps<{ f: number }>()

const titles = [
  { icon: '📐', title: 'المخطط الهيكلي', sub: 'Wireframe — أين توضع كل معلومة؟' },
  { icon: '🗂️', title: 'مثال على إطار هيكلي', sub: 'شكل 4.2.1 – مثال على إطار هيكلي' },
  { icon: '💡', title: 'توقف وفكر', sub: 'لماذا يُحدَّد مكان المعلومات (المخطط الهيكلي) قبل اختيار الألوان والخطوط؟' },
]

const stages = [
  {
    label: 'مخطط هيكلي أولي', x: 890, labelCls: 'text-slate-300',
    frame: 'border-slate-400 bg-slate-900/70', header: 'border-2 border-slate-500', hero: 'border-2 border-slate-500',
    ink: 'bg-slate-500', sun: '', hill: '',
    cards: ['border-2 border-slate-500', 'border-2 border-slate-500', 'border-2 border-slate-500', 'border-2 border-slate-500'],
  },
  {
    label: 'تفاصيل بصرية تدريجيًا', x: 490, labelCls: 'text-sky-200',
    frame: 'border-sky-300/60 bg-slate-100/90', header: 'bg-sky-200', hero: 'bg-sky-200',
    ink: 'bg-slate-400', sun: 'bg-amber-200', hill: 'bg-sky-300',
    cards: ['bg-slate-300', 'bg-teal-200', 'bg-amber-200', 'bg-slate-300'],
  },
  {
    label: 'تصميم نهائي متكامل', x: 90, labelCls: 'text-emerald-300',
    frame: 'border-sky-300 bg-white shadow-[0_0_50px_rgba(56,189,248,.45)]', header: 'bg-sky-700', hero: 'bg-gradient-to-br from-sky-400 to-teal-300',
    ink: 'bg-slate-500', sun: 'bg-amber-300', hill: 'bg-teal-600',
    cards: ['bg-amber-400', 'bg-teal-500', 'bg-orange-400', 'bg-sky-600'],
  },
]

/* figure 4.2.1 — sidebar on the right, main content on the left, as in the book */
const blocks = [
  { t: 'الرأس', s: '(الشعار / اسم الموقع)', row: true, cls: 'bg-slate-500/80', pos: { top: '14px', left: '14px', right: '14px', height: '60px' } },
  { t: 'التنقّل', s: '(القائمة)', row: true, cls: 'bg-slate-600', pos: { top: '84px', left: '14px', right: '14px', height: '46px' } },
  { t: 'المحتوى الرئيسي', s: '(المقالات، المنتجات، المعلومات الرئيسية)', row: false, lines: ['90%', '75%', '85%'], cls: 'bg-slate-400/35', pos: { top: '140px', left: '14px', width: '420px', height: '128px' } },
  { t: 'الشريط الجانبي', s: '(المعلومات ذات الصلة، الإعلانات)', row: false, lines: ['80%', '80%'], cls: 'bg-slate-500/55', pos: { top: '140px', right: '14px', width: '214px', height: '128px' } },
  { t: 'تذييل الصفحة', s: '(حقوق المؤلف، معلومات التواصل، الروابط ذات الصلة)', row: true, cls: 'bg-slate-500/70', pos: { top: '278px', left: '14px', right: '14px', height: '52px' } },
]

/* illustrative opinions (not book text) */
const tastes = [
  { t: '«الأزرق أجمل!»', x: 290, y: 8 },
  { t: '«بل الأخضر!»', x: 20, y: 30 },
  { t: '«هذا الخط أفضل!»', x: 300, y: 104 },
]
</script>

<style scoped>
.flow-l { background: repeating-linear-gradient(90deg, #c4b5fd 0 10px, transparent 10px 16px); animation: flowL .8s linear infinite; }
@keyframes flowL { to { background-position: -16px 0 } }
.ah { position: absolute; top: -6px; width: 0; height: 0; border-top: 8px solid transparent; border-bottom: 8px solid transparent; }
.ah-l { left: -10px; border-right: 12px solid #c4b5fd; }
</style>
