<template>
  <!-- The three layers (book figure 3.1.1). f = 0 the figure, 1 front end, 2 back end, 3 data layer.
       The user stands on the right and the data layer on the left, as in the book. The figure stays
       mounted for the whole chapter so only the highlight and the detail panel change between frames. -->
  <div class="absolute inset-0">
    <SlidesTitle :icon="head.icon" :title="head.title" :sub="head.sub" />

    <!-- user -->
    <div class="sl-in absolute left-[1070px] top-[165px] w-[130px] h-[150px]" style="--d: .2s">
      <div class="node border-slate-400 bg-slate-800/80" :class="{ 'opacity-40': f > 0 }">
        <User class="w-11 h-11 text-slate-200" />
        <span class="text-[21px] font-black text-white">المستخدم</span>
      </div>
    </div>

    <!-- layers -->
    <div v-for="(l, i) in layers" :key="l.name" class="sl-in absolute top-[165px] w-[210px] h-[150px]"
         :style="{ left: `${l.x}px`, '--d': `${0.6 + (2 - i) * 0.9}s` }">
      <div class="node" :class="nodeCls(i)">
        <component :is="l.icon" class="w-10 h-10" :class="l.ico" />
        <span class="text-[23px] font-black text-white">{{ l.name }}</span>
        <span class="text-[17px] font-bold text-slate-300">{{ l.short }}</span>
        <span class="text-[15px] font-bold text-slate-400">({{ l.where }})</span>
      </div>
    </div>

    <!-- arrows between neighbours: request going left (towards the data), answer coming back right -->
    <div v-for="(g, i) in gaps" :key="g.x" class="sl-fade absolute top-[165px] w-[120px] h-[150px]"
         :style="{ left: `${g.x}px`, '--d': `${3.4 + i * 0.4}s` }" dir="rtl">
      <div class="absolute inset-0 transition-opacity duration-500" :class="{ 'opacity-30': f > 0 && !g.of.includes(f) }">
        <div class="absolute top-[28px] inset-x-0 text-center text-[16px] font-black text-violet-200">{{ g.go }}</div>
        <div class="absolute top-[56px] left-3 right-3 h-[4px] flow-l"><span class="ah ah-l"></span></div>
        <div class="absolute top-[90px] left-3 right-3 h-[4px] flow-r"><span class="ah ah-r"></span></div>
        <div class="absolute top-[100px] inset-x-0 text-center text-[16px] font-black text-emerald-200">{{ g.back }}</div>
      </div>
    </div>

    <!-- pointer from the highlighted layer to its detail panel -->
    <div v-if="f > 0" class="pointer absolute top-[322px] text-[26px] leading-none" :class="layers[f - 1]!.ptr"
         :style="{ left: `${layers[f - 1]!.x + 92}px` }">▼</div>

    <Transition name="sl-frame" mode="out-in">
      <!-- ───── f0: the figure ───── -->
      <div v-if="f === 0" key="fig" class="absolute inset-0">
        <div v-for="(l, i) in layers" :key="l.name" class="absolute top-[335px] w-[210px] flex justify-center" :style="{ left: `${l.x}px` }">
          <span class="sl-pop sl-badge !text-[19px]" :class="l.badge" :style="{ '--d': `${5 + (2 - i) * 0.5}s` }">{{ l.verb }}</span>
        </div>
        <div class="absolute top-[420px] inset-x-0 flex flex-col items-center gap-3" dir="rtl">
          <div class="sl-in sl-card border-white/15 w-[1000px] px-8 py-4 text-center text-[23px] font-bold text-slate-100 leading-snug" style="--d: 6.8s">
            في هذا النموذج التعليمي نقسم تطبيق الويب إلى <span class="text-amber-300 font-black">ثلاثة أجزاء رئيسة</span> —
            وقد تختلف البنية الفعلية من تطبيق إلى آخر.
          </div>
        </div>
      </div>

      <!-- ───── f1..f3: one layer in detail ───── -->
      <div v-else :key="`layer-${f}`" class="absolute inset-0">
        <div class="absolute top-[352px] inset-x-0 flex justify-center gap-4" dir="rtl">
          <div class="sl-in w-[470px] h-[200px] rounded-3xl border-2 px-6 py-4" :class="cur.panel" style="--d: .3s">
            <div class="text-[18px] font-black mb-2" :class="cur.label">📌 الدور</div>
            <p class="text-[22px] font-bold text-white leading-snug">{{ cur.role }}</p>
          </div>
          <div class="sl-in w-[340px] h-[200px] rounded-3xl border-2 border-white/15 bg-slate-900/80 px-6 py-4" style="--d: 1.6s">
            <div class="text-[18px] font-black text-slate-300 mb-2">🧩 أمثلة</div>
            <ul class="space-y-1.5">
              <li v-for="(e, i) in cur.examples" :key="e" class="sl-in text-[20px] font-bold text-slate-100" :style="{ '--d': `${2 + i * 0.4}s` }">• {{ e }}</li>
            </ul>
          </div>
          <div class="sl-in w-[270px] h-[200px] rounded-3xl border-2 border-dashed px-6 py-4 flex flex-col" :class="cur.term" style="--d: 3.6s">
            <div class="text-[18px] font-black text-slate-300 mb-2">📖 المصطلح</div>
            <div class="text-[22px] font-black text-white">{{ cur.name }}</div>
            <p class="mt-1 text-[19px] font-bold text-slate-200 leading-snug">{{ cur.def }}</p>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { User, Monitor, Server, Database } from 'lucide-vue-next'
