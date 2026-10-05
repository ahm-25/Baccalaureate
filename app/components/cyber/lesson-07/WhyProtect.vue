<template>
  <section id="why-protect" class="py-20 bg-white">
    <div class="max-w-5xl mx-auto px-6">
      <h2 class="text-3xl font-bold text-slate-800 mb-8 border-r-4 border-indigo-500 pr-4">لماذا نحتاج إلى حماية الاتصال؟</h2>
      
      <p class="text-lg text-slate-700 mb-8 leading-relaxed">
        تخيل أنك أرسلت كلمة مرور حسابك عبر الإنترنت <strong>بدون حماية</strong>...
      </p>
      
      <div class="grid md:grid-cols-2 gap-8 mb-8">
        <div class="bg-red-50 p-6 rounded-2xl border border-red-100">
          <h3 class="font-bold text-red-800 mb-4 flex items-center gap-2">
            <span>⚠️</span> بدون حماية (HTTP)
          </h3>
          <div class="flex items-center justify-between text-sm text-slate-600 mb-4 relative">
            <div class="text-center"><div class="text-2xl mb-1">👤</div>المستخدم</div>
            <div class="flex-1 flex justify-center text-red-500 animate-pulse px-2">
              <span class="text-xs absolute -top-4 text-nowrap">يمكن قراءة وتعديل البيانات!</span>
              - - - - - - - &gt;
            </div>
            <div class="text-center"><div class="text-2xl mb-1">🖥️</div>الخادم</div>
          </div>
          <p class="text-slate-700 text-sm">يمكن لطرف ثالث محاولة قراءة البيانات أو التلاعب بها أثناء انتقالها.</p>
        </div>
        
        <div class="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
          <h3 class="font-bold text-emerald-800 mb-4 flex items-center gap-2">
            <span>🛡️</span> مع حماية (HTTPS/TLS)
          </h3>
          <div class="flex items-center justify-between text-sm text-slate-600 mb-4 relative">
            <div class="text-center"><div class="text-2xl mb-1">👤</div>المستخدم</div>
            <div class="flex-1 flex justify-center items-center px-2">
               <div class="h-2 bg-emerald-400 w-full rounded"></div>
            </div>
            <div class="text-center"><div class="text-2xl mb-1">🖥️</div>الخادم</div>
          </div>
          <p class="text-slate-700 text-sm">يتم حماية البيانات أثناء انتقالها والتحقق من هوية الخادم لضمان الأمان.</p>
        </div>
      </div>
      
      <div class="bg-amber-50 border border-amber-200 rounded-xl p-4 flex gap-4 items-start">
        <div class="text-2xl">💡</div>
        <p class="text-sm text-amber-900 leading-relaxed">
          <strong>ملاحظة هامة:</strong> عندما تفتح موقعًا يبدأ بـ HTTPS، فهذا يعني أن <em>الاتصال</em> نفسه محمي ومؤمّن، ولكن هذا لا يعني بالضرورة أن محتوى الموقع موثوق أو آمن 100%.
        </p>
      </div>
    </div>
  </section>
</template>
