<template>
  <section id="training-data" class="py-12 bg-white">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mb-10 text-center">
        <h2 class="text-3xl font-bold text-slate-900 mb-4">2. لماذا تؤثر بيانات التدريب في العدالة؟</h2>
        <p class="text-xl text-slate-600 max-w-2xl mx-auto">
          <strong class="text-indigo-700">بيانات التدريب</strong> هي الأمثلة التي يتعلم منها نظام الذكاء الاصطناعي أنماطه قبل استخدامه.
        </p>
      </div>
      
      <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <!-- Good Data -->
        <div class="bg-emerald-50 border border-emerald-200 rounded-3xl p-8 hover:shadow-md transition-shadow">
          <div class="text-center mb-6">
            <div class="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">📊</div>
            <h3 class="text-2xl font-bold text-emerald-900">بيانات جيدة التمثيل</h3>
          </div>
          <div class="flex flex-col gap-3">
            <div class="flex items-center gap-3 text-emerald-800 font-medium">
              <span>←</span> أنماط أكثر تمثيلًا للواقع
            </div>
            <div class="flex items-center gap-3 text-emerald-800 font-medium">
              <span>←</span> احتمال أفضل للنتائج العادلة
            </div>
          </div>
        </div>
        
        <!-- Bad Data -->
        <div class="bg-rose-50 border border-rose-200 rounded-3xl p-8 hover:shadow-md transition-shadow">
          <div class="text-center mb-6">
            <div class="w-16 h-16 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">📉</div>
            <h3 class="text-2xl font-bold text-rose-900">بيانات متحيزة أو غير ممثلة</h3>
          </div>
          <div class="flex flex-col gap-3">
            <div class="flex items-center gap-3 text-rose-800 font-medium">
              <span>←</span> يتعلم النظام نمطًا متحيزًا
            </div>
            <div class="flex items-center gap-3 text-rose-800 font-medium">
              <span>←</span> احتمال ظهور نتائج غير عادلة
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
