<template>
  <section id="dangers" class="py-20 bg-red-50">
    <div class="container mx-auto px-6 max-w-6xl">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-extrabold text-red-900 mb-6 flex items-center justify-center gap-3">
          <span class="text-4xl">⚠️</span> مخاطر يجب الانتباه إليها
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        <!-- 1 -->
        <div class="bg-white rounded-2xl p-6 border border-red-100 shadow hover:shadow-lg transition-all duration-300 group">
          <div class="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">📉</div>
          <h3 class="text-lg font-bold text-gray-900 mb-2">بيانات التدريب غير الكافية أو المتحيزة</h3>
          <p class="text-gray-600 text-sm">
            الذكاء الاصطناعي يتعلم من البيانات؛ فإذا كانت البيانات ناقصة أو تعكس تحيزات بشرية، ستكون النتائج غير دقيقة.
          </p>
        </div>

        <!-- 2 -->
        <div class="bg-white rounded-2xl p-6 border border-red-100 shadow hover:shadow-lg transition-all duration-300 group">
          <div class="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">👻</div>
          <h3 class="text-lg font-bold text-gray-900 mb-2">الهلوسة</h3>
          <p class="text-gray-600 text-sm">
            توليد معلومات غير صحيحة أو غير مدعومة بالواقع ولكنها تبدو مقنعة ومنطقية للمستخدم العادي.
          </p>
        </div>

        <!-- 3 -->
        <div class="bg-white rounded-2xl p-6 border border-red-100 shadow hover:shadow-lg transition-all duration-300 group">
          <div class="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">⬛</div>
          <h3 class="text-lg font-bold text-gray-900 mb-2">مشكلة الصندوق الأسود</h3>
          <p class="text-gray-600 text-sm">
            عندما يكون من غير الواضح أو المفهوم كيف توصل الذكاء الاصطناعي إلى حكمه أو قراره.
          </p>
        </div>

        <!-- 4 -->
        <div class="bg-white rounded-2xl p-6 border border-red-100 shadow hover:shadow-lg transition-all duration-300 group">
          <div class="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">👁️</div>
          <h3 class="text-lg font-bold text-gray-900 mb-2">الخصوصية</h3>
          <p class="text-gray-600 text-sm">
            الاعتماد على بيانات شخصية للمستخدمين لتقديم الخدمات، مما قد يهدد خصوصيتهم إذا تم اختراقها أو إساءة استخدامها.
          </p>
        </div>

        <!-- 5 -->
        <div class="bg-white rounded-2xl p-6 border border-red-100 shadow hover:shadow-lg transition-all duration-300 group">
          <div class="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">🎭</div>
          <h3 class="text-lg font-bold text-gray-900 mb-2">التحيز</h3>
          <p class="text-gray-600 text-sm">
            قد تؤثر البيانات المتحيزة التي تتدرب عليها الأنظمة على النتائج، مما يؤدي إلى قرارات تظلم فئات معينة.
          </p>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
