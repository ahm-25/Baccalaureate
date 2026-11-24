<template>
  <!-- Client and server. f = 0 the two definitions, 1 book figure 3.2.1: one request/response cycle
       (request → processing → response → the page is shown). Server on the right, as in the book. -->
  <div class="absolute inset-0">
    <SlidesTitle :icon="f === 0 ? '🤝' : '🔄'" :title="f === 0 ? 'العميل والخادم' : 'التواصل بين العميل والخادم'"
                 :sub="f === 0 ? 'من يطلب… ومن يستجيب؟' : 'الشكل 3.2.1 – اتصال العميل بالخادم'" />

    <Transition name="sl-frame" mode="out-in">
      <!-- ───── f0: definitions ───── -->
      <div v-if="f === 0" key="def" class="absolute inset-0">
        <div v-for="(c, i) in cards" :key="c.name" class="sl-in absolute top-[158px] w-[440px] h-[300px] rounded-3xl border-2 px-7 py-5 flex flex-col items-center text-center"
             :class="c.cls" :style="{ left: `${c.x}px`, '--d': `${0.4 + i * 1.8}s` }" dir="rtl">
          <component :is="c.icon" class="w-14 h-14" :class="c.ico" />
          <div class="mt-2 text-[32px] font-black text-white">{{ c.name }} <span class="text-[20px] text-slate-400 font-mono" dir="ltr">({{ c.en }})</span></div>
          <p class="mt-2 text-[21px] font-bold text-slate-100 leading-snug">{{ c.def }}</p>
          <div class="mt-auto flex flex-wrap justify-center gap-2">
            <span v-for="(e, j) in c.examples" :key="e" class="sl-pop sl-badge !text-[17px] border-white/20 bg-white/5 text-slate-100"
                  :style="{ '--d': `${1.2 + i * 1.8 + j * 0.3}s` }">{{ e }}</span>
          </div>
        </div>
        <!-- arrows in the middle -->
        <div class="sl-fade absolute left-[545px] top-[230px] w-[190px]" style="--d: 4s" dir="rtl">
          <div class="text-center text-[18px] font-black text-violet-200">📨 طلب</div>
          <div class="relative mt-1 h-[4px] flow-r"><span class="ah ah-r ah-violet"></span></div>
          <div class="relative mt-10 h-[4px] flow-l"><span class="ah ah-l ah-green"></span></div>
          <div class="mt-1 text-center text-[18px] font-black text-emerald-200">📄 استجابة</div>
        </div>
        <div class="absolute top-[482px] inset-x-0 flex justify-center">
          <div class="sl-in sl-card border-white/15 px-8 py-3 text-[22px] font-bold text-slate-100" style="--d: 5s" dir="rtl">
            تعتمد كثير من تطبيقات الويب على أن <span class="text-sky-300 font-black">يرسل العميل طلبًا</span> و<span class="text-amber-300 font-black">يعيد الخادم استجابة</span>.
          </div>
        </div>
      </div>

      <!-- ───── f1: one full cycle ───── -->
      <div v-else key="cycle" class="absolute inset-0">
        <!-- client -->
        <div class="sl-in absolute left-[90px] top-[170px] w-[280px] h-[230px] rounded-3xl border-2 border-sky-400 bg-sky-950/60 flex flex-col items-center pt-4" style="--d: .2s" dir="rtl">
          <div class="relative w-[200px] h-[110px] rounded-xl border-2 border-slate-500 bg-slate-900 overflow-hidden">
            <div class="absolute inset-0 flex items-center justify-center text-[16px] font-bold text-slate-500 sl-out" style="--d: 5.2s">⏳ في انتظار الصفحة…</div>
            <div class="absolute inset-0 flex flex-col items-center justify-center gap-1 sl-fade" style="--d: 5.2s">
              <span class="text-[34px] leading-none">📄</span>
              <span class="text-[16px] font-black text-emerald-300">تم عرض الصفحة ✓</span>
            </div>
          </div>
          <div class="mt-2 text-[26px] font-black text-white">💻 العميل</div>
          <div class="text-[16px] font-bold text-slate-300">المتصفح / تطبيق الهاتف</div>
        </div>
        <!-- server -->
        <div class="sl-in absolute left-[910px] top-[170px] w-[280px] h-[230px] rounded-3xl border-2 border-amber-400 bg-amber-950/50 flex flex-col items-center justify-center" style="--d: .4s" dir="rtl">
          <div class="relative">
            <Server class="w-16 h-16 text-amber-300" />
            <span class="gear absolute -top-3 -left-6 text-[30px]">⚙️</span>
          </div>
          <div class="mt-2 text-[26px] font-black text-white">الخادم</div>
          <div class="text-[16px] font-bold text-slate-300">خادم الويب / خادم التطبيقات</div>
          <span class="busy mt-2 sl-badge !text-[15px] !py-0.5 border-amber-300 bg-amber-500/30 text-amber-50">يعالج الطلب…</span>
        </div>
        <!-- wires -->
        <div class="absolute left-[380px] top-[240px] w-[520px] h-[4px] wire-v"></div>
        <div class="absolute left-[380px] top-[330px] w-[520px] h-[4px] wire-g"></div>
        <div class="absolute left-[380px] top-[198px] w-[520px] text-center text-[18px] font-black text-violet-200" dir="rtl">📨 الطلب: «أرني هذه الصفحة»</div>
        <div class="absolute left-[380px] top-[344px] w-[520px] text-center text-[18px] font-black text-emerald-200" dir="rtl">📄 الاستجابة: إعادة البيانات المطلوبة</div>
        <span class="msg go-r absolute top-[218px] text-[38px]">📨</span>
        <span class="msg go-l absolute top-[308px] text-[38px]">📄</span>

        <!-- steps -->
        <div class="absolute top-[440px] inset-x-0 flex justify-center gap-3" dir="rtl">
          <div v-for="(s, i) in cycle" :key="s" class="sl-in w-[270px] h-[100px] rounded-2xl border-2 px-4 flex items-center gap-3"
               :class="cycleCls[i]" :style="{ '--d': `${[0.6, 2.2, 3.6, 5.2][i]}s` }">
            <span class="text-[30px] font-black text-white">{{ '①②③④'[i] }}</span>
            <span class="text-[19px] font-bold text-white leading-snug">{{ s }}</span>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { Monitor, Server } from 'lucide-vue-next'
