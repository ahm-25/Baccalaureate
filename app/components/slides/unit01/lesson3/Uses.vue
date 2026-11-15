<template>
  <!-- Lesson 1-3 uses. Daily life: f = 0 recommendation, 1 voice assistant, 2 translation, 3 face recognition.
       Industry: f = 4 healthcare, 5 agriculture, 6 manufacturing, 7 logistics. -->
  <div class="absolute inset-0">
    <SlidesTitle :icon="cur.icon" :title="cur.title" :sub="cur.sub" />

    <Transition name="sl-frame" mode="out-in">
      <div :key="f" class="absolute inset-0">
        <!-- definition / bullets (right) -->
        <div class="absolute left-[760px] top-[160px] w-[470px] flex flex-col gap-3" dir="rtl">
          <div class="sl-in rounded-3xl border-2 bg-slate-900/85 px-6 py-4" :class="cur.border" style="--d: .3s">
            <div v-if="cur.def" class="text-[21px] font-bold text-white leading-relaxed">
              <span class="font-black" :class="cur.accent">التعريف:</span> {{ cur.def }}
            </div>
            <ul v-else class="space-y-1.5">
              <li v-for="b in cur.bullets" :key="b" class="text-[20px] font-bold text-white leading-snug">✓ {{ b }}</li>
            </ul>
            <div v-if="cur.examples" class="mt-2 text-[16px] font-bold text-slate-400" dir="rtl">({{ cur.examples }})</div>
          </div>
          <template v-if="f >= 4">
            <div class="sl-in rounded-2xl border-2 border-emerald-400/50 bg-emerald-950/40 px-5 py-2.5" style="--d: 4.4s">
              <div class="text-[16px] font-black text-emerald-300">✅ الفائدة</div>
              <p class="text-[17px] font-bold text-slate-100 leading-snug">{{ cur.benefit }}</p>
            </div>
            <div class="sl-in rounded-2xl border-2 border-rose-400/50 bg-rose-950/40 px-5 py-2.5" style="--d: 5.2s">
              <div class="text-[16px] font-black text-rose-300">⚠️ الخطر المحتمل</div>
              <p class="text-[17px] font-bold text-slate-100 leading-snug">{{ cur.risk }}</p>
            </div>
          </template>
        </div>

        <!-- scene (left) -->
        <div class="absolute left-[50px] top-[160px] w-[670px] h-[400px] rounded-3xl border-2 border-white/10 bg-slate-950/50 overflow-hidden">
          <!-- f0: recommendation -->
          <template v-if="f === 0">
            <div class="absolute top-4 inset-x-0 text-center text-[18px] font-black text-slate-300" dir="rtl">شاهد الطالب:</div>
            <div class="absolute top-[54px] inset-x-0 flex justify-center gap-3" dir="rtl">
              <span v-for="(w, i) in watched" :key="w" class="sl-pop px-4 py-2 rounded-xl bg-red-600/80 text-white text-[18px] font-black" :style="{ '--d': `${0.5 + i * 0.4}s` }">▶ {{ w }}</span>
            </div>
            <div class="absolute top-[118px] left-[300px] w-[70px] h-[70px] rounded-full border-4 border-sky-400 bg-sky-950 flex items-center justify-center text-4xl sl-pop think" style="--d: 1.8s">🧠</div>
            <div class="absolute top-[200px] inset-x-0 text-center text-[18px] font-black text-slate-300 sl-in" style="--d: 2.4s" dir="rtl">ما نوع الفيديو الذي قد يقترحه النظام؟</div>
            <div class="absolute top-[244px] inset-x-0 flex justify-center gap-4" dir="rtl">
              <div v-for="(o, i) in recOptions" :key="o.t" class="sl-in w-[180px] h-[110px] rounded-2xl border-2 flex flex-col items-center justify-center gap-1"
                   :class="o.ok ? 'pick-ok border-slate-600 bg-slate-800/80' : 'pick-no border-slate-600 bg-slate-800/80'" :style="{ '--d': `${2.8 + i * 0.3}s` }">
                <span class="text-4xl">{{ o.i }}</span>
                <span class="text-[19px] font-black text-white">{{ o.t }}</span>
              </div>
            </div>
          </template>

          <!-- f1: voice assistant pipeline -->
          <template v-else-if="f === 1">
            <div class="absolute top-[40px] inset-x-0 flex justify-center">
              <div class="sl-in rounded-2xl rounded-br-sm bg-sky-600 px-5 py-2.5 text-[21px] font-black text-white" style="--d: .4s" dir="rtl">🗣️ «كيف الطقس اليوم؟»</div>
            </div>
            <div class="absolute top-[150px] inset-x-0 flex justify-center items-center gap-2" dir="rtl">
              <template v-for="(s, i) in voiceSteps" :key="s.t">
                <div class="v-step w-[140px] h-[110px] rounded-2xl border-2 border-slate-600 bg-slate-800/80 flex flex-col items-center justify-center gap-1 sl-in"
                     :style="{ '--d': `${1 + i * 0.8}s` }">
                  <span class="text-4xl">{{ s.i }}</span>
                  <span class="text-[16px] font-black text-white text-center leading-tight">{{ s.t }}</span>
                </div>
                <span v-if="i < 3" class="text-3xl text-slate-500 sl-fade" :style="{ '--d': `${1.3 + i * 0.8}s` }">←</span>
              </template>
            </div>
            <div class="absolute top-[300px] inset-x-0 flex justify-center">
              <div class="sl-pop rounded-2xl bg-slate-800 border-2 border-emerald-400 px-5 py-2.5 text-[21px] font-black text-white" style="--d: 4.4s" dir="rtl">☀️ مشمس، 28 درجة</div>
            </div>
          </template>

          <!-- f2: translation -->
          <template v-else-if="f === 2">
            <div v-for="(t, i) in translations" :key="t.lang" class="absolute left-[40px] right-[40px] h-[78px] rounded-2xl border-2 flex items-center gap-4 px-5"
                 :class="[i === 0 ? 'border-sky-400/60 bg-sky-950/50' : 'border-emerald-400/50 bg-slate-900/80 sl-in']"
                 :style="{ top: `${30 + i * 92}px`, '--d': `${1 + i * 0.7}s` }" :dir="t.dir">
              <span class="px-3 py-1 rounded-lg bg-white/10 text-[15px] font-black text-slate-200 whitespace-nowrap">{{ t.lang }}</span>
              <span class="text-[22px] font-bold text-white">{{ t.text }}</span>
            </div>
          </template>

          <!-- f3: face unlock -->
          <template v-else-if="f === 3">
            <div class="absolute left-[235px] top-[24px] w-[200px] h-[350px] rounded-[2.2rem] border-4 border-slate-500 bg-slate-900 overflow-hidden">
              <div class="absolute inset-x-0 top-[40px] flex justify-center"><span class="lock-ico text-4xl"></span></div>
              <div class="absolute left-1/2 top-[120px] -ml-[60px] w-[120px] h-[150px]">
                <div class="absolute inset-0 flex items-center justify-center text-[86px]">👨</div>
                <div class="face-frame absolute inset-0 rounded-3xl border-4 border-sky-400"></div>
                <div class="scan-line absolute inset-x-0 h-[4px] bg-sky-300 shadow-[0_0_12px_#7dd3fc]"></div>
              </div>
              <div class="absolute bottom-6 inset-x-0 text-center">
                <span class="sl-pop text-[15px] font-black text-emerald-300" style="--d: 2.6s" dir="rtl">تم التعرف! الهاتف مفتوح 🔓</span>
              </div>
            </div>
          </template>

          <!-- f4: X-ray -->
          <template v-else-if="f === 4">
            <div class="absolute left-[60px] top-[40px] w-[250px] h-[310px] rounded-2xl bg-black border-2 border-slate-600 flex items-center justify-center overflow-hidden">
              <svg width="200" height="260" viewBox="0 0 200 260" class="opacity-80"><rect x="94" y="20" width="12" height="220" rx="5" fill="#cbd5e1"/><g fill="none" stroke="#e2e8f0" stroke-width="7" stroke-linecap="round"><path v-for="k in 6" :key="'l'+k" :d="'M 92 ' + (40 + k * 28) + ' Q 30 ' + (30 + k * 28) + ' 34 ' + (70 + k * 28)" /><path v-for="k in 6" :key="'r'+k" :d="'M 108 ' + (40 + k * 28) + ' Q 170 ' + (30 + k * 28) + ' 166 ' + (70 + k * 28)" /></g></svg>
              <div class="xray-scan absolute inset-x-0 h-[6px] bg-sky-300/80 shadow-[0_0_16px_#7dd3fc]"></div>
              <div class="sl-pop absolute left-[140px] top-[110px] w-[60px] h-[60px] rounded-full border-4 border-amber-400" style="--d: 2.4s"></div>
            </div>
            <div class="absolute left-[340px] top-[60px] w-[290px] flex flex-col gap-3" dir="rtl">
              <div class="sl-in rounded-2xl border-2 border-amber-400/60 bg-amber-950/40 px-4 py-3" style="--d: 2.8s">
                <div class="text-[16px] font-black text-amber-300">🤖 نتيجة مساعدة</div>
                <p class="text-[18px] font-bold text-white">منطقة غير طبيعية تحتاج مراجعة</p>
              </div>
              <div class="sl-in rounded-2xl border-2 border-sky-400/70 bg-sky-950/50 px-4 py-3" style="--d: 3.6s">
                <div class="text-[16px] font-black text-sky-300">🩺 الطبيب</div>
                <p class="text-[18px] font-bold text-white">يراجع ويتخذ القرار النهائي</p>
              </div>
            </div>
          </template>

          <!-- f5: plants -->
          <template v-else-if="f === 5">
            <div class="drone absolute top-[30px] text-[54px]">🚁</div>
            <div class="absolute top-[200px] inset-x-0 flex justify-center gap-24">
              <div v-for="(p, i) in plants" :key="i" class="flex flex-col items-center gap-3">
                <span class="text-[90px] leading-none">{{ p.i }}</span>
                <span class="sl-pop px-3 py-1.5 rounded-xl text-[17px] font-black" :class="p.cls" :style="{ '--d': `${1.6 + i * 1.4}s` }" dir="rtl">{{ p.t }}</span>
              </div>
            </div>
          </template>

          <!-- f6: predictive maintenance -->
          <template v-else-if="f === 6">
            <div class="absolute left-[70px] top-[70px] flex gap-2">
              <span class="gear text-[90px]">⚙️</span><span class="gear rev text-[64px] mt-10">⚙️</span>
            </div>
            <svg class="absolute left-[300px] top-[70px]" width="330" height="150">
              <polyline :points="wave" fill="none" stroke="#38bdf8" stroke-width="3" class="wave-line" />
            </svg>
            <div class="absolute left-[300px] top-[210px] w-[330px] text-center text-[16px] font-black text-sky-200" dir="rtl">📈 الاهتزازات والأصوات أثناء التشغيل</div>
            <div class="absolute top-[268px] inset-x-0 flex justify-center">
              <div class="sl-pop rounded-2xl border-2 border-amber-400 bg-amber-950/70 px-6 py-3 text-[21px] font-black text-amber-100" style="--d: 3s" dir="rtl">
                ⚠️ تنبؤ: عطل محتمل خلال أيام — جدولة صيانة
              </div>
            </div>
          </template>

          <!-- f7: routes -->
          <template v-else>
            <svg class="absolute inset-0" width="670" height="400">
              <path d="M 560 320 C 520 120, 380 360, 300 160 S 140 300, 110 90" fill="none" stroke="#64748b" stroke-width="6" stroke-dasharray="14 10" />
              <path d="M 560 320 C 460 260, 220 180, 110 90" fill="none" stroke="#34d399" stroke-width="7" class="route" />
            </svg>
            <div class="absolute left-[520px] top-[320px] text-center" dir="rtl"><span class="text-4xl">🏢</span><div class="text-[15px] font-black text-slate-200">مستودع</div></div>
            <div class="absolute left-[70px] top-[40px] text-center" dir="rtl"><span class="text-4xl">🏠</span><div class="text-[15px] font-black text-slate-200">عميل</div></div>
            <div class="truck absolute text-[38px]">🚚</div>
            <div class="absolute left-[230px] top-[20px] flex gap-3" dir="rtl">
              <span class="sl-in px-3 py-1 rounded-lg bg-slate-700/80 text-[15px] font-black text-slate-200" style="--d: .5s">— مسار عادي</span>
              <span class="sl-in px-3 py-1 rounded-lg bg-emerald-700/80 text-[15px] font-black text-white" style="--d: 1.6s">— مسار محسّن بالذكاء الاصطناعي</span>
            </div>
          </template>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import SlidesTitle from '~/components/slides/Title.vue'

