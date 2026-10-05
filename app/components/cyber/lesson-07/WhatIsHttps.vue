<template>
  <section id="what-is-https" class="py-20 bg-slate-50">
    <div class="max-w-4xl mx-auto px-6 text-center">
      <h2 class="text-3xl font-bold text-slate-800 mb-6">ما هو HTTPS؟</h2>
      
      <div class="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 mb-8">
        <p class="text-2xl text-indigo-700 font-bold mb-4">
          HTTPS = HTTP + TLS
        </p>
        <p class="text-lg text-slate-600 leading-relaxed">
          HTTPS هو استخدام بروتوكول HTTP عبر اتصال <strong>TLS</strong> مؤمّن.
        </p>
      </div>
      
      <div class="grid md:grid-cols-3 gap-6">
        <div class="bg-white p-6 rounded-2xl border border-indigo-100 hover:-translate-y-1 transition-transform shadow-sm cursor-default">
          <div class="text-3xl mb-3">🤫</div>
          <h4 class="font-bold text-slate-800 mb-2">السرية</h4>
          <p class="text-sm text-slate-600">سرية البيانات أثناء النقل (التشفير).</p>
        </div>
        <div class="bg-white p-6 rounded-2xl border border-indigo-100 hover:-translate-y-1 transition-transform shadow-sm cursor-default">
          <div class="text-3xl mb-3">✅</div>
          <h4 class="font-bold text-slate-800 mb-2">السلامة</h4>
          <p class="text-sm text-slate-600">سلامة البيانات وعدم تعديلها في الطريق.</p>
        </div>
        <div class="bg-white p-6 rounded-2xl border border-indigo-100 hover:-translate-y-1 transition-transform shadow-sm cursor-default">
          <div class="text-3xl mb-3">🆔</div>
          <h4 class="font-bold text-slate-800 mb-2">التحقق من الهوية</h4>
          <p class="text-sm text-slate-600">التحقق من هوية الخادم واسم النطاق.</p>
        </div>
      </div>
    </div>
  </section>
</template>
