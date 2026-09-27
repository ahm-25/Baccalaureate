<template>
  <section id="lesson-map" class="py-8">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center gap-3 mb-8">
        <span class="text-2xl">⭐</span>
        <h2 class="text-2xl font-bold text-slate-900">خريطة الدرس</h2>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div v-for="concept in concepts" :key="concept.title" 
             class="bg-white rounded-2xl p-4 border-2 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
             :class="concept.borderColor">
          <div class="text-2xl mb-2">{{ concept.icon }}</div>
          <h3 class="font-bold text-slate-800">{{ concept.title }}</h3>
          <p class="text-sm text-slate-500 mt-1">{{ concept.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const concepts = [
  { icon: "📉", title: "التحيز الخوارزمي", desc: "أنماط غير عادلة", borderColor: "border-red-100 hover:border-red-300" },
  { icon: "📊", title: "بيانات التدريب", desc: "أساس التعلم", borderColor: "border-orange-100 hover:border-orange-300" },
  { icon: "⚖️", title: "العدالة", desc: "عدم التمييز", borderColor: "border-blue-100 hover:border-blue-300" },
  { icon: "🔎", title: "الشفافية", desc: "وضوح النظام", borderColor: "border-indigo-100 hover:border-indigo-300" },
  { icon: "🔐", title: "الخصوصية", desc: "حماية البيانات", borderColor: "border-green-100 hover:border-green-300" },
  { icon: "🧠", title: "XAI", desc: "تفسير القرارات", borderColor: "border-purple-100 hover:border-purple-300" },
  { icon: "⬛", title: "الصندوق الأسود", desc: "غموض الآلية", borderColor: "border-slate-200 hover:border-slate-400" },
  { icon: "👤", title: "المساءلة", desc: "تحديد المسؤول", borderColor: "border-rose-100 hover:border-rose-300" },
];
</script>