import SlidesTitle from '~/components/slides/Title.vue'

const props = defineProps<{ f: number }>()

// index 0 = front end (next to the user, on the right) … 2 = data layer (far left)
const layers = [
  {
    name: 'الواجهة الأمامية', short: 'العرض والتشغيل', where: 'المتصفح', verb: 'تعرض وتجمع', x: 740, icon: Monitor, ico: 'text-violet-300',
    on: 'border-violet-400 bg-violet-950/70', ring: 'ring-violet-400/40', badge: 'border-violet-400/70 bg-violet-600/25 text-violet-100',
    ptr: 'text-violet-300', panel: 'border-violet-400/70 bg-violet-950/50', label: 'text-violet-300', term: 'border-violet-400/60 bg-violet-950/30',
    role: 'الجزء الذي يراه المستخدم ويتعامل معه في المتصفح؛ يعرض المحتوى ويستقبل ما يكتبه المستخدم أو يختاره.',
    examples: ['شاشة البحث', 'صفحات عرض المنتجات', 'نماذج الإدخال'],
    def: 'الشاشة التي يراها المستخدمون ويتفاعلون معها.',
  },
  {
    name: 'الواجهة الخلفية', short: 'المعالجة والتحكم', where: 'الخادم', verb: 'تقرر وتعالج', x: 410, icon: Server, ico: 'text-amber-300',
    on: 'border-amber-400 bg-amber-950/60', ring: 'ring-amber-400/40', badge: 'border-amber-400/70 bg-amber-600/25 text-amber-100',
    ptr: 'text-amber-300', panel: 'border-amber-400/70 bg-amber-950/40', label: 'text-amber-300', term: 'border-amber-400/60 bg-amber-950/25',
    role: 'الجزء الذي يعمل على الخادم، ويعالج الطلبات ويطبق قواعد التطبيق.',
    examples: ['البحث عن منتجات تطابق معايير البحث', 'التحقق من تسجيل الدخول'],
    def: 'المعالجة الخفية من جانب الخادم.',
  },
  {
    name: 'قاعدة البيانات', short: 'التخزين', where: 'طبقة البيانات', verb: 'تخزن وتسترجع', x: 80, icon: Database, ico: 'text-sky-300',
    on: 'border-sky-400 bg-sky-950/70', ring: 'ring-sky-400/40', badge: 'border-sky-400/70 bg-sky-600/25 text-sky-100',
    ptr: 'text-sky-300', panel: 'border-sky-400/70 bg-sky-950/50', label: 'text-sky-300', term: 'border-sky-400/60 bg-sky-950/30',
    role: 'طبقة تحفظ البيانات وتوفرها عند الحاجة؛ وقد تشمل قواعد بيانات أو تخزين ملفات أو ذاكرة مخبأة أو خدمات بيانات خارجية.',
    examples: ['معلومات المنتجات', 'معلومات المستخدمين', 'سجل الطلبات'],
    def: 'حيث تُخزَّن البيانات وتُدار.',
  },
]

// gaps from the user towards the data layer; `of` = the detail frames (f) that touch this pair
const gaps = [
  { x: 950, go: 'التشغيل', back: 'العرض', of: [1] },
  { x: 620, go: 'الطلب', back: 'الاستجابة', of: [1, 2] },
  { x: 290, go: 'الاستعلام', back: 'البيانات', of: [2, 3] },
]

const nodeCls = (i: number) => {
  const l = layers[i]!
  if (props.f === 0) return l.on
  if (props.f === i + 1) return [l.on, 'ring-4 scale-[1.06]', l.ring]
  return 'border-slate-700 bg-slate-900/60 opacity-40'
}

const cur = computed(() => layers[Math.max(0, props.f - 1)]!)
const head = computed(() => {
  if (props.f === 0) return { icon: '🧱', title: 'الطبقات الثلاث لتطبيق الويب', sub: 'شكل 3.1.1 – نموذج تعليمي مبسط لطبقات تطبيق ويب' }
  const l = cur.value
  return { icon: ['🖥️', '⚙️', '🗄️'][props.f - 1]!, title: l.name, sub: `${l.short} · ${l.where}` }
})
</script>

<style scoped>
.node {
  position: absolute; inset: 0; border-radius: 1.5rem; border-width: 2px; display: flex; flex-direction: column;
  align-items: center; justify-content: center; gap: .2rem; text-align: center; direction: rtl;
  transition: all .5s ease;
}
.flow-l { background: repeating-linear-gradient(90deg, #c4b5fd 0 10px, transparent 10px 16px); animation: flowL .8s linear infinite; }
.flow-r { background: repeating-linear-gradient(90deg, #6ee7b7 0 10px, transparent 10px 16px); animation: flowR .8s linear infinite; }
@keyframes flowL { to { background-position: -16px 0 } }
@keyframes flowR { to { background-position: 16px 0 } }
.ah { position: absolute; top: -6px; width: 0; height: 0; border-top: 8px solid transparent; border-bottom: 8px solid transparent; }
.ah-l { left: -10px; border-right: 12px solid #c4b5fd; }
.ah-r { right: -10px; border-left: 12px solid #6ee7b7; }
.pointer { transition: left .5s ease; animation: bob 1.2s ease-in-out infinite; }
@keyframes bob { 50% { transform: translateY(5px) } }
</style>
