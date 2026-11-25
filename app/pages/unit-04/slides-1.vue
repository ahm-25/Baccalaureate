<template>
  <SlidesPlayer v-model:step="step" :steps="steps" :chapters="chapters" back-to="/unit-04" :glow="glow">
    <!-- ═════════════ COVER ═════════════ -->
    <Transition name="sl-frame">
      <div v-if="at('cover')" class="absolute inset-0 flex flex-col items-center justify-center text-center" dir="rtl">
        <div class="cover-icon relative w-[170px] h-[170px] mb-9 rounded-[44px] bg-gradient-to-br from-sky-400 via-violet-500 to-amber-400 flex items-center justify-center shadow-[0_0_80px_rgba(56,189,248,.45)]">
          <span class="text-[86px]">📺</span>
          <span class="ring absolute inset-0 rounded-[44px] border-4 border-sky-300"></span>
        </div>
        <p class="text-sky-300 font-bold text-2xl tracking-wide mb-3">الوحدة الرابعة · الدرس <span dir="ltr" class="inline-block">4-1</span></p>
        <h1 class="text-white font-black text-7xl leading-tight mb-8">أنواع الوسائط وخصائصها</h1>
        <div class="flex items-center gap-3">
          <span v-for="(t, i) in topics" :key="t" class="sl-in sl-badge border-white/15 bg-white/5 text-slate-100 !text-xl"
                :style="{ '--d': `${1.2 + i * 0.25}s` }">{{ t }}</span>
        </div>
        <p class="mt-12 text-slate-400 text-xl font-semibold">اضغط ▶ للتشغيل أو انقر للتقدّم خطوة بخطوة</p>
      </div>
    </Transition>

    <!-- ═════════════ CHAPTERS ═════════════ -->
    <L1MediaTypes v-if="inRange('media-carry', 'media-traits')" :f="step - S['media-carry']!" />
    <L1Website v-if="inRange('web-mix', 'web-balance')" :f="step - S['web-mix']!" />
    <L1Choosing v-if="inRange('choose-table', 'choose-idea')" :f="step - S['choose-table']!" />
    <L1Solved v-if="inRange('ex-tf', 'ex-match')" :f="step - S['ex-tf']!" />
    <L1Engineer v-if="inRange('eng-data', 'eng-decide')" :f="step - S['eng-data']!" />

    <!-- ═════════════ CARDS ═════════════ -->
    <Transition name="sl-zoom" mode="out-in">
      <!-- Lesson question -->
      <div v-if="at('question')" key="q" class="absolute inset-0" dir="rtl">
        <p class="sl-in absolute top-[150px] inset-x-0 text-center text-[27px] font-black text-slate-200">
          قبل بناء موقع إلكتروني، من المفيد أن تسأل: <span class="sl-hl-amber">لماذا نختار هذه الوسيلة؟</span>
        </p>
        <div class="absolute top-[212px] inset-x-0 flex justify-center gap-3">
          <div v-for="(m, i) in intro" :key="m.name" class="sl-pop w-[212px] h-[112px] rounded-2xl border-2 bg-slate-900/80 flex flex-col items-center justify-center px-3 text-center"
               :class="m.cls" :style="{ '--d': `${0.6 + i * 0.45}s` }">
            <div class="text-[19px] font-black text-white whitespace-nowrap">{{ m.icon }} {{ m.name }}</div>
            <p class="mt-1 text-[16px] font-bold text-slate-300 leading-snug">{{ m.text }}</p>
          </div>
        </div>
        <p class="sl-in absolute top-[340px] inset-x-0 text-center text-[23px] font-bold text-slate-300" style="--d: 3s">
          لذلك يعتمد الاختيار على <span class="text-sky-300 font-black">الرسالة</span> و<span class="text-amber-300 font-black">الجمهور</span> و<span class="text-emerald-300 font-black">الموارد</span>.
        </p>
        <div class="absolute top-[392px] inset-x-0 flex justify-center">
          <div class="sl-card sl-in border-amber-400/70 w-[1060px] px-10 py-5 text-center" style="--d: 3.8s">
            <span class="inline-block mb-2 px-5 py-1 rounded-full bg-amber-400 text-amber-950 text-xl font-black">❓ السؤال الرئيسي</span>
            <h2 class="text-[30px] leading-[1.5] font-black text-white">
              ما هي <span class="text-emerald-300">نقاط القوة</span> و<span class="text-rose-300">القيود</span> في الوسائط المختلفة،
              وكيف تختار <span class="text-amber-300">الوسيلة المناسبة</span> لغرض وجمهور معينين؟
            </h2>
          </div>
        </div>
      </div>

      <!-- Quick review -->
      <div v-else-if="at('review')" key="review" class="absolute inset-0" dir="rtl">
        <div class="absolute top-8 inset-x-0 text-center">
          <div class="text-5xl font-black text-white">✏️ مراجعة سريعة</div>
          <p class="mt-2 text-xl font-bold text-slate-400">ما المصطلح أو الوسيلة المناسبة لكل وصف؟</p>
        </div>
        <div class="absolute top-[155px] inset-x-0 flex flex-col items-center gap-4">
          <div v-for="(r, i) in review" :key="r.text" class="sl-in w-[1120px] h-[88px] rounded-3xl border-2 border-white/10 bg-slate-900/80 flex items-center gap-5 px-6"
               :style="{ '--d': `${0.3 + i * 0.3}s` }">
            <span class="w-11 h-11 rounded-full bg-slate-700 text-white text-xl font-black flex items-center justify-center shrink-0">{{ letters[i] }}</span>
            <p class="flex-1 text-[23px] font-bold text-slate-100 leading-snug">{{ r.text }}</p>
            <div class="relative w-[290px] h-[56px] shrink-0">
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
          <p class="mt-3 text-[23px] font-bold text-slate-200 text-center">
            أجاب الدرس عن السؤال الرئيسي: <span class="text-amber-300 font-black">كيف نختار الوسيلة المناسبة؟</span>
          </p>
        </div>
        <div class="absolute top-[140px] inset-x-0 grid grid-cols-2 gap-3.5 w-[1120px] mx-auto">
          <div v-for="(a, i) in answer" :key="a.title" class="sl-in rounded-3xl border-2 px-5 py-3 flex gap-4" :class="a.cls"
               :style="{ '--d': `${0.6 + i * 1.1}s` }">
            <span class="text-[38px] leading-none">{{ a.icon }}</span>
            <div>
              <div class="text-[22px] font-black text-white">{{ a.title }}</div>
              <p class="text-[18px] font-bold text-slate-200 leading-snug">{{ a.text }}</p>
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
            <p class="text-[28px] font-black text-white leading-snug" v-html="p.text"></p>
          </div>
        </div>
      </div>
    </Transition>
  </SlidesPlayer>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import SlidesPlayer, { type SlideStep } from '~/components/slides/Player.vue'
