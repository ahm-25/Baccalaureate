<template>
  <!-- Think like an engineer: a student club page (events list, club colours, live registration counter).
       f = 0 which technology does each feature, 1 make it reach everyone + decide. -->
  <div class="absolute inset-0">
    <SlidesTitle icon="⚙️" title="فكّر كمهندس: صفحة النادي الطلابي" :sub="f === 0 ? '① أي تقنية تقوم بكل ميزة؟' : '② اجعلها تصل إلى الجميع ③ وقرّر'" />

    <Transition name="sl-frame" mode="out-in">
      <!-- ───── f0: technology per feature ───── -->
      <div v-if="f === 0" key="tech" class="absolute inset-0" dir="rtl">
        <div class="absolute top-[142px] inset-x-0 flex justify-center">
          <div class="sl-in w-[1100px] rounded-2xl border-2 border-white/15 bg-slate-900/80 px-6 py-2.5 text-center text-[21px] font-bold text-slate-100" style="--d: .2s">
            🎓 نادٍ طلابي يريد صفحة ويب تعرض فعالياته، ومنسقة بألوان النادي، وفيها زر يعرض عدد الأشخاص المسجلين.
          </div>
        </div>
        <div class="absolute top-[222px] inset-x-0 flex flex-col items-center gap-3.5">
          <div v-for="(ft, i) in features" :key="ft.text" class="sl-in w-[1100px] h-[100px] rounded-3xl border-2 border-white/10 bg-slate-900/85 flex items-center gap-5 px-6"
               :style="{ '--d': `${0.8 + i * 2}s` }">
            <span class="text-[40px]">{{ ft.icon }}</span>
            <div class="flex-1">
              <div class="text-[23px] font-black text-white">{{ ft.text }}</div>
              <div class="sl-in text-[17px] font-bold text-slate-300 leading-snug" :style="{ '--d': `${2 + i * 2}s` }">{{ ft.why }}</div>
            </div>
            <div class="flex gap-2" dir="ltr">
              <span v-for="(t, ti) in tech" :key="t.name" class="relative w-[140px] h-[46px]">
                <span class="opt border-slate-600 text-slate-400">{{ t.name }}</span>
                <span v-if="ti === ft.ans" class="opt sl-pop text-white" :class="t.on" :style="{ '--d': `${1.6 + i * 2}s` }">✓ {{ t.name }}</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- ───── f1: reach everyone + decide ───── -->
      <div v-else key="decide" class="absolute inset-0" dir="rtl">
        <div class="absolute top-[145px] inset-x-0 flex justify-center gap-5">
          <div v-for="(r, i) in reach" :key="r.title" class="sl-in w-[540px] rounded-3xl border-2 px-6 py-3.5 flex gap-4" :class="r.cls"
               :style="{ '--d': `${0.3 + i * 1.2}s` }">
            <span class="text-[40px] leading-none">{{ r.icon }}</span>
            <div>
              <div class="text-[21px] font-black text-white">{{ r.title }}</div>
              <p class="text-[18px] font-bold text-slate-100 leading-snug">{{ r.text }}</p>
            </div>
          </div>
        </div>
        <div class="absolute top-[312px] inset-x-0 flex justify-center">
          <div class="sl-in w-[1100px] rounded-3xl border-2 border-emerald-400/70 bg-emerald-950/45 px-7 py-4" style="--d: 2.8s">
            <div class="text-[23px] font-black text-emerald-300 mb-2">✅ التوصية: استخدام HTML وCSS وJavaScript كلًا حسب دوره الصحيح</div>
            <div class="sl-in flex gap-3 mb-2" style="--d: 3.8s">
              <span class="text-[22px] font-black text-white shrink-0">①</span>
              <p class="text-[19px] font-bold text-slate-100 leading-snug">لكل تقنية دور واضح (البنية، المظهر، السلوك)، فيسهل معرفة أين نعدّل؛ فتغيير ألوان النادي يكون في CSS دون لمس المحتوى.</p>
            </div>
            <div class="sl-in flex gap-3" style="--d: 5.2s">
              <span class="text-[22px] font-black text-white shrink-0">②</span>
              <p class="text-[19px] font-bold text-slate-100 leading-snug">عدّاد التسجيل الحي يحتاج <span class="text-yellow-300 font-black">JavaScript</span> لأنه سلوك يتحدّث عند التفاعل؛ أما قائمة الفعاليات فمحتوى ثابت مكانه <span class="text-orange-300 font-black">HTML</span>.</p>
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

const tech = [
  { name: 'HTML', on: 'border-orange-300 bg-orange-500' },
  { name: 'CSS', on: 'border-sky-300 bg-sky-500' },
  { name: 'JavaScript', on: 'border-yellow-300 bg-yellow-500' },
]
const features = [
  { icon: '📅', text: 'قائمة الفعاليات (العناوين والتواريخ)', ans: 0, why: 'محتوى وبنية: عناوين وتواريخ ونصوص.' },
  { icon: '🎨', text: 'ألوان النادي وتخطيط الصفحة', ans: 1, why: 'مظهر: الألوان والتخطيط والخطوط.' },
  { icon: '🔢', text: 'عدّاد التسجيل الحي الذي يزيد عند الضغط', ans: 2, why: 'سلوك تفاعلي يحدّث جزءًا من الشاشة عند الضغط.' },
]
const reach = [
  { icon: '📱', title: 'التصميم المتجاوب', cls: 'border-sky-400/60 bg-sky-950/45',
    text: 'عرض قائمة الفعاليات في عمود واحد على شاشة الهاتف بدل عدة أعمدة، مع تكبير زر التسجيل.' },
  { icon: '🏷️', title: 'HTML الدلالية', cls: 'border-orange-400/60 bg-orange-950/40',
    text: 'وضع قائمة الفعاليات داخل العنصر main والقائمة داخل nav، فيعلن قارئ الشاشة وظيفة كل جزء.' },
]
</script>

<style scoped>
.opt {
  position: absolute; inset: 0; border-radius: .8rem; border-width: 2px; display: flex; align-items: center; justify-content: center;
  font-family: ui-monospace, monospace; font-size: 1.05rem; font-weight: 900; white-space: nowrap;
}
</style>
