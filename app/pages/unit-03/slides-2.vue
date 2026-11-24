<template>
  <SlidesPlayer v-model:step="step" :steps="steps" :chapters="chapters" back-to="/unit-03" :glow="glow">
    <!-- ═════════════ COVER ═════════════ -->
    <Transition name="sl-frame">
      <div v-if="at('cover')" class="absolute inset-0 flex flex-col items-center justify-center text-center" dir="rtl">
        <div class="cover-icon relative w-[170px] h-[170px] mb-9 rounded-[44px] bg-gradient-to-br from-sky-400 via-violet-500 to-emerald-400 flex items-center justify-center shadow-[0_0_80px_rgba(56,189,248,.45)] sl-pop" style="--d: .2s">
          <span class="text-[86px]">🔁</span>
          <span class="ring absolute inset-0 rounded-[44px] border-4 border-sky-300"></span>
        </div>
        <p class="text-sky-300 font-bold text-2xl tracking-wide mb-3">الوحدة الثالثة · الدرس <span dir="ltr" class="inline-block">3-2</span></p>
        <h1 class="text-white font-black text-7xl leading-tight mb-8">طرق اتصال تطبيقات الويب</h1>
        <div class="flex items-center gap-3">
          <span v-for="(t, i) in topics" :key="t" class="sl-in sl-badge border-white/15 bg-white/5 text-slate-100 !text-xl"
                :style="{ '--d': `${1.2 + i * 0.25}s` }">{{ t }}</span>
        </div>
        <p class="mt-12 text-slate-400 text-xl font-semibold">اضغط ▶ للتشغيل أو انقر للتقدّم خطوة بخطوة</p>
      </div>
    </Transition>

    <!-- ═════════════ CHAPTERS ═════════════ -->
    <L2ClientServer v-if="inRange('cs-def', 'cs-cycle')" :f="step - S['cs-def']!" />
    <L2Https v-if="inRange('http-def', 'http-think')" :f="step - S['http-def']!" />
    <L2Requests v-if="inRange('req-methods', 'req-log')" :f="step - S['req-methods']!" />
    <L2ApiJson v-if="inRange('api-def', 'api-struct')" :f="step - S['api-def']!" />
    <L2Engineer v-if="inRange('eng-methods', 'eng-decide')" :f="step - S['eng-methods']!" />

    <!-- ═════════════ CARDS ═════════════ -->
    <Transition name="sl-zoom" mode="out-in">
      <!-- Lesson question -->
      <div v-if="at('question')" key="q" class="absolute inset-0 flex items-center justify-center" dir="rtl">
        <div class="w-[1080px] flex flex-col items-center gap-7">
          <p class="sl-in text-2xl font-bold text-slate-300 text-center leading-relaxed">
            عندما تنقر على رابط أو تبدأ بحثًا، يطلب المتصفح البيانات من خادم عبر الشبكة
            <br>المتصفح هنا <span class="text-sky-300 font-black">عميل</span> يرسل طلبًا، و<span class="text-amber-300 font-black">الخادم</span> يعيد استجابة — وفق قواعد مثل <span class="sl-hl-amber font-black" dir="ltr">HTTP</span>
          </p>
          <div class="sl-card sl-in border-amber-400/70 px-12 py-8 text-center" style="--d: 1s">
            <span class="inline-block mb-4 px-5 py-1.5 rounded-full bg-amber-400 text-amber-950 text-xl font-black">❓ السؤال الرئيسي</span>
            <h2 class="text-[38px] leading-[1.55] font-black text-white">
              كيف يتواصل <span class="text-sky-300">العميل</span> و<span class="text-amber-300">الخادم</span> لتشغيل تطبيق الويب،
              وما <span class="text-emerald-300">القواعد والرسائل</span> التي يستخدمانها؟
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
            <div class="relative w-[260px] h-[56px] shrink-0">
              <span class="sl-out absolute inset-0 rounded-2xl border-2 border-dashed border-slate-500 text-2xl font-black text-slate-500 flex items-center justify-center"
                    :style="{ '--d': `${2.4 + i * 1.8}s` }">؟</span>
              <span class="sl-pop absolute inset-0 rounded-2xl border-2 text-[22px] font-black font-mono flex items-center justify-center gap-2"
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
            في كثير من الحالات يرسل <span class="text-sky-300 font-black">العميل</span> طلبًا ويعيد <span class="text-amber-300 font-black">الخادم</span> استجابة وفق قواعد HTTP، وقد تستخدم التطبيقات وسائل أخرى عند الحاجة.
          </p>
        </div>
        <div class="absolute top-[165px] inset-x-0 grid grid-cols-2 gap-4 w-[1100px] mx-auto">
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
import L2ClientServer from '~/components/slides/unit03/lesson2/ClientServer.vue'
import L2Https from '~/components/slides/unit03/lesson2/Https.vue'
import L2Requests from '~/components/slides/unit03/lesson2/Requests.vue'
import L2ApiJson from '~/components/slides/unit03/lesson2/ApiJson.vue'
import L2Engineer from '~/components/slides/unit03/lesson2/Engineer.vue'

