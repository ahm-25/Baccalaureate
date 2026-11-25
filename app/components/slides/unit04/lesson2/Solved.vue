<template>
  <!-- Solved example (book). f = 0 part (1): true ○ / false × for four statements with the book's reasons,
       1 part (2): match each description (1-4) to a CRAP principle (أ-د). -->
  <div class="absolute inset-0">
    <SlidesTitle :icon="f === 0 ? '📝' : '🔗'" title="مثال محلول"
                 :sub="f === 0 ? 'ضع ○ إذا كانت العبارة صحيحة أو × إذا كانت خاطئة' : 'طابق كل وصف مع المبدأ التصميمي الأنسب'" />

    <Transition name="sl-frame" mode="out-in">
      <!-- ───── f0: true / false ───── -->
      <div v-if="f === 0" key="tf" class="absolute inset-0" dir="rtl">
        <div class="absolute top-[150px] inset-x-0 flex flex-col items-center gap-2.5">
          <div v-for="(s, i) in statements" :key="s.text" class="sl-in w-[1140px] h-[94px] rounded-3xl border-2 border-white/10 bg-slate-900/85 flex items-center gap-4 px-6"
               :style="{ '--d': `${0.3 + i * 0.3}s` }">
            <span class="w-11 h-11 rounded-full bg-slate-700 text-white text-xl font-black flex items-center justify-center shrink-0">{{ letters[i] }}</span>
            <p class="flex-1 text-[20px] font-bold text-slate-100 leading-snug">{{ s.text }}</p>
            <div class="relative w-[72px] h-[60px] shrink-0">
              <span class="sl-out absolute inset-0 rounded-2xl border-2 border-dashed border-slate-500 text-2xl font-black text-slate-500 flex items-center justify-center"
                    :style="{ '--d': `${2 + i * 1.6}s` }">؟</span>
              <span class="sl-pop absolute inset-0 rounded-2xl border-2 text-[34px] font-black flex items-center justify-center"
                    :class="s.ok ? 'border-emerald-300 bg-emerald-500/40 text-emerald-50' : 'border-rose-300 bg-rose-500/40 text-rose-50'"
                    :style="{ '--d': `${2 + i * 1.6}s` }">{{ s.ok ? '○' : '×' }}</span>
            </div>
            <div class="w-[320px] shrink-0">
              <p class="sl-in text-[16px] font-bold leading-snug" :class="s.ok ? 'text-emerald-200' : 'text-rose-200'" :style="{ '--d': `${2.3 + i * 1.6}s` }">{{ s.why }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- ───── f1: matching ───── -->
      <div v-else key="match" class="absolute inset-0" dir="rtl">
        <!-- choices -->
        <div class="sl-in absolute left-[60px] top-[160px] w-[230px] rounded-3xl border-2 border-white/15 bg-slate-900/85 px-5 py-4 flex flex-col gap-3" style="--d: .3s">
          <div class="text-[21px] font-black text-white">[الاختيارات]</div>
          <div v-for="(c, i) in choices" :key="c.t" class="h-[54px] rounded-2xl border-2 flex items-center gap-3 px-3" :class="c.cls">
            <span class="text-[20px] font-black text-white">{{ letters[i] }}</span>
            <span class="text-[21px] font-black text-white whitespace-nowrap">{{ c.t }}</span>
          </div>
        </div>
        <!-- descriptions -->
        <div v-for="(d, i) in descs" :key="d" class="absolute left-[320px] w-[890px] h-[80px]" :style="{ top: `${160 + i * 96}px` }">
          <div class="sl-in w-full h-full flex items-center gap-4" :style="{ '--d': `${0.6 + i * 0.3}s` }">
            <div class="flex-1 h-full rounded-3xl border-2 border-white/10 bg-slate-900/85 flex items-center gap-4 px-5">
              <span class="w-10 h-10 rounded-full bg-slate-700 text-white text-xl font-black flex items-center justify-center shrink-0">{{ i + 1 }}</span>
              <p class="text-[21px] font-bold text-slate-100 leading-snug">{{ d }}</p>
            </div>
            <span class="text-[26px] font-black text-slate-500">←</span>
            <div class="relative w-[200px] h-[60px] shrink-0">
              <span class="sl-out absolute inset-0 rounded-2xl border-2 border-dashed border-slate-500 text-2xl font-black text-slate-500 flex items-center justify-center"
                    :style="{ '--d': `${2.2 + i * 1.5}s` }">؟</span>
              <span class="sl-pop absolute inset-0 rounded-2xl border-2 text-[22px] font-black text-white flex items-center justify-center gap-2 whitespace-nowrap"
                    :class="choices[i]!.cls" :style="{ '--d': `${2.2 + i * 1.5}s` }">{{ letters[i] }} {{ choices[i]!.t }}</span>
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
  { text: 'شخصية المستخدم تمثيل لنمط من المستخدمين يستند قدر الإمكان إلى بحث أو بيانات عن أهدافهم واحتياجاتهم.', ok: true,
    why: 'تعريف صحيح للشخصية النموذجية.' },
  { text: 'المخطط الهيكلي هو تصميم بنسخته النهائية يتضمن الألوان والزخارف التصميمية.', ok: false,
    why: 'المخطط الهيكلي هو مخطط لتحديد مكان وأولوية المعلومات، دون تضمين الألوان أو الزخارف التصميمية.' },
  { text: '"التقارب" في المبادئ الأربعة للتصميم يعني تجميع المعلومات المرتبطة قريبة من بعضها.', ok: true,
    why: 'تعريف صحيح للتقارب.' },
  { text: 'التصميم المتمحور حول المستخدم هو نهج تصميم يعطي الأولوية لراحة المُنشئ.', ok: false,
    why: 'التصميم المتمحور حول المستخدم هو نهج تصميم من منظور المستخدم.' },
]
const descs = [
  'إبراز المعلومات المهمة والإشارة بصريًا إلى الأولوية',
  'تكرار نفس النمط لإعطاء مظهر موحد',
  'محاذاة مواضع العناصر لإعطاء مظهر منظم',
  'تجميع المعلومات المرتبطة قريبة من بعضها',
]
const choices = [
  { t: 'التباين', cls: 'border-amber-400 bg-amber-600/35' },
  { t: 'التكرار', cls: 'border-violet-400 bg-violet-600/35' },
  { t: 'المحاذاة', cls: 'border-emerald-400 bg-emerald-600/35' },
  { t: 'التقارب', cls: 'border-sky-400 bg-sky-600/35' },
]
</script>
