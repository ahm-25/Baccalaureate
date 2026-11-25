<template>
  <!-- Prominent emerging technologies. f = 0 self-driving + edge computing (deciding on the spot, not in the cloud),
       1 stop & think: why process on the vehicle?, 2 AR vs VR, 3 quantum computing: bit vs qubit. -->
  <div class="absolute inset-0">
    <SlidesTitle :icon="head.icon" :title="head.title" :sub="head.sub" />

    <Transition name="sl-frame" mode="out-in">
      <!-- ───── f0: self-driving + edge ───── -->
      <div v-if="f === 0" key="car" class="absolute inset-0">
        <div class="absolute top-[148px] inset-x-0 flex justify-center">
          <div class="sl-in sl-card border-sky-400/60 w-[1120px] px-7 py-3 text-[20px] font-bold text-white leading-snug" style="--d: .3s" dir="rtl">
            <span class="sl-hl-amber font-black">القيادة الذاتية</span>: تقنية تستخدم الذكاء الاصطناعي للمساعدة على قيادة المركبة؛ تستخدم المركبة
            كاميرات ومستشعرات لإدراك محيطها، ثم يعالج النظام البيانات لاتخاذ قرارات القيادة والتحكم فيها.
          </div>
        </div>
        <!-- road scene -->
        <div class="sl-in absolute left-[60px] top-[262px] w-[1160px] h-[230px] rounded-3xl border-2 border-white/10 bg-slate-900/70 overflow-hidden" style="--d: .8s">
          <div class="absolute bottom-0 inset-x-0 h-[70px] bg-slate-700/80"></div>
          <div class="absolute bottom-[32px] inset-x-0 h-[4px] road"></div>
          <!-- pedestrian (left) and the sensing cone -->
          <span class="absolute left-[150px] bottom-[60px] text-[64px] leading-none">🚶</span>
          <div class="sense absolute left-[230px] bottom-[62px] w-[300px] h-[90px]"></div>
          <!-- the car drives in from the right and brakes -->
          <div class="car absolute bottom-[40px] w-[260px] flex flex-col items-center">
            <span class="sl-pop mb-1 px-3 py-1 rounded-lg bg-amber-400 text-amber-950 text-[15px] font-black whitespace-nowrap" style="--d: 2.6s" dir="rtl">🔲 الحوسبة الطرفية: معالجة فورية على متن المركبة</span>
            <span class="text-[96px] leading-none -scale-x-100 inline-block">🚗</span>
          </div>
          <span class="sl-pop absolute left-[150px] top-[18px] px-3 py-1 rounded-lg bg-rose-500 text-white text-[16px] font-black" style="--d: 3.4s" dir="rtl">🛑 توقف!</span>
          <!-- the cloud is not waited for -->
          <div class="sl-in absolute left-[930px] top-[14px] flex flex-col items-center" style="--d: 1.6s">
            <span class="relative text-[58px] leading-none">☁️<span class="sl-pop absolute inset-0 flex items-center justify-center" style="--d: 3s"><span class="block w-[78px] h-[6px] rounded-full bg-rose-500 -rotate-45"></span></span></span>
            <span class="text-[15px] font-black text-slate-300" dir="rtl">لا تُرسَل إلى السحابة</span>
          </div>
        </div>
        <div class="absolute top-[506px] inset-x-0 flex justify-center">
          <span class="sl-in sl-badge !text-[19px] border-amber-400/60 bg-amber-600/15 text-amber-100" style="--d: 4s" dir="rtl">
            📖 الحوسبة الطرفية: معالجة البيانات على الجهاز نفسه، فورًا، بدلًا من إرسالها إلى السحابة
          </span>
        </div>
      </div>

      <!-- ───── f1: why on the vehicle? ───── -->
      <div v-else-if="f === 1" key="why" class="absolute inset-0" dir="rtl">
        <div class="absolute top-[150px] inset-x-0 flex justify-center">
          <div class="sl-in sl-card border-amber-400/70 px-9 py-3.5 text-[25px] font-black text-white text-center" style="--d: .2s">
            لماذا من الضروري معالجة البيانات <span class="text-amber-300">فورًا على المركبة</span> بدلًا من إرسالها إلى السحابة؟
          </div>
        </div>
        <div class="absolute top-[238px] inset-x-0 flex flex-col items-center gap-3">
          <div v-for="(r, i) in race" :key="r.title" class="sl-in w-[1100px] rounded-3xl border-2 px-6 py-3" :class="r.cls" :style="{ '--d': `${1 + i * 0.6}s` }">
            <div class="flex items-center justify-between mb-2">
              <span class="text-[22px] font-black text-white">{{ r.title }}</span>
              <span class="sl-pop text-[20px] font-black" :class="r.verdictCls" :style="{ '--d': `${r.end + 0.2}s` }">{{ r.verdict }}</span>
            </div>
            <div class="flex gap-1.5 h-[42px]">
              <div v-for="(s, si) in r.steps" :key="s.t" class="seg rounded-xl flex items-center justify-center text-[16px] font-black text-white whitespace-nowrap"
                   :class="s.cls" :style="{ width: `${s.w}px`, '--d': `${r.start + si * r.gap}s` }">{{ s.t }}</div>
            </div>
          </div>
        </div>
        <div class="absolute top-[480px] inset-x-0 flex justify-center">
          <div class="sl-in w-[1100px] rounded-2xl border-2 border-emerald-400/60 bg-emerald-950/45 px-6 py-2.5 text-[20px] font-bold text-white text-center leading-snug" style="--d: 5.6s">
            ✅ لأن <span class="text-amber-300 font-black">التأخير</span> في معالجة بيانات القيادة قد يؤثر في <span class="text-rose-300 font-black">السلامة</span>؛
            لذا تُعالَج بعض البيانات محليًا بالحوسبة الطرفية لتقليل زمن الاستجابة.
          </div>
        </div>
      </div>

      <!-- ───── f2: AR vs VR ───── -->
      <div v-else-if="f === 2" key="xr" class="absolute top-[150px] inset-x-0 flex justify-center gap-6" dir="rtl">
        <div v-for="(x, i) in xr" :key="x.name" class="sl-in w-[540px] h-[410px] rounded-3xl border-2 px-6 py-5 flex flex-col" :class="x.cls"
             :style="{ '--d': `${0.3 + i * 2.2}s` }">
          <div class="flex items-center justify-between">
            <span class="text-[26px] font-black text-white">{{ x.name }}</span>
            <span class="font-mono text-[18px] font-black" :class="x.text" dir="ltr">{{ x.en }}</span>
          </div>
          <!-- picture -->
          <div class="mt-3 h-[190px] rounded-2xl overflow-hidden relative" :class="x.scene">
            <template v-if="i === 0">
              <span class="absolute left-[40px] bottom-[16px] text-[80px] leading-none">🏛️</span>
              <span class="absolute left-[180px] bottom-[20px] text-[60px] leading-none">🌴</span>
              <div class="absolute right-[60px] top-[22px] w-[150px] h-[150px] rounded-2xl border-4 border-slate-200 bg-slate-900/30 flex items-center justify-center">
                <span class="sl-pop px-3 py-1 rounded-lg bg-sky-500 text-white text-[15px] font-black" :style="{ '--d': `${1.2}s` }" dir="rtl">📍 معلومة رقمية</span>
              </div>
            </template>
            <template v-else>
              <span class="absolute left-1/2 -ml-[40px] bottom-[16px] text-[80px] leading-none">🥽</span>
              <span v-for="(g, gi) in ['🔷', '🔺', '🟠', '⭐']" :key="g" class="sl-pop absolute text-[34px]"
                    :style="{ left: `${[60, 380, 120, 320][gi]}px`, top: `${[30, 40, 110, 120][gi]}px`, '--d': `${3.2 + gi * 0.3}s` }">{{ g }}</span>
            </template>
          </div>
          <p class="mt-4 text-[21px] font-bold text-white leading-snug">{{ x.def }}</p>
          <span class="mt-auto sl-badge self-start !text-[17px]" :class="x.badge">{{ x.tag }}</span>
        </div>
      </div>

      <!-- ───── f3: quantum ───── -->
      <div v-else key="quantum" class="absolute inset-0" dir="rtl">
        <div class="absolute top-[148px] inset-x-0 flex justify-center">
          <div class="sl-in sl-card border-violet-400/60 w-[1120px] px-7 py-3 text-[21px] font-bold text-white leading-snug" style="--d: .3s">
            <span class="sl-hl-amber font-black">الحوسبة الكمومية (Quantum Computing)</span>: نهج حوسبي يستخدم خصائص ميكانيكا الكم لمعالجة المعلومات،
            وقد يوفر تفوقًا في فئات محددة من المسائل.
          </div>
        </div>
        <div class="absolute top-[258px] inset-x-0 flex justify-center gap-6">
          <!-- classical bit -->
          <div class="sl-in w-[440px] h-[250px] rounded-3xl border-2 border-sky-400/60 bg-sky-950/45 flex flex-col items-center justify-center" style="--d: 1.2s">
            <div class="text-[23px] font-black text-white mb-4">البت الكلاسيكي</div>
            <div class="relative w-[150px] h-[64px] rounded-full bg-slate-800 border-2 border-slate-500" dir="ltr">
              <span class="absolute left-3 top-1/2 -mt-[11px] text-[18px] font-black text-slate-500">0</span>
              <span class="absolute right-3 top-1/2 -mt-[11px] text-[18px] font-black text-slate-500">1</span>
              <span class="knob absolute top-[6px] w-[50px] h-[48px] rounded-full bg-sky-400 text-slate-900 font-black text-[22px] flex items-center justify-center"></span>
            </div>
            <p class="mt-4 text-[19px] font-bold text-slate-200">حالة محددة واحدة في كل وقت: 0 أو 1</p>
          </div>
          <!-- qubit -->
          <div class="sl-in w-[440px] h-[250px] rounded-3xl border-2 border-violet-400/60 bg-violet-950/45 flex flex-col items-center justify-center" style="--d: 2.4s">
            <div class="text-[23px] font-black text-white mb-3">الكيوبت (qubit)</div>
            <div class="relative w-[110px] h-[110px] rounded-full bg-gradient-to-br from-violet-500/70 to-sky-500/70 border-2 border-violet-300 overflow-hidden">
              <div class="absolute top-1/2 inset-x-0 h-[2px] bg-white/40"></div>
              <div class="spin absolute left-1/2 top-1/2 w-[50px] h-[3px] bg-amber-300 origin-left rounded"></div>
            </div>
            <p class="mt-3 text-[19px] font-bold text-slate-200">يستخدم مبدأ التراكب الكمومي: مزيج من 0 و 1 معًا</p>
          </div>
        </div>
        <div class="absolute top-[524px] inset-x-0 flex justify-center">
          <span class="sl-in sl-badge !text-[20px] border-amber-400/70 bg-amber-600/20 text-amber-100" style="--d: 4s">
            ⚠️ لكنها لا تسرّع جميع أنواع الحسابات
          </span>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import SlidesTitle from '~/components/slides/Title.vue'

