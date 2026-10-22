<template>
  <section id="summary" class="py-16 bg-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-gradient-to-r from-rose-50 to-amber-50 rounded-3xl p-8 md:p-12 border-2 border-rose-100 relative overflow-hidden">
        <div class="absolute -top-12 -right-12 text-9xl opacity-10 pointer-events-none">⭐</div>

        <h2 class="text-3xl font-extrabold text-rose-900 mb-2 flex items-center gap-3">
          <span>⭐</span> الخلاصة
        </h2>
        <p class="font-bold text-rose-700 mb-8">تذكّر:</p>

        <ul class="space-y-4 mb-10">
          <li v-for="p in points" :key="p.text" class="flex items-start gap-4">
            <span class="text-xl mt-1">{{ p.icon }}</span>
            <p class="text-lg text-slate-800 font-medium leading-relaxed" v-html="p.text"></p>
          </li>
        </ul>

        <h3 class="text-xl font-bold text-rose-900 mb-4">📖 مصطلحات الدرس</h3>
        <div class="grid sm:grid-cols-2 gap-3">
          <div v-for="t in terms" :key="t.name" class="bg-white/80 border border-rose-100 rounded-xl p-4">
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
  { icon: '6️⃣', text: 'اتبع التسلسل العام للمراحل الست: <strong class="text-rose-700">تحضير ← اكتشاف ← احتواء ← استئصال ← استعادة ← الدروس المستفادة والتحسين</strong>.' },
  { icon: '🔁', text: 'مع إمكانية <strong class="text-amber-700">التداخل</strong> والعودة لمرحلة سابقة بحسب الحادث.' },
  { icon: '📊', text: 'وحدد أولويات المخاطر بناءً على <strong class="text-rose-700">التأثير × الاحتمالية</strong>.' },
]

const terms = [
  { name: 'الحادث الأمني', def: 'حدث يؤثر في سرية المعلومات أو سلامتها أو توافرها، أو يهددها بجدية، أو يخالف سياسة أمنية.' },
  { name: 'الاحتواء', def: 'الحد من انتشار الضرر.' },
  { name: 'الاستئصال', def: 'إزالة السبب.' },
  { name: 'الاستعادة', def: 'إعادة الأنظمة والخدمات إلى حالة تشغيل آمنة وطبيعية.' },
  { name: 'التأثير', def: 'مقدار الضرر إذا وقعت المخاطرة.' },
  { name: 'الاحتمالية', def: 'مدى احتمالية وقوع المخاطرة.' },
]
</script>