import L1MediaTypes from '~/components/slides/unit04/lesson1/MediaTypes.vue'
import L1Website from '~/components/slides/unit04/lesson1/Website.vue'
import L1Choosing from '~/components/slides/unit04/lesson1/Choosing.vue'
import L1Solved from '~/components/slides/unit04/lesson1/Solved.vue'
import L1Engineer from '~/components/slides/unit04/lesson1/Engineer.vue'

definePageMeta({ layout: false })
useHead({ title: 'سلايدر الدرس 4-1: أنواع الوسائط وخصائصها' })

/* ───────── Timeline ─────────
   Each frame is addressed by its id, so frames can be inserted without renumbering.
   Chapter components receive a local frame number counted from their first frame. */
const steps: SlideStep[] = [
  { id: 'cover', caption: '', dur: 4000 },
  { id: 'question', caption: 'سؤال الدرس: ما هي نقاط القوة والقيود في الوسائط المختلفة، وكيف تختار الوسيلة المناسبة لغرض وجمهور معينين؟', dur: 11000 },
  // ── Media characteristics ──
  { id: 'media-carry', caption: 'لكل وسيلة لنقل المعلومات خصائص مختلفة: التلفزيون فيديو وصوت، والراديو صوت، والصحيفة نص وصور، والموقع ووسائل التواصل تجمعها كلها.', dur: 11000 },
  { id: 'media-dir', caption: 'اتجاه واحد: من المُرسِل إلى المُستقبِل فقط. اتجاهين: يمكن للمستخدمين الاستجابة والمشاركة.', dur: 11000 },
  { id: 'media-traits', caption: 'التلفزيون يصل إلى جمهور كبير في وقت واحد، والراديو يُسمع أثناء التنقل، والصحيفة تُقرأ دون اتصال، والموقع يُحدَّث، ووسائل التواصل تنشر بسرعة.', dur: 12000 },
  // ── Websites: strengths and limits ──
  { id: 'web-mix', caption: 'يجمع الموقع الإلكتروني بين مزايا لا تتوفر في وسائل الإعلام أحادية الاتجاه.', dur: 9500 },
  { id: 'web-strengths', caption: 'نقاط قوة المواقع: تجمع النص والصور والفيديو، وتُحدَّث في أي وقت، ويُوصل إليها من أي مكان، وتتيح التفاعل، وتُستخدم من المتصفح.', dur: 12000 },
  { id: 'web-limits', caption: 'قيود المواقع: تحتاج معظم وظائفها إلى اتصال، ويجب على المستخدم فتحها، وقد تختلف سرعة العرض والتحميل حسب الجهاز والشبكة.', dur: 12000 },
  { id: 'web-balance', caption: 'نقاط قوة الموقع: متنوع، قابل للتحديث، عالمي، ثنائي الاتجاه. وقيوده: يحتاج إلى إنترنت، ويجب على المستخدمين البحث عنه.', dur: 9500 },
  // ── Choosing media ──
  { id: 'choose-table', caption: 'عند نقل المعلومات، من المهم اختيار الوسيلة الأنسب وفقًا للغرض والجمهور المستهدف.', dur: 12000 },
  { id: 'choose-think', caption: 'توقف وفكر: أي وسيلة قد تختارها للوصول إلى أكبر عدد من الناس في آنٍ واحد، وأيها لتتيح لهم الاستجابة إليك؟', dur: 11000 },
  { id: 'choose-mix', caption: 'في الواقع العملي، غالبًا ما تُستخدم عدة وسائط معًا: إعلان تلفزيوني يوجّه إلى موقع، والموقع يشجع على النشر عبر وسائل التواصل.', dur: 11000 },
  { id: 'choose-idea', caption: 'الفكرة الرئيسة: لا توجد وسيلة واحدة هي الأفضل لكل شيء؛ اختر بناءً على الغرض والجمهور، واجمع بين الوسائط.', dur: 10500 },
  // ── Solved example ──
  { id: 'ex-tf', caption: 'مثال محلول (1): ضع ○ إذا كانت العبارة صحيحة أو × إذا كانت خاطئة.', dur: 13000 },
  { id: 'ex-match', caption: 'مثال محلول (2): اربط كل غرض بالوسيلة الأنسب: الموقع للتفاصيل، ووسائل التواصل للتناقل الشفهي، والتلفزيون للجمهور الكبير.', dur: 12000 },
  // ── Think like an engineer ──
  { id: 'eng-data', caption: 'فكّر كمهندس: مكتبة عامة تريد إخبار الناس عن برنامج قراءة مجاني. أولًا اجمع البيانات: أين يلاحظ الناس الإعلانات المحلية؟', dur: 12000 },
  { id: 'eng-audience', caption: 'ثانيًا حلّل الجمهور: دوّن لكل مجموعة فائدة واحدة وعيبًا واحدًا لاستخدام موقع إلكتروني كقناة رئيسية للمكتبة.', dur: 12000 },
  { id: 'eng-decide', caption: 'ثالثًا قرّر: الجمع بين الوسائط حسب الغرض، مع وسيلة تصل إلى العائلات التي قد لا تكون متصلة بالإنترنت.', dur: 12000 },
  // ── Wrap-up ──
  { id: 'review', caption: 'مراجعة سريعة: اختر المصطلح أو الوسيلة المناسبة لكل وصف.', dur: 10500 },
  { id: 'answer', caption: 'إجابة السؤال الرئيسي: لا توجد وسيلة أفضل لكل غرض؛ فالاختيار يعتمد على الجمهور والرسالة والموارد، وقد يكون الجمع بين عدة وسائل هو الأنسب.', dur: 13000 },
  { id: 'summary', caption: 'لا توجد وسيلة هي الأفضل لكل شيء: طابق الوسيلة مع الغرض والجمهور، واجمع بين الوسائط بحيث تقوم كل واحدة بما تُجيده.', dur: 10000 },
]

