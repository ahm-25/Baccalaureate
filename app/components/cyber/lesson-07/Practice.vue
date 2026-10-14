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
          <button v-if="open !== i" @click="open = i" class="text-sky-700 font-bold bg-sky-50 hover:bg-sky-100 px-4 py-2 rounded-lg text-sm transition-colors">
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
        (1) لكل خدمة (أ – د)، بيّن أي مجموعة من عوامل المصادقة تُستخدم:
        <span class="text-sky-700 font-bold">أ</span> المعرفة + الحيازة،
        <span class="text-sky-700 font-bold">ب</span> المعرفة + السمات الحيوية،
        <span class="text-sky-700 font-bold">ج</span> السمات الحيوية + الحيازة.
      </p>
      <CyberLesson07ChoiceItems :items="factorItems" :options="factorOptions" class="mb-10" />

      <p class="text-slate-800 font-medium leading-relaxed mb-4">
        (2) من بين الخيارات التالية (أ – د)، اختر الخيار الذي <strong class="text-rose-600">لا</strong> يمثل وصفًا مناسبًا لتركيبات تقنيات الأمان.
      </p>
      <CyberLesson07SingleChoice
        :options="combinationOptions"
        :ans="1"
        explanation="التوقيعات الرقمية لا تُحسّن سرعة الاتصال؛ وظيفتها التحقق من سلامة البيانات وهوية الموقِّع ودعم عدم التنصل."
      />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const open = ref(null)

const shortQuestions = [
  {
    q: 'ما دور الشهادة الرقمية وآليات المفتاح العام في بدء اتصال TLS آمن؟',
    a: 'يرسل الخادم شهادته الرقمية، فيتحقق المتصفح من صلاحيتها وسلسلة الثقة وملاءمتها لاسم الموقع للتأكد من هوية الخادم. وتُستخدم آليات المفتاح العام للمصادقة والاتفاق الآمن على مفاتيح الجلسة دون إرسال المفتاح نفسه عبر الشبكة.',
  },
  {
    q: 'ما نوع التشفير المستخدم لحماية بيانات الجلسة بعد إنشاء مفاتيحها؟',
    a: 'التشفير المتماثل (مع آليات سلامة البيانات)، لأنه سريع وكفء مع كميات البيانات الكبيرة.',
  },
  {
    q: 'اشرح باختصار كيف يستخدم HTTPS الشهادات وآليات المفتاح العام لبدء اتصال آمن، ثم يستخدم مفاتيح جلسة متماثلة لحماية البيانات.',
    a: 'في مصافحة TLS يرسل الخادم شهادته ويتحقق منها المتصفح، ثم يتبادل الطرفان معاملات تبادل المفاتيح باستخدام آليات المفتاح العام ويشتق كل طرف مفاتيح الجلسة. بعد ذلك تُحمى بيانات الجلسة بالتشفير المتماثل بسرعة وكفاءة.',
  },
]

const factorOptions = ['أ المعرفة + الحيازة', 'ب المعرفة + السمات الحيوية', 'ج السمات الحيوية + الحيازة']
const factorItems = [
  { text: 'كلمة مرور + كلمة مرور لمرة واحدة', ans: 0 },
  { text: 'كلمة مرور + مصادقة ببصمة الإصبع', ans: 1 },
  { text: 'كلمة مرور + مصادقة عبر الرسائل القصيرة SMS', ans: 0 },
  { text: 'التعرف على الوجه + بطاقة IC (بطاقة ذكية تحمل شريحة مدمجة تخزّن بيانات الهوية)', ans: 2 },
]

const combinationOptions = [
  'التشفير تقنية تمنع قراءة محتوى الاتصال من قِبل أطراف ثالثة.',
  'التوقيعات الرقمية تقنية تُحسّن سرعة الاتصال.',
  'الشهادات الرقمية نظام للتحقق من أن الطرف المقابل في الاتصال حقيقي.',
  'من خلال الجمع بين عدة تقنيات أمان، يمكن معالجة تهديدات متنوعة.',
]
</script>
