<template>
  <section id="risks" class="py-20 bg-red-50">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-extrabold text-red-900 mb-6 flex items-center justify-center gap-3">
          <span class="text-4xl">⚠️</span> أين نحتاج إلى الحذر؟
        </h2>
        <p class="text-xl text-red-700 max-w-3xl mx-auto leading-relaxed font-medium">
          رغم براعة الذكاء الاصطناعي، إلا أن هناك مجالات يجب أن نتوخى فيها أقصى درجات الحذر.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <!-- 1 -->
        <div class="bg-white rounded-2xl p-6 border border-red-100 shadow flex gap-4 items-start hover:bg-red-50 transition-colors">
          <div class="text-3xl shrink-0">⚖️</div>
          <div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">الأحكام الأخلاقية</h3>
            <p class="text-gray-600 text-sm">
              لا يمتلك الذكاء الاصطناعي وعيًا أخلاقيًا؛ الاعتماد عليه كليًا قد يؤدي إلى تمييز أو تحيز ضد فئات معينة.
            </p>
          </div>
        </div>

        <!-- 2 -->
        <div class="bg-white rounded-2xl p-6 border border-red-100 shadow flex gap-4 items-start hover:bg-red-50 transition-colors">
          <div class="text-3xl shrink-0">🔐</div>
          <div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">الخصوصية</h3>
            <p class="text-gray-600 text-sm">
              يتطلب الذكاء الاصطناعي كميات هائلة من البيانات للتدريب، مما يثير مخاوف خطيرة بشأن كيفية جمع واستخدام المعلومات الشخصية الحساسة.
            </p>
          </div>
        </div>

        <!-- 3 -->
        <div class="bg-white rounded-2xl p-6 border border-red-100 shadow flex gap-4 items-start hover:bg-red-50 transition-colors">
          <div class="text-3xl shrink-0">🎯</div>
          <div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">القرارات عالية الأثر</h3>
            <p class="text-gray-600 text-sm">
              في مجالات مثل الطب، القضاء، أو قيادة السيارات، يجب تحديد "من يتحمل المسؤولية" في حال اتخذ الذكاء الاصطناعي قرارًا خاطئًا.
            </p>
          </div>
        </div>

        <!-- 4 -->
        <div class="bg-white rounded-2xl p-6 border border-red-100 shadow flex gap-4 items-start hover:bg-red-50 transition-colors">
          <div class="text-3xl shrink-0">📊</div>
          <div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">جودة البيانات</h3>
            <p class="text-gray-600 text-sm">
              الذكاء الاصطناعي يتعلم من البيانات التي نغذيه بها. إذا كانت البيانات غير كافية، غير ممثلة، أو متحيزة، فستكون نتائجه غير دقيقة ومتحيزة (Garbage In, Garbage Out).
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
