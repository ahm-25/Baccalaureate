<template>
  <section id="lesson-map" class="py-8">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center gap-3 mb-6">
        <span class="text-2xl">⭐</span>
        <h2 class="text-2xl font-bold text-slate-900">خريطة الدرس</h2>
      </div>

      <div class="bg-sky-50 border border-sky-200 rounded-2xl p-5 mb-6">
        <h3 class="font-bold text-emerald-700 mb-2">الفكرة الأساسية:</h3>
        <p class="text-slate-700 font-medium leading-relaxed">
          يعتمد الاتصال والخدمات الآمنة عبر الإنترنت على الجمع بين التشفير والمصادقة، وليس على تقنية واحدة فقط.
        </p>
      </div>

      <h3 class="font-bold text-sky-800 mb-4">المفاهيم الأساسية:</h3>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
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
  { icon: '🌐', title: 'HTTPS', desc: 'اتصال ويب آمن', borderColor: 'border-sky-100 hover:border-sky-300' },
  { icon: '⚡', title: 'التشفير المتماثل', desc: 'يحمي البيانات بسرعة', borderColor: 'border-amber-100 hover:border-amber-300' },
  { icon: '🔑', title: 'التشفير بالمفتاح العام', desc: 'مفتاح عام + مفتاح خاص', borderColor: 'border-indigo-100 hover:border-indigo-300' },
  { icon: '🤝', title: 'مصافحة TLS', desc: 'Transport Layer Security', borderColor: 'border-blue-100 hover:border-blue-300' },
  { icon: '📱', title: 'المصادقة الثنائية (2FA)', desc: 'عاملان من فئتين', borderColor: 'border-emerald-100 hover:border-emerald-300' },
  { icon: '✍️', title: 'التوقيع الرقمي', desc: 'يكشف التلاعب', borderColor: 'border-rose-100 hover:border-rose-300' },
  { icon: '📜', title: 'الشهادة الرقمية', desc: 'تثبت هوية الخادم', borderColor: 'border-orange-100 hover:border-orange-300' },
  { icon: '🚫', title: 'عدم التنصل', desc: 'لا يمكن إنكار الإرسال', borderColor: 'border-slate-200 hover:border-slate-400' },
]
</script>