const chapters = [
  { name: 'البداية', id: 'cover' },
  { name: 'الخصائص', id: 'media-carry' },
  { name: 'الموقع الإلكتروني', id: 'web-mix' },
  { name: 'اختيار الوسيلة', id: 'choose-table' },
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
  if (from('answer')) return 'bg-emerald-500/25'
  if (at('web-limits')) return 'bg-rose-500/20'
  if (inRange('web-mix', 'web-balance')) return 'bg-violet-500/20'
  if (inRange('choose-table', 'choose-idea') || inRange('eng-data', 'eng-decide')) return 'bg-amber-500/20'
  return 'bg-sky-500/20'
})

const topics = ['📡 خصائص الوسائط', '🌐 قوة الموقع وقيوده', '🎯 الاختيار وفقًا للغرض', '🧩 الجمع بين الوسائط']
const intro = [
  { icon: '📺', name: 'التلفزيون', text: 'جمهور كبير في وقت واحد', cls: 'border-sky-400/60' },
  { icon: '📻', name: 'الراديو', text: 'أثناء التنقل أو أداء مهام أخرى', cls: 'border-amber-400/60' },
  { icon: '📰', name: 'الصحيفة', text: 'متاحة على الورق دون اتصال', cls: 'border-slate-300/60' },
  { icon: '🌐', name: 'الموقع', text: 'نص وصور وصوت وفيديو + تفاعل', cls: 'border-violet-400/60' },
  { icon: '💬', name: 'وسائل التواصل', text: 'نشر سريع وتشجيع المشاركة', cls: 'border-emerald-400/60' },
]
const letters = ['أ', 'ب', 'ج', 'د']
const review = [
  { text: 'اتصال يكون من المُرسِل إلى المُستقبِل فقط', ans: '← اتجاه واحد', cls: 'border-sky-400 bg-sky-600/30 text-sky-50' },
  { text: 'وسيلة مطبوعة تبقى موجودة ماديًا ويمكن قراءتها دون اتصال بالإنترنت', ans: '📰 الصحيفة', cls: 'border-slate-300 bg-slate-600/40 text-white' },
  { text: 'الوسيلة الأنسب لتقديم معلومات تفصيلية منظمة في صفحات وأقسام', ans: '🌐 الموقع الإلكتروني', cls: 'border-violet-400 bg-violet-600/30 text-violet-50' },
  { text: 'الوسيلة الأنسب للانتشار عن طريق التناقل الشفهي', ans: '💬 وسائل التواصل', cls: 'border-emerald-400 bg-emerald-600/30 text-emerald-50' },
]
const answer = [
  { icon: '📺', title: 'التلفزيون', cls: 'border-sky-400/60 bg-sky-950/45',
    text: 'يمكنه الوصول إلى جمهور كبير.' },
  { icon: '📻', title: 'الراديو', cls: 'border-amber-400/60 bg-amber-950/35',
    text: 'يمكن الاستماع إليه في مواقف مختلفة بحسب التغطية.' },
  { icon: '📰', title: 'الصحيفة', cls: 'border-slate-300/50 bg-slate-800/60',
    text: 'تبقى متاحة دون شبكة.' },
  { icon: '💬', title: 'وسائل التواصل', cls: 'border-emerald-400/60 bg-emerald-950/40',
    text: 'يمكنها نشر المعلومات بسرعة وتشجيع المشاركة.' },
  { icon: '🌐', title: 'الموقع الإلكتروني', cls: 'border-violet-400/60 bg-violet-950/40',
    text: 'يجمع أنواعًا متعددة من المحتوى، ويمكن تحديثه وإضافة التفاعل إليه، لكنه يحتاج غالبًا إلى اتصال، وقد يتطلب من المستخدم فتحه ما لم توجد آليات تنبيه.' },
  { icon: '🧩', title: 'لا توجد وسيلة أفضل لكل غرض', cls: 'border-amber-300/70 bg-amber-900/30',
    text: 'فالاختيار يعتمد على الجمهور والرسالة والموارد، وقد يكون الجمع بين عدة وسائل هو الأنسب.' },
]
const summary = [
  { icon: '⚖️', cls: 'border-rose-400/60 bg-rose-950/30',
    text: 'لا توجد وسيلة هي <span class="text-rose-300">الأفضل لكل شيء</span>.' },
  { icon: '🎯', cls: 'border-amber-400/60 bg-amber-950/30',
    text: 'طابق الوسيلة مع <span class="text-amber-300">الغرض والجمهور</span>.' },
  { icon: '🧩', cls: 'border-emerald-400/60 bg-emerald-950/40',
    text: 'واجمع بين الوسائط بحيث تقوم كل واحدة <span class="text-emerald-300">بما تُجيده</span>.' },
]
</script>

<style scoped>
.cover-icon { opacity: 0; animation: sl-pop .5s cubic-bezier(.3,1.6,.5,1) .2s forwards, floaty 4s ease-in-out 1s infinite; }
@keyframes floaty { 0%, 100% { transform: translateY(0) } 50% { transform: translateY(-12px) } }
.ring { animation: ring 2.2s ease-out infinite; }
@keyframes ring { 0% { transform: scale(1); opacity: .8 } 100% { transform: scale(1.5); opacity: 0 } }
</style>
