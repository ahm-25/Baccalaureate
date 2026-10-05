<template>
  <section id="digital-cert" class="py-20 bg-slate-50">
    <div class="max-w-5xl mx-auto px-6 text-center">
      <h2 class="text-3xl font-bold text-slate-800 mb-6">الشهادة الرقمية</h2>
      <p class="text-lg text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
        تساعد المتصفح على التحقق من هوية الخادم وارتباط الشهادة باسم النطاق الذي يتصل به.
      </p>
      
      <div class="flex flex-col items-center">
        <div class="flex items-center gap-2 md:gap-4 text-2xl mb-8 font-bold">
          <span title="المتصفح" class="text-4xl">🌐</span>
          <span class="text-slate-400 text-sm hidden md:inline">----- يبحث عن -----&gt;</span>
          <button @click="showCert = !showCert" class="bg-amber-100 px-6 py-4 rounded-2xl border-2 border-amber-300 shadow-md hover:bg-amber-200 transition-colors flex flex-col items-center">
            <span class="text-4xl mb-2">📜</span>
            <span class="text-sm font-bold text-amber-900">شهادة رقمية</span>
            <span class="text-xs text-amber-700 mt-1">(اضغط هنا)</span>
          </button>
          <span class="text-slate-400 text-sm hidden md:inline">----- يمثل -----&gt;</span>
          <span title="الموقع" class="text-4xl">🖥️</span>
        </div>
        
        <div v-if="showCert" class="bg-white p-6 rounded-2xl border border-slate-200 shadow-xl text-right max-w-sm w-full animate-fade-in-up">
          <h4 class="font-bold text-slate-800 border-b pb-3 mb-4">تفاصيل الشهادة</h4>
          <ul class="space-y-3 text-sm text-slate-600">
            <li class="flex justify-between border-b border-slate-100 pb-2"><strong>الموقع:</strong> <span class="text-indigo-600">example.com</span></li>
            <li class="flex justify-between border-b border-slate-100 pb-2"><strong>الجهة المانحة:</strong> <span>جهة موثوقة (CA)</span></li>
            <li class="flex justify-between border-b border-slate-100 pb-2"><strong>الصلاحية:</strong> <span class="text-emerald-600 font-bold">سارية المفعول</span></li>
            <li class="flex justify-between"><strong>المفتاح العام:</strong> <span class="font-mono text-xs bg-slate-100 px-2 rounded">a1b2c3d4...</span></li>
          </ul>
        </div>
      </div>
      
      <div class="mt-12 bg-indigo-50 border border-indigo-100 p-6 rounded-2xl inline-block text-right max-w-2xl w-full">
        <h4 class="font-bold text-indigo-900 mb-3 flex items-center gap-2"><span>⚠️</span> مقارنة هامة:</h4>
        <ul class="space-y-3 text-sm text-indigo-800">
          <li class="flex items-start gap-2">
            <span class="text-lg">📜</span>
            <span><strong>الشهادة الرقمية:</strong> تساعد على التحقق من هوية الخادم.</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-lg">🔒</span>
            <span><strong>التشفير:</strong> يحمي محتوى الاتصال من القراءة غير المصرح بها.</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from 'vue';
const showCert = ref(false);
</script>
<style scoped>
.animate-fade-in-up { animation: fadeInUp 0.5s ease-out forwards; }
@keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
</style>
