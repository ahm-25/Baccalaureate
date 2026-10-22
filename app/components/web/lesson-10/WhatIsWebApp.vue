<template>
  <section id="what-is-web-app" class="py-16 bg-white">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="inline-flex items-center gap-2 bg-emerald-600 text-white font-bold px-5 py-2 rounded-full shadow-sm mb-6">📌 ملحوظة مهمة</div>
      <h2 class="text-2xl md:text-3xl font-bold text-violet-800 mb-8">1. ماهية تطبيق الويب</h2>

      <div class="grid lg:grid-cols-3 gap-6 mb-10">
        <div class="lg:col-span-2 space-y-5 text-lg text-slate-700 leading-relaxed">
          <p>
            <span class="font-bold text-slate-400">(1)</span>
            <strong class="text-rose-600">تطبيق الويب</strong>: تطبيق يُستخدم عادةً من خلال متصفح الويب، وقد يكون بعضه قابلًا للتثبيت على الجهاز.
            ومن أمثلته خدمات الفيديو والتسوق والبريد والخرائط على الويب.
          </p>
          <p class="bg-violet-50 border-r-4 border-violet-500 rounded-xl p-4 text-base">
            نموذج مبسط: <strong>العرض، والمعالجة، والبيانات</strong>.
          </p>
        </div>
        <div class="bg-white border-2 border-slate-200 rounded-3xl p-6">
          <h3 class="font-bold text-violet-700 mb-3">مصطلحات أساسية</h3>
          <p class="text-slate-700 leading-relaxed">
            <strong class="text-rose-600">تطبيق الويب</strong> – تطبيق يُستخدم عادةً عبر متصفح الويب، وقد تتيح بعض تطبيقات الويب أيضًا إمكانية تثبيتها على الجهاز.
          </p>
        </div>
      </div>

      <!-- Examples from the book -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div v-for="e in examples" :key="e.name" class="bg-slate-50 border-2 border-slate-100 rounded-2xl p-5 text-center hover:border-violet-300 hover:-translate-y-1 transition-all">
          <div class="text-4xl mb-2">{{ e.icon }}</div>
          <h3 class="font-bold text-slate-800">{{ e.name }}</h3>
          <p class="text-sm text-slate-500 mt-1">{{ e.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const examples = [
  { icon: '🎬', name: 'خدمات الفيديو', desc: 'مشاهدة الفيديوهات والبحث عنها' },
  { icon: '🛒', name: 'التسوق', desc: 'عرض المنتجات وإتمام الطلبات' },
  { icon: '✉️', name: 'البريد', desc: 'قراءة الرسائل وإرسالها' },
  { icon: '🗺️', name: 'الخرائط على الويب', desc: 'البحث عن الأماكن والطرق' },
]
</script>
