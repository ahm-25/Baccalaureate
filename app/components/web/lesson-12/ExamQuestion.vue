<template>
  <section id="exam-question" class="py-16 bg-slate-100 border-y border-slate-200">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center gap-3 mb-6">
        <span class="text-3xl">📝</span>
        <h2 class="text-2xl font-bold text-slate-900">سؤال على نمط الامتحان — <span class="text-orange-600">[6 درجات]</span></h2>
      </div>

      <div class="bg-white rounded-3xl shadow-md border-t-4 border-t-orange-500 p-8 md:p-10 mb-8">
        <h3 class="text-xl font-bold text-slate-800 leading-relaxed mb-6">
          <span class="text-orange-600">اشرح</span> كيف تساهم كل من HTML وCSS وJavaScript في صفحة مكتبة تعرض قائمة كتب، وتكون منسقة، وتُصفّي النتائج أثناء كتابة المستخدم.
        </h3>

        <div class="bg-slate-50 border border-slate-200 rounded-2xl p-6">
          <h4 class="font-bold text-slate-700 mb-3">💡 راجع:</h4>
          <div class="flex flex-wrap gap-3">
            <span class="px-4 py-2 rounded-xl bg-orange-100 text-orange-800 font-bold">البنية</span>
            <span class="px-4 py-2 rounded-xl bg-sky-100 text-sky-800 font-bold">المظهر</span>
            <span class="px-4 py-2 rounded-xl bg-amber-100 text-amber-800 font-bold">السلوك</span>
          </div>
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
  { label: 'HTML', cls: 'text-orange-700 bg-orange-50', marks: 'درجة', text: 'يبني HTML بنية الصفحة: عنوان المكتبة، ومربع البحث، وقائمة الكتب (عناصر القائمة والروابط).' },
  { label: 'HTML', cls: 'text-orange-700 bg-orange-50', marks: 'درجة', text: 'ويمكن استخدام عناصر HTML الدلالية مثل main للقائمة وnav للتنقل، فيفهم قارئ الشاشة بنية الصفحة.' },
  { label: 'CSS', cls: 'text-sky-700 bg-sky-50', marks: 'درجة', text: 'ينسق CSS مظهر الصفحة: الألوان والخطوط وترتيب بطاقات الكتب والمسافات بينها.' },
  { label: 'CSS', cls: 'text-sky-700 bg-sky-50', marks: 'درجة', text: 'ويمكن أن يجعل التخطيط متجاوبًا يتكيف مع شاشة الهاتف والكمبيوتر.' },
  { label: 'JavaScript', cls: 'text-amber-700 bg-amber-50', marks: 'درجة', text: 'يضيف JavaScript السلوك: يقرأ ما يكتبه المستخدم في مربع البحث أثناء الكتابة.' },
  { label: 'JavaScript', cls: 'text-amber-700 bg-amber-50', marks: 'درجة', text: 'ثم يصفّي القائمة ويحدّث جزء النتائج فقط من الشاشة دون إعادة تحميل الصفحة كلها.' },
]
</script>
