<template>
  <section id="human-ai" class="py-20 bg-white">
    <div class="container mx-auto px-6 max-w-5xl">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 flex items-center justify-center gap-3">
          <span class="text-4xl">🤝</span> الذكاء الاصطناعي والإنسان
        </h2>
      </div>

      <div class="relative flex flex-col md:flex-row items-stretch justify-center gap-8 md:gap-0">
        <!-- AI Side -->
        <div class="flex-1 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 border border-blue-100 shadow-md relative z-10">
          <div class="text-center mb-6">
            <span class="text-6xl block mb-2">🤖</span>
            <h3 class="text-2xl font-bold text-blue-900">الذكاء الاصطناعي</h3>
          </div>
          <ul class="space-y-4 text-blue-800 font-semibold text-lg">
            <li class="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm"><span class="text-2xl">📊</span> تحليل البيانات</li>
            <li class="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm"><span class="text-2xl">🔍</span> اكتشاف الأنماط</li>
            <li class="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm"><span class="text-2xl">📈</span> التنبؤ</li>
            <li class="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm"><span class="text-2xl">👁️</span> التعرف</li>
          </ul>
        </div>

        <!-- Center Connection (Desktop) -->
        <div class="hidden md:flex items-center justify-center z-20 -mx-6">
          <div class="w-16 h-16 bg-white rounded-full shadow-lg border-4 border-gray-100 flex items-center justify-center text-2xl font-bold text-gray-500">
            +
          </div>
        </div>

        <!-- Human Side -->
        <div class="flex-1 bg-gradient-to-br from-green-50 to-teal-50 rounded-3xl p-8 border border-green-100 shadow-md relative z-10">
          <div class="text-center mb-6">
            <span class="text-6xl block mb-2">🧑‍⚕️</span>
            <h3 class="text-2xl font-bold text-green-900">الإنسان</h3>
          </div>
          <ul class="space-y-4 text-green-800 font-semibold text-lg">
            <li class="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm"><span class="text-2xl">⚖️</span> الحكم الأخلاقي</li>
            <li class="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm"><span class="text-2xl">🧠</span> فهم السياق</li>
            <li class="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm"><span class="text-2xl">🛡️</span> المسؤولية</li>
            <li class="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm"><span class="text-2xl">✅</span> القرار النهائي</li>
          </ul>
        </div>
      </div>

      <!-- Center Message -->
      <div class="mt-12 max-w-3xl mx-auto text-center bg-gray-900 text-white p-8 rounded-3xl shadow-xl relative overflow-hidden group">
        <div class="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 animate-pulse"></div>
        <p class="text-xl md:text-2xl font-bold leading-relaxed relative z-10">
          "الذكاء الاصطناعي <span class="text-blue-400">يساعد الإنسان</span>، لكنه <span class="text-red-400">لا يستبدل</span> الحكم البشري في القرارات عالية التأثير."
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Component Logic
</script>
