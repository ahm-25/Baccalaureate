<template>
  <!-- Six-phase incident response. f = 0 overview (figure 2.3.1), 1..6 a ransomware attack on the
       school network walked through one phase per frame, 7 overlap / going back, 8 stop & think. -->
  <div class="absolute inset-0">
    <SlidesTitle :icon="head.icon" :title="head.title" :sub="head.sub" />

    <!-- phase tracker (story frames) -->
    <div v-if="story" class="absolute top-[138px] inset-x-0 flex justify-center gap-2" dir="rtl">
      <div v-for="(p, i) in phases" :key="p.name" class="w-[196px] h-[44px] rounded-xl border-2 flex items-center justify-center gap-2 text-[17px] font-black transition-all duration-500"
           :class="i + 1 === f ? p.on : i + 1 < f ? 'border-emerald-500/40 bg-emerald-950/40 text-emerald-300' : 'border-slate-700 bg-slate-900/60 text-slate-500'">
        <span>{{ i + 1 < f ? '✓' : p.icon }}</span> {{ i + 1 }}. {{ p.short }}
      </div>
    </div>

    <Transition name="sl-frame" mode="out-in">
      <!-- ───── f0: overview ───── -->
      <div v-if="f === 0" key="overview" class="absolute inset-0" dir="rtl">
        <div class="absolute top-[165px] inset-x-0 flex justify-center items-center gap-1">
          <template v-for="(p, i) in phases" :key="p.name">
            <div class="sl-in w-[176px] h-[262px] rounded-3xl border-2 flex flex-col items-center pt-4 px-3 text-center" :class="p.on"
                 :style="{ '--d': `${0.4 + i * 0.8}s` }">
              <span class="w-9 h-9 rounded-full bg-white/15 text-white text-xl font-black flex items-center justify-center">{{ i + 1 }}</span>
              <span class="text-[46px] my-2 leading-none">{{ p.icon }}</span>
              <span class="text-[21px] font-black text-white leading-tight">{{ p.name }}</span>
              <span class="mt-2 text-[16px] font-bold text-slate-200 leading-snug">{{ p.hint }}</span>
            </div>
            <span v-if="i < 5" class="sl-fade text-3xl font-black text-slate-500" :style="{ '--d': `${0.8 + i * 0.8}s` }">←</span>
          </template>
        </div>
        <div class="absolute top-[455px] inset-x-0 flex flex-col items-center gap-3">
          <span class="sl-in sl-badge !text-[22px] border-indigo-400/70 text-indigo-100 bg-indigo-600/20" style="--d: 5.4s">
            📋 نموذج تعليمي مبسط يساعد على تنظيم الاستجابة · الشكل 2.3.1
          </span>
          <span class="sl-in text-[22px] font-black text-amber-200" style="--d: 6.4s">لنتابع هجوم فدية على شبكة مدرسة عبر المراحل الست…</span>
        </div>
      </div>

      <!-- ───── f1..f6: the ransomware story ───── -->
      <div v-else-if="story" :key="`story-${f}`" class="absolute inset-0">
        <!-- network -->
        <div class="absolute left-[85px] top-[362px] w-[670px] h-[12px] rounded-full bg-slate-600/70"></div>
        <div v-if="f === 2" class="spread-dot spread-loop" style="--d: 1.6s"></div>
        <div v-if="f === 3" class="spread-dot spread-stop"></div>

        <div v-for="(d, i) in devices" :key="d.name">
          <!-- link to the switch -->
          <div class="absolute w-[4px] bg-slate-500/80" :class="linkClass(i)"
               :style="{ left: `${d.x - 2}px`, top: d.top ? '314px' : '374px', height: d.top ? '48px' : '44px' }"></div>
          <span v-if="f === 3 && i < 2" class="absolute sl-pop text-3xl" :style="{ left: `${d.x - 16}px`, top: '320px', '--d': '2s' }">✂️</span>
          <!-- device, possibly changing state during the frame -->
          <div class="absolute w-[136px] h-[92px]" :style="{ left: `${d.x - 68}px`, top: d.top ? '222px' : '418px' }">
            <div class="dev" :class="stateOf(i).from">
              <span class="text-[34px] leading-none">{{ stateOf(i).from === 'hit' ? '💀' : d.icon }}</span>
              <span class="text-[15px] font-black leading-tight">{{ d.name }}</span>
            </div>
            <div v-if="stateOf(i).to" class="dev sl-fade" :class="stateOf(i).to" :style="{ '--d': `${stateOf(i).at}s` }">
              <span class="text-[34px] leading-none">{{ stateOf(i).to === 'hit' ? '💀' : d.icon }}</span>
              <span class="text-[15px] font-black leading-tight">{{ d.name }}</span>
            </div>
            <span v-if="isolatedTag(i)" class="absolute -bottom-3 left-1/2 -ml-[34px] w-[68px] text-center rounded-full bg-amber-400 text-amber-950 text-xs font-black py-0.5"
                  :class="isolatedTag(i)" :style="{ '--d': f === 3 ? '2.4s' : '1.6s' }">معزول</span>
            <span v-if="f === 4 && i < 2" class="absolute -top-4 -right-3 text-3xl sl-pop" style="--d: 1s">🧹</span>
          </div>
        </div>

        <!-- backup -->
        <div v-if="f >= 1" class="absolute left-[352px] top-[428px] w-[136px] flex flex-col items-center" :class="{ 'sl-pop': f === 1 }" style="--d: 2.4s">
          <div class="w-[64px] h-[64px] rounded-2xl border-2 border-emerald-400 bg-emerald-950/70 flex items-center justify-center text-[34px]" :class="{ 'restore-pulse': f === 5 }">💾</div>
          <span class="mt-1 text-[14px] font-black text-emerald-200 whitespace-nowrap" dir="rtl">نسخة احتياطية سليمة</span>
        </div>
        <span v-if="f === 2" class="scan absolute top-[236px] text-[40px]">🔍</span>
        <span v-if="f === 4" class="absolute left-[60px] top-[180px] sl-pop sl-badge !text-base !py-1 border-emerald-400 text-emerald-100 bg-emerald-700/50" style="--d: 2.2s" dir="rtl">🛡️ تم سد الثغرة (تحديث النظام)</span>

        <!-- right panel -->
        <div class="absolute left-[800px] top-[204px] w-[445px] flex flex-col gap-2" dir="rtl">
          <template v-if="f === 1">
            <div class="h-[142px] rounded-2xl border-2 border-slate-600 bg-slate-900/70 flex flex-col items-center justify-center gap-1">
              <span class="text-[40px]">🗓️</span>
              <span class="text-[21px] font-black text-slate-200">لم يقع أي حادث بعد</span>
              <span class="text-[16px] font-bold text-slate-400">أسبوع قبل بدء العام الدراسي</span>
            </div>
          </template>
          <template v-else>
            <div v-for="(s, i) in statusRows" :key="i" class="relative h-[42px]">
              <div class="status" :class="s.from.cls">{{ s.from.text }}</div>
              <div v-if="s.to" class="status sl-fade" :class="s.to.cls" :style="{ '--d': `${s.at}s` }">{{ s.to.text }}</div>
            </div>
          </template>
          <div class="mt-2 rounded-2xl border-2 border-emerald-400/60 bg-emerald-950/50 px-5 py-3 sl-in" style="--d: .5s">
            <div class="text-[17px] font-black text-emerald-300 mb-1">✓ الإجراء الصحيح</div>
            <ul v-if="f === 1" class="text-[19px] font-bold text-white leading-snug space-y-1">
              <li v-for="(c, i) in prepList" :key="c" class="sl-in" :style="{ '--d': `${0.9 + i * 0.5}s` }">☑️ {{ c }}</li>
            </ul>
            <p v-else class="text-[20px] font-bold text-white leading-snug">{{ story.action }}</p>
          </div>
          <div class="rounded-2xl border-2 border-rose-400/50 bg-rose-950/40 px-5 py-2.5 sl-in" style="--d: 3s">
            <div class="text-[15px] font-black text-rose-300">✗ لو أخطأنا…</div>
            <p class="text-[16px] font-bold text-rose-100 leading-snug">{{ story.wrong }}</p>
          </div>
        </div>

        <!-- f6: improvements -->
        <div v-if="f === 6" class="absolute left-[40px] top-[530px] w-[730px] flex justify-center gap-2" dir="rtl">
          <span v-for="(c, i) in improve" :key="c" class="sl-pop sl-badge !text-base !py-1 border-indigo-400 text-indigo-100 bg-indigo-700/40"
                :style="{ '--d': `${1.2 + i * 0.4}s` }">{{ c }}</span>
        </div>
      </div>

      <!-- ───── f7: overlap / going back ───── -->
      <div v-else-if="f === 7" key="loop" class="absolute inset-0">
        <div v-for="(p, i) in phases" :key="p.name"
             class="absolute top-[200px] w-[180px] h-[110px] rounded-2xl border-2 flex flex-col items-center justify-center sl-in" :class="p.on"
             :style="{ left: `${1125 - 194 * i - 90}px`, '--d': `${0.2 + i * 0.15}s` }" dir="rtl">
          <span class="text-[34px] leading-none">{{ p.icon }}</span>
          <span class="mt-1 text-[19px] font-black text-white">{{ i + 1 }}. {{ p.short }}</span>
        </div>
        <svg class="absolute inset-0 pointer-events-none" width="1280" height="720">
          <defs>
            <marker id="ah" markerWidth="12" markerHeight="12" refX="6" refY="6" orient="auto">
              <path d="M0,0 L12,6 L0,12 z" fill="#fbbf24" />
            </marker>
          </defs>
          <path d="M 349 318 C 380 430, 700 430, 737 318" fill="none" stroke="#fbbf24" stroke-width="5"
                stroke-dasharray="14 10" marker-end="url(#ah)" class="back-arrow" />
        </svg>
        <div class="absolute top-[408px] left-[300px] w-[490px] flex justify-center">
          <span class="sl-pop px-4 py-1.5 rounded-xl bg-amber-400 text-amber-950 text-[18px] font-black" style="--d: 2.4s" dir="rtl">🔁 عودة إلى الاحتواء / الإزالة</span>
        </div>
        <div class="absolute top-[470px] inset-x-0 flex flex-col items-center gap-2" dir="rtl">
          <div class="sl-in text-[23px] font-bold text-slate-100" style="--d: 3s">
            مثلًا: قد يكشف <span class="text-emerald-300 font-black">الاسترداد</span> عن بقايا للتهديد تستلزم العودة إلى <span class="text-amber-300 font-black">الاحتواء</span> أو <span class="text-rose-300 font-black">إزالة التهديد</span>.
          </div>
          <div class="sl-in sl-badge !text-[21px] border-indigo-400/70 text-indigo-100 bg-indigo-600/20" style="--d: 4.2s">
            الترتيب يساعد على فهم التسلسل العام، لكن الاستجابة الفعلية قد تتضمن تداخلًا أو تكرارًا
          </div>
        </div>
      </div>

      <!-- ───── f8: stop & think ───── -->
      <div v-else key="think" class="absolute inset-0 flex flex-col items-center pt-[148px] gap-5" dir="rtl">
        <div class="sl-in sl-card border-amber-400/70 px-10 py-4 text-[30px] font-black text-white text-center" style="--d: .2s">
          لماذا يجب أن يأتي <span class="text-amber-300">الاحتواء</span> قبل <span class="text-rose-300">الاستئصال</span>؟
        </div>
        <div class="flex gap-6">
          <div v-for="(c, ci) in thinkCols" :key="c.title" class="sl-in w-[520px] rounded-3xl border-2 px-6 py-4" :class="c.cls"
               :style="{ '--d': `${1 + ci * 0.6}s` }">
            <div class="text-[23px] font-black mb-3" :class="c.titleCls">{{ c.title }}</div>
            <div class="flex justify-center gap-3 mb-3" dir="ltr">
              <div v-for="n in 6" :key="n" class="relative w-[58px] h-[48px]">
                <div class="mini" :class="n <= 2 ? 'mini-bad' : 'mini-ok'">💻</div>
                <div v-if="ci === 0 && n > 2" class="mini mini-bad sl-fade" :style="{ '--d': `${1.8 + (n - 3) * 0.6}s` }">💀</div>
                <span v-if="ci === 1 && n <= 2" class="absolute -top-3 -right-2 text-xl sl-pop" style="--d: 2s">✂️</span>
              </div>
            </div>
            <p class="text-[19px] font-bold text-slate-100 leading-snug">{{ c.text }}</p>
          </div>
        </div>
        <div class="sl-in w-[1066px] rounded-2xl border-2 border-emerald-400/60 bg-emerald-950/50 px-6 py-3 text-[21px] font-bold text-white text-center leading-snug" style="--d: 4.6s">
          🧯 الأولوية الأولى هي <span class="text-emerald-300 font-black">إيقاف انتشار الضرر</span>؛ وبعد الاحتواء يصبح الوضع مستقرًا، فنستطيع الاستئصال بأمان.
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import SlidesTitle from '~/components/slides/Title.vue'

