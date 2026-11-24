<template>
  <!-- Think like an engineer: a clinic booking web app. f = 0 assign each feature to a layer,
       1 diagnose "no available times appear", 2 decide: why separate the responsibilities into layers. -->
  <div class="absolute inset-0">
    <SlidesTitle icon="⚙️" title="فكّر كمهندس: عيادة على الويب" :sub="subs[f]" />

    <Transition name="sl-frame" mode="out-in">
      <!-- ───── f0: assign the features ───── -->
      <div v-if="f === 0" key="assign" class="absolute inset-0" dir="rtl">
        <div class="absolute top-[142px] inset-x-0 flex justify-center">
          <div class="sl-in w-[1100px] rounded-2xl border-2 border-white/15 bg-slate-900/80 px-6 py-2.5 text-center text-[21px] font-bold text-slate-100" style="--d: .2s">
            🏥 عيادة تريد تطبيق ويب: يحجز فيه المرضى المواعيد، ويتحققون من الأوقات المتاحة، ويطّلعون على زياراتهم السابقة.
          </div>
        </div>
        <!-- features waiting to be placed -->
        <div class="absolute top-[212px] inset-x-0 flex justify-center gap-5">
          <div v-for="(ft, j) in order" :key="ft.text" class="sl-pop" :style="{ '--d': `${0.8 + j * 0.3}s` }">
            <span class="sl-out block sl-badge !text-[20px] border-white/30 bg-slate-800 text-white" :style="{ '--d': `${land(j)}s` }">{{ ft.icon }} {{ ft.text }}</span>
          </div>
        </div>
        <!-- layer bins -->
        <div class="absolute top-[284px] inset-x-0 flex justify-center gap-5">
          <div v-for="(l, li) in bins" :key="l.name" class="sl-in w-[360px] h-[280px] rounded-3xl border-2 px-5 py-4 flex flex-col items-center"
               :class="l.cls" :style="{ '--d': `${0.4 + li * 0.2}s` }">
            <div class="text-[24px] font-black text-white">{{ l.icon }} {{ l.name }}</div>
            <div class="mt-3 w-full h-[58px] rounded-2xl border-2 border-dashed border-white/25 flex items-center justify-center">
              <span class="sl-pop sl-badge !text-[20px] border-white bg-white text-slate-900" :style="{ '--d': `${land(slotOf(li))}s` }">
                {{ order[slotOf(li)]!.icon }} {{ order[slotOf(li)]!.text }}
              </span>
            </div>
            <p class="sl-in mt-4 text-[19px] font-bold text-slate-200 leading-snug text-center" :style="{ '--d': `${land(slotOf(li)) + 0.5}s` }">
              {{ order[slotOf(li)]!.why }}
            </p>
          </div>
        </div>
      </div>

      <!-- ───── f1: diagnose the fault ───── -->
      <div v-else-if="f === 1" key="debug" class="absolute inset-0" dir="rtl">
        <div class="absolute top-[142px] inset-x-0 flex justify-center">
          <div class="sl-in" style="--d: .2s">
            <div class="sl-shake rounded-2xl border-2 border-rose-400/70 bg-rose-950/60 px-8 py-3 text-[24px] font-black text-white" style="--d: .9s">
              📅 تفتح صفحة الحجز… لكن <span class="text-rose-300">لا تظهر أوقات متاحة!</span> أين المشكلة؟
            </div>
          </div>
        </div>
        <div class="absolute top-[226px] inset-x-0 flex justify-center gap-5">
          <div v-for="(c, i) in causes" :key="c.layer" class="sl-in relative w-[360px] h-[280px] rounded-3xl border-2 px-5 py-4"
               :class="c.cls" :style="{ '--d': `${1.2 + i * 1.6}s` }">
            <span class="sl-pop absolute -top-4 -left-3 text-[34px]" :style="{ '--d': `${1.6 + i * 1.6}s` }">🔍</span>
            <div class="text-[24px] font-black text-white mb-3">{{ c.icon }} {{ c.layer }}</div>
            <div class="text-[16px] font-black text-rose-300">احتمال</div>
            <p class="text-[19px] font-bold text-slate-100 leading-snug mb-3">{{ c.problem }}</p>
            <div class="text-[16px] font-black text-emerald-300">للتأكد نسأل</div>
            <p class="text-[19px] font-bold text-slate-100 leading-snug">{{ c.check }}</p>
          </div>
        </div>
        <div class="absolute top-[522px] inset-x-0 flex justify-center">
          <span class="sl-in sl-badge !text-[20px] border-emerald-400/60 bg-emerald-600/20 text-emerald-100" style="--d: 6.4s">
            🧩 لأن الطبقات منفصلة، نستطيع فحص كل طبقة وحدها
          </span>
        </div>
      </div>

      <!-- ───── f2: decide ───── -->
      <div v-else key="decide" class="absolute inset-0" dir="rtl">
        <div class="absolute top-[142px] inset-x-0 flex justify-center">
          <div class="sl-in w-[1100px] rounded-3xl border-2 border-emerald-400/70 bg-emerald-950/50 px-7 py-3.5 text-[22px] font-bold text-white leading-snug" style="--d: .2s">
            ✅ <span class="text-emerald-300 font-black">التوصية:</span> تنظيم مسؤوليات العرض والمعالجة والبيانات في طبقات واضحة —
            و«التحقق من الأوقات المتاحة» ينتمي إلى <span class="text-amber-300 font-black">الواجهة الخلفية</span>.
          </div>
        </div>
        <div class="absolute top-[262px] inset-x-0 flex justify-center gap-6">
          <!-- reason 1: find the faulty layer -->
          <div class="sl-in w-[540px] h-[300px] rounded-3xl border-2 border-white/15 bg-slate-900/85 px-6 py-4" style="--d: 1.2s">
            <div class="text-[23px] font-black text-white mb-1">السبب ①: سهولة تحديد مكان العطل</div>
            <p class="text-[19px] font-bold text-slate-300 leading-snug">عند حدوث عطل يسهل تحديد الطبقة المسؤولة عن المشكلة وفحصها وحدها.</p>
            <div class="mt-6 flex justify-center gap-3">
              <div v-for="(m, i) in mini" :key="m.name" class="relative w-[140px] h-[70px]">
                <div class="mini" :class="[m.cls, { flag: i === 1 }]">{{ m.icon }} {{ m.name }}</div>
                <span v-if="i === 1" class="sl-pop absolute -top-5 -left-3 text-[30px]" style="--d: 2.4s">🔍</span>
              </div>
            </div>
            <p class="sl-in mt-4 text-center text-[18px] font-black text-rose-200" style="--d: 3s">العطل هنا ← نصلح الخلفية فقط</p>
          </div>
          <!-- reason 2: change one layer without disturbing the others -->
          <div class="sl-in w-[540px] h-[300px] rounded-3xl border-2 border-white/15 bg-slate-900/85 px-6 py-4" style="--d: 2s">
            <div class="text-[23px] font-black text-white mb-1">السبب ②: تطوير كل طبقة على حدة</div>
            <p class="text-[19px] font-bold text-slate-300 leading-snug">يمكن تغيير شكل صفحة الحجز دون تغيير قواعد التحقق أو طريقة تخزين البيانات.</p>
            <div class="mt-6 flex justify-center gap-3">
              <div v-for="(m, i) in mini" :key="m.name" class="relative w-[140px] h-[70px]">
                <div class="mini" :class="[m.cls, { 'sl-out': i === 0 }]" style="--d: 3.8s">{{ m.icon }} {{ m.name }}</div>
                <div v-if="i === 0" class="mini sl-fade border-fuchsia-400 bg-fuchsia-900/70 text-white" style="--d: 3.8s">🎨 شكل جديد</div>
                <span v-if="i === 0" class="sl-pop absolute -top-5 -left-3 text-[30px]" style="--d: 3.8s">🖌️</span>
                <span v-else class="sl-pop absolute -bottom-3 left-1/2 -ml-[38px] w-[76px] text-center rounded-full bg-emerald-400 text-emerald-950 text-xs font-black py-0.5"
                      style="--d: 4.6s">✓ لم تتغير</span>
              </div>
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