const props = defineProps<{ f: number }>()

const frames = [
  { icon: '🎬', title: 'نظام التوصية', sub: 'الذكاء الاصطناعي في حياتك اليومية', border: 'border-red-400/60', accent: 'text-red-300',
    def: 'نظام يتنبأ بالتفضيلات من بيانات السلوك السابق ويعرض التوصيات.', examples: 'أمثلة: YouTube, Amazon, Spotify' },
  { icon: '🎤', title: 'المساعد الصوتي', sub: 'الذكاء الاصطناعي في حياتك اليومية', border: 'border-sky-400/60', accent: 'text-sky-300',
    def: 'التعرف على الصوت، وفهم الأوامر، وتنفيذها.', examples: 'أمثلة: Siri, Google Assistant' },
  { icon: '🌍', title: 'الترجمة الآلية', sub: 'الذكاء الاصطناعي في حياتك اليومية', border: 'border-purple-400/60', accent: 'text-purple-300',
    def: 'ترجمة النص تلقائيًا إلى لغات مختلفة بناءً على فهم السياق.', examples: 'أمثلة: Google Translate, DeepL' },
  { icon: '📷', title: 'التعرف على الوجه', sub: 'الذكاء الاصطناعي في حياتك اليومية', border: 'border-teal-400/60', accent: 'text-teal-300',
    def: 'الكشف عن وجوه الأشخاص في الصور والتعرف عليها تلقائيًا.', examples: 'مثال: فتح الهاتف الذكي' },
  { icon: '🏥', title: 'الرعاية الصحية', sub: 'الذكاء الاصطناعي في الصناعة', border: 'border-sky-400/60', accent: 'text-sky-300',
    bullets: ['التشخيص بالصور', 'الكشف عن الأمراض من صور الأشعة السينية والتصوير المقطعي', 'دعم اكتشاف الأدوية'],
    benefit: 'سرعة التشخيص وتقليل نسبة الخطأ البشري، مما يساعد على إنقاذ الأرواح.',
    risk: 'قد يخطئ في التشخيص أو يعتمد على بيانات متحيزة؛ لذلك يجب مراجعة الطبيب.' },
  { icon: '🌾', title: 'الزراعة', sub: 'الذكاء الاصطناعي في الصناعة', border: 'border-green-400/60', accent: 'text-green-300',
    bullets: ['التنبؤ بموعد الحصاد', 'الكشف عن الآفات والأمراض'],
    benefit: 'زيادة إنتاجية المحاصيل وتقليل استخدام المبيدات الكيميائية.',
    risk: 'الاعتماد المفرط عليه قد يسبب خسائر كبيرة إذا تعطل النظام ولم يلاحظ المزارع المشكلة.' },
  { icon: '🏭', title: 'التصنيع', sub: 'الذكاء الاصطناعي في الصناعة', border: 'border-amber-400/60', accent: 'text-amber-300',
    bullets: ['أتمتة فحص جودة المنتج', 'الصيانة التنبؤية: التنبؤ بأعطال الآلات قبل وقوعها من خلال تحليل أصواتها واهتزازاتها'],
    benefit: 'تقليل التكاليف الناتجة عن توقف المصنع وتحسين جودة المنتجات.',
    risk: 'تسريح العمالة بسبب الأتمتة، ومخاطر الأمن السيبراني في المصانع المتصلة بالإنترنت.' },
  { icon: '🚚', title: 'الخدمات اللوجستية', sub: 'الذكاء الاصطناعي في الصناعة', border: 'border-emerald-400/60', accent: 'text-emerald-300',
    bullets: ['تحسين مسارات التوصيل', 'تقليل استهلاك الوقود والوقت'],
    benefit: 'سرعة وصول الشحنات للعملاء وتقليل التلوث وانبعاثات الكربون.',
    risk: 'قد يوجه السائقين إلى طرق خطرة أو غير مهيأة إذا لم يتم تحديث الخرائط بدقة.' },
] as const
const cur = computed(() => frames[props.f]! as (typeof frames)[number] & { def?: string; bullets?: readonly string[]; examples?: string; benefit?: string; risk?: string })

