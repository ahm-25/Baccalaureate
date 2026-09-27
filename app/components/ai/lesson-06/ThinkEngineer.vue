<template>
  <section id="think-engineer" class="py-16 bg-white">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center gap-4 mb-8">
        <div class="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center text-3xl">⚙️</div>
        <h2 class="text-2xl md:text-3xl font-bold text-slate-900">فكر كمهندس: ابحث ثم قرر</h2>
      </div>

      <div class="bg-slate-50 border border-slate-200 rounded-3xl p-6 md:p-10 shadow-sm mb-12">
        <h3 class="text-xl font-bold text-slate-800 mb-4">المهمة:</h3>
        <p class="text-lg text-slate-700 font-medium mb-8">
          اختر استخدامًا حقيقيًا للذكاء الاصطناعي يؤثر في الأشخاص (مثل: التوظيف، التعرف على الوجه، التوصيات، أو تحليل البيانات الشخصية)، ثم قم بالخطوات التالية:
        </p>

        <div class="grid md:grid-cols-3 gap-6">
          <!-- Step 1 -->
          <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:-translate-y-1 transition-transform">
            <div class="flex items-center justify-between mb-4">
              <h4 class="text-lg font-bold text-indigo-900">1. اجمع المعلومات</h4>
              <span class="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 font-bold flex items-center justify-center">1</span>
            </div>
            <div class="bg-indigo-50 text-indigo-700 text-sm font-bold px-3 py-1 rounded-lg inline-block mb-3">حدد البيانات</div>
            <p class="text-slate-600 font-medium">ما نوع البيانات الشخصية أو التاريخية التي يستخدمها هذا النظام ليعمل؟</p>
          </div>

          <!-- Step 2 -->
          <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:-translate-y-1 transition-transform">
            <div class="flex items-center justify-between mb-4">
              <h4 class="text-lg font-bold text-rose-900">2. حلّل المخاطر</h4>
              <span class="w-8 h-8 rounded-full bg-rose-100 text-rose-600 font-bold flex items-center justify-center">2</span>
            </div>
            <ul class="text-slate-600 font-medium space-y-2">
              <li class="flex items-start gap-2"><span class="text-rose-500">•</span> خطرًا يتعلق بالتحيز.</li>
              <li class="flex items-start gap-2"><span class="text-rose-500">•</span> خطرًا يتعلق بالخصوصية.</li>
              <li class="flex items-start gap-2"><span class="text-rose-500">•</span> مشكلة محتملة في الشفافية.</li>
            </ul>
          </div>

          <!-- Step 3 -->
          <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:-translate-y-1 transition-transform">
            <div class="flex items-center justify-between mb-4">
              <h4 class="text-lg font-bold text-emerald-900">3. اتخذ قرارًا</h4>
              <span class="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 font-bold flex items-center justify-center">3</span>
            </div>
            <p class="text-slate-600 font-medium mb-3">اقترح قاعدة واحدة للاستخدام المسؤول للذكاء الاصطناعي في هذه الحالة.</p>
            <div class="bg-emerald-50 text-emerald-700 text-sm font-bold px-3 py-1 rounded-lg inline-block">حدد من يتحمل المسؤولية عن تطبيقها.</div>
          </div>
        </div>
      </div>
      
    </div>
  </section>
</template>
