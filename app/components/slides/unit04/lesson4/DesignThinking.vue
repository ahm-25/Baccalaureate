<template>
  <!-- Design thinking. f = 0 definition + the book's table of five modes,
       1 point (2): after the test you may go back to Empathize or Define (back and forth, not one direction). -->
  <div class="absolute inset-0">
    <SlidesTitle :icon="f === 0 ? '💡' : '↩️'" :title="f === 0 ? 'التفكير التصميمي' : 'ذهابًا وإيابًا… لا في اتجاه واحد'"
                 :sub="f === 0 ? '2. الحل من منظور المستخدم عبر خمس خطوات' : 'نتائج الاختبار قد تعيدنا إلى مرحلة سابقة'" />

    <Transition name="sl-frame" mode="out-in">
      <!-- ───── f0: definition + five modes ───── -->
      <div v-if="f === 0" key="def" class="absolute inset-0" dir="rtl">
        <div class="absolute top-[146px] inset-x-0 flex justify-center">
          <div class="sl-in w-[1120px] rounded-2xl border-2 border-amber-400/60 bg-amber-950/35 px-6 py-3 text-center" style="--d: .2s">
            <p class="text-[21px] font-bold text-white leading-snug">
              <span class="text-amber-300 font-black">التفكير التصميمي</span> <span dir="ltr" class="inline-block font-mono text-[18px] text-slate-300">(Design Thinking)</span>:
              طريقة مرنة لفهم المشكلة من منظور المستخدم وتجربة حلول ثم تحسينها.
            </p>
            <p class="sl-fade mt-1 text-[18px] font-bold text-slate-300" style="--d: 1s">يستخدم هذا الدرس نموذجًا شائعًا من خمسة أنماط، ويمكن الرجوع بينها بدل اتباع مسار خطي صارم.</p>
          </div>
        </div>
        <div class="absolute top-[268px] inset-x-0 flex justify-center items-stretch">
          <template v-for="(m, i) in modes" :key="m.en">
            <div class="sl-in w-[200px] h-[280px] rounded-3xl border-2 px-3 pt-3 flex flex-col items-center text-center" :class="m.cls"
                 :style="{ '--d': `${1.6 + i * 1.1}s` }">
              <span class="text-[44px] leading-none">{{ m.icon }}</span>
              <div class="mt-2 text-[20px] font-black text-white whitespace-nowrap">{{ circled[i] }} {{ m.ar }}</div>
              <div class="text-[15px] font-bold font-mono text-slate-400" dir="ltr">({{ m.en }})</div>
              <p class="mt-2 text-[17px] font-bold text-slate-100 leading-snug">{{ m.desc }}</p>
            </div>
            <div v-if="i < modes.length - 1" class="sl-fade w-[30px] flex items-center justify-center text-[26px] font-black text-slate-500"
                 :style="{ '--d': `${2.1 + i * 1.1}s` }">←</div>
          </template>
        </div>
      </div>

      <!-- ───── f1: back and forth ───── -->
      <div v-else key="loop" class="absolute inset-0">
        <div class="absolute top-[146px] inset-x-0 flex justify-center" dir="rtl">
          <div class="sl-in rounded-2xl border-2 border-white/15 bg-slate-900/80 px-7 py-2.5 text-[22px] font-bold text-slate-100" style="--d: .2s">
            بناءً على نتائج <span class="text-emerald-300 font-black">الاختبار</span>، قد يعود المرء إلى مرحلة <span class="text-sky-300 font-black">التعاطف</span> أو <span class="text-indigo-300 font-black">التعريف</span>.
          </div>
        </div>

        <!-- forward path -->
        <div class="fwd absolute top-[388px] w-[24px] h-[24px] rounded-full bg-amber-300 shadow-[0_0_24px_rgba(252,211,77,.9)]"></div>
        <div v-for="(x, i) in [970, 750, 530, 310]" :key="x" class="sl-fade absolute top-[380px] w-[40px] text-center text-[28px] font-black text-slate-500"
             :style="{ left: `${x - 20}px`, '--d': `${0.8 + i * 0.6}s` }">←</div>
        <div v-for="(m, i) in modes" :key="m.en" class="sl-pop absolute top-[345px] w-[150px] flex flex-col items-center" :style="{ left: `${nodeX[i]! - 75}px`, '--d': `${0.5 + i * 0.6}s` }">
          <div class="w-[110px] h-[110px] rounded-full border-4 flex items-center justify-center text-[48px]" :class="m.node">{{ m.icon }}</div>
          <div class="mt-1 text-[20px] font-black text-white whitespace-nowrap" dir="rtl">{{ circled[i] }} {{ m.ar }}</div>
        </div>

        <!-- test reveals something new -->
        <div class="sl-pop absolute left-[45px] top-[282px] w-[200px] flex justify-center" style="--d: 3.8s" dir="rtl">
          <span class="sl-badge !text-[16px] border-emerald-400 bg-emerald-600/30 text-emerald-50">🧪 نتيجة جديدة!</span>
        </div>

        <!-- back arcs -->
        <svg class="absolute inset-0 w-[1280px] h-[720px] pointer-events-none" viewBox="0 0 1280 720">
          <path class="arc" style="animation-delay: 4.6s" d="M 200 345 Q 530 215 860 345" pathLength="1" fill="none" stroke="#a5b4fc" stroke-width="4" stroke-dasharray="1" stroke-dashoffset="1" />
          <path class="arc" style="animation-delay: 5.6s" d="M 200 345 Q 640 105 1080 345" pathLength="1" fill="none" stroke="#7dd3fc" stroke-width="4" stroke-dasharray="1" stroke-dashoffset="1" />
          <polygon class="sl-fade" style="--d: 5.4s" points="860,345 846.6,329.9 840,346.7" fill="#a5b4fc" />
          <polygon class="sl-fade" style="--d: 6.4s" points="1080,345 1068.5,328.5 1059.9,344.3" fill="#7dd3fc" />
        </svg>
        <div class="sl-pop absolute left-[430px] top-[262px] w-[200px] flex justify-center" style="--d: 5.4s" dir="rtl">
          <span class="sl-badge !text-[17px] border-indigo-300 bg-indigo-900 text-indigo-50">↩ عُد إلى التعريف</span>
        </div>
        <div class="sl-pop absolute left-[540px] top-[207px] w-[200px] flex justify-center" style="--d: 6.4s" dir="rtl">
          <span class="sl-badge !text-[17px] border-sky-300 bg-sky-900 text-sky-50">↩ عُد إلى التعاطف</span>
        </div>

        <!-- conclusion -->
        <div class="absolute top-[505px] inset-x-0 flex justify-center items-center gap-4" dir="rtl">
          <span class="sl-in sl-badge !text-[19px] border-rose-400/70 bg-rose-600/20 text-rose-100" style="--d: 7.2s">✗ ليس مسارًا خطيًا صارمًا</span>
          <span class="sl-pop sl-badge !text-[22px] border-amber-300 bg-amber-500/30 text-white" style="--d: 7.8s">🔁 يسير التحسين ذهابًا وإيابًا، لا في اتجاه واحد</span>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import SlidesTitle from '~/components/slides/Title.vue'

