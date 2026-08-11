<template>
  <section id="common-mistakes" class="min-h-screen relative flex items-center justify-center py-20 bg-background">
    <div class="max-w-4xl mx-auto px-6 w-full text-center">
      <h2 class="text-4xl font-bold text-maintext mb-12">أخطاء لازم تاخد بالك منها 🚫</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 text-left" dir="ltr">
        
        <!-- Mistake 1 -->
        <div class="bg-surface border-l-4 border-red-500 rounded-r-2xl p-6 shadow-md relative group">
          <div class="font-mono text-xl mb-4 bg-black/40 p-4 rounded-xl text-gray-400">
            <span class="text-purple-400">let</span> <span class="text-blue-300">age</span> <span class="text-white">=</span> <span class="text-green-300">"17"</span>;
          </div>
          <div class="text-right" dir="rtl">
            <div class="text-red-500 font-bold mb-2">فين المشكلة؟</div>
            <p class="text-mutedtext">ده String مش Number عشان محطوط بين علامات تنصيص. لو حاولت تجمعه على رقم هيعمل مشاكل.</p>
          </div>
        </div>

        <!-- Mistake 2 -->
        <div class="bg-surface border-l-4 border-red-500 rounded-r-2xl p-6 shadow-md relative group">
          <div class="font-mono text-xl mb-4 bg-black/40 p-4 rounded-xl text-gray-400">
            <span class="text-purple-400">const</span> <span class="text-blue-300">score</span> <span class="text-white">=</span> <span class="text-orange-400">100</span>;<br>
            <span class="text-blue-300">score</span> <span class="text-white">=</span> <span class="text-orange-400">90</span>;
          </div>
          <div class="text-right" dir="rtl">
            <div class="text-red-500 font-bold mb-2">فين المشكلة؟</div>
            <p class="text-mutedtext">مينفعش نعيد إسناد قيمة جديدة لمتغير متعرف بـ const. هيطلع Error.</p>
          </div>
        </div>

        <!-- Mistake 3 -->
        <div class="bg-surface border-l-4 border-red-500 rounded-r-2xl p-6 shadow-md relative group">
          <div class="font-mono text-xl mb-4 bg-black/40 p-4 rounded-xl text-gray-400">
            <span class="text-purple-400">let</span> <span class="text-blue-300">2name</span> <span class="text-white">=</span> <span class="text-green-300">"Ahmed"</span>;
          </div>
          <div class="text-right" dir="rtl">
            <div class="text-red-500 font-bold mb-2">فين المشكلة؟</div>
            <p class="text-mutedtext">اسم المتغير غير صالح. مينفعش اسم المتغير يبدأ برقم أبدًا.</p>
          </div>
        </div>

        <!-- Mistake 4 -->
        <div class="bg-surface border-l-4 border-red-500 rounded-r-2xl p-6 shadow-md relative group">
          <div class="font-mono text-xl mb-4 bg-black/40 p-4 rounded-xl text-gray-400">
            <span class="text-purple-400">let</span> <span class="text-blue-300">student-name</span> <span class="text-white">=</span> <span class="text-green-300">"Ahmed"</span>;
          </div>
          <div class="text-right" dir="rtl">
            <div class="text-red-500 font-bold mb-2">فين المشكلة؟</div>
            <p class="text-mutedtext">الشرطة (-) غير مسموحة في أسماء المتغيرات. الأفضل نستخدم studentName (Camel Case).</p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
