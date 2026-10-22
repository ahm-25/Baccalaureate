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
        (1) من بين الخيارات التالية (أ – د)، اختر الخيار الذي <strong class="text-rose-600">لا</strong> يمثل خاصية مناسبة للمواقع الإلكترونية.
      </p>
      <CyberLesson07SingleChoice
        :options="websiteOptions"
        :ans="1"
        explanation="غالبًا يحتاج المستخدم إلى فتح الموقع للوصول إلى محتواه، ما لم تستخدم الخدمة إشعارات أو قنوات أخرى؛ فالمعلومات لا تصل إليه تلقائيًا."
        class="mb-10"
      />

      <p class="text-slate-800 font-medium leading-relaxed mb-2">
        (2) لكل موقف (أ – د)، حدد الوسيلة الأنسب.
      </p>
      <p class="text-sm text-slate-500 mb-4">💡 لكل موقف اسأل أولًا: هل الهدف هو الانتشار الواسع، أم التفاصيل الكاملة، أم النشر، أم رسالة مباشرة؟</p>
      <CyberLesson07ChoiceItems :items="situations" :options="mediaOptions" />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const open = ref([])

const shortQuestions = [
  { q: 'اذكر نقطتي قوة للمواقع الإلكترونية.', a: 'من نقاط القوة: يمكن الجمع بين معلومات متنوعة مثل النص والصور والفيديو وعرضها معًا • يمكن تحديث المعلومات في أي وقت • يمكن الوصول إليه من أي مكان يتوفر فيه اتصال مناسب • التفاعل ثنائي الاتجاه ممكن من خلال النماذج والتعليقات.' },
  { q: 'اذكر قيدين للمواقع الإلكترونية.', a: 'من القيود: تحتاج معظم وظائفه إلى اتصال بالشبكة • غالبًا يحتاج المستخدم إلى فتح الموقع للوصول إلى محتواه • قد تختلف سرعة العرض والتحميل حسب جهاز المستخدم وبيئة الشبكة.' },
]

const websiteOptions = [
  'يمكن تحديث المعلومات في أي وقت.',
  'تصل المعلومات تلقائيًا إلى المستخدمين دون أن يصلوا إليها بأنفسهم.',
  'يمكن الجمع بين النص والصور والفيديو وعرضها معًا.',
  'التفاعل ثنائي الاتجاه ممكن من خلال النماذج والتعليقات.',
]

const mediaOptions = ['أ التلفزيون', 'ب الموقع الإلكتروني', 'ج وسائل التواصل', 'د البريد الإلكتروني']
const situations = [
  { text: 'إتاحة المواصفات التفصيلية واستخدامات منتج جديد في أي وقت.', ans: 1 },
  { text: 'جعل المستخدمين ينشرون معلومات عن منتج جديد عن طريق التناقل الشفهي.', ans: 2 },
  { text: 'توصيل فيديو منتج جديد إلى عدد كبير من الناس في آنٍ واحد.', ans: 0 },
  { text: 'إرسال معلومات حملة ترويجية مباشرة إلى العملاء الحاليين.', ans: 3 },
]
</script>
