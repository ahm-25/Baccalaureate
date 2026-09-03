<template>
  <section id="lesson-map" class="py-16 bg-gray-50">
    <div class="container mx-auto px-6">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-extrabold text-gray-900 mb-4 flex items-center justify-center gap-3">
          <span class="text-3xl">⭐</span> خريطة الدرس
        </h2>
      </div>

      <div class="max-w-4xl mx-auto flex flex-col md:flex-row gap-6 justify-center items-stretch relative">
        <!-- Connecting Line for Desktop -->
        <div class="hidden md:block absolute top-1/2 left-10 right-10 h-1 bg-purple-200 -translate-y-1/2 z-0"></div>

        <!-- Node 1 -->
        <div class="flex-1 bg-white rounded-2xl p-6 shadow-md border-2 border-purple-100 relative z-10 text-center transform transition-transform hover:-translate-y-2">
          <div class="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 shadow-lg shadow-purple-500/30">1</div>
          <h3 class="text-lg font-bold text-gray-800">الذكاء الاصطناعي في الحياة اليومية</h3>
        </div>

        <!-- Node 2 -->
        <div class="flex-1 bg-white rounded-2xl p-6 shadow-md border-2 border-blue-100 relative z-10 text-center transform transition-transform hover:-translate-y-2">
          <div class="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 shadow-lg shadow-blue-500/30">2</div>
          <h3 class="text-lg font-bold text-gray-800">الذكاء الاصطناعي في الصناعة</h3>
        </div>

        <!-- Node 3 -->
        <div class="flex-1 bg-white rounded-2xl p-6 shadow-md border-2 border-teal-100 relative z-10 text-center transform transition-transform hover:-translate-y-2">
          <div class="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 shadow-lg shadow-teal-500/30">3</div>
          <h3 class="text-lg font-bold text-gray-800">نقاط القوة ومواطن الحذر</h3>
        </div>
      </div>

      <div class="max-w-3xl mx-auto mt-12 bg-purple-100 rounded-2xl p-6 text-center border border-purple-200">
        <p class="text-lg text-purple-900 font-medium">
          "الذكاء الاصطناعي بارع في إيجاد الأنماط في البيانات، لكن الحكم البشري لا يزال ضروريًا عندما يتعلق الأمر بالأخلاق والخصوصية والمسؤولية."
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