const props = defineProps<{ f: number }>()

const phases = [
  { icon: '📋', name: 'التحضير', short: 'التحضير', hint: 'قم بإعداد الإجراءات مسبقًا', on: 'border-slate-300 bg-slate-600/40 text-white' },
  { icon: '🔎', name: 'الاكتشاف', short: 'الاكتشاف', hint: 'ابحث عن الحوادث وتأكد منها', on: 'border-sky-400 bg-sky-600/30 text-white' },
  { icon: '🧯', name: 'الاحتواء', short: 'الاحتواء', hint: 'الحد من التأثير', on: 'border-amber-400 bg-amber-600/30 text-white' },
  { icon: '🧹', name: 'إزالة التهديد (الاستئصال)', short: 'الإزالة', hint: 'إزالة السبب الجذري', on: 'border-rose-400 bg-rose-600/30 text-white' },
  { icon: '♻️', name: 'الاستعادة', short: 'الاستعادة', hint: 'استعادة الأنظمة', on: 'border-emerald-400 bg-emerald-600/30 text-white' },
  { icon: '📚', name: 'الدروس المستفادة والتحسين', short: 'الدروس المستفادة', hint: 'منع تكرار الحدث', on: 'border-indigo-400 bg-indigo-600/30 text-white' },
]

// one frame per phase — the book's correct action and the consequence of a wrong one
const stories = [
  { action: '', wrong: 'إذا لم نستعد: عند وقوع الهجوم لن يعرف أحد من يتصل بمن أو ماذا يفعل، فيضيع وقت ثمين ويكبر الضرر.' },
  { action: 'نتأكد من أن ما يحدث فعلًا هجوم فدية، ونحدد الأجهزة المتأثرة.', wrong: 'دفع الفدية لا يضمن استرجاع الملفات، ولا يزيل البرمجية الخبيثة، ولا يوقف انتشارها.' },
  { action: 'نفصل الأجهزة المصابة عن الشبكة لنمنع الانتشار.', wrong: 'لو بدأنا بالبحث عن سبب الإصابة، تواصل البرمجية الانتشار وتشفّر ملفات أجهزة أخرى!' },
  { action: 'نحذف البرمجية الخبيثة ونسد الثغرة المستغلة (تحديث النظام).', wrong: 'لو أعدنا توصيل الأجهزة الآن، يعود الهجوم لأن البرمجية والثغرة ما زالتا موجودتين.' },
  { action: 'نستعيد الملفات من نسخة احتياطية سليمة ونعيد الخدمات إلى العمل بأمان.', wrong: 'قد تكون النسخة الاحتياطية مصابة هي الأخرى؛ لذا يجب الاستعادة من نسخة سليمة.' },
  { action: 'نحلل ما حدث، ونوثّق الدروس، ونحسّن الضوابط.', wrong: 'بدون تحليل ما حدث قد تتكرر نفس الإصابة من نفس الطريق.' },
]
const prepList = ['نكتب إجراءات الاستجابة', 'نحدد أدوار الفريق', 'نتأكد من وجود نسخ احتياطية سليمة']
const improve = ['👩‍🏫 تدريب الموظفين', '🔄 تحديثات منتظمة', '💾 نسخ احتياطية']

