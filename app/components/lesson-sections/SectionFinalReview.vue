<template>
  <section id="final-review" class="min-h-screen relative flex flex-col pt-32 pb-24 px-6 sm:px-12 bg-slate-900 overflow-hidden">
    <div class="max-w-7xl mx-auto w-full relative z-10 flex flex-col gap-16">
      
      <div class="text-center max-w-4xl mx-auto">
        <h2 class="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">من البيانات إلى المعرفة</h2>
        <div class="inline-block bg-primary/20 text-primary-light font-bold px-8 py-3 rounded-full mb-8 shadow-sm border border-primary/30">
          المراجعة الشاملة
        </div>
        <p class="text-2xl text-slate-300 leading-relaxed font-semibold">
          اضغط على كل مرحلة لتتذكر أهم ما تعلمناه في هذا الدرس.
        </p>
      </div>

      <div class="relative w-full max-w-5xl mx-auto">
        <!-- Connecting Line -->
        <div class="absolute top-[40px] left-0 right-0 h-2 bg-slate-700 rounded-full hidden md:block"></div>
        
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <!-- DIK Step -->
          <div 
            class="relative z-10 group cursor-pointer"
            @click="activeStep = 1"
          >
            <div 
              class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 border-4"
              :class="activeStep === 1 ? 'bg-primary border-primary-light scale-110 shadow-[0_0_30px_rgba(var(--color-primary),0.5)]' : 'bg-slate-800 border-slate-600 hover:border-primary text-slate-400'"
            >
              <Database size="32" :class="activeStep === 1 ? 'text-white' : ''" />
            </div>
            <h3 class="text-xl font-bold text-center mb-2" :class="activeStep === 1 ? 'text-white' : 'text-slate-400'">البيانات والمعرفة</h3>
            
            <div v-show="activeStep === 1" class="absolute top-32 left-0 right-0 md:-left-20 md:-right-20 bg-white p-6 rounded-2xl shadow-2xl z-20 text-right animate-fade-in">
              <h4 class="font-bold text-primary mb-3">الخلاصة:</h4>
              <p class="text-slate-700 leading-relaxed mb-4">
                <strong>البيانات:</strong> حقائق وأرقام.<br>
                <strong>المعلومات:</strong> بيانات تمت معالجتها لتعطي معنى.<br>
                <strong>المعرفة:</strong> استخدام المعلومات لحل المشكلات.
              </p>
              <div class="bg-slate-50 p-3 rounded-lg border border-slate-200 text-sm">
                <strong>مثال:</strong> درجات (بيانات) -> متوسط درجات (معلومات) -> قرار بالمذاكرة (معرفة).
              </div>
            </div>
          </div>

          <!-- Primary/Secondary Step -->
          <div 
            class="relative z-10 group cursor-pointer"
            @click="activeStep = 2"
          >
            <div 
              class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 border-4"
              :class="activeStep === 2 ? 'bg-accent border-accent-light scale-110 shadow-[0_0_30px_rgba(var(--color-accent),0.5)]' : 'bg-slate-800 border-slate-600 hover:border-accent text-slate-400'"
            >
              <BookOpen size="32" :class="activeStep === 2 ? 'text-white' : ''" />
            </div>
            <h3 class="text-xl font-bold text-center mb-2" :class="activeStep === 2 ? 'text-white' : 'text-slate-400'">المصادر والتحقق</h3>
            
            <div v-show="activeStep === 2" class="absolute top-32 left-0 right-0 md:-left-20 md:-right-20 bg-white p-6 rounded-2xl shadow-2xl z-20 text-right animate-fade-in">
              <h4 class="font-bold text-accent mb-3">الخلاصة:</h4>
              <p class="text-slate-700 leading-relaxed mb-4">
                <strong>المعلومات الأولية:</strong> من تجربتك المباشرة.<br>
                <strong>المعلومات الثانوية:</strong> عبر طرف ثالث (كتاب، صحيفة).<br>
                <strong>التحقق المتبادل:</strong> مقارنة المصادر المختلفة لتحديد الدقة.
              </p>
            </div>
          </div>

          <!-- Media Step -->
          <div 
            class="relative z-10 group cursor-pointer"
            @click="activeStep = 3"
          >
            <div 
              class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 border-4"
              :class="activeStep === 3 ? 'bg-green-500 border-green-300 scale-110 shadow-[0_0_30px_rgba(34,197,94,0.5)]' : 'bg-slate-800 border-slate-600 hover:border-green-500 text-slate-400'"
            >
              <MonitorPlay size="32" :class="activeStep === 3 ? 'text-white' : ''" />
            </div>
            <h3 class="text-xl font-bold text-center mb-2" :class="activeStep === 3 ? 'text-white' : 'text-slate-400'">الوسائط</h3>
            
            <div v-show="activeStep === 3" class="absolute top-32 left-0 right-0 md:-left-20 md:-right-20 bg-white p-6 rounded-2xl shadow-2xl z-20 text-right animate-fade-in">
              <h4 class="font-bold text-green-600 mb-3">الخلاصة:</h4>
              <p class="text-slate-700 leading-relaxed mb-4">
                الوسائط هي وسائل لنقل المعلومات وتنقسم إلى:
              </p>
              <ul class="text-sm space-y-2 text-slate-600">
                <li><strong>1. تعبيرية:</strong> (صورة، نص، صوت)</li>
                <li><strong>2. نقل وإرسال:</strong> (إنترنت، تلفزيون، هاتف)</li>
                <li><strong>3. تسجيل:</strong> (ورق، قرص صلب، سحابة)</li>
              </ul>
            </div>
          </div>

          <!-- Literacy Step -->
          <div 
            class="relative z-10 group cursor-pointer"
            @click="activeStep = 4"
          >
            <div 
              class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 border-4"
              :class="activeStep === 4 ? 'bg-orange-500 border-orange-300 scale-110 shadow-[0_0_30px_rgba(249,115,22,0.5)]' : 'bg-slate-800 border-slate-600 hover:border-orange-500 text-slate-400'"
            >
              <ShieldCheck size="32" :class="activeStep === 4 ? 'text-white' : ''" />
            </div>
            <h3 class="text-xl font-bold text-center mb-2" :class="activeStep === 4 ? 'text-white' : 'text-slate-400'">الثقافة الإعلامية</h3>
            
            <div v-show="activeStep === 4" class="absolute top-32 left-0 right-0 md:-left-20 md:-right-20 bg-white p-6 rounded-2xl shadow-2xl z-20 text-right animate-fade-in">
              <h4 class="font-bold text-orange-500 mb-3">الخلاصة:</h4>
              <p class="text-slate-700 leading-relaxed mb-4">
                <strong>الثقافة الإعلامية:</strong> هي القدرة على تفسير المعلومات من الوسائط بدقة، وتحليلها، وعدم قبول كل ما ينشر بدون تفكير نقدي وتأكد.
              </p>
            </div>
          </div>

        </div>
      </div>
      
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Database, BookOpen, MonitorPlay, ShieldCheck } from 'lucide-vue-next'

const activeStep = ref(1)
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.3s ease-out forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