defineProps<{ f: number }>()

const circled = ['①', '②', '③', '④', '⑤']
const nodeX = [1080, 860, 640, 420, 200]
const modes = [
  { icon: '👂', ar: 'التعاطف', en: 'Empathize', cls: 'border-sky-400/70 bg-sky-950/50', node: 'border-sky-400 bg-sky-950',
    desc: 'تعرّف إلى تجربة المستخدم واحتياجاته من خلال الملاحظة والأسئلة والبحث المناسب' },
  { icon: '🎯', ar: 'التعريف', en: 'Define', cls: 'border-indigo-400/70 bg-indigo-950/50', node: 'border-indigo-400 bg-indigo-950',
    desc: 'بناءً على المعلومات المستخلصة من التعاطف، وضّح المشكلة المراد حلها' },
  { icon: '💡', ar: 'توليد الأفكار', en: 'Ideate', cls: 'border-amber-400/70 bg-amber-950/40', node: 'border-amber-400 bg-amber-950',
    desc: 'ولّد أفكارًا كثيرة لحل المشكلة' },
  { icon: '🧩', ar: 'النموذج الأولي', en: 'Prototype', cls: 'border-violet-400/70 bg-violet-950/50', node: 'border-violet-400 bg-violet-950',
    desc: 'أنشئ نموذجًا أوليًا بسرعة بناءً على الأفكار' },
  { icon: '🧪', ar: 'الاختبار', en: 'Test', cls: 'border-emerald-400/70 bg-emerald-950/45', node: 'border-emerald-400 bg-emerald-950',
    desc: 'دع المستخدمين يجربون النموذج، ثم اجمع ملاحظاتهم وراقب ما يحدث' },
]
</script>

<style scoped>
/* dot walks Empathize → Test once */
.fwd { left: 1068px; opacity: 0; animation: fwd 3s ease-in-out .6s forwards; }
@keyframes fwd { 0% { left: 1068px; opacity: 1 } 95% { left: 188px; opacity: 1 } 100% { left: 188px; opacity: 0 } }
.arc { animation: draw 1s ease-out forwards; }
@keyframes draw { to { stroke-dashoffset: 0 } }
</style>
