<template>
  <!-- Think like an engineer: research, then decide (book). A public library announces a free reading programme.
       f = 0 collect data (survey tally; the numbers are an illustrative example), 1 analyse the audience
       (one benefit and one drawback of a website as the main channel), 2 decide (combine media by purpose). -->
  <div class="absolute inset-0">
    <SlidesTitle icon="⚙️" title="فكّر كمهندس: ابحث ثم قرر" :sub="subs[f]" />

    <Transition name="sl-frame" mode="out-in">
      <!-- ───── f0: collect data ───── -->
      <div v-if="f === 0" key="data" class="absolute inset-0">
        <div class="absolute top-[145px] inset-x-0 flex justify-center" dir="rtl">
          <div class="sl-in w-[1100px] rounded-2xl border-2 border-white/15 bg-slate-900/80 px-6 py-2.5 text-center text-[20px] font-bold text-slate-100 leading-snug" style="--d: .2s">
            🏛️ مكتبة عامة في مدينتك تريد إخبار الناس عن <span class="text-amber-300 font-black">برنامج قراءة مجاني جديد</span>. أنت تقدّم المشورة حول الوسائط التي ينبغي استخدامها.
          </div>
        </div>
        <!-- step card (right) -->
        <div class="sl-in absolute left-[700px] top-[240px] w-[520px] h-[330px] rounded-3xl border-2 border-amber-400/60 bg-amber-950/35 px-6 py-4" style="--d: .8s" dir="rtl">
          <div class="text-[24px] font-black text-amber-300">① اجمع البيانات</div>
          <p class="mt-2 text-[19px] font-bold text-slate-100 leading-snug">
            اسأل عشرة من زملائك أو أفراد عائلتك: أين يلاحظون فعليًا الإعلانات المحلية – ملصق مطبوع، فيسبوك، واتساب، أم راديو محلي؟
            سجّل النتائج في جدول وحدد <span class="text-amber-300 font-black">القناة الأكثر شيوعًا</span>.
          </p>
          <div class="mt-4 flex flex-wrap gap-1.5">
            <span v-for="k in 10" :key="k" class="sl-pop text-[26px] leading-none" :style="{ '--d': `${1.4 + k * 0.1}s` }">👤</span>
          </div>
        </div>
        <!-- tally (left) -->
        <div class="sl-in absolute left-[60px] top-[240px] w-[620px] h-[330px] rounded-3xl border-2 border-white/15 bg-slate-900/85" style="--d: 1.2s" dir="rtl">
          <div class="absolute top-[14px] inset-x-5 flex items-baseline justify-between">
            <span class="text-[22px] font-black text-white">📊 جدول النتائج</span>
            <span class="text-[15px] font-bold text-slate-400">(نتائج افتراضية للتوضيح)</span>
          </div>
          <div v-for="(c, i) in tally" :key="c.name" class="absolute inset-x-4 h-[48px]" :style="{ top: `${56 + i * 56}px` }">
            <div v-if="c.win" class="sl-pop absolute -inset-1 rounded-xl border-2 border-amber-400 bg-amber-500/15" style="--d: 6.4s"></div>
            <div class="relative h-full flex items-center gap-3">
              <span class="w-[170px] shrink-0 text-[19px] font-black text-white whitespace-nowrap">{{ c.icon }} {{ c.name }}</span>
              <div class="flex gap-[6px]" dir="ltr">
                <span v-for="k in 10" :key="k" class="relative w-[28px] h-[28px]">
                  <span class="absolute inset-0 rounded-md border border-slate-700"></span>
                  <span v-if="k <= c.at.length" class="sl-pop absolute inset-0 rounded-md" :class="c.cls" :style="{ '--d': `${1.8 + c.at[k - 1]! * 0.45}s` }"></span>
                </span>
              </div>
              <span class="sl-fade w-[30px] text-center text-[22px] font-black text-white" style="--d: 6.2s">{{ c.at.length }}</span>
            </div>
          </div>
          <div class="absolute top-[290px] inset-x-0 flex justify-center">
            <span class="sl-pop sl-badge !text-[18px] border-amber-400 bg-amber-600/30 text-amber-50" style="--d: 6.8s">⭐ القناة الأكثر شيوعًا في هذا المثال: 💬 واتساب</span>
          </div>
        </div>
      </div>

      <!-- ───── f1: analyse the audience ───── -->
      <div v-else-if="f === 1" key="aud" class="absolute inset-0">
        <div class="absolute top-[145px] inset-x-0 flex justify-center" dir="rtl">
          <div class="sl-in w-[1100px] rounded-2xl border-2 border-amber-400/60 bg-amber-950/35 px-6 py-2.5 text-center text-[20px] font-bold text-slate-100 leading-snug" style="--d: .2s">
            <span class="text-amber-300 font-black">② حلّل الجمهور:</span> لكل مجموعة – عائلة بلا إنترنت منزلي، وطالب، وأمين المكتبة – دوّن فائدة واحدة وعيبًا واحدًا لاستخدام موقع إلكتروني كقناة رئيسية للمكتبة.
          </div>
        </div>
        <div class="absolute top-[240px] inset-x-0 flex justify-center gap-6" dir="rtl">
          <div v-for="(a, i) in audiences" :key="a.name" class="sl-in w-[360px] h-[325px] rounded-3xl border-2 border-white/15 bg-slate-900/85 px-5 py-4 flex flex-col"
               :style="{ '--d': `${0.9 + i * 2.4}s` }">
            <div class="flex items-center gap-3">
              <span class="text-[44px] leading-none">{{ a.icon }}</span>
              <span class="text-[22px] font-black text-white leading-tight">{{ a.name }}</span>
            </div>
            <div class="sl-in mt-3 rounded-2xl border-2 border-emerald-400/60 bg-emerald-950/45 px-4 py-2.5" :style="{ '--d': `${1.6 + i * 2.4}s` }">
              <div class="text-[17px] font-black text-emerald-300">✓ فائدة</div>
              <p class="text-[17px] font-bold text-slate-100 leading-snug">{{ a.plus }}</p>
            </div>
            <div class="sl-in mt-3 rounded-2xl border-2 border-rose-400/60 bg-rose-950/40 px-4 py-2.5" :style="{ '--d': `${2.3 + i * 2.4}s` }">
              <div class="text-[17px] font-black text-rose-300">✗ عيب</div>
              <p class="text-[17px] font-bold text-slate-100 leading-snug">{{ a.minus }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- ───── f2: decide ───── -->
      <div v-else key="decide" class="absolute inset-0">
        <div class="absolute top-[145px] inset-x-0 flex justify-center gap-6" dir="rtl">
          <div v-for="(c, i) in choices" :key="c.text" class="sl-in relative w-[440px] h-[56px] rounded-2xl border-2 border-white/15 bg-slate-900/85 flex items-center gap-3 px-4"
               :style="{ '--d': `${0.3 + i * 0.3}s` }">
            <span class="relative w-[30px] h-[30px] shrink-0">
              <span class="absolute inset-0 rounded-md border-2 border-slate-400"></span>
              <span class="sl-pop absolute inset-0 rounded-md flex items-center justify-center text-[18px] font-black text-white" :class="c.ok ? 'bg-emerald-500' : 'bg-rose-500'"
                    style="--d: 1.4s">{{ c.ok ? '✓' : '✗' }}</span>
            </span>
            <span class="text-[21px] font-black whitespace-nowrap" :class="c.ok ? 'text-emerald-200' : 'text-slate-300'">{{ c.text }}</span>
          </div>
        </div>
        <p class="sl-fade absolute top-[214px] inset-x-0 text-center text-[19px] font-black text-slate-300" style="--d: 2s" dir="rtl">③ خطة إعلامية مقترحة (مثال): أي وسائط، وبأي أدوار؟</p>
        <div class="absolute top-[248px] inset-x-0 flex justify-center gap-6" dir="rtl">
          <div v-for="(r, i) in plan" :key="r.media" class="sl-pop w-[360px] h-[160px] rounded-3xl border-2 flex flex-col items-center justify-center text-center px-4"
               :class="r.cls" :style="{ '--d': `${2.4 + i * 0.9}s` }">
            <span class="text-[40px] leading-none">{{ r.icon }}</span>
            <span class="mt-2 text-[21px] font-black text-white">{{ r.media }}</span>
            <span class="mt-1 text-[17px] font-bold text-slate-200 leading-snug">{{ r.role }}</span>
          </div>
        </div>
        <div class="absolute top-[424px] inset-x-0 flex justify-center gap-4" dir="rtl">
          <span v-for="(w, i) in reasons" :key="w" class="sl-in sl-badge !text-[18px] border-white/20 bg-white/5 text-slate-100" :style="{ '--d': `${5.4 + i * 0.6}s` }">{{ w }}</span>
        </div>
        <div class="absolute top-[488px] inset-x-0 flex justify-center" dir="rtl">
          <div class="sl-pop flex items-center gap-3 rounded-3xl border-2 border-amber-400 bg-amber-950/50 px-7 py-3" style="--d: 7s">
            <span class="text-[20px] font-black text-white whitespace-nowrap">👥 في أزواج: أفضل وسيلة للعائلات غير المتصلة بالإنترنت</span>
            <span class="px-3 py-1 rounded-xl bg-amber-500 text-white text-[19px] font-black whitespace-nowrap">📻 راديو محلي</span>
            <span class="text-[18px] font-black text-amber-200">أو</span>
            <span class="px-3 py-1 rounded-xl bg-amber-500 text-white text-[19px] font-black whitespace-nowrap">🖼️ ملصق مطبوع</span>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import SlidesTitle from '~/components/slides/Title.vue'

defineProps<{ f: number }>()

const subs = ['① اجمع البيانات', '② حلّل الجمهور', '③ قرّر']

/* Illustrative survey of 10 people (not from the book). `at` = the order in which each answer arrives. */
const tally = [
  { icon: '🖼️', name: 'ملصق مطبوع', at: [1, 4, 8], cls: 'bg-amber-400', win: false },
  { icon: '👍', name: 'فيسبوك', at: [5], cls: 'bg-sky-400', win: false },
  { icon: '💬', name: 'واتساب', at: [0, 3, 6, 9], cls: 'bg-emerald-400', win: true },
  { icon: '📻', name: 'راديو محلي', at: [2, 7], cls: 'bg-violet-400', win: false },
]

const audiences = [
  { icon: '🏠', name: 'عائلة بلا إنترنت منزلي',
    plus: 'قد تزور الموقع من مكان آخر لاحقًا.', minus: 'لن تصل إليها المعلومات لأن الموقع يحتاج إلى اتصال وفتح.' },
  { icon: '🎓', name: 'طالب',
    plus: 'يصل إلى التفاصيل المحدَّثة في أي وقت من هاتفه.', minus: 'يجب أن يعرف بوجود الموقع ويفتحه بنفسه.' },
  { icon: '📚', name: 'أمين المكتبة',
    plus: 'يحدّث المواعيد والمعلومات بسهولة في أي وقت.', minus: 'الموقع وحده لا يضمن وصول الإعلان إلى كل الجمهور.' },
]

const choices = [
  { text: 'استخدام وسيلة واحدة فقط', ok: false },
  { text: 'الجمع بين الوسائط حسب الغرض', ok: true },
]
const plan = [
  { icon: '📻🖼️', media: 'راديو محلي + ملصق مطبوع', role: 'للعائلات التي قد لا تكون متصلة بالإنترنت', cls: 'border-amber-400/70 bg-amber-950/40' },
  { icon: '💬', media: 'واتساب ووسائل التواصل', role: 'للانتشار عن طريق التناقل الشفهي', cls: 'border-emerald-400/70 bg-emerald-950/40' },
  { icon: '🌐', media: 'موقع المكتبة', role: 'للتفاصيل والمواعيد وتحديثها', cls: 'border-violet-400/70 bg-violet-950/40' },
]
const reasons = ['① كل وسيلة تقوم بما تُجيده', '② ليست كل العائلات متصلة بالإنترنت']
</script>
