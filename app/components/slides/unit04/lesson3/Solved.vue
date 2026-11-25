<template>
  <!-- Solved example from the book. f = 0 part (1): mark each statement ○ or × with the book's reasons,
       1 part (2): match each description to the right metric. -->
  <div class="absolute inset-0">
    <SlidesTitle icon="✏️" title="مثال محلول" :sub="f === 0 ? '(1) ضع علامة ○ أو × أمام كل عبارة (أ – د) حسب صحتها.' : '(2) طابق كل وصف بالمؤشر الأنسب من الخيارات (أ – ج).'" />

    <Transition name="sl-frame" mode="out-in">
      <!-- ───── f0: true / false ───── -->
      <div v-if="f === 0" key="tf" class="absolute inset-0">
        <div class="absolute top-[148px] inset-x-0 flex flex-col items-center gap-2.5" dir="rtl">
          <div v-for="(s, i) in statements" :key="s.text" class="sl-in w-[1140px] h-[94px] rounded-3xl border-2 border-white/10 bg-slate-900/85 flex items-center gap-4 px-5"
               :style="{ '--d': `${0.3 + i * 0.4}s` }">
            <span class="w-11 h-11 rounded-full bg-slate-700 text-white text-xl font-black flex items-center justify-center shrink-0">{{ letters[i] }}</span>
            <div class="flex-1">
              <p class="text-[20px] font-black text-white leading-snug">{{ s.text }}</p>
              <p class="sl-in text-[16px] font-bold leading-snug" :class="s.ok ? 'text-emerald-300' : 'text-rose-300'"
                 :style="{ '--d': `${2.6 + i * 1.6}s` }">{{ s.why }}</p>
            </div>
            <div class="relative w-[68px] h-[60px] shrink-0">
              <span class="sl-out absolute inset-0 rounded-2xl border-2 border-dashed border-slate-500 text-2xl font-black text-slate-500 flex items-center justify-center"
                    :style="{ '--d': `${2.2 + i * 1.6}s` }">؟</span>
              <span class="sl-pop absolute inset-0 rounded-2xl border-2 text-[34px] font-black flex items-center justify-center"
                    :class="s.ok ? 'border-emerald-300 bg-emerald-600 text-white' : 'border-rose-300 bg-rose-600 text-white'"
                    :style="{ '--d': `${2.2 + i * 1.6}s` }">{{ s.ok ? '○' : '×' }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- ───── f1: matching ───── -->
      <div v-else key="match" class="absolute inset-0">
        <div class="absolute top-[150px] inset-x-0 flex justify-center" dir="rtl">
          <div class="sl-fade flex items-center gap-3 rounded-2xl border-2 border-white/15 bg-slate-900/85 px-5 py-2" style="--d: .2s">
            <span class="text-[19px] font-black text-slate-300">[الخيارات]</span>
            <span v-for="o in options" :key="o.letter" class="sl-badge !text-[19px]" :class="o.cls">{{ o.letter }} {{ o.name }}</span>
          </div>
        </div>
        <div class="absolute top-[226px] inset-x-0 flex flex-col items-center gap-4" dir="rtl">
          <div v-for="(d, i) in descs" :key="d.text" class="sl-in w-[1140px] h-[92px] rounded-3xl border-2 border-white/10 bg-slate-900/85 flex items-center gap-4 px-5"
               :style="{ '--d': `${0.6 + i * 1.8}s` }">
            <span class="w-11 h-11 rounded-full bg-slate-700 text-white text-xl font-black flex items-center justify-center shrink-0">{{ i + 1 }}</span>
            <div class="w-[600px] shrink-0">
              <p class="text-[21px] font-black text-white leading-snug">{{ d.text }}</p>
              <p v-if="d.note" class="sl-in text-[16px] font-bold text-rose-200 leading-snug" :style="{ '--d': `${1.8 + i * 1.8}s` }">{{ d.note }}</p>
            </div>
            <span class="flex-1 h-[3px] sl-wire"></span>
            <span class="sl-pop w-[250px] h-[54px] rounded-2xl border-2 text-[20px] font-black flex items-center justify-center gap-2 shrink-0 whitespace-nowrap"
                  :class="options[d.ans]!.solid" :style="{ '--d': `${1.4 + i * 1.8}s` }">{{ options[d.ans]!.letter }} {{ options[d.ans]!.name }}</span>
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
  { text: 'التقييم النوعي طريقة تستخدم بيانات عددية للتقييم كميًا.', ok: false,
    why: 'التقييم النوعي يراقب آراء المستخدمين وسلوكهم للتقييم نوعيًا. استخدام البيانات العددية هو التقييم الكمي.' },
  { text: 'PV (مشاهدات الصفحة) مؤشر يوضح عدد مرات مشاهدة صفحة ما.', ok: true, why: 'تعريف صحيح لـ PV.' },
  { text: 'معدل الارتداد مؤشر يوضح نسبة المستخدمين الذين حققوا إجراءً مستهدفًا.', ok: false,
    why: 'يختلف تعريف معدل الارتداد بحسب أداة التحليل، أما نسبة تحقيق الإجراء المستهدف فهي معدل التحويل.' },
  { text: 'التقييم الإرشادي طريقة يحدد فيها الخبراء مشكلات واجهة المستخدم استنادًا إلى قواعد عملية.', ok: true,
    why: 'تعريف صحيح للتقييم الإرشادي.' },
]

const options = [
  { letter: 'أ', name: 'PV (مشاهدات الصفحة)', cls: 'border-sky-400/60 bg-sky-600/20 text-sky-100', solid: 'border-sky-300 bg-sky-600 text-white' },
  { letter: 'ب', name: 'معدل الارتداد', cls: 'border-rose-400/60 bg-rose-600/20 text-rose-100', solid: 'border-rose-300 bg-rose-600 text-white' },
  { letter: 'ج', name: 'معدل التحويل', cls: 'border-emerald-400/60 bg-emerald-600/20 text-emerald-100', solid: 'border-emerald-300 bg-emerald-600 text-white' },
]
const descs = [
  { text: 'عدد مرات مشاهدة صفحة ما', ans: 0, note: '' },
  { text: 'نسبة المستخدمين الذين غادروا الموقع بعد مشاهدة الصفحة الأولى فقط', ans: 1,
    note: 'مثال مبسط على معدل الارتداد (الذي يختلف تعريفه بحسب الأداة).' },
  { text: 'نسبة المستخدمين الذين حققوا إجراءً مستهدفًا', ans: 2, note: '' },
]
</script>
