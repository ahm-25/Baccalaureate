<template>
  <section id="summary" class="py-16 bg-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-gradient-to-r from-sky-50 to-cyan-50 rounded-3xl p-8 md:p-12 border-2 border-sky-100 relative overflow-hidden">
        <div class="absolute -top-12 -right-12 text-9xl opacity-10 pointer-events-none">⭐</div>

        <h2 class="text-3xl font-extrabold text-sky-900 mb-2 flex items-center gap-3">
          <span>⭐</span> الخلاصة
        </h2>
        <p class="font-bold text-sky-700 mb-8">تذكّر:</p>

        <ul class="space-y-4 mb-10">
          <li v-for="p in points" :key="p.text" class="flex items-start gap-4">
            <span class="text-xl mt-1">{{ p.icon }}</span>
            <p class="text-lg text-slate-800 font-medium leading-relaxed" v-html="p.text"></p>
          </li>
        </ul>

        <h3 class="text-xl font-bold text-sky-900 mb-4">📖 مصطلحات الدرس</h3>
        <div class="grid sm:grid-cols-2 gap-3">
          <div v-for="t in terms" :key="t.name" class="bg-white/80 border border-sky-100 rounded-xl p-4">
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
  { icon: '💻', text: '<strong class="text-sky-700">العميل يطلب، والخادم يستجيب</strong> — عبر HTTP أو HTTPS.' },
  { icon: '📮', text: 'بأسلوب <strong class="text-cyan-700">GET</strong> أو <strong class="text-cyan-700">POST</strong>، ومع <strong class="text-amber-700">رمز حالة</strong> يبلغ عن النتيجة.' },
  { icon: '🧩', text: 'وغالبًا <strong class="text-indigo-700">واجهة برمجة تطبيقات</strong> تعيد بيانات <strong class="text-indigo-700">JSON</strong>.' },
]

const terms = [
  { name: 'العميل', def: 'الجانب الذي يطلب البيانات أو المعالجة.' },
  { name: 'الخادم', def: 'الجانب الذي يعالج الطلبات ويعيد الاستجابات.' },
  { name: 'طريقة طلب HTTP', def: 'يوضح ما هو مطلوب (GET، POST).' },
  { name: 'رمز حالة HTTP', def: 'يبلغ عن النتيجة (200، 404، 500).' },
  { name: 'API', def: 'تتيح لبرمجيات مختلفة تبادل البيانات.' },
  { name: 'JSON', def: 'صيغة بيانات قابلة للقراءة.' },
]
</script>
