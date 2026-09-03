<template>
  <section id="summary" class="py-20 bg-purple-50">
    <div class="container mx-auto px-6 max-w-5xl">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-extrabold text-purple-900 mb-4 flex items-center justify-center gap-3">
          <span class="text-4xl">⭐</span> خلاصة الدرس
        </h2>
        <div class="w-24 h-1 bg-purple-500 mx-auto rounded-full"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <!-- 1 -->
        <div class="bg-white p-6 rounded-2xl border border-purple-100 shadow-sm">
          <h3 class="font-bold text-gray-900 mb-2 flex items-center gap-2">
            <span class="text-2xl">🤖</span> نظام التوصية
          </h3>
          <p class="text-sm text-gray-600">يتنبأ بالتفضيلات من السلوك السابق.</p>
        </div>
        <!-- 2 -->
        <div class="bg-white p-6 rounded-2xl border border-purple-100 shadow-sm">
          <h3 class="font-bold text-gray-900 mb-2 flex items-center gap-2">
            <span class="text-2xl">🎤</span> المساعد الصوتي
          </h3>
          <p class="text-sm text-gray-600">يتعرف على الصوت ويفهم الأوامر وينفذها.</p>
        </div>
        <!-- 3 -->
        <div class="bg-white p-6 rounded-2xl border border-purple-100 shadow-sm">
          <h3 class="font-bold text-gray-900 mb-2 flex items-center gap-2">
            <span class="text-2xl">🌍</span> الترجمة الآلية
          </h3>
          <p class="text-sm text-gray-600">تترجم النصوص تلقائيًا بناءً على السياق.</p>
        </div>
        <!-- 4 -->
        <div class="bg-white p-6 rounded-2xl border border-purple-100 shadow-sm">
          <h3 class="font-bold text-gray-900 mb-2 flex items-center gap-2">
            <span class="text-2xl">📷</span> التعرف على الوجه
          </h3>
          <p class="text-sm text-gray-600">يكشف ويتعرف على الوجوه لمهام مثل الأمان.</p>
        </div>
        <!-- 5 -->
        <div class="bg-white p-6 rounded-2xl border border-purple-100 shadow-sm">
          <h3 class="font-bold text-gray-900 mb-2 flex items-center gap-2">
            <span class="text-2xl">🏥</span> AI في الصحة
          </h3>
          <p class="text-sm text-gray-600">التشخيص بالصور ودعم اكتشاف الأدوية.</p>
        </div>
        <!-- 6 -->
        <div class="bg-white p-6 rounded-2xl border border-purple-100 shadow-sm">
          <h3 class="font-bold text-gray-900 mb-2 flex items-center gap-2">
            <span class="text-2xl">🌾</span> AI في الزراعة
          </h3>
          <p class="text-sm text-gray-600">التنبؤ بالحصاد والكشف عن الآفات والأمراض.</p>
        </div>
        <!-- 7 -->
        <div class="bg-white p-6 rounded-2xl border border-purple-100 shadow-sm">
          <h3 class="font-bold text-gray-900 mb-2 flex items-center gap-2">
            <span class="text-2xl">🏭</span> AI في التصنيع
          </h3>
          <p class="text-sm text-gray-600">فحص الجودة والصيانة التنبؤية للآلات.</p>
        </div>
        <!-- 8 -->
        <div class="bg-white p-6 rounded-2xl border border-purple-100 shadow-sm">
          <h3 class="font-bold text-gray-900 mb-2 flex items-center gap-2">
            <span class="text-2xl">🚚</span> AI في اللوجستيات
          </h3>
          <p class="text-sm text-gray-600">تحسين مسارات التوصيل لتوفير الوقت والوقود.</p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-blue-50 p-8 rounded-3xl border border-blue-200">
          <h3 class="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
            <span class="text-2xl">💪</span> نقاط القوة
          </h3>
          <ul class="space-y-3 text-blue-800">
            <li>• إيجاد الأنماط في البيانات المعقدة</li>
            <li>• التعرف على الصور والأصوات والنصوص</li>
            <li>• التنبؤ والاستدلال الاحتمالي</li>
          </ul>
        </div>
        
        <div class="bg-red-50 p-8 rounded-3xl border border-red-200">
          <h3 class="text-xl font-bold text-red-900 mb-4 flex items-center gap-2">
            <span class="text-2xl">⚠️</span> الحذر والإشراف البشري
          </h3>
          <ul class="space-y-3 text-red-800">
            <li>• تجنب الأحكام الأخلاقية المتحيزة</li>
            <li>• حماية الخصوصية للبيانات الحساسة</li>
            <li>• <strong>قاعدة هامة:</strong> كلما زاد أثر القرار (مثل الطب والقضاء)، زادت أهمية التحقق والحكم البشري.</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
