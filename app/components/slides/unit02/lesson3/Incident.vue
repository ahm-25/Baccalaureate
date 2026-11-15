<template>
  <!-- Security incident. f = 0 definition on the CIA triad, 1 three typical incidents, 2 quick classification. -->
  <div class="absolute inset-0">
    <SlidesTitle icon="🚨" :title="titles[f]!.title" :sub="titles[f]!.sub" />

    <Transition name="sl-frame" mode="out-in">
      <!-- ───── f0: definition ───── -->
      <div v-if="f === 0" key="def" class="absolute inset-0">
        <svg class="absolute inset-0 pointer-events-none" width="1280" height="720">
          <polygon points="640,200 410,390 870,390" fill="rgba(56,189,248,.05)" stroke="rgba(148,163,184,.45)" stroke-width="3"
                   stroke-dasharray="10 8" class="tri" />
        </svg>
        <div v-for="(p, i) in pillars" :key="p.name" class="pillar sl-pop" :class="`hit-${i}`"
             :style="{ left: `${p.x - 125}px`, top: `${p.y - 48}px`, '--d': `${0.3 + i * 0.3}s` }" dir="rtl">
          <div class="flex items-center gap-2 text-[26px] font-black text-white"><span class="text-3xl">{{ p.icon }}</span>{{ p.name }}</div>
          <div class="text-[15px] font-bold text-slate-300 leading-tight mt-0.5">{{ p.hint }}</div>
        </div>
        <!-- the incident in the middle -->
        <div class="absolute left-[600px] top-[290px] w-[80px] h-[80px] sl-pop" style="--d: 1.6s">
          <span class="shock absolute inset-0 rounded-full border-4 border-rose-400"></span>
          <span class="shock absolute inset-0 rounded-full border-4 border-rose-400" style="animation-delay: 2.6s"></span>
          <div class="relative w-full h-full rounded-full bg-rose-600 border-4 border-rose-200 flex items-center justify-center text-4xl shadow-[0_0_40px_rgba(244,63,94,.8)]">🚨</div>
        </div>

        <div class="absolute top-[462px] inset-x-0 flex justify-center" dir="rtl">
          <div class="sl-in sl-card border-rose-400/60 px-8 py-4 text-[25px] font-bold text-white text-center max-w-[1120px] leading-relaxed" style="--d: 3.4s">
            <span class="text-rose-300 font-black">الحادث الأمني</span>: حدث
            <span class="sl-hl-amber">يؤثر</span> في سرية المعلومات أو سلامتها أو توافرها، أو
            <span class="sl-hl-amber">يهددها بجدية</span>، أو <span class="sl-hl-amber">يخالف سياسة أمنية</span>.
          </div>
        </div>
      </div>

      <!-- ───── f1: three typical incidents ───── -->
      <div v-else-if="f === 1" key="types" class="absolute top-[150px] inset-x-0 flex justify-center gap-6" dir="rtl">
        <div v-for="(t, i) in types" :key="t.name" class="sl-in w-[372px] h-[400px] rounded-3xl border-2 bg-slate-900/80 flex flex-col items-center px-6 pt-5"
             :class="t.border" :style="{ '--d': `${0.3 + i * 2.6}s` }">
          <span class="px-3 py-1 rounded-full text-base font-black mb-2" :class="t.chip">يمس {{ t.pillar }}</span>
          <div class="text-[28px] font-black text-white flex items-center gap-2"><span>{{ t.icon }}</span>{{ t.name }}</div>

          <!-- mini scene -->
          <div class="relative w-[320px] h-[160px] my-4 rounded-2xl bg-slate-950/60 border border-white/10 overflow-hidden" dir="ltr">
            <!-- leak: a document slips out of the building -->
            <template v-if="i === 0">
              <div class="absolute left-[24px] top-[30px] w-[130px] h-[100px] rounded-xl border-2 border-indigo-400/60 bg-indigo-950/60 flex items-end justify-center pb-1">
                <span class="text-sm font-black text-indigo-200" dir="rtl">المؤسسة</span>
              </div>
              <div class="leak absolute top-[44px] text-[34px]" :style="{ '--d': `${1 + i * 2.6}s` }">📄</div>
              <div class="absolute left-[238px] top-[40px] text-[52px]">🕵️</div>
            </template>
            <!-- tampering: a grade is changed -->
            <template v-else-if="i === 1">
              <div class="absolute inset-x-[30px] top-[26px] h-[108px] rounded-xl bg-white text-slate-900 flex flex-col items-center justify-center" dir="rtl">
                <span class="text-base font-black text-slate-500">درجة الطالب</span>
                <div class="relative h-[52px] w-[120px] flex items-center justify-center text-[44px] font-black">
                  <span class="grade-old" :style="{ '--d': `${1.4 + i * 2.6}s` }">95</span>
                  <span class="grade-new absolute text-rose-600" :style="{ '--d': `${1.4 + i * 2.6}s` }">45</span>
                </div>
              </div>
              <div class="pencil absolute top-[40px] text-[36px]" :style="{ '--d': `${0.9 + i * 2.6}s` }">✏️</div>
            </template>
            <!-- outage: the site stops answering -->
            <template v-else>
              <div class="absolute inset-x-[30px] top-[22px] h-[116px] rounded-xl border-2 border-slate-600 bg-slate-800 overflow-hidden" dir="rtl">
                <div class="h-[24px] bg-slate-700 flex items-center gap-1 px-2"><i class="dot bg-rose-400"></i><i class="dot bg-amber-400"></i><i class="dot bg-emerald-400"></i></div>
                <div class="relative h-[92px]">
                  <div class="site-up absolute inset-0 flex items-center justify-center text-[24px] font-black text-emerald-300" :style="{ '--d': `${1.6 + i * 2.6}s` }">🛒 المتجر يعمل</div>
                  <div class="site-down absolute inset-0 flex items-center justify-center text-[22px] font-black text-rose-300" :style="{ '--d': `${1.6 + i * 2.6}s` }">⛔ الخدمة غير متاحة</div>
                </div>
              </div>
              <div class="bolt-hit absolute right-[10px] top-[6px] text-[28px]" :style="{ '--d': `${1 + i * 2.6}s` }">⚡</div>
            </template>
          </div>

          <p class="text-[21px] font-bold text-slate-200 text-center leading-snug">{{ t.desc }}</p>
        </div>
      </div>

      <!-- ───── f2: is it an incident? ───── -->
      <div v-else key="check" class="absolute top-[150px] inset-x-0 flex flex-col items-center gap-4" dir="rtl">
        <div v-for="(e, i) in events" :key="e.text" class="sl-in w-[1120px] h-[86px] rounded-3xl border-2 border-white/10 bg-slate-900/80 flex items-center gap-5 px-6"
             :style="{ '--d': `${0.3 + i * 0.3}s` }">
          <span class="w-11 h-11 rounded-full bg-slate-700 text-white text-xl font-black flex items-center justify-center shrink-0">{{ i + 1 }}</span>
          <p class="flex-1 text-[22px] font-bold text-slate-100 leading-snug">{{ e.text }}</p>
          <div class="relative w-[250px] h-[54px] shrink-0">
            <span class="sl-out absolute inset-0 rounded-2xl border-2 border-dashed border-slate-500 text-2xl font-black text-slate-500 flex items-center justify-center"
                  :style="{ '--d': `${2.4 + i * 1.8}s` }">؟</span>
            <span class="sl-pop absolute inset-0 rounded-2xl border-2 text-[20px] font-black flex items-center justify-center gap-2"
                  :class="e.cls" :style="{ '--d': `${2.4 + i * 1.8}s` }">{{ e.ans }}</span>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import SlidesTitle from '~/components/slides/Title.vue'

