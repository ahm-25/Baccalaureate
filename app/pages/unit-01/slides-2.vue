<template>
  <SlidesPlayer v-model:step="step" :steps="steps" :chapters="chapters" back-to="/unit-01"
                :glow="inRange('hal-chat', 'hal-think') ? 'bg-amber-500/20' : from('gen-def') ? 'bg-fuchsia-500/20' : 'bg-sky-500/20'">
    <!-- ═════════════ COVER ═════════════ -->
    <Transition name="sl-frame">
      <div v-if="at('cover')" class="absolute inset-0 flex flex-col items-center justify-center text-center" dir="rtl">
        <div class="cover-icon relative w-[170px] h-[170px] mb-9 rounded-[44px] bg-gradient-to-br from-sky-400 to-fuchsia-500 flex items-center justify-center shadow-[0_0_80px_rgba(56,189,248,.45)]">
          <span class="text-[86px]">🤖</span>
          <span class="ring absolute inset-0 rounded-[44px] border-4 border-sky-300"></span>
        </div>
        <p class="text-sky-300 font-bold text-2xl tracking-wide mb-3">الوحدة الأولى · الدرس <span dir="ltr" class="inline-block">1-2</span></p>
        <h1 class="text-white font-black text-7xl leading-tight mb-8">كيف يعمل الذكاء الاصطناعي</h1>
        <div class="flex items-center gap-3">
          <span v-for="(t, i) in topics" :key="t" class="sl-in sl-badge border-white/15 bg-white/5 text-slate-100 !text-xl"
                :style="{ '--d': `${1.2 + i * 0.2}s` }">{{ t }}</span>
        </div>
        <p class="mt-12 text-slate-400 text-xl font-semibold">اضغط ▶ للتشغيل أو انقر للتقدّم خطوة بخطوة</p>
      </div>
    </Transition>

    <!-- ═════════════ CHAPTERS ═════════════ -->
    <L2Basics v-if="inRange('rules', 'hierarchy')" :f="step - S['rules']!" />
    <L2Learning v-if="inRange('ml-spam', 'dl-ann')" :f="step - S['ml-spam']!" />
    <L2GenAi v-if="inRange('gen-def', 'gen-demo')" :f="step - S['gen-def']!" />
    <L2GenAi v-if="inRange('hal-chat', 'hal-verify')" :f="step - S['hal-chat']! + 2" />

    <!-- ═════════════ CARDS ═════════════ -->
    <Transition name="sl-zoom" mode="out-in">
      <!-- Opening question -->
      <div v-if="at('question')" key="q" class="absolute inset-0 flex items-center justify-center" dir="rtl">
        <div class="w-[1080px] flex flex-col items-center gap-7">
          <div class="flex gap-5">
            <div v-for="(e, i) in openers" :key="e.text" class="sl-pop w-[300px] rounded-3xl border-2 border-white/10 bg-slate-900/85 px-5 py-4 flex items-center gap-3"
                 :style="{ '--d': `${0.3 + i * 0.5}s` }">
              <span class="text-4xl">{{ e.icon }}</span>
              <span class="text-[19px] font-bold text-slate-100 leading-snug">{{ e.text }}</span>
            </div>
          </div>
          <div class="sl-card sl-in border-amber-400/70 px-12 py-8 text-center" style="--d: 2s">
            <span class="inline-block mb-4 px-5 py-1.5 rounded-full bg-amber-400 text-amber-950 text-xl font-black">🤔 قبل ما نبدأ…</span>
            <h2 class="text-[40px] leading-[1.5] font-black text-white">
              هل الكمبيوتر بيتبع <span class="text-slate-300">قواعد ثابتة</span> فقط،
              ولا بيتعلم من <span class="text-emerald-300">أمثلة وبيانات</span>؟
            </h2>
          </div>
        </div>
      </div>

      <!-- Stop & think: spam filter vs recommendations -->
      <div v-else-if="at('think-ml')" key="think-ml" class="absolute inset-0 flex flex-col items-center pt-[60px] gap-6" dir="rtl">
        <div class="sl-pop text-5xl font-black text-white">💡 توقف وفكر</div>
        <div class="flex items-center gap-6">
          <div class="sl-in w-[380px] h-[150px] rounded-3xl border-2 border-orange-400/60 bg-slate-900/85 flex flex-col items-center justify-center gap-2" style="--d: .5s">
            <span class="text-5xl">📧</span><span class="text-[22px] font-black text-white">مرشح الرسائل المزعجة</span>
          </div>
          <span class="sl-fade text-4xl font-black text-slate-400" style="--d: 1s">و</span>
          <div class="sl-in w-[380px] h-[150px] rounded-3xl border-2 border-teal-400/60 bg-slate-900/85 flex flex-col items-center justify-center gap-2" style="--d: 1.2s">
            <span class="text-5xl">🛒</span><span class="text-[22px] font-black text-white">توصيات المنتجات</span>
          </div>
        </div>
        <p class="sl-in text-[27px] font-black text-amber-200 text-center max-w-[1000px]" style="--d: 2s">
          المهام مختلفة تمامًا… فما الشيء الذي تشترك فيه الأداتان من منظور كيفية عمل الذكاء الاصطناعي؟
        </p>
        <div class="sl-in w-[1060px] rounded-3xl border-2 border-emerald-400/60 bg-emerald-950/50 px-8 py-4 text-[22px] font-bold text-white leading-relaxed text-center" style="--d: 5s">
          ✅ كلاهما يعتمد على نماذج <span class="sl-hl-green font-black">تتعلم أنماطًا من البيانات</span> (الرسائل السابقة أو المشتريات السابقة)،
          ثم تستخدمها لإجراء تصنيف أو توصية، بدلًا من الاعتماد على قواعد برمجية ثابتة.
        </div>
      </div>

      <!-- Stop & think: hallucination in a school report -->
      <div v-else-if="at('hal-think')" key="hal-think" class="absolute inset-0 flex flex-col items-center pt-[60px] gap-6" dir="rtl">
        <div class="sl-pop text-5xl font-black text-white">💡 توقف وفكر</div>
        <div class="sl-in sl-card border-amber-400/70 px-10 py-5 text-[28px] font-black text-white text-center max-w-[1080px]" style="--d: .4s">
          لماذا من الخطر استخدام ناتج الذكاء الاصطناعي التوليدي كإجابة لتقرير مدرسي كما هو؟ وماذا يجب أن يفعل الطالب؟
        </div>
        <div class="flex gap-6">
          <div class="sl-in w-[520px] rounded-3xl border-2 border-rose-400/60 bg-rose-950/40 px-7 py-5" style="--d: 2.6s">
            <div class="text-[24px] font-black text-rose-200 mb-2">⚠️ الخطر</div>
            <p class="text-[21px] font-bold text-slate-100 leading-relaxed">تسليم معلومات خاطئة أو مختلقة (هلوسة) على أنها حقائق، مما يؤثر على مصداقية التقرير والدرجة.</p>
          </div>
          <div class="sl-in w-[520px] rounded-3xl border-2 border-emerald-400/60 bg-emerald-950/40 px-7 py-5" style="--d: 4s">
            <div class="text-[24px] font-black text-emerald-200 mb-2">✅ ماذا يفعل الطالب؟</div>
            <p class="text-[21px] font-bold text-slate-100 leading-relaxed">يستخدم AI كأداة مساعدة (للعصف الذهني أو التلخيص أو الصياغة)، ويتحقق من كل معلومة عبر مصادر موثوقة قبل اعتمادها.</p>
          </div>
        </div>
      </div>

      <!-- Review: true / false -->
      <div v-else-if="at('review')" key="review" class="absolute inset-0" dir="rtl">
        <div class="absolute top-8 inset-x-0 text-center">
          <div class="text-5xl font-black text-white">✏️ مراجعة سريعة</div>
          <p class="mt-2 text-xl font-bold text-slate-400">صحيحة (✓) أم خاطئة (✗)؟</p>
        </div>
        <div class="absolute top-[150px] inset-x-0 flex flex-col items-center gap-4">
          <div v-for="(r, i) in review" :key="r.text" class="sl-in w-[1140px] min-h-[92px] rounded-3xl border-2 border-white/10 bg-slate-900/80 flex items-center gap-5 px-6 py-3"
               :style="{ '--d': `${0.3 + i * 0.3}s` }">
            <span class="w-11 h-11 rounded-full bg-slate-700 text-white text-xl font-black flex items-center justify-center shrink-0">{{ i + 1 }}</span>
            <div class="flex-1">
              <p class="text-[22px] font-bold text-slate-100 leading-snug">{{ r.text }}</p>
              <p class="sl-fade text-[16px] font-bold text-slate-400 mt-1" :style="{ '--d': `${2.6 + i * 1.8}s` }">{{ r.why }}</p>
            </div>
            <div class="relative w-[90px] h-[60px] shrink-0">
              <span class="sl-out absolute inset-0 rounded-2xl border-2 border-dashed border-slate-500 text-2xl font-black text-slate-500 flex items-center justify-center"
                    :style="{ '--d': `${2.6 + i * 1.8}s` }">؟</span>
              <span class="sl-pop absolute inset-0 rounded-2xl border-2 text-[30px] font-black flex items-center justify-center"
                    :class="r.ok ? 'border-emerald-400 bg-emerald-600/30 text-emerald-100' : 'border-rose-400 bg-rose-600/30 text-rose-100'"
                    :style="{ '--d': `${2.6 + i * 1.8}s` }">{{ r.ok ? '✓' : '✗' }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Summary -->
      <div v-else-if="at('summary')" key="summary" class="absolute inset-0 flex flex-col items-center pt-[50px]" dir="rtl">
        <div class="sl-pop text-[52px] font-black text-white mb-6">⭐ خلاصة الدرس</div>
        <div class="grid grid-cols-2 gap-4 w-[1140px]">
          <div v-for="(p, i) in summary" :key="p.term" class="sl-in flex items-start gap-4 rounded-3xl border-2 px-6 py-4" :class="p.cls"
               :style="{ '--d': `${0.6 + i * 0.6}s` }">
            <span class="text-4xl">{{ p.icon }}</span>
            <div>
              <div class="text-[22px] font-black text-white">{{ p.term }}</div>
              <p class="text-[18px] font-bold text-slate-200 leading-snug">{{ p.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </SlidesPlayer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SlidesPlayer, { type SlideStep } from '~/components/slides/Player.vue'
import L2Basics from '~/components/slides/unit01/lesson2/Basics.vue'
import L2Learning from '~/components/slides/unit01/lesson2/Learning.vue'
import L2GenAi from '~/components/slides/unit01/lesson2/GenAi.vue'

definePageMeta({ layout: false })
useHead({ title: 'سلايدر الدرس 1-2: كيف يعمل الذكاء الاصطناعي' })

/* ───────── Timeline ───────── (frames addressed by id; chapters get a local frame number) */
const steps: SlideStep[] = [
  { id: 'cover', caption: '', dur: 4000 },
  { id: 'question', caption: 'لما الموبايل يعرف صوتك، أو يقترح عليك فيديو تحبه، أو يصنف رسالة على إنها Spam… هل الكمبيوتر بيتبع قواعد ثابتة فقط، ولا بيتعلم من أمثلة وبيانات؟', dur: 9500 },
  // ── What AI is ──
  { id: 'rules', caption: 'البرمجة التقليدية تعتمد على قواعد ثابتة يكتبها المبرمج، أما الأنظمة الذكية فتتعلم من ملايين الأمثلة والبيانات لتستنتج الأنماط بنفسها.', dur: 11000 },
  { id: 'ai-def', caption: 'الذكاء الاصطناعي: مجال واسع يضم أنظمة حاسوبية تستطيع تنفيذ مهام تتطلب عادةً ذكاءً بشريًا، مثل التعلم والتنبؤ والتعرف على الأنماط وتوليد المحتوى.', dur: 10000 },
  { id: 'ai-daily', caption: 'الذكاء الاصطناعي حواليك: في المساعد الصوتي، وفلتر البريد، ومنصات الفيديو، والمتاجر، والترجمة، وتطبيقات الخرائط.', dur: 9500 },
  { id: 'hierarchy', caption: 'الذكاء الاصطناعي هو المجال الأوسع، والتعلم الآلي فرع منه، والتعلم العميق أسلوب من التعلم الآلي، والذكاء التوليدي يعتمد غالبًا على التعلم العميق.', dur: 11000 },
  // ── ML / DL ──
  { id: 'ml-spam', caption: 'التعلم الآلي: يتعلم النموذج أنماطًا من بيانات التدريب، ثم يصنف رسالة جديدة لم يرها من قبل، بدلًا من برمجة كل قاعدة بشكل صريح.', dur: 10500 },
  { id: 'ml-students', caption: 'مثال عملي: يتعلم النموذج العلاقة بين ساعات المذاكرة والحضور والنجاح، ثم يتنبأ بنتيجة طالب جديد.', dur: 10000 },
  { id: 'dl-ann', caption: 'التعلم العميق يعتمد على شبكات عصبية متعددة الطبقات: طبقة إدخال تستقبل البيانات، وطبقات مخفية تستخرج الأنماط، وطبقة إخراج تعطي النتيجة.', dur: 11000 },
  // ── GenAI ──
  { id: 'gen-def', caption: 'الذكاء الاصطناعي التوليدي: أنظمة تنشئ محتوى جديدًا كالنصوص والصور والصوت والبرمجيات اعتمادًا على الأنماط التي تعلمتها.', dur: 9500 },
  { id: 'gen-demo', caption: 'عندما تعطي GenAI طلبًا (Prompt)، فهو لا يبحث عن إجابة محفوظة وينسخها، بل ينشئ محتوى جديدًا بناءً على الأنماط التي تعلمها.', dur: 10500 },
  { id: 'think-ml', caption: 'توقف وفكر: مرشحات الرسائل المزعجة وتوصيات المنتجات مثالان على التعلم الآلي؛ فما الذي تشترك فيه الأداتان؟', dur: 10500 },
  // ── Hallucination ──
  { id: 'hal-chat', caption: 'الهلوسة: ينتج الذكاء الاصطناعي التوليدي محتوى يبدو معقولًا ومقنعًا جدًا، لكنه غير صحيح واقعيًا.', dur: 10000 },
  { id: 'hal-sources', caption: 'مثال آخر: يكتب AI قصة مفصلة مع أسماء كتب ومصادر… وعند البحث يكتشف الطالب أن هذه الكتب غير موجودة أصلًا.', dur: 10500 },
  { id: 'hal-verify', caption: 'لا تصدق الإجابة لمجرد أنها تبدو ذكية: تحقق من المصدر، وقارن مع مصادر موثوقة، وتأكد من الأرقام والتواريخ.', dur: 10000 },
  { id: 'hal-think', caption: 'توقف وفكر: لماذا من الخطر استخدام ناتج الذكاء الاصطناعي التوليدي كإجابة لتقرير مدرسي كما هو؟ وماذا يجب أن يفعل الطالب؟', dur: 11000 },
  // ── Wrap-up ──
  { id: 'review', caption: 'مراجعة سريعة: حدد ما إذا كانت كل عبارة صحيحة أم خاطئة.', dur: 11000 },
  { id: 'summary', caption: 'الذكاء الاصطناعي هو المجال الأوسع، والتعلم الآلي يتعلم من البيانات، والتوليدي ينشئ محتوى جديدًا، ولا بد من التحقق من المخرجات المهمة.', dur: 10000 },
]

const chapters = [
  { name: 'البداية', id: 'cover' },
  { name: 'ما هو AI؟', id: 'rules' },
  { name: 'التعلم الآلي والعميق', id: 'ml-spam' },
  { name: 'التوليدي', id: 'gen-def' },
  { name: 'الهلوسة', id: 'hal-chat' },
  { name: 'الخلاصة', id: 'review' },
]

const S = Object.fromEntries(steps.map((s, i) => [s.id, i])) as Record<string, number>
const step = ref(0)
const at = (id: string) => step.value === S[id]
const from = (id: string) => step.value >= S[id]!
const inRange = (a: string, b: string) => step.value >= S[a]! && step.value <= S[b]!

const topics = ['🤖 الذكاء الاصطناعي', '📊 التعلم الآلي', '🧠 التعلم العميق', '✨ التوليدي', '⚠️ الهلوسة']
const openers = [
  { icon: '🎤', text: 'الموبايل يعرف صوتك' },
  { icon: '🎬', text: 'يقترح عليك فيديو تحبه' },
  { icon: '📧', text: 'يصنف رسالة على إنها Spam' },
]
const review = [
  { text: 'التعلم الآلي هو إحدى تقنيات ومجالات الذكاء الاصطناعي.', ok: true, why: 'لأن الذكاء الاصطناعي هو المجال الأوسع الذي يندرج تحته التعلم الآلي.' },
  { text: 'التعلم العميق مختلف تمامًا ولا علاقة له بالتعلم الآلي.', ok: false, why: 'التعلم العميق أسلوب من أساليب التعلم الآلي يعتمد على الشبكات العصبية العميقة.' },
  { text: 'الذكاء الاصطناعي التوليدي غالبًا ما يستخدم نماذج التعلم العميق لتوليد محتوى جديد.', ok: true, why: 'معظم أنظمة التوليد الحديثة (مثل ChatGPT) تعتمد على شبكات عصبية عميقة.' },
  { text: 'الذكاء الاصطناعي والتعلم الآلي لهما نفس المعنى تمامًا.', ok: false, why: 'الذكاء الاصطناعي هو المفهوم الشامل، والتعلم الآلي طريقة محددة لتحقيقه عن طريق التعلم من البيانات.' },
]
const summary = [
  { icon: '🤖', term: 'الذكاء الاصطناعي', text: 'المجال الأوسع للأنظمة الذكية التي تنفذ مهام تحاكي الذكاء البشري.', cls: 'border-sky-400/60 bg-sky-950/40' },
  { icon: '📊', term: 'التعلم الآلي', text: 'يتعلم الأنماط من البيانات لاتخاذ القرارات بدلًا من القواعد الثابتة.', cls: 'border-emerald-400/60 bg-emerald-950/40' },
  { icon: '🧠', term: 'التعلم العميق', text: 'أسلوب ML يعتمد على شبكات عصبية متعددة الطبقات.', cls: 'border-indigo-400/60 bg-indigo-950/40' },
  { icon: '✨', term: 'الذكاء الاصطناعي التوليدي', text: 'ينشئ محتوى جديدًا (نص، صورة، صوت) باستخدام أنماط متعلمة.', cls: 'border-fuchsia-400/60 bg-fuchsia-950/40' },
  { icon: '⚠️', term: 'الهلوسة', text: 'إجابة تبدو منطقية وصحيحة، لكنها غير صحيحة واقعيًا أو مختلقة.', cls: 'border-amber-400/60 bg-amber-950/40' },
  { icon: '🕵️', term: 'التحقق', text: 'مراجعة المخرجات المهمة ومقارنتها بمصادر موثوقة قبل اعتمادها.', cls: 'border-teal-400/60 bg-teal-950/40' },
]
</script>

<style scoped>
.cover-icon { animation: floaty 4s ease-in-out infinite; }
@keyframes floaty { 0%, 100% { transform: translateY(0) } 50% { transform: translateY(-12px) } }
.ring { animation: ring 2.2s ease-out infinite; }
@keyframes ring { 0% { transform: scale(1); opacity: .8 } 100% { transform: scale(1.5); opacity: 0 } }
</style>