definePageMeta({ layout: false })
useHead({ title: 'سلايدر الدرس 3-2: طرق اتصال تطبيقات الويب' })

/* ───────── Timeline ─────────
   Each frame is addressed by its id, so frames can be inserted without renumbering.
   Chapter components receive a local frame number counted from their first frame. */
const steps: SlideStep[] = [
  { id: 'cover', caption: '', dur: 4000 },
  { id: 'question', caption: 'سؤال الدرس: كيف يتواصل العميل والخادم لتشغيل تطبيق الويب، وما القواعد والرسائل التي يستخدمانها؟', dur: 9500 },
  // ── Client and server ──
  { id: 'cs-def', caption: 'العميل برنامج أو جهاز يرسل طلبًا إلى خدمة أخرى، مثل المتصفح وتطبيق الهاتف؛ والخادم يستقبل الطلبات ويعالجها ويعيد الاستجابات.', dur: 11000 },
  { id: 'cs-cycle', caption: 'يرسل العميل طلبًا إلى الخادم، فيستقبله الخادم ويعالجه، ثم يعيد استجابة بالبيانات المطلوبة، فيعرضها العميل.', dur: 9000 },
  // ── HTTP / HTTPS ──
  { id: 'http-def', caption: 'HTTP بروتوكول لتبادل الرسائل بين عميل وخادم على الويب؛ وHTTPS هو استخدام HTTP عبر اتصال TLS آمن.', dur: 10000 },
  { id: 'http-plain', caption: 'مع HTTP العادي تنتقل البيانات دون حماية TLS، فيستطيع المتجسس قراءة اسم المستخدم وكلمة المرور.', dur: 9000 },
  { id: 'http-secure', caption: 'مع HTTPS يحمي TLS سرية الاتصال وسلامته؛ فلا يستطيع المتجسس قراءة المحتوى أو تعديله بسهولة أثناء النقل.', dur: 9000 },
  { id: 'http-think', caption: 'توقف وفكر: صفحة تسجيل الدخول ترسل بيانات حساسة، لذلك يجب أن تستخدم HTTPS بدلًا من HTTP العادي.', dur: 10500 },
  // ── Requests and responses ──
  { id: 'req-methods', caption: 'طريقة طلب HTTP توضح نوع العملية: GET يُستخدم عادةً لطلب مورد أو بيانات، وPOST لإرسال بيانات ليعالجها الخادم.', dur: 10500 },
  { id: 'req-codes', caption: 'رمز حالة HTTP يشير إلى نتيجة المعالجة: 200 نجاح، و404 المورد غير موجود، و500 خطأ داخلي في الخادم.', dur: 10000 },
  { id: 'req-log', caption: 'كل طلب يحمل طريقة توضح نوع العملية، وكل استجابة تحمل رمز حالة يبيّن النتيجة.', dur: 11000 },
  // ── API and JSON ──
  { id: 'api-def', caption: 'واجهة برمجة التطبيقات API: قواعد واضحة تسمح لبرنامج بطلب بيانات أو وظائف من برنامج آخر، مثل طلب الطقس من خدمة خلفية.', dur: 10000 },
  { id: 'api-json', caption: 'قد تعيد API البيانات بصيغة JSON: مفاتيح تقابلها قيم؛ القيمة النصية بين علامتي تنصيص، والرقمية دونها.', dur: 10500 },
  { id: 'api-struct', caption: 'يمثل JSON البيانات بكائنات بين قوسين معقوصين { } فيها أزواج مفتاح وقيمة، ومصفوفات بين قوسين مربعين [ ] فيها قائمة قيم مرتبة، وقيم بسيطة.', dur: 13000 },
  // ── Think like an engineer ──
  { id: 'eng-methods', caption: 'فكّر كمهندس: GET لتحميل سجل الدرجات، وPOST لإرسال نموذج الدخول، وGET عبر API لطلب الجدول من نظام مدرسة أخرى.', dur: 11000 },
  { id: 'eng-decide', caption: 'القرار: استخدام HTTPS والأسلوب المناسب لكل إجراء؛ والإجراء الذي يجب أن يستخدم POST هو إرسال نموذج تسجيل الدخول.', dur: 11000 },
  // ── Wrap-up ──
  { id: 'review', caption: 'مراجعة سريعة: اختر المصطلح المناسب لكل وصف.', dur: 10500 },
  { id: 'answer', caption: 'إجابة السؤال الرئيسي: طلب واستجابة وفق HTTP أو HTTPS، بطريقة توضح الغرض، ورمز حالة يبيّن النتيجة، وAPI قد تعيد بيانات JSON.', dur: 12000 },
  { id: 'summary', caption: 'العميل يطلب والخادم يستجيب عبر HTTP أو HTTPS، بأسلوب GET أو POST، ورمز حالة يبلغ عن النتيجة، وغالبًا API تعيد بيانات JSON.', dur: 10000 },
]