const story = computed(() => (props.f >= 1 && props.f <= 6 ? stories[props.f - 1] : null))
const head = computed(() => {
  if (props.f === 0) return { icon: '6️⃣', title: 'تدفق الاستجابة للحوادث', sub: 'ست مراحل عامة' }
  if (props.f === 7) return { icon: '🔁', title: 'تداخل وتكرار', sub: 'الاستجابة ليست خطًا مستقيمًا دائمًا' }
  if (props.f === 8) return { icon: '💡', title: 'توقف وفكر', sub: '' }
  const p = phases[props.f - 1]!
  return { icon: p.icon, title: `هجوم فدية على شبكة المدرسة`, sub: `المرحلة ${props.f}: ${p.name} — ${p.hint}` }
})

const devices = [
  { icon: '💻', name: 'معمل الحاسب', x: 150, top: true },
  { icon: '💻', name: 'معلم 1', x: 330, top: true },
  { icon: '💻', name: 'معلم 2', x: 510, top: true },
  { icon: '💻', name: 'الإدارة', x: 690, top: true },
  { icon: '🗄️', name: 'سجلات الطلاب', x: 220, top: false },
  { icon: '📁', name: 'خادم الملفات', x: 620, top: false },
]
type State = { from: string; to?: string; at?: number }
const stateOf = (i: number): State => {
  const infected = i < 2
  switch (props.f) {
    case 2: return infected ? { from: 'ok', to: 'hit', at: i === 0 ? 0.9 : 1.5 } : { from: 'ok' }
    case 3: return { from: infected ? 'hit' : 'ok' }
    case 4: return infected ? { from: 'hit', to: 'clean', at: 1.8 } : { from: 'ok' }
    case 5: return infected ? { from: 'clean', to: 'ok', at: 2.2 } : { from: 'ok' }
    default: return { from: 'ok' }
  }
}
const linkClass = (i: number) => {
  if (i >= 2) return ''
  if (props.f === 3) return 'link-cut'
  if (props.f === 4) return 'opacity-0'
  if (props.f === 5) return 'link-back'
  return ''
}
const isolatedTag = (i: number) => {
  if (i >= 2) return ''
  if (props.f === 3) return 'sl-pop'
  if (props.f === 4) return 'tag-static'
  if (props.f === 5) return 'sl-out'
  return ''
}

