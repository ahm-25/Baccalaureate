<template>
  <!-- Heuristic evaluation. f = 0 definition + the book figure (experts check a UI against a checklist of heuristics),
       1 the three heuristics used in the lesson, each with a broken / fixed mini screen,
       2 the key idea: "how many?" (quantitative) + "why?" (qualitative). -->
  <div class="absolute inset-0">
    <SlidesTitle :icon="head.icon" :title="head.title" :sub="head.sub" />

    <Transition name="sl-frame" mode="out-in">
      <!-- ───── f0: definition + figure ───── -->
      <div v-if="f === 0" key="def" class="absolute inset-0">
        <div class="absolute top-[146px] inset-x-0 flex justify-center">
          <div class="sl-in sl-card border-amber-400/60 w-[1120px] px-8 py-3 text-center" style="--d: .2s" dir="rtl">
            <p class="text-[22px] font-bold text-white leading-snug">
              <span class="sl-hl-amber font-black">التقييم الإرشادي</span>
              <span class="text-amber-200 font-mono text-[18px]" dir="ltr">(Heuristic Evaluation)</span>:
              مراجعة يجريها <span class="text-amber-300 font-black">خبراء</span> لواجهة المستخدم <span dir="ltr" class="inline-block">(UI)</span>
              استنادًا إلى قواعد أو مبادئ إرشادية عملية <span dir="ltr" class="inline-block font-mono text-[18px] text-amber-200">(heuristics)</span>.
            </p>
            <p class="mt-1 text-[18px] font-bold text-slate-300 leading-snug">
              وهي شكل من أشكال <span class="text-violet-300 font-black">التقييم النوعي</span>، تُستخدم إلى جانب اختبار قابلية الاستخدام وطرق أخرى لبحث أسباب مشكلات قابلية الاستخدام.
            </p>
          </div>
        </div>

        <!-- UI mock -->
        <div class="sl-in absolute left-[170px] top-[300px] w-[400px] h-[205px] rounded-2xl border-2 border-sky-400/60 bg-slate-900/90 overflow-hidden" style="--d: 1.4s">
          <div class="h-[24px] bg-sky-500/30 flex items-center gap-1.5 px-3">
            <span class="w-2.5 h-2.5 rounded-full bg-white/40"></span><span class="w-2.5 h-2.5 rounded-full bg-white/40"></span>
          </div>
          <div class="p-3 flex gap-3">
            <div class="w-[150px] h-[90px] rounded-lg bg-gradient-to-br from-sky-700 to-sky-900"></div>
            <div class="flex-1 flex flex-col gap-2 pt-1">
              <span class="h-[10px] rounded bg-slate-500"></span>
              <span class="h-[10px] w-[80%] rounded bg-slate-600"></span>
              <span class="h-[10px] w-[60%] rounded bg-slate-600"></span>
              <span class="mt-2 h-[30px] w-[100px] rounded-lg bg-sky-500 text-white text-[14px] font-black flex items-center justify-center" dir="rtl">💾 حفظ</span>
            </div>
          </div>
          <div class="px-3 flex gap-2">
            <span class="flex-1 h-[40px] rounded-lg bg-slate-700"></span>
            <span class="flex-1 h-[40px] rounded-lg bg-slate-700"></span>
            <span class="flex-1 h-[40px] rounded-lg bg-slate-700"></span>
          </div>
          <span class="scan absolute text-[44px]">🔍</span>
        </div>

        <!-- wires -->
        <div v-for="(y, i) in [345, 400, 455]" :key="y" class="sl-fade absolute left-[580px] w-[170px] h-[4px]" :style="{ top: `${y}px`, '--d': `${2.2 + i * 0.6}s` }">
          <div class="w-full h-full sl-wire"></div>
        </div>

        <!-- checklist -->
        <div class="sl-in absolute left-[760px] top-[300px] w-[350px] h-[205px] rounded-2xl border-2 border-amber-400/70 bg-amber-950/40 px-5 py-3" style="--d: 1.8s" dir="rtl">
          <div class="text-[19px] font-black text-amber-200">🧑‍🏫 الخبير يراجع: قواعد إرشادية</div>
          <div v-for="(c, i) in checks" :key="c.name" class="mt-2 h-[40px] rounded-xl bg-black/30 flex items-center gap-3 px-3">
            <span class="relative w-[30px] h-[30px] shrink-0 rounded-md border-2 border-slate-500">
              <span class="sl-pop absolute inset-0 flex items-center justify-center text-[20px]" :style="{ '--d': `${2.6 + i * 0.6}s` }">{{ c.mark }}</span>
            </span>
            <span class="text-[19px] font-bold text-white">{{ c.name }}</span>
          </div>
        </div>
        <p class="sl-fade absolute top-[516px] inset-x-0 text-center text-[17px] font-bold text-slate-400" style="--d: 4.6s" dir="rtl">
          التقييم الإرشادي: مراجعة يجريها خبراء للواجهة مقابل قواعد أو مبادئ إرشادية عملية.
        </p>
      </div>

      <!-- ───── f1: three heuristics ───── -->
      <div v-else-if="f === 1" key="rules" class="absolute inset-0">
        <div v-for="(r, i) in rules" :key="r.name" class="sl-in absolute top-[146px] w-[375px] h-[410px] rounded-3xl border-2 px-4 py-3 flex flex-col" :class="r.cls"
             :style="{ left: `${[835, 452, 69][i]}px`, '--d': `${0.3 + i * 2.6}s` }" dir="rtl">
          <div class="flex items-center gap-2">
            <span class="w-9 h-9 rounded-full bg-white/15 text-white text-[20px] font-black flex items-center justify-center shrink-0">{{ i + 1 }}</span>
            <span class="text-[25px] font-black" :class="r.text">{{ r.icon }} {{ r.name }}</span>
          </div>
          <p class="mt-1.5 h-[72px] text-[17px] font-bold text-slate-100 leading-snug">{{ r.desc }}</p>

          <!-- ✗ panel -->
          <div class="sl-in relative mt-2 h-[118px] rounded-2xl border-2 border-rose-400/60 bg-rose-950/40" :style="{ '--d': `${1.1 + i * 2.6}s` }">
            <span class="absolute -top-3 right-3 px-2 rounded-md bg-rose-500 text-white text-[14px] font-black">✗ مخالفة</span>
            <!-- consistency: two pages, two different save buttons -->
            <div v-if="r.kind === 'cons'" class="absolute inset-0 flex items-center justify-center gap-3 pt-2">
              <div class="w-[150px] h-[80px] rounded-lg bg-slate-800 border border-white/15 relative">
                <span class="absolute top-1 right-2 text-[12px] font-bold text-slate-400">صفحة 1</span>
                <span class="absolute bottom-2 right-2 px-2 py-1 rounded-md bg-sky-500 text-white text-[13px] font-black whitespace-nowrap">💾 حفظ</span>
              </div>
              <div class="w-[150px] h-[80px] rounded-lg bg-slate-800 border border-white/15 relative">
                <span class="absolute top-1 right-2 text-[12px] font-bold text-slate-400">صفحة 2</span>
                <span class="absolute top-6 left-2 px-2 py-1 rounded-full bg-emerald-600 text-white text-[12px] font-black whitespace-nowrap">تخزين البيانات ✔</span>
              </div>
            </div>
            <!-- error prevention: delete right next to save, no confirmation -->
            <div v-else-if="r.kind === 'err'" class="absolute inset-0 flex flex-col items-center justify-center gap-2 pt-2">
              <div class="w-[300px] h-[44px] rounded-lg bg-slate-800 border border-white/15 flex items-center gap-1.5 px-3">
                <span class="flex-1 text-[14px] font-bold text-slate-200">واجب الرياضيات</span>
                <span class="px-2 py-1 rounded-md bg-rose-600 text-white text-[13px] font-black">🗑️ حذف</span>
                <span class="px-2 py-1 rounded-md bg-sky-500 text-white text-[13px] font-black">💾 حفظ</span>
              </div>
              <span class="text-[14px] font-bold text-rose-200">الزران متلاصقان… والحذف فوري دون تأكيد</span>
            </div>
            <!-- system status: nothing happens after clicking upload -->
            <div v-else class="absolute inset-0 flex flex-col items-center justify-center gap-2 pt-2">
              <span class="px-4 py-1.5 rounded-lg bg-sky-500 text-white text-[15px] font-black">⬆️ رفع ملف المشروع</span>
              <span class="text-[14px] font-bold text-rose-200">ضغطت 3 مرات… هل حدث شيء؟ لا توجد أي رسالة.</span>
            </div>
          </div>

          <!-- ✓ panel -->
          <div class="sl-in relative mt-4 h-[118px] rounded-2xl border-2 border-emerald-400/60 bg-emerald-950/40" :style="{ '--d': `${1.9 + i * 2.6}s` }">
            <span class="absolute -top-3 right-3 px-2 rounded-md bg-emerald-500 text-white text-[14px] font-black">✓ مراعاة</span>
            <div v-if="r.kind === 'cons'" class="absolute inset-0 flex items-center justify-center gap-3 pt-2">
              <div v-for="n in 2" :key="n" class="w-[150px] h-[80px] rounded-lg bg-slate-800 border border-white/15 relative">
                <span class="absolute top-1 right-2 text-[12px] font-bold text-slate-400">صفحة {{ n }}</span>
                <span class="absolute bottom-2 right-2 px-2 py-1 rounded-md bg-sky-500 text-white text-[13px] font-black whitespace-nowrap">💾 حفظ</span>
              </div>
            </div>
            <div v-else-if="r.kind === 'err'" class="absolute inset-0 flex items-center justify-center pt-2">
              <div class="w-[290px] rounded-xl bg-white text-slate-900 px-3 py-2 text-center shadow-lg">
                <div class="text-[15px] font-black">هل أنت متأكد من حذف الواجب؟</div>
                <div class="mt-1.5 flex justify-center gap-2">
                  <span class="px-3 py-0.5 rounded-md bg-slate-200 text-[13px] font-black">إلغاء</span>
                  <span class="px-3 py-0.5 rounded-md bg-rose-600 text-white text-[13px] font-black">نعم، احذف</span>
                </div>
              </div>
            </div>
            <div v-else class="absolute inset-0 flex flex-col items-center justify-center gap-2 pt-2">
              <span class="text-[15px] font-black text-slate-100">⏳ جارٍ الرفع…</span>
              <div class="w-[260px] h-[14px] rounded-full bg-slate-700 overflow-hidden" dir="ltr">
                <div class="fill h-full rounded-full bg-emerald-400" :style="{ animationDelay: `${2.3 + i * 2.6}s` }"></div>
              </div>
              <span class="text-[14px] font-black text-emerald-300">✓ تم رفع الملف بنجاح.</span>
            </div>
          </div>
        </div>
      </div>

      <!-- ───── f2: key idea ───── -->
      <div v-else key="key" class="absolute inset-0">
        <div v-for="(b, i) in bins" :key="b.q" class="sl-in absolute top-[146px] w-[500px] h-[250px] rounded-3xl border-2 flex flex-col overflow-hidden" :class="b.cls"
             :style="{ left: `${b.x}px`, '--d': `${0.3 + i * 2.2}s` }" dir="rtl">
          <div class="px-6 pt-3 flex items-baseline gap-3">
            <span class="text-[44px] font-black text-white">{{ b.icon }} {{ b.q }}</span>
            <span class="text-[22px] font-black" :class="b.text">← {{ b.method }}</span>
          </div>
          <div class="px-6 mt-2 flex flex-wrap gap-2">
            <span v-for="(c, j) in b.chips" :key="c" class="sl-pop sl-badge !text-[18px]" :class="b.chip"
                  :style="{ '--d': `${0.9 + i * 2.2 + j * 0.3}s` }">{{ c }}</span>
          </div>
          <div class="mt-auto h-[58px] flex items-center justify-center text-[22px] font-black text-white" :class="b.band">{{ b.reveals }}</div>
        </div>
        <div class="sl-pop absolute left-[612px] top-[240px] w-[56px] h-[56px] rounded-full bg-white text-slate-900 text-[30px] font-black flex items-center justify-center" style="--d: 4.6s">+</div>

        <div class="absolute top-[412px] inset-x-0 flex justify-center">
          <div class="sl-in sl-card border-amber-400/70 w-[1120px] px-8 py-3 text-center" style="--d: 5.2s" dir="rtl">
            <div class="text-[17px] font-black text-amber-300">⭐ الفكرة الرئيسة</div>
            <p class="text-[21px] font-bold text-white leading-snug">
              لتقييم موقع إلكتروني جيدًا، اجمع بين <span class="text-sky-300 font-black">«كم»</span> الخاصة بالبيانات الكمية (PV، معدل الارتداد، CVR)
              و<span class="text-violet-300 font-black">«لماذا»</span> الخاصة بالطرق النوعية (اختبارات قابلية الاستخدام، المقابلات، التقييم الإرشادي)،
              فالأرقام تكشف ما يحدث، والمستخدمون يكشفون الأسباب.
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