const props = defineProps<{ f: number }>()

const race = [
  { title: '☁️ نرسل البيانات إلى السحابة وننتظر', cls: 'border-rose-400/60 bg-rose-950/35', start: 1.4, gap: 0.8, end: 3.8,
    verdict: '⏳ تأخير… قد يؤثر في السلامة', verdictCls: 'text-rose-300',
    steps: [
      { t: '📤 إرسال عبر الشبكة', w: 300, cls: 'bg-rose-500/60' },
      { t: '⚙️ معالجة في السحابة', w: 260, cls: 'bg-rose-500/45' },
      { t: '📥 عودة القرار', w: 260, cls: 'bg-rose-500/60' },
    ] },
  { title: '🔲 نعالج على المركبة (الحوسبة الطرفية)', cls: 'border-emerald-400/60 bg-emerald-950/40', start: 1.8, gap: 0, end: 2.2,
    verdict: '⚡ قرار فوري', verdictCls: 'text-emerald-300',
    steps: [{ t: '⚙️ معالجة فورية', w: 200, cls: 'bg-emerald-500/60' }] },
]

const xr = [
  { name: 'الواقع المعزز', en: 'AR – Augmented Reality', cls: 'border-sky-400/60 bg-sky-950/45', text: 'text-sky-300',
    scene: 'bg-gradient-to-b from-sky-300/40 to-amber-200/20', badge: 'border-sky-400/60 bg-sky-600/20 text-sky-100', tag: '🌍 العالم الحقيقي + عناصر رقمية',
    def: 'تقنية تضيف عناصر أو معلومات رقمية إلى مشهد من العالم الحقيقي.' },
  { name: 'الواقع الافتراضي', en: 'VR – Virtual Reality', cls: 'border-violet-400/60 bg-violet-950/45', text: 'text-violet-300',
    scene: 'bg-gradient-to-b from-indigo-900 to-violet-900', badge: 'border-violet-400/60 bg-violet-600/20 text-violet-100', tag: '🕹️ بيئة رقمية كاملة',
    def: 'تقنية تضع المستخدم داخل بيئة افتراضية مولَّدة حاسوبيًا.' },
]

