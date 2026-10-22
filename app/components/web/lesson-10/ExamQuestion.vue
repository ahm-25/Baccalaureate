<template>
  <section id="exam-question" class="py-16 bg-slate-100 border-y border-slate-200">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center gap-3 mb-6">
        <span class="text-3xl">📝</span>
        <h2 class="text-2xl font-bold text-slate-900">سؤال على نمط الامتحان — <span class="text-orange-600">[6 درجات]</span></h2>
      </div>

      <div class="bg-white rounded-3xl shadow-md border-t-4 border-t-orange-500 p-8 md:p-10 mb-8">
        <h3 class="text-xl font-bold text-slate-800 leading-relaxed mb-6">
          <span class="text-orange-600">اشرح</span> كيف تتعاون الطبقات الثلاث لتطبيق الويب عندما ينشر المستخدم صورة على تطبيق تواصل اجتماعي.
        </h3>

        <div class="bg-slate-50 border border-slate-200 rounded-2xl p-6">
          <h4 class="font-bold text-slate-700 mb-3">💡 أشِر إلى:</h4>
          <div class="flex flex-wrap gap-3">
            <span class="px-4 py-2 rounded-xl bg-violet-100 text-violet-800 font-bold">دور الواجهة الأمامية</span>
            <span class="px-4 py-2 rounded-xl bg-indigo-100 text-indigo-800 font-bold">الواجهة الخلفية</span>
            <span class="px-4 py-2 rounded-xl bg-sky-100 text-sky-800 font-bold">قاعدة البيانات</span>
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
  { label: 'الأمامية', cls: 'text-violet-700 bg-violet-50', marks: 'درجة', text: 'تعرض الواجهة الأمامية شاشة النشر، وتستقبل الصورة والتعليق اللذين يختارهما المستخدم أو يكتبهما.' },
  { label: 'الأمامية', cls: 'text-violet-700 bg-violet-50', marks: 'درجة', text: 'ثم ترسل الصورة وبيانات المنشور إلى الواجهة الخلفية.' },
  { label: 'الخلفية', cls: 'text-indigo-700 bg-indigo-50', marks: 'درجة', text: 'تعالج الواجهة الخلفية الطلب على الخادم وتطبق قواعد التطبيق، مثل التحقق من تسجيل دخول المستخدم وتحديد الجمهور المستهدف للمنشور.' },
  { label: 'البيانات', cls: 'text-sky-700 bg-sky-50', marks: 'درجة', text: 'تحفظ قاعدة البيانات الصورة وبيانات المنشور وتربطها بحساب المستخدم، لتوفرها عند الحاجة.' },
  { label: 'العودة', cls: 'text-emerald-700 bg-emerald-50', marks: 'درجة', text: 'تعيد الواجهة الخلفية نتيجة الحفظ، فتعرض الواجهة الأمامية المنشور في الخط الزمني.' },
  { label: 'الخلاصة', cls: 'text-slate-700 bg-slate-100', marks: 'درجة', text: 'وهكذا تتعاون الطبقات الثلاث: الواجهة الأمامية تعرض وتجمع، والواجهة الخلفية تقرر وتعالج، وقاعدة البيانات تخزن وتسترجع.' },
]
</script>
