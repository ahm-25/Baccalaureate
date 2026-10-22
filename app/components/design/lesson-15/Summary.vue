<template>
  <section id="summary" class="py-16 bg-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-3xl p-8 md:p-12 border-2 border-emerald-100 relative overflow-hidden">
        <div class="absolute -top-12 -right-12 text-9xl opacity-10 pointer-events-none">⭐</div>

        <h2 class="text-3xl font-extrabold text-emerald-900 mb-2 flex items-center gap-3">
          <span>⭐</span> الخلاصة
        </h2>
        <p class="font-bold text-emerald-700 mb-8">تذكّر:</p>

        <ul class="space-y-4 mb-10">
          <li v-for="p in points" :key="p.text" class="flex items-start gap-4">
            <span class="text-xl mt-1">{{ p.icon }}</span>
            <p class="text-lg text-slate-800 font-medium leading-relaxed" v-html="p.text"></p>
          </li>
        </ul>

        <h3 class="text-xl font-bold text-emerald-900 mb-4">📖 مصطلحات الدرس</h3>
        <div class="grid sm:grid-cols-2 gap-3">
          <div v-for="t in terms" :key="t.name" class="bg-white/80 border border-emerald-100 rounded-xl p-4">
            <strong class="text-rose-600">{{ t.name }}</strong>
            <p class="text-slate-700 text-sm mt-1 leading-relaxed">{{ t.def }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const points = [
  { icon: '📊', text: 'التقييم <strong class="text-emerald-700">الكمي</strong> (PV، معدل الارتداد، CVR) يُظهر مقدار الاستخدام.' },
  { icon: '💬', text: 'والتقييم <strong class="text-teal-700">النوعي</strong> (اختبارات قابلية الاستخدام، المقابلات، التقييم الإرشادي) يُظهر السبب.' },
  { icon: '🤝', text: '<strong class="text-indigo-700">اجمع بينهما</strong> لتقييم موقع ما بوضوح.' },
]

const terms = [
  { name: 'التقييم النوعي', def: 'يستخدم الملاحظة والمقابلات والأدلة الوصفية لفهم تجربة المستخدم والأسباب المحتملة.' },
  { name: 'التقييم الكمي', def: 'يستخدم البيانات العددية والمقاييس المحددة لقياس السلوك والنتائج.' },
  { name: 'PV', def: 'إجمالي مشاهدات الصفحة.' },
  { name: 'معدل الارتداد (Bounce Rate)', def: 'مؤشر للتفاعل يختلف تعريفه وطريقة حسابه بحسب أداة التحليل وإعداداتها؛ لذلك يجب تفسيره وفق تعريف الأداة المستخدمة.' },
  { name: 'CVR', def: 'نسبة المستخدمين أو الجلسات التي حققت إجراءً مستهدفًا، مع تحديد المقام وطريقة الحساب.' },
  { name: 'تحليلات الويب', def: 'جمع وقياس وتحليل بيانات استخدام الموقع لفهم الوصول والتفاعل والنتائج.' },
  { name: 'التقييم الإرشادي', def: 'يفحص الخبراء واجهة المستخدم بقواعد عملية.' },
]
</script>
