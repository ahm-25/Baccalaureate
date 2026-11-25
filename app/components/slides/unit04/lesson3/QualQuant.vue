<template>
  <!-- Qualitative vs quantitative evaluation.
       f = 0 the two "lenses" (book figure: qualitative = detailed understanding, quantitative = measuring with numbers),
       1 the book table (purpose + specific techniques), 2 classify four everyday situations. -->
  <div class="absolute inset-0">
    <SlidesTitle :icon="head.icon" :title="head.title" :sub="head.sub" />

    <Transition name="sl-frame" mode="out-in">
      <!-- ───── f0: two lenses ───── -->
      <div v-if="f === 0" key="lenses" class="absolute inset-0">
        <!-- qualitative lens (right) -->
        <div class="sl-pop absolute left-[800px] top-[150px] w-[260px] h-[260px]" style="--d: .4s">
          <div class="w-full h-full rounded-full border-[6px] border-violet-400 bg-gradient-to-br from-violet-950 to-slate-900 shadow-[0_0_60px_rgba(167,139,250,.35)] relative overflow-hidden">
            <span class="absolute left-[78px] top-[92px] text-[84px] leading-none">🧑‍💻</span>
            <span class="sl-pop absolute left-[30px] top-[40px]" style="--d: 1.2s"><span class="bob block text-[40px]">💬</span></span>
            <span class="sl-pop absolute left-[170px] top-[34px]" style="--d: 1.5s"><span class="bob bob-2 block text-[38px]">😊</span></span>
            <span class="sl-pop absolute left-[190px] top-[140px]" style="--d: 1.8s"><span class="bob block text-[36px]">😕</span></span>
            <span class="sl-pop absolute left-[26px] top-[150px]" style="--d: 2.1s"><span class="bob bob-2 block text-[36px]">❓</span></span>
          </div>
        </div>
        <!-- quantitative lens (left) -->
        <div class="sl-pop absolute left-[220px] top-[150px] w-[260px] h-[260px]" style="--d: 2.6s">
          <div class="w-full h-full rounded-full border-[6px] border-sky-400 bg-gradient-to-br from-sky-950 to-slate-900 shadow-[0_0_60px_rgba(56,189,248,.35)] relative overflow-hidden">
            <div class="absolute left-[46px] top-[70px] w-[100px] h-[120px] flex items-end gap-2">
              <span v-for="(h, i) in bars" :key="i" class="grow w-[14px] rounded-t bg-sky-400"
                    :style="{ height: `${h}px`, animationDelay: `${3.2 + i * 0.15}s` }"></span>
            </div>
            <div class="sl-pop absolute left-[160px] top-[80px]" style="--d: 4s">
              <div class="pie w-[64px] h-[64px] rounded-full"></div>
            </div>
            <div class="sl-fade absolute left-[150px] top-[160px] text-[26px] font-black font-mono text-emerald-300" style="--d: 4.3s">72%</div>
          </div>
        </div>
        <!-- the website in the middle -->
        <div class="sl-fade absolute left-[480px] top-[232px] w-[320px] flex items-center" style="--d: .2s">
          <span class="flex-1 h-[4px] sl-wire"></span>
          <span class="mx-3 w-[96px] h-[96px] rounded-full border-2 border-white/20 bg-slate-800 flex flex-col items-center justify-center">
            <span class="text-[40px] leading-none">🌐</span>
            <span class="text-[14px] font-black text-slate-200 mt-1" dir="rtl">الموقع</span>
          </span>
          <span class="flex-1 h-[4px] sl-wire"></span>
        </div>

        <!-- labels + definitions -->
        <div v-for="(c, i) in cols" :key="c.name" class="sl-in absolute top-[424px] w-[480px] text-center" :style="{ left: `${c.x}px`, '--d': `${1 + i * 2.4}s` }" dir="rtl">
          <div class="flex items-center justify-center gap-3">
            <span class="text-[30px] font-black" :class="c.text">{{ c.icon }} {{ c.name }}</span>
            <span class="sl-badge !text-[17px] !py-1" :class="c.chip">{{ c.focus }}</span>
          </div>
          <p class="mt-2 text-[20px] font-bold text-slate-100 leading-snug">{{ c.def }}</p>
        </div>
      </div>

      <!-- ───── f1: the book table ───── -->
      <div v-else-if="f === 1" key="table" class="absolute inset-0">
        <div class="absolute left-[70px] top-[148px] w-[1140px]" dir="rtl">
          <div class="sl-fade h-[46px] rounded-2xl bg-white/10 flex items-center px-5 text-[19px] font-black text-slate-200" style="--d: .2s">
            <span class="w-[200px] shrink-0">طريقة التقييم</span>
            <span class="w-[340px] shrink-0">الوصف (الغرض)</span>
            <span class="flex-1">تقنيات محددة</span>
          </div>
          <div v-for="(r, i) in table" :key="r.name" class="sl-in mt-3 h-[142px] rounded-3xl border-2 flex items-center px-5" :class="r.cls"
               :style="{ '--d': `${0.6 + i * 2.6}s` }">
            <div class="w-[200px] shrink-0 flex items-center gap-2">
              <span class="text-[38px]">{{ r.icon }}</span>
              <span class="text-[25px] font-black" :class="r.text">{{ r.name }}</span>
            </div>
            <p class="w-[340px] shrink-0 pl-5 text-[19px] font-bold text-white leading-snug">{{ r.purpose }}</p>
            <div class="flex-1 flex flex-col gap-2.5">
              <div v-for="(t, j) in r.techs" :key="t.name" class="sl-pop rounded-2xl bg-black/30 px-4 py-1.5 leading-snug"
                   :style="{ '--d': `${1.4 + i * 2.6 + j * 0.5}s` }">
                <span class="text-[18px] font-black" :class="r.text">{{ t.icon }} {{ t.name }}:</span>
                <span class="text-[17px] font-bold text-slate-200"> {{ t.desc }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="absolute top-[512px] inset-x-0 flex justify-center">
          <span class="sl-in sl-badge !text-[19px] border-white/20 bg-white/5 text-slate-100" style="--d: 6s" dir="rtl">
            🤝 قد تجمع الدراسة الواحدة بين النوعين
          </span>
        </div>
      </div>

      <!-- ───── f2: classify ───── -->
      <div v-else key="sort" class="absolute inset-0">
        <div class="absolute left-[80px] top-[150px] w-[1120px] grid grid-cols-2 gap-4" dir="rtl">
          <div v-for="(s, i) in sorts" :key="s.text" class="sl-in h-[160px] rounded-3xl border-2 border-white/10 bg-slate-900/85 flex items-center gap-4 px-5"
               :style="{ '--d': `${0.3 + i * 1.6}s` }">
            <span class="text-[50px] shrink-0">{{ s.icon }}</span>
            <p class="flex-1 text-[22px] font-bold text-white leading-snug">{{ s.text }}</p>
            <div class="relative w-[130px] h-[64px] shrink-0">
              <span class="sl-out absolute inset-0 rounded-2xl border-2 border-dashed border-slate-500 text-2xl font-black text-slate-500 flex items-center justify-center"
                    :style="{ '--d': `${1.1 + i * 1.6}s` }">؟</span>
              <span class="sl-pop absolute inset-0 rounded-2xl border-2 text-[22px] font-black flex items-center justify-center whitespace-nowrap"
                    :class="s.qual ? 'border-violet-300 bg-violet-600 text-white' : 'border-sky-300 bg-sky-600 text-white'"
                    :style="{ '--d': `${1.1 + i * 1.6}s` }">{{ s.qual ? '💬 نوعي' : '📊 كمي' }}</span>
            </div>
          </div>
        </div>
        <div class="absolute top-[505px] inset-x-0 flex justify-center gap-4" dir="rtl">
          <span class="sl-in sl-badge !text-[19px] border-violet-400/60 bg-violet-600/20 text-violet-100" style="--d: 7s">👀 مراقبة الناس وسؤالهم ← نوعي</span>
          <span class="sl-in sl-badge !text-[19px] border-sky-400/60 bg-sky-600/20 text-sky-100" style="--d: 7.5s">🔢 العدّ والقياس بالأرقام ← كمي</span>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import SlidesTitle from '~/components/slides/Title.vue'

const props = defineProps<{ f: number }>()

const bars = [40, 70, 55, 95, 80]

const cols = [
  { x: 690, name: 'التقييم النوعي', icon: '💬', text: 'text-violet-300', focus: 'الفهم التفصيلي',
    chip: 'border-violet-400/70 bg-violet-600/25 text-violet-100',
    def: 'يستخدم الملاحظة والمقابلات والأدلة الوصفية لفهم تجربة المستخدم والأسباب المحتملة.' },
  { x: 110, name: 'التقييم الكمي', icon: '📊', text: 'text-sky-300', focus: 'القياس بالأرقام',
    chip: 'border-sky-400/70 bg-sky-600/25 text-sky-100',
    def: 'يستخدم البيانات العددية والمقاييس المحددة لقياس السلوك والنتائج.' },
]

const table = [
  { name: 'التقييم النوعي', icon: '💬', cls: 'border-violet-400/60 bg-violet-950/45', text: 'text-violet-300',
    purpose: 'فهم تجربة المستخدم وأسباب السلوك والمشكلات من خلال الملاحظة والمقابلات وغيرها.',
    techs: [
      { icon: '🧪', name: 'اختبار قابلية الاستخدام', desc: 'مراقبة العمليات الفعلية لتحديد النقاط التي يصعب استخدامها.' },
      { icon: '🎤', name: 'المقابلات', desc: 'الاستماع إلى آراء المستخدمين المباشرة لفهم احتياجاتهم واستيائهم.' },
    ] },
  { name: 'التقييم الكمي', icon: '📊', cls: 'border-sky-400/60 bg-sky-950/45', text: 'text-sky-300',
    purpose: 'قياس السلوك والنتائج باستخدام بيانات عددية ومقاييس محددة بوضوح.',
    techs: [
      { icon: '📈', name: 'تحليلات الويب', desc: 'تحليل مؤشرات مثل عدد PV والوقت المُستغرق.' },
      { icon: '🆚', name: 'اختبار A/B', desc: 'مقارنة خيارين للتحقق من أيهما يؤدي إلى نتائج أفضل.' },
    ] },
]

const sorts = [
  { icon: '👀', text: 'مراقبة طالب وهو يحاول إيجاد جدول الامتحانات في موقع المدرسة.', qual: true },
  { icon: '🔢', text: 'إحصاء عدد مرات مشاهدة صفحة المنتجات خلال أسبوع.', qual: false },
  { icon: '🎤', text: 'سؤال العملاء في مقابلة عن سبب تركهم سلة التسوق.', qual: true },
  { icon: '🆚', text: 'مقارنة زرين للشراء بالأرقام لمعرفة أيهما يحقق نقرات أكثر.', qual: false },
]

const head = computed(() => [
  { icon: '🔍', title: 'التقييم النوعي والكمي', sub: 'فئتان رئيسيتان لطرق التقييم' },
  { icon: '📋', title: 'طرق التقييم وتقنياتها', sub: 'الوصف (الغرض) والتقنيات المحددة لكل طريقة' },
  { icon: '🧩', title: 'نوعي أم كمي؟', sub: 'صنّف كل موقف' },
][props.f]!)
</script>

<style scoped>
.grow { transform-origin: bottom; transform: scaleY(0); animation: grow .7s cubic-bezier(.2,.8,.2,1) forwards; }
@keyframes grow { to { transform: scaleY(1) } }
.pie { background: conic-gradient(#38bdf8 0 72%, #334155 72% 100%); }
.bob { animation: bob 2.6s ease-in-out infinite; }
.bob-2 { animation-delay: 1.3s; }
@keyframes bob { 0%, 100% { transform: translateY(0) } 50% { transform: translateY(-8px) } }
</style>
