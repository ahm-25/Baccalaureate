<template>
  <!-- Defense in depth. f = 0 concept (layers + one layer fails), 1 layers table,
       2 lab with the firewall alone, 3 lab with every layer. -->
  <div class="absolute inset-0">
    <SlidesTitle icon="🧅" :title="titles[f]!.title" :sub="titles[f]!.sub" />

    <Transition name="sl-frame" mode="out-in">
      <!-- ───── f0: rings ───── -->
      <div v-if="f === 0" key="rings" class="absolute inset-0">
        <div v-for="(l, i) in layers" :key="l.name"
             class="ring absolute rounded-full border-4 sl-pop"
             :class="[l.ring, { 'ring-fail': i === 0, 'ring-stop': i === 1 }]"
             :style="ringStyle(i)">
        </div>
        <div v-for="(l, i) in layers" :key="`ico-${i}`" class="absolute text-[26px] sl-pop leading-none"
             :style="{ left: `${CX - 15}px`, top: `${CY - R[i]! + 6}px`, '--d': `${0.3 + i * 0.25}s` }">{{ l.icon }}</div>
        <div class="absolute flex flex-col items-center justify-center rounded-full bg-slate-900 border-2 border-white/30 sl-pop"
             :style="{ left: `${CX - 46}px`, top: `${CY - 46}px`, width: '92px', height: '92px', '--d': '1.3s' }">
          <span class="text-3xl leading-none">🗄️</span>
          <span class="text-sm font-black text-white mt-1">البيانات</span>
        </div>

        <!-- attacker -->
        <div class="absolute left-[30px] flex flex-col items-center" :style="{ top: `${CY - 44}px` }">
          <div class="w-[70px] h-[70px] rounded-full bg-rose-950 border-2 border-rose-400 flex items-center justify-center text-4xl">🕵️</div>
        </div>
        <div class="d-bolt" :style="{ top: `${CY - 24}px` }">⚡</div>
        <span class="absolute sl-pop sl-badge !text-base !py-0.5 border-rose-400 text-rose-100 bg-rose-700/80"
              :style="{ left: `${CX - R[0]! - 70}px`, top: `${CY - 92}px`, '--d': '2.9s' }" dir="rtl">✗ فشلت</span>
        <span class="absolute sl-pop text-4xl" :style="{ left: `${CX - R[1]! - 2}px`, top: `${CY + 22}px`, '--d': '3.7s' }">🛡️</span>

        <!-- legend -->
        <div class="absolute left-[730px] top-[170px] w-[500px] flex flex-col gap-3" dir="rtl">
          <div v-for="(l, i) in layers" :key="l.name" class="sl-in flex items-center gap-3 text-[24px] font-black text-white"
               :style="{ '--d': `${0.4 + i * 0.25}s` }">
            <span class="w-5 h-5 rounded-full shrink-0" :class="l.dot"></span>
            <span>{{ l.icon }}</span>
            <span>الطبقة {{ i + 1 }}: {{ l.name }}</span>
          </div>
          <div class="sl-in mt-5 rounded-2xl border-2 border-emerald-400/70 bg-emerald-950/60 px-6 py-4 text-[24px] font-black text-emerald-100 leading-relaxed"
               style="--d: 4.3s">
            إذا فشلت طبقة حماية، تبقى طبقات أخرى تقلل الخطر وتحد من أثر الاختراق.
          </div>
        </div>
      </div>

      <!-- ───── f1: layers table ───── -->
      <div v-else-if="f === 1" key="table" class="absolute top-[158px] inset-x-0 flex justify-center" dir="rtl">
        <div class="w-[1120px] rounded-3xl overflow-hidden border-2 border-white/10 bg-slate-900/70">
          <div class="grid grid-cols-[390px_1fr] bg-slate-800/90 text-[22px] font-black text-slate-300">
            <div class="px-6 py-3">الطبقة</div>
            <div class="px-6 py-3 border-r-2 border-white/10">أمثلة على الإجراءات</div>
          </div>
          <div v-for="(l, i) in layers" :key="l.name" class="sl-in grid grid-cols-[390px_1fr] border-t-2 border-white/10"
               :style="{ '--d': `${0.4 + i * 1.6}s` }">
            <div class="px-6 py-3 flex items-center gap-3 text-[23px] font-black whitespace-nowrap" :class="l.text">
              <span class="text-3xl">{{ l.icon }}</span> الطبقة {{ i + 1 }}: {{ l.name }}
            </div>
            <div class="px-6 py-3 border-r-2 border-white/10 text-[22px] font-bold text-slate-100 leading-snug flex items-center">{{ l.action }}</div>
          </div>
        </div>
      </div>

      <!-- ───── f2, f3: the lab ───── -->
      <div v-else :key="`lab-${f}`" class="absolute inset-0" dir="rtl">
        <div class="absolute top-[146px] inset-x-0 flex justify-center gap-4">
          <div v-for="(l, i) in layers" :key="l.name" class="w-[280px] h-[72px] rounded-2xl border-2 flex items-center gap-3 px-4 transition-all"
               :class="on(i) ? l.on : 'border-slate-700 bg-slate-900/60 opacity-60'">
            <span class="text-3xl" :class="{ grayscale: !on(i) }">{{ l.icon }}</span>
            <div class="flex-1 min-w-0">
              <div class="text-[18px] font-black text-white truncate">{{ l.short }}</div>
              <div class="text-sm font-black" :class="on(i) ? 'text-emerald-300' : 'text-slate-400'">الطبقة {{ i + 1 }} · {{ on(i) ? '● مفعّلة' : '○ متوقفة' }}</div>
            </div>
          </div>
        </div>

        <div class="absolute top-[240px] inset-x-0 flex flex-col items-center gap-[10px]">
          <div v-for="(a, i) in attacks" :key="a.text"
               class="w-[1150px] h-[56px] rounded-2xl border-2 border-slate-700 bg-slate-900/60 flex items-center gap-3 px-4"
               :class="on(a.layer) ? 'row-ok' : 'row-bad'" :style="{ '--d': `${0.8 + i * 0.8}s` }">
            <span class="text-3xl">{{ a.icon }}</span>
            <span class="flex-1 text-[20px] font-bold text-slate-100 truncate">{{ a.text }}</span>
            <span class="sl-pop px-3 py-1 rounded-xl text-[17px] font-black whitespace-nowrap"
                  :class="on(a.layer) ? 'bg-emerald-500/25 text-emerald-200' : 'bg-rose-500/25 text-rose-200'"
                  :style="{ '--d': `${0.8 + i * 0.8}s` }">
              {{ on(a.layer) ? `🛡️ أوقفته الطبقة ${a.layer + 1} (${layers[a.layer]!.short})` : '☠️ نجح الهجوم' }}
            </span>
          </div>
        </div>

        <div class="absolute top-[512px] inset-x-0 flex justify-center">
          <div class="sl-in sl-badge !text-[22px]" style="--d: 4.2s"
               :class="f === 3 ? 'border-emerald-400 text-emerald-100 bg-emerald-600/20' : 'border-rose-400 text-rose-100 bg-rose-600/20'">
            تم إيقاف {{ f === 3 ? 4 : 1 }} من 4 هجمات —
            {{ f === 3 ? 'كل طبقة غطّت ثغرة لا تغطيها الطبقات الأخرى' : 'لا يكفي الاعتماد على إجراء أمني واحد' }}
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import SlidesTitle from '~/components/slides/Title.vue'

