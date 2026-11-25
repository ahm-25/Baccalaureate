<template>
  <!-- PDCA cycle. f = 0 definition + "a little better each loop" staircase, 1 book figure 4.4.1 (the loop),
       2 the book's table as a worked example (registration form 40% → 50%), 3 stop & think (Check) + point (2). -->
  <div class="absolute inset-0">
    <SlidesTitle :icon="head.icon" :title="head.title" :sub="head.sub" />

    <Transition name="sl-frame" mode="out-in">
      <!-- ───── f0: definition ───── -->
      <div v-if="f === 0" key="def" class="absolute inset-0">
        <!-- definition (right) -->
        <div class="sl-in absolute left-[660px] top-[150px] w-[560px] rounded-3xl border-2 border-sky-400/70 bg-sky-950/50 px-7 py-4" style="--d: .3s" dir="rtl">
          <div class="text-[30px] font-black text-white">دورة <span dir="ltr" class="inline-block font-mono text-sky-300">PDCA</span></div>
          <p class="mt-1 text-[21px] font-bold text-slate-100 leading-snug">طريقة تدفع التحسين قدمًا باستمرار من خلال تكرار الخطوات الأربع التالية:</p>
          <div class="mt-3 flex justify-center gap-3">
            <div v-for="(s, i) in letters" :key="s.k" class="sl-pop w-[112px] h-[72px] rounded-2xl border-2 flex flex-col items-center justify-center"
                 :class="s.cls" :style="{ '--d': `${1 + i * 0.35}s` }">
              <span class="text-[26px] leading-none font-black font-mono text-white">{{ s.k }}</span>
              <span class="mt-1 text-[17px] font-black text-white whitespace-nowrap">{{ s.ar }}</span>
            </div>
          </div>
        </div>
        <div class="sl-in absolute left-[660px] top-[398px] w-[560px] rounded-3xl border-2 border-white/15 bg-slate-900/80 px-6 py-3" style="--d: 2.8s" dir="rtl">
          <p class="text-[19px] font-bold text-slate-200">تُستخدم على نطاق واسع في مجالات مثل:</p>
          <div class="mt-2 flex gap-2">
            <span v-for="(u, i) in uses" :key="u" class="sl-pop sl-badge !text-[17px] border-white/20 bg-white/5 text-slate-100"
                  :style="{ '--d': `${3.2 + i * 0.3}s` }">{{ u }}</span>
          </div>
        </div>
        <div class="sl-in absolute left-[660px] top-[512px] w-[560px] rounded-2xl border-2 border-emerald-400/60 bg-emerald-950/45 px-6 py-2.5 text-[20px] font-bold text-slate-100" style="--d: 4.4s" dir="rtl">
          <span class="font-black text-emerald-300">التحسين المستمر</span> – التحسن قليلًا في كل مرة.
        </div>

        <!-- staircase of versions (left) -->
        <div class="sl-fade absolute left-[52px] top-[200px] w-[4px] h-[330px] bg-gradient-to-t from-slate-600 to-emerald-400" style="--d: .4s">
          <span class="ah-up"></span>
        </div>
        <div class="sl-fade absolute left-[16px] top-[540px] w-[80px] text-center text-[16px] font-black text-slate-400" style="--d: .4s" dir="rtl">الجودة</div>
        <div v-for="(v, i) in versions" :key="v.name" class="sl-in absolute w-[160px]" :style="{ left: `${v.x}px`, top: `${v.y}px`, '--d': `${0.6 + i * 1.3}s` }">
          <div class="h-[100px] rounded-xl border-2 bg-slate-900 overflow-hidden" :class="v.border">
            <div class="h-[18px] bg-slate-700 flex items-center gap-1 px-2">
              <span class="w-2 h-2 rounded-full bg-rose-400"></span><span class="w-2 h-2 rounded-full bg-amber-400"></span><span class="w-2 h-2 rounded-full bg-emerald-400"></span>
            </div>
            <div class="px-3 pt-2 flex flex-col gap-1.5" dir="rtl">
              <div class="text-[15px] leading-none">{{ v.stars }}</div>
              <div class="h-[8px] w-[110px] rounded bg-slate-600"></div>
              <div class="h-[8px] w-[80px] rounded bg-slate-700"></div>
              <div class="h-[16px] w-[64px] rounded" :class="v.btn"></div>
            </div>
          </div>
          <div class="mt-1 text-center text-[17px] font-black text-slate-200" dir="rtl">{{ v.name }}</div>
        </div>
        <div v-for="(r, i) in rings" :key="i" class="sl-pop absolute w-[64px] h-[64px]" :style="{ left: `${r.x}px`, top: `${r.y}px`, '--d': `${1.3 + i * 1.3}s` }">
          <div class="ring-spin absolute inset-0 rounded-full border-[3px] border-dashed border-sky-300"></div>
          <div class="absolute inset-0 flex items-center justify-center text-[13px] font-black font-mono text-sky-200">PDCA</div>
        </div>
        <div class="sl-pop absolute left-[330px] top-[160px] w-[280px] text-center" style="--d: 4.2s" dir="rtl">
          <span class="sl-badge !text-[17px] border-emerald-400/70 bg-emerald-600/25 text-emerald-100">أفضل قليلًا في كل حلقة ↗</span>
        </div>
      </div>

      <!-- ───── f1: figure 4.4.1 ───── -->
      <div v-else-if="f === 1" key="fig" class="absolute inset-0">
        <!-- runner dot (drawn under the boxes; visible on the arrows) -->
        <div class="runner absolute w-[22px] h-[22px] rounded-full bg-amber-300 shadow-[0_0_24px_rgba(252,211,77,.9)]"></div>

        <!-- arrows -->
        <div class="sl-fade absolute left-[548px] top-[228px] w-[180px] h-[4px] bg-slate-400" style="--d: 2.4s"><span class="ah ah-r"></span></div>
        <div class="sl-fade absolute left-[928px] top-[308px] w-[4px] h-[80px] bg-slate-400" style="--d: 2.4s"><span class="ah ah-d"></span></div>
        <div class="sl-fade absolute left-[552px] top-[468px] w-[180px] h-[4px] bg-slate-400" style="--d: 2.4s"><span class="ah ah-l"></span></div>
        <div class="sl-fade absolute left-[348px] top-[312px] w-[4px] h-[80px] bg-slate-400" style="--d: 2.4s"><span class="ah ah-u"></span></div>

        <div v-for="(b, i) in boxes" :key="b.k" class="sl-in absolute w-[380px] h-[140px]" :style="{ left: `${b.x}px`, top: `${b.y}px`, '--d': `${0.3 + i * 0.5}s` }">
          <div class="absolute inset-0 rounded-3xl border-2 bg-slate-900/95" :class="b.border"></div>
          <div class="hot absolute inset-0 rounded-3xl border-4" :class="b.hot" :style="{ animationDelay: `${3 + i * 2}s` }"></div>
          <div class="relative h-full flex flex-col items-center justify-center px-5" dir="rtl">
            <div class="flex items-center gap-3">
              <span class="w-[44px] h-[44px] rounded-full flex items-center justify-center text-[24px] font-black font-mono text-white" :class="b.dot">{{ b.k }}</span>
              <span class="text-[28px] font-black font-mono text-white" dir="ltr">{{ b.en }}</span>
              <span class="text-[26px] font-black text-white">({{ b.ar }})</span>
            </div>
            <p class="mt-2 text-[19px] font-bold text-slate-300 text-center leading-snug">{{ b.desc }}</p>
          </div>
        </div>

        <div class="sl-pop absolute left-[572px] top-[282px] w-[136px] h-[136px]" style="--d: 2.2s">
          <div class="ring-spin absolute inset-0 rounded-full border-[3px] border-dashed border-slate-400"></div>
          <div class="absolute inset-0 flex items-center justify-center text-center text-[19px] font-black text-slate-100 leading-tight" dir="rtl">التحسين<br>المستمر</div>
        </div>
      </div>

      <!-- ───── f2: the table as a worked example ───── -->
      <div v-else-if="f === 2" key="table" class="absolute inset-0">
        <!-- meter (left) -->
        <div class="sl-fade absolute left-[40px] top-[146px] w-[420px] text-center text-[20px] font-black text-slate-200" style="--d: .2s" dir="rtl">نسبة إكمال نموذج التسجيل</div>
        <div class="sl-in absolute left-[150px] top-[178px] w-[84px] h-[300px] rounded-2xl border-2 border-slate-500 bg-slate-800/80 overflow-hidden" style="--d: .3s">
          <div class="fill absolute bottom-0 inset-x-0 bg-gradient-to-t from-sky-600 to-sky-400" style="height: 120px"></div>
        </div>
        <!-- goal line + labels -->
        <div class="sl-fade absolute left-[138px] top-[326px] w-[108px] h-[4px] goal" style="--d: 1.4s"></div>
        <div class="sl-fade absolute left-[254px] top-[314px] h-[28px] flex items-center text-[19px] font-black text-amber-300 whitespace-nowrap" style="--d: 1.4s" dir="rtl">🎯 الهدف: <span dir="ltr" class="inline-block mr-1">50%</span></div>
        <div class="sl-fade absolute left-[254px] top-[344px] h-[28px] flex items-center text-[19px] font-black text-sky-300 whitespace-nowrap" style="--d: .9s" dir="rtl">📍 خط الأساس: <span dir="ltr" class="inline-block mr-1">40%</span></div>
        <!-- check: measure -->
        <div class="sl-pop absolute left-[150px] top-[262px] w-[84px] flex justify-center" style="--d: 4.6s">
          <span class="qpulse text-[40px] font-black text-white">؟</span>
        </div>
        <div class="sl-pop absolute left-[60px] top-[300px] w-[80px] flex flex-col items-center" style="--d: 4.6s" dir="rtl">
          <span class="text-[40px] leading-none">📏</span>
          <span class="mt-1 text-[15px] font-black text-violet-200 whitespace-nowrap">قِس وقارن</span>
        </div>
        <!-- act: two outcomes -->
        <div class="absolute left-[50px] top-[492px] w-[400px] flex flex-col gap-2" dir="rtl">
          <div class="sl-in h-[36px] rounded-xl border-2 border-emerald-400 bg-emerald-600/25 flex items-center justify-center text-[18px] font-black text-emerald-50 whitespace-nowrap" style="--d: 6.8s">✓ حقق الهدف ← اعتمده أو وسّعه</div>
          <div class="sl-in h-[36px] rounded-xl border-2 border-rose-400 bg-rose-600/25 flex items-center justify-center text-[18px] font-black text-rose-50 whitespace-nowrap" style="--d: 7.4s">✗ لم يحققه ← راجع السبب والخطة</div>
        </div>

        <!-- rows (right) -->
        <div class="absolute left-[480px] top-[150px] w-[740px] flex flex-col gap-2" dir="rtl">
          <div v-for="(r, i) in rows" :key="r.k" class="sl-in h-[94px] rounded-2xl border-2 bg-slate-900/85 flex items-center gap-4 px-4" :class="r.border"
               :style="{ '--d': `${0.6 + i * 2}s` }">
            <div class="w-[104px] h-[72px] shrink-0 rounded-xl flex flex-col items-center justify-center" :class="r.chip">
              <span class="text-[22px] font-black text-white leading-none">{{ r.ar }}</span>
              <span class="mt-1 text-[15px] font-black font-mono text-white/80" dir="ltr">({{ r.en }})</span>
            </div>
            <div class="flex-1">
              <div class="text-[16px] font-bold text-slate-400 leading-snug">{{ r.desc }}</div>
              <div class="text-[18px] font-black text-white leading-snug" v-html="r.ex"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- ───── f3: stop & think ───── -->
      <div v-else key="think" class="absolute inset-0" dir="rtl">
        <div class="absolute top-[150px] inset-x-0 flex justify-center">
          <div class="sl-in sl-card border-amber-400/70 px-10 py-4 text-[30px] font-black text-white text-center" style="--d: .2s">
            أي خطوة من خطوات <span dir="ltr" class="inline-block text-sky-300">PDCA</span> تخبرك ما إذا كان تغييرك قد <span class="text-amber-300">نجح فعلًا</span>؟
          </div>
        </div>
        <div class="absolute top-[262px] inset-x-0 flex justify-center gap-5">
          <div v-for="(s, i) in letters" :key="s.k" class="sl-in relative w-[210px] h-[78px]" :style="{ '--d': `${1 + i * 0.3}s` }">
            <div class="absolute inset-0 rounded-2xl border-2 border-slate-600 bg-slate-800/80 flex items-center justify-center gap-2 text-[24px] font-black text-slate-300">
              {{ s.ar }} <span class="text-[17px] font-mono" dir="ltr">({{ s.en }})</span>
            </div>
            <div v-if="s.k === 'C'" class="sl-pop absolute -inset-1 rounded-2xl border-4 border-violet-300 bg-violet-600 flex items-center justify-center gap-2 text-[25px] font-black text-white shadow-[0_0_40px_rgba(167,139,250,.6)]"
                 style="--d: 3s">
              ✓ {{ s.ar }} <span class="text-[17px] font-mono" dir="ltr">({{ s.en }})</span>
            </div>
          </div>
        </div>
        <div class="absolute top-[372px] inset-x-0 flex justify-center">
          <div class="sl-in w-[1080px] rounded-2xl border-2 border-violet-400/60 bg-violet-950/45 px-6 py-3 flex items-center gap-4" style="--d: 3.8s">
            <span class="text-[36px]">📏</span>
            <p class="text-[21px] font-bold text-white leading-snug">في خطوة <span class="text-violet-300 font-black">تحقّق</span> نقيس النتائج ونقارنها بخط الأساس والهدف، فنعرف هل حقق التغيير الهدف؛ ثم نبني على ذلك قرار <span class="text-sky-300 font-black">تصرّف</span>.</p>
          </div>
        </div>
        <div class="absolute top-[476px] inset-x-0 flex justify-center">
          <div class="sl-in w-[1080px] rounded-2xl border-2 border-emerald-400/60 bg-emerald-950/40 px-6 py-3 flex items-center gap-4" style="--d: 5.4s">
            <span class="text-[36px]">🔁</span>
            <p class="text-[20px] font-bold text-slate-100 leading-snug">يساعد التحسين التكراري على <span class="text-emerald-300 font-black">التعلم من النتائج</span> بدل افتراض أن النسخة الأولى ستكون مثالية، وقد يكون التغيير صغيرًا أو كبيرًا بحسب الهدف والدليل.</p>
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

