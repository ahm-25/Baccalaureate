<template>
  <section id="hierarchy" class="py-20 bg-white overflow-hidden">
    <div class="container mx-auto px-6 max-w-4xl text-center">
      <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12 flex items-center justify-center gap-3">
        <span class="text-4xl">🧠</span> العلاقة بين AI و ML و DL و GenAI
      </h2>

      <div class="relative w-full max-w-2xl mx-auto flex flex-col items-center gap-4">
        <!-- AI -->
        <div class="w-full bg-blue-50 border-2 border-blue-200 rounded-3xl p-6 shadow-sm relative z-40 transform transition-transform hover:scale-105 duration-300">
          <h3 class="text-2xl font-bold text-blue-800 mb-2">الذكاء الاصطناعي (AI)</h3>
          <p class="text-blue-600">المجال الأوسع للأنظمة الذكية</p>
        </div>

        <!-- Arrow -->
        <div class="h-8 border-l-4 border-dashed border-gray-300"></div>

        <!-- ML -->
        <div class="w-5/6 bg-purple-50 border-2 border-purple-200 rounded-3xl p-6 shadow-sm relative z-30 transform transition-transform hover:scale-105 duration-300">
          <h3 class="text-2xl font-bold text-purple-800 mb-2">التعلم الآلي (ML)</h3>
          <p class="text-purple-600">فرع من AI يتعلم من البيانات</p>
        </div>

        <!-- Arrow -->
        <div class="h-8 border-l-4 border-dashed border-gray-300"></div>

        <!-- DL -->
        <div class="w-4/6 bg-teal-50 border-2 border-teal-200 rounded-3xl p-6 shadow-sm relative z-20 transform transition-transform hover:scale-105 duration-300">
          <h3 class="text-2xl font-bold text-teal-800 mb-2">التعلم العميق (DL)</h3>
          <p class="text-teal-600">ML يعتمد على شبكات عصبية عميقة</p>
        </div>

        <!-- GenAI Side note -->
        <div class="mt-8 relative w-full flex justify-center">
          <div class="absolute -top-10 h-10 border-l-4 border-orange-300"></div>
          <div class="w-full sm:w-3/4 bg-gradient-to-r from-orange-50 to-pink-50 border-2 border-orange-200 rounded-3xl p-6 shadow-md relative z-10 transform transition-transform hover:scale-105 duration-300">
            <h3 class="text-xl font-bold text-orange-800 mb-2 flex items-center justify-center gap-2">
              <span>✨</span> الذكاء الاصطناعي التوليدي (GenAI)
            </h3>
            <p class="text-orange-700 text-sm">
              أنظمة تنشئ محتويات جديدة.<br>
              <strong>تعتمد غالبيتها الحديثة على نماذج التعلم العميق.</strong>
            </p>
          </div>
        </div>
      </div>

      <!-- Warning Note -->
      <div class="mt-16 bg-yellow-50 rounded-2xl p-6 text-yellow-800 flex items-start gap-4 border border-yellow-200 shadow-sm text-right">
        <span class="text-2xl shrink-0">💡</span>
        <p class="text-sm md:text-base leading-relaxed font-medium">
          <strong>ملاحظة هامة:</strong> 
          هذه الترتيبية (الفئات المتداخلة) هي علاقة تعليمية مبسطة لتسهيل فهم الفكرة العامة، وليست تسلسل احتواء صارم ومطلق في كل حالة أو تطبيق تقني.
        </p>
      </div>
    </div>
  </section>
</template>
