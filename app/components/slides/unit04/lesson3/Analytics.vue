<template>
  <!-- Web analytics. f = 0 definition + the book figure (a dashboard that tracks visits, bounce rate, conversions),
       1 PV on a sample one-day visit log, 2 bounce rate (one simple definition) and CVR on the same log,
       3 «توقف وفكر»: does counting visits tell you why people leave? -->
  <div class="absolute inset-0">
    <SlidesTitle :icon="head.icon" :title="head.title" :sub="head.sub" />

    <Transition name="sl-frame" mode="out-in">
      <!-- ───── f0: definition + dashboard ───── -->
      <div v-if="f === 0" key="def" class="absolute inset-0">
        <div class="absolute top-[148px] inset-x-0 flex justify-center">
          <div class="sl-in sl-card border-sky-400/60 w-[1100px] px-8 py-3.5 text-center" style="--d: .2s" dir="rtl">
            <p class="text-[22px] font-bold text-white leading-snug">
              <span class="sl-hl-amber font-black">تحليلات الويب</span>: جمع وقياس وتحليل بيانات استخدام الموقع لفهم الوصول والتفاعل والنتائج.
            </p>
            <p class="mt-1 text-[18px] font-bold text-slate-300 leading-snug">
              وهي إحدى أدوات <span class="text-sky-300 font-black">التقييم الكمي</span>، وتختلف أسماء المقاييس وطرق حسابها باختلاف الأداة وإعداداتها.
            </p>
          </div>
        </div>
        <!-- dashboard mock -->
        <div class="sl-in absolute left-[190px] top-[262px] w-[900px] h-[252px] rounded-3xl border-2 border-white/15 bg-slate-900/90 overflow-hidden" style="--d: 1.4s">
          <div class="h-[34px] bg-white/5 flex items-center gap-2 px-4">
            <span class="w-3 h-3 rounded-full bg-rose-400"></span>
            <span class="w-3 h-3 rounded-full bg-amber-400"></span>
            <span class="w-3 h-3 rounded-full bg-emerald-400"></span>
            <span class="ml-3 text-[15px] font-bold text-slate-400 font-mono">analytics / dashboard</span>
          </div>
          <div class="flex gap-4 px-5 pt-4" dir="rtl">
            <div v-for="(t, i) in tiles" :key="t.name" class="sl-pop flex-1 h-[190px] rounded-2xl border-2 px-4 pt-3 flex flex-col" :class="t.cls"
                 :style="{ '--d': `${2.2 + i * 1}s` }">
              <div class="text-[21px] font-black text-white whitespace-nowrap">{{ t.icon }} {{ t.name }}</div>
              <div class="text-[15px] font-bold text-slate-400 font-mono" dir="ltr">{{ t.en }}</div>
              <div class="mt-auto mb-3 h-[86px] flex items-end gap-2" dir="ltr">
                <span v-for="(h, j) in t.bars" :key="j" class="grow flex-1 rounded-t" :class="t.bar"
                      :style="{ height: `${h}px`, animationDelay: `${2.6 + i * 1 + j * 0.1}s` }"></span>
              </div>
            </div>
          </div>
        </div>
        <p class="sl-fade absolute top-[526px] inset-x-0 text-center text-[18px] font-bold text-slate-400" style="--d: 5.4s" dir="rtl">
          التحليلات ترصد الزيارات، ومعدل الارتداد، والتحويلات.
        </p>
      </div>

      <!-- ───── f1: PV ───── -->
      <div v-else-if="f === 1" key="pv" class="absolute inset-0">
        <!-- visit log (right) -->
        <div class="absolute left-[600px] top-[148px] w-[600px]" dir="rtl">
          <div class="sl-fade text-[19px] font-black text-slate-300 mb-2" style="--d: .2s">📒 سجل زيارات تجريبي ليوم واحد</div>
          <div v-for="(s, i) in sessions" :key="i" class="sl-in h-[48px] mb-2 rounded-2xl border-2 border-white/10 bg-slate-900/85 flex items-center gap-3 px-4"
               :style="{ '--d': `${0.4 + i * 0.55}s` }">
            <span class="w-[86px] shrink-0 text-[19px] font-black" :class="s.who === 'سارة' ? 'text-amber-300' : 'text-white'">👤 {{ s.who }}</span>
            <div class="flex-1 flex gap-1.5">
              <span v-for="p in s.pages" :key="p" class="sl-pop w-[30px] h-[34px] rounded-md bg-sky-500/30 border border-sky-300/70 flex items-center justify-center text-[16px]"
                    :style="{ '--d': `${0.7 + i * 0.55 + p * 0.12}s` }">📄</span>
            </div>
            <span class="text-[19px] font-black text-sky-300 font-mono" dir="ltr">+{{ s.pages }}</span>
          </div>
        </div>
        <!-- explanation (left) -->
        <div class="sl-in absolute left-[80px] top-[160px] w-[470px] sl-card border-sky-400/60 px-6 py-5" style="--d: .3s" dir="rtl">
          <div class="text-[27px] font-black text-sky-300">👁️ PV (مشاهدات الصفحة)</div>
          <p class="mt-1 text-[19px] font-bold text-slate-200">العدد الإجمالي لمرات مشاهدة الصفحة.</p>
          <div class="sl-pop mt-4 rounded-2xl bg-sky-500/20 border-2 border-sky-300 py-2 text-center text-[30px] font-black font-mono text-white" style="--d: 4.4s" dir="ltr">
            PV = 4+1+2+3+1+1 = 12
          </div>
          <div class="sl-in mt-4 flex items-center gap-3 text-[20px] font-black text-amber-200" style="--d: 5.4s">
            <span class="text-[30px]">👥</span>
            <span>عدد الأشخاص الفريدين = <span dir="ltr" class="inline-block">5</span> فقط (سارة زارت مرتين)</span>
          </div>
          <p class="sl-in mt-3 rounded-2xl bg-black/30 px-4 py-2 text-[18px] font-bold text-slate-100 leading-snug" style="--d: 6.4s">
            ⚠️ يقيس إجمالي مرات المشاهدة، وقد يشمل مشاهدات متكررة؛ ولا يساوي عدد الأشخاص الفريدين.
          </p>
        </div>
      </div>

      <!-- ───── f2: bounce rate + CVR ───── -->
      <div v-else-if="f === 2" key="rates" class="absolute inset-0">
        <div class="absolute left-[600px] top-[148px] w-[600px]" dir="rtl">
          <div class="text-[19px] font-black text-slate-300 mb-2">📒 السجل نفسه: <span dir="ltr" class="inline-block">6</span> جلسات</div>
          <div v-for="(s, i) in sessions" :key="i" class="h-[48px] mb-2 rounded-2xl border-2 border-white/10 bg-slate-900/85 flex items-center gap-3 px-4">
            <span class="w-[86px] shrink-0 text-[19px] font-black text-white">👤 {{ s.who }}</span>
            <div class="flex-1 flex gap-1.5">
              <span v-for="p in s.pages" :key="p" class="w-[30px] h-[34px] rounded-md bg-sky-500/30 border border-sky-300/70 flex items-center justify-center text-[16px]">📄</span>
            </div>
            <span v-if="s.pages === 1" class="sl-pop sl-badge !text-[16px] !py-1 border-rose-400 bg-rose-600/30 text-rose-50"
                  :style="{ '--d': `${0.8 + i * 0.3}s` }">↩️ صفحة واحدة</span>
            <span v-if="s.bought" class="sl-pop sl-badge !text-[16px] !py-1 border-emerald-400 bg-emerald-600/30 text-emerald-50"
                  :style="{ '--d': `${4 + i * 0.3}s` }">🛒 شراء</span>
          </div>
        </div>
        <div v-for="(r, i) in rates" :key="r.name" class="sl-in absolute left-[70px] w-[505px] h-[196px] rounded-3xl border-2 px-6 py-3" :class="r.cls"
             :style="{ top: `${148 + i * 206}px`, '--d': `${r.d}s` }" dir="rtl">
          <div class="flex items-center gap-3">
            <span class="text-[24px] font-black" :class="r.text">{{ r.icon }} {{ r.name }}</span>
            <span v-if="r.tag" class="sl-badge !text-[14px] !py-0.5 border-white/20 bg-white/5 text-slate-200">{{ r.tag }}</span>
          </div>
          <div class="mt-1 flex items-center gap-3">
            <span class="text-[28px] font-black font-mono text-white whitespace-nowrap" dir="ltr">{{ r.formula }}</span>
            <span class="text-[16px] font-bold text-slate-300 leading-snug">{{ r.how }}</span>
          </div>
          <p class="mt-1.5 text-[16px] font-bold text-slate-100 leading-snug">{{ r.note }}</p>
        </div>
      </div>

      <!-- ───── f3: stop and think ───── -->
      <div v-else key="think" class="absolute inset-0">
        <!-- the page people leave -->
        <div class="sl-in absolute left-[545px] top-[160px] w-[190px] h-[170px] rounded-2xl border-2 border-white/20 bg-slate-800 overflow-hidden" style="--d: .2s">
          <div class="h-[22px] bg-white/10"></div>
          <div class="p-3 flex flex-col gap-2">
            <span class="h-[12px] w-[120px] rounded bg-slate-600"></span>
            <span class="h-[40px] rounded bg-slate-700"></span>
            <span class="h-[10px] w-[90px] rounded bg-slate-600"></span>
          </div>
          <span class="walk absolute top-[96px] text-[34px]">🚶</span>
          <span class="walk walk-2 absolute top-[96px] text-[34px]">🚶</span>
          <span class="walk walk-3 absolute top-[96px] text-[34px]">🚶</span>
        </div>
        <div class="sl-fade absolute left-[545px] top-[338px] w-[190px] text-center text-[16px] font-bold text-slate-400" style="--d: .6s" dir="rtl">الزوار يغادرون الصفحة…</div>

        <!-- counting (left) -->
        <div class="sl-in absolute left-[80px] top-[160px] w-[430px] h-[230px] rounded-3xl border-2 border-sky-400/70 bg-sky-950/50 px-6 py-4" style="--d: 1s" dir="rtl">
          <div class="text-[24px] font-black text-sky-300">📊 عدّ الزيارات (كمي)</div>
          <div class="mt-3 flex items-center gap-3">
            <span class="w-[150px] text-[22px] font-black text-white">كم غادروا؟</span>
            <span class="sl-pop sl-badge !text-[20px] border-emerald-400 bg-emerald-600/40 text-white" style="--d: 1.8s">✓ يخبرك</span>
          </div>
          <div class="mt-3 flex items-center gap-3">
            <span class="w-[150px] text-[22px] font-black text-white">لماذا غادروا؟</span>
            <span class="sl-pop sl-badge !text-[20px] border-rose-400 bg-rose-600/40 text-white" style="--d: 2.6s">✗ لا يخبرك</span>
          </div>
          <p class="sl-in mt-3 text-[17px] font-bold text-slate-300" style="--d: 3s">يصف ماذا يحدث، لكنه لا يفسر السبب.</p>
        </div>

        <!-- qualitative (right) -->
        <div class="sl-in absolute left-[770px] top-[160px] w-[430px] h-[230px] rounded-3xl border-2 border-violet-400/70 bg-violet-950/50 px-6 py-4" style="--d: 3.8s" dir="rtl">
          <div class="text-[24px] font-black text-violet-300">💬 طريقة نوعية</div>
          <div class="mt-3 flex flex-wrap gap-2">
            <span class="sl-pop sl-badge !text-[18px] border-violet-300/70 bg-violet-600/30 text-violet-50" style="--d: 4.6s">🧪 اختبار قابلية الاستخدام</span>
            <span class="sl-pop sl-badge !text-[18px] border-violet-300/70 bg-violet-600/30 text-violet-50" style="--d: 5s">🎤 المقابلات</span>
          </div>
          <div class="sl-pop mt-4 inline-block rounded-2xl rounded-br-none bg-white text-slate-900 px-4 py-2 text-[19px] font-black" style="--d: 5.8s">
            «لم أجد زر الشراء!» 🤔
          </div>
        </div>

        <!-- answer -->
        <div class="absolute top-[414px] inset-x-0 flex justify-center">
          <div class="sl-in sl-card border-amber-400/70 w-[1100px] px-8 py-4 text-center" style="--d: 6.8s" dir="rtl">
            <p class="text-[22px] font-bold text-white leading-snug">
              <span class="text-amber-300 font-black">لا؛</span> عدد الزيارات (طريقة <span class="text-sky-300 font-black">كمية</span>) يخبرك <span class="text-sky-300 font-black">كم</span> شخصًا غادر، أي ماذا يحدث، لكنه لا يفسر السبب.
              لمعرفة <span class="text-violet-300 font-black">لماذا</span> نستخدم طريقة <span class="text-violet-300 font-black">نوعية</span> مثل اختبار قابلية الاستخدام أو المقابلات.
            </p>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import SlidesTitle from '~/components/slides/Title.vue'

