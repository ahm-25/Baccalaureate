<template>
  <!-- A/B testing. f = 0 definition: visitors split randomly between A (red buy button) and B (blue), clicks compared,
       1 key point ① + stop & think: one clear difference vs a bundle of changes, 2 key point ②: metric and analysis plan
       first, then a sufficient sample, 3 the book's «الفكرة الرئيسة». -->
  <div class="absolute inset-0">
    <SlidesTitle :icon="head.icon" :title="head.title" :sub="head.sub" />

    <Transition name="sl-frame" mode="out-in">
      <!-- ───── f0: definition + split scene ───── -->
      <div v-if="f === 0" key="def" class="absolute inset-0">
        <div class="absolute top-[146px] inset-x-0 flex justify-center" dir="rtl">
          <div class="sl-in w-[1120px] rounded-2xl border-2 border-violet-400/60 bg-violet-950/40 px-6 py-2.5 text-[20px] font-bold text-slate-100 leading-snug text-center" style="--d: .2s">
            <span class="text-violet-300 font-black">اختبار <span dir="ltr" class="inline-block">A/B</span></span>: تجربة تقارن نسختين A و B وفق <span class="sl-hl-amber font-black">مقياس محدد مسبقًا</span>، ويُوزَّع المستخدمون أو الزيارات بينهما
            <span class="sl-hl-green font-black">بطريقة عشوائية قدر الإمكان</span> أو وفق تصميم تجربة مناسب.
          </div>
        </div>

        <!-- visitors -->
        <div class="sl-pop absolute left-[580px] top-[238px] w-[120px] flex flex-col items-center" style="--d: .9s" dir="rtl">
          <span class="text-[46px] leading-none">👥</span>
          <span class="text-[17px] font-black text-slate-200">الزوار</span>
        </div>
        <div class="sl-pop absolute left-[712px] top-[252px]" style="--d: 1.3s" dir="rtl">
          <span class="sl-badge !text-[16px] border-emerald-400/70 bg-emerald-600/25 text-emerald-100">🎲 توزيع عشوائي</span>
        </div>
        <svg class="sl-fade absolute inset-0 w-[1280px] h-[720px] pointer-events-none" style="--d: 1.3s" viewBox="0 0 1280 720">
          <line class="flow" x1="640" y1="306" x2="870" y2="340" stroke="#94a3b8" stroke-width="3" stroke-dasharray="10 8" />
          <line class="flow" x1="640" y1="306" x2="410" y2="340" stroke="#94a3b8" stroke-width="3" stroke-dasharray="10 8" />
        </svg>
        <span v-for="(d, i) in dots" :key="i" class="dot absolute w-[14px] h-[14px] rounded-full bg-sky-300" :class="d" :style="{ animationDelay: `${1.6 + i * 0.3}s` }"></span>

        <!-- versions -->
        <div v-for="(v, i) in versions" :key="v.k" class="sl-in absolute top-[342px] w-[260px]" :style="{ left: `${v.x}px`, '--d': `${1.6 + i * 0.4}s` }">
          <div class="relative h-[130px] rounded-2xl border-2 bg-slate-900 overflow-hidden" :class="v.border">
            <div class="h-[26px] bg-slate-700 flex items-center justify-between px-3" dir="rtl">
              <span class="text-[15px] font-black text-white">الخيار {{ v.k }}</span>
              <span class="flex gap-1"><span class="w-2 h-2 rounded-full bg-slate-400"></span><span class="w-2 h-2 rounded-full bg-slate-400"></span></span>
            </div>
            <div class="px-4 pt-3 flex gap-3" dir="rtl">
              <div class="w-[70px] h-[54px] rounded-lg bg-slate-700 flex items-center justify-center text-[26px]">👟</div>
              <div class="flex-1 flex flex-col gap-2">
                <div class="h-[8px] w-[110px] rounded bg-slate-600"></div>
                <div class="h-[8px] w-[80px] rounded bg-slate-700"></div>
                <div class="relative self-start">
                  <span class="px-3 py-1 rounded-lg text-[15px] font-black text-white whitespace-nowrap" :class="v.btn">اشترِ الآن</span>
                  <span class="tap absolute -bottom-5 -left-3 text-[22px]" :style="{ animationDuration: v.tap }">👆</span>
                </div>
              </div>
            </div>
          </div>
          <!-- clicks -->
          <div class="mt-3 h-[26px] rounded-full bg-slate-800 border border-white/10 overflow-hidden" dir="rtl">
            <div class="bar h-full rounded-full" :class="v.bar" :style="{ width: v.w }"></div>
          </div>
          <div class="mt-1 text-center text-[15px] font-black text-slate-300" dir="rtl">👆 النقرات على زر الشراء</div>
        </div>
        <div class="sl-pop absolute left-[540px] top-[474px] w-[200px] flex justify-center" style="--d: 3.4s" dir="rtl">
          <span class="sl-badge !text-[15px] border-amber-400/70 bg-amber-600/25 text-amber-100">📏 المقياس: النقرات</span>
        </div>
        <div class="absolute top-[532px] inset-x-0 flex justify-center" dir="rtl">
          <div class="sl-in text-[19px] font-bold text-slate-200" style="--d: 4.4s">
            <span class="text-slate-400">مثال:</span> قارن الخيار A بزر شراء <span class="text-rose-300 font-black">أحمر</span> والخيار B بزر شراء <span class="text-sky-300 font-black">أزرق</span> لمعرفة أيهما يحصل على نقرات أكثر.
          </div>
        </div>
      </div>

      <!-- ───── f1: one clear difference vs a bundle ───── -->
      <div v-else-if="f === 1" key="one" class="absolute inset-0" dir="rtl">
        <div class="absolute top-[146px] inset-x-0 flex justify-center">
          <div class="sl-in sl-card w-[1120px] border-amber-400/70 px-8 py-3 text-[23px] font-black text-white text-center leading-snug" style="--d: .2s">
            في اختبار <span dir="ltr" class="inline-block">A/B</span>، إذا أردت عزل أثر تغيير واحد، لماذا يُفضَّل أن يكون الفرق بين النسختين <span class="text-amber-300">واضحًا ومحددًا</span>؟
          </div>
        </div>
        <div class="absolute top-[250px] inset-x-0 flex justify-center gap-6">
          <div v-for="(p, i) in panels" :key="p.title" class="sl-in w-[540px] h-[312px] rounded-3xl border-2 px-6 py-4 flex flex-col items-center" :class="p.cls"
               :style="{ '--d': `${1 + i * 2.6}s` }">
            <div class="text-[24px] font-black" :class="p.head">{{ p.title }}</div>
            <div class="mt-3 h-[96px] flex items-end justify-center gap-8">
              <div v-for="b in p.btns" :key="b.k" class="flex flex-col items-center gap-2">
                <span class="w-[34px] h-[34px] rounded-full bg-slate-700 text-white text-[18px] font-black font-mono flex items-center justify-center">{{ b.k }}</span>
                <span class="rounded-xl font-black text-white whitespace-nowrap" :class="b.cls">{{ b.text }}</span>
              </div>
            </div>
            <div class="mt-4 flex gap-2">
              <span v-for="(t, j) in p.tags" :key="t" class="sl-pop sl-badge !text-[17px]" :class="p.tagCls" :style="{ '--d': `${2 + i * 2.6 + j * 0.3}s` }">{{ t }}</span>
            </div>
            <p class="sl-in mt-auto text-[20px] font-bold text-white text-center leading-snug" :style="{ '--d': `${2.8 + i * 2.6}s` }" v-html="p.result"></p>
          </div>
        </div>
      </div>

      <!-- ───── f2: metric first, then a sufficient sample ───── -->
      <div v-else-if="f === 2" key="sample" class="absolute inset-0" dir="rtl">
        <div class="absolute top-[146px] inset-x-0 flex justify-center">
          <div class="sl-in rounded-2xl border-2 border-white/15 bg-slate-900/80 px-7 py-2.5 text-[22px] font-bold text-slate-100" style="--d: .2s">
            ② حدّد <span class="sl-hl-amber font-black">المقياس وخطة التحليل</span> قبل الاختبار، ثم اجمع <span class="sl-hl-green font-black">عينة كافية</span> قبل الحكم.
          </div>
        </div>
        <div class="absolute top-[222px] inset-x-0 flex justify-center items-center">
          <template v-for="(s, i) in seq" :key="s">
            <span class="sl-in w-[196px] h-[60px] rounded-2xl border-2 flex items-center justify-center text-[19px] font-black text-white whitespace-nowrap" :class="seqCls[i]"
                  :style="{ '--d': `${0.8 + i * 0.5}s` }">{{ s }}</span>
            <span v-if="i < seq.length - 1" class="sl-fade w-[28px] text-center text-[24px] font-black text-slate-500" :style="{ '--d': `${1 + i * 0.5}s` }">←</span>
          </template>
        </div>
        <div class="absolute top-[306px] inset-x-0 flex justify-center gap-6">
          <!-- small sample -->
          <div class="sl-in w-[540px] h-[256px] rounded-3xl border-2 border-rose-400/60 bg-rose-950/35 px-6 py-3 flex flex-col items-center" style="--d: 3.6s">
            <div class="text-[23px] font-black text-rose-300">✗ عينة صغيرة</div>
            <div class="mt-2 flex items-center gap-6" dir="ltr">
              <div class="flex flex-col items-center"><span class="text-[30px] tracking-widest">🧑🧑🧑</span><span class="text-[16px] font-black text-slate-300 font-mono">A</span></div>
              <div class="relative w-[110px] h-[56px]">
                <span class="flip absolute inset-0 rounded-xl border-2 border-rose-300 bg-rose-600/50 flex items-center justify-center text-[20px] font-black text-white" style="animation-delay: 4.4s" dir="rtl">الفائز: A</span>
                <span class="flip absolute inset-0 rounded-xl border-2 border-sky-300 bg-sky-600/50 flex items-center justify-center text-[20px] font-black text-white" style="animation-delay: 5.2s" dir="rtl">الفائز: B</span>
              </div>
              <div class="flex flex-col items-center"><span class="text-[30px] tracking-widest">🧑🧑🧑</span><span class="text-[16px] font-black text-slate-300 font-mono">B</span></div>
            </div>
            <p class="sl-in mt-auto text-[20px] font-bold text-white text-center leading-snug" style="--d: 5.4s">«الفائز» يتغيّر من تجربة لأخرى… قد يكون الفرق <span class="text-rose-300 font-black">مجرد صدفة</span></p>
          </div>
          <!-- sufficient sample -->
          <div class="sl-in w-[540px] h-[256px] rounded-3xl border-2 border-emerald-400/60 bg-emerald-950/40 px-6 py-3 flex flex-col items-center" style="--d: 6.4s">
            <div class="text-[23px] font-black text-emerald-300">✓ عينة كافية</div>
            <div class="mt-2 flex items-center gap-5" dir="ltr">
              <div v-for="g in groups" :key="g.k" class="flex flex-col items-center">
                <div class="w-[150px] flex flex-wrap gap-[4px]">
                  <span v-for="n in 40" :key="n" class="w-[11px] h-[11px] rounded-full" :class="n <= g.hits ? g.on : 'bg-slate-600'"></span>
                </div>
                <span class="mt-1 text-[16px] font-black text-slate-300 font-mono">{{ g.k }}</span>
              </div>
            </div>
            <p class="sl-in mt-auto text-[20px] font-bold text-white text-center leading-snug" style="--d: 7.4s">بيانات كافية ← حكم <span class="text-emerald-300 font-black">يمكن الاعتماد عليه</span> وفق المقياس المحدد</p>
          </div>
        </div>
      </div>

      <!-- ───── f3: main idea ───── -->
      <div v-else key="idea" class="absolute inset-0" dir="rtl">
        <div class="absolute top-[150px] inset-x-0 flex justify-center">
          <p class="sl-in w-[1150px] text-center text-[28px] font-black text-white leading-snug" style="--d: .3s">
            لا تُبنى المواقع الإلكترونية الجيدة <span class="text-rose-300">مثالية من أول مرة</span>؛ بل <span class="sl-hl-green">تُحسَّن عبر حلقات متكررة</span>.
          </p>
        </div>
        <div class="absolute top-[250px] inset-x-0 flex justify-center gap-5">
          <div v-for="(t, i) in tools" :key="t.title" class="sl-in w-[350px] h-[190px] rounded-3xl border-2 px-5 py-4 flex flex-col items-center text-center" :class="t.cls"
               :style="{ '--d': `${1.2 + i * 1.2}s` }">
            <span class="text-[44px] leading-none">{{ t.icon }}</span>
            <div class="mt-2 text-[25px] font-black text-white">{{ t.title }}</div>
            <p class="mt-1 text-[19px] font-bold text-slate-200 leading-snug">{{ t.text }}</p>
          </div>
        </div>
        <div class="absolute top-[476px] inset-x-0 flex justify-center items-center gap-4">
          <span class="sl-in text-[26px] font-black text-slate-200" style="--d: 5s">كل تغيير:</span>
          <span v-for="(c, i) in traits" :key="c" class="sl-pop sl-badge !text-[24px] border-amber-300 bg-amber-500/25 text-white" :style="{ '--d': `${5.4 + i * 0.5}s` }">{{ c }}</span>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import SlidesTitle from '~/components/slides/Title.vue'