const watched = ['برمجة', 'JavaScript', 'AI']
const recOptions = [
  { i: '🍳', t: 'طبخ', ok: false },
  { i: '💻', t: 'تطوير الويب', ok: true },
  { i: '⚽', t: 'رياضة', ok: false },
]
const voiceSteps = [
  { i: '🗣️', t: 'صوت المستخدم' },
  { i: '👂', t: 'التعرف على الكلام' },
  { i: '🧠', t: 'فهم الأمر' },
  { i: '✅', t: 'تنفيذ الأمر' },
]
const translations = [
  { lang: 'العربية', text: 'مرحبًا بك في عالم الذكاء الاصطناعي!', dir: 'rtl' },
  { lang: 'English', text: 'Welcome to the world of AI!', dir: 'ltr' },
  { lang: 'Français', text: "Bienvenue dans le monde de l'IA !", dir: 'ltr' },
  { lang: '日本語', text: 'AIの世界へようこそ！', dir: 'ltr' },
]
const plants = [
  { i: '🌿', t: '✅ النبات سليم', cls: 'bg-emerald-600/80 text-white' },
  { i: '🥀', t: '⚠️ تم اكتشاف آفة!', cls: 'bg-rose-600/80 text-white' },
]
const wave = Array.from({ length: 34 }, (_, i) => {
  const x = i * 10
  const amp = i < 20 ? 12 : 12 + (i - 20) * 4.5
  return `${x},${75 + (i % 2 ? -amp : amp)}`
}).join(' ')
</script>

