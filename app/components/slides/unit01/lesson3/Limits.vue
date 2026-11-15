<template>
  <!-- Strengths and cautions. f = 0 what AI is good at vs what needs care, 1 AI and the human,
       2 the black-box problem, 3 extra challenges and risks. -->
  <div class="absolute inset-0">
    <SlidesTitle :icon="titles[f]!.icon" :title="titles[f]!.title" :sub="titles[f]!.sub" />

    <Transition name="sl-frame" mode="out-in">
      <!-- ───── f0: strengths vs cautions ───── -->
      <div v-if="f === 0" key="sc" class="absolute top-[155px] inset-x-0 flex justify-center gap-8" dir="rtl">
        <div v-for="(col, ci) in columns" :key="col.title" class="sl-in w-[540px] rounded-3xl border-2 px-7 py-5" :class="col.cls" :style="{ '--d': `${0.3 + ci * 2.6}s` }">
          <div class="flex items-center gap-3 text-[28px] font-black mb-4" :class="col.titleCls"><span class="text-4xl">{{ col.icon }}</span>{{ col.title }}</div>
          <div v-for="(it, i) in col.items" :key="it.text" class="sl-in flex items-start gap-3 rounded-2xl bg-slate-900/70 border border-white/10 px-4 py-3 mb-3"
               :style="{ '--d': `${0.9 + ci * 2.6 + i * 0.5}s` }">
            <span class="text-3xl">{{ it.icon }}</span>
            <span class="text-[20px] font-bold text-slate-100 leading-snug">{{ it.text }}</span>
          </div>
        </div>
      </div>

      <!-- ───── f1: AI and the human ───── -->
      <div v-else-if="f === 1" key="human" class="absolute inset-0">
        <div v-for="(side, si) in sides" :key="side.name" class="absolute top-[160px] w-[400px]" :style="{ left: si === 0 ? '790px' : '90px' }" dir="rtl">
          <div class="sl-pop flex flex-col items-center mb-4" :style="{ '--d': `${0.3 + si * 1.8}s` }">
            <div class="w-[110px] h-[110px] rounded-full border-4 flex items-center justify-center text-[60px]" :class="side.ring">{{ side.icon }}</div>
            <span class="mt-2 text-[26px] font-black text-white">{{ side.name }}</span>
          </div>
          <div class="grid grid-cols-2 gap-3">
            <span v-for="(c, i) in side.caps" :key="c" class="sl-pop h-[58px] rounded-2xl border-2 flex items-center justify-center text-[19px] font-black text-white" :class="side.chip"
                  :style="{ '--d': `${0.8 + si * 1.8 + i * 0.25}s` }">{{ c }}</span>
          </div>
        </div>
        <div class="absolute left-[560px] top-[230px] w-[160px] flex flex-col items-center sl-pop" style="--d: 4.2s">
          <span class="text-[80px] leading-none">🤝</span>
        </div>
        <div class="absolute top-[480px] inset-x-0 flex justify-center">
          <div class="sl-in sl-card border-emerald-400/60 px-8 py-3.5 text-[24px] font-black text-white text-center" style="--d: 4.8s" dir="rtl">
            «الذكاء الاصطناعي <span class="text-sky-300">يساعد</span> الإنسان، لكنه <span class="text-amber-300">لا يستبدل</span> الحكم البشري في القرارات عالية التأثير»
          </div>
        </div>
      </div>

      <!-- ───── f2: black box ───── -->
      <div v-else-if="f === 2" key="box" class="absolute inset-0">
        <!-- input -->
        <div class="absolute left-[930px] top-[220px] w-[270px] sl-in" style="--d: .3s" dir="rtl">
          <div class="rounded-2xl border-2 border-sky-400/60 bg-slate-900/90 px-4 py-3">
            <div class="text-[16px] font-black text-sky-300 mb-1">📄 طلب قرض بنكي</div>
            <div class="text-[16px] font-bold text-slate-200 leading-snug">الدخل · العمر · السجل المالي…</div>
          </div>
        </div>
        <div class="bb-in" style="--d: 1.2s">📄</div>
        <!-- the box -->
        <div class="absolute left-[470px] top-[180px] w-[340px] h-[200px] rounded-3xl bg-black border-4 border-slate-600 flex items-center justify-center sl-pop shake-box" style="--d: .6s">
          <span class="text-[90px] font-black text-slate-700">؟</span>
          <span class="absolute bottom-3 text-[16px] font-black text-slate-400" dir="rtl">شبكة عصبية معقدة</span>
        </div>
        <div class="bb-out" style="--d: 2.6s">✗</div>
        <!-- output -->
        <div class="absolute left-[80px] top-[230px] w-[290px] sl-pop" style="--d: 3s" dir="rtl">
          <div class="rounded-2xl border-2 border-rose-400 bg-rose-950/70 px-5 py-3 text-[24px] font-black text-rose-100 text-center">✗ تم رفض الطلب</div>
        </div>
        <div class="absolute left-[80px] top-[315px] w-[290px] sl-in text-center" style="--d: 3.8s" dir="rtl">
          <span class="text-[19px] font-black text-amber-200">لماذا؟ 🤷 حتى المبرمجون لا يستطيعون التفسير بدقة</span>
        </div>
        <div class="absolute top-[440px] inset-x-0 flex justify-center">
          <div class="sl-in sl-card border-slate-400/60 px-8 py-4 max-w-[1100px] text-center text-[23px] font-bold text-white" style="--d: 4.6s" dir="rtl">
            <span class="font-black text-slate-200">⬛ مشكلة الصندوق الأسود</span>: الحالة التي يكون فيها
            <span class="sl-hl-amber">من غير الواضح كيف توصل الذكاء الاصطناعي إلى حكمه</span>.
          </div>
        </div>
      </div>

      <!-- ───── f3: extra challenges ───── -->
      <div v-else key="ch" class="absolute top-[155px] inset-x-0 flex justify-center" dir="rtl">
        <div class="grid grid-cols-2 gap-5 w-[1120px]">
          <div v-for="(c, i) in challenges" :key="c.title" class="sl-in rounded-3xl border-2 bg-slate-900/85 px-6 py-4 flex items-start gap-4" :class="c.cls"
               :style="{ '--d': `${0.3 + i * 0.9}s` }">
            <span class="text-5xl">{{ c.icon }}</span>
            <div>
              <div class="text-[25px] font-black text-white mb-1">{{ c.title }}</div>
              <p class="text-[19px] font-bold text-slate-200 leading-snug">{{ c.text }}</p>
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

