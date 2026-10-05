<template>
  <section id="tls-handshake" class="py-20 bg-white">
    <div class="max-w-5xl mx-auto px-6">
      <h2 class="text-3xl font-bold text-slate-800 mb-10 border-r-4 border-indigo-500 pr-4">كيف تعمل مصافحة TLS؟</h2>
      
      <div class="flex flex-col md:flex-row gap-8">
        <!-- Steps List -->
        <div class="md:w-1/3 flex flex-col gap-4">
          <button 
            v-for="(step, i) in steps" 
            :key="i"
            @click="activeStep = i"
            :class="['p-4 rounded-xl text-right transition-all border-2', activeStep === i ? 'bg-indigo-50 border-indigo-500 text-indigo-900 shadow-sm' : 'bg-white border-slate-100 text-slate-600 hover:border-indigo-200']"
          >
            <div class="text-sm font-bold text-indigo-500 mb-1">المرحلة {{ i + 1 }}</div>
            <div class="font-bold">{{ step.title }}</div>
          </button>
        </div>
        
        <!-- Step Content & Animation -->
        <div class="md:w-2/3 bg-slate-900 rounded-3xl p-8 flex flex-col justify-center min-h-[300px] relative overflow-hidden">
          
          <div class="text-center z-10">
            <h3 class="text-2xl font-bold text-white mb-4">{{ steps[activeStep].title }}</h3>
            <p class="text-slate-300 text-lg leading-relaxed max-w-md mx-auto">
              {{ steps[activeStep].desc }}
            </p>
          </div>
          
          <!-- Visuals -->
          <div class="mt-12 flex justify-between items-center px-4 md:px-12 relative z-10">
            <div class="text-center">
              <div class="w-16 h-16 bg-slate-800 rounded-xl flex items-center justify-center text-3xl border border-slate-700 mb-2">🌐</div>
              <span class="text-slate-400 text-sm">المتصفح</span>
            </div>
            
            <div class="flex-1 flex justify-center relative px-4">
               <!-- Animating Element based on step -->
               <div v-if="activeStep === 0" class="flex flex-col items-center animate-slide-right w-full">
                 <span class="text-xs text-amber-300 mb-1">&larr; شهادة رقمية</span>
                 <div class="h-1 bg-amber-500/50 w-full rounded"></div>
               </div>
               
               <div v-if="activeStep === 1" class="flex flex-col items-center w-full">
                 <div class="flex justify-between w-full mb-1">
                   <span class="text-xs text-purple-300">مفاتيح عامة &rarr;</span>
                   <span class="text-xs text-purple-300">&larr; أسرار مشتركة</span>
                 </div>
                 <div class="h-1 bg-purple-500/50 w-full rounded"></div>
               </div>
               
               <div v-if="activeStep === 2" class="flex flex-col items-center animate-pulse w-full">
                 <span class="text-xs text-emerald-300 mb-1">&harr; بيانات مشفرة &harr;</span>
                 <div class="h-2 bg-emerald-500 w-full rounded shadow-[0_0_10px_rgba(16,185,129,0.8)]"></div>
               </div>
            </div>
            
            <div class="text-center">
              <div class="w-16 h-16 bg-slate-800 rounded-xl flex items-center justify-center text-3xl border border-slate-700 mb-2">🖥️</div>
              <span class="text-slate-400 text-sm">الخادم</span>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from 'vue';
const activeStep = ref(0);
const steps = [
  { 
    title: 'التحقق من الشهادة', 
    desc: 'الخادم يرسل شهادته الرقمية. المتصفح يتحقق من صلاحيتها، سلسلة الثقة، وارتباطها باسم الموقع.' 
  },
  { 
    title: 'اشتقاق مفاتيح الجلسة', 
    desc: 'يتفق الطرفان باستخدام آليات المفتاح العام على أسرار مشتركة تُشتق منها مفاتيح الجلسة.' 
  },
  { 
    title: 'تبادل البيانات', 
    desc: 'بعد إنشاء مفاتيح الجلسة، تُحمى البيانات المتبادلة باستخدام التشفير المتماثل وآليات سلامة البيانات.' 
  }
];
</script>
<style scoped>
.animate-slide-right { animation: slideRight 2s infinite; }
@keyframes slideRight { from { transform: translateX(20px); opacity: 0; } 50% { opacity: 1; } to { transform: translateX(-20px); opacity: 0; } }
</style>