const props = defineProps<{ f: number }>()

const dots = ['dot-a', 'dot-b', 'dot-b', 'dot-a', 'dot-a', 'dot-b', 'dot-a', 'dot-b']
// A on the right (read first in RTL), B on the left
const versions = [
  { k: 'A', x: 740, border: 'border-rose-400/70', btn: 'bg-rose-600', bar: 'bg-rose-500', w: '55%', tap: '2.2s' },
  { k: 'B', x: 280, border: 'border-sky-400/70', btn: 'bg-sky-600', bar: 'bg-sky-500', w: '78%', tap: '1.5s' },
]

const panels = [
  { title: '✓ فرق واحد واضح ومحدد', cls: 'border-emerald-400/60 bg-emerald-950/40', head: 'text-emerald-300',
    btns: [
      { k: 'A', text: 'اشترِ الآن', cls: 'bg-rose-600 px-4 py-2 text-[18px]' },
      { k: 'B', text: 'اشترِ الآن', cls: 'bg-sky-600 px-4 py-2 text-[18px]' },
    ],
    tags: ['🎨 الفرق: اللون فقط'], tagCls: 'border-emerald-400/70 bg-emerald-600/25 text-emerald-50',
    result: 'أي فرق في النتيجة <span class="text-emerald-300 font-black">يرجع إلى هذا التغيير</span> ✓' },
  { title: '✗ حزمة تغييرات معًا', cls: 'border-rose-400/60 bg-rose-950/35', head: 'text-rose-300',
    btns: [
      { k: 'A', text: 'اشترِ الآن', cls: 'bg-rose-600 px-4 py-2 text-[18px]' },
      { k: 'B', text: 'أضف إلى السلة 🛒', cls: 'bg-sky-600 px-6 py-3.5 text-[23px]' },
    ],
    tags: ['🎨 اللون؟', '✏️ النص؟', '📏 الحجم؟'], tagCls: 'border-rose-400/70 bg-rose-600/25 text-rose-50',
    result: 'يقيس <span class="text-rose-300 font-black">أثر الحزمة</span> ولا يكشف أثر كل عنصر منفردًا' },
]

