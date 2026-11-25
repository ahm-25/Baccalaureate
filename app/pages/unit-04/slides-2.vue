<template>
  <SlidesPlayer v-model:step="step" :steps="steps" :chapters="chapters" back-to="/unit-04" :glow="glow">
    <!-- ═════════════ COVER ═════════════ -->
    <Transition name="sl-frame">
      <div v-if="at('cover')" class="absolute inset-0 flex flex-col items-center justify-center text-center" dir="rtl">
        <div class="cover-icon relative w-[150px] h-[150px] mb-8 rounded-[40px] bg-gradient-to-br from-sky-400 via-violet-500 to-amber-400 flex items-center justify-center shadow-[0_0_80px_rgba(139,92,246,.45)]">
          <span class="text-[78px]">🧭</span>
          <span class="ring absolute inset-0 rounded-[40px] border-4 border-violet-300"></span>
        </div>
        <p class="text-sky-300 font-bold text-2xl tracking-wide mb-3">الوحدة الرابعة · الدرس <span dir="ltr" class="inline-block">4-2</span></p>
        <h1 class="text-white font-black text-[60px] leading-tight">تصميم المعلومات وتجربة المستخدم</h1>
        <h2 class="text-slate-200 font-black text-[44px] leading-tight mb-8">للمواقع الإلكترونية</h2>
        <div class="flex items-center gap-3">
          <span v-for="(t, i) in topics" :key="t" class="sl-in sl-badge border-white/15 bg-white/5 text-slate-100 !text-xl"
                :style="{ '--d': `${1.2 + i * 0.25}s` }">{{ t }}</span>
        </div>
        <p class="mt-10 text-slate-400 text-xl font-semibold">اضغط ▶ للتشغيل أو انقر للتقدّم خطوة بخطوة</p>
      </div>
    </Transition>

    <!-- ═════════════ CHAPTERS ═════════════ -->
    <L2Persona v-if="inRange('p-def', 'p-why')" :f="step - S['p-def']!" />
    <L2Wireframe v-if="inRange('wf-def', 'wf-think')" :f="step - S['wf-def']!" />
    <L2Crap v-if="inRange('crap-intro', 'crap-think')" :f="step - S['crap-intro']!" />
    <L2Ucd v-if="inRange('ucd-def', 'ucd-goals')" :f="step - S['ucd-def']!" />
    <L2Solved v-if="inRange('ex-tf', 'ex-match')" :f="step - S['ex-tf']!" />
    <L2Engineer v-if="inRange('eng-data', 'eng-decide')" :f="step - S['eng-data']!" />

    <!-- ═════════════ CARDS ═════════════ -->
    <Transition name="sl-zoom" mode="out-in">
      <!-- Lesson question -->
      <div v-if="at('question')" key="q" class="absolute inset-0" dir="rtl">
        <div class="absolute top-[46px] inset-x-0 flex flex-col items-center gap-6">
          <!-- designer vs visitor -->
          <div class="flex items-center gap-10">
            <div v-for="(p, i) in povs" :key="p.who" class="sl-in w-[440px] h-[118px] rounded-3xl border-2 flex items-center gap-4 px-5" :class="p.cls"
                 :style="{ '--d': `${0.2 + i * 0.9}s` }">
              <span class="text-[56px] leading-none">{{ p.face }}</span>
              <div>
                <div class="text-[20px] font-black text-slate-300">{{ p.who }}</div>
                <div class="text-[24px] font-black text-white whitespace-nowrap">{{ p.says }}</div>
              </div>
            </div>
          </div>
          <p class="sl-in w-[1080px] text-[23px] font-bold text-slate-300 text-center leading-relaxed" style="--d: 1.8s">
            قد يبدو الموقع منطقيًا لمصممه لكنه يربك زواره؛ لذلك يجب أن يعتمد التصميم على
            <span class="text-sky-300 font-black">فهم المستخدم واحتياجاته وسياق استخدامه</span>، لا على ذوق المصمم فقط.
          </p>
          <div class="sl-card sl-in border-amber-400/70 px-12 py-7 text-center w-[1080px]" style="--d: 2.8s">
            <span class="inline-block mb-4 px-5 py-1.5 rounded-full bg-amber-400 text-amber-950 text-xl font-black">❓ السؤال الرئيسي</span>
            <h2 class="text-[36px] leading-[1.55] font-black text-white">
              كيف يخطط المصممون لموقع إلكتروني <span class="text-sky-300">حول مستخدميه</span>،
              وما <span class="text-emerald-300">المبادئ</span> التي تجعل الصفحة واضحة وسهلة الاستخدام؟
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
            <span class="w-11 h-11 rounded-full bg-slate-700 text-white text-xl font-black flex items-center justify-center shrink-0">{{ i + 1 }}</span>
            <p class="flex-1 text-[22px] font-bold text-slate-100 leading-snug">{{ r.text }}</p>
            <div class="relative w-[270px] h-[56px] shrink-0">
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
            كيف نخطط موقعًا حول مستخدميه؟ نبدأ من <span class="text-emerald-300 font-black">فهم احتياجات المستخدم</span> ثم نخطط ونصمم ونختبر ونحسّن.
          </p>
        </div>
        <div class="absolute top-[140px] inset-x-0 grid grid-cols-2 gap-4 w-[1100px] mx-auto">
          <div v-for="(a, i) in answer" :key="a.title" class="sl-in rounded-3xl border-2 px-6 py-4 flex gap-4" :class="a.cls"
               :style="{ '--d': `${0.6 + i * 1.1}s` }">
            <span class="text-[40px] leading-none">{{ a.icon }}</span>
            <div>
              <div class="text-[23px] font-black text-white">{{ a.title }}</div>
              <p class="text-[19px] font-bold text-slate-200 leading-snug">{{ a.text }}</p>
            </div>
          </div>
        </div>
        <div class="absolute top-[440px] inset-x-0 flex justify-center">
          <div class="sl-in w-[1100px] rounded-3xl border-2 border-amber-400/70 bg-amber-950/40 px-7 py-3.5 flex items-center gap-4" style="--d: 5.4s">
            <span class="text-[40px] leading-none">♿</span>
            <p class="text-[20px] font-bold text-white leading-snug">
              وتبقى <span class="text-amber-300 font-black">قابلية الاستخدام وإمكانية الوصول</span> هدفين مستقلين يحتاجان اختبارًا ومعايير مناسبة، ولا تكفي المبادئ البصرية وحدها لتحقيقهما.
            </p>
          </div>
        </div>
      </div>

      <!-- Summary -->
      <div v-else-if="at('summary')" key="summary" class="absolute inset-0 flex flex-col items-center pt-[64px]" dir="rtl">
        <div class="sl-pop text-[56px] font-black text-white mb-2">⭐ الخلاصة</div>
        <p class="sl-in text-2xl font-bold text-slate-400 mb-8" style="--d: .3s">تذكّر:</p>
        <div class="flex items-center gap-3">
          <template v-for="(n, i) in chain" :key="n.name">
            <div class="sl-in w-[236px] h-[176px] rounded-3xl border-2 flex flex-col items-center justify-center text-center px-3" :class="n.cls"
                 :style="{ '--d': `${0.8 + i * 1.3}s` }">
              <span class="text-[46px] leading-none">{{ n.icon }}</span>
              <span class="mt-2 text-[24px] font-black text-white leading-tight">{{ n.name }}</span>
              <span class="mt-1 text-[20px] font-black whitespace-nowrap" :class="n.roleCls">({{ n.role }})</span>
            </div>
            <span v-if="i < chain.length - 1" class="sl-fade text-[34px] font-black text-slate-400" :style="{ '--d': `${1.4 + i * 1.3}s` }">←</span>
          </template>
        </div>
        <div class="sl-pop mt-10 rounded-3xl border-2 border-emerald-400 bg-emerald-950/50 px-10 py-4 text-[34px] font-black text-white" style="--d: 6.2s">
          🎯 صمّم من <span class="text-emerald-300">المستخدم</span> إلى الداخل
        </div>
      </div>
    </Transition>
  </SlidesPlayer>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import SlidesPlayer, { type SlideStep } from '~/components/slides/Player.vue'
