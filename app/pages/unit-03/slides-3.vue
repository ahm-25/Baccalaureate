<template>
  <SlidesPlayer v-model:step="step" :steps="steps" :chapters="chapters" back-to="/unit-03" :glow="glow">
    <!-- ═════════════ COVER ═════════════ -->
    <Transition name="sl-frame">
      <div v-if="at('cover')" class="absolute inset-0 flex flex-col items-center justify-center text-center" dir="rtl">
        <div class="cover-icon relative w-[170px] h-[170px] mb-9 rounded-[44px] bg-gradient-to-br from-orange-400 via-sky-400 to-yellow-300 flex items-center justify-center shadow-[0_0_80px_rgba(251,146,60,.45)] sl-pop" style="--d: .2s">
          <span class="text-[86px]">🎨</span>
          <span class="ring absolute inset-0 rounded-[44px] border-4 border-orange-300"></span>
        </div>
        <p class="text-sky-300 font-bold text-2xl tracking-wide mb-3">الوحدة الثالثة · الدرس <span dir="ltr" class="inline-block">3-3</span></p>
        <h1 class="text-white font-black text-7xl leading-tight mb-8">أساسيات تقنية الواجهة الأمامية</h1>
        <div class="flex items-center gap-3">
          <span v-for="(t, i) in topics" :key="t" class="sl-in sl-badge border-white/15 bg-white/5 text-slate-100 !text-xl"
                :style="{ '--d': `${1.2 + i * 0.25}s` }">{{ t }}</span>
        </div>
        <p class="mt-12 text-slate-400 text-xl font-semibold">اضغط ▶ للتشغيل أو انقر للتقدّم خطوة بخطوة</p>
      </div>
    </Transition>

    <!-- ═════════════ CHAPTERS ═════════════ -->
    <L3Roles v-if="inRange('roles', 'build-js')" :f="step - S['roles']!" />
    <L3Semantic v-if="inRange('sem-tags', 'sem-benefits')" :f="step - S['sem-tags']!" />
    <L3Responsive v-if="at('responsive')" :f="0" />
    <L3Frameworks v-if="inRange('fw-def', 'fw-reuse')" :f="step - S['fw-def']!" />
    <L3Engineer v-if="inRange('eng-tech', 'eng-decide')" :f="step - S['eng-tech']!" />

    <!-- ═════════════ CARDS ═════════════ -->
    <Transition name="sl-zoom" mode="out-in">
      <!-- Lesson question -->
      <div v-if="at('question')" key="q" class="absolute inset-0 flex items-center justify-center" dir="rtl">
        <div class="w-[1100px] flex flex-col items-center gap-7">
          <p class="sl-in text-2xl font-bold text-slate-300 text-center leading-relaxed">
            عند فتح أي صفحة ويب ترى ثلاث تقنيات تعمل معًا:
            <span class="text-orange-300 font-black">HTML</span> للهيكل، و<span class="text-sky-300 font-black">CSS</span> للمظهر،
            و<span class="text-yellow-300 font-black">JavaScript</span> للسلوك التفاعلي
          </p>
          <div class="sl-card sl-in border-amber-400/70 px-12 py-8 text-center" style="--d: 1s">
            <span class="inline-block mb-4 px-5 py-1.5 rounded-full bg-amber-400 text-amber-950 text-xl font-black">❓ السؤال الرئيسي</span>
            <h2 class="text-[34px] leading-[1.6] font-black text-white">
              كيف تعمل HTML وCSS وJavaScript معًا لبناء صفحة ويب، وما الذي يجعل الواجهة الأمامية الحديثة
              <span class="text-orange-300">ذات معنى</span> و<span class="text-sky-300">قابلة للتكيف</span> و<span class="text-emerald-300">فعّالة في البناء</span>؟
            </h2>
          </div>
        </div>
      </div>

      <!-- Quick review -->
      <div v-else-if="at('review')" key="review" class="absolute inset-0" dir="rtl">
        <div class="absolute top-8 inset-x-0 text-center">
          <div class="text-5xl font-black text-white">✏️ مراجعة سريعة</div>
          <p class="mt-2 text-xl font-bold text-slate-400">ما التقنية أو المفهوم المناسب لكل وصف؟</p>
        </div>
        <div class="absolute top-[155px] inset-x-0 flex flex-col items-center gap-4">
          <div v-for="(r, i) in review" :key="r.text" class="sl-in w-[1120px] h-[88px] rounded-3xl border-2 border-white/10 bg-slate-900/80 flex items-center gap-5 px-6"
               :style="{ '--d': `${0.3 + i * 0.3}s` }">
            <span class="w-11 h-11 rounded-full bg-slate-700 text-white text-xl font-black flex items-center justify-center shrink-0">{{ letters[i] }}</span>
            <p class="flex-1 text-[23px] font-bold text-slate-100 leading-snug">{{ r.text }}</p>
            <div class="relative w-[280px] h-[56px] shrink-0">
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
        </div>
        <div class="absolute top-[100px] inset-x-0 flex justify-center items-center gap-3">
          <template v-for="(t, i) in trio" :key="t.name">
            <div class="sl-in w-[300px] h-[118px] rounded-3xl border-2 flex flex-col items-center justify-center" :class="t.cls" :style="{ '--d': `${0.4 + i * 0.8}s` }" dir="rtl">
              <span class="text-[30px] font-black font-mono" :class="t.text" dir="ltr">{{ t.name }}</span>
              <span class="text-[19px] font-bold text-white">{{ t.role }}</span>
            </div>
            <span v-if="i < 2" class="sl-fade text-[34px] font-black text-slate-400" :style="{ '--d': `${0.8 + i * 0.8}s` }">+</span>
          </template>
        </div>
        <p class="sl-in absolute top-[232px] inset-x-0 text-center text-[19px] font-bold text-slate-300" style="--d: 2.6s">
          تستخدم كثير من الصفحات HTML للهيكل، ويمكن أن تضيف CSS وJavaScript بحسب الحاجة.
        </p>
        <div class="absolute top-[282px] inset-x-0 flex justify-center gap-4">
          <div v-for="(a, i) in modern" :key="a.title" class="sl-in w-[360px] h-[220px] rounded-3xl border-2 px-5 py-4" :class="a.cls"
               :style="{ '--d': `${3.4 + i * 1}s` }">
            <div class="text-[22px] font-black text-white">{{ a.icon }} {{ a.title }}</div>
            <div class="text-[17px] font-black mb-1" :class="a.text">← {{ a.makes }}</div>
            <p class="text-[18px] font-bold text-slate-100 leading-snug">{{ a.body }}</p>
          </div>
        </div>
      </div>

      <!-- Summary -->
      <div v-else-if="at('summary')" key="summary" class="absolute inset-0 flex flex-col items-center pt-[90px]" dir="rtl">
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
import L3Roles from '~/components/slides/unit03/lesson3/Roles.vue'
import L3Semantic from '~/components/slides/unit03/lesson3/Semantic.vue'
import L3Responsive from '~/components/slides/unit03/lesson3/Responsive.vue'
import L3Frameworks from '~/components/slides/unit03/lesson3/Frameworks.vue'
import L3Engineer from '~/components/slides/unit03/lesson3/Engineer.vue'