defineProps<{ f: number }>()

const titles = [
  { title: 'ماهية الحادث الأمني', sub: 'ثلاثية أمن المعلومات' },
  { title: 'أمثلة نموذجية على الحوادث الأمنية', sub: 'كل حادث يمس جانبًا من الثلاثية' },
  { title: 'هل هذا حادث أمني؟ وماذا يمس؟', sub: 'فكّر قبل ظهور الإجابة' },
]
const pillars = [
  { icon: '🔒', name: 'السرية', hint: 'لا يطّلع عليها إلا المصرح لهم', x: 640, y: 196 },
  { icon: '✅', name: 'السلامة', hint: 'صحيحة ولم تُعدَّل دون تصريح', x: 870, y: 392 },
  { icon: '⏱️', name: 'التوافر', hint: 'متاحة عند الحاجة', x: 410, y: 392 },
]
const types = [
  { icon: '📤', name: 'تسرب المعلومات', pillar: 'السرية', desc: 'تسرب المعلومات الشخصية أو السرية إلى الخارج',
    border: 'border-rose-400/60', chip: 'bg-rose-500/20 text-rose-200' },
  { icon: '✏️', name: 'التلاعب بالبيانات', pillar: 'السلامة', desc: 'تعديل البيانات داخل نظام ما دون تصريح',
    border: 'border-amber-400/60', chip: 'bg-amber-500/20 text-amber-200' },
  { icon: '⛔', name: 'انقطاع الخدمة', pillar: 'التوافر', desc: 'تصبح الخدمة غير متاحة بسبب هجمات على الخادم، إلخ.',
    border: 'border-sky-400/60', chip: 'bg-sky-500/20 text-sky-200' },
]
const events = [
  { text: 'نُشرت قائمة بأسماء العملاء وأرقام هواتفهم على الإنترنت دون إذن.', ans: '🔒 يمس السرية', cls: 'border-rose-400 bg-rose-600/25 text-rose-100' },
  { text: 'غيّر شخص غير مصرح له درجات بعض الطلاب في نظام المدرسة.', ans: '✅ يمس السلامة', cls: 'border-amber-400 bg-amber-600/25 text-amber-100' },
  { text: 'أصبح موقع المتجر لا يفتح لساعات بسبب هجوم على الخادم.', ans: '⏱️ يمس التوافر', cls: 'border-sky-400 bg-sky-600/25 text-sky-100' },
  { text: 'تم تحديث البرنامج لإضافة ميزات جديدة.', ans: '✗ ليس حادثًا أمنيًا', cls: 'border-slate-400 bg-slate-600/40 text-slate-100' },
]
</script>

