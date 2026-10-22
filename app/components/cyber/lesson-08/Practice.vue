<template>
  <section id="practice" class="py-16 bg-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="inline-flex items-center gap-2 bg-amber-500 text-white font-bold text-xl px-6 py-2 rounded-full shadow-sm mb-8">
        تدرّب
      </div>

      <!-- Q1: short answers -->
      <div class="bg-amber-50/60 border border-amber-200 rounded-2xl px-5 py-3 font-bold text-amber-900 mb-4">1 أجب عن الأسئلة التالية.</div>
      <div class="space-y-4 mb-12">
        <div v-for="(q, i) in shortQuestions" :key="i" class="bg-slate-50 border border-slate-200 rounded-2xl p-5">
          <h4 class="font-bold text-slate-800 mb-3 leading-relaxed">{{ i + 1 }}. {{ q.q }}</h4>
          <button v-if="!open.includes(i)" @click="open.push(i)" class="text-teal-700 font-bold bg-teal-50 hover:bg-teal-100 px-4 py-2 rounded-lg text-sm transition-colors">
            أظهر الإجابة النموذجية
          </button>
          <div v-else class="p-4 bg-white border border-slate-200 rounded-xl text-slate-700 leading-relaxed">
            {{ q.a }}
          </div>
        </div>
      </div>

      <!-- Q2 -->
      <div class="bg-amber-50/60 border border-amber-200 rounded-2xl px-5 py-3 font-bold text-amber-900 mb-4">2 أجب عن الأسئلة التالية.</div>

      <p class="text-slate-800 font-medium leading-relaxed mb-4">
        (1) من بين الخيارات التالية (أ – د)، اختر الخيار الذي <strong class="text-rose-600">لا</strong> يمثل استخدامًا مناسبًا للشبكة الافتراضية الخاصة.
      </p>
      <CyberLesson07SingleChoice
        :options="vpnOptions"
        :ans="2"
        explanation="حذف الملفات المصابة وظيفة برامج مكافحة الفيروسات على الأجهزة الطرفية؛ أما VPN فيشفّر الاتصال وينشئ نفقًا آمنًا."
        class="mb-10"
      />

      <p class="text-slate-800 font-medium leading-relaxed mb-4">
        (2) لكل إجراء أمني (أ – د)، بيّن أي طبقة من طبقات الدفاع المتعدد ينتمي إليها.
      </p>
      <CyberLesson07ChoiceItems :items="layerItems" :options="layerOptions" />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const open = ref([])

const shortQuestions = [
  { q: 'ما المصطلح الذي يصف نظامًا أو برنامجًا يراقب حركة مرور الشبكة ويسمح بها أو يمنعها وفق قواعد أمنية؟', a: 'جدار الحماية.' },
  { q: 'ما الاختصار الذي يصف اتصالًا منطقيًا خاصًا يحمي البيانات عبر شبكة عامة؟', a: 'VPN (الشبكة الافتراضية الخاصة).' },
  { q: 'ما الاختصار المكوّن من ثلاثة أحرف للمنطقة التي تُوضع فيها الخوادم المعرَّضة للخارج بشكل منفصل عن الشبكة الداخلية؟', a: 'DMZ (المنطقة المعزولة).' },
  { q: 'ما المصطلح الذي يُطلق على مفهوم تكديس عدة إجراءات أمنية؟', a: 'الدفاع في العمق.' },
]

const vpnOptions = [
  'الاتصال بأمان من المنزل بشبكة المؤسسة',
  'ربط المكاتب في مواقع مختلفة بأمان',
  'الحذف التلقائي للملفات المصابة بالفيروسات',
  'تشفير محتوى الاتصال على شبكة Wi-Fi العامة',
]

const layerOptions = ['أ مدخل الشبكة', 'ب مسار الاتصال', 'ج وضع الخوادم', 'د الأجهزة الطرفية']
const layerItems = [
  { text: 'منع الاتصال غير المصرح به باستخدام جدار الحماية', ans: 0 },
  { text: 'تشفير الاتصال باستخدام الشبكة الافتراضية الخاصة', ans: 1 },
  { text: 'تثبيت برنامج مكافحة الفيروسات', ans: 3 },
  { text: 'فصل الخوادم المواجهة للجمهور عن الشبكة الداخلية باستخدام المنطقة المعزولة (DMZ)', ans: 2 },
]
</script>
