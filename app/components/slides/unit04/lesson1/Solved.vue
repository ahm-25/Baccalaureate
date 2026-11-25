<template>
  <!-- Solved example (book). f = 0 part (1): four statements marked ○ (true) or × (false) with the book's reasons,
       1 part (2): match each purpose (1-3) with the best medium (أ-ج), lines drawn one by one. -->
  <div class="absolute inset-0">
    <SlidesTitle icon="✏️" title="مثال محلول" :sub="f === 0 ? '(1) ضع ○ إذا كانت العبارة صحيحة أو × إذا كانت خاطئة' : '(2) اربط كل غرض بالوسيلة الأنسب'" />

    <Transition name="sl-frame" mode="out-in">
      <!-- ───── f0: true / false ───── -->
      <div v-if="f === 0" key="tf" class="absolute inset-0">
        <div class="absolute top-[152px] inset-x-0 flex flex-col items-center gap-3" dir="rtl">
          <div v-for="(r, i) in tf" :key="r.text" class="sl-in w-[1140px] h-[94px] rounded-3xl border-2 border-white/10 bg-slate-900/85 flex items-center gap-5 px-6"
               :style="{ '--d': `${0.3 + i * 0.35}s` }">
            <span class="w-11 h-11 rounded-full bg-slate-700 text-white text-xl font-black flex items-center justify-center shrink-0">{{ r.letter }}</span>
            <div class="flex-1">
              <p class="text-[21px] font-black text-white leading-snug">{{ r.text }}</p>
              <p class="sl-fade mt-0.5 text-[17px] font-bold leading-snug" :class="r.ok ? 'text-emerald-300' : 'text-rose-300'"
                 :style="{ '--d': `${2.6 + i * 2.4}s` }">{{ r.why }}</p>
            </div>
            <div class="relative w-[130px] h-[62px] shrink-0">
              <span class="sl-out absolute inset-0 rounded-2xl border-2 border-dashed border-slate-500 text-2xl font-black text-slate-500 flex items-center justify-center"
                    :style="{ '--d': `${2.4 + i * 2.4}s` }">؟</span>
              <span class="sl-pop absolute inset-0 rounded-2xl border-2 flex items-center justify-center gap-2 text-[20px] font-black whitespace-nowrap"
                    :class="r.ok ? 'border-emerald-400 bg-emerald-600/35 text-emerald-50' : 'border-rose-400 bg-rose-600/35 text-rose-50'"
                    :style="{ '--d': `${2.4 + i * 2.4}s` }">
                <span class="text-[30px] leading-none">{{ r.ok ? '○' : '×' }}</span>{{ r.ok ? 'صحيحة' : 'خاطئة' }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- ───── f1: match purposes to media ───── -->
      <div v-else key="match" class="absolute inset-0">
        <svg class="absolute inset-0 pointer-events-none" width="1280" height="720" viewBox="0 0 1280 720">
          <line v-for="(p, i) in purposes" :key="p.text" class="draw" x1="700" :y1="ys[i]" x2="380" :y2="ys[p.to]"
                :stroke="options[p.to]!.stroke" stroke-width="5" stroke-linecap="round"
                :style="{ animationDelay: `${2 + i * 2.5}s` }" />
        </svg>
        <!-- purposes (right) -->
        <div v-for="(p, i) in purposes" :key="p.text" class="sl-in absolute left-[700px] w-[520px] h-[116px] rounded-2xl border-2 border-amber-400/60 bg-slate-900/90 flex items-center gap-3 px-4"
             :style="{ top: `${ys[i]! - 58}px`, '--d': `${0.3 + i * 0.3}s` }" dir="rtl">
          <span class="w-9 h-9 shrink-0 rounded-full bg-amber-500 text-white text-[18px] font-black flex items-center justify-center">{{ i + 1 }}</span>
          <div class="flex-1">
            <p class="text-[19px] font-black text-white leading-snug">{{ p.text }}</p>
            <p class="sl-fade mt-0.5 text-[16px] font-bold text-emerald-300 leading-snug" :style="{ '--d': `${2.8 + i * 2.5}s` }">{{ p.why }}</p>
          </div>
          <div class="relative w-[54px] h-[54px] shrink-0">
            <span class="absolute inset-0 rounded-xl border-2 border-dashed border-slate-500"></span>
            <span class="sl-pop absolute inset-0 rounded-xl border-2 flex items-center justify-center text-[24px] font-black"
                  :class="options[p.to]!.cls" :style="{ '--d': `${2.6 + i * 2.5}s` }">{{ options[p.to]!.letter }}</span>
          </div>
        </div>
        <!-- options (left) -->
        <div v-for="(o, i) in options" :key="o.name" class="sl-in absolute left-[60px] w-[320px] h-[116px] rounded-2xl border-2 bg-slate-900/90 flex items-center gap-3 px-4"
             :class="o.border" :style="{ top: `${ys[i]! - 58}px`, '--d': `${0.5 + i * 0.3}s` }" dir="rtl">
          <span class="w-11 h-11 shrink-0 rounded-full border-2 flex items-center justify-center text-[22px] font-black" :class="o.cls">{{ o.letter }}</span>
          <span class="text-[34px] leading-none">{{ o.icon }}</span>
          <span class="text-[20px] font-black text-white leading-tight">{{ o.name }}</span>
        </div>
        <div class="absolute left-[60px] top-[536px] w-[320px] flex justify-center" dir="rtl">
          <span class="sl-fade text-[17px] font-black text-slate-400" style="--d: .9s">[الخيارات]</span>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import SlidesTitle from '~/components/slides/Title.vue'

defineProps<{ f: number }>()

const tf = [
  { letter: 'أ', ok: true, text: 'يمكن للموقع الإلكتروني عرض معلومات متنوعة مثل النص والصور والفيديو مجتمعة.',
    why: 'صحيحة كنقطة قوة للمواقع الإلكترونية.' },
  { letter: 'ب', ok: false, text: 'التلفزيون وسيلة تتيح التفاعل ثنائي الاتجاه مع المستخدمين.',
    why: 'التلفزيون عادةً وسيلة أحادية الاتجاه من المُرسِل إلى المُستقبِل.' },
  { letter: 'ج', ok: true, text: 'وسائل التواصل الاجتماعي وسيلة فعّالة للغاية في نشر المعلومات بسرعة.',
    why: 'وصف صحيح لخصائص وسائل التواصل الاجتماعي.' },
  { letter: 'د', ok: false, text: 'يمكن عادةً مشاهدة الموقع الإلكتروني حتى دون اتصال بالإنترنت.',
    why: 'يتطلب الموقع الإلكتروني اتصالًا بالإنترنت.' },
]

const ys = [214, 338, 462]
const options = [
  { letter: 'أ', icon: '📺', name: 'التلفزيون', stroke: '#38bdf8', border: 'border-sky-400/60', cls: 'border-sky-300 bg-sky-600/40 text-white' },
  { letter: 'ب', icon: '🌐', name: 'الموقع الإلكتروني', stroke: '#a78bfa', border: 'border-violet-400/60', cls: 'border-violet-300 bg-violet-600/40 text-white' },
  { letter: 'ج', icon: '💬', name: 'وسائل التواصل الاجتماعي', stroke: '#34d399', border: 'border-emerald-400/60', cls: 'border-emerald-300 bg-emerald-600/40 text-white' },
]
const purposes = [
  { text: 'إتاحة معلومات تفصيلية للاطلاع عليها في أي وقت', to: 1,
    why: 'يتيح الموقع الإلكتروني الاطلاع على معلومات تفصيلية في أي وقت.' },
  { text: 'جعل المستخدمين ينشرون المعلومات عن طريق التناقل الشفهي', to: 2,
    why: 'تنتشر وسائل التواصل الاجتماعي بسهولة عن طريق التناقل الشفهي.' },
  { text: 'إعلام عدد كبير من الناس في آنٍ واحد بالفيديو', to: 0,
    why: 'يصل التلفزيون إلى عدد كبير من الناس بالفيديو.' },
]
</script>

<style scoped>
.draw { stroke-dasharray: 460; stroke-dashoffset: 460; animation: draw .9s ease forwards; }
@keyframes draw { to { stroke-dashoffset: 0 } }
</style>
