<template>
  <section id="apply-learned" class="py-20 bg-slate-50">
    <div class="max-w-5xl mx-auto px-6 text-center">
      <div class="inline-block bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full font-bold mb-6 text-sm border border-indigo-200">
        تطبيق عملي
      </div>
      <h2 class="text-3xl font-bold text-slate-800 mb-8">تطبيق ما تعلمته</h2>
      
      <div class="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm max-w-3xl mx-auto mb-10 text-right">
        <h3 class="text-xl font-bold text-slate-800 mb-4 border-b border-slate-100 pb-4">السيناريو:</h3>
        <p class="text-lg text-slate-700 leading-relaxed mb-6 font-medium bg-slate-50 p-4 rounded-xl">
          متجر إلكتروني صغير يريد تأمين تسجيل دخول العملاء والدفع معًا.
        </p>
        <div class="space-y-2 mb-8">
          <p class="font-bold text-indigo-600">المطلوب:</p>
          <ul class="list-decimal list-inside text-slate-700">
            <li>سمِّ تقنيتين للأمان.</li>
            <li>وضح أين تساعد كل تقنية.</li>
            <li>حدد تهديدًا واحدًا قد يظل قائمًا.</li>
          </ul>
        </div>
        
        <div class="text-center">
          <button v-if="!show" @click="show = true" class="px-8 py-4 bg-indigo-600 text-white font-bold text-lg rounded-2xl hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 w-full sm:w-auto">
            اعرض نموذج الإجابة
          </button>
        </div>
      </div>
      
      <div v-if="show" class="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl text-right max-w-3xl mx-auto animate-fade-in-up">
        <h4 class="font-bold text-xl text-slate-800 mb-6 flex items-center gap-2 border-b border-slate-100 pb-4">
          <span class="text-emerald-500">✅</span> نموذج الإجابة المقترح
        </h4>
        
        <div class="space-y-6">
          <div class="bg-indigo-50/50 p-5 rounded-2xl border border-indigo-100">
            <strong class="text-indigo-800 text-lg block mb-2">1. التقنيات المقترحة:</strong>
            <p class="text-slate-700">HTTPS (الذي يتضمن تشفير وشهادة رقمية) + المصادقة الثنائية (FA2).</p>
          </div>
          
          <div class="bg-emerald-50/50 p-5 rounded-2xl border border-emerald-100">
            <strong class="text-emerald-800 text-lg block mb-2">2. أين تساعد؟</strong>
            <ul class="space-y-3 mt-3">
              <li class="flex items-start gap-3">
                <span class="bg-emerald-200 text-emerald-800 p-1 rounded mt-0.5">🔒</span>
                <span><strong>HTTPS:</strong> لحماية بيانات بطاقة الائتمان من الاعتراض أثناء الدفع والتأكد من هوية المتجر (أنه ليس موقعًا مزيفًا).</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="bg-emerald-200 text-emerald-800 p-1 rounded mt-0.5">📱</span>
                <span><strong>FA2:</strong> لحماية حسابات العملاء من الاختراق إذا تم كشف أو تخمين كلمة المرور الخاصة بهم.</span>
              </li>
            </ul>
          </div>
          
          <div class="bg-rose-50/50 p-5 rounded-2xl border border-rose-100">
            <strong class="text-rose-800 text-lg block mb-2">3. تهديد قد يظل قائمًا:</strong>
            <p class="text-slate-700">
              أساليب الهندسة الاجتماعية (خداع العميل لإعطاء كود FA2)، أو اختراق قاعدة بيانات المتجر من الداخل (تسريب بيانات محفوظة). الأمان يحمي الاتصال والمصادقة، ولكنه لا يمنع الأخطاء البشرية.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>import { ref } from 'vue'; const show = ref(false);</script>
<style scoped>
.animate-fade-in-up { animation: fadeInUp 0.5s ease-out forwards; }
@keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
</style>
