<template>
  <section id="summary" class="py-16 bg-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-gradient-to-r from-orange-50 to-amber-50 rounded-3xl p-8 md:p-12 border-2 border-orange-100 relative overflow-hidden">
        <div class="absolute -top-12 -right-12 text-9xl opacity-10 pointer-events-none">⭐</div>

        <h2 class="text-3xl font-extrabold text-orange-900 mb-2 flex items-center gap-3">
          <span>⭐</span> الخلاصة
        </h2>
        <p class="font-bold text-orange-700 mb-8">تذكّر:</p>

        <ul class="space-y-4 mb-10">
          <li v-for="p in points" :key="p.text" class="flex items-start gap-4">
            <span class="text-xl mt-1">{{ p.icon }}</span>
            <p class="text-lg text-slate-800 font-medium leading-relaxed" v-html="p.text"></p>
          </li>
        </ul>

        <h3 class="text-xl font-bold text-orange-900 mb-4">📖 مصطلحات الدرس</h3>
        <div class="grid sm:grid-cols-2 gap-3">
          <div v-for="t in terms" :key="t.name" class="bg-white/80 border border-orange-100 rounded-xl p-4">
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
  { icon: '🧱', text: '<strong class="text-orange-700">HTML</strong> يبني البنية، و<strong class="text-sky-700">CSS</strong> ينسق المظهر، و<strong class="text-amber-600">JavaScript</strong> يضيف السلوك.' },
  { icon: '🏷️', text: 'وتجعل <strong>HTML الدلالية</strong> و<strong>التصميم المتجاوب</strong> و<strong>أطر العمل</strong> الواجهة الأمامية الحديثة ذات معنى وقابلة للتكيف وفعّالة.' },
]

const terms = [
  { name: 'HTML', def: 'البنية.' },
  { name: 'CSS', def: 'المظهر.' },
  { name: 'JavaScript', def: 'السلوك.' },
  { name: 'التصميم المتجاوب', def: 'يتكيف التخطيط مع حجم الشاشة.' },
  { name: 'إطار العمل', def: 'وظائف جاهزة لتطوير أكثر كفاءة.' },
  { name: 'إمكانية الوصول (Accessibility)', def: 'تصميم المحتوى والواجهة بحيث يمكن لأصحاب القدرات والاحتياجات المختلفة استخدامها، بمن فيهم ذوو الإعاقة.' },
  { name: 'SEO (تحسين محركات البحث)', def: 'ممارسات تجعل الصفحة أيسر في الفهرسة والظهور في نتائج البحث.' },
]
</script>
