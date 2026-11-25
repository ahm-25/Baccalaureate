<template>
  <SlidesPlayer v-model:step="step" :steps="steps" :chapters="chapters" back-to="/unit-04" :glow="glow">
    <!-- ═════════════ COVER ═════════════ -->
    <Transition name="sl-frame">
      <div v-if="at('cover')" class="absolute inset-0 flex flex-col items-center justify-center text-center" dir="rtl">
        <div class="cover-icon relative w-[170px] h-[170px] mb-9 rounded-[44px] bg-gradient-to-br from-sky-400 via-violet-500 to-emerald-400 flex items-center justify-center shadow-[0_0_80px_rgba(56,189,248,.45)]">
          <span class="text-[86px]">🔁</span>
          <span class="ring absolute inset-0 rounded-[44px] border-4 border-sky-300"></span>
        </div>
        <p class="text-sky-300 font-bold text-2xl tracking-wide mb-3">الوحدة الرابعة · الدرس <span dir="ltr" class="inline-block">4-4</span></p>
        <h1 class="text-white font-black text-[58px] leading-tight mb-8">عملية التحسين التكراري للمواقع الإلكترونية</h1>
        <div class="flex items-center gap-3">
          <span v-for="(t, i) in topics" :key="t" class="sl-in sl-badge border-white/15 bg-white/5 text-slate-100 !text-xl"
                :style="{ '--d': `${1.2 + i * 0.25}s` }">{{ t }}</span>
        </div>
        <p class="mt-12 text-slate-400 text-xl font-semibold">اضغط ▶ للتشغيل أو انقر للتقدّم خطوة بخطوة</p>
      </div>
    </Transition>

    <!-- ═════════════ CHAPTERS ═════════════ -->
    <L4Pdca v-if="inRange('pdca-def', 'pdca-think')" :f="step - S['pdca-def']!" />
    <L4DesignThinking v-if="inRange('dt-def', 'dt-loop')" :f="step - S['dt-def']!" />
    <L4AbTest v-if="inRange('ab-def', 'ab-idea')" :f="step - S['ab-def']!" />
    <L4Solved v-if="inRange('ex-tf', 'ex-match')" :f="step - S['ex-tf']!" />
    <L4Engineer v-if="inRange('eng-base', 'eng-decide')" :f="step - S['eng-base']!" />

    <!-- ═════════════ CARDS ═════════════ -->
    <Transition name="sl-zoom" mode="out-in">
      <!-- Lesson question -->
      <div v-if="at('question')" key="q" class="absolute inset-0 flex items-center justify-center" dir="rtl">
        <div class="w-[1100px] flex flex-col items-center gap-6">
          <p class="sl-in text-[23px] font-bold text-slate-300 text-center leading-relaxed">
            في الدرس <span dir="ltr" class="inline-block">4-3</span> استخدمت الأدلة لاكتشاف ما يعمل وما يحتاج إلى تحسين.
            <br>في هذا الدرس ستستخدم هذه الأدلة <span class="text-sky-300 font-black">لتخطيط تغيير واختباره وتكرار التحسين</span>.
          </p>
          <div class="flex items-center gap-3">
            <template v-for="(c, i) in loopChips" :key="c">
              <span class="sl-pop sl-badge !text-[19px] border-sky-400/60 bg-sky-600/20 text-sky-50" :style="{ '--d': `${0.8 + i * 0.4}s` }">{{ c }}</span>
              <span v-if="i < loopChips.length - 1" class="sl-fade text-[22px] font-black text-slate-500" :style="{ '--d': `${1 + i * 0.4}s` }">←</span>
            </template>
          </div>
          <div class="sl-card sl-in border-amber-400/70 px-12 py-7 text-center" style="--d: 2.2s">
            <span class="inline-block mb-4 px-5 py-1.5 rounded-full bg-amber-400 text-amber-950 text-xl font-black">❓ السؤال الرئيسي</span>
            <h2 class="text-[32px] leading-[1.5] font-black text-white">
              لماذا يُعد تحسين الموقع الإلكتروني <span class="text-sky-300">عملية متكررة</span> بدلًا من مهمة تُنجز مرة واحدة،
              وكيف تقرر الفرق <span class="text-amber-300">ما الذي يجب تغييره</span>؟
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
            <p class="flex-1 text-[22px] font-bold text-slate-100 leading-snug">{{ r.text }}</p>
            <div class="relative w-[260px] h-[56px] shrink-0">
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
            أجاب الدرس عن السؤال الرئيسي: لماذا يكون تحسين الموقع <span class="text-sky-300 font-black">عملية تكرارية</span>؟
          </p>
        </div>
        <div class="absolute top-[140px] inset-x-0 grid grid-cols-2 gap-4 w-[1120px] mx-auto">
          <div v-for="(a, i) in answer" :key="a.title" class="sl-in rounded-3xl border-2 px-6 py-4 flex gap-4" :class="a.cls"
               :style="{ '--d': `${0.6 + i * 1.3}s` }">
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
        <p class="sl-in text-2xl font-bold text-slate-400 mb-8" style="--d: .3s">تذكّر: حسّن عبر حلقات</p>
        <div class="flex flex-col gap-5 w-[1100px]">
          <div v-for="(p, i) in summary" :key="i" class="sl-in flex items-center gap-5 rounded-3xl border-2 px-7 py-5"
               :class="p.cls" :style="{ '--d': `${0.8 + i * 1.4}s` }">
            <span class="text-5xl">{{ p.icon }}</span>
            <p class="text-[26px] font-black text-white leading-snug" v-html="p.text"></p>
          </div>
        </div>
      </div>
    </Transition>
  </SlidesPlayer>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import SlidesPlayer, { type SlideStep } from '~/components/slides/Player.vue'