const ok = 'border-emerald-500/60 bg-emerald-950/50 text-emerald-200'
const bad = 'border-rose-500/70 bg-rose-950/60 text-rose-200'
const warn = 'border-amber-500/70 bg-amber-950/50 text-amber-200'
const statusRows = computed(() => {
  const f = props.f
  const spread = { text: '🔥 الانتشار مستمر', cls: bad }
  const stopped = { text: '🧯 الانتشار متوقف', cls: ok }
  const threat = { text: '🦠 التهديد موجود', cls: bad }
  const removed = { text: '🧹 التهديد أُزيل', cls: ok }
  const down = { text: '⛔ الخدمات متأثرة', cls: warn }
  const up = { text: '♻️ الخدمات تعمل', cls: ok }
  return [
    f === 2 ? { from: spread } : f === 3 ? { from: spread, to: stopped, at: 2.4 } : { from: stopped },
    f <= 3 ? { from: threat } : f === 4 ? { from: threat, to: removed, at: 2 } : { from: removed },
    f <= 4 ? { from: down } : f === 5 ? { from: down, to: up, at: 2.4 } : { from: up },
  ] as { from: { text: string; cls: string }; to?: { text: string; cls: string }; at?: number }[]
})

const thinkCols = [
  { title: '✗ نبحث عن السبب أولًا', titleCls: 'text-rose-300', cls: 'border-rose-400/60 bg-rose-950/40',
    text: 'أثناء البحث يواصل التهديد الانتشار، فتُصاب أجهزة وبيانات أكثر ويكبر الضرر.' },
  { title: '✓ نحتوي أولًا', titleCls: 'text-emerald-300', cls: 'border-emerald-400/60 bg-emerald-950/40',
    text: 'نفصل الجهاز المصاب عن الشبكة، فيتوقف الانتشار عند جهازين فقط.' },
]
</script>

