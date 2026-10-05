<template>
  <section id="exam-question" class="py-24 bg-white">
    <div class="max-w-4xl mx-auto px-6">
      <div class="bg-amber-50 rounded-[2rem] p-8 md:p-12 border-2 border-amber-200 shadow-sm relative overflow-hidden">
        <div class="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-bl-[100px] border-b-2 border-l-2 border-amber-200/50"></div>
        
        <div class="relative z-10">
          <h2 class="text-2xl md:text-3xl font-bold text-amber-900 mb-8 flex items-center gap-3">
            <span class="text-4xl bg-amber-200 p-2 rounded-2xl">🎯</span> سؤال على نمط الامتحان
          </h2>
          
          <div class="bg-white p-6 rounded-2xl border border-amber-100 mb-8 shadow-inner">
            <p class="text-lg md:text-xl text-slate-800 font-medium leading-relaxed">
              "اشرح لماذا يستخدم TLS آليات المفتاح العام للمصادقة والاتفاق الآمن على مفاتيح الجلسة، ثم يستخدم التشفير المتماثل لحماية بيانات الجلسة."
            </p>
            <div class="mt-4 flex justify-end">
              <span class="inline-block bg-slate-100 text-slate-600 font-bold px-3 py-1 rounded-lg text-sm border border-slate-200">
                [ 6 درجات ]
              </span>
            </div>
          </div>
          
          <div class="text-center">
            <button v-if="!show" @click="show = true" class="px-8 py-4 bg-amber-500 hover:bg-amber-400 text-white font-bold text-lg rounded-2xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 w-full md:w-auto">
              اعرض نموذج الإجابة
            </button>
          </div>
          
          <div v-if="show" class="mt-8 bg-white p-8 rounded-2xl border-2 border-emerald-200 shadow-xl animate-fade-in-up text-right relative">
            <div class="absolute -top-4 -right-4 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold shadow-md border-2 border-white">✓</div>
            <h4 class="font-bold text-emerald-800 text-xl mb-6 border-b border-emerald-100 pb-3">عناصر الإجابة النموذجية:</h4>
            
            <ul class="space-y-6 text-slate-700 text-lg">
              <li class="flex gap-4">
                <span class="bg-slate-100 text-slate-500 w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0 mt-1 text-sm border border-slate-200">1</span>
                <div>
                  <strong class="text-indigo-700 block mb-1">المفتاح العام (المصادقة والاتفاق):</strong>
                  <p class="leading-relaxed">يُستخدم في بداية الاتصال لأنه يسمح للأطراف بالتحقق من الهوية والاتفاق بأمان على أسرار مشتركة دون الحاجة لمشاركة مفتاح سري مسبقًا. <span class="text-sm font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded ml-2 whitespace-nowrap">(2 درجة)</span></p>
                </div>
              </li>
              <li class="flex gap-4">
                <span class="bg-slate-100 text-slate-500 w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0 mt-1 text-sm border border-slate-200">2</span>
                <div>
                  <strong class="text-indigo-700 block mb-1">التشفير المتماثل (بيانات الجلسة):</strong>
                  <p class="leading-relaxed">بمجرد إنشاء مفتاح الجلسة، يُستخدم التشفير المتماثل لأنه <strong>أكثر كفاءة وأسرع بكثير</strong> في معالجة كميات البيانات الكبيرة المتبادلة أثناء الجلسة. <span class="text-sm font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded ml-2 whitespace-nowrap">(2 درجة)</span></p>
                </div>
              </li>
              <li class="flex gap-4">
                <span class="bg-slate-100 text-slate-500 w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0 mt-1 text-sm border border-slate-200">3</span>
                <div>
                  <strong class="text-indigo-700 block mb-1">الخلاصة (التبرير النهائي):</strong>
                  <p class="leading-relaxed">يجمع TLS بين أمان آليات المفتاح العام في البداية، وكفاءة وسرعة التشفير المتماثل للبيانات، مما يحقق توازنًا مثاليًا بين الأمان والأداء. <span class="text-sm font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded ml-2 whitespace-nowrap">(2 درجة)</span></p>
                </div>
              </li>
            </ul>
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