const seq = ['📏 حدّد المقياس', '📋 خطة التحليل', '▶️ شغّل الاختبار', '👥 عينة كافية', '⚖️ ثم احكم']
const seqCls = [
  'border-amber-400/70 bg-amber-950/45',
  'border-amber-400/70 bg-amber-950/45',
  'border-violet-400/70 bg-violet-950/45',
  'border-emerald-400/70 bg-emerald-950/45',
  'border-sky-400/70 bg-sky-950/45',
]
const groups = [
  { k: 'A', hits: 7, on: 'bg-rose-400' },
  { k: 'B', hits: 12, on: 'bg-sky-400' },
]

const tools = [
  { icon: '🔄', title: 'دورة PDCA', cls: 'border-sky-400/60 bg-sky-950/45', text: 'تكرر خطّط ← نفّذ ← تحقّق ← تصرّف' },
  { icon: '💡', title: 'التفكير التصميمي', cls: 'border-amber-400/60 bg-amber-950/35', text: 'يعمل من جانب المستخدم عبر خمس خطوات' },
  { icon: '🆎', title: 'اختبار A/B', cls: 'border-violet-400/60 bg-violet-950/45', text: 'يحسم الخيارات ببيانات حقيقية' },
]
const traits = ['🤏 صغير', '📏 مقاس', '🔁 ومتكرر']

