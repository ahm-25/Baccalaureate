<template>
  <section id="summary" class="py-16 bg-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-gradient-to-r from-violet-50 to-indigo-50 rounded-3xl p-8 md:p-12 border-2 border-violet-100 relative overflow-hidden">
        <div class="absolute -top-12 -right-12 text-9xl opacity-10 pointer-events-none">⭐</div>

        <h2 class="text-3xl font-extrabold text-violet-900 mb-2 flex items-center gap-3">
          <span>⭐</span> الخلاصة
        </h2>
        <p class="font-bold text-violet-700 mb-8">تذكّر:</p>

        <ul class="space-y-4 mb-10">
          <li v-for="p in points" :key="p.text" class="flex items-start gap-4">
            <span class="text-xl mt-1">{{ p.icon }}</span>
            <p class="text-lg text-slate-800 font-medium leading-relaxed" v-html="p.text"></p>
          </li>
        </ul>

        <h3 class="text-xl font-bold text-violet-900 mb-4">📖 مصطلحات الدرس</h3>
        <div class="grid sm:grid-cols-2 gap-3">
          <div v-for="t in terms" :key="t.name" class="bg-white/80 border border-violet-100 rounded-xl p-4">
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
  { icon: '🖥️', text: '<strong class="text-violet-700">الواجهة الأمامية</strong> تعرض وتجمع.' },
  { icon: '⚙️', text: '<strong class="text-indigo-700">الواجهة الخلفية</strong> تقرر وتعالج.' },
  { icon: '🗄️', text: '<strong class="text-sky-700">قاعدة البيانات</strong> تخزن وتسترجع — ثلاث طبقات متعاونة تجعل تطبيق الويب يعمل.' },
]

const terms = [
  { name: 'تطبيق الويب', def: 'تطبيق يُستخدم عادةً عبر متصفح الويب، وقد تتيح بعض تطبيقات الويب أيضًا إمكانية تثبيتها على الجهاز.' },
  { name: 'الواجهة الأمامية', def: 'الشاشة التي يراها المستخدمون ويتفاعلون معها.' },
  { name: 'الواجهة الخلفية', def: 'المعالجة الخفية من جانب الخادم.' },
  { name: 'قاعدة البيانات', def: 'حيث تُخزَّن البيانات وتُدار.' },
  { name: 'بنية الطبقات الثلاث', def: 'الواجهة الأمامية + الواجهة الخلفية + قاعدة البيانات تتعاون معًا.' },
]
</script>
