<template>
  <section id="auth-factors" class="py-20 bg-white">
    <div class="max-w-5xl mx-auto px-6">
      <h2 class="text-3xl font-bold text-slate-800 mb-10 text-center">أنواع عوامل المصادقة</h2>
      
      <div class="grid md:grid-cols-3 gap-6 mb-12">
        <div class="bg-sky-50 p-8 rounded-3xl border border-sky-100 hover:shadow-md transition-shadow text-center">
          <div class="w-16 h-16 bg-sky-100 text-sky-600 rounded-2xl mx-auto flex items-center justify-center text-3xl mb-6">🧠</div>
          <h3 class="text-xl font-bold text-sky-900 mb-2">المعرفة</h3>
          <p class="text-sky-700 font-medium mb-4">شيء تعرفه</p>
          <ul class="text-sm text-sky-800 space-y-2 text-right list-disc list-inside bg-white p-4 rounded-xl">
            <li>كلمة المرور (Password)</li>
            <li>رقم التعريف الشخصي (PIN)</li>
          </ul>
        </div>

        <div class="bg-purple-50 p-8 rounded-3xl border border-purple-100 hover:shadow-md transition-shadow text-center">
          <div class="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl mx-auto flex items-center justify-center text-3xl mb-6">📱</div>
          <h3 class="text-xl font-bold text-purple-900 mb-2">الحيازة</h3>
          <p class="text-purple-700 font-medium mb-4">شيء تملكه</p>
          <ul class="text-sm text-purple-800 space-y-2 text-right list-disc list-inside bg-white p-4 rounded-xl">
            <li>الهاتف الذكي</li>
            <li>رمز لمرة واحدة (OTP)</li>
            <li>مفتاح أمان</li>
          </ul>
        </div>

        <div class="bg-rose-50 p-8 rounded-3xl border border-rose-100 hover:shadow-md transition-shadow text-center">
          <div class="w-16 h-16 bg-rose-100 text-rose-600 rounded-2xl mx-auto flex items-center justify-center text-3xl mb-6">👁️</div>
          <h3 class="text-xl font-bold text-rose-900 mb-2">السمات الحيوية</h3>
          <p class="text-rose-700 font-medium mb-4">شيء يميزك</p>
          <ul class="text-sm text-rose-800 space-y-2 text-right list-disc list-inside bg-white p-4 rounded-xl">
            <li>بصمة الإصبع</li>
            <li>التعرف على الوجه</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-slate-100 p-6 rounded-2xl flex flex-col md:flex-row gap-6 justify-between items-center border border-slate-200">
        <div class="text-center md:text-right">
          <h4 class="font-bold text-indigo-700 mb-1 text-lg">المصادقة الثنائية (FA2)</h4>
          <p class="text-sm text-slate-700">عاملان من <strong>فئتين مختلفتين</strong>.</p>
        </div>
        <div class="hidden md:block w-px h-12 bg-slate-300"></div>
        <div class="text-center md:text-right">
          <h4 class="font-bold text-indigo-700 mb-1 text-lg">المصادقة متعددة العوامل (MFA)</h4>
          <p class="text-sm text-slate-700">عاملان أو أكثر من فئات مختلفة.</p>
        </div>
      </div>
    </div>
  </section>
</template>
