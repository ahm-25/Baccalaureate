<template>
  <section id="exam-question" class="py-16 bg-slate-100 border-y border-slate-200">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center gap-3 mb-6">
        <span class="text-3xl">📝</span>
        <h2 class="text-2xl font-bold text-slate-900">سؤال على نمط الامتحان — <span class="text-orange-600">[6 درجات]</span></h2>
      </div>

      <div class="bg-white rounded-3xl shadow-md border-t-4 border-t-orange-500 p-8 md:p-10 mb-8">
        <h3 class="text-xl font-bold text-slate-800 leading-relaxed mb-6">
          <span class="text-orange-600">اشرح</span> لماذا يحسّن فريق موقع إلكتروني عمله عبر دورات PDCA متكررة بدلًا من محاولة بناء موقع مثالي دفعة واحدة.
        </h3>

        <div class="bg-slate-50 border border-slate-200 rounded-2xl p-6">
          <h4 class="font-bold text-slate-700 mb-3">💡 راجع:</h4>
          <div class="flex flex-wrap gap-3">
            <span class="px-4 py-2 rounded-xl bg-violet-100 text-violet-800 font-bold">قياس النتائج</span>
            <span class="px-4 py-2 rounded-xl bg-sky-100 text-sky-800 font-bold">والتصرف بناءً عليها</span>
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
  { label: 'دفعة واحدة', cls: 'text-rose-700 bg-rose-50', marks: 'درجة', text: 'النسخة الأولى نادرًا ما تكون مثالية؛ فالفريق لا يعرف مسبقًا كيف سيستخدم الناس الموقع فعليًا، وتغيير كل شيء دفعة واحدة لا يكشف ما الذي نجح وما الذي فشل.' },
  { label: 'خطّط ونفّذ', cls: 'text-blue-700 bg-blue-50', marks: 'درجة', text: 'في دورة PDCA يحدد الفريق هدفًا واضحًا قابلًا للقياس (مثل رفع نسبة إكمال التسجيل من 40% إلى 50%) ثم ينفّذ تغييرًا وفق الخطة.' },
  { label: 'قياس النتائج', cls: 'text-violet-700 bg-violet-50', marks: 'درجة', text: 'في خطوة تحقّق يقيس النتائج ويقارنها بخط الأساس والهدف، فيعرف بالدليل هل نجح التغيير.' },
  { label: 'التصرف', cls: 'text-sky-700 bg-sky-50', marks: 'درجة', text: 'في خطوة تصرّف يعتمد ما نجح أو يوسّعه، وإن لم يحقق الهدف يراجع السبب ويعدّل الخطة ويحدد الخطوة التالية.' },
  { label: 'التكرار', cls: 'text-indigo-700 bg-indigo-50', marks: 'درجة', text: 'وبتكرار الدورة يتعلم الفريق من النتائج ويتحسن الموقع تدريجيًا (التحسين المستمر)، وقد يكون التغيير صغيرًا أو كبيرًا بحسب الهدف والدليل.' },
  { label: 'الخلاصة', cls: 'text-emerald-700 bg-emerald-50', marks: 'درجة', text: 'لذلك تقل المخاطرة وتُبنى القرارات على أدلة حقيقية بدل افتراض أن النسخة الأولى نهائية.' },
]
</script>
