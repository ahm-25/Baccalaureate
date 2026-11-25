<template>
  <!-- Choosing media by purpose (book section 3). f = 0 the purpose → media → reason table,
       1 stop & think (widest reach vs letting people respond), 2 combining media (book example: TV ad → website →
       social media), 3 the main idea (no single best medium; each one does what it does best). -->
  <div class="absolute inset-0">
    <SlidesTitle :icon="head.icon" :title="head.title" :sub="head.sub" />

    <Transition name="sl-frame" mode="out-in">
      <!-- ───── f0: purpose table ───── -->
      <div v-if="f === 0" key="table" class="absolute inset-0">
        <div class="absolute top-[148px] inset-x-0 flex justify-center" dir="rtl">
          <div class="w-[1136px] flex gap-3 text-[17px] font-black text-slate-400">
            <span class="w-[330px] text-center">🎯 الغرض</span>
            <span class="w-[50px]"></span>
            <span class="w-[320px] text-center">📡 أمثلة على الوسائط المناسبة</span>
            <span class="w-[400px] text-center">💡 السبب</span>
          </div>
        </div>
        <div class="absolute top-[182px] inset-x-0 flex flex-col items-center gap-[10px]" dir="rtl">
          <div v-for="(p, i) in purposes" :key="p.purpose" class="w-[1136px] h-[88px] flex items-stretch gap-3">
            <div class="sl-in w-[330px] rounded-2xl border-2 border-amber-400/60 bg-amber-950/40 flex items-center gap-3 px-4" :style="{ '--d': `${0.3 + i * 1.8}s` }">
              <span class="text-[32px] leading-none">{{ p.icon }}</span>
              <span class="text-[20px] font-black text-white leading-snug">{{ p.purpose }}</span>
            </div>
            <div class="w-[50px] flex items-center">
              <div class="sl-fade relative w-full h-[4px]" :style="{ '--d': `${0.8 + i * 1.8}s` }">
                <div class="absolute inset-0 sl-wire"></div>
                <span class="absolute -left-[6px] -top-[11px] text-[18px] leading-none text-slate-300">◀</span>
              </div>
            </div>
            <div class="sl-pop w-[320px] rounded-2xl border-2 border-sky-400/60 bg-sky-950/50 flex flex-wrap items-center justify-center content-center gap-1.5 px-3" :style="{ '--d': `${1 + i * 1.8}s` }">
              <span v-for="m in p.media" :key="m" class="px-2.5 py-1 rounded-lg bg-white/10 text-[16px] font-black text-white whitespace-nowrap">{{ m }}</span>
            </div>
            <div class="sl-fade w-[400px] rounded-2xl border-2 border-white/10 bg-slate-900/80 flex items-center px-4" :style="{ '--d': `${1.5 + i * 1.8}s` }">
              <p class="text-[17px] font-bold text-slate-200 leading-snug">{{ p.why }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- ───── f1: stop & think ───── -->
      <div v-else-if="f === 1" key="think" class="absolute inset-0">
        <div class="absolute top-[148px] inset-x-0 flex justify-center" dir="rtl">
          <div class="sl-in sl-card border-amber-400/70 w-[1100px] px-8 py-3 text-center text-[25px] font-black text-white leading-snug" style="--d: .2s">
            أي وسيلة قد تختارها للوصول إلى <span class="text-sky-300">أكبر عدد من الناس في آنٍ واحد</span> – وأيها <span class="text-emerald-300">لتتيح لهم الاستجابة إليك</span>؟
          </div>
        </div>
        <!-- branch A: widest reach (right) -->
        <div class="sl-in absolute left-[650px] top-[272px] w-[560px] h-[295px] rounded-3xl border-2 border-sky-400/60 bg-sky-950/40" style="--d: 1.6s">
          <div class="absolute top-[12px] inset-x-0 text-center text-[22px] font-black text-sky-200" dir="rtl">📢 للوصول إلى أكبر عدد في آنٍ واحد</div>
          <!-- broadcast -->
          <span class="wave absolute left-[245px] top-[62px] w-[70px] h-[70px] rounded-full border-[3px] border-sky-300" style="animation-delay: 2s"></span>
          <span class="wave absolute left-[245px] top-[62px] w-[70px] h-[70px] rounded-full border-[3px] border-sky-300" style="animation-delay: 2.7s"></span>
          <div class="absolute left-[245px] top-[62px] w-[70px] h-[70px] rounded-full bg-sky-600 flex items-center justify-center text-[36px]">📺</div>
          <span v-for="(x, k) in crowd" :key="k" class="sl-pop absolute top-[82px] text-[26px] leading-none" :style="{ left: `${x}px`, '--d': `${2.4 + k * 0.15}s` }">👤</span>
          <div class="absolute top-[150px] inset-x-0 flex justify-center gap-2" dir="rtl">
            <span class="sl-pop sl-badge !text-[19px] border-sky-300 bg-sky-600/30 text-white" style="--d: 3.4s">📺 التلفزيون</span>
            <span class="sl-pop sl-badge !text-[19px] border-sky-300 bg-sky-600/30 text-white" style="--d: 3.7s">📱 إعلانات وسائل التواصل</span>
          </div>
          <p class="sl-fade absolute top-[212px] inset-x-6 text-center text-[19px] font-bold text-slate-200 leading-snug" style="--d: 4.2s" dir="rtl">
            <span class="text-sky-300 font-black">انتشار واسع</span> — لكن التلفزيون عادةً اتصال باتجاه واحد.
          </p>
        </div>
        <!-- branch B: let people respond (left) -->
        <div class="sl-in absolute left-[70px] top-[272px] w-[560px] h-[295px] rounded-3xl border-2 border-emerald-400/60 bg-emerald-950/40" style="--d: 4.8s">
          <div class="absolute top-[12px] inset-x-0 text-center text-[22px] font-black text-emerald-200" dir="rtl">💬 لتتيح لهم الاستجابة إليك</div>
          <div class="absolute left-[350px] top-[62px] w-[70px] h-[70px] rounded-full bg-emerald-600 flex items-center justify-center text-[34px]">🌐</div>
          <div class="absolute left-[140px] top-[62px] w-[70px] h-[70px] rounded-full bg-slate-700 flex items-center justify-center text-[34px]">👥</div>
          <div class="absolute left-[212px] top-[96px] w-[136px] h-[3px] bg-slate-500/80"></div>
          <span class="go-l absolute top-[78px] text-[18px] leading-none" style="animation-delay: 5.4s">📄</span>
          <span class="go-r absolute top-[100px] text-[18px] leading-none" style="animation-delay: 6.2s">💬</span>
          <div class="absolute top-[150px] inset-x-0 flex justify-center gap-2" dir="rtl">
            <span class="sl-pop sl-badge !text-[19px] border-emerald-300 bg-emerald-600/30 text-white" style="--d: 6.4s">💬 وسائل التواصل الاجتماعي</span>
            <span class="sl-pop sl-badge !text-[19px] border-emerald-300 bg-emerald-600/30 text-white" style="--d: 6.7s">🌐 الموقع الإلكتروني</span>
          </div>
          <p class="sl-fade absolute top-[212px] inset-x-6 text-center text-[19px] font-bold text-slate-200 leading-snug" style="--d: 7.2s" dir="rtl">
            <span class="text-emerald-300 font-black">تفاعل ثنائي الاتجاه</span>: المشاركة والتعليقات والنماذج.
          </p>
        </div>
      </div>

      <!-- ───── f2: combining media ───── -->
      <div v-else-if="f === 2" key="mix" class="absolute inset-0">
        <div v-for="(n, i) in chain" :key="n.name" class="sl-pop absolute top-[180px] w-[260px] h-[170px] rounded-3xl border-2 flex flex-col items-center justify-center text-center px-3"
             :class="n.cls" :style="{ left: `${n.x}px`, '--d': `${0.4 + i * 1.6}s` }" dir="rtl">
          <span class="text-[50px] leading-none">{{ n.icon }}</span>
          <span class="mt-2 text-[22px] font-black text-white leading-tight">{{ n.name }}</span>
          <span class="mt-1 text-[16px] font-bold text-slate-300">{{ n.role }}</span>
        </div>
        <div v-for="(a, i) in arrows" :key="a.label" class="sl-fade absolute top-[226px] w-[160px] flex flex-col items-center" :style="{ left: `${a.x}px`, '--d': `${1.2 + i * 1.6}s` }" dir="rtl">
          <span class="text-[15px] font-black text-amber-200 whitespace-nowrap">{{ a.label }}</span>
          <div class="relative mt-2 w-[150px] h-[4px] sl-wire">
            <span class="absolute -left-[8px] -top-[11px] text-[18px] leading-none text-slate-300">◀</span>
          </div>
        </div>
        <span class="hop absolute top-[290px] text-[28px] leading-none" style="animation-delay: 4s">👀</span>
        <!-- word of mouth burst under social media -->
        <div class="absolute left-[90px] top-[366px] w-[260px] flex justify-center gap-1" dir="rtl">
          <span v-for="k in 6" :key="k" class="sl-pop text-[26px] leading-none" :style="{ '--d': `${5.4 + k * 0.2}s` }">👤</span>
        </div>
        <div class="absolute left-[90px] top-[402px] w-[260px] flex justify-center" dir="rtl">
          <span class="sl-fade text-[16px] font-black text-emerald-200" style="--d: 6.8s">يشاركونها وينشرونها 🔁</span>
        </div>
        <div class="absolute top-[452px] inset-x-0 flex justify-center" dir="rtl">
          <div class="sl-in sl-card border-white/15 w-[1100px] px-8 py-3 text-[21px] font-bold text-slate-100 leading-snug text-center" style="--d: 7.2s">
            على سبيل المثال، يوجّه <span class="text-rose-300 font-black">إعلان تلفزيوني</span> المشاهدين إلى <span class="text-violet-300 font-black">موقع إلكتروني</span>،
            ويشجع الموقع الإلكتروني على نشر المعلومات عبر <span class="text-emerald-300 font-black">وسائل التواصل الاجتماعي</span>.
          </div>
        </div>
      </div>

      <!-- ───── f3: the main idea ───── -->
      <div v-else key="idea" class="absolute inset-0">
        <div class="absolute top-[150px] inset-x-0 flex justify-center">
          <div class="sl-in relative h-[62px] px-8 rounded-2xl border-2 border-slate-500 bg-slate-800/80 flex items-center text-[26px] font-black text-slate-200" style="--d: .2s" dir="rtl">
            🏆 وسيلة واحدة هي الأفضل لكل شيء؟
            <span class="strike absolute left-[16px] right-[16px] top-[29px] h-[4px] rounded bg-rose-500"></span>
            <span class="sl-pop absolute -left-[34px] -top-[20px] text-[46px] leading-none" style="--d: 1.6s">❌</span>
          </div>
        </div>
        <p class="sl-in absolute top-[232px] inset-x-0 text-center text-[24px] font-black text-white" style="--d: 2.2s" dir="rtl">
          اختر بناءً على <span class="sl-hl-amber">الغرض والجمهور</span>، واجمع بين الوسائط:
        </p>
        <div class="absolute top-[296px] inset-x-0 flex justify-center gap-6" dir="rtl">
          <div v-for="(r, i) in roles" :key="r.goal" class="sl-in w-[350px] h-[190px] rounded-3xl border-2 flex flex-col items-center justify-center text-center px-4"
               :class="r.cls" :style="{ '--d': `${3 + i * 1.2}s` }">
            <span class="text-[40px] leading-none">{{ r.icon }}</span>
            <span class="mt-2 text-[20px] font-black text-white leading-tight">{{ r.media }}</span>
            <span class="mt-2 px-4 py-1 rounded-full text-[19px] font-black whitespace-nowrap" :class="r.pill">← {{ r.goal }}</span>
            <span class="mt-2 text-[22px] leading-none">{{ r.visual }}</span>
          </div>
        </div>
        <div class="absolute top-[500px] inset-x-0 flex justify-center" dir="rtl">
          <span class="sl-pop sl-badge !text-[24px] border-emerald-400 bg-emerald-600/30 text-emerald-50" style="--d: 6.8s">✓ بحيث تقوم كل وسيلة بما تُجيده</span>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import SlidesTitle from '~/components/slides/Title.vue'

const props = defineProps<{ f: number }>()

const purposes = [
  { icon: '📢', purpose: 'إعلام عدد كبير من الناس في آنٍ واحد', media: ['التلفزيون', 'إعلانات وسائل التواصل الاجتماعي'], why: 'انتشار واسع.' },
  { icon: '📄', purpose: 'تقديم معلومات تفصيلية', media: ['الموقع الإلكتروني'], why: 'يمكن للموقع تقديم كمية كبيرة من المعلومات وتنظيمها في صفحات وأقسام وتحديثها.' },
  { icon: '✉️', purpose: 'إيصال المعلومات مباشرة لأشخاص محددين', media: ['البريد الإلكتروني', 'الرسائل المباشرة'], why: 'يمكن التوصيل بشكل فردي.' },
  { icon: '🔁', purpose: 'الانتشار عن طريق التناقل الشفهي', media: ['وسائل التواصل الاجتماعي'], why: 'يمكن للمستخدمين مشاركة المعلومات ونشرها طوعًا.' },
]

const crowd = [30, 80, 130, 400, 450, 500]

const chain = [
  { icon: '📺', name: 'إعلان تلفزيوني', role: 'يصل إلى جمهور كبير', x: 930, cls: 'border-rose-400/70 bg-rose-950/40' },
  { icon: '🌐', name: 'موقع إلكتروني', role: 'التفاصيل كاملة', x: 510, cls: 'border-violet-400/70 bg-violet-950/40' },
  { icon: '💬', name: 'وسائل التواصل الاجتماعي', role: 'نشر سريع ومشاركة', x: 90, cls: 'border-emerald-400/70 bg-emerald-950/40' },
]
const arrows = [
  { label: 'يوجّه المشاهدين إلى', x: 770 },
  { label: 'يشجع على النشر عبر', x: 350 },
]

const roles = [
  { icon: '📺📱', media: 'التلفزيون أو وسائل التواصل الاجتماعي', goal: 'لانتشار واسع', visual: '👥👥👥👥',
    cls: 'border-sky-400/60 bg-sky-950/45', pill: 'bg-sky-500/30 text-sky-100' },
  { icon: '🌐', media: 'موقع إلكتروني', goal: 'للتعمق', visual: '📄📄📄',
    cls: 'border-violet-400/60 bg-violet-950/45', pill: 'bg-violet-500/30 text-violet-100' },
  { icon: '✉️', media: 'البريد الإلكتروني', goal: 'للأفراد', visual: '👤',
    cls: 'border-amber-400/60 bg-amber-950/40', pill: 'bg-amber-500/30 text-amber-100' },
]

const head = computed(() => {
  if (props.f === 0) return { icon: '🎯', title: 'اختيار الوسائط وفقًا للغرض', sub: 'اختر الوسيلة الأنسب وفقًا للغرض والجمهور المستهدف' }
  if (props.f === 1) return { icon: '💡', title: 'توقف وفكر', sub: '' }
  if (props.f === 2) return { icon: '🧩', title: 'الجمع بين الوسائط', sub: 'في الواقع العملي، غالبًا ما تُستخدم عدة وسائط معًا' }
  return { icon: '⭐', title: 'الفكرة الرئيسة', sub: 'لا توجد وسيلة واحدة هي الأفضل لكل شيء' }
})
</script>

<style scoped>
.wave { opacity: 0; animation: wave 1.4s ease-out infinite; }
@keyframes wave { 0% { opacity: .9; transform: scale(1) } 100% { opacity: 0; transform: scale(3) } }
.go-l { left: 330px; opacity: 0; animation: go-l 2s linear infinite; }
@keyframes go-l { 0% { left: 330px; opacity: 0 } 10% { opacity: 1 } 90% { opacity: 1 } 100% { left: 210px; opacity: 0 } }
.go-r { left: 210px; opacity: 0; animation: go-r 2s linear infinite; }
@keyframes go-r { 0% { left: 210px; opacity: 0 } 10% { opacity: 1 } 90% { opacity: 1 } 100% { left: 330px; opacity: 0 } }
.hop { left: 900px; opacity: 0; animation: hop 4.5s ease-in-out infinite; }
@keyframes hop {
  0% { left: 900px; opacity: 0 } 6% { opacity: 1 } 34% { left: 780px; opacity: 1 } 40% { left: 780px; opacity: 0 }
  50% { left: 480px; opacity: 0 } 56% { opacity: 1 } 84% { left: 360px; opacity: 1 } 90%, 100% { left: 360px; opacity: 0 }
}
.strike { transform-origin: right; transform: scaleX(0); animation: strike .5s ease 1.2s forwards; }
@keyframes strike { to { transform: scaleX(1) } }
</style>
