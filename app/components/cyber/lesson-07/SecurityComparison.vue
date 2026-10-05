<template>
  <section id="security-comparison" class="py-20 bg-slate-900">
    <div class="max-w-5xl mx-auto px-6">
      <h2 class="text-3xl font-bold text-white mb-12 text-center">الفرق بين تقنيات الأمان</h2>
      
      <div class="grid md:grid-cols-2 gap-6">
        <div class="bg-slate-800 p-8 rounded-3xl border border-slate-700 hover:border-indigo-500 transition-colors group cursor-default">
          <div class="flex items-center gap-4 mb-4">
            <div class="text-4xl group-hover:scale-110 transition-transform origin-right bg-indigo-900/50 w-16 h-16 flex items-center justify-center rounded-2xl">🔒</div>
            <h3 class="text-2xl font-bold text-white">التشفير</h3>
          </div>
          <p class="text-slate-300 leading-relaxed">يمنع قراءة محتوى الاتصال من أطراف ثالثة (يحمي السرية).</p>
        </div>
        
        <div class="bg-slate-800 p-8 rounded-3xl border border-slate-700 hover:border-amber-500 transition-colors group cursor-default">
          <div class="flex items-center gap-4 mb-4">
            <div class="text-4xl group-hover:scale-110 transition-transform origin-right bg-amber-900/50 w-16 h-16 flex items-center justify-center rounded-2xl">📜</div>
            <h3 class="text-2xl font-bold text-white">الشهادة الرقمية</h3>
          </div>
          <p class="text-slate-300 leading-relaxed">تساعد المتصفح على التحقق من هوية الخادم واسم النطاق.</p>
        </div>
        
        <div class="bg-slate-800 p-8 rounded-3xl border border-slate-700 hover:border-emerald-500 transition-colors group cursor-default">
          <div class="flex items-center gap-4 mb-4">
            <div class="text-4xl group-hover:scale-110 transition-transform origin-right bg-emerald-900/50 w-16 h-16 flex items-center justify-center rounded-2xl">✍️</div>
            <h3 class="text-2xl font-bold text-white">التوقيع الرقمي</h3>
          </div>
          <p class="text-slate-300 leading-relaxed">يتحقق من سلامة البيانات وهوية الموقع ويقدم دليلًا يدعم عدم التنصل.</p>
        </div>
        
        <div class="bg-slate-800 p-8 rounded-3xl border border-slate-700 hover:border-rose-500 transition-colors group cursor-default">
          <div class="flex items-center gap-4 mb-4">
            <div class="text-4xl group-hover:scale-110 transition-transform origin-right bg-rose-900/50 w-16 h-16 flex items-center justify-center rounded-2xl">📱</div>
            <h3 class="text-2xl font-bold text-white">المصادقة الثنائية</h3>
          </div>
          <p class="text-slate-300 leading-relaxed">تقلل احتمال تسجيل الدخول غير المصرح به باشتراط عاملين مستقلين (FA2).</p>
        </div>
      </div>
    </div>
  </section>
</template>
