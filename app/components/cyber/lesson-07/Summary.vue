<template>
  <section id="summary" class="py-24 bg-slate-900 text-white relative overflow-hidden">
    <!-- Grid Pattern Background -->
    <div class="absolute inset-0" style="background-image: radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px); background-size: 30px 30px;"></div>
    
    <div class="max-w-6xl mx-auto px-6 relative z-10">
      <h2 class="text-4xl font-bold mb-16 text-center">الخلاصة</h2>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        <div class="bg-slate-800/80 backdrop-blur-sm p-8 rounded-3xl border border-slate-700 hover:border-indigo-500 transition-colors">
          <div class="w-14 h-14 bg-indigo-500/20 text-indigo-400 rounded-2xl flex items-center justify-center text-3xl mb-6">🔐</div>
          <h3 class="text-xl font-bold mb-3">HTTPS</h3>
          <p class="text-slate-400 leading-relaxed">HTTP عبر اتصال TLS مؤمّن لحماية البيانات والتحقق من الخادم.</p>
        </div>
        
        <div class="bg-slate-800/80 backdrop-blur-sm p-8 rounded-3xl border border-slate-700 hover:border-cyan-500 transition-colors">
          <div class="w-14 h-14 bg-cyan-500/20 text-cyan-400 rounded-2xl flex items-center justify-center text-3xl mb-6">🔑</div>
          <h3 class="text-xl font-bold mb-3">المفتاح العام</h3>
          <p class="text-slate-400 leading-relaxed">يستخدم في المصادقة والاتفاق الآمن على مفاتيح الجلسة أثناء المصافحة.</p>
        </div>
        
        <div class="bg-slate-800/80 backdrop-blur-sm p-8 rounded-3xl border border-slate-700 hover:border-emerald-500 transition-colors">
          <div class="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-2xl flex items-center justify-center text-3xl mb-6">⚡</div>
          <h3 class="text-xl font-bold mb-3">التشفير المتماثل</h3>
          <p class="text-slate-400 leading-relaxed">يحمي بيانات الجلسة الضخمة بسرعة وكفاءة عالية.</p>
        </div>
        
        <div class="bg-slate-800/80 backdrop-blur-sm p-8 rounded-3xl border border-slate-700 hover:border-amber-500 transition-colors">
          <div class="w-14 h-14 bg-amber-500/20 text-amber-400 rounded-2xl flex items-center justify-center text-3xl mb-6">📜</div>
          <h3 class="text-xl font-bold mb-3">الشهادة الرقمية</h3>
          <p class="text-slate-400 leading-relaxed">تساعد المتصفح على التحقق من هوية الخادم واسم النطاق الخاص به.</p>
        </div>
        
        <div class="bg-slate-800/80 backdrop-blur-sm p-8 rounded-3xl border border-slate-700 hover:border-purple-500 transition-colors">
          <div class="w-14 h-14 bg-purple-500/20 text-purple-400 rounded-2xl flex items-center justify-center text-3xl mb-6">✍️</div>
          <h3 class="text-xl font-bold mb-3">التوقيع الرقمي</h3>
          <p class="text-slate-400 leading-relaxed">يتحقق من سلامة البيانات وهوية الموقع ويدعم مبدأ عدم التنصل.</p>
        </div>
        
        <div class="bg-slate-800/80 backdrop-blur-sm p-8 rounded-3xl border border-slate-700 hover:border-rose-500 transition-colors">
          <div class="w-14 h-14 bg-rose-500/20 text-rose-400 rounded-2xl flex items-center justify-center text-3xl mb-6">🛡️</div>
          <h3 class="text-xl font-bold mb-3">المصادقة الثنائية (FA2)</h3>
          <p class="text-slate-400 leading-relaxed">تستخدم عاملين مستقلين من فئتين مختلفتين لتقليل الدخول غير المصرح به.</p>
        </div>
      </div>
      
      <div class="text-center w-full">
        <div class="bg-indigo-900/40 backdrop-blur-md border border-indigo-500/30 p-8 rounded-3xl inline-block w-full max-w-4xl shadow-2xl relative overflow-hidden">
          <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50"></div>
          <p class="text-2xl font-bold text-indigo-100 leading-relaxed">
            "الأمان الحقيقي لا يأتي من تقنية واحدة،<br/> بل من تكديس عدة طبقات من الحماية."
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
