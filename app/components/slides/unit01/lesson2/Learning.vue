<template>
  <!-- ML and DL. f = 0 ML definition + spam filter, 1 predicting student success,
       2 deep learning: a neural network recognising a cat. Training data on the right → model → prediction on the left. -->
  <div class="absolute inset-0">
    <SlidesTitle :icon="titles[f]!.icon" :title="titles[f]!.title" :sub="titles[f]!.sub" />

    <Transition name="sl-frame" mode="out-in">
      <!-- ───── f0, f1: training data → model → prediction ───── -->
      <div v-if="f <= 1" :key="`ml-${f}`" class="absolute inset-0">
        <div v-if="f === 0" class="absolute top-[138px] inset-x-0 flex justify-center" dir="rtl">
          <div class="sl-in rounded-2xl border-2 border-emerald-400/50 bg-slate-900/85 px-7 py-2.5 text-[21px] font-bold text-white text-center max-w-[1150px]" style="--d: .2s">
            <span class="text-emerald-300 font-black">التعلم الآلي (ML)</span>: فرع من الذكاء الاصطناعي تتعلم فيه النماذج أنماطًا من البيانات لإجراء تنبؤات أو تصنيفات،
            <span class="sl-hl-amber">بدلًا من برمجة كل قاعدة بشكل صريح</span>.
          </div>
        </div>

        <!-- training data (right) -->
        <div class="absolute left-[850px] top-[232px] w-[390px]" dir="rtl">
          <div class="sl-in text-[20px] font-black text-sky-200 mb-2" style="--d: .8s">📚 بيانات التدريب (Training Data)</div>
          <div v-for="(d, i) in data[f]" :key="d.text" class="sl-in train h-[62px] rounded-2xl border-2 border-white/10 bg-slate-900/85 flex items-center justify-between gap-2 px-4 mb-2.5"
               :style="{ '--d': `${1.1 + i * 0.4}s`, '--fly': `${2.8 + i * 0.3}s` }">
            <span class="text-[18px] font-bold text-slate-100 leading-tight">{{ d.text }}</span>
            <span class="px-2.5 py-1 rounded-lg text-[15px] font-black whitespace-nowrap" :class="d.good ? 'bg-emerald-500/25 text-emerald-200' : 'bg-rose-500/25 text-rose-200'">{{ d.label }}</span>
          </div>
        </div>
        <!-- arrows -->
        <div class="absolute left-[770px] top-[322px] text-5xl text-slate-500 sl-fade" style="--d: 2.6s">←</div>
        <div class="absolute left-[400px] top-[322px] text-5xl text-slate-500 sl-fade" style="--d: 5.4s">←</div>

        <!-- model (middle) -->
        <div class="absolute left-[505px] top-[250px] w-[240px] flex flex-col items-center" dir="rtl">
          <div class="model w-[150px] h-[150px] rounded-full border-4 border-indigo-400 bg-indigo-950/80 flex items-center justify-center text-[70px]">🧠</div>
          <span class="mt-2 text-[21px] font-black text-white">نموذج التعلم الآلي</span>
          <span class="sl-in text-[16px] font-bold text-indigo-200 text-center" style="--d: 4.4s">{{ f === 0 ? 'تعلّم الكلمات والأنماط المشبوهة' : 'تعلّم العلاقة بين المذاكرة والنجاح' }}</span>
        </div>

        <!-- new case (left) -->
        <div class="absolute left-[40px] top-[232px] w-[350px]" dir="rtl">
          <div class="sl-in text-[20px] font-black text-amber-200 mb-2" style="--d: 4.8s">🆕 {{ f === 0 ? 'رسالة جديدة' : 'طالب جديد' }} (Prediction)</div>
          <div class="sl-in rounded-2xl border-2 border-amber-400/60 bg-slate-900/90 px-4 py-3 text-[19px] font-bold text-white" style="--d: 5s">{{ newCase[f] }}</div>
          <div class="sl-pop mt-4 rounded-2xl border-2 px-4 py-3 text-[22px] font-black text-center" style="--d: 6.2s"
               :class="f === 0 ? 'border-rose-400 bg-rose-600/30 text-rose-100' : 'border-emerald-400 bg-emerald-600/30 text-emerald-100'">
            {{ f === 0 ? '🚨 تم التصنيف: Spam' : '✅ تم التصنيف: ناجح' }}
          </div>
        </div>

        <div class="absolute top-[530px] inset-x-0 flex justify-center">
          <span class="sl-in sl-badge !text-[19px] border-indigo-400/60 text-indigo-100 bg-indigo-600/15" style="--d: 7s" dir="rtl">
            {{ f === 0 ? 'لم يكتب أحد قاعدة لكلمة «عاجل»… النموذج استنتجها من الأمثلة' : 'النموذج لم يحفظ الأمثلة، بل تعلم النمط وطبّقه على حالة جديدة' }}
          </span>
        </div>
      </div>

      <!-- ───── f2: deep learning / ANN ───── -->
      <div v-else key="dl" class="absolute inset-0">
        <div class="absolute top-[138px] inset-x-0 flex justify-center" dir="rtl">
          <div class="sl-in rounded-2xl border-2 border-indigo-400/50 bg-slate-900/85 px-7 py-2.5 text-[20px] font-bold text-white text-center max-w-[1160px]" style="--d: .2s">
            <span class="text-indigo-300 font-black">التعلم العميق (DL)</span>: أسلوب من أساليب التعلم الآلي يعتمد على
            <span class="sl-hl-amber">شبكات عصبية متعددة الطبقات</span>، ويمكنه تعلم أنماط معقدة جدًا من البيانات.
          </div>
        </div>

        <!-- cat image (input) -->
        <div class="absolute left-[60px] top-[268px] w-[130px] h-[130px] rounded-2xl border-2 border-sky-400/60 bg-slate-900 flex items-center justify-center text-[80px] sl-pop" style="--d: .6s">🐱</div>
        <svg class="absolute inset-0 pointer-events-none" width="1280" height="720">
          <g v-for="(e, i) in edges" :key="i">
            <line :x1="e.x1" :y1="e.y1" :x2="e.x2" :y2="e.y2" stroke="rgba(148,163,184,.25)" stroke-width="2" />
            <line :x1="e.x1" :y1="e.y1" :x2="e.x2" :y2="e.y2" stroke="#a5b4fc" stroke-width="3" class="pulse"
                  :style="{ animationDelay: `${1.4 + e.layer * 0.9 + (i % 4) * 0.05}s` }" />
          </g>
        </svg>
        <div v-for="(n, i) in nodes" :key="`n${i}`" class="node sl-pop" :class="n.cls"
             :style="{ left: `${n.x - 17}px`, top: `${n.y - 17}px`, '--d': `${0.8 + n.layer * 0.2}s` }"></div>
        <!-- output -->
        <div class="absolute left-[1000px] top-[296px] sl-pop rounded-2xl border-2 border-emerald-400 bg-emerald-600/30 px-5 py-3 text-[26px] font-black text-white" style="--d: 4.6s" dir="rtl">
          هذه قطة 🐱
        </div>

        <!-- layer captions -->
        <div v-for="(c, i) in layerCaps" :key="c.title" class="absolute top-[468px] sl-in rounded-2xl border-2 bg-slate-900/90 px-3 py-2 text-center" :class="c.cls"
             :style="{ left: `${c.x}px`, width: `${c.w}px`, '--d': `${1.4 + i * 1.2}s` }" dir="rtl">
          <div class="text-[18px] font-black text-white">{{ c.title }}</div>
          <div class="text-[15px] font-bold text-slate-300 leading-snug">{{ c.text }}</div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import SlidesTitle from '~/components/slides/Title.vue'