const head = computed(() => [
  { icon: '🚗', title: 'القيادة الذاتية', sub: 'تتخذ السيارة قرارها على متنها، دون انتظار السحابة' },
  { icon: '💡', title: 'توقف وفكر', sub: 'القيادة الذاتية والحوسبة الطرفية' },
  { icon: '🥽', title: 'الواقع المعزز / الواقع الافتراضي', sub: 'إضافة إلى العالم الحقيقي… أم عالم رقمي كامل؟' },
  { icon: '⚛️', title: 'الحوسبة الكمومية', sub: 'يحمل البت التقليدي حالة واحدة، أما الكيوبت فيستخدم مبدأ التراكب الكمومي' },
][props.f]!)
</script>

<style scoped>
.road { background: repeating-linear-gradient(90deg, #fde68a 0 40px, transparent 40px 70px); }
.car { left: 1180px; animation: drive 2.4s cubic-bezier(.2,.7,.3,1) .6s forwards; }
@keyframes drive { to { left: 520px } }
.sense { opacity: 0; clip-path: polygon(100% 20%, 0 0, 0 100%, 100% 80%); background: linear-gradient(270deg, rgba(56,189,248,.45), rgba(56,189,248,.05)); animation: sl-fade .5s ease 2.2s forwards; }
.seg { opacity: 0; transform-origin: right; animation: seg .7s ease var(--d) forwards; }
@keyframes seg { from { opacity: 0; transform: scaleX(0) } to { opacity: 1; transform: none } }
.knob { left: 6px; animation: knob 2.4s steps(1) 1.6s infinite; }
@keyframes knob { 0% { left: 6px } 50% { left: 92px } }
.spin { animation: spin 2.8s linear infinite; }
@keyframes spin { to { transform: rotate(360deg) } }
</style>
