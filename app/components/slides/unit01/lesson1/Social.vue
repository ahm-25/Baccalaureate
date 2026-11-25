<template>
  <!-- Social changes caused by IT. f = 0 the book's five changes with their definitions,
       1 the student's day from the lesson opening mapped onto them + the "stop and think" question. -->
  <div class="absolute inset-0">
    <SlidesTitle :icon="f === 0 ? '👥' : '🌅'" :title="f === 0 ? 'التغيرات الاجتماعية الناتجة عن IT' : 'يوم طالب في مصر اليوم'"
                 :sub="f === 0 ? 'خمسة تحولات مجتمعية أحدثتها تكنولوجيا المعلومات' : 'كم تغيّرًا من الخمسة يستخدم قبل الظهر؟'" />

    <Transition name="sl-frame" mode="out-in">
      <!-- ───── f0: the five changes ───── -->
      <div v-if="f === 0" key="five" class="absolute top-[150px] inset-x-0 flex justify-center gap-3.5" dir="rtl">
        <div v-for="(c, i) in changes" :key="c.name" class="sl-in w-[222px] h-[400px] rounded-3xl border-2 px-4 py-5 flex flex-col items-center text-center"
             :class="c.cls" :style="{ '--d': `${0.4 + i * 1.4}s` }">
          <span class="text-[52px] leading-none">{{ c.icon }}</span>
          <span class="mt-3 text-[22px] font-black text-white leading-tight">{{ c.name }}</span>
          <span class="mt-1 text-[14px] font-bold font-mono" :class="c.text" dir="ltr">{{ c.en }}</span>
          <div class="h-px w-full bg-white/10 my-3"></div>
          <p class="text-[18px] font-bold text-slate-100 leading-snug">{{ c.def }}</p>
          <p v-if="c.ex" class="mt-auto text-[15px] font-bold italic" :class="c.text">{{ c.ex }}</p>
        </div>
      </div>

      <!-- ───── f1: the student's day ───── -->
      <div v-else key="day" class="absolute inset-0" dir="rtl">
        <div class="absolute top-[150px] inset-x-0 flex flex-col items-center gap-3">
          <div v-for="(m, i) in day" :key="m.text" class="sl-in w-[1100px] h-[72px] rounded-2xl border-2 border-white/10 bg-slate-900/85 flex items-center gap-4 px-5"
               :style="{ '--d': `${0.3 + i * 1.2}s` }">
            <span class="text-[34px]">{{ m.icon }}</span>
            <p class="flex-1 text-[22px] font-bold text-white">{{ m.text }}</p>
            <span class="sl-pop sl-badge !text-[19px]" :class="changes[m.change]!.badge" :style="{ '--d': `${0.9 + i * 1.2}s` }">
              {{ changes[m.change]!.icon }} {{ changes[m.change]!.name }}
            </span>
          </div>
        </div>
        <div class="absolute top-[492px] inset-x-0 flex justify-center">
          <div class="sl-in flex items-center gap-4 rounded-3xl border-2 border-amber-400/70 bg-amber-950/45 px-8 py-3.5" style="--d: 5.6s">
            <span class="text-[30px]">💡</span>
            <p class="text-[23px] font-black text-white">توقف وفكر: من بين هذه التغيرات الخمسة، أيها سيكون <span class="text-amber-300">الأصعب في التخلي عنه</span>، ولماذا؟</p>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import SlidesTitle from '~/components/slides/Title.vue'

defineProps<{ f: number }>()

const changes = [
  { icon: '💬', name: 'شبكات التواصل الاجتماعي', en: 'SNS', cls: 'border-sky-400/60 bg-sky-950/45', text: 'text-sky-300', badge: 'border-sky-400/70 bg-sky-600/25 text-sky-50',
    def: 'منصات تتيح للمستخدمين التواصل ونشر المحتوى ومشاركته بسرعة.' },
  { icon: '🛒', name: 'التجارة الإلكترونية', en: 'E-commerce', cls: 'border-amber-400/60 bg-amber-950/40', text: 'text-amber-300', badge: 'border-amber-400/70 bg-amber-600/25 text-amber-50',
    def: 'بيع السلع والخدمات وشراؤها عبر الإنترنت.', ex: 'مثال: متاجر إلكترونية مثل أمازون وإيباي.' },
  { icon: '💻', name: 'العمل عن بُعد', en: 'Remote Work', cls: 'border-violet-400/60 bg-violet-950/45', text: 'text-violet-300', badge: 'border-violet-400/70 bg-violet-600/25 text-violet-50',
    def: 'نمط عمل يؤدي فيه الشخص مهامه من المنزل أو من موقع آخر بعيد باستخدام الإنترنت.' },
  { icon: '🎓', name: 'التعلّم عبر الإنترنت', en: 'Online Learning', cls: 'border-emerald-400/60 bg-emerald-950/40', text: 'text-emerald-300', badge: 'border-emerald-400/70 bg-emerald-600/25 text-emerald-50',
    def: 'نمط تعليمي تُقدَّم فيه الدروس والمواد التعليمية عبر الإنترنت.' },
  { icon: '💳', name: 'الدفع غير النقدي', en: 'Cashless Payment', cls: 'border-rose-400/60 bg-rose-950/40', text: 'text-rose-300', badge: 'border-rose-400/70 bg-rose-600/25 text-rose-50',
    def: 'دفع قيمة السلع أو الخدمات بوسائل غير نقدية، مثل البطاقات المصرفية أو تطبيقات الهاتف أو رموز QR.' },
]

// the opening paragraph of the lesson; `change` is the index in `changes`
const day = [
  { icon: '📩', text: 'يقرأ رسائله على أحد تطبيقات التواصل الاجتماعي', change: 0 },
  { icon: '🥪', text: 'يدفع ثمن إفطاره إلكترونيًا باستخدام تطبيق للدفع غير النقدي', change: 4 },
  { icon: '🧑‍🏫', text: 'ينضم إلى درس عبر الإنترنت', change: 3 },
  { icon: '📚', text: 'يطلب كتابًا من متجر إلكتروني', change: 1 },
]
</script>
