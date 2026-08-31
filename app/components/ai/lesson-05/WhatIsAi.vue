<template>
  <section id="what-is-ai" class="py-20 bg-white">
    <div class="container mx-auto px-6 max-w-5xl">
      <div class="mb-12">
        <h2
          class="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 border-r-4 border-purple-500 pr-4"
        >
          1. ما هو الذكاء الاصطناعي؟
        </h2>
        <div
          class="bg-purple-50 rounded-2xl p-8 border border-purple-100 shadow-sm text-lg md:text-xl text-gray-800 leading-relaxed font-medium"
        >
          <p>
            <strong class="text-purple-700"
              >الذكاء الاصطناعي (Artificial Intelligence - AI):</strong
            >
            هو مجال واسع يضم أنظمة حاسوبية تستطيع تنفيذ مهام تتطلب عادةً ذكاءً
            بشرياً، مثل التعلم من البيانات، التنبؤ، التعرف على الأنماط، توليد
            المحتوى، واتخاذ القرارات أو دعمها.
          </p>
        </div>
      </div>

      <h3 class="text-2xl font-bold text-gray-900 mb-8 text-center">
        أمثلة لمهام ينفذها الذكاء الاصطناعي:
      </h3>

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        <div
          v-for="(example, index) in examples"
          :key="index"
          class="bg-white rounded-2xl p-6 border border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center flex flex-col items-center justify-center gap-4 group"
        >
          <div
            class="w-16 h-16 rounded-full flex items-center justify-center text-3xl"
            :class="example.color"
          >
            {{ example.icon }}
          </div>
          <span
            class="font-bold text-gray-800 group-hover:text-purple-600 transition-colors"
            >{{ example.text }}</span
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const examples = [
  { icon: "🎤", text: "التعرف على الكلام", color: "bg-blue-100 text-blue-600" },
  { icon: "📷", text: "التعرف على الصور", color: "bg-teal-100 text-teal-600" },
  {
    icon: "🌍",
    text: "الترجمة الآلية",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: "📧",
    text: "تصنيف الـ Spam",
    color: "bg-orange-100 text-orange-600",
  },
  { icon: "🛒", text: "توصية المنتجات", color: "bg-pink-100 text-pink-600" },
];
</script>