const props = defineProps<{ f: number }>()

const titles = [
  { title: 'الدفاع في العمق', sub: 'Defense in Depth · طبقات متعددة من الحماية' },
  { title: 'طبقات أمان الشبكة', sub: 'يُجمع بين عدة إجراءات' },
  { title: 'هل يكفي جدار الحماية وحده؟', sub: 'أربع هجمات مختلفة على المؤسسة' },
  { title: 'مع كل الطبقات', sub: 'نفس الهجمات الأربع' },
]
const layers = [
  { icon: '🧱', name: 'مدخل الشبكة', short: 'جدار الحماية', action: 'منع الاتصال غير المصرح به باستخدام جدار الحماية',
    ring: 'border-rose-400 bg-rose-500/10', dot: 'bg-rose-400', text: 'text-rose-300', on: 'border-rose-400 bg-rose-600/25' },
  { icon: '🔒', name: 'مسار الاتصال', short: 'VPN', action: 'تشفير الاتصال باستخدام الشبكة الافتراضية الخاصة',
    ring: 'border-indigo-400 bg-indigo-500/10', dot: 'bg-indigo-400', text: 'text-indigo-300', on: 'border-indigo-400 bg-indigo-600/25' },
  { icon: '🏝️', name: 'وضع الخوادم', short: 'المنطقة المعزولة', action: 'فصل الخوادم المواجهة للجمهور عن الشبكة الداخلية باستخدام المنطقة المعزولة (DMZ)',
    ring: 'border-amber-400 bg-amber-500/10', dot: 'bg-amber-400', text: 'text-amber-300', on: 'border-amber-400 bg-amber-600/25' },
  { icon: '💻', name: 'الأجهزة الطرفية', short: 'مكافحة الفيروسات', action: 'تثبيت برنامج مكافحة الفيروسات والحفاظ على تحديث نظام التشغيل',
    ring: 'border-emerald-400 bg-emerald-500/10', dot: 'bg-emerald-400', text: 'text-emerald-300', on: 'border-emerald-400 bg-emerald-600/25' },
]
// each attack exploits the gap that exactly one layer closes
const attacks = [
  { icon: '🚪', text: 'محاولة اتصال غير مصرح به من الإنترنت بجهاز داخلي', layer: 0 },
  { icon: '📡', text: 'تنصّت على اتصال موظف يعمل من مقهى عبر Wi-Fi عامة', layer: 1 },
  { icon: '🌐', text: 'اختراق خادم الويب العام ثم محاولة الانتقال منه إلى الشبكة الداخلية', layer: 2 },
  { icon: '📎', text: 'ملف مصاب يصل إلى جهاز موظف داخل مرفق بريد إلكتروني', layer: 3 },
]
const on = (i: number) => props.f === 3 || i === 0