defineProps<{ f: number }>()

const titles = [
  { icon: '📊', title: 'التعلم الآلي', sub: 'Machine Learning · مثال: فلتر الرسائل المزعجة' },
  { icon: '🎓', title: 'مثال عملي: التنبؤ بنجاح الطلاب', sub: 'نفس الفكرة مع بيانات مختلفة' },
  { icon: '🧠', title: 'التعلم العميق', sub: 'الشبكات العصبية الاصطناعية (ANN)' },
]
const data = [
  [
    { text: '«أنت الفائز بمليون دولار!»', label: 'Spam', good: false },
    { text: '«موعد الاجتماع غدًا»', label: 'ليست Spam', good: true },
    { text: '«اشتر الآن بخصم 90%»', label: 'Spam', good: false },
  ],
  [
    { text: 'ذاكر ساعتين، حضور 40%', label: 'راسب', good: false },
    { text: 'ذاكر 15 ساعة، حضور 95%', label: 'ناجح', good: true },
    { text: 'ذاكر 5 ساعات، حضور 60%', label: 'راسب', good: false },
  ],
]
const newCase = ['«عاجل: احصل على جائزتك فورًا»', 'ذاكر 12 ساعة، حضور 90%']

/* neural network: input (4) → hidden (5) → hidden (5) → output (2) */
const cols = [
  { x: 270, n: 4, cls: 'bg-sky-500 border-sky-200' },
  { x: 470, n: 5, cls: 'bg-indigo-500 border-indigo-200' },
  { x: 670, n: 5, cls: 'bg-indigo-500 border-indigo-200' },
  { x: 870, n: 2, cls: 'bg-emerald-500 border-emerald-200' },
]
const yOf = (n: number, k: number) => 333 + (k - (n - 1) / 2) * 52
const nodes = cols.flatMap((c, layer) => Array.from({ length: c.n }, (_, k) => ({ x: c.x, y: yOf(c.n, k), cls: c.cls, layer })))
const edges = cols.slice(0, -1).flatMap((c, layer) => {
  const nx = cols[layer + 1]!
  return Array.from({ length: c.n }, (_, a) => Array.from({ length: nx.n }, (_, b) => ({
    x1: c.x, y1: yOf(c.n, a), x2: nx.x, y2: yOf(nx.n, b), layer,
  }))).flat()
})
const layerCaps = [
  { title: '📥 طبقة الإدخال', text: 'تستقبل البيانات الخام: بكسلات صورة القطة', x: 175, w: 190, cls: 'border-sky-400/60' },
  { title: '🔍 الطبقات المخفية', text: 'هنا يحدث «التعلم العميق»: طبقة تتعرف على الحواف، وأخرى على شكل الأذن، وأخرى على الفرو', x: 395, w: 350, cls: 'border-indigo-400/60' },
  { title: '📤 طبقة الإخراج', text: 'تعطي النتيجة النهائية والتنبؤ', x: 775, w: 190, cls: 'border-emerald-400/60' },
]
</script>

<style scoped>
.train { animation: sl-in .6s cubic-bezier(.2,.8,.2,1.1) var(--d) forwards, feed .6s ease var(--fly) forwards; }
@keyframes feed { to { opacity: .45; transform: translateX(-14px) } }
.model { animation: think 1s ease-in-out 3s 2; }
@keyframes think { 50% { box-shadow: 0 0 50px rgba(129,140,248,.9); transform: scale(1.08) } }

.node { position: absolute; width: 34px; height: 34px; border-radius: 9999px; border-width: 3px; z-index: 2; box-shadow: 0 0 14px rgba(165,180,252,.5); }
.pulse { stroke-dasharray: 20 400; stroke-dashoffset: 20; opacity: 0; animation: pulse 1.1s ease-in-out infinite; }
@keyframes pulse { 0% { stroke-dashoffset: 20; opacity: 1 } 100% { stroke-dashoffset: -260; opacity: .6 } }
</style>
