<template>
  <!-- Risk assessment. f = 0 definition + formula, 1 the matrix (figure 2.3.2),
       2 the school's risks placed and ranked, 3 why impact alone is not enough. -->
  <div class="absolute inset-0">
    <SlidesTitle icon="📊" :title="titles[f]!.title" :sub="titles[f]!.sub" />

    <Transition name="sl-frame" mode="out-in">
      <!-- ───── f0: definition & formula ───── -->
      <div v-if="f === 0" key="def" class="absolute inset-0" dir="rtl">
        <div class="absolute top-[158px] inset-x-0 flex justify-center">
          <div class="sl-in sl-card border-sky-400/60 px-8 py-4 text-[26px] font-bold text-white text-center max-w-[1100px]" style="--d: .3s">
            <span class="text-sky-300 font-black">الخطر</span>: احتمال أن يقع حدث يسبب ضررًا، مع مراعاة
            <span class="sl-hl-amber">احتمال وقوعه</span> و<span class="sl-hl-amber">حجم أثره</span>.
          </div>
        </div>
        <div class="absolute top-[268px] inset-x-0 flex justify-center items-start gap-5">
          <div class="sl-pop f-box border-rose-400 bg-rose-600/25" style="--d: 1.4s">
            <span class="text-[30px] font-black text-white">درجة الخطر</span>
          </div>
          <span class="sl-pop f-op" style="--d: 1.8s">=</span>
          <div class="flex flex-col items-center gap-3">
            <div class="sl-pop f-box border-amber-400 bg-amber-600/25" style="--d: 2.2s"><span class="text-[30px] font-black text-white">① التأثير</span></div>
            <p class="sl-in w-[270px] text-center text-[19px] font-bold text-amber-100" style="--d: 3.4s">حجم الضرر إذا وقع الحدث</p>
          </div>
          <span class="sl-pop f-op" style="--d: 2.6s">×</span>
          <div class="flex flex-col items-center gap-3">
            <div class="sl-pop f-box border-sky-400 bg-sky-600/25" style="--d: 3s"><span class="text-[30px] font-black text-white">② الاحتمالية</span></div>
            <p class="sl-in w-[270px] text-center text-[19px] font-bold text-sky-100" style="--d: 4s">مدى احتمال وقوع الحدث</p>
          </div>
        </div>
        <div class="absolute top-[500px] inset-x-0 flex justify-center">
          <span class="sl-in sl-badge !text-[21px] border-emerald-400/70 text-emerald-100 bg-emerald-600/15" style="--d: 5s">
            لماذا؟ لأن الفريق لا يستطيع معالجة كل المخاطر في الوقت نفسه؛ فيبدأ بالأعلى أولوية
          </span>
        </div>
      </div>

      <!-- ───── f1, f2: the matrix ───── -->
      <div v-else-if="f <= 2" :key="`matrix-${f}`" class="absolute inset-0">
        <!-- axes -->
        <div class="absolute left-[120px] top-[128px] w-[120px] text-right text-[22px] font-black text-amber-300" dir="rtl">التأثير ↑</div>
        <div v-for="(l, r) in levels" :key="`rl-${r}`" class="absolute left-[128px] w-[110px] text-right text-[18px] font-black text-amber-100" dir="rtl"
             :style="{ top: `${GY + (2 - r) * 104 + 36}px` }">{{ l }}</div>
        <div v-for="(l, c) in levels" :key="`cl-${c}`" class="absolute w-[150px] text-center text-[18px] font-black text-sky-100" dir="rtl"
             :style="{ left: `${GX + c * 158}px`, top: `${GY + 316}px` }">{{ l }}</div>
        <div class="absolute w-[466px] text-center text-[22px] font-black text-sky-300" :style="{ left: `${GX}px`, top: `${GY + 346}px` }">الاحتمالية ⟶</div>

        <!-- cells -->
        <template v-for="rd in 3" :key="`row-${rd}`">
          <div v-for="c in 3" :key="`c-${rd}-${c}`" class="cell" :class="[cellColor(3 - rd, c - 1), f === 1 ? 'sl-pop' : '']"
               :style="{ left: `${GX + (c - 1) * 158}px`, top: `${GY + (rd - 1) * 104}px`, '--d': `${0.3 + ((c - 1) + (3 - rd)) * 0.35}s` }" dir="rtl">
            {{ matrix[3 - rd]![c - 1] }}
          </div>
        </template>

        <!-- f1: what each level means -->
        <div v-if="f === 1" class="absolute left-[790px] top-[172px] w-[450px] flex flex-col gap-3" dir="rtl">
          <div class="sl-in text-[22px] font-black text-white mb-1" style="--d: 2.4s">ماذا نفعل بكل درجة؟</div>
          <div v-for="(a, i) in advice" :key="a.level" class="sl-in flex items-center gap-3 rounded-2xl border-2 border-white/10 bg-slate-900/80 px-4 py-2.5"
               :style="{ '--d': `${2.8 + i * 0.6}s` }">
            <span class="px-2.5 py-1 rounded-lg text-[16px] font-black whitespace-nowrap" :class="colors[a.level]">{{ a.level }}</span>
            <span class="text-[18px] font-bold text-slate-100 leading-snug">{{ a.text }}</span>
          </div>
        </div>

        <!-- f2: the school's risks -->
        <template v-if="f === 2">
          <div v-for="(r, i) in risks" :key="r.text" class="token sl-pop"
               :style="{ left: `${GX + r.likelihood * 158 + 118}px`, top: `${GY + (2 - r.impact) * 104 - 12}px`, '--d': `${0.6 + i * 0.9}s` }">{{ r.icon }}</div>
          <div class="absolute left-[780px] top-[168px] w-[465px] flex flex-col gap-2.5" dir="rtl">
            <div class="sl-in text-[22px] font-black text-white" style="--d: 4.4s">🗂️ ترتيب مخاطر المدرسة حسب الأولوية</div>
            <div v-for="(r, i) in ranked" :key="r.text" class="sl-in rounded-2xl border-2 bg-slate-900/85 px-4 py-2" :class="i === 0 ? 'border-rose-400' : 'border-white/10'"
                 :style="{ '--d': `${4.8 + i * 0.5}s` }">
              <div class="flex items-center gap-2">
                <span class="w-7 h-7 rounded-full bg-slate-700 text-white text-sm font-black flex items-center justify-center shrink-0">{{ i + 1 }}</span>
                <span class="text-2xl">{{ r.icon }}</span>
                <span class="flex-1 text-[16px] font-bold text-slate-100 leading-tight">{{ r.text }}</span>
              </div>
              <div class="flex items-center gap-2 mt-1 pr-9 text-[14px] font-black">
                <span class="text-amber-200">التأثير {{ levels[r.impact] }}</span>·
                <span class="text-sky-200">الاحتمالية {{ levels[r.likelihood] }}</span>
                <span class="mr-auto px-2 py-0.5 rounded-md" :class="colors[matrix[r.impact]![r.likelihood]!]">{{ matrix[r.impact]![r.likelihood] }} ({{ score(r) }})</span>
              </div>
            </div>
          </div>
        </template>
      </div>

      <!-- ───── f3: impact alone is not enough ───── -->
      <div v-else key="alone" class="absolute inset-0" dir="rtl">
        <div class="absolute top-[160px] inset-x-0 flex justify-center gap-8">
          <div v-for="(r, i) in compare" :key="r.text" class="sl-in w-[500px] rounded-3xl border-2 bg-slate-900/85 px-7 py-5"
               :class="i === 0 ? 'border-amber-400/60' : 'border-rose-400/70'" :style="{ '--d': `${0.3 + i * 1.2}s` }">
            <div class="flex items-center gap-3 text-[24px] font-black text-white mb-4"><span class="text-4xl">{{ r.icon }}</span>{{ r.text }}</div>
            <div v-for="m in ['impact', 'likelihood'] as const" :key="m" class="flex items-center gap-3 mb-3">
              <span class="w-[110px] text-[19px] font-black" :class="m === 'impact' ? 'text-amber-200' : 'text-sky-200'">{{ m === 'impact' ? 'التأثير' : 'الاحتمالية' }}</span>
              <div class="flex gap-1.5" dir="rtl">
                <span v-for="n in 3" :key="n" class="seg" :class="n <= r[m] + 1 ? (m === 'impact' ? 'bg-amber-400' : 'bg-sky-400') : 'bg-slate-700'"></span>
              </div>
              <span class="text-[18px] font-black text-slate-200">{{ levels[r[m]] }}</span>
            </div>
            <div class="mt-2 flex justify-center">
              <span class="sl-pop px-4 py-1.5 rounded-xl text-[20px] font-black" :class="colors[matrix[r.impact]![r.likelihood]!]"
                    :style="{ '--d': `${1.2 + i * 1.2}s` }">درجة الخطر: {{ matrix[r.impact]![r.likelihood] }}</span>
            </div>
          </div>
        </div>
        <div class="absolute top-[455px] inset-x-0 flex flex-col items-center gap-3">
          <span class="sl-in text-[22px] font-black text-amber-200" style="--d: 3.2s">نفس التأثير المرتفع… لكن الأولوية مختلفة تمامًا!</span>
          <span class="sl-in sl-badge !text-[22px] border-rose-400 text-rose-100 bg-rose-600/20" style="--d: 4.2s">
            ✗ لا يمكن تحديد حجم المخاطرة بالتأثير وحده؛ نحتاج التأثير والاحتمالية معًا
          </span>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import SlidesTitle from '~/components/slides/Title.vue'

