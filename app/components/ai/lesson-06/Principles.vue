<template>
  <section id="principles" class="py-16 bg-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">6. المبادئ الأساسية لأخلاقيات الذكاء الاصطناعي</h2>
      </div>

      <div class="grid md:grid-cols-2 gap-6">
        
        <!-- Fairness -->
        <div class="bg-blue-50/50 border border-blue-100 rounded-3xl p-8 hover:shadow-lg transition-shadow">
          <div class="flex items-center gap-4 mb-4">
            <div class="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-3xl">⚖️</div>
            <h3 class="text-2xl font-bold text-blue-900">1. العدالة</h3>
          </div>
          <p class="text-lg text-slate-700 font-medium mb-4">عدم التمييز ظلمًا ضد شخص أو مجموعة.</p>
          <div class="bg-white p-4 rounded-xl border border-blue-100 text-slate-600 text-sm">
            <strong>مثال:</strong> نظام توظيف لا ينبغي أن يرفض الأشخاص بسبب تحيز موجود في بيانات التدريب.
          </div>
        </div>

        <!-- Transparency -->
        <div class="bg-indigo-50/50 border border-indigo-100 rounded-3xl p-8 hover:shadow-lg transition-shadow">
          <div class="flex items-center gap-4 mb-4">
            <div class="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center text-3xl">🔎</div>
            <h3 class="text-2xl font-bold text-indigo-900">2. الشفافية</h3>
          </div>
          <p class="text-lg text-slate-700 font-medium mb-4">إتاحة معلومات واضحة ومناسبة عن النظام واستخدامه وعملية اتخاذ القرار وحدوده.</p>
          <div class="bg-white p-4 rounded-xl border border-indigo-100 text-slate-600 text-sm">
            <strong>ارتباط:</strong> ترتبط بمشكلة الصندوق الأسود، والشفافية ضرورية لفهم قرارات النظام.
          </div>
        </div>

        <!-- Privacy -->
        <div class="bg-green-50/50 border border-green-100 rounded-3xl p-8 hover:shadow-lg transition-shadow">
          <div class="flex items-center gap-4 mb-4">
            <div class="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-3xl">🔐</div>
            <h3 class="text-2xl font-bold text-green-900">3. حماية الخصوصية</h3>
          </div>
          <p class="text-lg text-slate-700 font-medium mb-4">التعامل المسؤول مع المعلومات الشخصية والبيانات الحساسة.</p>
          <div class="bg-white p-4 rounded-xl border border-green-100 text-slate-600 text-sm">
            <strong>أمثلة:</strong> التعامل بحذر مع تقنيات التعرف على الوجه وجمع بيانات المستخدمين.
          </div>
        </div>

        <!-- Accountability -->
        <div class="bg-rose-50/50 border border-rose-100 rounded-3xl p-8 hover:shadow-lg transition-shadow">
          <div class="flex items-center gap-4 mb-4">
            <div class="w-14 h-14 bg-rose-100 rounded-2xl flex items-center justify-center text-3xl">👤</div>
            <h3 class="text-2xl font-bold text-rose-900">4. المساءلة</h3>
          </div>
          <p class="text-lg text-slate-700 font-medium mb-4">تحديد الجهات المسؤولة عن النظام وقراراته وآثاره، وإمكان محاسبتها وفق أدوارها.</p>
          
          <div class="mt-4 bg-rose-100/50 border-2 border-rose-200 p-4 rounded-xl">
            <div class="font-bold text-rose-900 mb-2">⚠️ لا تخلط بينهما:</div>
            <div class="grid grid-cols-2 gap-2 text-sm">
              <div class="bg-white p-2 rounded-lg text-center border border-rose-100">
                <strong class="text-purple-700 block mb-1">XAI</strong>
                يساعد على شرح وتفسير القرار
              </div>
              <div class="bg-white p-2 rounded-lg text-center border border-rose-100">
                <strong class="text-rose-700 block mb-1">المساءلة</strong>
                تحديد من يتحمل المسؤولية عن النتيجة
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