definePageMeta({ layout: false })
useHead({ title: 'سلايدر الدرس 3-3: أساسيات تقنية الواجهة الأمامية' })

/* ───────── Timeline ─────────
   Each frame is addressed by its id, so frames can be inserted without renumbering.
   Chapter components receive a local frame number counted from their first frame. */
const steps: SlideStep[] = [
  { id: 'cover', caption: '', dur: 4000 },
  { id: 'question', caption: 'سؤال الدرس: كيف تعمل HTML وCSS وJavaScript معًا لبناء صفحة ويب، وما الذي يجعل الواجهة الأمامية الحديثة ذات معنى وقابلة للتكيف وفعّالة؟', dur: 10000 },
  // ── HTML / CSS / JavaScript ──
  { id: 'roles', caption: 'HTML يحدد البنية مثل هيكل المبنى، وCSS يحدد المظهر مثل الديكور، وJavaScript يضيف السلوك مثل الكهرباء والسباكة.', dur: 11000 },
  { id: 'build-html', caption: 'HTML فقط: يحدد المحتوى والهيكل؛ العناوين والفقرات والقائمة والرابط، ويعرضها المتصفح بشكله الافتراضي البسيط.', dur: 9000 },
  { id: 'build-css', caption: 'HTML + CSS: يضيف CSS الألوان والتخطيط والخطوط؛ المحتوى نفسه لم يتغير، لكن مظهره أصبح منسقًا.', dur: 9000 },
  { id: 'build-js', caption: '+ JavaScript: البحث يصفّي القائمة أثناء الكتابة، وزر الإعجاب يعدّ الضغطات ويحدّث جزءًا فقط من الشاشة.', dur: 10000 },
  // ── Semantic HTML ──
  { id: 'sem-tags', caption: 'HTML الدلالي: استخدام عناصر توضح وظيفة أجزاء الصفحة، مثل header وnav وmain وfooter.', dur: 10000 },
  { id: 'sem-reader', caption: 'توقف وفكر: مع الصناديق العادية يسمع المستخدم «مجموعة» فقط، أما العناصر الدلالية فتعلن وظيفة كل جزء.', dur: 12000 },
  { id: 'sem-benefits', caption: 'فوائد HTML الدلالي: يساعد قارئ الشاشة على فهم الصفحة، وقد يساعد محركات البحث، لكنه لا يضمن ترتيبًا أعلى.', dur: 10000 },
  // ── Responsive design ──
  { id: 'responsive', caption: 'التصميم المتجاوب: يُضبط التخطيط تلقائيًا وفقًا لحجم الشاشة؛ ونهج الأولوية للجوال يراعي الشاشات الصغيرة منذ البداية.', dur: 11000 },
  // ── Frameworks ──
  { id: 'fw-def', caption: 'إطار العمل: بنية توفر مسبقًا وظائف ومكونات شائعة، مثل React وVue وNext.js، لتطوير أكثر كفاءة.', dur: 10000 },
  { id: 'fw-reuse', caption: 'نكتب المكوّن مرة واحدة ثم نعيد استخدامه مع بيانات مختلفة؛ فلا نكتب كود كل بطاقة من الصفر.', dur: 9000 },
  // ── Think like an engineer ──
  { id: 'eng-tech', caption: 'فكّر كمهندس: قائمة الفعاليات في HTML، وألوان النادي في CSS، وعدّاد التسجيل الحي في JavaScript.', dur: 11000 },
  { id: 'eng-decide', caption: 'نجعل الصفحة تصل إلى الجميع بالتصميم المتجاوب وHTML الدلالية، ونستخدم كل تقنية حسب دورها الصحيح.', dur: 11000 },
  // ── Wrap-up ──
  { id: 'review', caption: 'مراجعة سريعة: اختر التقنية أو المفهوم المناسب لكل وصف.', dur: 10500 },
  { id: 'answer', caption: 'إجابة السؤال الرئيسي: HTML للهيكل وCSS للمظهر وJavaScript للتفاعل؛ والدلالية والتصميم المتجاوب والأطر تجعل الواجهة ذات معنى وقابلة للتكيف وفعّالة.', dur: 12000 },
  { id: 'summary', caption: 'HTML يبني البنية، وCSS ينسق المظهر، وJavaScript يضيف السلوك؛ وتجعل الدلالية والتصميم المتجاوب والأطر الواجهة الحديثة أفضل.', dur: 10000 },
]

