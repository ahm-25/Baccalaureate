<template>
  <section id="algorithmic-bias" class="py-12 bg-white">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mb-10">
        <h2 class="text-3xl font-bold text-slate-900 mb-4">1. التحيز الخوارزمي</h2>
        <p class="text-xl text-slate-700 font-medium p-4 bg-indigo-50 border border-indigo-100 rounded-2xl">
          <strong class="text-indigo-700">التحيز الخوارزمي</strong> هو نمط في مخرجات الذكاء الاصطناعي قد يؤدي إلى نتائج غير عادلة أو ضارة.
        </p>
      </div>
      <div class="grid md:grid-cols-2 gap-12 items-center mb-12">
        <div>
          <h3 class="text-xl font-bold text-slate-800 mb-4">من أين يأتي التحيز؟</h3>
          <ul class="space-y-3">
            <li class="flex items-center gap-3 bg-slate-50 p-3 rounded-xl">
              <span class="text-indigo-500">▪</span> بيانات التدريب
            </li>
            <li class="flex items-center gap-3 bg-slate-50 p-3 rounded-xl">
              <span class="text-indigo-500">▪</span> تصميم النظام
            </li>
            <li class="flex items-center gap-3 bg-slate-50 p-3 rounded-xl">
              <span class="text-indigo-500">▪</span> طريقة استخدام النظام
            </li>
            <li class="flex items-center gap-3 bg-slate-50 p-3 rounded-xl">
              <span class="text-indigo-500">▪</span> السياق البشري والاجتماعي
            </li>
          </ul>
        </div>
        <div class="bg-gradient-to-br from-slate-50 to-indigo-50/30 p-6 rounded-3xl border border-slate-100 shadow-sm">
          <h3 class="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
            <span>📝</span> مثال: نظام فرز طلبات التوظيف
          </h3>
          <div class="flex flex-col gap-4 text-center">
            <div class="bg-red-50 text-red-700 px-4 py-3 rounded-xl font-bold border border-red-100">بيانات تدريب متحيزة تاريخيًا</div>
            <div class="text-slate-400">↓</div>
            <div class="bg-indigo-50 text-indigo-700 px-4 py-3 rounded-xl font-bold border border-indigo-100">النموذج يتعلم الأنماط</div>
            <div class="text-slate-400">↓</div>
            <div class="bg-purple-50 text-purple-700 px-4 py-3 rounded-xl font-bold border border-purple-100">قرار متحيز</div>
            <div class="text-slate-400">↓</div>
            <div class="bg-rose-50 text-rose-700 px-4 py-3 rounded-xl font-bold border border-rose-100">نتيجة غير عادلة (رفض فئة معينة)</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