import L2Persona from '~/components/slides/unit04/lesson2/Persona.vue'
import L2Wireframe from '~/components/slides/unit04/lesson2/Wireframe.vue'
import L2Crap from '~/components/slides/unit04/lesson2/Crap.vue'
import L2Ucd from '~/components/slides/unit04/lesson2/Ucd.vue'
import L2Solved from '~/components/slides/unit04/lesson2/Solved.vue'
import L2Engineer from '~/components/slides/unit04/lesson2/Engineer.vue'

definePageMeta({ layout: false })
useHead({ title: 'سلايدر الدرس 4-2: تصميم المعلومات وتجربة المستخدم' })

/* ───────── Timeline ─────────
   Each frame is addressed by its id, so frames can be inserted without renumbering.
   Chapter components receive a local frame number counted from their first frame. */
const steps: SlideStep[] = [
  { id: 'cover', caption: '', dur: 4000 },
  { id: 'question', caption: 'السؤال الرئيسي: كيف يخطط المصممون لموقع إلكتروني حول مستخدميه، وما المبادئ التي تجعل الصفحة واضحة وسهلة الاستخدام؟', dur: 10000 },
  // ── Persona ──
  { id: 'p-def', caption: 'شخصية المستخدم (Persona): تمثيل لنوع من المستخدمين، يُبنى قدر الإمكان على بحث أو بيانات عن أهدافهم واحتياجاتهم وسلوكهم وسياقهم وتحدياتهم.', dur: 11000 },
  { id: 'p-why', caption: 'تساعد شخصية المستخدم الفريق على مناقشة احتياجات نمط من المستخدمين بدل الاعتماد على الافتراضات الشخصية، لكنها ليست خطوة إلزامية في كل مشروع.', dur: 10500 },
  // ── Wireframe ──
  { id: 'wf-def', caption: 'المخطط الهيكلي (Wireframe): مخطط أولي يحدد أماكن العناصر وأولوياتها بتفاصيل بصرية قليلة، ثم يتطور إلى تصميم نهائي متكامل.', dur: 10000 },
  { id: 'wf-fig', caption: 'مثال على إطار هيكلي: الرأس، ثم التنقل، ثم المحتوى الرئيسي والشريط الجانبي، ثم تذييل الصفحة؛ ويُترك التصميم البصري لمرحلة لاحقة.', dur: 10000 },
  { id: 'wf-think', caption: 'توقف وفكر: إذا حُددت الألوان والخطوط أولًا انجرفت النقاشات نحو التفضيلات الشخصية؛ وتحديد مكان المعلومات وأولويتها أولًا يسهّل الاتفاق.', dur: 10500 },
  // ── CRAP ──
  { id: 'crap-intro', caption: 'تساعد مبادئ CRAP الأربعة على تنظيم الشكل وجعل الصفحة أسهل للفهم، لكنها لا تحل محل معايير قابلية الاستخدام أو إمكانية الوصول.', dur: 10500 },
  { id: 'crap-cr', caption: 'التباين يجعل أولوية المعلومات واضحة ويبرز أهم العناصر فورًا؛ والتكرار يكرر خصائص معينة لتحقيق الاتساق، فيتنقل المستخدم دون تشتت.', dur: 11000 },
  { id: 'crap-ap', caption: 'المحاذاة تضع كل عنصر على خط أساس مشترك فتبدو الشاشة منظمة؛ والتقارب يضع المعلومات المرتبطة قريبة حتى تُدرَك كمجموعة واحدة.', dur: 11000 },
  { id: 'crap-think', caption: 'توقف وفكر: التقارب هو المبدأ الذي يجمع العناصر المرتبطة معًا، والتباين هو الذي يجعل العنصر الأهم بارزًا.', dur: 9000 },
  // ── UCD ──
  { id: 'ucd-def', caption: 'التصميم المتمحور حول المستخدم: يبدأ بفهم المستخدم ومهمته وظروفه، ثم ينظم الفريق المعلومات ويصمم الحل ويختبره مع المستخدمين ويكرر التحسين.', dur: 11000 },
  { id: 'ucd-goals', caption: 'من أهداف التصميم الجيد تحسين قابلية الاستخدام، أي سهولة وفاعلية إنجاز المهمة، ودعم إمكانية الوصول الرقمي لذوي الإعاقة.', dur: 11000 },
  // ── Solved example + think like an engineer ──
  { id: 'ex-tf', caption: 'مثال محلول: العبارتان (أ) و(ج) صحيحتان، أما (ب) و(د) فخاطئتان: المخطط الهيكلي بلا ألوان أو زخارف، وUCD يصمم من منظور المستخدم.', dur: 10500 },
  { id: 'ex-match', caption: 'إبراز المعلومات المهمة هو التباين، وتكرار النمط هو التكرار، ومحاذاة المواضع هي المحاذاة، وتجميع المعلومات المرتبطة هو التقارب.', dur: 10000 },
  { id: 'eng-data', caption: 'فكّر كمهندس: اجمع البيانات بسؤال زملائك عن أول ما يبحثون عنه، ثم حلّل مستخدميك: مستخدم ضعيف البصر، وشخص لا يتوفر لديه إنترنت منزلي.', dur: 11000 },
  { id: 'eng-decide', caption: 'قرّر بناءً على بياناتك: رتّب أقسام الصفحة، واختر مبدأً بصريًا، وعالج حاجز وصول؛ فالقرار الصحيح: ابدأ من المستخدم، ثم صمّم.', dur: 11000 },
  // ── Wrap-up ──
  { id: 'review', caption: 'مراجعة سريعة: ما المصطلح المناسب لكل وصف؟', dur: 10500 },
  { id: 'answer', caption: 'إجابة السؤال الرئيسي: نفهم المستخدم ونلخصه بشخصية، ونحدد الأماكن بمخطط هيكلي، وننظم الشكل بمبادئ CRAP، ثم نختبر ونحسّن.', dur: 12000 },
  { id: 'summary', caption: 'تذكّر: شخصية المستخدم (من)، ثم المخطط الهيكلي (أين)، ثم CRAP (اجعله واضحًا)، ثم UCD (قرّر لصالح المستخدم). صمّم من المستخدم إلى الداخل.', dur: 10000 },
]