import L4Pdca from '~/components/slides/unit04/lesson4/Pdca.vue'
import L4DesignThinking from '~/components/slides/unit04/lesson4/DesignThinking.vue'
import L4AbTest from '~/components/slides/unit04/lesson4/AbTest.vue'
import L4Solved from '~/components/slides/unit04/lesson4/Solved.vue'
import L4Engineer from '~/components/slides/unit04/lesson4/Engineer.vue'

definePageMeta({ layout: false })
useHead({ title: 'سلايدر الدرس 4-4: عملية التحسين التكراري للمواقع الإلكترونية' })

/* ───────── Timeline ─────────
   Each frame is addressed by its id, so frames can be inserted without renumbering.
   Chapter components receive a local frame number counted from their first frame. */
const steps: SlideStep[] = [
  { id: 'cover', caption: '', dur: 4000 },
  { id: 'question', caption: 'سؤال الدرس: لماذا يُعد تحسين الموقع الإلكتروني عملية متكررة بدلًا من مهمة تُنجز مرة واحدة، وكيف تقرر الفرق ما الذي يجب تغييره؟', dur: 10000 },
  // ── PDCA ──
  { id: 'pdca-def', caption: 'دورة PDCA طريقة تدفع التحسين قدمًا باستمرار بتكرار أربع خطوات، وتُستخدم في تحسين الأعمال وإدارة الجودة، وليس في المواقع فقط.', dur: 10000 },
  { id: 'pdca-cycle', caption: 'الشكل 4.4.1: خطّط بتحديد الأهداف، ونفّذ وفق الخطة، وتحقّق بمقارنة النتائج بالخطة، ثم تصرّف بعكس التقييم في الخطة التالية.', dur: 13000 },
  { id: 'pdca-example', caption: 'مثال: هدف رفع إكمال نموذج التسجيل من 40% إلى 50%؛ نغيّر الصفحة، ثم نقيس ونقارن، ثم نعتمد التغيير أو نراجع السبب والخطة.', dur: 12000 },
  { id: 'pdca-think', caption: 'توقف وفكر: خطوة «تحقّق» تخبرك هل نجح تغييرك فعلًا؛ فالتحسين التكراري يتعلم من النتائج بدل افتراض أن النسخة الأولى مثالية.', dur: 11000 },
  // ── Design thinking ──
  { id: 'dt-def', caption: 'التفكير التصميمي طريقة مرنة لفهم المشكلة من منظور المستخدم وتجربة حلول ثم تحسينها، عبر نموذج شائع من خمسة أنماط.', dur: 12000 },
  { id: 'dt-loop', caption: 'بناءً على نتائج الاختبار قد نعود إلى التعاطف أو التعريف؛ فالتحسين يسير ذهابًا وإيابًا، لا في اتجاه واحد.', dur: 11000 },
  // ── A/B test ──
  { id: 'ab-def', caption: 'اختبار A/B يقارن نسختين وفق مقياس محدد مسبقًا، مع توزيع المستخدمين عشوائيًا قدر الإمكان؛ مثل زر شراء أحمر مقابل زر أزرق.', dur: 11000 },
  { id: 'ab-one', caption: 'لعزل أثر تغيير واحد اجعل الفرق بين النسختين واضحًا ومحددًا؛ أما حزمة التغييرات فتقيس أثر الحزمة ولا تكشف أثر كل عنصر منفردًا.', dur: 11000 },
  { id: 'ab-sample', caption: 'حدّد المقياس وخطة التحليل قبل الاختبار، ثم اجمع عينة كافية قبل الحكم؛ فالعينة الصغيرة قد تُظهر فرقًا بالصدفة.', dur: 11000 },
  { id: 'ab-idea', caption: 'الفكرة الرئيسة: لا تُبنى المواقع الجيدة مثالية من أول مرة، بل تُحسَّن عبر حلقات متكررة: كل تغيير صغير، مقاس، ومتكرر.', dur: 9000 },
  // ── Solved example ──
  { id: 'ex-tf', caption: 'مثال محلول: العبارتان أ وج صحيحتان، أما ب ود فخطأ؛ فالتفكير التصميمي من منظور المستخدم، ودورة PDCA ذات معنى عندما تُكرَّر.', dur: 11000 },
  { id: 'ex-match', caption: 'فهم المستخدم هو التعاطف، وتوضيح المشكلة هو التعريف، ثم توليد الأفكار، فالنموذج الأولي، وجعل المستخدمين يجربون هو الاختبار.', dur: 10500 },
  // ── Think like an engineer ──
  { id: 'eng-base', caption: 'فكّر كمهندس: قلة من الطلاب يسجلون في صفحة فعالية النادي. أولًا قِس خط الأساس: كم زميلًا من 10 يجد رابط التسجيل خلال خمس ثوانٍ؟', dur: 10000 },
  { id: 'eng-plan', caption: 'ثم خطّط لتغيير واحد يعالج أكبر عائق لفئة محددة، مثل طالب على شاشة هاتف صغيرة، واذكر الهدف كرقم: 8 من 10 خلال خمس ثوانٍ.', dur: 10500 },
  { id: 'eng-decide', caption: 'القرار: التحسين عبر حلقة PDCA واحدة مقاسة يوضح ما الذي أحدث الفرق، بخلاف إعادة تصميم كل شيء دفعة واحدة.', dur: 12000 },
  // ── Wrap-up ──
  { id: 'review', caption: 'مراجعة سريعة: اختر المصطلح المناسب لكل وصف.', dur: 10500 },
  { id: 'answer', caption: 'PDCA تنظم التغيير، والتفكير التصميمي يفهم المستخدم، واختبار A/B يقارن نسختين؛ فيصبح القرار مبنيًا على أدلة وتعلم متكرر.', dur: 12000 },
  { id: 'summary', caption: 'تذكّر: حسّن عبر حلقات: دورة PDCA للتحسين المستمر، والتفكير التصميمي من جانب المستخدم، واختبار A/B لحسم تغيير واحد بالبيانات.', dur: 10000 },
]

