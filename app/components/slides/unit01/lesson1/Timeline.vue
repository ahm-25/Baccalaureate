<template>
  <!-- History of IT (the book's table of five periods). f = 0..4 one period per frame, the timeline on top
       filling right to left; f = 5 all periods together: devices smaller and more connected + the big idea. -->
  <div class="absolute inset-0">
    <SlidesTitle :icon="f < 5 ? '🕰️' : '⭐'" :title="f < 5 ? 'تاريخ تكنولوجيا المعلومات (IT)' : 'الفكرة الرئيسة'"
                 :sub="f < 5 ? `المرحلة ${f + 1} من 5: ${periods[f]!.when}` : 'أجهزة أصغر حجمًا وأكثر ترابطًا'" />

    <!-- timeline (kept mounted so only the colours move) -->
    <div class="absolute top-[194px] h-[6px] rounded-full bg-slate-700" :style="{ left: `${cx[4]}px`, width: `${cx[0]! - cx[4]!}px` }"></div>
    <div class="absolute top-[194px] h-[6px] rounded-full bg-gradient-to-l from-amber-300 to-emerald-400 transition-all duration-700"
         :style="{ left: `${cx[Math.min(f, 4)]}px`, width: `${cx[0]! - cx[Math.min(f, 4)]!}px` }"></div>
    <div v-for="(p, i) in periods" :key="p.when" class="absolute top-[150px] w-[200px] flex flex-col items-center" :style="{ left: `${cx[i]! - 100}px` }">
      <div class="w-[96px] h-[96px] rounded-full border-4 flex items-center justify-center text-[42px] transition-all duration-500"
           :class="i === f ? [p.ring, 'scale-110 bg-slate-900'] : i < f || f === 5 ? 'border-emerald-500/70 bg-slate-900' : 'border-slate-700 bg-slate-900/80 grayscale opacity-50'">
        {{ p.icon }}
      </div>
      <div class="mt-2 text-center text-[17px] font-black leading-tight transition-colors duration-500" dir="rtl"
           :class="i === f ? 'text-white' : i < f || f === 5 ? 'text-emerald-200' : 'text-slate-500'">{{ p.when }}</div>
    </div>

    <Transition name="sl-frame" mode="out-in">
      <!-- ───── f0..f4: one period ───── -->
      <div v-if="f < 5" :key="`p-${f}`" class="absolute inset-0">
        <!-- the device of the period -->
        <div class="sl-in absolute left-[60px] top-[318px] w-[500px] h-[250px] rounded-3xl border-2 flex flex-col items-center justify-center text-center"
             :class="cur.box" style="--d: .2s" dir="rtl">
          <div class="flex items-end justify-center gap-2 leading-none">
            <span v-for="(g, gi) in cur.glyphs" :key="gi" class="sl-pop" :style="{ fontSize: `${cur.size}px`, '--d': `${0.5 + gi * 0.2}s` }">{{ g }}</span>
          </div>
          <p class="sl-in mt-4 text-[20px] font-black text-white leading-snug px-6" style="--d: 1.4s">{{ cur.caption }}</p>
        </div>
        <!-- book table row -->
        <div class="absolute left-[600px] top-[318px] w-[620px] flex flex-col gap-3" dir="rtl">
          <div class="sl-in rounded-3xl border-2 border-white/15 bg-slate-900/85 px-6 py-3" style="--d: .8s">
            <div class="text-[17px] font-black text-sky-300 mb-1">⚙️ التقنيات والأحداث الرئيسية</div>
            <p class="text-[21px] font-black text-white leading-snug">{{ cur.tech }}</p>
          </div>
          <div class="sl-in rounded-3xl border-2 border-amber-400/60 bg-amber-950/35 px-6 py-3" style="--d: 2.4s">
            <div class="text-[17px] font-black text-amber-300 mb-1">👥 التأثير على المجتمع</div>
            <p class="text-[21px] font-black text-white leading-snug">{{ cur.impact }}</p>
          </div>
        </div>
      </div>

      <!-- ───── f5: smaller and more connected ───── -->
      <div v-else key="all" class="absolute inset-0" dir="rtl">
        <div class="absolute top-[300px] inset-x-0 flex justify-center">
          <div class="sl-in flex items-center gap-3 rounded-full border-2 border-sky-400/50 bg-sky-950/40 px-8 py-2.5 text-[21px] font-black text-sky-100" style="--d: .4s">
            🏢 كانت تملأ غرفة <span class="text-sky-400">◀━━━━━━━━</span> ☁️📱 أصغر حجمًا وأكثر ترابطًا
          </div>
        </div>
        <div class="absolute top-[380px] inset-x-0 flex justify-center">
          <div class="sl-in sl-card border-amber-400/70 w-[1060px] px-10 py-6 text-center" style="--d: 1.4s">
            <span class="inline-block mb-3 px-5 py-1 rounded-full bg-amber-400 text-amber-950 text-[19px] font-black">⭐ الفكرة الرئيسة</span>
            <p class="text-[30px] font-black text-white leading-snug">
              في كل مرحلة أضافت تكنولوجيا المعلومات <span class="text-sky-300">جهازًا جديدًا</span>،
              وغيّرت معه <span class="sl-hl-amber">طريقة تواصل المجتمع وعمله وتجارته</span>.
            </p>
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

const cx = [1110, 880, 650, 420, 190] // node centres, earliest period on the right

// the book's table (lesson 1-1, section 1)
const periods = [
  { when: 'الأربعينيات – الستينيات', icon: '🏢', ring: 'border-slate-300', box: 'border-slate-400/60 bg-slate-800/60',
    glyphs: ['🗄️', '🗄️', '🗄️', '🗄️'], size: 70, caption: 'كانت الحواسب الأولى تملأ غرفة بأكملها.',
    tech: 'ظهور الحواسيب الإلكترونية (ومنها ENIAC) واستخدام الصمامات المفرغة', impact: 'استُخدم أساسًا للأغراض العسكرية والحسابات العلمية' },
  { when: 'السبعينيات – الثمانينيات', icon: '🖥️', ring: 'border-amber-300', box: 'border-amber-400/60 bg-amber-950/40',
    glyphs: ['🖥️', '⌨️'], size: 90, caption: 'حاسب شخصي على مكتب كل فرد.',
    tech: 'انتشار الحواسب الشخصية (PCs)', impact: 'بداية استخدام الأفراد للحاسب' },
  { when: 'التسعينيات', icon: '🌐', ring: 'border-sky-300', box: 'border-sky-400/60 bg-sky-950/45',
    glyphs: ['🌐', '✉️'], size: 90, caption: 'الويب والبريد الإلكتروني يصلان العالم.',
    tech: 'إتاحة الإنترنت للاستخدام التجاري؛ ظهور الويب', impact: 'انتشار الوصول العالمي إلى المعلومات والبريد الإلكتروني' },
  { when: 'العقد الأول من الألفية', icon: '📱', ring: 'border-violet-300', box: 'border-violet-400/60 bg-violet-950/45',
    glyphs: ['📱'], size: 110, caption: 'الإنترنت في الجيب.',
    tech: 'ظهور الهواتف الذكية (آيفون وغيره)', impact: 'انتشار سريع وواسع للإنترنت عبر الهواتف المحمولة' },
  { when: 'من العقد الثاني من الألفية فصاعدًا', icon: '☁️', ring: 'border-emerald-300', box: 'border-emerald-400/60 bg-emerald-950/40',
    glyphs: ['☁️', '🤖', '📊'], size: 80, caption: 'هذه هي «السحابة»: أجهزة حقيقية في مكان حقيقي.',
    tech: 'انتشار الحوسبة السحابية', impact: 'تحليل البيانات الضخمة والذكاء الاصطناعي؛ انتشار تقديم موارد تكنولوجيا المعلومات في صورة خدمات عبر الإنترنت' },
]

const cur = computed(() => periods[Math.min(props.f, 4)]!)
</script>
