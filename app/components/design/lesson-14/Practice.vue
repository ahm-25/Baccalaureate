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
          <button v-if="!open.includes(i)" @click="open.push(i)" class="text-fuchsia-700 font-bold bg-fuchsia-50 hover:bg-fuchsia-100 px-4 py-2 rounded-lg text-sm transition-colors">
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
        (1) من الخيارات التالية (أ – د)، اختر الخيار الذي <strong class="text-rose-600">لا</strong> يُعد معلومة مناسبة لإدراجها عند إعداد شخصية نموذجية.
      </p>
      <CyberLesson07SingleChoice
        :options="personaOptions"
        :ans="2"
        explanation="أداء خادم الموقع معلومة تقنية عن الموقع لا عن المستخدم. أما العمر والمهنة (إذا كانت مهمة للتصميم) والغرض والتحديات فهي من معلومات الشخصية النموذجية."
        class="mb-10"
      />

      <p class="text-slate-800 font-medium leading-relaxed mb-4">
        (2) لكل من تحسينات التصميم (أ – د)، حدد أيًا من المبادئ الأربعة للتصميم يقابله.
      </p>
      <CyberLesson07ChoiceItems :items="improvements" :options="principleOptions" />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const open = ref([])

const shortQuestions = [
  { q: 'ما اسم التمثيل الذي يلخص نوعًا من المستخدمين واحتياجاته وسياق استخدامه؟', a: 'شخصية المستخدم (Persona).' },
  { q: 'ما المصطلح المستخدم لمخطط يوضح مكان وأولوية المعلومات في صفحة الويب؟', a: 'المخطط الهيكلي (Wireframe).' },
  { q: 'ما اسم المبادئ الأربعة للتصميم عند التعبير عنها بالأحرف الأولى الإنجليزية؟', a: 'مبادئ CRAP: التباين (Contrast)، والتكرار (Repetition)، والمحاذاة (Alignment)، والتقارب (Proximity).' },
  { q: 'ما مصطلح نهج التصميم الذي يصمم المواقع الإلكترونية والخدمات من منظور المستخدم؟ واذكر اختصاره المكوّن من ثلاثة أحرف.', a: 'التصميم المتمحور حول المستخدم، واختصاره UCD (User-Centered Design).' },
]

const personaOptions = [
  'عمر المستخدم ومهنته',
  'غرض المستخدم من استخدام الموقع الإلكتروني',
  'أداء خادم الموقع الإلكتروني',
  'التحديات التي يواجهها المستخدم',
]

const principleOptions = ['أ التباين', 'ب التكرار', 'ج المحاذاة', 'د التقارب']
const improvements = [
  { text: 'جعل العناوين كبيرة وغامقة لتمييزها عن نص المحتوى', ans: 0 },
  { text: 'تجميع أسماء المنتجات وأسعارها وصورها قريبة من بعضها', ans: 3 },
  { text: 'محاذاة الحواف اليمنى للنص العربي والعناصر المرتبطة وفق شبكة التصميم', ans: 2 },
  { text: 'توحيد خط ولون العناوين في جميع الصفحات', ans: 1 },
]
</script>
