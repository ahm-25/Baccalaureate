<template>
  <section id="cautions" class="py-20 bg-orange-50">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-extrabold text-orange-900 mb-6 flex items-center justify-center gap-3">
          <span class="text-4xl">⚠️</span> ما الذي يتطلب الحذر عند استخدام الذكاء الاصطناعي؟
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <!-- 1 -->
        <div class="bg-white rounded-3xl p-8 border border-orange-100 shadow-md hover:-translate-y-2 transition-transform duration-300">
          <div class="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center text-3xl mb-6">⚖️</div>
          <h3 class="text-xl font-bold text-gray-900 mb-4">الأحكام الأخلاقية</h3>
          <p class="text-gray-600">
            قد تؤدي القرارات الآلية إلى تمييز أو تحيز ضد فئات معينة، لأن النظام لا يمتلك فهماً أو وعياً أخلاقياً للعدالة.
          </p>
        </div>

        <!-- 2 -->
        <div class="bg-white rounded-3xl p-8 border border-orange-100 shadow-md hover:-translate-y-2 transition-transform duration-300">
          <div class="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center text-3xl mb-6">🔐</div>
          <h3 class="text-xl font-bold text-gray-900 mb-4">الخصوصية</h3>
          <p class="text-gray-600">
            التعامل مع المعلومات الشخصية والبيانات الحساسة لتدريب النماذج يثير مخاوف كبيرة بشأن اختراق أو إساءة استخدام هذه البيانات.
          </p>
        </div>

        <!-- 3 -->
        <div class="bg-white rounded-3xl p-8 border border-orange-100 shadow-md hover:-translate-y-2 transition-transform duration-300">
          <div class="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center text-3xl mb-6">🚨</div>
          <h3 class="text-xl font-bold text-gray-900 mb-4">القرارات عالية الأثر</h3>
          <p class="text-gray-600">
            عندما يكون للقرار تأثير كبير على حياة الأشخاص (مثل التشخيص الطبي، القضاء، القيادة الذاتية) يجب تحديد المسؤولية بدقة وعدم ترك القرار بالكامل للآلة.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
