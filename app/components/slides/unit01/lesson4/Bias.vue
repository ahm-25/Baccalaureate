<template>
  <!-- Algorithmic bias. f = 0 definition and where it comes from, 1 hiring example,
       2 face recognition example, 3 the main causes. -->
  <div class="absolute inset-0">
    <SlidesTitle :icon="titles[f]!.icon" :title="titles[f]!.title" :sub="titles[f]!.sub" />

    <Transition name="sl-frame" mode="out-in">
      <!-- ───── f0: definition ───── -->
      <div v-if="f === 0" key="def" class="absolute inset-0">
        <!-- sources (right) -->
        <div class="absolute left-[880px] top-[150px] w-[340px] flex flex-col gap-2.5" dir="rtl">
          <div class="sl-in text-[18px] font-black text-slate-300 text-center" style="--d: .3s">قد ينشأ التحيز من:</div>
          <div v-for="(s, i) in sources" :key="s.t" class="sl-in h-[58px] rounded-2xl border-2 bg-slate-900/85 flex items-center gap-3 px-4 whitespace-nowrap"
               :class="s.cls" :style="{ '--d': `${0.6 + i * 0.5}s` }">
            <span class="text-3xl">{{ s.i }}</span><span class="text-[19px] font-black text-white">{{ s.t }}</span>
          </div>
        </div>
        <!-- flow -->
        <div v-for="i in 4" :key="i" class="absolute left-[760px] w-[105px] sl-fade" :style="{ top: `${213 + (i - 1) * 68}px`, '--d': `${0.9 + (i - 1) * 0.5}s` }"><div class="h-[4px] sl-wire"></div></div>
        <div class="absolute left-[555px] top-[225px] w-[200px] flex flex-col items-center sl-pop" style="--d: 2.8s">
          <div class="w-[150px] h-[150px] rounded-[36px] border-4 border-sky-400 bg-sky-950 flex items-center justify-center text-[76px] think">🤖</div>
          <span class="mt-2 text-[19px] font-black text-sky-200 whitespace-nowrap" dir="rtl">نظام الذكاء الاصطناعي</span>
        </div>
        <div class="absolute left-[415px] top-[310px] w-[130px] sl-fade" style="--d: 3.4s"><div class="h-[4px] sl-wire sl-wire-bad"></div></div>
        <div class="absolute left-[90px] top-[245px] w-[310px] sl-pop" style="--d: 3.8s" dir="rtl">
          <div class="rounded-3xl border-2 border-rose-400 bg-rose-950/70 px-5 py-5 text-center">
            <div class="text-4xl mb-1">⚖️</div>
            <div class="text-[23px] font-black text-rose-100 leading-snug">نتائج غير عادلة أو ضارة</div>
          </div>
        </div>
        <!-- definition -->
        <div class="absolute top-[498px] inset-x-0 flex justify-center">
          <div class="sl-in sl-card border-amber-400/70 px-8 py-3 max-w-[1150px] text-center text-[22px] font-bold text-white leading-relaxed" style="--d: 4.6s" dir="rtl">
            <span class="font-black text-amber-300">التحيز الخوارزمي:</span> انحراف أو نمط في مخرجات الذكاء الاصطناعي
            <span class="sl-hl-amber">قد يؤدي إلى نتائج غير عادلة أو ضارة</span>.
          </div>
        </div>
      </div>

      <!-- ───── f1 / f2: hiring and face recognition ───── -->
      <div v-else-if="f === 1 || f === 2" :key="`ex${f}`" class="absolute inset-0">
        <!-- scene (left) -->
        <div class="absolute left-[50px] top-[160px] w-[680px] h-[410px] rounded-3xl border-2 border-white/10 bg-slate-950/50 overflow-hidden" dir="rtl">
          <div class="absolute top-4 inset-x-0 text-center text-[18px] font-black text-slate-300 sl-in" style="--d: .3s">{{ ex.dataLabel }}</div>
          <div class="absolute top-[50px] inset-x-0 flex justify-center gap-2">
            <span v-for="(g, i) in ex.data" :key="i" class="sl-pop w-[46px] h-[46px] rounded-full flex items-center justify-center text-[22px] border-2"
                  :class="g === 'a' ? 'bg-sky-600/80 border-sky-300' : 'bg-amber-500/80 border-amber-200'" :style="{ '--d': `${0.5 + i * 0.12}s` }">{{ ex.glyph }}</span>
          </div>
          <div class="absolute top-[108px] inset-x-0 flex justify-center gap-8 text-[17px] font-black sl-in" style="--d: 2s">
            <span class="text-sky-300">● المجموعة أ: {{ ex.data.filter(g => g === 'a').length }}</span>
            <span class="text-amber-300">● المجموعة ب: {{ ex.data.filter(g => g === 'b').length }} فقط</span>
          </div>
          <div class="absolute top-[146px] left-[310px] w-[60px] flex flex-col items-center sl-in" style="--d: 2.5s">
            <span class="text-3xl text-slate-500 leading-none">↓</span>
          </div>
          <div class="absolute top-[180px] inset-x-0 flex justify-center sl-pop" style="--d: 2.8s">
            <span class="px-5 py-2 rounded-2xl border-2 border-sky-400 bg-sky-950 text-[20px] font-black text-sky-100">🧠 يتعلم النظام النمط من البيانات</span>
          </div>

          <!-- hiring: same qualifications, different outcome -->
          <template v-if="f === 1">
            <div class="absolute top-[248px] inset-x-0 text-center text-[17px] font-black text-slate-300 sl-in" style="--d: 3.6s">متقدمان جديدان بنفس المؤهلات تمامًا:</div>
            <div class="absolute top-[284px] inset-x-0 flex justify-center gap-10">
              <div v-for="(c, i) in applicants" :key="c.g" class="sl-in w-[250px] rounded-2xl border-2 bg-slate-900/90 px-4 py-2.5 flex items-center gap-3"
                   :class="c.g === 'a' ? 'border-sky-400/70' : 'border-amber-400/70'" :style="{ '--d': `${4 + i * 0.3}s` }">
                <span class="w-[46px] h-[46px] rounded-full flex items-center justify-center text-[22px] border-2 shrink-0"
                      :class="c.g === 'a' ? 'bg-sky-600/80 border-sky-300' : 'bg-amber-500/80 border-amber-200'">👤</span>
                <div class="flex-1">
                  <div class="text-[16px] font-bold text-slate-300 whitespace-nowrap">🎓 نفس المؤهلات</div>
                  <span class="sl-pop inline-block mt-1 px-3 py-0.5 rounded-lg text-[18px] font-black" :class="c.ok ? 'bg-emerald-500 text-emerald-950' : 'bg-rose-500 text-white'"
                        :style="{ '--d': `${5 + i * 0.6}s` }">{{ c.ok ? '✓ مقبول' : '✗ مرفوض' }}</span>
                </div>
              </div>
            </div>
          </template>

          <!-- face recognition: accuracy per group -->
          <template v-else>
            <div class="absolute top-[256px] right-[40px] w-[600px] flex flex-col gap-4">
              <div v-for="(b, i) in accuracy" :key="b.label" class="sl-in flex items-center gap-3" :style="{ '--d': `${3.6 + i * 0.5}s` }">
                <span class="w-[130px] text-[18px] font-black" :class="b.text">{{ b.label }}</span>
                <div class="flex-1 h-[34px] rounded-xl bg-slate-800 overflow-hidden">
                  <div class="bar h-full rounded-xl" :class="b.bar" :style="{ '--w': b.w, '--d': `${4 + i * 0.5}s` }"></div>
                </div>
                <span class="w-[150px] text-[17px] font-black" :class="b.text">{{ b.note }}</span>
              </div>
            </div>
            <div class="absolute top-[360px] inset-x-0 text-center text-[17px] font-black text-rose-200 sl-in" style="--d: 5.4s">⚠️ أخطاء أكثر في التعرف على أفراد المجموعة ب</div>
          </template>
        </div>

        <!-- explanation (right) -->
        <div class="absolute left-[765px] top-[160px] w-[465px] flex flex-col gap-3" dir="rtl">
          <div class="sl-in rounded-3xl border-2 border-amber-400/60 bg-slate-900/85 px-6 py-4" style="--d: .4s">
            <div class="text-[17px] font-black text-amber-300 mb-1">📘 مثال من الكتاب</div>
            <p class="text-[22px] font-black text-white leading-snug">{{ ex.example }}</p>
          </div>
          <div class="sl-in rounded-3xl border-2 border-sky-400/50 bg-slate-900/85 px-6 py-4" style="--d: 3.2s">
            <div class="text-[17px] font-black text-sky-300 mb-1">🔍 ماذا حدث؟</div>
            <p class="text-[19px] font-bold text-slate-100 leading-relaxed">{{ ex.why }}</p>
          </div>
          <div class="sl-in rounded-3xl border-2 border-rose-400/50 bg-rose-950/40 px-6 py-3" style="--d: 6s">
            <div class="text-[17px] font-black text-rose-300 mb-1">😟 من يتضرر؟</div>
            <p class="text-[18px] font-bold text-slate-100 leading-snug">{{ ex.harm }}</p>
          </div>
        </div>
      </div>

      <!-- ───── f3: causes ───── -->
      <div v-else key="causes" class="absolute inset-0" dir="rtl">
        <div class="absolute top-[160px] inset-x-0 flex justify-center gap-7">
          <div v-for="(c, ci) in causes" :key="c.title" class="sl-in w-[545px] rounded-3xl border-2 px-6 py-4" :class="c.cls" :style="{ '--d': `${0.3 + ci * 2.4}s` }">
            <div class="flex items-center gap-3 text-[26px] font-black mb-3" :class="c.titleCls"><span class="text-4xl">{{ c.icon }}</span>{{ c.title }}</div>
            <div v-for="(it, i) in c.items" :key="it" class="sl-in flex items-start gap-3 rounded-2xl bg-slate-900/70 border border-white/10 px-4 py-2.5 mb-2.5"
                 :style="{ '--d': `${0.9 + ci * 2.4 + i * 0.5}s` }">
              <span class="text-[20px] font-black" :class="c.titleCls">{{ i + 1 }}.</span>
              <span class="text-[20px] font-bold text-slate-100 leading-snug">{{ it }}</span>
            </div>
          </div>
        </div>
        <div class="absolute top-[488px] inset-x-0 flex justify-center">
          <div class="sl-in sl-card border-violet-400/60 px-7 py-3 max-w-[1120px] text-[19px] font-bold text-white text-center leading-relaxed" style="--d: 6.4s">
            <span class="font-black text-violet-300">💡 للتوضيح — المتغير البديل:</span> لو استبعدنا «الفئة» من بيانات التوظيف، لكن أبقينا متغيرًا مثل
            <span class="sl-hl-amber">«منطقة السكن»</span> المرتبط بها، فقد يعود التحيز بشكل غير مباشر.
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import SlidesTitle from '~/components/slides/Title.vue'