<style scoped>
.think { animation: sl-pop .5s cubic-bezier(.3,1.6,.5,1) var(--d) forwards, pulse .9s ease-in-out 2.4s 2; }
@keyframes pulse { 50% { box-shadow: 0 0 34px rgba(56,189,248,.9) } }
.pick-ok { animation: sl-in .6s cubic-bezier(.2,.8,.2,1.1) var(--d) forwards, ok .5s ease 4.4s forwards; }
@keyframes ok { to { border-color: #34d399; background: rgba(6,78,59,.7); box-shadow: 0 0 28px rgba(52,211,153,.6); transform: scale(1.06) } }
.pick-no { animation: sl-in .6s cubic-bezier(.2,.8,.2,1.1) var(--d) forwards, no .5s ease 4.4s forwards; }
@keyframes no { to { opacity: .35 } }

.v-step { animation: sl-in .6s cubic-bezier(.2,.8,.2,1.1) var(--d) forwards, lit .5s ease calc(var(--d) + .3s) forwards; }
@keyframes lit { to { border-color: #38bdf8; background: rgba(12,74,110,.6) } }

.face-frame { opacity: 0; animation: sl-fade .3s ease .4s forwards, faceOk .4s ease 2.4s forwards; }
@keyframes faceOk { to { border-color: #34d399; box-shadow: 0 0 24px rgba(52,211,153,.8) } }
.scan-line { top: 0; animation: scan 1s ease-in-out .5s 2 alternate, sl-out .2s ease 2.5s forwards; }
@keyframes scan { from { top: 0 } to { top: 146px } }
.lock-ico::before { content: '🔒'; animation: unlock 0s 2.5s forwards; }
@keyframes unlock { to { content: '🔓' } }

.xray-scan { top: 0; animation: xscan 1.1s ease-in-out .3s 2 alternate, sl-out .2s ease 2.5s forwards; }
@keyframes xscan { from { top: 0 } to { top: 304px } }

.drone { left: 60px; animation: drone 3s ease-in-out .3s forwards; }
@keyframes drone { 0% { left: 60px } 40% { left: 250px } 100% { left: 520px } }

.gear { display: inline-block; animation: spin 2.4s linear infinite; }
.gear.rev { animation-direction: reverse; }
@keyframes spin { to { transform: rotate(360deg) } }
.wave-line { stroke-dasharray: 900; stroke-dashoffset: 900; animation: draw 2.4s linear .3s forwards; }
@keyframes draw { to { stroke-dashoffset: 0 } }

.route { stroke-dasharray: 700; stroke-dashoffset: 700; animation: draw 1.6s ease 1.2s forwards; }
.truck { left: 540px; top: 290px; animation: truck 2.2s ease-in-out 2.6s forwards; }
@keyframes truck { 0% { left: 540px; top: 290px } 50% { left: 330px; top: 175px } 100% { left: 150px; top: 100px } }
</style>