const chapters = [
  { name: 'البداية', id: 'cover' },
  { name: 'الشخصية', id: 'p-def' },
  { name: 'المخطط الهيكلي', id: 'wf-def' },
  { name: 'CRAP', id: 'crap-intro' },
  { name: 'UCD', id: 'ucd-def' },
  { name: 'تطبيق', id: 'ex-tf' },
  { name: 'الخلاصة', id: 'review' },
]

const S = Object.fromEntries(steps.map((s, i) => [s.id, i])) as Record<string, number>
const step = ref(0)
const at = (id: string) => step.value === S[id]
const from = (id: string) => step.value >= S[id]!
const inRange = (a: string, b: string) => step.value >= S[a]! && step.value <= S[b]!

const glow = computed(() => {
  if (from('answer')) return 'bg-emerald-500/25'
  if (inRange('wf-def', 'wf-think')) return 'bg-violet-500/20'
  if (inRange('crap-intro', 'crap-think')) return 'bg-amber-500/20'
  if (inRange('ucd-def', 'ucd-goals')) return 'bg-emerald-500/20'
  return 'bg-sky-500/20'
})

const topics = ['👤 شخصية المستخدم', '📐 المخطط الهيكلي', '🧱 مبادئ CRAP', '🎯 التصميم المتمحور حول المستخدم']