const subs = ['① وزّع المهام على الطبقات', '② شخّص العطل', '③ قرّر وبرّر']

// layer bins, right to left: front end, back end, data layer
const bins = [
  { icon: '🖥️', name: 'الواجهة الأمامية', cls: 'border-violet-400/70 bg-violet-950/45' },
  { icon: '⚙️', name: 'الواجهة الخلفية', cls: 'border-amber-400/70 bg-amber-950/40' },
  { icon: '🗄️', name: 'قاعدة البيانات', cls: 'border-sky-400/70 bg-sky-950/45' },
]
// the features in the order they are shown (shuffled); `layer` is the index of the right bin
const order = [
  { icon: '⏱️', text: 'التحقق من الأوقات المتاحة', layer: 1, why: 'معالجة تطبق قواعد العيادة على الخادم؛ تقارن الطلب بالمواعيد المحجوزة.' },
  { icon: '📂', text: 'تخزين الزيارات السابقة', layer: 2, why: 'بيانات تُحفظ وتُسترجع عند الحاجة.' },
  { icon: '📝', text: 'نموذج الحجز', layer: 0, why: 'يراه المريض ويتعامل معه في المتصفح؛ يعرض الحقول ويجمع ما يختاره.' },
]
const land = (j: number) => 2.4 + j * 1.6
const slotOf = (li: number) => order.findIndex(o => o.layer === li)

const causes = [
  { icon: '🖥️', layer: 'الواجهة الأمامية', cls: 'border-violet-400/70 bg-violet-950/45',
    problem: 'الصفحة استقبلت الأوقات لكنها لا تعرضها بشكل صحيح.', check: 'هل وصلت بيانات الأوقات إلى المتصفح أم لا؟' },
  { icon: '⚙️', layer: 'الواجهة الخلفية', cls: 'border-amber-400/70 bg-amber-950/40',
    problem: 'خطأ في معالجة الطلب أو في قواعد التحقق من الأوقات.', check: 'هل يرسل الخادم استجابة صحيحة عند طلب الأوقات؟' },
  { icon: '🗄️', layer: 'قاعدة البيانات', cls: 'border-sky-400/70 bg-sky-950/45',
    problem: 'بيانات الأوقات غير مخزنة أو لا يمكن الوصول إليها.', check: 'هل توجد مواعيد متاحة مسجلة في طبقة البيانات؟' },
]

const mini = [
  { icon: '🖥️', name: 'أمامية', cls: 'border-violet-400 bg-violet-950/70 text-white' },
  { icon: '⚙️', name: 'خلفية', cls: 'border-amber-400 bg-amber-950/70 text-white' },
  { icon: '🗄️', name: 'بيانات', cls: 'border-sky-400 bg-sky-950/70 text-white' },
]
</script>

<style scoped>
.mini {
  position: absolute; inset: 0; border-radius: 1rem; border-width: 2px; display: flex; align-items: center; justify-content: center;
  font-size: 1.2rem; font-weight: 900;
}
.flag { animation: flag .7s ease-in-out 2.4s 3 forwards; }
@keyframes flag { 50% { border-color: #fb7185; background: rgba(136,19,55,.9); box-shadow: 0 0 26px rgba(244,63,94,.7) } 100% { border-color: #fb7185; background: rgba(136,19,55,.85) } }
</style>
