<template>
  <section id="https-protection" class="py-20 bg-slate-50">
    <div class="max-w-4xl mx-auto px-6">
      <h2 class="text-3xl font-bold text-slate-800 mb-10 text-center">الخلاصة: كيف تحمي HTTPS الاتصال؟</h2>
      
      <div class="space-y-4 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
        
        <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div class="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-indigo-500 text-white font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow">1</div>
          <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-slate-200 bg-white shadow-sm mr-4 md:mr-0 md:group-even:ml-10 md:group-odd:mr-10">
            <h4 class="font-bold text-slate-800 mb-1 text-lg">شهادة رقمية</h4>
            <p class="text-sm text-slate-600">التحقق من هوية الخادم وارتباطه باسم النطاق.</p>
          </div>
        </div>
        
        <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div class="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-indigo-500 text-white font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow">2</div>
          <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-slate-200 bg-white shadow-sm mr-4 md:mr-0 md:group-even:ml-10 md:group-odd:mr-10">
            <h4 class="font-bold text-slate-800 mb-1 text-lg">آليات المفتاح العام</h4>
            <p class="text-sm text-slate-600">تستخدم للمصادقة والاتفاق الآمن أثناء المصافحة.</p>
          </div>
        </div>

        <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div class="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-indigo-500 text-white font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow">3</div>
          <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-slate-200 bg-white shadow-sm mr-4 md:mr-0 md:group-even:ml-10 md:group-odd:mr-10">
            <h4 class="font-bold text-slate-800 mb-1 text-lg">اشتقاق مفاتيح الجلسة</h4>
            <p class="text-sm text-slate-600">اشتقاق أسرار مشتركة لإنشاء مفاتيح جلسة متماثلة.</p>
          </div>
        </div>

        <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div class="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-emerald-500 text-white font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow">4</div>
          <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-slate-200 bg-emerald-50 shadow-sm mr-4 md:mr-0 md:group-even:ml-10 md:group-odd:mr-10">
            <h4 class="font-bold text-slate-800 mb-1 text-lg">التشفير المتماثل</h4>
            <p class="text-sm text-slate-600">حماية بيانات الجلسة بسرعة وكفاءة.</p>
          </div>
        </div>
      </div>
      
      <!-- Interactive Question -->
      <div class="mt-12 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm text-center">
        <h4 class="font-bold text-indigo-900 mb-4">🤔 لماذا لا نستخدم التشفير بالمفتاح العام لكل البيانات طوال الجلسة؟</h4>
        <button v-if="!showAnswer" @click="showAnswer = true" class="px-6 py-2 bg-indigo-100 hover:bg-indigo-200 text-indigo-700 font-bold rounded-xl transition-colors">
          اعرض الإجابة
        </button>
        <p v-if="showAnswer" class="text-emerald-700 font-medium mt-4 p-4 bg-emerald-50 rounded-xl border border-emerald-100 leading-relaxed">
          لأن استخدامه لتبادل كميات كبيرة من البيانات أقل كفاءة، لذلك تُستخدم مفاتيح جلسة متماثلة لحماية بيانات الجلسة بسرعة.
        </p>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from 'vue';
const showAnswer = ref(false);
</script>