const chapters = [
  { name: 'البداية', id: 'cover' },
  { name: 'PDCA', id: 'pdca-def' },
  { name: 'التفكير التصميمي', id: 'dt-def' },
  { name: 'اختبار A/B', id: 'ab-def' },
  { name: 'مثال محلول', id: 'ex-tf' },
  { name: 'فكّر كمهندس', id: 'eng-base' },
  { name: 'الخلاصة', id: 'review' },
]

const S = Object.fromEntries(steps.map((s, i) => [s.id, i])) as Record<string, number>
const step = ref(0)
const at = (id: string) => step.value === S[id]
const from = (id: string) => step.value >= S[id]!
const inRange = (a: string, b: string) => step.value >= S[a]! && step.value <= S[b]!

const glow = computed(() => {
  if (from('answer')) return 'bg-emerald-500/25'
  if (inRange('dt-def', 'dt-loop')) return 'bg-amber-500/20'
  if (inRange('ab-def', 'ab-idea')) return 'bg-violet-500/20'
  if (inRange('eng-base', 'eng-decide')) return 'bg-emerald-500/20'
  return 'bg-sky-500/20'
})

const topics = ['🔄 دورة PDCA', '💡 التفكير التصميمي', '🆎 اختبار A/B']
const loopChips = ['🛠️ خطّط لتغيير', '🧪 اختبره', '🔁 كرّر التحسين']
const letters = ['أ', 'ب', 'ج', 'د']
const review = [
  { text: 'طريقة التحسين التي تكرر الخطوات الأربع: خطّط ← نفّذ ← تحقّق ← تصرّف', ans: 'دورة PDCA', cls: 'border-sky-400 bg-sky-600/30 text-sky-50' },
  { text: 'طريقة التفكير لاكتشاف المشكلات وتوليد الحلول من منظور المستخدم', ans: 'التفكير التصميمي', cls: 'border-amber-400 bg-amber-600/30 text-amber-50' },
  { text: 'طريقة يُعدّ فيها نمطان ويُقارَنان بالبيانات لمعرفة أيهما أكثر فعالية', ans: 'اختبار A/B', cls: 'border-violet-400 bg-violet-600/30 text-violet-50' },
  { text: 'خطوة PDCA التي تقيس فيها النتائج وتقيّم مستوى تحقيق الهدف', ans: 'تحقّق (Check)', cls: 'border-emerald-400 bg-emerald-600/30 text-emerald-50' },
]
const answer = [
  { icon: '🔄', title: 'دورة PDCA', cls: 'border-sky-400/60 bg-sky-950/45',
    text: 'تساعد على التخطيط لتغيير، وتنفيذه، والتحقق من النتيجة، ثم اعتماد ما نجح أو تعديل الخطة.' },
  { icon: '💡', title: 'التفكير التصميمي', cls: 'border-amber-400/60 bg-amber-950/35',
    text: 'نموذج مرن لفهم المستخدم وتعريف المشكلة وتوليد الأفكار وبناء نموذج أولي واختباره، مع إمكان الرجوع بين الأنماط.' },
  { icon: '🆎', title: 'اختبار A/B', cls: 'border-violet-400/60 bg-violet-950/40',
    text: 'يقارن نسختين وفق مقياس محدد مسبقًا وتصميم توزيع مناسب وعينة كافية.' },
  { icon: '📊', title: 'قرار مبني على أدلة', cls: 'border-emerald-400/60 bg-emerald-950/40',
    text: 'لا تضمن هذه الأدوات نجاح كل تغيير، لكنها تجعل القرار مبنيًا على أدلة وتعلم متكرر.' },
]
const summary = [
  { icon: '🔄', cls: 'border-sky-400/60 bg-sky-950/40',
    text: '<span class="text-sky-300">دورة PDCA</span> (خطّط، نفّذ، تحقّق، تصرّف) للتحسين المستمر.' },
  { icon: '💡', cls: 'border-amber-400/60 bg-amber-950/30',
    text: '<span class="text-amber-300">التفكير التصميمي</span> (التعاطف، التعريف، توليد الأفكار، النموذج الأولي، الاختبار) من جانب المستخدم.' },
  { icon: '🆎', cls: 'border-violet-400/60 bg-violet-950/40',
    text: '<span class="text-violet-300">اختبار A/B</span> لحسم تغيير واحد بالبيانات.' },
]
</script>

<style scoped>
.cover-icon { animation: sl-pop .5s cubic-bezier(.3,1.6,.5,1) .2s both, floaty 4s ease-in-out 1s infinite; }
@keyframes floaty { 0%, 100% { transform: translateY(0) } 50% { transform: translateY(-12px) } }
.ring { animation: ring 2.2s ease-out infinite; }
@keyframes ring { 0% { transform: scale(1); opacity: .8 } 100% { transform: scale(1.5); opacity: 0 } }
</style>