const CX = 400
const CY = 365
const R = [200, 158, 116, 74]
const ringStyle = (i: number) => ({
  left: `${CX - R[i]!}px`, top: `${CY - R[i]!}px`, width: `${R[i]! * 2}px`, height: `${R[i]! * 2}px`,
  '--d': `${0.2 + i * 0.25}s`,
})
</script>

<style scoped>
.ring-fail { animation: sl-pop .5s cubic-bezier(.3,1.6,.5,1) var(--d) forwards, fail .4s ease 2.8s forwards; }
@keyframes fail { to { border-style: dashed; border-color: #f43f5e; opacity: .45 } }
.ring-stop { animation: sl-pop .5s cubic-bezier(.3,1.6,.5,1) var(--d) forwards, stop .5s ease 3.6s forwards; }
@keyframes stop { to { box-shadow: 0 0 40px rgba(129,140,248,.9), inset 0 0 30px rgba(129,140,248,.4) } }

.d-bolt {
  position: absolute; left: 90px; width: 48px; height: 48px; border-radius: 9999px; z-index: 6;
  background: #e11d48; border: 3px solid #fecdd3; display: flex; align-items: center; justify-content: center;
  font-size: 1.4rem; opacity: 0; box-shadow: 0 0 30px rgba(244,63,94,.8);
  animation: dIn 1s cubic-bezier(.45,0,.25,1) 1.8s forwards, dThrough .8s ease-in 2.8s forwards, dBounce .6s ease-out 3.6s forwards;
}
/* outer ring edge at CX-200 = 200, next ring edge at CX-158 = 242 */
@keyframes dIn { from { left: 90px; opacity: 0 } 20% { opacity: 1 } to { left: 176px; opacity: 1 } }
@keyframes dThrough { from { left: 176px; opacity: 1 } to { left: 218px; opacity: 1 } }
@keyframes dBounce { from { left: 218px; opacity: 1 } to { left: 150px; opacity: 0 } }

.row-ok { animation: rowOk .4s ease var(--d) forwards; }
.row-bad { animation: rowBad .4s ease var(--d) forwards; }
@keyframes rowOk { to { border-color: #10b981; background: rgba(6,78,59,.55) } }
@keyframes rowBad { to { border-color: #f43f5e; background: rgba(136,19,55,.55) } }
</style>
