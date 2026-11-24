<template>
  <SlidesPlayer v-model:step="step" :steps="steps" :chapters="chapters" back-to="/unit-03" :glow="glow">
    <!-- ═════════════ COVER ═════════════ -->
    <Transition name="sl-frame">
      <div v-if="at('cover')" class="absolute inset-0 flex flex-col items-center justify-center text-center" dir="rtl">
        <div class="cover-icon relative w-[170px] h-[170px] mb-9 rounded-[44px] bg-gradient-to-br from-violet-500 via-amber-400 to-sky-400 flex items-center justify-center shadow-[0_0_80px_rgba(139,92,246,.45)] sl-pop" style="--d: .2s">
          <span class="text-[86px]">🧱</span>
          <span class="ring absolute inset-0 rounded-[44px] border-4 border-violet-300"></span>
        </div>
        <p class="text-sky-300 font-bold text-2xl tracking-wide mb-3">الوحدة الثالثة · الدرس <span dir="ltr" class="inline-block">3-1</span></p>
        <h1 class="text-white font-black text-7xl leading-tight mb-8">البنية العامة لتطبيقات الويب</h1>
        <div class="flex items-center gap-3">
          <span v-for="(t, i) in topics" :key="t" class="sl-in sl-badge border-white/15 bg-white/5 text-slate-100 !text-xl"
                :style="{ '--d': `${1.2 + i * 0.25}s` }">{{ t }}</span>
        </div>
        <p class="mt-12 text-slate-400 text-xl font-semibold">اضغط ▶ للتشغيل أو انقر للتقدّم خطوة بخطوة</p>
      </div>
    </Transition>

    <!-- ═════════════ CHAPTERS ═════════════ -->
    <L1WebApp v-if="inRange('app-def', 'app-behind')" :f="step - S['app-def']!" />
    <L1Layers v-if="inRange('layers-fig', 'layers-data')" :f="step - S['layers-fig']!" />
    <L1Flow v-if="inRange('flow-intro', 'flow-6')" :f="step - S['flow-intro']!" />
    <L1Apps v-if="inRange('apps-video', 'apps-same')" :f="step - S['apps-video']!" />
    <L1Engineer v-if="inRange('eng-assign', 'eng-decide')" :f="step - S['eng-assign']!" />

    <!-- ═════════════ CARDS ═════════════ -->
    <Transition name="sl-zoom" mode="out-in">
      <!-- Lesson question -->
      <div v-if="at('question')" key="q" class="absolute inset-0 flex items-center justify-center" dir="rtl">
        <div class="w-[1080px] flex flex-col items-center gap-7">
          <p class="sl-in text-2xl font-bold text-slate-300 text-center leading-relaxed">
            عندما تبحث في موقع فيديو، أو تتسوق عبر الإنترنت، أو تستخدم بريدًا على الويب… فأنت تستخدم <span class="text-violet-300">تطبيق ويب</span>
            <br>وخلف ما تراه، قد تعمل <span class="sl-hl-amber font-black">أجزاء مختلفة معًا</span>
          </p>
          <div class="sl-card sl-in border-amber-400/70 px-12 py-8 text-center" style="--d: 1s">
            <span class="inline-block mb-4 px-5 py-1.5 rounded-full bg-amber-400 text-amber-950 text-xl font-black">❓ السؤال الرئيسي</span>
            <h2 class="text-[38px] leading-[1.55] font-black text-white">
              كيف يُبنى <span class="text-violet-300">تطبيق الويب</span>، وكيف تعمل <span class="text-sky-300">طبقاته الثلاث</span> معًا
              للاستجابة لما يفعله المستخدم؟
            </h2>
          </div>
        </div>
      </div>

      <!-- Quick review: task → layer -->
      <div v-else-if="at('review')" key="review" class="absolute inset-0" dir="rtl">
        <div class="absolute top-8 inset-x-0 text-center">
          <div class="text-5xl font-black text-white">✏️ مراجعة سريعة</div>
          <p class="mt-2 text-xl font-bold text-slate-400">لكل مهمة: إلى أي طبقة تنتمي؟</p>
        </div>
        <div class="absolute top-[155px] inset-x-0 flex flex-col items-center gap-4">
          <div v-for="(r, i) in review" :key="r.text" class="sl-in w-[1120px] h-[88px] rounded-3xl border-2 border-white/10 bg-slate-900/80 flex items-center gap-5 px-6"
               :style="{ '--d': `${0.3 + i * 0.3}s` }">
            <span class="w-11 h-11 rounded-full bg-slate-700 text-white text-xl font-black flex items-center justify-center shrink-0">{{ letters[i] }}</span>
            <p class="flex-1 text-[24px] font-bold text-slate-100 leading-snug">{{ r.text }}</p>
            <div class="relative w-[300px] h-[56px] shrink-0">
              <span class="sl-out absolute inset-0 rounded-2xl border-2 border-dashed border-slate-500 text-2xl font-black text-slate-500 flex items-center justify-center"
                    :style="{ '--d': `${2.4 + i * 1.8}s` }">؟</span>
              <span class="sl-pop absolute inset-0 rounded-2xl border-2 text-[21px] font-black flex items-center justify-center gap-2"
                    :class="layerCls[r.layer]" :style="{ '--d': `${2.4 + i * 1.8}s` }">{{ layerName[r.layer] }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Answer to the lesson question -->
      <div v-else-if="at('answer')" key="answer" class="absolute inset-0" dir="rtl">
        <div class="absolute top-8 inset-x-0 flex flex-col items-center">
          <span class="px-5 py-1.5 rounded-full bg-emerald-400 text-emerald-950 text-xl font-black">❓ إجابة السؤال الرئيسي</span>
          <p class="mt-3 text-[22px] font-bold text-slate-200 max-w-[1100px] text-center leading-snug">
            يُستخدم <span class="text-violet-300 font-black">تطبيق الويب</span> عادةً من خلال المتصفح، ويمكن شرح كثير من التطبيقات بنموذج مبسط من ثلاث طبقات:
          </p>
        </div>
        <div class="absolute top-[170px] inset-x-0 flex justify-center items-center gap-2">
          <div class="sl-in w-[140px] h-[170px] rounded-3xl border-2 border-slate-400 bg-slate-800/80 flex flex-col items-center justify-center gap-1" style="--d: .4s">
            <span class="text-[44px] leading-none">👤</span>
            <span class="text-[21px] font-black text-white">المستخدم</span>
          </div>
          <template v-for="(a, i) in answerLayers" :key="a.name">
            <span class="sl-fade text-[34px] font-black text-slate-400" :style="{ '--d': `${0.8 + i * 0.9}s` }">⇄</span>
            <div class="sl-in w-[270px] h-[170px] rounded-3xl border-2 flex flex-col items-center justify-center gap-1 px-4 text-center"
                 :class="a.cls" :style="{ '--d': `${1 + i * 0.9}s` }">
              <span class="text-[40px] leading-none">{{ a.icon }}</span>
              <span class="text-[23px] font-black text-white">{{ a.name }}</span>
              <span class="text-[18px] font-bold text-slate-200 leading-snug">{{ a.role }}</span>
            </div>
          </template>
        </div>
        <div class="absolute top-[372px] inset-x-0 flex flex-col items-center gap-3">
          <div class="sl-in sl-badge !text-[22px] border-emerald-400/60 bg-emerald-600/20 text-emerald-100" style="--d: 4s">
            🔁 تنتقل الطلبات والنتائج بين هذه الأجزاء لتنفيذ مهمة المستخدم
          </div>
          <div class="sl-in w-[1060px] rounded-2xl border-2 border-amber-400/60 bg-amber-950/40 px-6 py-3 text-center text-[20px] font-bold text-amber-50 leading-snug" style="--d: 5s">
            ⚠️ هذا نموذج للتعلم وليس بنية إلزامية لكل تطبيق؛ فقد تختلف البنية، وقد لا توجد قاعدة بيانات تقليدية أصلًا.
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
import L1WebApp from '~/components/slides/unit03/lesson1/WebApp.vue'
import L1Layers from '~/components/slides/unit03/lesson1/Layers.vue'
import L1Flow from '~/components/slides/unit03/lesson1/Flow.vue'
import L1Apps from '~/components/slides/unit03/lesson1/Apps.vue'
import L1Engineer from '~/components/slides/unit03/lesson1/Engineer.vue'

definePageMeta({ layout: false })
useHead({ title: 'سلايدر الدرس 3-1: البنية العامة لتطبيقات الويب' })

/* ───────── Timeline ─────────
   Each frame is addressed by its id, so frames can be inserted without renumbering.
   Chapter components receive a local frame number counted from their first frame. */
const steps: SlideStep[] = [
  { id: 'cover', caption: '', dur: 4000 },
  { id: 'question', caption: 'سؤال الدرس: كيف يُبنى تطبيق الويب، وكيف تعمل طبقاته الثلاث معًا للاستجابة لما يفعله المستخدم؟', dur: 9500 },
  // ── What is a web app ──
  { id: 'app-def', caption: 'تطبيق الويب: تطبيق يُستخدم عادةً من خلال متصفح الويب، وقد يكون بعضه قابلًا للتثبيت على الجهاز؛ مثل خدمات الفيديو والتسوق والبريد والخرائط.', dur: 10000 },
  { id: 'app-behind', caption: 'خلف ما تراه في المتصفح تعمل أجزاء مختلفة معًا، ونفهمها بنموذج تعليمي مبسط من ثلاث طبقات: العرض، والمعالجة، والبيانات.', dur: 10000 },
  // ── The three layers ──
  { id: 'layers-fig', caption: 'في هذا النموذج التعليمي نقسم تطبيق الويب إلى ثلاثة أجزاء رئيسة، وقد تختلف البنية الفعلية من تطبيق إلى آخر.', dur: 10000 },
  { id: 'layers-front', caption: 'الواجهة الأمامية: الجزء الذي يراه المستخدم ويتعامل معه في المتصفح؛ تعرض المحتوى وتستقبل ما يكتبه المستخدم أو يختاره.', dur: 10000 },
  { id: 'layers-back', caption: 'الواجهة الخلفية: الجزء الذي يعمل على الخادم، ويعالج الطلبات ويطبق قواعد التطبيق.', dur: 9000 },
  { id: 'layers-data', caption: 'قاعدة البيانات: طبقة تحفظ البيانات وتوفرها عند الحاجة، مثل معلومات المنتجات ومعلومات المستخدمين وسجل الطلبات.', dur: 9500 },
  // ── Request flow ──
  { id: 'flow-intro', caption: 'كيف تعمل الطبقات معًا؟ مثال: البحث عن منتج في متجر إلكتروني؛ يكتب المستخدم «حقيبة» ويضغط «ابحث».', dur: 8000 },
  { id: 'flow-1', caption: '① تستقبل الواجهة الأمامية كلمات البحث التي أدخلها المستخدم.', dur: 7000 },
  { id: 'flow-2', caption: '② ترسل الواجهة الأمامية كلمات البحث إلى الواجهة الخلفية.', dur: 7000 },
  { id: 'flow-3', caption: '③ تطلب الواجهة الخلفية من طبقة البيانات المنتجات التي تطابق عبارة البحث.', dur: 7000 },
  { id: 'flow-4', caption: '④ تعيد طبقة البيانات النتائج المطلوبة إلى الواجهة الخلفية.', dur: 7000 },
  { id: 'flow-5', caption: '⑤ تجهز الواجهة الخلفية النتائج لإرسالها إلى الواجهة الأمامية.', dur: 7000 },
  { id: 'flow-6', caption: '⑥ تعرض الواجهة الأمامية نتائج البحث على شاشة المستخدم.', dur: 8000 },
  // ── Familiar apps ──
  { id: 'apps-video', caption: 'موقع مشاركة الفيديو: الأمامية تعرض شاشة التشغيل والبحث، والخلفية تختار الفيديوهات الموصى بها، وقاعدة البيانات تخزن الفيديوهات وسجل المشاهدة.', dur: 11000 },
  { id: 'apps-social', caption: 'شبكة التواصل الاجتماعي: الأمامية تعرض الخط الزمني، والخلفية تحدد جمهور المنشورات وتتحكم في الإشعارات، وقاعدة البيانات تخزن المنشورات والمتابعات.', dur: 11000 },
  { id: 'apps-shop', caption: 'موقع التجارة الإلكترونية: الأمامية تعرض المنتجات وسلة التسوق، والخلفية تتحقق من المخزون وتتعامل مع الدفع، وقاعدة البيانات تخزن الطلبات والعملاء.', dur: 11000 },
  { id: 'apps-same', caption: 'توقف وفكر: تبقى البنية نفسها في كل خدمة — عرض ومعالجة وتخزين — لكن الذي يتغير هو محتوى كل طبقة.', dur: 10000 },
  // ── Think like an engineer ──
  { id: 'eng-assign', caption: 'فكّر كمهندس: عيادة تريد تطبيق ويب لحجز المواعيد؛ نوزّع كل ميزة على الطبقة المناسبة لها.', dur: 11000 },
  { id: 'eng-debug', caption: 'شخّص العطل: تفتح صفحة الحجز لكن لا تظهر أوقات متاحة؛ قد تكون المشكلة في أي طبقة، فنفحص كل طبقة وحدها.', dur: 12000 },
  { id: 'eng-decide', caption: 'القرار: ننظّم العرض والمعالجة والبيانات في طبقات واضحة؛ فيسهل تحديد مكان العطل، ونطوّر كل طبقة دون إرباك الأخرى.', dur: 11000 },
  // ── Wrap-up ──
  { id: 'review', caption: 'مراجعة سريعة: حدّد الطبقة المسؤولة عن كل مهمة.', dur: 10500 },
  { id: 'answer', caption: 'إجابة السؤال الرئيسي: واجهة أمامية تعرض وتستقبل، وواجهة خلفية تعالج الطلبات، وطبقة بيانات تحفظ البيانات وتوفرها؛ وتنتقل الطلبات والنتائج بينها.', dur: 11000 },
  { id: 'summary', caption: 'الواجهة الأمامية تعرض وتجمع، والواجهة الخلفية تقرر وتعالج، وقاعدة البيانات تخزن وتسترجع — ثلاث طبقات متعاونة تجعل تطبيق الويب يعمل.', dur: 10000 },
]

const chapters = [
  { name: 'البداية', id: 'cover' },
  { name: 'تطبيق الويب', id: 'app-def' },
  { name: 'الطبقات الثلاث', id: 'layers-fig' },
  { name: 'تدفق الطلب', id: 'flow-intro' },
  { name: 'تطبيقات مألوفة', id: 'apps-video' },
  { name: 'فكّر كمهندس', id: 'eng-assign' },
  { name: 'الخلاصة', id: 'review' },
]

const S = Object.fromEntries(steps.map((s, i) => [s.id, i])) as Record<string, number>
const step = ref(0)
const at = (id: string) => step.value === S[id]
const from = (id: string) => step.value >= S[id]!
const inRange = (a: string, b: string) => step.value >= S[a]! && step.value <= S[b]!

const glow = computed(() => {
  if (from('answer')) return 'bg-emerald-500/25'
  if (inRange('layers-fig', 'flow-6')) return 'bg-violet-500/20'
  if (at('eng-debug')) return 'bg-rose-500/20'
  return 'bg-sky-500/20'
})

const topics = ['🌐 تطبيق الويب', '🧱 الطبقات الثلاث', '🔁 تدفق الطلب', '📱 تطبيقات مألوفة']
const letters = ['أ', 'ب', 'ج', 'د']
const layerName = ['🖥️ الواجهة الأمامية', '⚙️ الواجهة الخلفية', '🗄️ قاعدة البيانات']
const layerCls = [
  'border-violet-400 bg-violet-600/30 text-violet-50',
  'border-amber-400 bg-amber-600/30 text-amber-50',
  'border-sky-400 bg-sky-600/30 text-sky-50',
]
const review = [
  { text: '🎬 تجميع عدد المشاهدات على موقع الفيديو', layer: 1 },
  { text: '🛒 عرض شاشة سلة التسوق', layer: 0 },
  { text: '💬 تخزين علاقات المتابعة على شبكة التواصل', layer: 2 },
  { text: '🛒 معالجة الدفع في المتجر الإلكتروني', layer: 1 },
]
const answerLayers = [
  { icon: '🖥️', name: 'الواجهة الأمامية', role: 'تعرض المحتوى وتستقبل مدخلات المستخدم', cls: 'border-violet-400/70 bg-violet-950/50' },
  { icon: '⚙️', name: 'الواجهة الخلفية', role: 'تعالج الطلبات وتطبق قواعد التطبيق', cls: 'border-amber-400/70 bg-amber-950/40' },
  { icon: '🗄️', name: 'طبقة البيانات', role: 'تحفظ البيانات وتوفرها', cls: 'border-sky-400/70 bg-sky-950/50' },
]
const summary = [
  { icon: '🖥️', cls: 'border-violet-400/60 bg-violet-950/40',
    text: '<span class="text-violet-300">الواجهة الأمامية</span> تعرض وتجمع.' },
  { icon: '⚙️', cls: 'border-amber-400/60 bg-amber-950/30',
    text: '<span class="text-amber-300">الواجهة الخلفية</span> تقرر وتعالج.' },
  { icon: '🗄️', cls: 'border-sky-400/60 bg-sky-950/40',
    text: '<span class="text-sky-300">قاعدة البيانات</span> تخزن وتسترجع — ثلاث طبقات متعاونة تجعل تطبيق الويب يعمل.' },
]
</script>

<style scoped>
.cover-icon { animation: sl-pop .5s cubic-bezier(.3,1.6,.5,1) .2s forwards, floaty 4s ease-in-out 1s infinite; }
@keyframes floaty { 0%, 100% { transform: translateY(0) } 50% { transform: translateY(-12px) } }
.ring { animation: ring 2.2s ease-out infinite; }
@keyframes ring { 0% { transform: scale(1); opacity: .8 } 100% { transform: scale(1.5); opacity: 0 } }
</style>
