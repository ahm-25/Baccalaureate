<template>
  <!-- Think like an engineer: research, then decide (book p. 91). The school club's event page gets few sign-ups.
       f = 0 step 1 measure a baseline (classmates who find the link within five seconds), 1 step 2 plan ONE change for
       the biggest obstacle of one group (small phone screen) with a numeric goal, 2 step 3 do / check / act + A/B and decide. -->
  <div class="absolute inset-0">
    <SlidesTitle icon="⚙️" title="فكّر كمهندس: ابحث ثم قرر" :sub="subs[f]" />

    <Transition name="sl-frame" mode="out-in">
      <!-- ───── f0: baseline ───── -->
      <div v-if="f === 0" key="base" class="absolute inset-0" dir="rtl">
        <div class="absolute top-[146px] inset-x-0 flex justify-center">
          <div class="sl-in w-[1120px] rounded-2xl border-2 border-white/15 bg-slate-900/80 px-6 py-2.5 flex items-center gap-4" style="--d: .2s">
            <span class="text-[38px]">🎉</span>
            <p class="text-[20px] font-bold text-slate-100 leading-snug">ناديك المدرسي يدير صفحة ويب لفعاليته السنوية، لكن <span class="text-rose-300 font-black">عددًا قليلًا من الطلاب يسجلون</span> من خلالها. أنت تقود جولة واحدة من التحسين باستخدام دورة <span dir="ltr" class="inline-block text-sky-300">PDCA</span>.</p>
          </div>
        </div>
        <div class="absolute top-[240px] inset-x-0 flex justify-center">
          <div class="sl-in w-[1120px] rounded-2xl border-2 border-violet-400/60 bg-violet-950/40 px-5 py-2.5 flex items-center gap-4" style="--d: 1.2s">
            <span class="shrink-0 px-4 py-1.5 rounded-xl bg-violet-600 text-white text-[21px] font-black whitespace-nowrap">① قِس خط الأساس</span>
            <p class="text-[19px] font-bold text-slate-100 leading-snug">حدّد رقمًا يمكنك قياسه قبل بدء الدورة، مثل عدد الزملاء الذين يجدون رابط التسجيل خلال خمس ثوانٍ من أصل عشرة، وسجّل النتيجة كنقطة بداية.</p>
          </div>
        </div>
        <div class="absolute top-[334px] inset-x-0 flex justify-center">
          <span class="sl-pop sl-badge !text-[18px] border-amber-400/70 bg-amber-600/25 text-amber-100" style="--d: 2.2s"><span class="tick inline-block">⏱️</span> خمس ثوانٍ لكل زميل</span>
        </div>
        <div class="absolute top-[392px] inset-x-0 flex justify-center gap-[14px]">
          <div v-for="(ok, i) in mates" :key="i" class="sl-in relative w-[84px] h-[84px]" :style="{ '--d': `${2.4 + i * 0.12}s` }">
            <div class="absolute inset-0 rounded-full border-2 border-slate-500 bg-slate-800 flex items-center justify-center text-[40px]">🧑</div>
            <span v-if="ok" class="sl-pop absolute -inset-1 rounded-full border-4 border-emerald-400 bg-emerald-600/70 flex items-center justify-center text-[36px] font-black text-white"
                  :style="{ '--d': `${3.6 + i * 0.3}s` }">✓</span>
            <span v-else class="sl-pop absolute -bottom-1 -left-1 w-[32px] h-[32px] rounded-full border-2 border-rose-400 bg-rose-900 flex items-center justify-center text-[18px] font-black text-rose-100"
                  :style="{ '--d': `${3.6 + i * 0.3}s` }">✗</span>
          </div>
        </div>
        <div class="absolute top-[500px] inset-x-0 flex justify-center items-center gap-3">
          <span class="sl-pop sl-badge !text-[23px] border-sky-300 bg-sky-600/40 text-white" style="--d: 7s">📍 خط الأساس: 3 من 10 يجدون الرابط خلال خمس ثوانٍ</span>
          <span class="sl-fade text-[16px] font-bold text-slate-400" style="--d: 7.4s">(رقم للتوضيح)</span>
        </div>
      </div>

      <!-- ───── f1: plan one change ───── -->
      <div v-else-if="f === 1" key="plan" class="absolute inset-0">
        <div class="absolute top-[146px] inset-x-0 flex justify-center" dir="rtl">
          <div class="sl-in w-[1120px] rounded-2xl border-2 border-sky-400/60 bg-sky-950/40 px-5 py-2.5 flex items-center gap-4" style="--d: .2s">
            <span class="shrink-0 px-4 py-1.5 rounded-xl bg-sky-600 text-white text-[21px] font-black whitespace-nowrap">② خطّط لتغيير واحد</span>
            <p class="text-[19px] font-bold text-slate-100 leading-snug">من بين المستخدمين الذين راقبتهم، حدد <span class="text-amber-300 font-black">أكبر عائق واحد</span> (لفئة محددة، مثل طالب يفتح الصفحة على شاشة هاتف صغيرة) وخطّط لتغيير واحد لإصلاحه. اذكر الهدف كرقم.</p>
          </div>
        </div>

        <!-- before phone (right) -->
        <div class="sl-in absolute left-[960px] top-[244px] w-[180px]" style="--d: 1s">
          <div class="relative h-[270px] rounded-[26px] border-4 border-slate-500 bg-slate-950 p-2">
            <div class="relative h-full rounded-[18px] bg-slate-800 overflow-hidden" dir="rtl">
              <div class="h-[28px] bg-slate-700 flex items-center justify-center text-[13px] font-black text-white">🎉 فعالية النادي</div>
              <div class="mx-2 mt-2 h-[60px] rounded-lg bg-slate-600 flex items-center justify-center text-[26px]">🏆</div>
              <div v-for="w in [120, 100, 130, 90, 115, 80]" :key="w" class="mx-2 mt-2 h-[8px] rounded bg-slate-600" :style="{ width: `${w}px` }"></div>
              <div class="absolute -bottom-[16px] inset-x-0 flex justify-center">
                <span class="px-3 py-1.5 rounded-lg bg-rose-600 text-white text-[14px] font-black">سجّل الآن</span>
              </div>
            </div>
            <span class="search absolute text-[30px]">🔍</span>
          </div>
          <div class="mt-2 text-center text-[16px] font-black text-rose-300" dir="rtl">قبل: الرابط أسفل الصفحة 😕</div>
        </div>

        <!-- one change -->
        <div class="sl-fade absolute left-[760px] top-[350px] w-[180px] flex flex-col items-center" style="--d: 2.6s" dir="rtl">
          <span class="text-[17px] font-black text-amber-200 whitespace-nowrap">🔧 تغيير واحد فقط</span>
          <div class="relative mt-2 w-[150px] h-[4px] bg-amber-300"><span class="ah-l"></span></div>
        </div>

        <!-- after phone -->
        <div class="sl-in absolute left-[560px] top-[244px] w-[180px]" style="--d: 3.2s">
          <div class="relative h-[270px] rounded-[26px] border-4 border-emerald-400 bg-slate-950 p-2">
            <div class="relative h-full rounded-[18px] bg-slate-800 overflow-hidden" dir="rtl">
              <div class="h-[28px] bg-slate-700 flex items-center justify-center text-[13px] font-black text-white">🎉 فعالية النادي</div>
              <div class="mt-2 flex justify-center">
                <span class="glow px-4 py-2 rounded-lg bg-emerald-500 text-white text-[16px] font-black">سجّل الآن ✍️</span>
              </div>
              <div class="mx-2 mt-2 h-[52px] rounded-lg bg-slate-600 flex items-center justify-center text-[24px]">🏆</div>
              <div v-for="w in [120, 100, 130, 90]" :key="w" class="mx-2 mt-2 h-[8px] rounded bg-slate-600" :style="{ width: `${w}px` }"></div>
            </div>
          </div>
          <div class="mt-2 text-center text-[16px] font-black text-emerald-300" dir="rtl">بعد: الزر أعلى الصفحة 😊</div>
        </div>

        <!-- goal (left) -->
        <div class="sl-in absolute left-[60px] top-[250px] w-[450px] h-[300px] rounded-3xl border-2 border-amber-400/60 bg-amber-950/35 px-6 py-4 flex flex-col items-center" style="--d: 4.4s" dir="rtl">
          <div class="flex flex-col gap-2 w-full">
            <span class="sl-badge !text-[16px] !whitespace-normal border-white/15 bg-white/5 text-slate-100">👥 الفئة: طالب على شاشة هاتف صغيرة</span>
            <span class="sl-badge !text-[16px] !whitespace-normal border-white/15 bg-white/5 text-slate-100">🚧 أكبر عائق: رابط التسجيل أسفل الصفحة</span>
          </div>
          <div class="mt-4 text-[22px] font-black text-amber-300">🎯 الهدف كرقم</div>
          <div class="sl-pop mt-1 text-[54px] leading-none font-black text-white" style="--d: 5.4s">8 من 10</div>
          <div class="mt-2 text-[20px] font-bold text-slate-200">يجدونه خلال خمس ثوانٍ</div>
          <div class="sl-fade mt-2 text-[16px] font-bold text-slate-400" style="--d: 6s">(خط الأساس: 3 من 10)</div>
        </div>
      </div>

      <!-- ───── f2: do, check, act – and decide ───── -->
      <div v-else key="decide" class="absolute inset-0" dir="rtl">
        <div class="absolute top-[146px] inset-x-0 flex justify-center">
          <div class="sl-in w-[1120px] rounded-2xl border-2 border-emerald-400/60 bg-emerald-950/40 px-5 py-2.5 flex items-center gap-4" style="--d: .2s">
            <span class="shrink-0 px-4 py-1.5 rounded-xl bg-emerald-600 text-white text-[21px] font-black whitespace-nowrap">③ نفّذ، تحقّق، تصرّف – وقرّر</span>
            <p class="text-[18px] font-bold text-slate-100 leading-snug">صف كيف ستنفذ التغيير وتقيس النتيجة وتحدد الخطوة التالية. ثم اختر فرقًا واضحًا بين نسختين A و B، وحدد المقياس الذي ستقارنه وتصميم توزيع المستخدمين المناسب.</p>
          </div>
        </div>

        <!-- plan (right) -->
        <div class="absolute left-[660px] top-[236px] w-[560px] flex flex-col gap-[5px]">
          <div v-for="(r, i) in plan" :key="r.k" class="sl-in h-[44px] rounded-xl border-2 bg-slate-900/85 flex items-center gap-3 pl-3" :class="r.border"
               :style="{ '--d': `${0.8 + i * 0.6}s` }">
            <span class="w-[96px] h-full shrink-0 rounded-r-[10px] flex items-center justify-center text-[18px] font-black text-white whitespace-nowrap" :class="r.chip">{{ r.k }}</span>
            <span class="text-[17px] font-bold text-slate-100 whitespace-nowrap" v-html="r.text"></span>
          </div>
        </div>

        <!-- decision (left) -->
        <div class="absolute left-[60px] top-[236px] w-[570px] flex flex-col gap-2">
          <div v-for="(c, i) in choices" :key="c.text" class="sl-in relative h-[58px]" :style="{ '--d': `${4 + i * 0.4}s` }">
            <div class="absolute inset-0 rounded-2xl border-2 border-slate-600 bg-slate-800/80 flex items-center gap-3 px-4 text-[20px] font-black text-slate-300">
              <span class="text-[24px]">☐</span> {{ c.text }}
            </div>
            <div class="sl-pop absolute inset-0 rounded-2xl border-2 flex items-center gap-3 px-4 text-[20px] font-black" :class="c.cls" :style="{ '--d': `${5.4 + i * 0.6}s` }">
              <span class="text-[24px]">{{ c.ok ? '☑' : '✗' }}</span> {{ c.text }}
            </div>
          </div>
          <div class="sl-in mt-1 h-[104px] rounded-2xl border-2 border-emerald-400/60 bg-emerald-950/45 px-4 py-2" style="--d: 6.8s">
            <div class="text-[17px] font-black text-emerald-300">قدّم دليلًا على إجابتك:</div>
            <p class="text-[18px] font-bold text-white leading-snug">تغيير واحد مقاس يوضح ما الذي أحدث الفرق، بينما إعادة تصميم كل شيء دفعة واحدة لا تكشف ذلك.</p>
          </div>
        </div>

        <!-- hint -->
        <div class="absolute top-[490px] inset-x-0 flex justify-center">
          <div class="sl-in w-[1120px] rounded-2xl border-2 border-dashed border-amber-400/60 bg-amber-950/25 px-5 py-2 text-[18px] font-bold text-slate-100 leading-snug" style="--d: 8s">
            <span class="text-amber-300 font-black">🤔 هل تواجه صعوبة؟</span> ابدأ من رقمك المقاس (تحقّق)، واختر العائق الوحيد الذي يكشفه، وخطّط لإصلاح واحد (خطّط)، ثم كرّر الحلقة – لا تغيّر كل شيء دفعة واحدة.
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import SlidesTitle from '~/components/slides/Title.vue'