<style scoped>
.tri { stroke-dashoffset: 1200; animation: draw 1.4s ease .2s forwards; }
@keyframes draw { from { stroke-dashoffset: 1200 } to { stroke-dashoffset: 0 } }
.pillar {
  position: absolute; width: 250px; height: 96px; border-radius: 1.4rem; border: 2px solid rgba(56,189,248,.6);
  background: rgba(15,23,42,.92); display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center;
}
.hit-0 { animation: sl-pop .5s cubic-bezier(.3,1.6,.5,1) var(--d) forwards, hit .5s ease 2.1s forwards; }
.hit-1 { animation: sl-pop .5s cubic-bezier(.3,1.6,.5,1) var(--d) forwards, hit .5s ease 2.5s forwards; }
.hit-2 { animation: sl-pop .5s cubic-bezier(.3,1.6,.5,1) var(--d) forwards, hit .5s ease 2.9s forwards; }
@keyframes hit { to { border-color: #fb7185; box-shadow: 0 0 34px rgba(244,63,94,.6) } }
.shock { animation: shock 2s ease-out 1.8s infinite; opacity: 0; }
@keyframes shock { 0% { transform: scale(1); opacity: .9 } 100% { transform: scale(3.2); opacity: 0 } }

/* mini scenes */
.leak { left: 70px; animation: leak 1.4s cubic-bezier(.45,0,.25,1) var(--d) forwards; }
@keyframes leak { 0% { left: 70px } 100% { left: 200px; transform: rotate(14deg) } }
.pencil { left: 250px; opacity: 0; animation: pencil 1s ease var(--d) forwards; }
@keyframes pencil { 0% { opacity: 0; left: 260px } 30% { opacity: 1 } 100% { opacity: 1; left: 200px; transform: rotate(-12deg) } }
.grade-old { animation: oldOut .4s ease var(--d) forwards; }
@keyframes oldOut { to { opacity: 0; transform: scale(.6) } }
.grade-new { opacity: 0; animation: newIn .4s ease var(--d) forwards; }
@keyframes newIn { to { opacity: 1 } }
.dot { width: 8px; height: 8px; border-radius: 9999px; display: inline-block; }
.site-up { animation: oldOut .3s ease var(--d) forwards; }
.site-down { opacity: 0; animation: newIn .3s ease var(--d) forwards; }
.bolt-hit { opacity: 0; animation: bolt .3s steps(2) var(--d) 4 forwards; }
@keyframes bolt { 0% { opacity: 0 } 100% { opacity: 1 } }
</style>