defineProps<{ f: number }>()

const titles = [
  { title: 'مفهوم تقييم المخاطر', sub: 'طريقة مبسطة تعتمد على عاملين' },
  { title: 'مصفوفة تقييم المخاطر', sub: 'الشكل 2.3.2' },
  { title: 'ما الذي نعالجه أولًا؟', sub: 'نقدّر كل خطر من المصفوفة ثم نرتّب' },
  { title: 'هل يكفي التأثير وحده؟', sub: 'قارن بين خطرين تأثيرهما مرتفع' },
]
const levels = ['منخفض', 'متوسط', 'مرتفع']
// matrix[impact][likelihood], as in figure 2.3.2
const matrix = [
  ['منخفض جدًا', 'منخفض', 'متوسط'],
  ['منخفض', 'متوسط', 'مرتفع'],
  ['متوسط', 'مرتفع', 'مرتفع جدًا'],
]
const colors: Record<string, string> = {
  'منخفض جدًا': 'bg-emerald-300 text-emerald-950',
  'منخفض': 'bg-emerald-500 text-white',
  'متوسط': 'bg-amber-400 text-amber-950',
  'مرتفع': 'bg-orange-500 text-white',
  'مرتفع جدًا': 'bg-rose-600 text-white',
}
const cellColor = (impact: number, likelihood: number) => colors[matrix[impact]![likelihood]!]
const advice = [
  { level: 'مرتفع جدًا', text: 'أعلى أولوية: عالجه أولًا.' },
  { level: 'مرتفع', text: 'أولوية عالية بعد المخاطر المرتفعة جدًا.' },
  { level: 'متوسط', text: 'يُرتَّب حسب السياق والضوابط المتاحة.' },
  { level: 'منخفض', text: 'أولوية منخفضة: راقبه وعالجه لاحقًا.' },
]
const risks = [
  { icon: '🔌', text: 'انقطاع كهرباء قصير يوقف أجهزة المعمل دقائق', impact: 0, likelihood: 2 },
  { icon: '🦠', text: 'هجوم فدية يشفّر سجلات الطلاب', impact: 2, likelihood: 2 },
  { icon: '🌋', text: 'زلزال يدمّر غرفة الخوادم', impact: 2, likelihood: 0 },
  { icon: '🖨️', text: 'تعطل طابعة في مكتب الإدارة', impact: 0, likelihood: 0 },
]
const score = (r: { impact: number; likelihood: number }) => (r.impact + 1) * (r.likelihood + 1)
const ranked = computed(() => [...risks].sort((a, b) => score(b) - score(a)))
const compare = [risks[2]!, risks[1]!]

const GX = 250
const GY = 168
</script>

<style scoped>
.f-box { min-width: 220px; height: 92px; padding: 0 1.5rem; border-width: 3px; border-radius: 1.4rem; display: flex; align-items: center; justify-content: center; }
.f-op { font-size: 56px; font-weight: 900; color: #94a3b8; line-height: 92px; }
.cell {
  position: absolute; width: 150px; height: 96px; border-radius: 1rem; display: flex; align-items: center; justify-content: center;
  font-size: 1.25rem; font-weight: 900; box-shadow: inset 0 0 0 2px rgba(255,255,255,.15);
}
.token {
  position: absolute; width: 42px; height: 42px; border-radius: 9999px; background: rgba(15,23,42,.95); border: 2px solid #fff;
  display: flex; align-items: center; justify-content: center; font-size: 1.5rem; z-index: 3; box-shadow: 0 0 18px rgba(255,255,255,.5);
}
.seg { width: 52px; height: 18px; border-radius: 6px; }
</style>
