<template>
  <SlidesPlayer v-model:step="step" :steps="steps" :chapters="chapters" back-to="/unit-01"
                :glow="from('sc') ? 'bg-amber-500/20' : 'bg-sky-500/20'">
    <!-- ═════════════ COVER ═════════════ -->
    <Transition name="sl-frame">
      <div v-if="at('cover')" class="absolute inset-0 flex flex-col items-center justify-center text-center" dir="rtl">
        <div class="cover-icon relative w-[170px] h-[170px] mb-9 rounded-[44px] bg-gradient-to-br from-emerald-400 to-sky-500 flex items-center justify-center shadow-[0_0_80px_rgba(52,211,153,.45)]">
          <span class="text-[86px]">🏭</span>
          <span class="ring absolute inset-0 rounded-[44px] border-4 border-emerald-300"></span>
        </div>
        <p class="text-sky-300 font-bold text-2xl tracking-wide mb-3">الوحدة الأولى · الدرس <span dir="ltr" class="inline-block">1-3</span></p>
        <h1 class="text-white font-black text-[64px] leading-tight mb-8">الذكاء الاصطناعي في الحياة اليومية والصناعة</h1>
        <div class="flex items-center gap-3">
          <span v-for="(t, i) in topics" :key="t" class="sl-in sl-badge border-white/15 bg-white/5 text-slate-100 !text-xl"
                :style="{ '--d': `${1.2 + i * 0.25}s` }">{{ t }}</span>
        </div>
        <p class="mt-12 text-slate-400 text-xl font-semibold">اضغط ▶ للتشغيل أو انقر للتقدّم خطوة بخطوة</p>
      </div>
    </Transition>

    <!-- ═════════════ CHAPTERS ═════════════ -->
    <L3Uses v-if="inRange('rec', 'face')" :f="step - S['rec']!" />
    <L3Uses v-if="inRange('health', 'logistics')" :f="step - S['health']! + 4" />
    <L3Limits v-if="inRange('sc', 'challenges')" :f="step - S['sc']!" />

    <!-- ═════════════ CARDS ═════════════ -->
    <Transition name="sl-zoom" mode="out-in">
      <!-- Lesson idea -->
      <div v-if="at('idea')" key="idea" class="absolute inset-0 flex items-center justify-center" dir="rtl">
        <div class="w-[1100px] flex flex-col items-center gap-7">
          <div class="flex gap-4">
            <span v-for="(m, i) in mapItems" :key="m" class="sl-pop sl-badge !text-[22px] border-sky-400/50 text-sky-100 bg-sky-600/15" :style="{ '--d': `${0.3 + i * 0.4}s` }">{{ m }}</span>
          </div>
          <div class="sl-card sl-in border-amber-400/70 px-12 py-8 text-center" style="--d: 1.8s">
            <span class="inline-block mb-4 px-5 py-1.5 rounded-full bg-amber-400 text-amber-950 text-xl font-black">⭐ فكرة الدرس</span>
            <h2 class="text-[36px] leading-[1.55] font-black text-white">
              الذكاء الاصطناعي <span class="text-emerald-300">بارع في إيجاد الأنماط في البيانات</span>،
              لكن <span class="text-amber-300">الحكم البشري</span> لا يزال ضروريًا عندما يتعلق الأمر بالأخلاق والخصوصية والمسؤولية.
            </h2>
          </div>
        </div>
      </div>

      <!-- Stop & think: privacy -->
      <div v-else-if="at('privacy')" key="privacy" class="absolute inset-0 flex flex-col items-center pt-[60px] gap-5" dir="rtl">
        <div class="sl-pop text-5xl font-black text-white">💡 توقف وفكر</div>
        <div class="flex gap-4">
          <div v-for="(d, i) in personalData" :key="d.t" class="sl-pop w-[200px] h-[110px] rounded-3xl border-2 border-white/15 bg-slate-900/85 flex flex-col items-center justify-center gap-1"
               :style="{ '--d': `${0.4 + i * 0.4}s` }">
            <span class="text-5xl">{{ d.i }}</span><span class="text-[20px] font-black text-white">{{ d.t }}</span>
          </div>
        </div>
        <p class="sl-in text-[26px] font-black text-amber-200 text-center max-w-[1080px]" style="--d: 1.8s">
          خدمات الذكاء الاصطناعي تستخدم بياناتك الشخصية… لماذا يثير هذا مخاوف بشأن الخصوصية؟ ومن ينبغي أن يقرر كيفية استخدام بياناتك؟
        </p>
        <div class="flex gap-6">
          <div class="sl-in w-[520px] rounded-3xl border-2 border-rose-400/60 bg-rose-950/40 px-7 py-4" style="--d: 4.4s">
            <div class="text-[22px] font-black text-rose-200 mb-1">⚠️ المخاوف</div>
            <p class="text-[19px] font-bold text-slate-100 leading-relaxed">تُجمع البيانات لبناء ملف شخصي عنك؛ فقد تُسرّب معلوماتك الحساسة أو تُستخدم للتأثير على قراراتك.</p>
          </div>
          <div class="sl-in w-[520px] rounded-3xl border-2 border-emerald-400/60 bg-emerald-950/40 px-7 py-4" style="--d: 5.6s">
            <div class="text-[22px] font-black text-emerald-200 mb-1">✅ من يقرر؟</div>
            <p class="text-[19px] font-bold text-slate-100 leading-relaxed">للمستخدم الحق في الموافقة الصريحة، ومعرفة من يستخدم بياناته ولأي غرض.</p>
          </div>
        </div>
      </div>

      <!-- Stop & think: healthcare -->
      <div v-else-if="at('health-think')" key="health-think" class="absolute inset-0 flex flex-col items-center pt-[50px] gap-5" dir="rtl">
        <div class="sl-pop text-5xl font-black text-white">🤔 توقف وفكر — الرعاية الصحية</div>
        <div class="sl-in sl-card border-amber-400/70 px-9 py-4 text-[24px] font-black text-white text-center max-w-[1100px] leading-relaxed" style="--d: .4s">
          مستشفى يفكر في استخدام AI للكشف عن الأمراض من صور الأشعة السينية.
          <span class="text-amber-300">لماذا ينبغي أن يؤكد التشخيص النهائي طبيب بشري؟</span>
        </div>
        <div class="flex flex-col gap-3 w-[1060px]">
          <div v-for="(o, i) in healthOptions" :key="o.t" class="sl-in rounded-2xl border-2 px-6 py-3 text-[21px] font-bold"
               :class="o.ok ? 'opt-ok border-slate-600 bg-slate-900/80 text-slate-100' : 'opt-no border-slate-600 bg-slate-900/80 text-slate-100'"
               :style="{ '--d': `${1.4 + i * 0.4}s` }">{{ o.t }}</div>
        </div>
        <div class="sl-in w-[1060px] rounded-2xl border-2 border-emerald-400/60 bg-emerald-950/50 px-6 py-3 text-[19px] font-bold text-white leading-relaxed" style="--d: 5s">
          ✅ الطبيب يتحمل المسؤولية الأخلاقية والقانونية، والذكاء الاصطناعي قد يخطئ في حالة نادرة لم يتدرب عليها؛ فدوره <span class="sl-hl-green font-black">مساعد للطبيب وليس بديلًا عنه</span>.
        </div>
      </div>

      <!-- Apply: the farmer -->
      <div v-else-if="at('apply')" key="apply" class="absolute inset-0" dir="rtl">
        <div class="absolute top-8 inset-x-0 text-center">
          <div class="text-5xl font-black text-white">⚙️ طبّق ما تعلمته</div>
          <p class="mt-3 text-[22px] font-bold text-amber-200">🧑‍🌾 مزارع يريد نظام AI يميّز بين صور المحاصيل السليمة والمصابة بالأمراض</p>
        </div>
        <div class="absolute top-[175px] inset-x-0 flex flex-col items-center gap-4">
          <div v-for="(q, i) in applyQs" :key="q.q" class="w-[1120px] rounded-3xl border-2 border-white/10 bg-slate-900/85 px-6 py-3.5">
            <div class="sl-in text-[22px] font-black text-white" :style="{ '--d': `${0.4 + i * 0.3}s` }">{{ i + 1 }}. {{ q.q }}</div>
            <p class="sl-in text-[18px] font-bold text-emerald-200 leading-snug mt-1" :style="{ '--d': `${2.4 + i * 1.8}s` }">💡 {{ q.a }}</p>
          </div>
        </div>
      </div>

      <!-- Review: match the technology -->
      <div v-else-if="at('review')" key="review" class="absolute inset-0" dir="rtl">
        <div class="absolute top-8 inset-x-0 text-center">
          <div class="text-5xl font-black text-white">✏️ مراجعة سريعة</div>
          <p class="mt-2 text-xl font-bold text-slate-400">لكل مثال، ما تقنية الذكاء الاصطناعي المناسبة؟</p>
        </div>
        <div class="absolute top-[150px] inset-x-0 flex flex-col items-center gap-4">
          <div v-for="(r, i) in review" :key="r.text" class="sl-in w-[1120px] h-[90px] rounded-3xl border-2 border-white/10 bg-slate-900/80 flex items-center gap-5 px-6"
               :style="{ '--d': `${0.3 + i * 0.3}s` }">
            <span class="w-11 h-11 rounded-full bg-slate-700 text-white text-xl font-black flex items-center justify-center shrink-0">{{ i + 1 }}</span>
            <p class="flex-1 text-[22px] font-bold text-slate-100 leading-snug">{{ r.text }}</p>
            <div class="relative w-[280px] h-[56px] shrink-0">
              <span class="sl-out absolute inset-0 rounded-2xl border-2 border-dashed border-slate-500 text-2xl font-black text-slate-500 flex items-center justify-center"
                    :style="{ '--d': `${2.4 + i * 1.8}s` }">؟</span>
              <span class="sl-pop absolute inset-0 rounded-2xl border-2 text-[20px] font-black flex items-center justify-center gap-2" :class="r.cls"
                    :style="{ '--d': `${2.4 + i * 1.8}s` }">{{ r.tech }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Summary -->
      <div v-else-if="at('summary')" key="summary" class="absolute inset-0 flex flex-col items-center pt-[60px]" dir="rtl">
        <div class="sl-pop text-[52px] font-black text-white mb-5">⭐ الخلاصة</div>
        <div class="sl-in sl-card border-amber-400/60 px-10 py-5 w-[1120px] text-[25px] font-bold text-white text-center leading-relaxed mb-6" style="--d: .5s">
          الذكاء الاصطناعي <span class="text-emerald-300 font-black">بارع في إيجاد الأنماط والتعرف والتنبؤ</span>، لكنه قد يخطئ أو ينتج نتائج متحيزة؛
          لذلك <span class="sl-hl-amber font-black">يجب التحقق من مخرجاته</span>، خصوصًا في الاستخدامات التي تؤثر في حياة الأشخاص وحقوقهم.
        </div>
        <div class="sl-in text-[22px] font-black text-slate-300 mb-3" style="--d: 2s">أهم المصطلحات:</div>
        <div class="flex flex-wrap justify-center gap-3 w-[1100px]">
          <span v-for="(t, i) in terms" :key="t" class="sl-pop sl-badge !text-[20px] border-sky-400/50 text-sky-100 bg-sky-600/15" :style="{ '--d': `${2.4 + i * 0.25}s` }">{{ t }}</span>
        </div>
      </div>
    </Transition>
  </SlidesPlayer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SlidesPlayer, { type SlideStep } from '~/components/slides/Player.vue'
import L3Uses from '~/components/slides/unit01/lesson3/Uses.vue'
import L3Limits from '~/components/slides/unit01/lesson3/Limits.vue'

definePageMeta({ layout: false })
useHead({ title: 'سلايدر الدرس 1-3: الذكاء الاصطناعي في الحياة اليومية والصناعة' })

/* ───────── Timeline ───────── (frames addressed by id; chapters get a local frame number) */
const steps: SlideStep[] = [
  { id: 'cover', caption: '', dur: 4000 },
  { id: 'idea', caption: 'الذكاء الاصطناعي بارع في إيجاد الأنماط في البيانات، لكن الحكم البشري لا يزال ضروريًا عندما يتعلق الأمر بالأخلاق والخصوصية والمسؤولية.', dur: 9500 },
  // ── Daily life ──
  { id: 'rec', caption: 'نظام التوصية: يتنبأ بتفضيلاتك من سلوكك السابق؛ شاهدت فيديوهات برمجة، فيقترح عليك تطوير الويب.', dur: 9500 },
  { id: 'voice', caption: 'المساعد الصوتي: يتعرف على صوتك، ويفهم الأمر، ثم ينفذه.', dur: 8500 },
  { id: 'translate', caption: 'الترجمة الآلية: ترجمة النص تلقائيًا إلى لغات مختلفة بناءً على فهم السياق.', dur: 8000 },
  { id: 'face', caption: 'التعرف على الوجه: الكشف عن وجوه الأشخاص في الصور والتعرف عليها تلقائيًا، مثل فتح الهاتف الذكي.', dur: 8000 },
  { id: 'privacy', caption: 'توقف وفكر: خدمات الذكاء الاصطناعي تستخدم بياناتك الشخصية؛ لماذا يثير هذا مخاوف الخصوصية، ومن ينبغي أن يقرر كيفية استخدامها؟', dur: 11000 },
  // ── Industry ──
  { id: 'health', caption: 'الرعاية الصحية: يحلل الذكاء الاصطناعي صور الأشعة ليساعد في التشخيص، لكن القرار النهائي يظل تحت إشراف الطبيب.', dur: 10000 },
  { id: 'agri', caption: 'الزراعة: التنبؤ بموعد الحصاد، والكشف عن الآفات والأمراض باستخدام صور الدرونز والمستشعرات.', dur: 9500 },
  { id: 'manufacturing', caption: 'التصنيع: أتمتة فحص الجودة، والصيانة التنبؤية التي تتنبأ بأعطال الآلات قبل وقوعها من تحليل أصواتها واهتزازاتها.', dur: 10000 },
  { id: 'logistics', caption: 'الخدمات اللوجستية: تحسين مسارات التوصيل لتقليل استهلاك الوقود والوقت.', dur: 9500 },
  { id: 'health-think', caption: 'توقف وفكر: لماذا ينبغي أن يؤكد التشخيص النهائي طبيب بشري بدلًا من تركه للذكاء الاصطناعي وحده؟', dur: 11000 },
  // ── Strengths & cautions ──
  { id: 'sc', caption: 'الذكاء الاصطناعي يبرع في الأنماط والتعرف والتنبؤ، لكنه يتطلب الحذر في القرارات الأخلاقية والبيانات الشخصية والقرارات عالية الأثر.', dur: 10500 },
  { id: 'human', caption: 'الذكاء الاصطناعي يساعد الإنسان في التحليل والتنبؤ، لكنه لا يستبدل الحكم البشري في القرارات عالية التأثير.', dur: 9500 },
  { id: 'blackbox', caption: 'مشكلة الصندوق الأسود: يرفض النظام طلب قرض، ولا يستطيع المبرمجون أنفسهم تفسير سبب الرفض بدقة بسبب تعقيد الشبكات العصبية.', dur: 10500 },
  { id: 'challenges', caption: 'تحديات إضافية: دقة النتائج، والهلوسة، وقضايا الحقوق، وفقدان الوضوح.', dur: 10000 },
  // ── Wrap-up ──
  { id: 'apply', caption: 'طبّق ما تعلمته: نظام يميّز بين صور المحاصيل السليمة والمصابة؛ ما البيانات التي يحتاجها؟ وما الذي قد يجعله يخطئ؟ ولماذا نتحقق؟', dur: 12000 },
  { id: 'review', caption: 'مراجعة سريعة: طابق كل مثال بتقنية الذكاء الاصطناعي المناسبة.', dur: 11000 },
  { id: 'summary', caption: 'الذكاء الاصطناعي بارع في الأنماط والتعرف والتنبؤ، لكنه قد يخطئ؛ لذلك يجب التحقق من مخرجاته، خصوصًا فيما يؤثر في حياة الناس وحقوقهم.', dur: 10000 },
]

const chapters = [
  { name: 'البداية', id: 'cover' },
  { name: 'الحياة اليومية', id: 'rec' },
  { name: 'الصناعة', id: 'health' },
  { name: 'القوة والحذر', id: 'sc' },
  { name: 'الخلاصة', id: 'apply' },
]

const S = Object.fromEntries(steps.map((s, i) => [s.id, i])) as Record<string, number>
const step = ref(0)
const at = (id: string) => step.value === S[id]
const from = (id: string) => step.value >= S[id]!
const inRange = (a: string, b: string) => step.value >= S[a]! && step.value <= S[b]!

const topics = ['📱 الحياة اليومية', '🏭 الصناعة', '💪 نقاط القوة', '⚠️ مواطن الحذر']
const mapItems = ['📱 الذكاء الاصطناعي في الحياة اليومية', '🏭 الذكاء الاصطناعي في الصناعة', '⚖️ نقاط القوة ومواطن الحذر']
const personalData = [
  { i: '👀', t: 'ما تشاهده' },
  { i: '🛒', t: 'ما تشتريه' },
  { i: '🗣️', t: 'ما تقوله' },
]
const healthOptions = [
  { t: 'أ) لأن الذكاء الاصطناعي غير قادر على رؤية الصور بوضوح.', ok: false },
  { t: 'ب) لأن القرار له أثر مباشر على حياة الإنسان، وقد يخطئ النظام أو يعتمد على بيانات متحيزة.', ok: true },
  { t: 'جـ) لأن الأطباء يحتاجون إلى التدرب على تشخيص الصور لكي لا ينسوا.', ok: false },
]
const applyQs = [
  { q: 'ما نوع البيانات التي يحتاجها النظام للتدريب؟', a: 'آلاف الصور لمحاصيل سليمة وأخرى مصابة بأمراض مختلفة، مع تصنيف كل صورة (Labels).' },
  { q: 'اذكر عاملًا واحدًا قد يجعل تنبؤه خاطئًا.', a: 'بيانات تدريب متحيزة (مثل تدريبه على نوع واحد من المحاصيل فقط)، أو ظروف إضاءة مختلفة عما تدرب عليه.' },
  { q: 'لماذا يجب التحقق من النتيجة؟', a: 'لأنه قد يخطئ أو لا يتعرف على مرض جديد لم يتدرب عليه؛ والإشراف البشري يمنع الخسائر المادية للمزارع.' },
]
const review = [
  { text: 'YouTube يوصي بمقاطع فيديو تناسب تفضيلات المستخدم.', tech: '🎬 نظام التوصية', cls: 'border-red-400 bg-red-600/25 text-red-50' },
  { text: 'التحدث إلى هاتف ذكي للتحقق من الطقس.', tech: '🎤 المساعد الصوتي', cls: 'border-sky-400 bg-sky-600/25 text-sky-50' },
  { text: 'ترجمة موقع إلكتروني بلغة أجنبية إلى اللغة الأم.', tech: '🌍 الترجمة الآلية', cls: 'border-purple-400 bg-purple-600/25 text-purple-50' },
  { text: 'كاميرا الهاتف الذكي تكتشف وجه الشخص تلقائيًا.', tech: '📷 التعرف على الوجه', cls: 'border-teal-400 bg-teal-600/25 text-teal-50' },
]
const terms = ['نظام التوصية', 'المساعد الصوتي', 'الترجمة الآلية', 'التعرف على الوجه', 'الصيانة التنبؤية', 'الهلوسة', 'الصندوق الأسود']
</script>

<style scoped>
.cover-icon { animation: floaty 4s ease-in-out infinite; }
@keyframes floaty { 0%, 100% { transform: translateY(0) } 50% { transform: translateY(-12px) } }
.ring { animation: ring 2.2s ease-out infinite; }
@keyframes ring { 0% { transform: scale(1); opacity: .8 } 100% { transform: scale(1.5); opacity: 0 } }
.opt-ok { animation: sl-in .6s cubic-bezier(.2,.8,.2,1.1) var(--d) forwards, optOk .5s ease 3.8s forwards; }
@keyframes optOk { to { border-color: #34d399; background: rgba(6,78,59,.7) } }
.opt-no { animation: sl-in .6s cubic-bezier(.2,.8,.2,1.1) var(--d) forwards, optNo .5s ease 3.8s forwards; }
@keyframes optNo { to { opacity: .4 } }
</style>
