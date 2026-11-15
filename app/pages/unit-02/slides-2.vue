<template>
  <SlidesPlayer v-model:step="step" :steps="steps" :chapters="chapters" back-to="/unit-02"
                :glow="from('answer') ? 'bg-emerald-500/25' : 'bg-sky-500/20'">
    <!-- ═════════════ COVER ═════════════ -->
    <Transition name="sl-frame">
      <div v-if="at('cover')" class="absolute inset-0 flex flex-col items-center justify-center text-center" dir="rtl">
        <div class="cover-layers relative w-[190px] h-[190px] mb-9">
          <div v-for="(c, i) in coverRings" :key="i" class="sl-pop absolute rounded-[44px] border-4"
               :class="c" :style="{ inset: `${i * 22}px`, '--d': `${0.2 + i * 0.25}s` }"></div>
          <div class="absolute inset-0 flex items-center justify-center text-6xl sl-pop" style="--d: 1.2s">🛡️</div>
        </div>
        <p class="text-sky-300 font-bold text-2xl tracking-wide mb-3">الوحدة الثانية · الدرس 2-2</p>
        <h1 class="text-white font-black text-7xl leading-tight mb-8">تصميم أمان الشبكات</h1>
        <div class="flex items-center gap-3">
          <span v-for="(t, i) in topics" :key="t" class="sl-in sl-badge border-white/15 bg-white/5 text-slate-100 !text-xl"
                :style="{ '--d': `${1.4 + i * 0.2}s` }">{{ t }}</span>
        </div>
        <p class="mt-12 text-slate-400 text-xl font-semibold">اضغط ▶ للتشغيل أو انقر للتقدّم خطوة بخطوة</p>
      </div>
    </Transition>

    <!-- ═════════════ CHAPTERS ═════════════ -->
    <L2Firewall v-if="inRange('fw-def', 'fw-default')" :f="step - S['fw-def']!" />
    <L2Vpn v-if="inRange('vpn-risk', 'vpn-limit')" :f="step - S['vpn-risk']!" />
    <L2Dmz v-if="inRange('dmz-flat', 'dmz-think')" :f="step - S['dmz-flat']!" />
    <L2Depth v-if="inRange('did-def', 'did-all')" :f="step - S['did-def']!" />
    <L2ZeroTrust v-if="inRange('zt-perimeter', 'zt-zero')" :f="step - S['zt-perimeter']!" />

    <!-- ═════════════ CARDS ═════════════ -->
    <Transition name="sl-zoom" mode="out-in">
      <!-- Lesson question -->
      <div v-if="at('question')" key="q" class="absolute inset-0 flex items-center justify-center" dir="rtl">
        <div class="w-[1040px] flex flex-col items-center gap-7">
          <p class="sl-in text-2xl font-bold text-slate-300 text-center leading-relaxed">
            في الدرس 2-1 حمينا <span class="text-sky-300">الاتصال</span> و<span class="text-sky-300">الحسابات</span> بالتشفير والمصادقة…
            <br>والآن نوسّع الحماية إلى <span class="sl-hl-amber font-black">تصميم الشبكة نفسها</span>
          </p>
          <div class="sl-card sl-in border-amber-400/70 px-12 py-9 text-center" style="--d: 1s">
            <span class="inline-block mb-4 px-5 py-1.5 rounded-full bg-amber-400 text-amber-950 text-xl font-black">❓ السؤال الرئيسي</span>
            <h2 class="text-[40px] leading-[1.5] font-black text-white">
              كيف يمكن لمؤسسة أن تصمم شبكتها بحيث،
              <span class="text-rose-300">حتى لو تم اختراق أحد الدفاعات</span>،
              <span class="text-emerald-300">يظل النظام محميًا</span>؟
            </h2>
          </div>
        </div>
      </div>

      <!-- Quick review: match the description to the term -->
      <div v-else-if="at('review')" key="review" class="absolute inset-0" dir="rtl">
        <div class="absolute top-8 inset-x-0 text-center">
          <div class="text-5xl font-black text-white">✏️ مراجعة سريعة</div>
          <p class="mt-2 text-xl font-bold text-slate-400">طابق كل وصف بأنسب مصطلح</p>
        </div>
        <div class="absolute top-[160px] inset-x-0 flex flex-col items-center gap-5">
          <div v-for="(r, i) in review" :key="r.term" class="sl-in w-[1120px] h-[104px] rounded-3xl border-2 border-white/10 bg-slate-900/80 flex items-center gap-5 px-6"
               :style="{ '--d': `${0.3 + i * 0.3}s` }">
            <span class="w-12 h-12 rounded-full bg-slate-700 text-white text-2xl font-black flex items-center justify-center shrink-0">{{ letters[i] }}</span>
            <p class="flex-1 text-[23px] font-bold text-slate-100 leading-snug">{{ r.text }}</p>
            <div class="relative w-[300px] h-[60px] shrink-0">
              <span class="sl-out absolute inset-0 rounded-2xl border-2 border-dashed border-slate-500 text-3xl font-black text-slate-500 flex items-center justify-center"
                    :style="{ '--d': `${2.6 + i * 2}s` }">؟</span>
              <span class="sl-pop absolute inset-0 rounded-2xl border-2 text-[22px] font-black flex items-center justify-center gap-2"
                    :class="r.cls" :style="{ '--d': `${2.6 + i * 2}s` }">{{ r.icon }} {{ r.term }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Answer to the lesson question -->
      <div v-else-if="at('answer')" key="answer" class="absolute inset-0" dir="rtl">
        <div class="absolute top-8 inset-x-0 flex flex-col items-center">
          <span class="px-5 py-1.5 rounded-full bg-emerald-400 text-emerald-950 text-xl font-black">❓ إجابة السؤال الرئيسي</span>
          <p class="mt-3 text-[26px] font-black text-white">تصميم شبكة لا يؤدي فيها فشل وسيلة واحدة إلى كشف النظام كله</p>
        </div>
        <div class="absolute top-[170px] inset-x-0 flex justify-center gap-4">
          <div v-for="(t, i) in answerTiles" :key="t.name" class="sl-in w-[222px] h-[196px] rounded-3xl border-2 flex flex-col items-center justify-center text-center px-3"
               :class="t.cls" :style="{ '--d': `${0.5 + i * 0.6}s` }">
            <span class="text-5xl mb-2">{{ t.icon }}</span>
            <span class="text-[22px] font-black text-white leading-tight">{{ t.name }}</span>
            <span class="mt-2 text-[18px] font-bold text-slate-200 leading-snug">{{ t.role }}</span>
          </div>
        </div>
        <div class="absolute top-[400px] inset-x-0 flex justify-center">
          <div class="sl-in w-[1150px] rounded-3xl border-2 border-emerald-400/60 bg-emerald-950/50 px-8 py-4 text-[23px] font-bold text-slate-100 leading-relaxed text-center"
               style="--d: 3.8s">
            ومع السحابة والعمل عن بُعد لم يعد موقع المستخدم دليلًا كافيًا على الثقة؛ لذلك يطلب <span class="sl-hl-green font-black">نهج انعدام الثقة</span> التحقق من الهوية والصلاحيات عند الوصول.
            <br><span class="text-emerald-200 font-black">تعمل هذه الطبقات معًا لتقليل الخطر والحد من أثر الاختراق.</span>
          </div>
        </div>
      </div>

      <!-- Summary -->
      <div v-else-if="at('summary')" key="summary" class="absolute inset-0 flex flex-col items-center pt-[70px]" dir="rtl">
        <div class="sl-pop text-[56px] font-black text-white mb-2">⭐ الخلاصة</div>
        <p class="sl-in text-2xl font-bold text-slate-400 mb-8" style="--d: .3s">تذكّر:</p>
        <div class="flex flex-col gap-5 w-[1080px]">
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
import { ref } from 'vue'
import SlidesPlayer, { type SlideStep } from '~/components/slides/Player.vue'
import L2Firewall from '~/components/slides/unit02/lesson2/Firewall.vue'
import L2Vpn from '~/components/slides/unit02/lesson2/Vpn.vue'
import L2Dmz from '~/components/slides/unit02/lesson2/Dmz.vue'
import L2Depth from '~/components/slides/unit02/lesson2/Depth.vue'
import L2ZeroTrust from '~/components/slides/unit02/lesson2/ZeroTrust.vue'

definePageMeta({ layout: false })
useHead({ title: 'سلايدر الدرس 2-2: تصميم أمان الشبكات' })

/* ───────── Timeline ─────────
   Each frame is addressed by its id, so frames can be inserted without renumbering.
   Chapter components receive a local frame number counted from their first frame. */
const steps: SlideStep[] = [
  { id: 'cover', caption: '', dur: 4000 },
  { id: 'question', caption: 'سؤال الدرس: كيف يمكن لمؤسسة أن تصمم شبكتها بحيث، حتى لو تم اختراق أحد الدفاعات، يظل النظام محميًا؟', dur: 9000 },
  // ── Firewall ──
  { id: 'fw-def', caption: 'جدار الحماية: نظام أو برنامج يراقب حركة مرور الشبكة ويسمح بها أو يمنعها وفق قواعد أمنية، وقد يوجد عند حدود الشبكة أو بين أجزائها أو على جهاز مضيف.', dur: 10000 },
  { id: 'fw-places', caption: 'قد يوجد جدار الحماية عند حدود الشبكة ليحميها من الخارج، أو بين أجزائها ليفصل قسمًا عن آخر، أو على جهاز مضيف ليحمي الجهاز نفسه.', dur: 13000 },
  { id: 'fw-allow', caption: 'زائر يفتح موقع المؤسسة: يقارن جدار الحماية الطلب بالقواعد من الأعلى إلى الأسفل، فتنطبق القاعدة 1، فيُسمح بالوصول إلى خادم الويب.', dur: 8000 },
  { id: 'fw-deny', caption: 'مهاجم يحاول الاتصال بقاعدة البيانات مباشرة: تنطبق القاعدة 2، فلا يُسمح بالوصول الخارجي المباشر إلى قاعدة البيانات.', dur: 8500 },
  { id: 'fw-default', caption: 'اتصال مجهول على منفذ غير معروف: لا توجد قاعدة تسمح به، فتُطبَّق القاعدة الافتراضية: منع أي اتصال آخر.', dur: 9500 },
  // ── VPN ──
  { id: 'vpn-risk', caption: 'موظف في مقهى يتصل بشبكة المؤسسة عبر Wi-Fi عامة: بدون VPN قد يتمكن من يتنصت على الشبكة من قراءة بيانات غير محمية.', dur: 8500 },
  { id: 'vpn-on', caption: 'الشبكة الافتراضية الخاصة (VPN): اتصال منطقي خاص عبر شبكة عامة مثل الإنترنت، يستخدم التشفير وتقنيات النفق؛ فيرى المتنصت بيانات غير مفهومة.', dur: 9500 },
  { id: 'vpn-uses', caption: 'الاستخدامات الرئيسية: العمل عن بُعد بالاتصال بأمان بشبكة المؤسسة من المنزل أو أثناء التنقل، وربط المكاتب في مواقع مختلفة بأمان.', dur: 8500 },
  { id: 'vpn-limit', caption: 'انتبه: VPN يحمي البيانات أثناء انتقالها، لكنه لا يحذف الملفات المصابة بالفيروسات؛ هذه مهمة حماية الأجهزة الطرفية.', dur: 9500 },
  // ── DMZ ──
  { id: 'dmz-flat', caption: 'خادم الويب معرَّض للإنترنت؛ فإذا وُضع داخل الشبكة الداخلية واختُرق، ينتقل المهاجم منه مباشرة إلى الأجهزة والبيانات السرية.', dur: 9000 },
  { id: 'dmz-def', caption: 'المنطقة المعزولة (DMZ): منطقة تُوضع فيها الخوادم المعرَّضة للشبكة الخارجية، مثل خوادم الويب والبريد، بشكل منفصل عن الشبكة الداخلية.', dur: 9000 },
  { id: 'dmz-attack', caption: 'إذا اختُرق خادم الويب في DMZ، يمنع جدار الحماية بين DMZ والشبكة الداخلية وصول الهجوم؛ فتظل الشبكة الداخلية محمية.', dur: 9000 },
  { id: 'dmz-think', caption: 'توقف وفكر: لماذا يكون وضع خادم ويب عام في المنطقة المعزولة أكثر أمانًا من وضعه داخل الشبكة الداخلية؟', dur: 11000 },
  // ── Defense in depth ──
  { id: 'did-def', caption: 'الدفاع في العمق: استخدام طبقات متعددة من الضوابط الأمنية؛ فإذا فشلت طبقة حماية، تبقى طبقات أخرى تقلل الخطر وتحد من أثر الاختراق.', dur: 9500 },
  { id: 'did-layers', caption: 'في أمان الشبكات يُجمع بين عدة إجراءات: جدار الحماية عند مدخل الشبكة، والشبكة الافتراضية الخاصة لمسار الاتصال، والمنطقة المعزولة لوضع الخوادم، وحماية الأجهزة الطرفية.', dur: 10000 },
  { id: 'did-one', caption: 'هل يكفي جدار الحماية وحده؟ أوقف هجومًا واحدًا فقط من أربعة؛ لذلك لا يكفي الاعتماد على إجراء أمني واحد.', dur: 9000 },
  { id: 'did-all', caption: 'مع كل الطبقات أُوقفت الهجمات الأربع: كل طبقة غطّت ثغرة لا تغطيها الطبقات الأخرى، وهذا هو الدفاع في العمق.', dur: 9000 },
  // ── Zero trust ──
  { id: 'zt-perimeter', caption: 'صُمم الأمان التقليدي حول حماية المحيط الأمني، بناءً على فرضية أن «داخل شبكة المؤسسة آمن، وخارجها خطر».', dur: 8500 },
  { id: 'zt-blur', caption: 'مع انتشار الخدمات السحابية والعمل عن بُعد، أصبحت الحدود بين «الداخل» و«الخارج» غير واضحة، ولم تعد حماية المحيط وحدها كافية.', dur: 9000 },
  { id: 'zt-def', caption: 'نهج انعدام الثقة: لا يمنح الثقة تلقائيًا لمستخدم أو جهاز لمجرد وجوده داخل الشبكة، بل تُفحص الهوية والصلاحيات والسياق عند طلب الوصول.', dur: 10000 },
  { id: 'zt-trad', caption: 'الأمان التقليدي يحكم على الطلب بموقعه فقط: يسمح لجهاز مصاب لأنه في الداخل، ويرفض معلمة لها صلاحية لأنها خارج الشبكة.', dur: 9500 },
  { id: 'zt-zero', caption: 'أما نهج انعدام الثقة فيتحقق من الهوية والصلاحيات والسياق لكل طلب، فيتخذ القرار الصحيح في المواقف الثلاثة.', dur: 9000 },
  // ── Wrap-up ──
  { id: 'review', caption: 'مراجعة سريعة: طابق كل وصف بأنسب مصطلح من الخيارات: جدار الحماية، الشبكة الافتراضية الخاصة، المنطقة المعزولة.', dur: 10000 },
  { id: 'answer', caption: 'إجابة السؤال الرئيسي: تعمل هذه الطبقات معًا لتقليل الخطر والحد من أثر الاختراق، فلا يؤدي فشل وسيلة واحدة إلى كشف النظام كله.', dur: 11000 },
  { id: 'summary', caption: 'كدّس دفاعاتك وتحقق من كل عملية وصول؛ عندها يصبح من غير المرجح أن يؤدي خرق واحد إلى كشف الشبكة بأكملها.', dur: 10000 },
]

const chapters = [
  { name: 'البداية', id: 'cover' },
  { name: 'جدار الحماية', id: 'fw-def' },
  { name: 'VPN', id: 'vpn-risk' },
  { name: 'DMZ', id: 'dmz-flat' },
  { name: 'الدفاع في العمق', id: 'did-def' },
  { name: 'انعدام الثقة', id: 'zt-perimeter' },
  { name: 'الخلاصة', id: 'review' },
]

const S = Object.fromEntries(steps.map((s, i) => [s.id, i])) as Record<string, number>
const step = ref(0)
const at = (id: string) => step.value === S[id]
const from = (id: string) => step.value >= S[id]!
const inRange = (a: string, b: string) => step.value >= S[a]! && step.value <= S[b]!

const coverRings = ['border-rose-400/80', 'border-indigo-400/80', 'border-amber-400/80', 'border-emerald-400/80']
const topics = ['🧱 جدار الحماية', '🔒 VPN', '🏝️ DMZ', '🧅 الدفاع في العمق', '🔍 انعدام الثقة']

const letters = ['أ', 'ب', 'ج']
const review = [
  { text: 'تقنية تنشئ خطًا خاصًا افتراضيًا مشفرًا عبر الإنترنت للاتصال الآمن من موقع بعيد.', icon: '🔒', term: 'الشبكة الافتراضية الخاصة',
    cls: 'border-indigo-400 bg-indigo-600/30 text-indigo-100' },
  { text: 'منطقة تُوضع فيها الخوادم المعرَّضة للخارج بشكل منفصل عن الشبكة الداخلية.', icon: '🏝️', term: 'المنطقة المعزولة',
    cls: 'border-amber-400 bg-amber-600/25 text-amber-100' },
  { text: 'نظام يسمح بالاتصال أو يمنعه استنادًا إلى قواعد محددة مسبقًا.', icon: '🧱', term: 'جدار الحماية',
    cls: 'border-rose-400 bg-rose-600/25 text-rose-100' },
]
const answerTiles = [
  { icon: '🧱', name: 'جدار الحماية', role: 'يراقب حركة الشبكة', cls: 'border-rose-400/70 bg-rose-950/50' },
  { icon: '🔒', name: 'VPN', role: 'تحمي الاتصال البعيد', cls: 'border-indigo-400/70 bg-indigo-950/50' },
  { icon: '🏝️', name: 'المنطقة المعزولة', role: 'تفصل الخوادم العامة عن الشبكة الداخلية', cls: 'border-amber-400/70 bg-amber-950/40' },
  { icon: '💻', name: 'الأجهزة الطرفية', role: 'ضوابطها تحمي كل جهاز', cls: 'border-emerald-400/70 bg-emerald-950/40' },
  { icon: '🔍', name: 'انعدام الثقة', role: 'لا ثقة تلقائية؛ تحقق عند كل وصول', cls: 'border-sky-400/70 bg-sky-950/50' },
]
const summary = [
  { icon: '🧅', cls: 'border-amber-400/60 bg-amber-950/30',
    text: 'كدّس دفاعاتك — <span class="text-rose-300">جدار الحماية</span>، و<span class="text-indigo-300">الشبكة الافتراضية الخاصة</span>، و<span class="text-amber-300">المنطقة المعزولة</span>، و<span class="text-emerald-300">الأجهزة الطرفية</span>.' },
  { icon: '🔍', cls: 'border-sky-400/60 bg-sky-950/30',
    text: 'وتحقق من كل عملية وصول (<span class="text-sky-300">نهج انعدام الثقة</span>).' },
  { icon: '🛡️', cls: 'border-emerald-400/60 bg-emerald-950/40',
    text: 'عندها يصبح من غير المرجح أن يؤدي <span class="text-emerald-300">خرق واحد</span> إلى كشف الشبكة بأكملها.' },
]
</script>

<style scoped>
.cover-layers { animation: floaty 4s ease-in-out infinite; }
@keyframes floaty { 0%, 100% { transform: translateY(0) } 50% { transform: translateY(-12px) } }
</style>