const props = defineProps<{ f: number }>()

const tiles = [
  { icon: '👁️', name: 'مشاهدات الصفحة', en: 'PV · Page Views', cls: 'border-sky-400/60 bg-sky-950/50', bar: 'bg-sky-400', bars: [30, 45, 40, 62, 70, 84] },
  { icon: '↩️', name: 'معدل الارتداد', en: 'Bounce Rate', cls: 'border-rose-400/60 bg-rose-950/40', bar: 'bg-rose-400', bars: [70, 58, 64, 50, 46, 40] },
  { icon: '🎯', name: 'معدل التحويل', en: 'CVR · Conversion Rate', cls: 'border-emerald-400/60 bg-emerald-950/40', bar: 'bg-emerald-400', bars: [20, 26, 24, 34, 40, 48] },
]

/* Sample one-day log (illustration, not from the book): 6 sessions, 5 different people. */
const sessions = [
  { who: 'سارة', pages: 4, bought: true },
  { who: 'عمر', pages: 1, bought: false },
  { who: 'سارة', pages: 2, bought: false },
  { who: 'ليلى', pages: 3, bought: true },
  { who: 'يوسف', pages: 1, bought: false },
  { who: 'منى', pages: 1, bought: false },
]

const rates = [
  { icon: '↩️', name: 'معدل الارتداد', tag: 'مثال على تعريف واحد فقط', d: 0.4, formula: '3 ÷ 6 = 50%',
    cls: 'border-rose-400/70 bg-rose-950/40', text: 'text-rose-300', how: 'جلسات انتهت بعد صفحة واحدة ÷ كل الجلسات',
    note: 'يختلف تعريفه وطريقة حسابه بحسب أداة التحليل، ولا يفسر السبب وحده.' },
  { icon: '🎯', name: 'معدل التحويل (CVR)', tag: '', d: 3.6, formula: '2 ÷ 6 ≈ 33%',
    cls: 'border-emerald-400/70 bg-emerald-950/40', text: 'text-emerald-300', how: 'جلسات تم فيها شراء ÷ كل الجلسات (المقام)',
    note: 'نسبة المستخدمين أو الجلسات التي حققت إجراءً مستهدفًا، مع تحديد المقام وطريقة الحساب.' },
]