const letters = [
  { k: 'P', ar: 'خطّط', en: 'Plan', cls: 'border-sky-300 bg-sky-600/60' },
  { k: 'D', ar: 'نفّذ', en: 'Do', cls: 'border-indigo-300 bg-indigo-600/60' },
  { k: 'C', ar: 'تحقّق', en: 'Check', cls: 'border-violet-300 bg-violet-600/60' },
  { k: 'A', ar: 'تصرّف', en: 'Act', cls: 'border-emerald-300 bg-emerald-600/60' },
]
const uses = ['📈 تحسين الأعمال', '🏅 إدارة الجودة', '🌐 المواقع الإلكترونية']

const versions = [
  { name: 'النسخة 1', x: 80, y: 420, stars: '⭐', border: 'border-slate-500', btn: 'bg-slate-500' },
  { name: 'النسخة 2', x: 260, y: 320, stars: '⭐⭐', border: 'border-sky-400', btn: 'bg-sky-500' },
  { name: 'النسخة 3', x: 440, y: 220, stars: '⭐⭐⭐', border: 'border-emerald-400', btn: 'bg-emerald-500' },
]
const rings = [{ x: 128, y: 344 }, { x: 308, y: 244 }]

// Book figure 4.4.1: Plan top-left, Do top-right, Check bottom-right, Act bottom-left (clockwise)
const boxes = [
  { k: 'P', en: 'Plan', ar: 'التخطيط', desc: 'تحديد الأهداف ووضع خطة للتحسين', x: 160, y: 160, border: 'border-sky-400/70', hot: 'border-sky-300 bg-sky-500/15', dot: 'bg-sky-600' },
  { k: 'D', en: 'Do', ar: 'التنفيذ', desc: 'تنفيذ العمل وفق الخطة', x: 740, y: 160, border: 'border-indigo-400/70', hot: 'border-indigo-300 bg-indigo-500/15', dot: 'bg-indigo-600' },
  { k: 'C', en: 'Check', ar: 'التحقق', desc: 'مقارنة النتائج بالخطة وتقييم مدى سير العمل بشكل جيد', x: 740, y: 400, border: 'border-violet-400/70', hot: 'border-violet-300 bg-violet-500/15', dot: 'bg-violet-600' },
  { k: 'A', en: 'Act', ar: 'التصرف', desc: 'عكس التقييم في الخطة التالية', x: 160, y: 400, border: 'border-emerald-400/70', hot: 'border-emerald-300 bg-emerald-500/15', dot: 'bg-emerald-600' },
]

