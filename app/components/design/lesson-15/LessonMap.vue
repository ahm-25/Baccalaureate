<template>
  <section id="lesson-map" class="py-8">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center gap-3 mb-6">
        <span class="text-2xl">⭐</span>
        <h2 class="text-2xl font-bold text-slate-900">خريطة الدرس</h2>
      </div>

      <div class="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 mb-6">
        <h3 class="font-bold text-emerald-700 mb-2">الفكرة الأساسية:</h3>
        <p class="text-slate-700 font-medium leading-relaxed">
          تُقيَّم المواقع الإلكترونية نوعيًا (لماذا – اختبارات قابلية الاستخدام، المقابلات، التقييم الإرشادي) وكميًا (كم – تحليلات الويب: PV، معدل الارتداد، CVR)؛
          والجمع بين الاثنين يعطي أوضح صورة.
        </p>
      </div>

      <h3 class="font-bold text-emerald-800 mb-4">المفاهيم الأساسية:</h3>
      <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div v-for="concept in concepts" :key="concept.title"
             class="bg-white rounded-2xl p-4 border-2 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
             :class="concept.borderColor">
          <div class="text-2xl mb-2">{{ concept.icon }}</div>
          <h4 class="font-bold text-slate-800" dir="auto">{{ concept.title }}</h4>
          <p class="text-sm text-slate-500 mt-1">{{ concept.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const concepts = [
  { icon: '💬', title: 'التقييم النوعي', desc: 'يفهم «لماذا؟»', borderColor: 'border-teal-100 hover:border-teal-300' },
  { icon: '📊', title: 'التقييم الكمي', desc: 'يقيس «كم؟»', borderColor: 'border-emerald-100 hover:border-emerald-300' },
  { icon: '📈', title: 'تحليلات الويب', desc: 'بيانات استخدام الموقع', borderColor: 'border-sky-100 hover:border-sky-300' },
  { icon: '🔢', title: 'PV / معدل الارتداد / CVR', desc: 'مؤشرات رئيسية', borderColor: 'border-amber-100 hover:border-amber-300' },
  { icon: '🧑‍🏫', title: 'التقييم الإرشادي', desc: 'مراجعة الخبراء', borderColor: 'border-indigo-100 hover:border-indigo-300' },
]
</script>
