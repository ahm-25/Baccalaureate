<template>
  <section id="public-key" class="py-20 bg-slate-50">
    <div class="max-w-4xl mx-auto px-6 text-center">
      <h2 class="text-3xl font-bold text-slate-800 mb-6">التشفير بالمفتاح العام</h2>
      <p class="text-lg text-slate-600 mb-12">
        يستخدم زوجًا من المفاتيح المرتبطة: مفتاحًا عامًا (للمشاركة) ومفتاحًا خاصًا (يظل سريًا).
      </p>
      
      <div class="flex flex-col md:flex-row justify-center items-center gap-8">
        <div class="bg-blue-50 p-8 rounded-3xl border border-blue-200 w-full max-w-xs transition-transform hover:scale-105">
          <div class="text-6xl mb-4">🔓</div>
          <h3 class="text-xl font-bold text-blue-900 mb-2">المفتاح العام</h3>
          <p class="text-blue-700 text-sm">يمكن مشاركته مع أي شخص. يستخدم لتشفير البيانات أو التحقق من التوقيع.</p>
        </div>
        
        <div class="text-3xl text-slate-400">➕</div>
        
        <div class="bg-red-50 p-8 rounded-3xl border border-red-200 w-full max-w-xs transition-transform hover:scale-105">
          <div class="text-6xl mb-4">🔐</div>
          <h3 class="text-xl font-bold text-red-900 mb-2">المفتاح الخاص</h3>
          <p class="text-red-700 text-sm">يجب الحفاظ عليه سريًا. يستخدم لفك التشفير أو إنشاء توقيع رقمي.</p>
        </div>
      </div>
      
      <div class="mt-12 bg-white p-6 rounded-2xl border border-slate-200 text-right">
        <h4 class="font-bold text-indigo-800 mb-2">استخدامه في مصافحة TLS:</h4>
        <p class="text-slate-600 leading-relaxed">
          يُستخدم التشفير بالمفتاح العام <strong>أثناء مصافحة TLS</strong> للمصادقة والاتفاق الآمن على مفاتيح الجلسة، لكنه لا يُستخدم لتشفير كل بيانات الجلسة لأنه أبطأ وأقل كفاءة مع الكميات الكبيرة.
        </p>
      </div>
    </div>
  </section>
</template>
