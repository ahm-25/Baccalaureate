<template>
  <SlidesPlayer v-model:step="step" :steps="steps" :chapters="chapters" back-to="/unit-04" :glow="glow">
    <!-- ═════════════ COVER ═════════════ -->
    <Transition name="sl-frame">
      <div v-if="at('cover')" class="absolute inset-0 flex flex-col items-center justify-center text-center" dir="rtl">
        <div class="cover-icon relative w-[170px] h-[170px] mb-9 rounded-[44px] bg-gradient-to-br from-sky-400 via-violet-500 to-amber-400 flex items-center justify-center shadow-[0_0_80px_rgba(167,139,250,.45)] sl-pop" style="--d: .2s">
          <span class="text-[86px]">🔍</span>
          <span class="ring absolute inset-0 rounded-[44px] border-4 border-violet-300"></span>
        </div>
        <p class="text-sky-300 font-bold text-2xl tracking-wide mb-3">الوحدة الرابعة · الدرس <span dir="ltr" class="inline-block">4-3</span></p>
        <h1 class="text-white font-black text-7xl leading-tight mb-8">طرق تقييم المواقع الإلكترونية</h1>
        <div class="flex items-center gap-3">
          <span v-for="(t, i) in topics" :key="t" class="sl-in sl-badge border-white/15 bg-white/5 text-slate-100 !text-xl"
                :style="{ '--d': `${1.2 + i * 0.25}s` }">{{ t }}</span>
        </div>
        <p class="mt-12 text-slate-400 text-xl font-semibold">اضغط ▶ للتشغيل أو انقر للتقدّم خطوة بخطوة</p>
      </div>
    </Transition>

    <!-- ═════════════ CHAPTERS ═════════════ -->
    <L3QualQuant v-if="inRange('qq-def', 'qq-sort')" :f="step - S['qq-def']!" />
    <L3Analytics v-if="inRange('wa-def', 'wa-think')" :f="step - S['wa-def']!" />
    <L3Heuristic v-if="inRange('he-def', 'he-key')" :f="step - S['he-def']!" />
    <L3Solved v-if="inRange('ex-tf', 'ex-match')" :f="step - S['ex-tf']!" />
    <L3Engineer v-if="inRange('eng-data', 'eng-decide')" :f="step - S['eng-data']!" />

    <!-- ═════════════ CARDS ═════════════ -->
    <Transition name="sl-zoom" mode="out-in">
      <!-- Lesson question -->
      <div v-if="at('question')" key="q" class="absolute inset-0 flex items-center justify-center" dir="rtl">
        <div class="w-[1080px] flex flex-col items-center gap-6">
          <p class="sl-in text-2xl font-bold text-slate-300 text-center leading-relaxed">
            بعد تخطيط الموقع من منظور المستخدم، نحتاج إلى <span class="sl-hl-amber font-black">أدلة</span> لمعرفة ما إذا كان التصميم يعمل فعلًا.
          </p>
          <div class="flex gap-4">
            <span class="sl-in sl-badge !text-[20px] border-violet-400/70 bg-violet-600/20 text-violet-100" style="--d: .8s">👀 مراقبة المستخدمين وسؤالهم ← معلومات نوعية</span>
            <span class="sl-in sl-badge !text-[20px] border-sky-400/70 bg-sky-600/20 text-sky-100" style="--d: 1.3s">🔢 قياس السلوك والنتائج بالأرقام ← معلومات كمية</span>
          </div>
          <div class="sl-card sl-in border-amber-400/70 px-12 py-8 text-center" style="--d: 2s">
            <span class="inline-block mb-4 px-5 py-1.5 rounded-full bg-amber-400 text-amber-950 text-xl font-black">❓ السؤال الرئيسي</span>
            <h2 class="text-[38px] leading-[1.55] font-black text-white">
              كيف يمكن <span class="text-amber-300">تقييم موقع إلكتروني</span>، ولماذا من المفيد الجمع بين
              <span class="text-sky-300">الأرقام</span> و<span class="text-violet-300">آراء المستخدمين</span>؟
            </h2>
          </div>
        </div>
      </div>

      <!-- Quick review -->
      <div v-else-if="at('review')" key="review" class="absolute inset-0" dir="rtl">
        <div class="absolute top-8 inset-x-0 text-center">
          <div class="text-5xl font-black text-white">✏️ مراجعة سريعة</div>
          <p class="mt-2 text-xl font-bold text-slate-400">ما المصطلح المناسب لكل وصف؟</p>
        </div>
        <div class="absolute top-[155px] inset-x-0 flex flex-col items-center gap-4">
          <div v-for="(r, i) in review" :key="r.text" class="sl-in w-[1120px] h-[88px] rounded-3xl border-2 border-white/10 bg-slate-900/80 flex items-center gap-5 px-6"
               :style="{ '--d': `${0.3 + i * 0.3}s` }">
            <span class="w-11 h-11 rounded-full bg-slate-700 text-white text-xl font-black flex items-center justify-center shrink-0">{{ letters[i] }}</span>
            <p class="flex-1 text-[23px] font-bold text-slate-100 leading-snug">{{ r.text }}</p>
            <div class="relative w-[250px] h-[56px] shrink-0">
              <span class="sl-out absolute inset-0 rounded-2xl border-2 border-dashed border-slate-500 text-2xl font-black text-slate-500 flex items-center justify-center"
                    :style="{ '--d': `${2.4 + i * 1.8}s` }">؟</span>
              <span class="sl-pop absolute inset-0 rounded-2xl border-2 text-[22px] font-black flex items-center justify-center gap-2 whitespace-nowrap"
                    :class="r.cls" :style="{ '--d': `${2.4 + i * 1.8}s` }">{{ r.ans }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Answer to the lesson question -->
      <div v-else-if="at('answer')" key="answer" class="absolute inset-0" dir="rtl">
        <div class="absolute top-8 inset-x-0 flex flex-col items-center">
          <span class="px-5 py-1.5 rounded-full bg-emerald-400 text-emerald-950 text-xl font-black">❓ إجابة السؤال الرئيسي</span>
          <p class="mt-3 text-[22px] font-bold text-slate-200 max-w-[1100px] text-center leading-snug">
            كيف نقيم موقعًا؟ بأدلة <span class="text-sky-300 font-black">كمية</span> تقيس ما يحدث، وأدلة <span class="text-violet-300 font-black">نوعية</span> تكشف السبب، مع مراجعة الخبراء.
          </p>
        </div>
        <div class="absolute top-[150px] inset-x-0 grid grid-cols-2 gap-4 w-[1100px] mx-auto">
          <div v-for="(a, i) in answer" :key="a.title" class="sl-in rounded-3xl border-2 px-6 py-4 flex gap-4" :class="a.cls"
               :style="{ '--d': `${0.6 + i * 1.1}s` }">
            <span class="text-[40px] leading-none">{{ a.icon }}</span>
            <div>
              <div class="text-[23px] font-black text-white">{{ a.title }}</div>
              <p class="text-[19px] font-bold text-slate-200 leading-snug">{{ a.text }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Summary -->
      <div v-else-if="at('summary')" key="summary" class="absolute inset-0 flex flex-col items-center pt-[70px]" dir="rtl">
        <div class="sl-pop text-[56px] font-black text-white mb-2">⭐ الخلاصة</div>
        <p class="sl-in text-2xl font-bold text-slate-400 mb-8" style="--d: .3s">تذكّر:</p>
        <div class="flex flex-col gap-5 w-[1100px]">
          <div v-for="(p, i) in summary" :key="i" class="sl-in flex items-center gap-5 rounded-3xl border-2 px-7 py-5"
               :class="p.cls" :style="{ '--d': `${0.8 + i * 1.4}s` }">
            <span class="text-5xl">{{ p.icon }}</span>
            <p class="text-[27px] font-black text-white leading-snug" v-html="p.text"></p>
          </div>
        </div>
      </div>
    </Transition>
  </SlidesPlayer>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import SlidesPlayer, { type SlideStep } from '~/components/slides/Player.vue'
import L3QualQuant from '~/components/slides/unit04/lesson3/QualQuant.vue'
import L3Analytics from '~/components/slides/unit04/lesson3/Analytics.vue'
import L3Heuristic from '~/components/slides/unit04/lesson3/Heuristic.vue'
import L3Solved from '~/components/slides/unit04/lesson3/Solved.vue'
import L3Engineer from '~/components/slides/unit04/lesson3/Engineer.vue'

definePageMeta({ layout: false })
useHead({ title: 'سلايدر الدرس 4-3: طرق تقييم المواقع الإلكترونية' })

/* ───────── Timeline ─────────
   Each frame is addressed by its id, so frames can be inserted without renumbering.
   Chapter components receive a local frame number counted from their first frame. */
const steps: SlideStep[] = [
  { id: 'cover', caption: '', dur: 4000 },
  { id: 'question', caption: 'سؤال الدرس: كيف يمكن تقييم موقع إلكتروني، ولماذا من المفيد الجمع بين الأرقام وآراء المستخدمين؟', dur: 9500 },
  // ── Qualitative and quantitative ──
  { id: 'qq-def', caption: 'تنقسم طرق التقييم إلى فئتين: التقييم النوعي يركز على الفهم التفصيلي، والتقييم الكمي يركز على القياس بالأرقام.', dur: 10000 },
  { id: 'qq-table', caption: 'النوعي: اختبار قابلية الاستخدام والمقابلات لفهم التجربة والأسباب. الكمي: تحليلات الويب واختبار A/B لقياس السلوك والنتائج.', dur: 11000 },
  { id: 'qq-sort', caption: 'مراقبة المستخدم أو مقابلته تقييم نوعي، أما إحصاء المشاهدات أو مقارنة زرين بالأرقام فتقييم كمي.', dur: 10000 },
  // ── Web analytics ──
  { id: 'wa-def', caption: 'تحليلات الويب: جمع وقياس وتحليل بيانات استخدام الموقع لفهم الوصول والتفاعل والنتائج، وهي إحدى أدوات التقييم الكمي.', dur: 9500 },
  { id: 'wa-pv', caption: 'PV إجمالي مرات مشاهدة الصفحة، وقد يشمل مشاهدات متكررة؛ لذلك لا يساوي عدد الأشخاص الفريدين.', dur: 10000 },
  { id: 'wa-rates', caption: 'معدل الارتداد يختلف تعريفه بحسب أداة التحليل، ومعدل التحويل CVR نسبة من حققوا إجراءً مستهدفًا، مع تحديد المقام.', dur: 10500 },
  { id: 'wa-think', caption: 'توقف وفكر: عدّ الزيارات يخبرك كم شخصًا غادر، لا لماذا؛ لمعرفة السبب نستخدم طريقة نوعية كاختبار قابلية الاستخدام أو المقابلات.', dur: 11500 },
  // ── Heuristic evaluation ──
  { id: 'he-def', caption: 'التقييم الإرشادي: مراجعة يجريها خبراء لواجهة المستخدم استنادًا إلى قواعد إرشادية عملية، وهو شكل من أشكال التقييم النوعي.', dur: 10500 },
  { id: 'he-rules', caption: 'ثلاث قواعد إرشادية: الاتساق، ومنع الأخطاء، ووضوح حالة النظام مثل مؤشرات المعالجة ورسائل أخطاء الإدخال.', dur: 12000 },
  { id: 'he-key', caption: 'الفكرة الرئيسة: اجمع بين «كم» الخاصة بالبيانات الكمية و«لماذا» الخاصة بالطرق النوعية؛ فالأرقام تكشف ما يحدث، والمستخدمون يكشفون الأسباب.', dur: 11000 },
  // ── Solved example ──
  { id: 'ex-tf', caption: 'مثال محلول: العبارتان (ب) و(د) صحيحتان؛ أما (أ) و(ج) فخاطئتان، لأن البيانات العددية للتقييم الكمي، وتحقيق الإجراء المستهدف هو معدل التحويل.', dur: 11000 },
  { id: 'ex-match', caption: 'عدد مرات المشاهدة هو PV، والمغادرة بعد الصفحة الأولى فقط مثال مبسط على معدل الارتداد، وتحقيق إجراء مستهدف هو معدل التحويل.', dur: 10000 },
  // ── Think like an engineer ──
  { id: 'eng-data', caption: 'فكّر كمهندس: اطلب من خمسة زملاء زيارة متجر إلكتروني، وسجّل لكل منهم رقمًا يمكن قياسه وشيئًا واحدًا قالوا إنه كان مربكًا.', dur: 10500 },
  { id: 'eng-signal', caption: 'إجمالي المشاهدات مرتفع لكن معدل التحويل منخفض: الأرقام تشير إلى أين تنظر، والطريقة النوعية تكشف السبب.', dur: 12000 },
  { id: 'eng-decide', caption: 'القرار: استخدام الطرق الكمية والنوعية معًا؛ تحليلات الويب لتتبع PV ومعدل التحويل، واختبار قابلية استخدام قصير لكشف الأسباب.', dur: 11500 },
  // ── Wrap-up ──
  { id: 'review', caption: 'مراجعة سريعة: اختر المصطلح المناسب لكل وصف.', dur: 10500 },
  { id: 'answer', caption: 'إجابة السؤال الرئيسي: الكمي يقيس السلوك والنتائج بالأرقام، والنوعي يكشف التجربة والأسباب، والخبراء يراجعون الواجهة؛ لذلك نجمع بينها.', dur: 13000 },
  { id: 'summary', caption: 'التقييم الكمي يُظهر مقدار الاستخدام، والتقييم النوعي يُظهر السبب؛ اجمع بينهما لتقييم موقع ما بوضوح.', dur: 10000 },
]

const chapters = [
  { name: 'البداية', id: 'cover' },
  { name: 'النوعي والكمي', id: 'qq-def' },
  { name: 'تحليلات الويب', id: 'wa-def' },
  { name: 'الإرشادي', id: 'he-def' },
  { name: 'مثال محلول', id: 'ex-tf' },
  { name: 'فكّر كمهندس', id: 'eng-data' },
  { name: 'الخلاصة', id: 'review' },
]

const S = Object.fromEntries(steps.map((s, i) => [s.id, i])) as Record<string, number>
const step = ref(0)
const at = (id: string) => step.value === S[id]
const from = (id: string) => step.value >= S[id]!
const inRange = (a: string, b: string) => step.value >= S[a]! && step.value <= S[b]!

const glow = computed(() => {
  if (from('answer') || inRange('eng-data', 'eng-decide')) return 'bg-emerald-500/25'
  if (inRange('qq-def', 'qq-sort')) return 'bg-violet-500/20'
  if (inRange('he-def', 'he-key')) return 'bg-amber-500/20'
  return 'bg-sky-500/20'
})

const topics = ['💬 النوعي والكمي', '📈 تحليلات الويب', '🧑‍🏫 التقييم الإرشادي', '⚙️ فكّر كمهندس']
const letters = ['أ', 'ب', 'ج', 'د']
const review = [
  { text: 'الطريقة التي تُقيّم نوعيًا من خلال مراقبة آراء المستخدمين وسلوكهم', ans: '💬 التقييم النوعي', cls: 'border-violet-400 bg-violet-600/30 text-violet-50' },
  { text: 'الطريقة التي تُقيّم كميًا باستخدام بيانات عددية', ans: '📊 التقييم الكمي', cls: 'border-sky-400 bg-sky-600/30 text-sky-50' },
  { text: 'الاختصار المكوّن من حرفين للمؤشر الذي يُظهر عدد مرات مشاهدة صفحة ما', ans: 'PV', cls: 'border-sky-400 bg-sky-600/30 text-sky-50' },
  { text: 'الطريقة التي يحدد فيها الخبراء مشكلات واجهة المستخدم استنادًا إلى قواعد عملية', ans: '🧑‍🏫 التقييم الإرشادي', cls: 'border-amber-400 bg-amber-600/30 text-amber-50' },
]
const answer = [
  { icon: '📊', title: 'التقييم الكمي', cls: 'border-sky-400/60 bg-sky-950/45',
    text: 'يركز على قياس السلوك والنتائج بالأرقام، مثل إجمالي المشاهدات ومعدل التحويل، مع تعريف كل مقياس وطريقة حسابه.' },
  { icon: '💬', title: 'التقييم النوعي', cls: 'border-violet-400/60 bg-violet-950/40',
    text: 'يساعد على فهم تجربة المستخدم والأسباب المحتملة من خلال اختبار قابلية الاستخدام والمقابلات.' },
  { icon: '🧑‍🏫', title: 'التقييم الإرشادي', cls: 'border-amber-400/60 bg-amber-950/35',
    text: 'يراجع الخبراء الواجهة وفق قواعد إرشادية.' },
  { icon: '🤝', title: 'الجمع بين الأدلة', cls: 'border-emerald-400/60 bg-emerald-950/40',
    text: 'لا يفسر المؤشر الكمي السبب وحده، ولا تمثل الملاحظة النوعية جميع المستخدمين بالضرورة؛ لذلك قد تجمع الدراسة الواحدة بين الأدلة النوعية والكمية.' },
]
const summary = [
  { icon: '📊', cls: 'border-sky-400/60 bg-sky-950/40',
    text: 'التقييم <span class="text-sky-300">الكمي</span> (PV، معدل الارتداد، CVR) يُظهر <span class="text-sky-300">مقدار</span> الاستخدام.' },
  { icon: '💬', cls: 'border-violet-400/60 bg-violet-950/40',
    text: 'والتقييم <span class="text-violet-300">النوعي</span> (اختبارات قابلية الاستخدام، المقابلات، التقييم الإرشادي) يُظهر <span class="text-violet-300">السبب</span>.' },
  { icon: '🤝', cls: 'border-emerald-400/60 bg-emerald-950/40',
    text: '<span class="text-emerald-300">اجمع بينهما</span> لتقييم موقع ما بوضوح.' },
]
</script>

<style scoped>
.cover-icon { animation: sl-pop .5s cubic-bezier(.3,1.6,.5,1) .2s forwards, floaty 4s ease-in-out 1s infinite; }
@keyframes floaty { 0%, 100% { transform: translateY(0) } 50% { transform: translateY(-12px) } }
.ring { animation: ring 2.2s ease-out infinite; }
@keyframes ring { 0% { transform: scale(1); opacity: .8 } 100% { transform: scale(1.5); opacity: 0 } }
</style>
