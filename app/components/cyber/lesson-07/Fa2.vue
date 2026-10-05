<template>
  <section id="fa2" class="py-20 bg-slate-50">
    <div class="max-w-4xl mx-auto px-6 text-center">
      <h2 class="text-3xl font-bold text-slate-800 mb-4">المصادقة الثنائية (FA2)</h2>
      <p class="text-lg text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
        استخدام عاملين مستقلين من <strong>فئتين مختلفتين</strong> لإثبات الهوية، لتقليل احتمال الدخول غير المصرح به إذا تم كشف كلمة المرور.
      </p>
      
      <div class="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-center gap-6">
        
        <div class="bg-slate-50 p-6 rounded-2xl w-full max-w-xs border border-slate-200 hover:-translate-y-1 transition-transform">
          <div class="text-5xl mb-2">🔑</div>
          <h4 class="font-bold text-slate-800">كلمة المرور</h4>
          <p class="text-xs text-slate-500">عامل 1</p>
        </div>
        
        <div class="text-3xl text-indigo-500 font-bold">+</div>
        
        <div class="bg-indigo-50 p-6 rounded-2xl w-full max-w-xs border border-indigo-200 hover:-translate-y-1 transition-transform">
          <div class="text-5xl mb-2">📱</div>
          <h4 class="font-bold text-indigo-900">هاتف محمول</h4>
          <p class="text-xs text-indigo-600">عامل 2 (مستقل)</p>
        </div>
        
        <div class="text-3xl text-emerald-500 font-bold">=</div>
        
        <div class="bg-emerald-50 p-6 rounded-2xl w-full max-w-xs border border-emerald-200 hover:-translate-y-1 transition-transform">
          <div class="text-5xl mb-2">✅</div>
          <h4 class="font-bold text-emerald-900">دخول آمن</h4>
          <p class="text-xs text-emerald-600">Access Granted</p>
        </div>

      </div>
      
      <div class="mt-8 bg-amber-50 border border-amber-200 p-4 rounded-xl text-amber-900 text-sm max-w-2xl mx-auto">
        <strong>💡 تذكر:</strong> إذا عرف شخص كلمة المرور فقط، فلن تكفي وحدها للدخول إذا كان العامل الثاني مطلوبًا.
      </div>
    </div>
  </section>
</template>