defineProps<{ f: number }>()

const subs = ['صفحة فعالية النادي المدرسي: جولة تحسين واحدة', 'الفئة · العائق · التغيير · الهدف', 'جولة PDCA واحدة مقاسة… أم إعادة تصميم كل شيء؟']
// 3 of 10 classmates find the link within five seconds (illustrative)
const mates = [false, true, false, false, true, false, false, false, true, false]

const plan = [
  { k: 'نفّذ', border: 'border-indigo-400/60', chip: 'bg-indigo-600', text: 'ننقل زر التسجيل فقط، دون تغيير أي شيء آخر' },
  { k: 'تحقّق', border: 'border-violet-400/60', chip: 'bg-violet-600', text: 'نعيد القياس ونقارن بخط الأساس والهدف' },
  { k: 'تصرّف', border: 'border-emerald-400/60', chip: 'bg-emerald-600', text: 'نعتمد التغيير، أو نخطط لتغيير آخر في حلقة جديدة' },
  { k: 'A / B', border: 'border-rose-400/60', chip: 'bg-rose-600', text: 'A: الزر في مكانه · B: الزر أعلى الصفحة' },
  { k: 'المقياس', border: 'border-amber-400/60', chip: 'bg-amber-600', text: 'نسبة إتمام التسجيل · التوزيع: عشوائي' },
]
const choices = [
  { text: 'إعادة تصميم كل شيء دفعة واحدة', ok: false, cls: 'border-rose-400/70 bg-rose-950/80 text-rose-200 line-through' },
  { text: 'التحسين عبر حلقة PDCA واحدة مقاسة', ok: true, cls: 'border-emerald-300 bg-emerald-600 text-white shadow-[0_0_30px_rgba(52,211,153,.45)]' },
]
</script>

<style scoped>
.tick { animation: tick 1s steps(2) infinite; }
@keyframes tick { 50% { transform: rotate(12deg) } }
.search { left: 30px; top: 60px; animation: search 3s ease-in-out 1.6s infinite; }
@keyframes search { 0%, 100% { left: 30px; top: 60px } 33% { left: 110px; top: 120px } 66% { left: 50px; top: 190px } }
.ah-l { position: absolute; left: -12px; top: -7px; width: 0; height: 0; border-top: 9px solid transparent; border-bottom: 9px solid transparent; border-right: 14px solid #fcd34d; }
.glow { display: inline-block; animation: glow 1.6s ease-in-out 3.8s infinite; }
@keyframes glow { 50% { box-shadow: 0 0 24px rgba(52, 211, 153, .9); transform: scale(1.06) } }
</style>
