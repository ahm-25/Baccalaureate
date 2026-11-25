<template>
  <SlidesPlayer v-model:step="step" :steps="steps" :chapters="chapters" back-to="/unit-01" :glow="glow">
    <!-- ═════════════ COVER ═════════════ -->
    <Transition name="sl-frame">
      <div v-if="at('cover')" class="absolute inset-0 flex flex-col items-center justify-center text-center" dir="rtl">
        <div class="cover-icon relative w-[170px] h-[170px] mb-9 rounded-[44px] bg-gradient-to-br from-amber-400 via-sky-400 to-emerald-400 flex items-center justify-center shadow-[0_0_80px_rgba(56,189,248,.45)] sl-pop" style="--d: .2s">
          <span class="text-[86px]">🚀</span>
          <span class="ring absolute inset-0 rounded-[44px] border-4 border-sky-300"></span>
        </div>
        <p class="text-sky-300 font-bold text-2xl tracking-wide mb-3">الوحدة الأولى · الدرس <span dir="ltr" class="inline-block">1-1</span></p>
        <h1 class="text-white font-black text-[64px] leading-tight mb-8">تطور تكنولوجيا المعلومات والتحول الاجتماعي</h1>
        <div class="flex items-center gap-3">
          <span v-for="(t, i) in topics" :key="t" class="sl-in sl-badge border-white/15 bg-white/5 text-slate-100 !text-xl"
                :style="{ '--d': `${1.2 + i * 0.25}s` }">{{ t }}</span>
        </div>
        <p class="mt-12 text-slate-400 text-xl font-semibold">اضغط ▶ للتشغيل أو انقر للتقدّم خطوة بخطوة</p>
      </div>
    </Transition>

    <!-- ═════════════ CHAPTERS ═════════════ -->
    <L1Timeline v-if="inRange('t-1', 't-all')" :f="step - S['t-1']!" />
    <L1Moore v-if="inRange('moore-law', 'moore-limits')" :f="step - S['moore-law']!" />
    <L1Social v-if="inRange('soc-five', 'soc-day')" :f="step - S['soc-five']!" />
    <L1Emerging v-if="inRange('em-car', 'em-quantum')" :f="step - S['em-car']!" />

    <!-- ═════════════ CARDS ═════════════ -->
    <Transition name="sl-zoom" mode="out-in">
      <!-- Lesson question -->
      <div v-if="at('question')" key="q" class="absolute inset-0 flex items-center justify-center" dir="rtl">
        <div class="w-[1100px] flex flex-col items-center gap-7">
          <p class="sl-in text-[23px] font-bold text-slate-300 text-center leading-relaxed">
            اليوم يقرأ الطالب رسائله على <span class="text-sky-300">تطبيق تواصل</span>، ويدفع ثمن إفطاره <span class="text-rose-300">إلكترونيًا</span>،
            وينضم إلى <span class="text-emerald-300">درس عبر الإنترنت</span>…
            <br>قبل ثلاثين عامًا لم تكن معظم هذه الخدمات <span class="sl-hl-amber font-black">منتشرة أو متاحة</span> بالصورة التي نعرفها اليوم
          </p>
          <div class="sl-card sl-in border-amber-400/70 px-12 py-8 text-center" style="--d: 1s">
            <span class="inline-block mb-4 px-5 py-1.5 rounded-full bg-amber-400 text-amber-950 text-xl font-black">❓ السؤال الرئيسي</span>
            <h2 class="text-[38px] leading-[1.55] font-black text-white">
              كيف تطورت <span class="text-sky-300">تكنولوجيا المعلومات</span> عبر مراحلها الرئيسية،
              وكيف غيّرت كل مرحلة <span class="text-amber-300">المجتمع</span>؟
            </h2>
          </div>
        </div>
      </div>

      <!-- Solved example (1): the right order -->
      <div v-else-if="at('order')" key="order" class="absolute inset-0" dir="rtl">
        <div class="absolute top-8 inset-x-0 text-center">
          <div class="text-5xl font-black text-white">✏️ مثال محلول</div>
          <p class="mt-2 text-xl font-bold text-slate-400">اختر الخيار الذي يرتّب مراحل تطور تكنولوجيا المعلومات بالترتيب الزمني الصحيح</p>
        </div>
        <div class="absolute top-[155px] inset-x-0 flex flex-col items-center gap-4">
          <div v-for="(o, i) in orders" :key="i" class="sl-in" :style="{ '--d': `${0.3 + i * 0.3}s` }">
          <div class="relative w-[1140px] h-[88px] rounded-3xl border-2 border-white/10 bg-slate-900/80 flex items-center gap-4 px-6"
               :class="o.ok ? 'ok-row' : 'bad-row'">
            <span class="w-11 h-11 rounded-full bg-slate-700 text-white text-xl font-black flex items-center justify-center shrink-0">{{ letters[i] }}</span>
            <div class="flex-1 flex items-center gap-2 flex-wrap">
              <template v-for="(s, si) in o.seq" :key="s">
                <span class="px-3 py-1 rounded-xl bg-white/10 text-[19px] font-bold text-white">{{ stageName[s] }}</span>
                <span v-if="si < 3" class="text-slate-500 font-black">←</span>
              </template>
            </div>
            <span class="sl-pop w-12 h-12 rounded-full flex items-center justify-center text-[24px] font-black shrink-0"
                  :class="o.ok ? 'bg-emerald-500 text-white' : 'bg-rose-500/80 text-white'" :style="{ '--d': o.ok ? '5s' : `${3 + i * 0.5}s` }">{{ o.ok ? '✓' : '✗' }}</span>
          </div>
          </div>
        </div>
      </div>

      <!-- Solved example (3): match -->
      <div v-else-if="at('match')" key="match" class="absolute inset-0" dir="rtl">
        <div class="absolute top-8 inset-x-0 text-center">
          <div class="text-5xl font-black text-white">✏️ طابق</div>
          <p class="mt-2 text-xl font-bold text-slate-400">طابق كل وصف مع التقنية الأنسب: القيادة الذاتية · الواقع المعزز · الواقع الافتراضي</p>
        </div>
        <div class="absolute top-[165px] inset-x-0 flex flex-col items-center gap-4">
          <div v-for="(r, i) in match" :key="r.text" class="sl-in w-[1120px] h-[96px] rounded-3xl border-2 border-white/10 bg-slate-900/80 flex items-center gap-5 px-6"
               :style="{ '--d': `${0.3 + i * 0.3}s` }">
            <span class="w-11 h-11 rounded-full bg-slate-700 text-white text-xl font-black flex items-center justify-center shrink-0">{{ i + 1 }}</span>
            <p class="flex-1 text-[23px] font-bold text-slate-100 leading-snug">{{ r.text }}</p>
            <div class="relative w-[290px] h-[56px] shrink-0">
              <span class="sl-out absolute inset-0 rounded-2xl border-2 border-dashed border-slate-500 text-2xl font-black text-slate-500 flex items-center justify-center"
                    :style="{ '--d': `${2.4 + i * 1.8}s` }">؟</span>
              <span class="sl-pop absolute inset-0 rounded-2xl border-2 text-[21px] font-black flex items-center justify-center gap-2"
                    :class="r.cls" :style="{ '--d': `${2.4 + i * 1.8}s` }">{{ r.ans }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Answer to the lesson question -->
      <div v-else-if="at('answer')" key="answer" class="absolute inset-0" dir="rtl">
        <div class="absolute top-8 inset-x-0 flex flex-col items-center">
          <span class="px-5 py-1.5 rounded-full bg-emerald-400 text-emerald-950 text-xl font-black">❓ إجابة السؤال الرئيسي</span>
          <p class="mt-3 text-[22px] font-bold text-slate-200 text-center">مرت تكنولوجيا المعلومات بسلسلة من المراحل المتتابعة:</p>
        </div>
        <div class="absolute top-[140px] inset-x-0 flex justify-center items-center gap-2">
          <template v-for="(p, i) in answerStages" :key="p.t">
            <div class="sl-in w-[190px] h-[110px] rounded-2xl border-2 flex flex-col items-center justify-center" :class="p.cls" :style="{ '--d': `${0.4 + i * 0.5}s` }">
              <span class="text-[38px] leading-none">{{ p.i }}</span>
              <span class="mt-1 text-[18px] font-black text-white">{{ p.t }}</span>
            </div>
            <span v-if="i < 4" class="sl-fade text-[26px] font-black text-slate-500" :style="{ '--d': `${0.7 + i * 0.5}s` }">←</span>
          </template>
        </div>
        <div class="absolute top-[278px] inset-x-0 flex flex-col items-center gap-3">
          <div v-for="(a, i) in answer" :key="i" class="sl-in w-[1100px] flex items-center gap-4 rounded-2xl border-2 px-6 py-3" :class="a.cls"
               :style="{ '--d': `${3.4 + i * 1.2}s` }">
            <span class="text-[34px]">{{ a.icon }}</span>
            <p class="text-[21px] font-bold text-white leading-snug" v-html="a.text"></p>
          </div>
        </div>
      </div>

      <!-- Summary -->
      <div v-else-if="at('summary')" key="summary" class="absolute inset-0 flex flex-col items-center pt-[40px]" dir="rtl">
        <div class="sl-pop text-[56px] font-black text-white mb-2">⭐ الخلاصة</div>
        <p class="sl-in text-2xl font-bold text-slate-400 mb-5" style="--d: .3s">تذكّر:</p>
        <div class="flex flex-col gap-4 w-[1100px]">
          <div v-for="(p, i) in summary" :key="i" class="sl-in flex items-center gap-5 rounded-3xl border-2 px-7 py-4"
               :class="p.cls" :style="{ '--d': `${0.8 + i * 1.4}s` }">
            <span class="text-5xl">{{ p.icon }}</span>
            <p class="text-[24px] font-black text-white leading-snug" v-html="p.text"></p>
          </div>
        </div>
      </div>
    </Transition>
  </SlidesPlayer>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import SlidesPlayer, { type SlideStep } from '~/components/slides/Player.vue'
import L1Timeline from '~/components/slides/unit01/lesson1/Timeline.vue'
import L1Moore from '~/components/slides/unit01/lesson1/Moore.vue'
import L1Social from '~/components/slides/unit01/lesson1/Social.vue'
import L1Emerging from '~/components/slides/unit01/lesson1/Emerging.vue'

definePageMeta({ layout: false })
useHead({ title: 'سلايدر الدرس 1-1: تطور تكنولوجيا المعلومات والتحول الاجتماعي' })

/* ───────── Timeline ─────────
   Each frame is addressed by its id, so frames can be inserted without renumbering.
   Chapter components receive a local frame number counted from their first frame. */
const steps: SlideStep[] = [
  { id: 'cover', caption: '', dur: 4000 },
  { id: 'question', caption: 'سؤال الدرس: كيف تطورت تكنولوجيا المعلومات عبر مراحلها الرئيسية، وكيف غيّرت كل مرحلة المجتمع؟', dur: 10000 },
  // ── History of IT ──
  { id: 't-1', caption: 'الأربعينيات حتى الستينيات: ظهور الحواسيب الإلكترونية ومنها ENIAC، واستُخدمت أساسًا للأغراض العسكرية والحسابات العلمية.', dur: 10000 },
  { id: 't-2', caption: 'السبعينيات والثمانينيات: انتشار الحواسب الشخصية، وبداية استخدام الأفراد للحاسب.', dur: 8500 },
  { id: 't-3', caption: 'التسعينيات: إتاحة الإنترنت للاستخدام التجاري وظهور الويب، فانتشر الوصول العالمي إلى المعلومات والبريد الإلكتروني.', dur: 9500 },
  { id: 't-4', caption: 'العقد الأول من الألفية: ظهور الهواتف الذكية، وانتشار سريع وواسع للإنترنت عبر الهواتف المحمولة.', dur: 9000 },
  { id: 't-5', caption: 'من العقد الثاني فصاعدًا: انتشار الحوسبة السحابية، وتحليل البيانات الضخمة والذكاء الاصطناعي، وتقديم موارد تكنولوجيا المعلومات كخدمات عبر الإنترنت.', dur: 11000 },
  { id: 't-all', caption: 'تطورت تقنيات المعلومات عبر مراحل متتابعة، وأصبحت الأجهزة أصغر حجمًا وأكثر ترابطًا.', dur: 9000 },
  // ── Moore's law ──
  { id: 'moore-law', caption: 'قانون مور: اتجاه تاريخي لازدياد عدد الترانزستورات في الدوائر المتكاملة بمعدل يقارب الضعف كل عامين، وهو ليس قانونًا فيزيائيًا ثابتًا.', dur: 12000 },
  { id: 'moore-limits', caption: 'يواجه تصغير المكونات تحديات هندسية وفيزيائية، لذلك يعتمد تحسين الأداء أيضًا على تعدد الأنوية والمعالجة المتوازية والتصميمات المتخصصة.', dur: 11500 },
  // ── Social changes ──
  { id: 'soc-five', caption: 'خمسة تحولات مجتمعية: شبكات التواصل الاجتماعي، والتجارة الإلكترونية، والعمل عن بُعد، والتعلم عبر الإنترنت، والدفع غير النقدي.', dur: 12000 },
  { id: 'soc-day', caption: 'في يوم واحد يستخدم الطالب أربعة من هذه التغيرات؛ فأيها سيكون الأصعب في التخلي عنه، ولماذا؟', dur: 10500 },
  // ── Emerging technologies ──
  { id: 'em-car', caption: 'القيادة الذاتية: تدرك المركبة محيطها بالكاميرات والمستشعرات، وتعالج بعض البيانات على متنها بالحوسبة الطرفية دون انتظار السحابة.', dur: 11000 },
  { id: 'em-why', caption: 'لأن التأخير في معالجة بيانات القيادة قد يؤثر في السلامة، تُعالَج بعض البيانات محليًا لتقليل زمن الاستجابة.', dur: 10500 },
  { id: 'em-xr', caption: 'الواقع المعزز يضيف عناصر رقمية إلى العالم الحقيقي، بينما يضع الواقع الافتراضي المستخدم داخل بيئة رقمية كاملة.', dur: 11000 },
  { id: 'em-quantum', caption: 'الحوسبة الكمومية تستخدم خصائص ميكانيكا الكم، وقد توفر تفوقًا في فئات محددة من المسائل، لكنها لا تسرّع جميع أنواع الحسابات.', dur: 11000 },
  // ── Wrap-up ──
  { id: 'order', caption: 'مثال محلول: الترتيب الصحيح هو بداية ظهور الحاسب، ثم تسويق الإنترنت تجاريًا، ثم ظهور الهواتف الذكية، ثم انتشار الحوسبة السحابية.', dur: 11000 },
  { id: 'match', caption: 'طابق: إضافة معلومات رقمية فوق العالم الحقيقي هي الواقع المعزز، وقيادة مركبة بأقل تدخل بشري هي القيادة الذاتية، والانغماس في فضاء افتراضي هو الواقع الافتراضي.', dur: 12000 },
  { id: 'answer', caption: 'إجابة السؤال الرئيسي: مرت تكنولوجيا المعلومات بمراحل متتابعة، غيّرت طرق الوصول إلى المعلومات والتواصل والعمل والتعلم والدفع، وأظهرت تحديات جديدة.', dur: 12000 },
  { id: 'summary', caption: 'في كل مرحلة أضافت تكنولوجيا المعلومات جهازًا جديدًا، وغيّرت معه طريقة تواصل المجتمع وعمله وتعلمه وسداده لمدفوعاته.', dur: 10000 },
]

const chapters = [
  { name: 'البداية', id: 'cover' },
  { name: 'تاريخ IT', id: 't-1' },
  { name: 'قانون مور', id: 'moore-law' },
  { name: 'التغيرات الاجتماعية', id: 'soc-five' },
  { name: 'تقنيات ناشئة', id: 'em-car' },
  { name: 'الخلاصة', id: 'order' },
]

const S = Object.fromEntries(steps.map((s, i) => [s.id, i])) as Record<string, number>
const step = ref(0)
const at = (id: string) => step.value === S[id]
const from = (id: string) => step.value >= S[id]!
const inRange = (a: string, b: string) => step.value >= S[a]! && step.value <= S[b]!

const glow = computed(() => {
  if (from('answer')) return 'bg-emerald-500/25'
  if (inRange('moore-law', 'moore-limits')) return 'bg-amber-500/20'
  if (inRange('em-car', 'em-quantum')) return 'bg-violet-500/20'
  return 'bg-sky-500/20'
})

const topics = ['🕰️ تاريخ IT', '📈 قانون مور', '👥 التغيرات الاجتماعية', '🚗 تقنيات ناشئة']
const letters = ['أ', 'ب', 'ج', 'د']

// solved example (1): the book's four options; only ب is right
const stageName = ['بداية ظهور الحاسب', 'تسويق الإنترنت تجاريًا', 'ظهور الهواتف الذكية', 'انتشار الحوسبة السحابية']
const orders = [
  { seq: [0, 2, 1, 3] },
  { seq: [0, 1, 2, 3], ok: true },
  { seq: [1, 0, 3, 2] },
  { seq: [2, 1, 0, 3] },
]

const match = [
  { text: 'تقنية تُضيف معلومات رقمية فوق صور من العالم الحقيقي', ans: '📱 الواقع المعزز', cls: 'border-sky-400 bg-sky-600/30 text-sky-50' },
  { text: 'تقنية تستخدم الذكاء الاصطناعي لقيادة مركبة بأقل تدخل بشري', ans: '🚗 القيادة الذاتية', cls: 'border-amber-400 bg-amber-600/30 text-amber-50' },
  { text: 'تقنية تتيح الانغماس في فضاء افتراضي يولّده الحاسب', ans: '🥽 الواقع الافتراضي', cls: 'border-violet-400 bg-violet-600/30 text-violet-50' },
]

const answerStages = [
  { i: '🏢', t: 'الحواسيب الأولى', cls: 'border-slate-400/60 bg-slate-800/60' },
  { i: '🖥️', t: 'الحواسب الشخصية', cls: 'border-amber-400/60 bg-amber-950/40' },
  { i: '🌐', t: 'الإنترنت والويب', cls: 'border-sky-400/60 bg-sky-950/45' },
  { i: '📱', t: 'الهواتف الذكية', cls: 'border-violet-400/60 bg-violet-950/45' },
  { i: '☁️', t: 'الحوسبة السحابية', cls: 'border-emerald-400/60 bg-emerald-950/40' },
]
const answer = [
  { icon: '📉', cls: 'border-white/15 bg-slate-900/85',
    text: 'لم يقتصر أثرها على أجهزة <span class="text-sky-300">أسرع وأصغر</span>، بل امتد إلى طرق الوصول إلى المعلومات والتواصل والعمل والتعلّم والدفع.' },
  { icon: '📲', cls: 'border-sky-400/60 bg-sky-950/40',
    text: 'ومع انتشار الإنترنت والهواتف الذكية والحوسبة السحابية، أصبحت <span class="text-sky-300">خدمات رقمية كثيرة</span> جزءًا من الحياة اليومية.' },
  { icon: '⚖️', cls: 'border-amber-400/60 bg-amber-950/35',
    text: 'وظهرت تحديات جديدة تتعلق <span class="text-amber-300">بالأمان والإنصاف وإتاحة الوصول</span>؛ لذلك يرتبط تطور التقنية دائمًا بتغيرات اجتماعية واقتصادية تحتاج إلى فهم وتقييم.' },
]

const summary = [
  { icon: '🕰️', cls: 'border-sky-400/60 bg-sky-950/40',
    text: 'تطورت تكنولوجيا المعلومات عبر مراحل: <span class="text-sky-300">الحواسب، والإنترنت، والهواتف الذكية، والحوسبة السحابية</span>.' },
  { icon: '📱', cls: 'border-amber-400/60 bg-amber-950/30',
    text: 'وفي كل مرحلة أضافت <span class="text-amber-300">جهازًا جديدًا</span>، وغيّرت معه طريقة تواصل المجتمع وعمله وتعلمه وسداده لمدفوعاته.' },
  { icon: '📈', cls: 'border-emerald-400/60 bg-emerald-950/40',
    text: '<span class="text-emerald-300">قانون مور</span> اتجاه تاريخي لتضاعف الترانزستورات كل عامين تقريبًا، وليس قانونًا فيزيائيًا ثابتًا.' },
]
</script>

<style scoped>
.cover-icon { animation: sl-pop .5s cubic-bezier(.3,1.6,.5,1) .2s forwards, floaty 4s ease-in-out 1s infinite; }
@keyframes floaty { 0%, 100% { transform: translateY(0) } 50% { transform: translateY(-12px) } }
.ring { animation: ring 2.2s ease-out infinite; }
@keyframes ring { 0% { transform: scale(1); opacity: .8 } 100% { transform: scale(1.5); opacity: 0 } }
.ok-row { animation: okRow .6s ease 5s forwards; }
@keyframes okRow { to { border-color: #34d399; background: rgba(6,78,59,.5) } }
.bad-row { animation: badRow .6s ease 5s forwards; }
@keyframes badRow { to { opacity: .45 } }
</style>
