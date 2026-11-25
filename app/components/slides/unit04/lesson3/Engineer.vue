<template>
  <!-- Think like an engineer: a small online bookshop. f = 0 step 1 gather data (one number + one confusing thing per classmate),
       1 step 2 analyse the signals (high PV, low CVR), 2 step 3 decide (owner's opinion vs both methods) + the suggested answer. -->
  <div class="absolute inset-0">
    <SlidesTitle icon="⚙️" title="فكّر كمهندس: ابحث ثم قرر" :sub="['① اجمع البيانات', '② حلّل الإشارات', '③ قرّر'][f]" />

    <Transition name="sl-frame" mode="out-in">
      <!-- ───── f0: gather data ───── -->
      <div v-if="f === 0" key="data" class="absolute inset-0" dir="rtl">
        <div class="absolute top-[146px] inset-x-0 flex justify-center">
          <div class="sl-in w-[1140px] rounded-2xl border-2 border-white/15 bg-slate-900/85 px-6 py-2.5 text-center text-[20px] font-bold text-slate-100 leading-snug" style="--d: .2s">
            📚 متجر كتب إلكتروني صغير في مدينتك يريد معرفة ما إذا كان موقعه الإلكتروني يعمل فعلًا لصالح العملاء. أنت تخطط لكيفية تقييمه.
          </div>
        </div>
        <div class="absolute left-[140px] top-[238px] w-[1000px]">
          <div class="sl-fade h-[40px] rounded-xl bg-white/10 flex items-center px-4 text-[18px] font-black text-slate-200" style="--d: .8s">
            <span class="w-[130px] shrink-0">الزميل</span>
            <span class="w-[260px] shrink-0 text-sky-300">📊 الصفحات المشاهدة (كمي)</span>
            <span class="flex-1 text-violet-300">💬 ما كان مربكًا (نوعي)</span>
          </div>
          <div v-for="(r, i) in rows" :key="i" class="sl-in mt-[5px] h-[40px] rounded-xl border border-white/10 bg-slate-900/85 flex items-center px-4"
               :style="{ '--d': `${1.2 + i * 0.7}s` }">
            <span class="w-[130px] shrink-0 text-[18px] font-black text-white">👤 زميل <span dir="ltr" class="inline-block">{{ i + 1 }}</span></span>
            <span class="w-[260px] shrink-0 flex items-center gap-2">
              <span class="w-[30px] text-[19px] font-black font-mono text-sky-200" dir="ltr">{{ r.pages }}</span>
              <span class="h-[12px] rounded-full bg-sky-400/70" :style="{ width: `${r.pages * 18}px` }"></span>
            </span>
            <span class="flex-1 text-[17px] font-bold text-violet-100">{{ r.note }}</span>
          </div>
        </div>
        <div class="absolute top-[524px] inset-x-0 flex justify-center">
          <span class="sl-in sl-badge !text-[18px] border-amber-400/60 bg-amber-600/15 text-amber-100" style="--d: 5.2s">
            إجمالي الصفحات المشاهدة: <span dir="ltr" class="inline-block">{{ total }}</span>، لكن الرقم لا يخبرك بسبب الإرباك، بينما العمود الثاني يخبرك.
          </span>
        </div>
      </div>

      <!-- ───── f1: analyse the signals ───── -->
      <div v-else-if="f === 1" key="signal" class="absolute inset-0" dir="rtl">
        <!-- funnel (left) -->
        <div class="absolute left-[70px] top-[160px] w-[480px] flex flex-col items-center">
          <div class="sl-in w-[460px] h-[62px] rounded-2xl border-2 border-sky-300 bg-sky-600/40 flex items-center justify-center gap-2 text-[21px] font-black text-white" style="--d: .3s">
            👁️ إجمالي المشاهدات (PV) <span class="up text-emerald-300 text-[26px]">↑</span> مرتفع
          </div>
          <div v-for="(w, i) in [360, 250, 150]" :key="w" class="sl-in mt-2.5 h-[22px] rounded-full bg-gradient-to-l from-sky-500/60 to-rose-500/60"
               :style="{ width: `${w}px`, '--d': `${0.9 + i * 0.3}s` }"></div>
          <div class="sl-in mt-2.5 w-[460px] h-[62px] rounded-2xl border-2 border-rose-300 bg-rose-600/40 flex items-center justify-center gap-2 text-[21px] font-black text-white" style="--d: 1.9s">
            🎯 معدل التحويل (CVR) <span class="down text-rose-200 text-[26px]">↓</span> منخفض
          </div>
          <div class="sl-pop mt-4 text-[24px] font-black text-amber-300" style="--d: 2.6s">❓ الناس يصلون… فلماذا لا يكملون؟</div>
        </div>
        <!-- reasoning (right) -->
        <div class="absolute left-[600px] top-[156px] w-[610px] flex flex-col gap-2">
          <div v-for="(c, i) in signals" :key="c.title" class="sl-in h-[96px] rounded-2xl border-2 px-5 py-2" :class="c.cls"
               :style="{ '--d': `${3.2 + i * 1.6}s` }">
            <div class="text-[21px] font-black" :class="c.text">{{ c.title }}</div>
            <p class="text-[17px] font-bold text-slate-100 leading-snug">{{ c.body }}</p>
          </div>
        </div>
        <div class="absolute top-[474px] inset-x-0 flex justify-center">
          <div class="sl-in w-[1140px] rounded-2xl border-2 border-dashed border-amber-400/70 bg-amber-950/30 px-6 py-2.5 text-center text-[19px] font-bold text-slate-100 leading-snug" style="--d: 8.2s">
            💡 <span class="text-amber-300 font-black">هل تواجه صعوبة؟</span> ابدأ من الفجوة في البيانات: ارتفاع PV مع انخفاض CVR يعني أن الناس يصلون لكن لا يتخذون إجراءً،
            إذن الأرقام تشير فقط إلى <span class="sl-hl-amber font-black">أين</span> تنظر.
          </div>
        </div>
      </div>

      <!-- ───── f2: decide ───── -->
      <div v-else key="decide" class="absolute inset-0" dir="rtl">
        <div class="absolute top-[148px] inset-x-0 flex justify-center gap-5">
          <div class="sl-in relative w-[545px] h-[70px] rounded-2xl border-2 border-slate-500 bg-slate-900/85 flex items-center gap-3 px-5" style="--d: .3s">
            <span class="w-8 h-8 rounded-md border-2 border-slate-400 shrink-0"></span>
            <span class="text-[22px] font-black text-white">الاعتماد على رأي صاحب المتجر</span>
            <span class="sl-pop mr-auto text-[28px]" style="--d: 1.6s">❌</span>
          </div>
          <div class="sl-in relative w-[545px] h-[70px] rounded-2xl border-2 border-emerald-400 bg-emerald-950/50 flex items-center gap-3 px-5" style="--d: .6s">
            <span class="relative w-8 h-8 rounded-md border-2 border-emerald-300 shrink-0">
              <span class="sl-pop absolute inset-0 flex items-center justify-center text-[22px] font-black text-emerald-300" style="--d: 1.2s">✓</span>
            </span>
            <span class="text-[22px] font-black text-white">استخدام الطرق الكمية والنوعية معًا</span>
            <span class="sl-pop mr-auto text-[28px]" style="--d: 1.2s">✅</span>
          </div>
        </div>
        <div class="absolute top-[236px] inset-x-0 flex justify-center">
          <div class="sl-in w-[1140px] rounded-3xl border-2 border-emerald-400/70 bg-emerald-950/40 px-7 py-4" style="--d: 2.2s">
            <div class="text-[23px] font-black text-emerald-300">✅ التوصية: تحليلات الويب (تتبع PV ومعدل التحويل) + اختبار قابلية استخدام قصير</div>
            <div v-for="(r, i) in reasons" :key="r.label" class="sl-in mt-2.5 flex items-center gap-4 rounded-2xl bg-black/25 px-4 py-2" :style="{ '--d': `${3 + i * 1.4}s` }">
              <span class="w-[175px] shrink-0 text-[19px] font-black" :class="r.cls">{{ r.icon }} {{ r.label }}</span>
              <p class="text-[17px] font-bold text-slate-100 leading-snug">{{ r.text }}</p>
            </div>
          </div>
        </div>
        <div class="absolute top-[506px] inset-x-0 flex justify-center">
          <div class="sl-pop flex items-center gap-4 rounded-3xl border-2 border-amber-400 bg-amber-950/50 px-7 py-3" style="--d: 7.4s">
            <span class="text-[21px] font-black text-white">👥 في أزواج: قارنوا اختياراتكم واتفقوا معًا على المؤشر الأكثر فائدة لتتبعه</span>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import SlidesTitle from '~/components/slides/Title.vue'

defineProps<{ f: number }>()

/* Sample table for step 1 (illustration, not from the book) */
const rows = [
  { pages: 6, note: 'لم أجد زر إتمام الشراء على الهاتف.' },
  { pages: 3, note: 'البحث لم يجد الكتاب عندما أخطأت في كتابة اسمه.' },
  { pages: 9, note: 'لم أعرف تكلفة الشحن إلا في الخطوة الأخيرة.' },
  { pages: 2, note: 'الصفحة الرئيسية مزدحمة، فلم أعرف من أين أبدأ.' },
  { pages: 5, note: 'لم أفهم هل أُضيف الكتاب إلى السلة أم لا.' },
]
const total = rows.reduce((a, r) => a + r.pages, 0)

const signals = [
  { title: '📊 ما تقوله الأرقام', cls: 'border-sky-400/60 bg-sky-950/45', text: 'text-sky-300',
    body: 'قد يشير ذلك إلى أن مستخدمين كثيرين لا يكملون الإجراء، لكنه لا يحدد السبب وحده.' },
  { title: '🧪 طريقة نوعية للتحقق', cls: 'border-violet-400/60 bg-violet-950/45', text: 'text-violet-300',
    body: 'اختبار قابلية استخدام قصير أو مقابلة: مراقبة بعض المستخدمين وهم يحاولون إتمام الشراء.' },
  { title: '📱 صعوبة لا تظهر في إجمالي المشاهدات', cls: 'border-amber-400/60 bg-amber-950/35', text: 'text-amber-300',
    body: 'مستخدم الهاتف قد لا يرى زر الشراء جيدًا على شاشته الصغيرة، وهذا لا يظهر في الأرقام.' },
]

const reasons = [
  { icon: '1️⃣', label: 'السبب الأول', cls: 'text-sky-300',
    text: 'أرقام الجدول (الصفحات المشاهدة) تكشف حجم الاستخدام وأين يتوقف الزوار، لكنها لا تكشف السبب.' },
  { icon: '2️⃣', label: 'السبب الثاني', cls: 'text-violet-300',
    text: 'ملاحظات الزملاء عما كان مربكًا (مثل صعوبة إيجاد زر الشراء على الهاتف) تكشف أسبابًا لا تظهر في الأرقام.' },
  { icon: '🎯', label: 'المؤشر الأكثر فائدة', cls: 'text-emerald-300',
    text: 'معدل التحويل (مع تحديد المقام)، لأن هدف المتجر هو إتمام الشراء.' },
]
</script>

<style scoped>
.up { display: inline-block; animation: up 1.2s ease-in-out infinite; }
.down { display: inline-block; animation: down 1.2s ease-in-out infinite; }
@keyframes up { 0%, 100% { transform: translateY(2px) } 50% { transform: translateY(-5px) } }
@keyframes down { 0%, 100% { transform: translateY(-2px) } 50% { transform: translateY(5px) } }
</style>
