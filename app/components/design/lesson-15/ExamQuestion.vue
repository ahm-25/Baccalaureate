<template>
  <section id="exam-question" class="py-16 bg-slate-100 border-y border-slate-200">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center gap-3 mb-6">
        <span class="text-3xl">📝</span>
        <h2 class="text-2xl font-bold text-slate-900">سؤال على نمط الامتحان — <span class="text-orange-600">[6 درجات]</span></h2>
      </div>

      <div class="bg-white rounded-3xl shadow-md border-t-4 border-t-orange-500 p-8 md:p-10 mb-8">
        <h3 class="text-xl font-bold text-slate-800 leading-relaxed mb-6">
          <span class="text-orange-600">اشرح</span> لماذا ينبغي لفريق موقع إلكتروني استخدام كل من التقييم النوعي والكمي بدلًا من استخدام أحدهما فقط.
        </h3>

        <div class="bg-slate-50 border border-slate-200 rounded-2xl p-6">
          <h4 class="font-bold text-slate-700 mb-3">💡 راجع:</h4>
          <span class="px-4 py-2 rounded-xl bg-emerald-100 text-emerald-800 font-bold inline-block">ما تُظهره الأرقام وما تُظهره آراء المستخدمين</span>
        </div>
      </div>

      <div class="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
        <button
          @click="showAnswer = !showAnswer"
          class="w-full bg-slate-50 hover:bg-slate-100 text-right px-6 py-4 font-bold text-lg flex justify-between items-center transition-colors focus:outline-none"
        >
          <span class="text-slate-800">عرض نموذج الإجابة وتوزيع الدرجات</span>
          <span class="text-slate-500 transform transition-transform" :class="{ 'rotate-180': showAnswer }">▼</span>
        </button>
        <div v-show="showAnswer" class="p-6 md:p-8 border-t border-slate-200 text-slate-700 leading-relaxed font-medium space-y-4">
          <p v-for="(p, i) in points" :key="i" class="flex gap-3">
            <span class="shrink-0 font-bold px-2 rounded h-fit" :class="p.cls">{{ p.label }}</span>
            <span>{{ p.text }} <span class="text-xs font-bold text-slate-400">[{{ p.marks }}]</span></span>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const showAnswer = ref(false)

const points = [
  { label: 'الكمي', cls: 'text-emerald-700 bg-emerald-50', marks: 'درجة', text: 'التقييم الكمي (تحليلات الويب مثل PV ومعدل الارتداد وCVR، واختبار A/B) يقيس السلوك والنتائج بالأرقام، فيكشف ماذا يحدث وحجمه.' },
  { label: 'حدوده', cls: 'text-emerald-700 bg-emerald-50', marks: 'درجة', text: 'لكن المؤشر الكمي لا يفسر السبب وحده؛ فارتفاع PV مع انخفاض CVR يخبرنا أن الناس يصلون ولا يشترون، دون أن يوضح لماذا.' },
  { label: 'النوعي', cls: 'text-teal-700 bg-teal-50', marks: 'درجة', text: 'التقييم النوعي (اختبار قابلية الاستخدام، المقابلات، التقييم الإرشادي) يفهم تجربة المستخدم والأسباب المحتملة للسلوك والمشكلات.' },
  { label: 'حدوده', cls: 'text-teal-700 bg-teal-50', marks: 'درجة', text: 'لكن الملاحظة النوعية لا تمثل جميع المستخدمين بالضرورة، ولا تبيّن حجم المشكلة.' },
  { label: 'الجمع', cls: 'text-indigo-700 bg-indigo-50', marks: 'درجة', text: 'لذلك نجمع بينهما: الأرقام تكشف ما يحدث وأين ننظر، والمستخدمون يكشفون الأسباب.' },
  { label: 'النتيجة', cls: 'text-slate-700 bg-slate-100', marks: 'درجة', text: 'فيحصل الفريق على صورة أوضح وأدلة أقوى لتبرير توصية بتحسين الموقع.' },
]
</script>
