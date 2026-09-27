<template>
  <section id="black-box" class="py-12 bg-slate-50 border-t border-slate-200">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-10">
        <h2 class="text-3xl font-bold text-slate-900 mb-4">5. مشكلة الصندوق الأسود</h2>
        <p class="text-xl text-slate-700 max-w-3xl mx-auto">
          تعني أن طريقة وصول نظام الذكاء الاصطناعي إلى حكمه أو قراره <strong class="text-rose-600">قد تكون غير واضحة للبشر</strong>.
        </p>
      </div>

      <div class="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-200 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
        
        <div class="bg-indigo-50 border border-indigo-200 text-indigo-700 px-6 py-4 rounded-2xl font-bold text-xl text-center w-full md:w-auto">
          INPUT<br/><span class="text-sm font-normal text-indigo-500">المدخلات (نعرفها)</span>
        </div>
        
        <div class="text-3xl text-slate-400 hidden md:block">→</div>
        <div class="text-3xl text-slate-400 md:hidden">↓</div>
        
        <div class="bg-slate-800 text-white px-8 py-6 rounded-2xl font-bold text-xl text-center shadow-lg w-full md:w-auto relative overflow-hidden group border-2 border-slate-900">
          <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-50"></div>
          <span class="text-4xl block mb-2 group-hover:scale-110 transition-transform">🧠</span>
          AI BLACK BOX<br/>
          <span class="text-sm font-normal text-slate-400">(الآلية غير واضحة)</span>
        </div>
        
        <div class="text-3xl text-slate-400 hidden md:block">→</div>
        <div class="text-3xl text-slate-400 md:hidden">↓</div>
        
        <div class="bg-emerald-50 border border-emerald-200 text-emerald-700 px-6 py-4 rounded-2xl font-bold text-xl text-center w-full md:w-auto">
          OUTPUT<br/><span class="text-sm font-normal text-emerald-600">المخرجات (نعرفها)</span>
        </div>

      </div>
      
      <div class="mt-8 text-center max-w-2xl mx-auto text-lg text-slate-600 font-medium">
        نعرف البيانات التي دخلت والنتيجة التي خرجت، لكن قد لا يكون واضحًا <span class="text-rose-600 font-bold">كيف وصل النظام إلى النتيجة</span>. وهذا يعارض مبدأ <strong class="text-indigo-600">الشفافية</strong> ويستدعي استخدام <strong class="text-purple-600">XAI</strong>.
      </div>
    </div>
  </section>
</template>
