<template>
  <section id="summary" class="py-16 bg-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-3xl p-8 md:p-12 border-2 border-teal-100 relative overflow-hidden">
        <div class="absolute -top-12 -right-12 text-9xl opacity-10 pointer-events-none">⭐</div>

        <h2 class="text-3xl font-extrabold text-teal-900 mb-2 flex items-center gap-3">
          <span>⭐</span> الخلاصة
        </h2>
        <p class="font-bold text-teal-700 mb-8">تذكّر:</p>

        <ul class="space-y-4 mb-10">
          <li v-for="p in points" :key="p.text" class="flex items-start gap-4">
            <span class="text-xl mt-1">{{ p.icon }}</span>
            <p class="text-lg text-slate-800 font-medium leading-relaxed" v-html="p.text"></p>
          </li>
        </ul>

        <h3 class="text-xl font-bold text-teal-900 mb-4">📖 مصطلحات الدرس</h3>
        <div class="grid sm:grid-cols-2 gap-3">
          <div v-for="t in terms" :key="t.name" class="bg-white/80 border border-teal-100 rounded-xl p-4">
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
  { icon: '⚖️', text: 'لا توجد وسيلة هي <strong class="text-teal-700">الأفضل لكل شيء</strong>.' },
  { icon: '🎯', text: 'طابق الوسيلة مع <strong class="text-teal-700">الغرض والجمهور</strong>.' },
  { icon: '🧩', text: 'واجمع بين الوسائط بحيث تقوم كل واحدة <strong class="text-teal-700">بما تُجيده</strong>.' },
]

const terms = [
  { name: 'اتجاه واحد', def: 'من المُرسِل إلى المُستقبِل فقط.' },
  { name: 'اتجاهين', def: 'يمكن للمستخدمين الاستجابة والمشاركة.' },
  { name: 'نقاط قوة الموقع الإلكتروني', def: 'متنوع، قابل للتحديث، عالمي، ثنائي الاتجاه.' },
  { name: 'قيود الموقع الإلكتروني', def: 'يحتاج إلى إنترنت؛ يجب على المستخدمين البحث عنه.' },
]
</script>