<style scoped>
.dev {
  position: absolute; inset: 0; border-radius: 1rem; border-width: 2px; display: flex; flex-direction: column;
  align-items: center; justify-content: center; gap: .25rem; direction: rtl;
}
.dev.ok { border-color: rgba(52,211,153,.55); background: rgba(15,23,42,.92); color: #e2e8f0; }
.dev.hit { border-color: #fb7185; background: rgba(136,19,55,.85); color: #fecdd3; box-shadow: 0 0 26px rgba(244,63,94,.55); }
.dev.clean { border-color: #fbbf24; background: rgba(69,26,3,.85); color: #fef3c7; }

.link-cut { animation: sl-out .3s ease 2.2s forwards; }
.link-back { opacity: 0; animation: sl-fade .5s ease 1.6s forwards; }
.tag-static { opacity: 1; }

.spread-dot {
  position: absolute; top: 357px; width: 22px; height: 22px; border-radius: 9999px; background: #f43f5e;
  box-shadow: 0 0 18px #f43f5e; z-index: 3; opacity: 0;
}
.spread-loop { animation: loopDot 2s linear var(--d) infinite; }
@keyframes loopDot { 0% { left: 140px; opacity: 0 } 10% { opacity: 1 } 90% { opacity: 1 } 100% { left: 680px; opacity: 0 } }
.spread-stop { animation: stopDot 2.2s linear .2s forwards; }
@keyframes stopDot { 0% { left: 320px; opacity: 0 } 10% { opacity: 1 } 85% { left: 420px; opacity: 1 } 100% { left: 430px; opacity: 0 } }

.scan { left: 80px; animation: scan 2.4s ease-in-out .3s forwards; opacity: 0; }
@keyframes scan { 0% { left: 80px; opacity: 0 } 10% { opacity: 1 } 90% { opacity: 1 } 100% { left: 700px; opacity: 0 } }

.restore-pulse { animation: rp .9s ease-in-out .6s 3; }
@keyframes rp { 50% { box-shadow: 0 0 34px rgba(52,211,153,.9); transform: scale(1.12) } }

.status {
  position: absolute; inset: 0; border-radius: .9rem; border-width: 2px; display: flex; align-items: center;
  padding: 0 1rem; font-size: 1.15rem; font-weight: 900;
}

.back-arrow { stroke-dashoffset: 600; opacity: 0; animation: back 1.4s ease 1.2s forwards; }
@keyframes back { 0% { opacity: 1; stroke-dashoffset: 600 } 100% { opacity: 1; stroke-dashoffset: 0 } }

.mini {
  position: absolute; inset: 0; border-radius: .7rem; border-width: 2px; display: flex; align-items: center; justify-content: center; font-size: 1.5rem;
}
.mini-ok { border-color: rgba(52,211,153,.6); background: rgba(6,78,59,.4); }
.mini-bad { border-color: #fb7185; background: rgba(136,19,55,.8); }
</style>
