<template>
  <!-- API and JSON. f = 0 the front end asks a weather service for data through an API,
       1 the JSON that comes back: keys, a text value and a number value. -->
  <div class="absolute inset-0">
    <SlidesTitle :icon="head.icon" :title="head.title" :sub="head.sub" />

    <Transition name="sl-frame" mode="out-in">
      <!-- ───── f0: an API call ───── -->
      <div v-if="f === 0" key="api" class="absolute inset-0">
        <div class="absolute top-[150px] inset-x-0 flex justify-center">
          <div class="sl-in sl-card border-violet-400/60 w-[1080px] px-8 py-3.5 text-center text-[23px] font-bold text-white leading-snug" style="--d: .3s" dir="rtl">
            <span class="sl-hl-amber font-black">API</span>: مجموعة قواعد واضحة تسمح لبرنامج بطلب بيانات أو وظائف من برنامج آخر؛
            فهي تتيح لبرمجيات مختلفة <span class="text-sky-300">تبادل البيانات</span>.
          </div>
        </div>

        <!-- weather service (left) · API (middle) · front end (right) -->
        <div class="sl-in absolute left-[80px] top-[282px] w-[260px] h-[170px] rounded-3xl border-2 border-amber-400/70 bg-amber-950/45 flex flex-col items-center justify-center" style="--d: 1.6s" dir="rtl">
          <span class="text-[50px] leading-none">🌦️</span>
          <span class="mt-2 text-[24px] font-black text-white">خدمة الطقس</span>
          <span class="text-[16px] font-bold text-slate-300">(خدمة خلفية)</span>
        </div>
        <div class="sl-pop absolute left-[555px] top-[302px] w-[170px] h-[130px] rounded-[28px] border-[3px] border-violet-400 bg-violet-900/60 flex flex-col items-center justify-center shadow-[0_0_40px_rgba(139,92,246,.4)]" style="--d: 2.2s">
          <span class="text-[34px] font-black font-mono text-white">API</span>
          <span class="text-[15px] font-bold text-violet-200" dir="rtl">قواعد واضحة</span>
        </div>
        <div class="sl-in absolute left-[940px] top-[282px] w-[260px] h-[170px] rounded-3xl border-2 border-sky-400/70 bg-sky-950/50 flex flex-col items-center justify-center" style="--d: 1s" dir="rtl">
          <span class="text-[50px] leading-none">🖥️</span>
          <span class="mt-2 text-[24px] font-black text-white">الواجهة الأمامية</span>
        </div>
        <!-- wires -->
        <div class="sl-fade absolute left-[340px] top-[330px] w-[600px] h-[3px] wire-v" style="--d: 2.4s"></div>
        <div class="sl-fade absolute left-[340px] top-[404px] w-[600px] h-[3px] wire-g" style="--d: 2.4s"></div>
        <div class="msg req absolute top-[312px] w-0 flex justify-center">
          <span class="whitespace-nowrap px-3 py-1 rounded-lg border-2 border-violet-400 bg-violet-950 font-mono text-[15px] font-bold text-violet-100">GET /api/weather?city=Cairo</span>
        </div>
        <div class="msg res absolute top-[386px] w-0 flex justify-center">
          <span class="whitespace-nowrap px-3 py-1 rounded-lg border-2 border-emerald-400 bg-emerald-950 font-mono text-[15px] font-bold text-emerald-100">{ JSON }</span>
        </div>

        <div class="absolute top-[480px] inset-x-0 flex justify-center">
          <span class="sl-in sl-badge !text-[20px] border-white/20 bg-slate-900/80 text-slate-100" style="--d: 6s" dir="rtl">
            🖥️ قد ترسل الواجهة الأمامية طلبات إلى خدمة خلفية عبر API وتستقبل منها البيانات
          </span>
        </div>
      </div>

      <!-- ───── f1: reading JSON ───── -->
      <div v-else-if="f === 1" key="json" class="absolute inset-0">
        <div class="absolute top-[148px] inset-x-0 flex justify-center">
          <div class="sl-in sl-card border-emerald-400/60 w-[1100px] px-8 py-3 text-center text-[21px] font-bold text-white leading-snug" style="--d: .3s" dir="rtl">
            <span class="sl-hl-green font-black">JSON</span>: صيغة نصية شائعة لتمثيل وتبادل البيانات المهيكلة باستخدام كائنات ومصفوفات وقيم بسيطة،
            وتدعمها لغات وأدوات برمجية كثيرة.
          </div>
        </div>

        <!-- the response -->
        <div class="sl-in absolute left-[90px] top-[268px] w-[520px] h-[270px] rounded-3xl border-2 border-white/15 bg-black/60 overflow-hidden" style="--d: 1.2s">
          <div class="h-[38px] bg-slate-800/80 flex items-center px-4 font-mono text-[15px] text-emerald-300">HTTP/1.1 200 OK · application/json</div>
          <div class="px-8 pt-5 font-mono text-[32px] leading-[52px] text-slate-200" dir="ltr">
            <div>{</div>
            <div class="pl-10"><span class="tok k" style="--d: 2.4s">"city"</span>: <span class="tok s" style="--d: 4s">"Cairo"</span>,</div>
            <div class="pl-10"><span class="tok k" style="--d: 2.4s">"temperature"</span>: <span class="tok n" style="--d: 5.6s">31</span></div>
            <div>}</div>
          </div>
        </div>

        <!-- annotations -->
        <div class="absolute left-[650px] top-[268px] w-[540px] flex flex-col gap-3" dir="rtl">
          <div v-for="(a, i) in notes" :key="a.title" class="sl-in h-[82px] rounded-2xl border-2 flex items-center gap-4 px-5" :class="a.cls"
               :style="{ '--d': `${2.4 + i * 1.6}s` }">
            <span class="text-[34px]">{{ a.icon }}</span>
            <div>
              <div class="text-[21px] font-black text-white">{{ a.title }} <span class="font-mono text-[18px]" :class="a.code" dir="ltr">{{ a.sample }}</span></div>
              <div class="text-[17px] font-bold text-slate-300">{{ a.text }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- ───── f2: objects and arrays ───── -->
      <div v-else key="structs" class="absolute inset-0">
        <!-- the response, with each structure outlined as it is explained -->
        <div class="sl-in absolute left-[70px] top-[150px] w-[560px] h-[420px] rounded-3xl border-2 border-white/15 bg-black/60 overflow-hidden" style="--d: .2s">
          <div class="h-[36px] bg-slate-800/80 flex items-center px-4 font-mono text-[15px] text-emerald-300">GET /api/weather?city=Cairo</div>
          <div class="relative mx-5 mt-4 px-5 py-2 font-mono text-[24px] leading-[38px] text-slate-200" dir="ltr">
            <!-- outer object -->
            <div class="box sl-fade border-sky-400 bg-sky-400/5" style="--d: 1s">
              <span class="tag sl-pop bg-sky-500 font-arabic" style="--d: 1.2s" dir="rtl">كائن { }</span>
            </div>
            <div class="text-sky-300 font-black">{</div>
            <div class="pl-8"><span class="k">"city"</span>: <span class="s">"Cairo"</span>,</div>
            <div class="pl-8"><span class="k">"temperature"</span>: <span class="n">31</span>,</div>
            <div class="pl-8"><span class="k">"forecast"</span>: <span class="arr-hl" style="--d: 4.2s"><b class="text-pink-300">[</b><span class="n">33</span>, <span class="n">30</span>, <span class="n">29</span><b class="text-pink-300">]</b></span>,</div>
            <!-- nested object -->
            <div class="relative">
              <div class="box sl-fade border-violet-400 bg-violet-400/10 !-inset-x-1" style="--d: 7s">
                <span class="tag tag-bottom sl-pop bg-violet-500 font-arabic" style="--d: 7.2s" dir="rtl">كائن داخل كائن</span>
              </div>
              <div class="pl-8"><span class="k">"wind"</span>: <b class="text-violet-300">{</b></div>
              <div class="pl-16"><span class="k">"speed"</span>: <span class="n">12</span>,</div>
              <div class="pl-16"><span class="k">"direction"</span>: <span class="s">"N"</span></div>
              <div class="pl-8"><b class="text-violet-300">}</b></div>
            </div>
            <div class="text-sky-300 font-black">}</div>
          </div>
        </div>

        <!-- what each structure is -->
        <div class="absolute left-[665px] top-[150px] w-[545px] flex flex-col gap-2.5" dir="rtl">
          <div v-for="(s, i) in structs" :key="s.title" class="sl-in rounded-2xl border-2 px-5 py-2.5 flex items-center gap-4" :class="s.cls"
               :style="{ '--d': `${s.at}s` }">
            <span class="w-[64px] h-[52px] shrink-0 rounded-xl bg-black/50 flex items-center justify-center font-mono text-[24px] font-black" :class="s.code" dir="ltr">{{ s.sample }}</span>
            <div>
              <div class="text-[21px] font-black text-white">{{ s.title }}</div>
              <p class="text-[16px] font-bold text-slate-200 leading-snug">{{ s.text }}</p>
            </div>
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

const head = computed(() => [
  { icon: '🧩', title: 'واجهة برمجة التطبيقات (API)', sub: 'قواعد واضحة تسمح لبرنامج بطلب بيانات أو وظائف من برنامج آخر' },
  { icon: '📦', title: 'صيغة JSON', sub: 'JavaScript Object Notation' },
  { icon: '🗂️', title: 'الكائنات والمصفوفات في JSON', sub: 'كائنات ومصفوفات وقيم بسيطة' },
][props.f]!)

// f2: the weather response extended with an array and a nested object
const structs = [
  { title: 'كائن (object)', sample: '{ }', at: 1.2, cls: 'border-sky-400/60 bg-sky-950/50', code: 'text-sky-300',
    text: 'أزواج «مفتاح: قيمة» بين قوسين معقوصين، تفصل بينها فواصل؛ الرد كله كائن واحد.' },
  { title: 'مصفوفة (array)', sample: '[ ]', at: 4.2, cls: 'border-pink-400/60 bg-pink-950/40', code: 'text-pink-300',
    text: 'قائمة مرتبة من القيم بين قوسين مربعين: حرارة الأيام الثلاثة القادمة.' },
  { title: 'كائن داخل كائن', sample: '{ }', at: 7.2, cls: 'border-violet-400/60 bg-violet-950/45', code: 'text-violet-300',
    text: 'قيمة المفتاح "wind" كائن له مفاتيحه: السرعة والاتجاه.' },
  { title: 'قيم بسيطة', sample: '31', at: 9.4, cls: 'border-emerald-400/60 bg-emerald-950/40', code: 'text-emerald-300',
    text: 'نصوص بين علامتي تنصيص مثل "Cairo"، وأرقام دونها مثل 31.' },
]

const notes = [
  { icon: '🔑', title: 'المفتاح (key)', sample: '"city"', cls: 'border-sky-400/60 bg-sky-950/50', code: 'text-sky-300', text: 'اسم البيانات، ويقابله قيمة (value)' },
  { icon: '🔤', title: 'قيمة نصية', sample: '"Cairo"', cls: 'border-amber-400/60 bg-amber-950/40', code: 'text-amber-300', text: 'تُكتب بين علامتي تنصيص: اسم المدينة' },
  { icon: '🔢', title: 'قيمة رقمية', sample: '31', cls: 'border-emerald-400/60 bg-emerald-950/40', code: 'text-emerald-300', text: 'تُكتب دون علامتي تنصيص: درجة الحرارة' },
]
</script>

<style scoped>
.wire-v { background: repeating-linear-gradient(90deg, #8b5cf6 0 14px, transparent 14px 22px); }
.wire-g { background: repeating-linear-gradient(90deg, #10b981 0 14px, transparent 14px 22px); }
.msg { opacity: 0; }
/* request goes right → left (front end to the service), the JSON answer comes back left → right */
.req { animation: reqGo 1.8s ease-in-out 2.8s forwards; }
.res { animation: resGo 1.8s ease-in-out 4.8s forwards; }
@keyframes reqGo { 0% { left: 860px; opacity: 0 } 10% { opacity: 1 } 90% { opacity: 1 } 100% { left: 420px; opacity: 0 } }
@keyframes resGo { 0% { left: 420px; opacity: 0 } 10% { opacity: 1 } 90% { opacity: 1 } 100% { left: 860px; opacity: 0 } }

.tok { border-radius: .4rem; padding: 0 .15em; animation: tok 1.4s ease var(--d) 1 forwards; }
.tok.k { color: #7dd3fc; }
.tok.s { color: #fcd34d; }
.tok.n { color: #6ee7b7; }
.k { color: #7dd3fc; }
.s { color: #fcd34d; }
.n { color: #6ee7b7; }
.box { position: absolute; inset: -4px -10px; border-width: 2px; border-radius: 1rem; pointer-events: none; }
.tag {
  position: absolute; top: -13px; right: 14px; padding: 0 .6rem; border-radius: 9999px;
  font-size: 14px; line-height: 24px; font-weight: 900; color: white; white-space: nowrap;
}
.tag-bottom { top: auto; bottom: -13px; }
.arr-hl { border-radius: .4rem; animation: arr 1.6s ease var(--d) forwards; }
@keyframes arr { 30% { background: rgba(244,114,182,.35); box-shadow: 0 0 0 3px rgba(244,114,182,.6) } 100% { background: rgba(244,114,182,.15); box-shadow: 0 0 0 2px rgba(244,114,182,.5) } }
@keyframes tok { 0% { background: transparent } 30% { background: rgba(255,255,255,.18); box-shadow: 0 0 0 3px rgba(255,255,255,.25) } 100% { background: rgba(255,255,255,.06) } }
</style>