import SlidesTitle from '~/components/slides/Title.vue'

defineProps<{ f: number }>()

const cards = [
  { name: 'العميل', en: 'client', icon: Monitor, ico: 'text-sky-300', x: 90, cls: 'border-sky-400/70 bg-sky-950/50',
    def: 'برنامج أو جهاز يرسل طلبًا إلى خدمة أخرى؛ الجانب الذي يطلب البيانات أو المعالجة.', examples: ['🌐 متصفح الويب', '📱 تطبيق الهاتف'] },
  { name: 'الخادم', en: 'server', icon: Server, ico: 'text-amber-300', x: 750, cls: 'border-amber-400/70 bg-amber-950/40',
    def: 'الجانب الذي يستقبل الطلبات من العملاء، ويعالجها، ويعيد الاستجابات.', examples: ['🖥️ خادم الويب', '⚙️ خادم التطبيقات'] },
]

const cycle = ['العميل يرسل طلبًا إلى الخادم', 'الخادم يستقبل الطلب ويعالجه', 'الخادم يعيد استجابة بالبيانات', 'العميل يستقبلها ويعرض الصفحة']
const cycleCls = [
  'border-violet-400/70 bg-violet-950/50',
  'border-amber-400/70 bg-amber-950/40',
  'border-emerald-400/70 bg-emerald-950/40',
  'border-sky-400/70 bg-sky-950/50',
]
</script>

<style scoped>
.flow-r { background: repeating-linear-gradient(90deg, #c4b5fd 0 10px, transparent 10px 16px); animation: flowR .8s linear infinite; }
.flow-l { background: repeating-linear-gradient(90deg, #6ee7b7 0 10px, transparent 10px 16px); animation: flowL .8s linear infinite; }
@keyframes flowR { to { background-position: 16px 0 } }
@keyframes flowL { to { background-position: -16px 0 } }
.ah { position: absolute; top: -6px; width: 0; height: 0; border-top: 8px solid transparent; border-bottom: 8px solid transparent; }
.ah-r { right: -10px; border-left: 12px solid; }
.ah-l { left: -10px; border-right: 12px solid; }
.ah-violet { border-left-color: #c4b5fd; }
.ah-green { border-right-color: #6ee7b7; }

.wire-v { background: repeating-linear-gradient(90deg, #8b5cf6 0 14px, transparent 14px 22px); opacity: .7; }
.wire-g { background: repeating-linear-gradient(90deg, #10b981 0 14px, transparent 14px 22px); opacity: .7; }
.msg { opacity: 0; }
.go-r { animation: goR 1.5s ease-in-out .6s forwards; }
.go-l { animation: goL 1.5s ease-in-out 3.6s forwards; }
@keyframes goR { 0% { left: 370px; opacity: 0 } 10% { opacity: 1 } 90% { opacity: 1 } 100% { left: 860px; opacity: 0 } }
@keyframes goL { 0% { left: 860px; opacity: 0 } 10% { opacity: 1 } 90% { opacity: 1 } 100% { left: 370px; opacity: 0 } }
.busy { opacity: 0; animation: busy 1.4s ease 2.1s forwards; }
@keyframes busy { 0%, 100% { opacity: 0 } 15%, 85% { opacity: 1 } }
.gear { opacity: 0; animation: gear 1.4s linear 2.1s forwards; }
@keyframes gear { 0% { opacity: 1; transform: rotate(0) } 99% { opacity: 1; transform: rotate(360deg) } 100% { opacity: 0 } }
</style>