const rows = [
  { k: 'P', ar: 'خطّط', en: 'Plan', border: 'border-sky-400/60', chip: 'bg-sky-600',
    desc: 'حدّد الأهداف وضع خطة للتحسين',
    ex: 'حدّد هدفًا واضحًا، مثل رفع نسبة إكمال نموذج التسجيل من <span dir="ltr" class="inline-block text-sky-300">40%</span> إلى <span dir="ltr" class="inline-block text-amber-300">50%</span>، وخطّط لتغيير مناسب' },
  { k: 'D', ar: 'نفّذ', en: 'Do', border: 'border-indigo-400/60', chip: 'bg-indigo-600',
    desc: 'نفّذ وفقًا للخطة', ex: 'غيّر تصميم الصفحة الرئيسية' },
  { k: 'C', ar: 'تحقّق', en: 'Check', border: 'border-violet-400/60', chip: 'bg-violet-600',
    desc: 'قِس النتائج وقيّم مستوى تحقيق الهدف', ex: 'قِس نسبة إكمال التسجيل بعد التغيير وقارنها بخط الأساس والهدف' },
  { k: 'A', ar: 'تصرّف', en: 'Act', border: 'border-emerald-400/60', chip: 'bg-emerald-600',
    desc: 'بناءً على النتائج، اعتمد ما نجح أو غيّر الخطة وحدد الخطوة التالية',
    ex: 'إذا حقق التغيير الهدف، يمكن اعتماده أو توسيعه؛ وإن لم يحققه، راجع السبب والخطة' },
]