const chapters = [
  { name: 'البداية', id: 'cover' },
  { name: 'العميل والخادم', id: 'cs-def' },
  { name: 'HTTP و HTTPS', id: 'http-def' },
  { name: 'الطلبات', id: 'req-methods' },
  { name: 'API و JSON', id: 'api-def' },
  { name: 'فكّر كمهندس', id: 'eng-methods' },
  { name: 'الخلاصة', id: 'review' },
]

const S = Object.fromEntries(steps.map((s, i) => [s.id, i])) as Record<string, number>
const step = ref(0)
const at = (id: string) => step.value === S[id]
const from = (id: string) => step.value >= S[id]!
const inRange = (a: string, b: string) => step.value >= S[a]! && step.value <= S[b]!

const glow = computed(() => {
  if (from('answer') || at('http-secure')) return 'bg-emerald-500/25'
  if (at('http-plain')) return 'bg-rose-500/20'
  if (inRange('api-def', 'api-struct')) return 'bg-violet-500/20'
  return 'bg-sky-500/20'
})

const topics = ['🤝 العميل والخادم', '🔒 HTTP و HTTPS', '📨 GET و POST', '🧩 API و JSON']
const letters = ['أ', 'ب', 'ج', 'د']
const review = [
  { text: 'طريقة تُستخدم عادةً لإرسال محتويات نموذج ليعالجها الخادم', ans: 'POST', cls: 'border-amber-400 bg-amber-600/30 text-amber-50' },
  { text: 'رمز الحالة عندما يكون المورد المطلوب غير موجود بهذا العنوان', ans: '404', cls: 'border-amber-400 bg-amber-600/30 text-amber-50' },
  { text: 'استخدام HTTP عبر اتصال TLS آمن', ans: 'HTTPS', cls: 'border-emerald-400 bg-emerald-600/30 text-emerald-50' },
  { text: 'صيغة نصية شائعة لتمثيل وتبادل البيانات المهيكلة', ans: 'JSON', cls: 'border-violet-400 bg-violet-600/30 text-violet-50' },
]
const answer = [
  { icon: '🌐', title: 'HTTP و HTTPS', cls: 'border-sky-400/60 bg-sky-950/45',
    text: 'يحدد HTTP طريقة تبادل الرسائل، ويستخدم HTTPS اتصال TLS آمنًا.' },
  { icon: '📨', title: 'طريقة HTTP', cls: 'border-amber-400/60 bg-amber-950/35',
    text: 'توضح الغرض من الطلب: GET لطلب مورد أو بيانات، وPOST لإرسال بيانات ليعالجها الخادم.' },
  { icon: '📮', title: 'رموز الحالة', cls: 'border-emerald-400/60 bg-emerald-950/40',
    text: 'تبيّن نتيجة معالجة الطلب، مثل 200 و404 و500.' },
  { icon: '🧩', title: 'API و JSON', cls: 'border-violet-400/60 bg-violet-950/40',
    text: 'قد تستخدم التطبيقات API بقواعد واضحة لتبادل البيانات، وربما تمثلها بصيغة JSON النصية المهيكلة.' },
]
const summary = [
  { icon: '💻', cls: 'border-sky-400/60 bg-sky-950/40',
    text: '<span class="text-sky-300">العميل يطلب، والخادم يستجيب</span> — عبر HTTP أو HTTPS.' },
  { icon: '📮', cls: 'border-amber-400/60 bg-amber-950/30',
    text: 'بأسلوب <span class="text-amber-300">GET</span> أو <span class="text-amber-300">POST</span>، ومع <span class="text-emerald-300">رمز حالة</span> يبلغ عن النتيجة.' },
  { icon: '🧩', cls: 'border-violet-400/60 bg-violet-950/40',
    text: 'وغالبًا <span class="text-violet-300">واجهة برمجة تطبيقات</span> تعيد بيانات <span class="text-violet-300">JSON</span>.' },
]
</script>

<style scoped>
.cover-icon { animation: sl-pop .5s cubic-bezier(.3,1.6,.5,1) .2s forwards, floaty 4s ease-in-out 1s infinite; }
@keyframes floaty { 0%, 100% { transform: translateY(0) } 50% { transform: translateY(-12px) } }
.ring { animation: ring 2.2s ease-out infinite; }
@keyframes ring { 0% { transform: scale(1); opacity: .8 } 100% { transform: scale(1.5); opacity: 0 } }
</style>
