<template>
  <section id="exercises" class="py-16 bg-slate-50 border-t border-slate-200">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="inline-flex items-center gap-2 bg-red-700 text-white font-bold text-xl px-6 py-2 rounded-full shadow-sm mb-8">
        تمارين
      </div>

      <!-- 1 -->
      <div class="bg-amber-50/60 border border-amber-200 rounded-2xl px-5 py-3 font-bold text-amber-900 mb-3">
        1 اختبر فهمك: أجب عن الأسئلة الآتية دون الرجوع إلى قسم «ملحوظة مهمة»، ثم راجع إجاباتك.
      </div>
      <p class="text-slate-600 mb-10">
        👇 استخدم <button @click="scrollTo('practice-quiz')" class="text-sky-700 font-bold underline">اختبر فهمك</button> في الأسفل، ثم ارجع إلى
        <button @click="scrollTo('https')" class="text-sky-700 font-bold underline">قسم ملحوظة مهمة</button> للمراجعة.
      </p>

      <!-- 2 -->
      <div class="bg-amber-50/60 border border-amber-200 rounded-2xl px-5 py-3 font-bold text-amber-900 mb-4">2 اقرأ الفقرة التالية وأجب عن كل سؤال.</div>
      <div class="bg-white border-r-4 border-sky-500 rounded-xl p-5 text-slate-700 leading-loose mb-6">
        عند بدء اتصال HTTPS ينفذ الطرفان مصافحة TLS. وفي أثنائها يرسل الخادم شهادته الرقمية إلى المتصفح، فيتحقق المتصفح من صلاحيتها وملاءمتها لاسم الموقع.
        ثم يتفق الطرفان – في المصافحة نفسها – على إعدادات الحماية وتُشتق مفاتيح الجلسة. وبعد اكتمال المصافحة تُحمى بيانات الجلسة بالتشفير المتماثل وآليات سلامة البيانات.
      </div>
      <div class="space-y-4 mb-12">
        <div v-for="(q, i) in readingQuestions" :key="i" class="bg-white border border-slate-200 rounded-2xl p-5">
          <h4 class="font-bold text-slate-800 mb-3">{{ i + 1 }}. {{ q.q }}</h4>
          <button v-if="open !== i" @click="open = i" class="text-sky-700 font-bold bg-sky-50 hover:bg-sky-100 px-4 py-2 rounded-lg text-sm transition-colors">أظهر الإجابة</button>
          <div v-else class="p-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 leading-relaxed">
            <ol v-if="Array.isArray(q.a)" class="list-decimal pr-5 space-y-1">
              <li v-for="s in q.a" :key="s">{{ s }}</li>
            </ol>
            <p v-else>{{ q.a }}</p>
          </div>
        </div>
      </div>

      <!-- 3 -->
      <div class="bg-amber-50/60 border border-amber-200 rounded-2xl px-5 py-3 font-bold text-amber-900 mb-4">3 أجب عن الأسئلة التالية.</div>
      <p class="text-slate-800 font-medium leading-relaxed mb-4">
        (1) لكل تهديد (أ – د)، بيّن التقنية المستخدمة أساسًا لمعالجته:
        <span class="text-sky-700 font-bold">أ</span> التشفير، <span class="text-sky-700 font-bold">ب</span> التوقيع الرقمي،
        <span class="text-sky-700 font-bold">ج</span> الشهادة الرقمية، <span class="text-sky-700 font-bold">د</span> المصادقة الثنائية (2FA).
      </p>
      <CyberLesson07ChoiceItems :items="threatItems" :options="threatOptions" class="mb-10" />

      <p class="text-slate-800 font-medium leading-relaxed mb-4">
        (2) من بين الخيارات التالية (أ – د)، اختر الخيار الذي <strong class="text-rose-600">لا</strong> يمثل مثالًا مناسبًا للمصادقة الثنائية باستخدام عاملين مختلفين.
      </p>
      <CyberLesson07SingleChoice
        :options="twoFaOptions"
        :ans="1"
        explanation="كلمة المرور والسؤال السري كلاهما من فئة المعرفة، فهما ليسا عاملين من فئتين مختلفتين."
      />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const open = ref(null)

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

const readingQuestions = [
  {
    q: 'استخرج من الفقرة ثلاث خطوات مرتبة لإنشاء اتصال HTTPS آمن.',
    a: [
      'يرسل الخادم شهادته الرقمية، ويتحقق المتصفح من صلاحيتها وملاءمتها لاسم الموقع.',
      'يتفق الطرفان على إعدادات الحماية وتُشتق مفاتيح الجلسة (داخل المصافحة نفسها).',
      'بعد اكتمال المصافحة تُحمى بيانات الجلسة بالتشفير المتماثل وآليات سلامة البيانات.',
    ],
  },
  {
    q: 'اشرح بإيجاز سبب استخدام مفاتيح جلسة متماثلة لحماية كميات البيانات المتبادلة بعد المصافحة.',
    a: 'لأن التشفير المتماثل أسرع وأكثر كفاءة مع الكميات الكبيرة من البيانات، بينما التشفير بالمفتاح العام بطيء؛ لذلك يُستخدم المفتاح العام في المصافحة فقط ثم مفاتيح الجلسة المتماثلة لتبادل البيانات.',
  },
]

const threatOptions = ['أ التشفير', 'ب التوقيع الرقمي', 'ج الشهادة الرقمية', 'د 2FA']
const threatItems = [
  { text: 'تسريب كلمة مرور وحدث دخول غير مصرح به.', ans: 3 },
  { text: 'تم تعديل البيانات أثناء الاتصال.', ans: 1 },
  { text: 'تم توجيه مستخدم إلى موقع إلكتروني مزيف.', ans: 2 },
  { text: 'تم اعتراض محتوى الاتصال من قِبل طرف ثالث.', ans: 0 },
]

const twoFaOptions = [
  'كلمة مرور + إشعار على الهاتف الذكي',
  'كلمة مرور + سؤال سري',
  'مصادقة ببصمة الإصبع + بطاقة IC',
  'كلمة مرور + مصادقة عبر الرسائل القصيرة SMS',
]
</script>
