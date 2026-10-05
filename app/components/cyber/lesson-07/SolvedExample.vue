<template>
  <section id="solved-example" class="py-20 bg-slate-50">
    <div class="max-w-4xl mx-auto px-6">
      <h2 class="text-3xl font-bold text-slate-800 mb-10 text-center flex items-center justify-center gap-3">
        <span class="text-4xl">📝</span> مثال محلول: حدد صح أو خطأ
      </h2>
      <div class="space-y-4">
        <div v-for="(q, i) in questions" :key="i" class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm cursor-pointer hover:border-indigo-300 hover:shadow-md transition-all group" @click="q.show = true">
          <div class="flex items-start gap-4">
            <span class="w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center font-bold shrink-0 mt-0.5">{{ i + 1 }}</span>
            <div class="flex-1">
              <p class="text-lg font-medium text-slate-800 mb-2 leading-relaxed">{{ q.text }}</p>
              
              <div v-if="q.show" class="mt-4 p-4 rounded-xl text-sm animate-fade-in-up" :class="q.ans ? 'bg-emerald-50 text-emerald-900 border border-emerald-100' : 'bg-rose-50 text-rose-900 border border-rose-100'">
                <strong class="text-base flex items-center gap-2 mb-1">
                  <span v-if="q.ans" class="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center">✓</span>
                  <span v-else class="w-6 h-6 rounded-full bg-rose-500 text-white flex items-center justify-center">✗</span>
                  {{ q.ans ? 'عبارة صحيحة' : 'عبارة خاطئة' }}
                </strong>
                <p v-if="q.exp" class="mt-2 text-slate-700 leading-relaxed">{{ q.exp }}</p>
              </div>
              
              <div v-else class="text-sm text-indigo-500 font-bold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <span>اضغط لمعرفة الإجابة</span>
                <span>&larr;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from 'vue';
const questions = ref([
  { text: 'يستخدم اتصال HTTPS آليات المفتاح العام والتشفير المتماثل.', ans: true, show: false, exp: 'صحيح. يجمع HTTPS بين كلا النوعين للحصول على أقصى أمان وأداء.' },
  { text: 'يستخدم HTTPS التشفير بالمفتاح العام لجميع البيانات طوال الجلسة.', ans: false, show: false, exp: 'يستخدم التشفير المتماثل لحماية بيانات الجلسة لأن التشفير بالمفتاح العام أبطأ وأقل كفاءة لكميات البيانات الكبيرة.' },
  { text: 'المصادقة الثنائية (FA2) تستخدم عاملين مستقلين من فئتين مختلفتين.', ans: true, show: false, exp: 'صحيح. يجب أن يكونا من فئتين مختلفتين (مثال: شيء تعرفه + شيء تملكه).' },
  { text: 'كلمتا مرور مختلفتان تعتبران مصادقة ثنائية FA2.', ans: false, show: false, exp: 'كلمتا المرور كلاهما من فئة "المعرفة"، لذلك لا يمثلان عاملين من فئتين مختلفتين، وبالتالي لا يحققان FA2.' }
]);
</script>
<style scoped>
.animate-fade-in-up { animation: fadeInUp 0.3s ease-out forwards; }
@keyframes fadeInUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
</style>
