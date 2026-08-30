<template>
  <section id="summary" class="py-20 bg-gray-50 text-gray-900 relative overflow-hidden">
    <div class="absolute inset-0 opacity-10 pointer-events-none" style="background-image: radial-gradient(#6b7280 1px, transparent 1px); background-size: 30px 30px;"></div>
    
    <div class="container mx-auto px-6 max-w-4xl relative z-10">
      <h2 class="text-3xl md:text-4xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-teal-600">
        خلاصة الدرس
      </h2>

      <div class="space-y-4">
        <!-- AI -->
        <div class="flex flex-col md:flex-row items-center bg-white rounded-2xl p-4 border border-gray-200 hover:border-blue-300 shadow-sm transition-all group">
          <div class="w-24 font-bold text-xl text-blue-600 text-center md:text-right shrink-0">AI</div>
          <div class="hidden md:block mx-6 text-gray-300 group-hover:text-blue-400 transition-colors">➡</div>
          <div class="text-center md:text-right text-gray-700 mt-2 md:mt-0">المجال الأوسع للأنظمة الذكية التي تنفذ مهام تحاكي الذكاء البشري.</div>
        </div>

        <!-- ML -->
        <div class="flex flex-col md:flex-row items-center bg-white rounded-2xl p-4 border border-gray-200 hover:border-purple-300 shadow-sm transition-all group">
          <div class="w-24 font-bold text-xl text-purple-600 text-center md:text-right shrink-0">ML</div>
          <div class="hidden md:block mx-6 text-gray-300 group-hover:text-purple-400 transition-colors">➡</div>
          <div class="text-center md:text-right text-gray-700 mt-2 md:mt-0">التعلم الآلي: يتعلم الأنماط من البيانات لاتخاذ القرارات بدلاً من القواعد الثابتة.</div>
        </div>

        <!-- DL -->
        <div class="flex flex-col md:flex-row items-center bg-white rounded-2xl p-4 border border-gray-200 hover:border-teal-300 shadow-sm transition-all group">
          <div class="w-24 font-bold text-xl text-teal-600 text-center md:text-right shrink-0">DL</div>
          <div class="hidden md:block mx-6 text-gray-300 group-hover:text-teal-400 transition-colors">➡</div>
          <div class="text-center md:text-right text-gray-700 mt-2 md:mt-0">التعلم العميق: أسلوب ML يعتمد على شبكات عصبية متعددة الطبقات.</div>
        </div>

        <!-- GenAI -->
        <div class="flex flex-col md:flex-row items-center bg-white rounded-2xl p-4 border border-gray-200 hover:border-orange-300 shadow-sm transition-all group">
          <div class="w-24 font-bold text-xl text-orange-600 text-center md:text-right shrink-0">GenAI</div>
          <div class="hidden md:block mx-6 text-gray-300 group-hover:text-orange-400 transition-colors">➡</div>
          <div class="text-center md:text-right text-gray-700 mt-2 md:mt-0">الذكاء الاصطناعي التوليدي: ينشئ محتوى جديدًا (نص، صورة، صوت) باستخدام أنماط متعلمة.</div>
        </div>

        <!-- Hallucination -->
        <div class="flex flex-col md:flex-row items-center bg-white rounded-2xl p-4 border border-gray-200 hover:border-red-300 shadow-sm transition-all group">
          <div class="w-24 font-bold text-xl text-red-600 text-center md:text-right shrink-0 leading-tight">الهلوسة</div>
          <div class="hidden md:block mx-6 text-gray-300 group-hover:text-red-400 transition-colors">➡</div>
          <div class="text-center md:text-right text-gray-700 mt-2 md:mt-0">إجابة يولدها النظام تبدو منطقية وصحيحة، لكنها غير صحيحة واقعيًا أو مختلقة.</div>
        </div>

        <!-- Verification -->
        <div class="flex flex-col md:flex-row items-center bg-white rounded-2xl p-4 border border-gray-200 hover:border-green-300 shadow-sm transition-all group">
          <div class="w-24 font-bold text-xl text-green-600 text-center md:text-right shrink-0 leading-tight">التحقق</div>
          <div class="hidden md:block mx-6 text-gray-300 group-hover:text-green-400 transition-colors">➡</div>
          <div class="text-center md:text-right text-gray-700 mt-2 md:mt-0">ضرورة مراجعة المخرجات المهمة ومقارنتها بمصادر موثوقة قبل اعتمادها.</div>
        </div>
      </div>
      
      <div class="mt-12 text-center text-gray-500 text-sm font-medium">
        نهاية ملخص الدرس 1-2
      </div>
    </div>
  </section>
</template>
