<template>
  <section id="think-engineer" class="py-24 bg-white">
    <div class="max-w-5xl mx-auto px-6">
      <div class="bg-slate-900 text-white p-10 rounded-3xl relative overflow-hidden shadow-2xl">
        <div class="absolute top-0 left-0 w-64 h-64 bg-amber-500/20 rounded-full mix-blend-screen filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        
        <div class="relative z-10">
          <h2 class="text-3xl font-bold text-amber-400 mb-2 flex items-center gap-3">
            <span class="text-4xl">⚙️</span> فكر كمهندس
          </h2>
          <p class="text-lg text-slate-300 mb-10 font-light border-b border-slate-700 pb-6 inline-block">"المهندس الجيد لا يحفظ التقنية فقط... لكنه يختار التقنية المناسبة للمشكلة."</p>
          
          <div class="bg-slate-800 p-8 rounded-3xl mb-8 border border-slate-700 shadow-inner">
            <h3 class="font-bold text-xl mb-4 text-white">السيناريو:</h3>
            <p class="text-slate-300 text-lg leading-relaxed mb-6">
              مدرسة تريد إنشاء بوابة إلكترونية يستطيع الطلاب من خلالها معرفة درجاتهم، دفع المصروفات، وتسجيل الدخول لحساباتهم.
              <br/><br/>
              <strong class="text-rose-400 bg-rose-400/10 px-3 py-1 rounded">ملاحظة هامة:</strong> هناك طالب قد لا يملك هاتفًا ذكيًا.
            </p>
            <h3 class="font-bold text-lg mb-4 text-indigo-400">المطلوب: اختر طريقة تسجيل الدخول المناسبة مع التبرير</h3>
            
            <div class="flex flex-col gap-4">
              <button @click="ans='A'" :class="['text-right p-5 rounded-2xl border-2 transition-all font-medium text-lg', ans==='A'?'bg-indigo-900 border-indigo-500 text-indigo-100':'border-slate-600 text-slate-300 hover:bg-slate-700']">A. كلمة مرور فقط</button>
              <button @click="ans='B'" :class="['text-right p-5 rounded-2xl border-2 transition-all font-medium text-lg', ans==='B'?'bg-indigo-900 border-indigo-500 text-indigo-100':'border-slate-600 text-slate-300 hover:bg-slate-700']">B. كلمة مرور + عامل ثانٍ عبر تطبيق هاتف حصراً</button>
              <button @click="ans='C'" :class="['text-right p-5 rounded-2xl border-2 transition-all font-medium text-lg', ans==='C'?'bg-emerald-900 border-emerald-500 text-emerald-100':'border-slate-600 text-slate-300 hover:bg-slate-700']">C. كلمة مرور + توفير بدائل لعامل المصادقة الثاني</button>
            </div>
          </div>
          
          <div v-if="ans" class="bg-emerald-900/40 border-2 border-emerald-500/50 p-8 rounded-3xl animate-fade-in-up">
            <h4 class="font-bold text-emerald-400 mb-4 text-xl flex items-center gap-2">
              <span class="text-2xl">⚖️</span> تبرير الاختيار (Trade-off):
            </h4>
            <p class="text-lg text-slate-200 leading-relaxed">
              الإجابة الصحيحة هي <strong>C</strong>.<br/>
              يجب الموازنة بين <strong>الأمان</strong> و <strong>إمكانية الوصول</strong>. إذا فرضنا استخدام تطبيق مصادقة على هاتف ذكي (B)، سنمنع الطالب الذي لا يملك هاتفًا من الوصول. كلمة المرور فقط (A) تفتقر للأمان الكافي لعمليات الدفع. الحل الأمثل هو استخدام FA2 مع توفير بدائل للعامل الثاني (مثل بطاقة ذكية أو كود عبر البريد الإلكتروني للمدرسة) لضمان الأمان دون التضحية بإمكانية الوصول.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>import { ref } from 'vue'; const ans = ref(null);</script>
<style scoped>
.animate-fade-in-up { animation: fadeInUp 0.5s ease-out forwards; }
@keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
</style>