const checks = [
  { name: 'الاتساق', mark: '✅' },
  { name: 'منع الأخطاء', mark: '🚩' },
  { name: 'وضوح حالة النظام', mark: '✅' },
]

const rules = [
  { kind: 'cons', icon: '🔁', name: 'الاتساق', cls: 'border-emerald-400/60 bg-slate-900/85', text: 'text-emerald-300',
    desc: 'ما إذا كان التصميم والعمليات موحدة عبر الموقع.' },
  { kind: 'err', icon: '🛑', name: 'منع الأخطاء', cls: 'border-rose-400/60 bg-slate-900/85', text: 'text-rose-300',
    desc: 'ما إذا كان التصميم يجعل من الصعب على المستخدمين ارتكاب الأخطاء.' },
  { kind: 'status', icon: '📡', name: 'وضوح حالة النظام', cls: 'border-sky-400/60 bg-slate-900/85', text: 'text-sky-300',
    desc: 'ما إذا كانت حالة النظام موضحة بوضوح للمستخدمين (مثل مؤشرات المعالجة، ورسائل أخطاء الإدخال).' },
]

const bins = [
  { x: 670, q: 'لماذا؟', icon: '💬', method: 'الطرق النوعية', cls: 'border-violet-400/70 bg-violet-950/45', text: 'text-violet-300',
    chip: 'border-violet-300/70 bg-violet-600/30 text-violet-50', band: 'bg-violet-600/50',
    chips: ['🧪 اختبارات قابلية الاستخدام', '🎤 المقابلات', '🧑‍🏫 التقييم الإرشادي'], reveals: '👥 المستخدمون يكشفون الأسباب' },
  { x: 110, q: 'كم؟', icon: '📊', method: 'البيانات الكمية', cls: 'border-sky-400/70 bg-sky-950/45', text: 'text-sky-300',
    chip: 'border-sky-300/70 bg-sky-600/30 text-sky-50', band: 'bg-sky-600/50',
    chips: ['👁️ PV', '↩️ معدل الارتداد', '🎯 CVR'], reveals: '🔢 الأرقام تكشف ما يحدث' },
]

const head = computed(() => [
  { icon: '🧑‍🏫', title: 'التقييم الإرشادي', sub: 'خبراء يفحصون الواجهة بقواعد عملية' },
  { icon: '📏', title: 'ثلاث قواعد إرشادية', sub: 'أمثلة نستخدمها في هذا الدرس' },
  { icon: '⭐', title: 'الفكرة الرئيسة', sub: 'طابق السؤال بالطريقة: «كم؟» مقابل «لماذا؟»' },
][props.f]!)
</script>

<style scoped>
.scan { left: 20px; top: 40px; animation: scan 4s ease-in-out 1.8s infinite; }
@keyframes scan {
  0% { left: 20px; top: 40px } 33% { left: 300px; top: 50px }
  66% { left: 160px; top: 130px } 100% { left: 20px; top: 40px }
}
.fill { width: 0; animation: fill 2s ease-out forwards; }
@keyframes fill { to { width: 100% } }
</style>
