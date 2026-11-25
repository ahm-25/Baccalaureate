<template>
  <!-- Solved example (book p. 90). f = 0 part (1): ○ / × for statements أ – د, 1 part (2): match actions 1 – 5 to the five
       design-thinking modes أ – هـ. Answers are revealed one by one. -->
  <div class="absolute inset-0">
    <SlidesTitle icon="✏️" title="مثال محلول" :sub="f === 0 ? '(1) ضع علامة ○ أو × أمام كل عبارة حسب صحتها' : '(2) أي خطوة من خطوات التفكير التصميمي الخمس تقابل كل إجراء؟'" />

    <Transition name="sl-frame" mode="out-in">
      <!-- ───── f0: true / false ───── -->
      <div v-if="f === 0" key="tf" class="absolute inset-0" dir="rtl">
        <div class="absolute top-[150px] inset-x-0 flex flex-col items-center gap-2.5">
          <div v-for="(q, i) in statements" :key="q.text" class="sl-in w-[1140px] rounded-2xl border-2 border-white/10 bg-slate-900/85 flex items-center gap-4 px-5 py-2.5"
               :style="{ '--d': `${0.3 + i * 0.3}s` }">
            <span class="w-10 h-10 rounded-full bg-slate-700 text-white text-[20px] font-black flex items-center justify-center shrink-0">{{ letters[i] }}</span>
            <div class="flex-1">
              <p class="text-[20px] font-bold text-slate-100 leading-snug" v-html="q.text"></p>
              <p class="sl-fade mt-0.5 text-[17px] font-bold leading-snug" :class="q.ok ? 'text-emerald-300' : 'text-rose-300'"
                 :style="{ '--d': `${2.4 + i * 1.8}s` }">← {{ q.why }}</p>
            </div>
            <div class="relative w-[64px] h-[56px] shrink-0">
              <span class="sl-out absolute inset-0 rounded-2xl border-2 border-dashed border-slate-500 text-[24px] font-black text-slate-500 flex items-center justify-center"
                    :style="{ '--d': `${2.4 + i * 1.8}s` }">؟</span>
              <span class="sl-pop absolute inset-0 rounded-2xl border-2 text-[32px] font-black flex items-center justify-center"
                    :class="q.ok ? 'border-emerald-400 bg-emerald-600/40 text-emerald-50' : 'border-rose-400 bg-rose-600/40 text-rose-50'"
                    :style="{ '--d': `${2.4 + i * 1.8}s` }">{{ q.ok ? '○' : '×' }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- ───── f1: match to the five modes ───── -->
      <div v-else key="match" class="absolute inset-0" dir="rtl">
        <div class="absolute top-[146px] inset-x-0 flex justify-center gap-2">
          <span v-for="(m, i) in modes" :key="m.ar" class="sl-pop sl-badge !text-[18px]" :class="m.cls" :style="{ '--d': `${0.2 + i * 0.15}s` }">
            {{ m.l }} · {{ m.ar }}
          </span>
        </div>
        <div class="absolute top-[204px] inset-x-0 flex flex-col items-center gap-2.5">
          <div v-for="(a, i) in actions" :key="a" class="sl-in w-[1000px] h-[62px] rounded-2xl border-2 border-white/10 bg-slate-900/85 flex items-center gap-4 px-5"
               :style="{ '--d': `${1 + i * 0.25}s` }">
            <span class="w-10 h-10 rounded-full bg-slate-700 text-white text-[20px] font-black flex items-center justify-center shrink-0">{{ i + 1 }}</span>
            <p class="flex-1 text-[21px] font-bold text-slate-100">{{ a }}</p>
            <div class="relative w-[250px] h-[46px] shrink-0">
              <span class="sl-out absolute inset-0 rounded-xl border-2 border-dashed border-slate-500 text-[22px] font-black text-slate-500 flex items-center justify-center"
                    :style="{ '--d': `${2.8 + i * 1.3}s` }">؟</span>
              <span class="sl-pop absolute inset-0 rounded-xl border-2 text-[20px] font-black flex items-center justify-center whitespace-nowrap" :class="modes[i]!.cls"
                    :style="{ '--d': `${2.8 + i * 1.3}s` }">{{ modes[i]!.icon }} {{ modes[i]!.l }} · {{ modes[i]!.ar }}</span>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import SlidesTitle from '~/components/slides/Title.vue'

defineProps<{ f: number }>()

const letters = ['أ', 'ب', 'ج', 'د']
const statements = [
  { ok: true, why: 'تعريف صحيح لدورة PDCA.',
    text: 'دورة <span dir="ltr" class="inline-block">PDCA</span> طريقة تكرر الخطوات الأربع خطّط ← نفّذ ← تحقّق ← تصرّف.' },
  { ok: false, why: 'التفكير التصميمي طريقة تفكير من منظور المستخدم.',
    text: 'التفكير التصميمي طريقة تفكير تحل المشكلات من منظور المطوّر.' },
  { ok: true, why: 'إذا كان الهدف عزل أثر تغيير واحد، فاجعل الفرق بين النسختين واضحًا ومحددًا.',
    text: 'في اختبار <span dir="ltr" class="inline-block">A/B</span>، إذا كان الهدف عزل أثر تغيير واحد، فيُجعل الفرق بين النسختين واضحًا ومحددًا؛ وإذا تغيّرت عدة عناصر معًا فإن الاختبار يقيس أثر الحزمة ولا يحدد أثر كل عنصر منفردًا.' },
  { ok: false, why: 'دورة PDCA ذات معنى عندما تُكرَّر.',
    text: 'دورة <span dir="ltr" class="inline-block">PDCA</span> طريقة تكتمل بعد تنفيذ واحد.' },
]

const modes = [
  { l: 'أ', ar: 'التعاطف', icon: '👂', cls: 'border-sky-400 bg-sky-600/30 text-sky-50' },
  { l: 'ب', ar: 'التعريف', icon: '🎯', cls: 'border-indigo-400 bg-indigo-600/30 text-indigo-50' },
  { l: 'ج', ar: 'توليد الأفكار', icon: '💡', cls: 'border-amber-400 bg-amber-600/30 text-amber-50' },
  { l: 'د', ar: 'النموذج الأولي', icon: '🧩', cls: 'border-violet-400 bg-violet-600/30 text-violet-50' },
  { l: 'هـ', ar: 'الاختبار', icon: '🧪', cls: 'border-emerald-400 bg-emerald-600/30 text-emerald-50' },
]
const actions = [
  'فهم تحديات المستخدم واحتياجاته.',
  'توضيح المشكلة المراد حلها.',
  'توليد أفكار كثيرة.',
  'إنشاء نموذج أولي بسرعة.',
  'جعل المستخدمين يجربون النموذج الأولي.',
]
</script>
