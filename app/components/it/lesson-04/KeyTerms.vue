<template>
  <section id="key-terms" class="py-24 px-6 sm:px-12 bg-background overflow-hidden relative">
    <div class="max-w-6xl mx-auto w-full z-10">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-black text-maintext mb-6">مصطلحات أساسية</h2>
        <p class="text-xl text-mutedtext">اضغط على أي بطاقة لرؤية التعريف</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div v-for="(term, i) in terms" :key="i"
             @click="toggleTerm(i)"
             class="bg-surface border-2 rounded-2xl p-6 cursor-pointer transition-all duration-300"
             :class="openTerm === i ? 'border-primary shadow-lg' : 'border-border hover:border-primary/40'">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-lg font-black text-maintext">{{ term.arabic }}</h3>
            <span class="text-sm font-bold text-primary/60">{{ term.english }}</span>
          </div>
          <Transition name="slide">
            <p v-if="openTerm === i" class="text-base font-bold text-mutedtext leading-relaxed mt-3 pt-3 border-t border-border">{{ term.definition }}</p>
          </Transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const openTerm = ref(-1)
const toggleTerm = (i: number) => { openTerm.value = openTerm.value === i ? -1 : i }

const terms = [
  { arabic: 'قانون مور', english: "Moore's Law", definition: 'الملاحظة التجريبية القائلة إن عدد الترانزستورات في الدائرة المتكاملة يتضاعف تقريبًا كل عامين.' },
  { arabic: 'شبكات التواصل الاجتماعي', english: 'SNS', definition: 'منصات تتيح للمستخدمين التواصل ونشر المحتوى ومشاركته بسرعة.' },
  { arabic: 'التجارة الإلكترونية', english: 'E-commerce', definition: 'بيع السلع والخدمات وشراؤها عبر الإنترنت.' },
  { arabic: 'العمل عن بُعد', english: 'Remote Work', definition: 'نمط عمل يؤدي فيه الشخص مهامه من المنزل أو من موقع آخر بعيد باستخدام الإنترنت.' },
  { arabic: 'التعلم عبر الإنترنت', english: 'Online Learning', definition: 'نمط تعليمي تُقدم فيه الدروس والمواد التعليمية عبر الإنترنت.' },
  { arabic: 'الدفع غير النقدي', english: 'Cashless Payment', definition: 'دفع قيمة السلع أو الخدمات بوسائل غير نقدية، مثل البطاقات المصرفية أو تطبيقات الهاتف أو رموز QR.' },
  { arabic: 'الحوسبة السحابية', english: 'Cloud Computing', definition: 'تقديم موارد تكنولوجيا المعلومات (مثل التخزين والمعالجة) كخدمات عبر الإنترنت.' },
  { arabic: 'الحوسبة الطرفية', english: 'Edge Computing', definition: 'معالجة البيانات بالقرب من مصدرها بدلاً من إرسالها إلى السحابة، مما يقلل التأخير.' },
  { arabic: 'القيادة الذاتية', english: 'Autonomous Driving', definition: 'تقنية تستخدم الذكاء الاصطناعي للمساعدة على قيادة المركبة.' },
  { arabic: 'الواقع المعزز', english: 'AR', definition: 'تقنية تضيف عناصر أو معلومات رقمية إلى مشهد من العالم الحقيقي.' },
  { arabic: 'الواقع الافتراضي', english: 'VR', definition: 'تقنية تضع المستخدم داخل بيئة افتراضية مولدة حاسوبيًا.' },
  { arabic: 'الحوسبة الكمومية', english: 'Quantum Computing', definition: 'نهج حوسبي يستخدم خصائص ميكانيكا الكم لمعالجة المعلومات.' }
]
</script>

<style scoped>
.slide-enter-active, .slide-leave-active { transition: all 0.3s ease; max-height: 200px; overflow: hidden; }
.slide-enter-from, .slide-leave-to { max-height: 0; opacity: 0; }
</style>