const head = computed(() => [
  { icon: '📈', title: 'تحليلات الويب', sub: 'المؤشرات الرئيسية: PV، ومعدل الارتداد، ومعدل التحويل' },
  { icon: '👁️', title: 'PV: مشاهدات الصفحة', sub: 'إجمالي مرات المشاهدة… لا عدد الأشخاص' },
  { icon: '🎯', title: 'معدل الارتداد ومعدل التحويل', sub: 'نِسَب… مع تحديد المقام وطريقة الحساب' },
  { icon: '💡', title: 'توقف وفكر', sub: 'هل يخبرك عدّ الزيارات لماذا يغادر الناس الصفحة؟ أي طريقة تخبرك بذلك؟' },
][props.f]!)
</script>

<style scoped>
.grow { transform-origin: bottom; transform: scaleY(0); animation: grow .7s cubic-bezier(.2,.8,.2,1) forwards; }
@keyframes grow { to { transform: scaleY(1) } }
.walk { left: 80px; opacity: 0; animation: walk 3s linear infinite; }
.walk-2 { animation-delay: 1s; }
.walk-3 { animation-delay: 2s; }
@keyframes walk { 0% { left: 80px; opacity: 0 } 15% { opacity: 1 } 85% { opacity: 1 } 100% { left: -40px; opacity: 0 } }
</style>