const titles = [
  { icon: '⚙️', title: 'خصائص الذكاء الاصطناعي واحتياطات الاستخدام', sub: 'ما يبرع فيه… وما يتطلب الحذر' },
  { icon: '🤝', title: 'الذكاء الاصطناعي والإنسان', sub: 'كل طرف له دور' },
  { icon: '⬛', title: 'مشكلة الصندوق الأسود', sub: 'مثال: طلب قرض بنكي' },
  { icon: '⚠️', title: 'تحديات ومخاطر إضافية', sub: '' },
]
const columns = [
  { icon: '💪', title: 'ما يبرع فيه', cls: 'border-emerald-400/60 bg-emerald-950/30', titleCls: 'text-emerald-200', items: [
    { icon: '🔍', text: 'إيجاد وتصنيف الأنماط في البيانات المعقدة مثل الصور والنصوص.' },
    { icon: '👁️', text: 'التعرف على الصور والأصوات والنصوص، وتوليد بعض أنواع المحتوى.' },
    { icon: '📈', text: 'الاستدلال الاحتمالي والتنبؤ استنادًا إلى البيانات.' },
  ] },
  { icon: '⚠️', title: 'ما يتطلب الحذر', cls: 'border-amber-400/60 bg-amber-950/30', titleCls: 'text-amber-200', items: [
    { icon: '⚖️', text: 'القرارات ذات البعد الأخلاقي التي قد تؤدي إلى تمييز أو تحيز.' },
    { icon: '🔐', text: 'التعامل مع المعلومات الشخصية والبيانات الحساسة.' },
    { icon: '🎯', text: 'القرارات عالية الأثر وتحديد المسؤولية عن نتائجها.' },
  ] },
]
const sides = [
  { icon: '🤖', name: 'الذكاء الاصطناعي', ring: 'border-sky-400 bg-sky-950', chip: 'border-sky-400/60 bg-sky-950/60',
    caps: ['📊 تحليل البيانات', '🔍 اكتشاف الأنماط', '📈 التنبؤ', '👁️ التعرف'] },
  { icon: '🧑', name: 'الإنسان', ring: 'border-amber-400 bg-amber-950', chip: 'border-amber-400/60 bg-amber-950/60',
    caps: ['⚖️ الحكم الأخلاقي', '🧠 فهم السياق', '🛡️ المسؤولية', '✅ القرار النهائي'] },
]
const challenges = [
  { icon: '🎯', title: 'دقة النتائج', text: 'قد تنخفض الدقة عندما تكون بيانات التدريب غير كافية أو غير ممثلة أو متحيزة.', cls: 'border-sky-400/60' },
  { icon: '👻', title: 'الهلوسة', text: 'توليد معلومات غير صحيحة أو غير مدعومة بالواقع ولكنها تبدو مقنعة للمستخدم.', cls: 'border-fuchsia-400/60' },
  { icon: '©️', title: 'قضايا الحقوق', text: 'مشاكل تتعلق بالملكية الفكرية عند استخدام أعمال محمية بحقوق المؤلف كبيانات لتدريب النماذج.', cls: 'border-amber-400/60' },
  { icon: '⬛', title: 'فقدان الوضوح (الصندوق الأسود)', text: 'فقدان القدرة على فهم كيفية اتخاذ النظام لحكمه أو قراره النهائي.', cls: 'border-slate-400/60' },
]
</script>

<style scoped>
.bb-in, .bb-out {
  position: absolute; top: 260px; width: 50px; height: 50px; border-radius: 14px; display: flex; align-items: center; justify-content: center;
  font-size: 1.5rem; font-weight: 900; opacity: 0; z-index: 3;
}
.bb-in { left: 880px; background: #0ea5e9; border: 2px solid #bae6fd; animation: bbIn 1.2s ease-in var(--d) forwards; }
@keyframes bbIn { 0% { left: 880px; opacity: 0 } 20% { opacity: 1 } 100% { left: 780px; opacity: 0 } }
.bb-out { left: 450px; background: #e11d48; border: 2px solid #fecdd3; color: #fff; animation: bbOut 1s ease-out var(--d) forwards; }
@keyframes bbOut { 0% { left: 470px; opacity: 0 } 20% { opacity: 1 } 100% { left: 380px; opacity: 0 } }
.shake-box { animation: sl-pop .5s cubic-bezier(.3,1.6,.5,1) var(--d) forwards, rumble .12s linear 1.8s 6; }
@keyframes rumble { 50% { transform: translateX(3px) rotate(.5deg) } }
</style>