const head = computed(() => {
  if (props.f === 0) return { icon: '🔄', title: 'دورة PDCA', sub: '1. ملحوظة مهمة: تنظيم تحسين قابل للقياس' }
  if (props.f === 1) return { icon: '🔁', title: 'حلقة التحسين المستمر', sub: 'الشكل 4.4.1 – دورة PDCA كحلقة تحسين مستمر' }
  if (props.f === 2) return { icon: '📝', title: 'PDCA في تحسين موقع إلكتروني', sub: 'الخطوة · الوصف · مثال في تحسين المواقع الإلكترونية' }
  return { icon: '💡', title: 'توقف وفكر', sub: '' }
})
</script>

<style scoped>
.ring-spin { animation: spin 6s linear infinite; }
@keyframes spin { to { transform: rotate(360deg) } }

.ah-up { position: absolute; left: -8px; top: -12px; width: 0; height: 0; border-left: 10px solid transparent; border-right: 10px solid transparent; border-bottom: 14px solid #34d399; }
.ah { position: absolute; width: 0; height: 0; }
.ah-r { right: -12px; top: -7px; border-top: 9px solid transparent; border-bottom: 9px solid transparent; border-left: 14px solid #94a3b8; }
.ah-l { left: -12px; top: -7px; border-top: 9px solid transparent; border-bottom: 9px solid transparent; border-right: 14px solid #94a3b8; }
.ah-d { bottom: -12px; left: -7px; border-left: 9px solid transparent; border-right: 9px solid transparent; border-top: 14px solid #94a3b8; }
.ah-u { top: -12px; left: -7px; border-left: 9px solid transparent; border-right: 9px solid transparent; border-bottom: 14px solid #94a3b8; }

/* runner travels P → D → C → A → P; each box glows when the runner reaches it */
.runner { left: 339px; top: 219px; opacity: 0; animation: run 8s linear 3s infinite; }
@keyframes run {
  0% { left: 339px; top: 219px; opacity: 1 }
  25% { left: 919px; top: 219px; opacity: 1 }
  50% { left: 919px; top: 459px; opacity: 1 }
  75% { left: 339px; top: 459px; opacity: 1 }
  100% { left: 339px; top: 219px; opacity: 1 }
}
.hot { opacity: 0; animation: hot 8s linear infinite; }
@keyframes hot { 0% { opacity: 1 } 14% { opacity: 0 } 100% { opacity: 0 } }

.fill { animation: fill 1s ease-out .5s both; }
@keyframes fill { from { height: 0 } }
.goal { background: repeating-linear-gradient(90deg, #fcd34d 0 10px, transparent 10px 16px); }
.qpulse { display: inline-block; animation: qp 1.2s ease-in-out infinite; }
@keyframes qp { 50% { transform: scale(1.2); color: #c4b5fd } }
</style>
