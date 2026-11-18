<template>
  <SlidesPlayer v-model:step="step" :steps="steps" :chapters="chapters" back-to="/unit-02"
                :glow="from('answer') ? 'bg-emerald-500/25' : inRange('inc-def', 'ph-think') ? 'bg-rose-500/20' : 'bg-sky-500/20'">
    <!-- ═════════════ COVER ═════════════ -->
    <Transition name="sl-frame">
      <div v-if="at('cover')" class="absolute inset-0 flex flex-col items-center justify-center text-center" dir="rtl">
        <div class="cover-icon relative w-[170px] h-[170px] mb-9 rounded-[44px] bg-gradient-to-br from-rose-500 to-amber-400 flex items-center justify-center shadow-[0_0_80px_rgba(244,63,94,.45)] sl-pop" style="--d: .2s">
          <span class="text-[86px]">🚨</span>
          <span class="ring absolute inset-0 rounded-[44px] border-4 border-rose-300"></span>
        </div>
        <p class="text-sky-300 font-bold text-2xl tracking-wide mb-3">الوحدة الثانية · الدرس <span dir="ltr" class="inline-block">2-3</span></p>
        <h1 class="text-white font-black text-7xl leading-tight mb-8">الاستجابة للحوادث وإدارة المخاطر</h1>
        <div class="flex items-center gap-3">
          <span v-for="(t, i) in topics" :key="t" class="sl-in sl-badge border-white/15 bg-white/5 text-slate-100 !text-xl"
                :style="{ '--d': `${1.2 + i * 0.25}s` }">{{ t }}</span>
        </div>
        <p class="mt-12 text-slate-400 text-xl font-semibold">اضغط ▶ للتشغيل أو انقر للتقدّم خطوة بخطوة</p>
      </div>
    </Transition>

    <!-- ═════════════ CHAPTERS ═════════════ -->
    <L3Incident v-if="inRange('inc-def', 'inc-check')" :f="step - S['inc-def']!" />
    <L3Phases v-if="inRange('ph-overview', 'ph-think')" :f="step - S['ph-overview']!" />
    <L3Risk v-if="inRange('risk-def', 'risk-alone')" :f="step - S['risk-def']!" />

    <!-- ═════════════ CARDS ═════════════ -->
    <Transition name="sl-zoom" mode="out-in">
      <!-- Lesson question -->
      <div v-if="at('question')" key="q" class="absolute inset-0 flex items-center justify-center" dir="rtl">
        <div class="w-[1080px] flex flex-col items-center gap-7">
          <p class="sl-in text-2xl font-bold text-slate-300 text-center leading-relaxed">
            حتى مع التشفير والمصادقة والدفاع في العمق… <span class="text-rose-300">قد يقع حادث أمني</span>
            <br>لذلك ننتقل من <span class="text-sky-300">الوقاية</span> إلى <span class="sl-hl-amber font-black">الاستجابة وإدارة المخاطر</span>
          </p>
          <div class="sl-card sl-in border-amber-400/70 px-12 py-8 text-center" style="--d: 1s">
            <span class="inline-block mb-4 px-5 py-1.5 rounded-full bg-amber-400 text-amber-950 text-xl font-black">❓ السؤال الرئيسي</span>
            <h2 class="text-[36px] leading-[1.55] font-black text-white">
              عندما يقع حادث أمني، كيف ينبغي للمؤسسة أن <span class="text-emerald-300">تنظّم استجابتها</span> عبر مراحلها العامة —
              وكيف تقرر <span class="text-sky-300">أي المخاطر تعالجها أولًا</span>؟
            </h2>
          </div>
        </div>
      </div>

      <!-- Quick review: action → phase -->
      <div v-else-if="at('review')" key="review" class="absolute inset-0" dir="rtl">
        <div class="absolute top-8 inset-x-0 text-center">
          <div class="text-5xl font-black text-white">✏️ مراجعة سريعة</div>
          <p class="mt-2 text-xl font-bold text-slate-400">لكل إجراء: إلى أي مرحلة ينتمي؟</p>
        </div>
        <div class="absolute top-[155px] inset-x-0 flex flex-col items-center gap-4">
          <div v-for="(r, i) in review" :key="r.text" class="sl-in w-[1120px] h-[88px] rounded-3xl border-2 border-white/10 bg-slate-900/80 flex items-center gap-5 px-6"
               :style="{ '--d': `${0.3 + i * 0.3}s` }">
            <span class="w-11 h-11 rounded-full bg-slate-700 text-white text-xl font-black flex items-center justify-center shrink-0">{{ letters[i] }}</span>
            <p class="flex-1 text-[22px] font-bold text-slate-100 leading-snug">{{ r.text }}</p>
            <div class="relative w-[320px] h-[56px] shrink-0">
              <span class="sl-out absolute inset-0 rounded-2xl border-2 border-dashed border-slate-500 text-2xl font-black text-slate-500 flex items-center justify-center"
                    :style="{ '--d': `${2.4 + i * 1.8}s` }">؟</span>
              <span class="sl-pop absolute inset-0 rounded-2xl border-2 text-[20px] font-black flex items-center justify-center gap-2"
                    :class="r.cls" :style="{ '--d': `${2.4 + i * 1.8}s` }">{{ r.phase }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Answer to the lesson question -->
      <div v-else-if="at('answer')" key="answer" class="absolute inset-0" dir="rtl">
        <div class="absolute top-8 inset-x-0 flex flex-col items-center">
          <span class="px-5 py-1.5 rounded-full bg-emerald-400 text-emerald-950 text-xl font-black">❓ إجابة السؤال الرئيسي</span>
          <p class="mt-3 text-[22px] font-bold text-slate-200 max-w-[1100px] text-center leading-snug">
            <span class="text-rose-300 font-black">الحادث الأمني</span> حدث يؤثر في سرية المعلومات أو سلامتها أو توافرها، أو يهددها بجدية، أو يخالف سياسة أمنية.
          </p>
        </div>
        <div class="absolute top-[175px] inset-x-0 flex flex-col items-center">
          <div class="sl-in text-[24px] font-black text-white mb-3" style="--d: .4s">① ننظّم الاستجابة بالمراحل الست</div>
          <div class="flex items-center gap-1.5">
            <template v-for="(p, i) in answerPhases" :key="p">
              <span class="sl-pop px-3.5 py-2 rounded-xl border-2 border-white/20 bg-slate-800/90 text-[19px] font-black text-white whitespace-nowrap"
                    :style="{ '--d': `${0.8 + i * 0.35}s` }">{{ p }}</span>
              <span v-if="i < 5" class="text-slate-500 text-2xl font-black">←</span>
            </template>
          </div>
          <span class="sl-in mt-3 text-[18px] font-bold text-amber-200" style="--d: 3s">🔁 يساعد هذا التسلسل على الفهم، لكن بعض الأنشطة قد تتداخل أو تتكرر</span>
        </div>
        <div class="absolute top-[370px] inset-x-0 flex flex-col items-center">
          <div class="sl-in text-[24px] font-black text-white mb-3" style="--d: 3.8s">② نحدد الأولويات</div>
          <div class="sl-in flex items-center gap-4 rounded-3xl border-2 border-emerald-400/60 bg-emerald-950/50 px-8 py-4" style="--d: 4.4s">
            <span class="text-[26px] font-black text-white">درجة الخطر = <span class="text-amber-300">التأثير</span> × <span class="text-sky-300">الاحتمالية</span></span>
            <span class="text-slate-500 text-2xl">←</span>
            <span class="text-[21px] font-bold text-emerald-100">نبدأ بالأعلى أولوية لتقليل الضرر واحتمال تكرار المشكلة</span>
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
            <p class="text-[26px] font-black text-white leading-snug" v-html="p.text"></p>
          </div>
        </div>
      </div>
    </Transition>
  </SlidesPlayer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SlidesPlayer, { type SlideStep } from '~/components/slides/Player.vue'
import L3Incident from '~/components/slides/unit02/lesson3/Incident.vue'
import L3Phases from '~/components/slides/unit02/lesson3/Phases.vue'
import L3Risk from '~/components/slides/unit02/lesson3/Risk.vue'

definePageMeta({ layout: false })
useHead({ title: 'سلايدر الدرس 2-3: الاستجابة للحوادث وإدارة المخاطر' })

/* ───────── Timeline ─────────
   Each frame is addressed by its id, so frames can be inserted without renumbering.
   Chapter components receive a local frame number counted from their first frame. */
const steps: SlideStep[] = [
  { id: 'cover', caption: '', dur: 4000 },
  { id: 'question', caption: 'سؤال الدرس: عندما يقع حادث أمني، كيف ينبغي للمؤسسة أن تنظّم استجابتها عبر مراحلها العامة، وكيف تقرر أي المخاطر تعالجها أولًا؟', dur: 9500 },
  // ── Security incident ──
  { id: 'inc-def', caption: 'الحادث الأمني: حدث يؤثر في سرية المعلومات أو سلامتها أو توافرها، أو يهددها بجدية، أو يخالف سياسة أمنية.', dur: 9000 },
  { id: 'inc-types', caption: 'أمثلة نموذجية: تسرب المعلومات يمس السرية، والتلاعب بالبيانات يمس السلامة، وانقطاع الخدمة يمس التوافر.', dur: 10500 },
  { id: 'inc-check', caption: 'لكل حدث: هل هو حادث أمني؟ وأي جانب من ثلاثية أمن المعلومات يتأثر؟', dur: 10000 },
  // ── Six phases ──
  { id: 'ph-overview', caption: 'نموذج تعليمي مبسط من ست مراحل: التحضير، والاكتشاف، والاحتواء، وإزالة التهديد، والاستعادة، والدروس المستفادة والتحسين.', dur: 10000 },
  { id: 'ph-prep', caption: 'التحضير: إنشاء إجراءات وهياكل استجابة مسبقًا، استعدادًا للحوادث.', dur: 9000 },
  { id: 'ph-detect', caption: 'الاكتشاف: اكتشاف وتأكيد وقوع حادث؛ معلمون يشتكون أن ملفاتهم لا تفتح وتظهر رسالة تطلب فدية.', dur: 9000 },
  { id: 'ph-contain', caption: 'الاحتواء: تحديد نطاق التأثير بحيث لا ينتشر الضرر أكثر، فنفصل الأجهزة المصابة عن الشبكة.', dur: 9000 },
  { id: 'ph-eradicate', caption: 'إزالة التهديد (الاستئصال): إزالة التهديد ومسبباته، مثل حذف البرمجيات الخبيثة ومعالجة الثغرة المستغلة.', dur: 9000 },
  { id: 'ph-recover', caption: 'الاستعادة: إعادة الأنظمة والخدمات إلى حالة تشغيل آمنة وطبيعية، وقد تشمل الاستعادة من نسخة احتياطية سليمة.', dur: 9000 },
  { id: 'ph-lessons', caption: 'الدروس المستفادة والتحسين: تحليل ما حدث، وتوثيق الدروس، وتحسين الضوابط لتقليل احتمال التكرار وأثره.', dur: 9000 },
  { id: 'ph-loop', caption: 'يساعد ترتيب المراحل على فهم التسلسل العام، لكن الاستجابة الفعلية قد تتضمن تداخلًا أو تكرارًا بين بعض الأنشطة.', dur: 9500 },
  { id: 'ph-think', caption: 'توقف وفكر: لماذا يجب أن يأتي الاحتواء قبل الاستئصال في الاستجابة ذات المراحل الست؟', dur: 10500 },
  // ── Risk assessment ──
  { id: 'risk-def', caption: 'الخطر: احتمال أن يقع حدث يسبب ضررًا؛ ونقدّر درجته بطريقة مبسطة: درجة الخطر = درجة التأثير × درجة الاحتمالية.', dur: 10000 },
  { id: 'risk-matrix', caption: 'مصفوفة تقييم المخاطر: كلما زاد التأثير والاحتمالية ارتفعت درجة الخطر، ونبدأ بالمخاطر الأعلى أولوية.', dur: 10000 },
  { id: 'risk-rank', caption: 'نقدّر درجة كل خطر من المصفوفة ثم نرتّب: هجوم الفدية تأثيره مرتفع واحتماليته مرتفعة، فيُعالج أولًا.', dur: 10500 },
  { id: 'risk-alone', caption: 'لا يمكن تحديد حجم المخاطرة بالتأثير وحده؛ فالزلزال تأثيره مرتفع لكن احتماليته منخفضة، فتأتي أولويته بعد هجوم الفدية.', dur: 9500 },
  // ── Wrap-up ──
  { id: 'review', caption: 'مراجعة سريعة: بيّن أي مرحلة من مراحل الاستجابة للحوادث ينتمي إليها كل إجراء.', dur: 10500 },
  { id: 'answer', caption: 'إجابة السؤال الرئيسي: نتبع التسلسل العام للمراحل الست مع إمكانية التداخل، ونحدد الأولويات بناءً على التأثير × الاحتمالية.', dur: 11000 },
  { id: 'summary', caption: 'اتبع المراحل الست مع إمكانية التداخل والعودة لمرحلة سابقة، وحدد أولويات المخاطر بناءً على التأثير × الاحتمالية.', dur: 10000 },
]

const chapters = [
  { name: 'البداية', id: 'cover' },
  { name: 'الحادث الأمني', id: 'inc-def' },
  { name: 'المراحل الست', id: 'ph-overview' },
  { name: 'تقييم المخاطر', id: 'risk-def' },
  { name: 'الخلاصة', id: 'review' },
]

const S = Object.fromEntries(steps.map((s, i) => [s.id, i])) as Record<string, number>
const step = ref(0)
const at = (id: string) => step.value === S[id]
const from = (id: string) => step.value >= S[id]!
const inRange = (a: string, b: string) => step.value >= S[a]! && step.value <= S[b]!

const topics = ['🚨 الحادث الأمني', '6️⃣ المراحل الست', '📊 تقييم المخاطر']
const letters = ['أ', 'ب', 'ج', 'د']
const review = [
  { text: 'إنشاء إجراءات استجابة مسبقًا، استعدادًا للحوادث', phase: '📋 التحضير', cls: 'border-slate-300 bg-slate-600/40 text-white' },
  { text: 'فصل حاسوب مصاب بالبرمجيات الخبيثة عن الشبكة', phase: '🧯 الاحتواء', cls: 'border-amber-400 bg-amber-600/30 text-amber-50' },
  { text: 'إزالة إصابة البرمجيات الخبيثة', phase: '🧹 الاستئصال', cls: 'border-rose-400 bg-rose-600/30 text-rose-50' },
  { text: 'تحليل السبب واتخاذ التدابير اللازمة لضمان عدم تكرار الحادث نفسه', phase: '📚 الدروس المستفادة والتحسين', cls: 'border-indigo-400 bg-indigo-600/30 text-indigo-50' },
]
const answerPhases = ['📋 التحضير', '🔎 الاكتشاف', '🧯 الاحتواء', '🧹 الاستئصال', '♻️ الاستعادة', '📚 الدروس المستفادة']
const summary = [
  { icon: '6️⃣', cls: 'border-indigo-400/60 bg-indigo-950/40',
    text: 'اتبع التسلسل العام للمراحل الست: <span class="text-sky-300">تحضير ← اكتشاف ← احتواء ← استئصال ← استعادة ← الدروس المستفادة والتحسين</span>.' },
  { icon: '🔁', cls: 'border-amber-400/60 bg-amber-950/30',
    text: 'مع إمكانية <span class="text-amber-300">التداخل</span> والعودة لمرحلة سابقة بحسب الحادث.' },
  { icon: '📊', cls: 'border-emerald-400/60 bg-emerald-950/40',
    text: 'وحدد أولويات المخاطر بناءً على <span class="text-emerald-300">التأثير × الاحتمالية</span>.' },
]
</script>

<style scoped>
.cover-icon { animation: sl-pop .5s cubic-bezier(.3,1.6,.5,1) .2s forwards, floaty 4s ease-in-out 1s infinite; }
@keyframes floaty { 0%, 100% { transform: translateY(0) } 50% { transform: translateY(-12px) } }
.ring { animation: ring 2.2s ease-out infinite; }
@keyframes ring { 0% { transform: scale(1); opacity: .8 } 100% { transform: scale(1.5); opacity: 0 } }
</style>