/* illustrative mini-scene for the book's opening sentence */
const povs = [
  { who: 'المصمم', face: '😎', says: '«الموقع منطقي وواضح!»', cls: 'border-sky-400/60 bg-sky-950/45' },
  { who: 'الزائر', face: '😕', says: '«أين أجد ما أبحث عنه؟»', cls: 'border-rose-400/60 bg-rose-950/35' },
]

/* book «تدرّب» 1 */
const review = [
  { text: 'تمثيل يلخص نوعًا من المستخدمين واحتياجاته وسياق استخدامه', ans: '👤 شخصية المستخدم', cls: 'border-sky-400 bg-sky-600/30 text-sky-50' },
  { text: 'مخطط يوضح مكان وأولوية المعلومات في صفحة الويب', ans: '📐 المخطط الهيكلي', cls: 'border-violet-400 bg-violet-600/30 text-violet-50' },
  { text: 'المبادئ الأربعة للتصميم عند التعبير عنها بالأحرف الأولى الإنجليزية', ans: 'CRAP', cls: 'border-amber-400 bg-amber-600/30 text-amber-50 font-mono' },
  { text: 'نهج يصمم المواقع والخدمات من منظور المستخدم (اختصاره ثلاثة أحرف)', ans: 'UCD', cls: 'border-emerald-400 bg-emerald-600/30 text-emerald-50 font-mono' },
]
const answer = [
  { icon: '🎯', title: 'التصميم المتمحور حول المستخدم', cls: 'border-emerald-400/60 bg-emerald-950/40',
    text: 'يجعل فهم احتياجات المستخدم وسياق الاستخدام أساسًا للقرارات، ثم يتطور الحل بالاختبار والتحسين.' },
  { icon: '👤', title: 'شخصية المستخدم', cls: 'border-sky-400/60 bg-sky-950/45',
    text: 'مبنية على بحث أو بيانات لتلخيص نوع من المستخدمين.' },
  { icon: '📐', title: 'المخطط الهيكلي', cls: 'border-violet-400/60 bg-violet-950/40',
    text: 'لتحديد أماكن العناصر وأولوياتها.' },
  { icon: '🧱', title: 'المبادئ البصرية', cls: 'border-amber-400/60 bg-amber-950/35',
    text: 'مثل التباين والتكرار والمحاذاة والتقارب لتنظيم الشكل.' },
]
const chain = [
  { icon: '👤', name: 'شخصية المستخدم', role: 'من', cls: 'border-sky-400/70 bg-sky-950/45', roleCls: 'text-sky-300' },
  { icon: '📐', name: 'المخطط الهيكلي', role: 'أين', cls: 'border-violet-400/70 bg-violet-950/45', roleCls: 'text-violet-300' },
  { icon: '🧱', name: 'CRAP', role: 'اجعله واضحًا', cls: 'border-amber-400/70 bg-amber-950/40', roleCls: 'text-amber-300' },
  { icon: '🎯', name: 'UCD', role: 'قرّر لصالح المستخدم', cls: 'border-emerald-400/70 bg-emerald-950/45', roleCls: 'text-emerald-300' },
]
</script>

<style scoped>
.cover-icon { opacity: 0; animation: sl-pop .5s cubic-bezier(.3,1.6,.5,1) .2s forwards, floaty 4s ease-in-out 1s infinite; }
@keyframes floaty { 0%, 100% { transform: translateY(0) } 50% { transform: translateY(-12px) } }
.ring { animation: ring 2.2s ease-out infinite; }
@keyframes ring { 0% { transform: scale(1); opacity: .8 } 100% { transform: scale(1.5); opacity: 0 } }
</style>
