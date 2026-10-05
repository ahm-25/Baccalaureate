<template>
  <section id="digital-signature" class="py-20 bg-white">
    <div class="max-w-4xl mx-auto px-6 text-center">
      <h2 class="text-3xl font-bold text-slate-800 mb-6">التوقيع الرقمي</h2>
      <p class="text-lg text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
        يساعد على اكتشاف التلاعب وانتحال الشخصية، ويوفر دليلًا يدعم <strong>عدم التنصل</strong>.
      </p>
      
      <div class="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm max-w-3xl mx-auto mb-10">
        <div class="flex justify-between items-center flex-wrap gap-4">
          <div class="text-center w-full md:w-auto">
            <div class="text-5xl mb-2">📄</div>
            <div class="text-sm font-bold text-slate-700 bg-white px-3 py-1 rounded-full border shadow-sm">رسالة أصلية</div>
          </div>
          
          <div class="flex-1 px-4 relative hidden md:block">
            <div class="h-0.5 bg-slate-300 w-full absolute top-1/2 -translate-y-1/2"></div>
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-3 py-1 rounded-full text-xl shadow-sm border border-slate-200">✍️ توقيع</div>
          </div>
          <div class="w-full text-center md:hidden text-2xl text-slate-400">↓</div>
          
          <div class="text-center w-full md:w-auto">
            <div class="text-5xl mb-2 relative inline-block">
              📄
              <span class="absolute bottom-0 -right-2 bg-emerald-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center border-2 border-white shadow-sm">✓</span>
            </div>
            <div class="text-sm font-bold text-slate-700 bg-white px-3 py-1 rounded-full border shadow-sm">رسالة موقعة</div>
          </div>
        </div>
        
        <div class="mt-8 bg-emerald-50 text-emerald-800 p-4 rounded-xl border border-emerald-200">
          <strong>النتيجة:</strong> المستلم يتحقق من التوقيع ✅ (الرسالة لم تتغير وهي من المرسل الحقيقي)
        </div>
      </div>
      
      <div class="bg-amber-50 rounded-2xl p-6 border border-amber-200 max-w-2xl mx-auto text-right">
        <h4 class="font-bold text-amber-900 mb-3 flex items-center gap-2"><span>❓</span> سؤال شائع:</h4>
        <p class="text-amber-800 font-bold mb-1">هل التوقيع الرقمي هدفه الأساسي إخفاء محتوى الرسالة؟</p>
        <p class="text-amber-900 text-sm leading-relaxed">
          <span class="bg-amber-200 px-2 py-0.5 rounded mr-1">لا.</span> وظيفته الأساسية هي التحقق من <strong>سلامة البيانات وهوية الموقع ودعم عدم التنصل</strong>. بينما <em>التشفير</em> هو الذي يحمي المحتوى.
        </p>
      </div>
    </div>
  </section>
</template>
