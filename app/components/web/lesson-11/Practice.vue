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
          <button v-if="!open.includes(i)" @click="open.push(i)" class="text-sky-700 font-bold bg-sky-50 hover:bg-sky-100 px-4 py-2 rounded-lg text-sm transition-colors">
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
        (1) من بين الخيارات التالية (أ – د)، اختر التركيبة <strong class="text-rose-600">غير</strong> المناسبة بين رمز حالة HTTP والمعنى.
      </p>
      <CyberLesson07SingleChoice
        :options="statusOptions"
        :ans="2"
        explanation="الرمز 500 يعني خطأً داخليًا في الخادم منعه من إكمال الطلب، وليس نجاح المعالجة؛ النجاح هو 200."
        class="mb-10"
      />

      <p class="text-slate-800 font-medium leading-relaxed mb-4">
        (2) من بين الخيارات التالية (أ – د)، اختر الخيار الذي يصف واجهة برمجة التطبيقات (API) بأنسب شكل.
      </p>
      <CyberLesson07SingleChoice
        :options="apiOptions"
        :ans="1"
        explanation="API مجموعة قواعد واضحة تسمح لبرنامج بطلب بيانات أو وظائف من برنامج آخر؛ أي نظام لتبادل البيانات بين برمجيات مختلفة."
      />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const open = ref([])

const shortQuestions = [
  { q: 'ما المصطلح الخاص بالجانب الذي يطلب البيانات أو المعالجة من الخادم (مثل متصفح الويب)؟', a: 'العميل.' },
  { q: 'ما المصطلح الخاص بالجانب الذي يستقبل الطلبات من العملاء، ويعالجها، ويعيد الاستجابات؟', a: 'الخادم.' },
  { q: 'ما البروتوكول المستخدم للوصول إلى الويب عبر اتصال TLS آمن؟', a: 'HTTPS.' },
  { q: 'ما المصطلح الخاص بطريقة طلب HTTP لاسترجاع البيانات من الخادم؟', a: 'GET.' },
  { q: 'ما المصطلح الخاص بنظام تبادل البيانات بين برمجيات مختلفة؟', a: 'واجهة برمجة التطبيقات (API).' },
]

const statusOptions = [
  '200 – تمت معالجة الطلب بنجاح',
  '404 – المورد المطلوب غير موجود',
  '500 – تمت معالجة الطلب بنجاح',
  '500 – حدثت مشكلة في جانب الخادم',
]

const apiOptions = [
  'تقنية لتعديل مظهر صفحات الويب',
  'نظام لتبادل البيانات بين برمجيات مختلفة',
  'تقنية لتشفير البيانات وإرسالها بأمان',
  'طريقة طلب HTTP لاسترجاع البيانات من الخادم',
]
</script>