const props = defineProps<{ f: number }>()

const titles = [
  { icon: '⚖️', title: 'التحيز الخوارزمي', sub: 'ما هو؟ ومن أين يأتي؟' },
  { icon: '💼', title: 'مثال: نظام توظيف متحيز', sub: 'الذكاء الاصطناعي يكرر تحيز البيانات' },
  { icon: '📷', title: 'مثال: التعرف على الوجه', sub: 'دقة أقل مع فئات معينة' },
  { icon: '🔎', title: 'الأسباب الرئيسية للتحيز', sub: 'البيانات… وطريقة بناء النظام' },
]
const sources = [
  { i: '📊', t: 'البيانات', cls: 'border-rose-400/70' },
  { i: '⚙️', t: 'تصميم النظام', cls: 'border-violet-400/70' },
  { i: '🖱️', t: 'طريقة استخدامه', cls: 'border-sky-400/70' },
  { i: '👥', t: 'السياق البشري والاجتماعي', cls: 'border-amber-400/70' },
]
const examples = {
  1: {
    dataLabel: 'بيانات التدريب: موظفون تم قبولهم في السنوات السابقة',
    glyph: '👤',
    data: ['a', 'a', 'a', 'b', 'a', 'a', 'a', 'a', 'a', 'b', 'a', 'a'],
    example: 'نظام توظيف يفضّل فئة بصورة غير عادلة.',
    why: 'كانت قرارات القبول السابقة تفضّل المجموعة أ، فتعلّم النظام هذا النمط وكرّره في أحكامه على المتقدمين الجدد.',
    harm: 'متقدمون أكفاء من المجموعة ب يُرفضون دون سبب عادل.',
  },
  2: {
    dataLabel: 'صور الوجوه التي تدرب عليها النظام',
    glyph: '🙂',
    data: ['a', 'a', 'a', 'a', 'a', 'b', 'a', 'a', 'a', 'a', 'a', 'a'],
    example: 'نظام تعرف على الوجه تقل دقته مع فئات معينة.',
    why: 'صور المجموعة ب في بيانات التدريب قليلة؛ وكلما قلّ تمثيل البيانات للواقع زاد احتمال تحيز المخرجات.',
    harm: 'قد يُتعرف خطأً على شخص بريء، أو يُمنع شخص من الدخول أو الخدمة.',
  },
} as const
const ex = computed(() => examples[props.f as 1 | 2])
const applicants = [
  { g: 'a', ok: true },
  { g: 'b', ok: false },
]
const accuracy = [
  { label: 'المجموعة أ', w: '92%', bar: 'bg-emerald-500', text: 'text-emerald-300', note: '✓ دقة عالية' },
  { label: 'المجموعة ب', w: '55%', bar: 'bg-rose-500', text: 'text-rose-300', note: '✗ دقة أقل' },
]
const causes = [
  { icon: '📊', title: 'بيانات التدريب متحيزة', cls: 'border-rose-400/60 bg-rose-950/30', titleCls: 'text-rose-200', items: [
    'بيانات غير كافية عن سمات معينة.',
    'انعكاس نزعات تمييزية سابقة في البيانات.',
  ] },
  { icon: '⚙️', title: 'طريقة بناء النظام', cls: 'border-violet-400/60 bg-violet-950/30', titleCls: 'text-violet-200', items: [
    'اختيار غير مناسب للمتغيرات.',
    'متغير بديل يمثل بشكل غير مباشر سمة محمية.',
    'تصميم النموذج نفسه.',
  ] },
]
</script>

<style scoped>
.think { animation: sl-pop .5s cubic-bezier(.3,1.6,.5,1) var(--d) forwards, think 2s ease-in-out 3.4s infinite; }
@keyframes think { 50% { box-shadow: 0 0 40px rgba(56,189,248,.6) } }
.bar { width: 0; animation: grow 1.2s cubic-bezier(.2,.8,.2,1) var(--d) forwards; }
@keyframes grow { to { width: var(--w) } }
</style>