const chapters = [
  { name: 'البداية', id: 'cover' },
  { name: 'HTML/CSS/JS', id: 'roles' },
  { name: 'الدلالية', id: 'sem-tags' },
  { name: 'المتجاوب', id: 'responsive' },
  { name: 'أطر العمل', id: 'fw-def' },
  { name: 'فكّر كمهندس', id: 'eng-tech' },
  { name: 'الخلاصة', id: 'review' },
]

const S = Object.fromEntries(steps.map((s, i) => [s.id, i])) as Record<string, number>
const step = ref(0)
const at = (id: string) => step.value === S[id]
const from = (id: string) => step.value >= S[id]!
const inRange = (a: string, b: string) => step.value >= S[a]! && step.value <= S[b]!

const glow = computed(() => {
  if (from('answer')) return 'bg-emerald-500/25'
  if (inRange('roles', 'build-js')) return 'bg-orange-500/20'
  if (inRange('fw-def', 'fw-reuse')) return 'bg-violet-500/20'
  return 'bg-sky-500/20'
})

const topics = ['🧱 HTML و CSS و JavaScript', '🏷️ HTML الدلالية', '📱 التصميم المتجاوب', '🧰 أطر العمل']
const letters = ['أ', 'ب', 'ج', 'د']
const review = [
  { text: 'تحديد ألوان الصفحة وخطوطها وتخطيطها', ans: '🎨 CSS', cls: 'border-sky-400 bg-sky-600/30 text-sky-50' },
  { text: 'زر يعدّ الضغطات ويحدّث جزءًا من الشاشة', ans: '⚡ JavaScript', cls: 'border-yellow-400 bg-yellow-600/30 text-yellow-50' },
  { text: 'استخدام <nav> و<main> بدل صناديق <div> عادية', ans: '🏷️ HTML الدلالية', cls: 'border-orange-400 bg-orange-600/30 text-orange-50' },
  { text: 'تخطيط يتكيف تلقائيًا مع حجم الشاشة', ans: '📱 التصميم المتجاوب', cls: 'border-emerald-400 bg-emerald-600/30 text-emerald-50' },
]
const trio = [
  { name: 'HTML', role: 'لبناء الهيكل', cls: 'border-orange-400/70 bg-orange-950/40', text: 'text-orange-300' },
  { name: 'CSS', role: 'للمظهر', cls: 'border-sky-400/70 bg-sky-950/45', text: 'text-sky-300' },
  { name: 'JavaScript', role: 'للتفاعل', cls: 'border-yellow-400/70 bg-yellow-950/30', text: 'text-yellow-300' },
]
const modern = [
  { icon: '🏷️', title: 'HTML الدلالي', makes: 'ذات معنى', cls: 'border-orange-400/60 bg-orange-950/35', text: 'text-orange-300',
    body: 'عناصر توضح وظيفة أجزاء الصفحة، فتساعد التقنيات المساعدة ومحركات البحث على فهم بنيتها.' },
  { icon: '📱', title: 'التصميم المتجاوب', makes: 'قابلة للتكيف', cls: 'border-sky-400/60 bg-sky-950/40', text: 'text-sky-300',
    body: 'يجعل الصفحة تتكيف مع أحجام الشاشات المختلفة.' },
  { icon: '🧰', title: 'المكتبات والأطر', makes: 'فعّالة في البناء', cls: 'border-emerald-400/60 bg-emerald-950/40', text: 'text-emerald-300',
    body: 'تبني الواجهة من مكونات قابلة لإعادة الاستخدام: React مكتبة، وNext.js إطار مبني عليها.' },
]
const summary = [
  { icon: '🧱', cls: 'border-orange-400/60 bg-orange-950/35',
    text: '<span class="text-orange-300">HTML</span> يبني البنية، و<span class="text-sky-300">CSS</span> ينسق المظهر، و<span class="text-yellow-300">JavaScript</span> يضيف السلوك.' },
  { icon: '🏷️', cls: 'border-emerald-400/60 bg-emerald-950/40',
    text: 'وتجعل <span class="text-orange-300">HTML الدلالية</span> و<span class="text-sky-300">التصميم المتجاوب</span> و<span class="text-emerald-300">أطر العمل</span> الواجهة الأمامية الحديثة ذات معنى وقابلة للتكيف وفعّالة.' },
]
</script>

<style scoped>
.cover-icon { animation: sl-pop .5s cubic-bezier(.3,1.6,.5,1) .2s forwards, floaty 4s ease-in-out 1s infinite; }
@keyframes floaty { 0%, 100% { transform: translateY(0) } 50% { transform: translateY(-12px) } }
.ring { animation: ring 2.2s ease-out infinite; }
@keyframes ring { 0% { transform: scale(1); opacity: .8 } 100% { transform: scale(1.5); opacity: 0 } }
</style>