const head = computed(() => {
  if (props.f === 0) return { icon: '🆎', title: 'اختبار A/B', sub: '3. مقارنة خيارين ببيانات حقيقية' }
  if (props.f === 1) return { icon: '💡', title: 'توقف وفكر', sub: 'النقطة ①: فرق واحد واضح ومحدد' }
  if (props.f === 2) return { icon: '📋', title: 'خطّط قبل أن تحكم', sub: 'النقطة ②: المقياس أولًا… ثم عينة كافية' }
  return { icon: '⭐', title: 'الفكرة الرئيسة', sub: '' }
})
</script>

<style scoped>
.flow { animation: flow 1s linear infinite; }
@keyframes flow { to { stroke-dashoffset: -18 } }

/* visitors flow from the crowd to A (right) or B (left) */
.dot { left: 633px; top: 299px; opacity: 0; }
.dot-a { animation: toA 1.4s ease-in infinite; }
.dot-b { animation: toB 1.4s ease-in infinite; }
@keyframes toA { 0% { left: 633px; top: 299px; opacity: 0 } 15% { opacity: 1 } 85% { opacity: 1 } 100% { left: 863px; top: 333px; opacity: 0 } }
@keyframes toB { 0% { left: 633px; top: 299px; opacity: 0 } 15% { opacity: 1 } 85% { opacity: 1 } 100% { left: 403px; top: 333px; opacity: 0 } }

.tap { opacity: 0; animation: tap 2s ease-in-out 2.4s infinite; }
@keyframes tap { 0%, 100% { opacity: 1; transform: translateY(6px) } 50% { opacity: 1; transform: translateY(-4px) scale(.9) } }

.bar { animation: bar 2.4s ease-out 2.6s both; }
@keyframes bar { from { width: 0 } }

.flip { opacity: 0; animation: flip 1.6s steps(1) infinite; }
@keyframes flip { 0% { opacity: 1 } 50% { opacity: 0 } 100% { opacity: 0 } }
</style>
