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

      <div class="relative w-full max-w-5xl mx-auto flex flex-col gap-12">
        
        <!-- Steps Navigation -->
        <div class="relative w-full">
          <!-- Connecting Line -->
          <div class="absolute top-[40px] left-0 right-0 h-1.5 bg-slate-800 rounded-full hidden md:block z-0"></div>
          
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
            <!-- Step 1 -->
            <div class="flex flex-col items-center group cursor-pointer" @click="activeStep = 1">
              <div class="w-20 h-20 rounded-full flex items-center justify-center mb-4 transition-all duration-300 border-4 relative bg-slate-900"
                   :class="activeStep === 1 ? 'border-primary shadow-[0_0_20px_rgba(var(--color-primary),0.6)] scale-110' : 'border-slate-700 text-slate-500 hover:border-primary/50'">
                <Database size="32" :class="activeStep === 1 ? 'text-primary' : ''" />
              </div>
              <h3 class="text-lg font-bold text-center transition-colors" :class="activeStep === 1 ? 'text-primary' : 'text-slate-400'">البيانات والمعرفة</h3>
            </div>

            <!-- Step 2 -->
            <div class="flex flex-col items-center group cursor-pointer" @click="activeStep = 2">
              <div class="w-20 h-20 rounded-full flex items-center justify-center mb-4 transition-all duration-300 border-4 relative bg-slate-900"
                   :class="activeStep === 2 ? 'border-accent shadow-[0_0_20px_rgba(var(--color-accent),0.6)] scale-110' : 'border-slate-700 text-slate-500 hover:border-accent/50'">
                <BookOpen size="32" :class="activeStep === 2 ? 'text-accent' : ''" />
              </div>
              <h3 class="text-lg font-bold text-center transition-colors" :class="activeStep === 2 ? 'text-accent' : 'text-slate-400'">المصادر والتحقق</h3>
            </div>

            <!-- Step 3 -->
            <div class="flex flex-col items-center group cursor-pointer" @click="activeStep = 3">
              <div class="w-20 h-20 rounded-full flex items-center justify-center mb-4 transition-all duration-300 border-4 relative bg-slate-900"
                   :class="activeStep === 3 ? 'border-green-500 shadow-[0_0_20px_rgba(34,197,94,0.6)] scale-110' : 'border-slate-700 text-slate-500 hover:border-green-500/50'">
                <MonitorPlay size="32" :class="activeStep === 3 ? 'text-green-500' : ''" />
              </div>
              <h3 class="text-lg font-bold text-center transition-colors" :class="activeStep === 3 ? 'text-green-500' : 'text-slate-400'">الوسائط</h3>
            </div>

            <!-- Step 4 -->
            <div class="flex flex-col items-center group cursor-pointer" @click="activeStep = 4">
              <div class="w-20 h-20 rounded-full flex items-center justify-center mb-4 transition-all duration-300 border-4 relative bg-slate-900"
                   :class="activeStep === 4 ? 'border-orange-500 shadow-[0_0_20px_rgba(249,115,22,0.6)] scale-110' : 'border-slate-700 text-slate-500 hover:border-orange-500/50'">
                <ShieldCheck size="32" :class="activeStep === 4 ? 'text-orange-500' : ''" />
              </div>
              <h3 class="text-lg font-bold text-center transition-colors" :class="activeStep === 4 ? 'text-orange-500' : 'text-slate-400'">الثقافة الإعلامية</h3>
            </div>
          </div>
        </div>

        <!-- Content Area -->
        <div class="bg-slate-800 rounded-[2rem] p-8 md:p-12 border border-slate-700 shadow-2xl relative overflow-hidden min-h-[300px] flex items-center justify-center text-right">
          
          <Transition name="fade-slide" mode="out-in">
            <!-- Content 1 -->
            <div v-if="activeStep === 1" class="w-full max-w-3xl mx-auto" key="step1">
              <div class="flex items-center gap-4 mb-6">
                <div class="p-3 bg-primary/20 rounded-xl text-primary"><Database size="28"/></div>
                <h3 class="text-3xl font-bold text-white">البيانات والمعلومات والمعرفة</h3>
              </div>
              <div class="space-y-6 text-xl text-slate-300 leading-relaxed">
                <p><strong class="text-white">البيانات:</strong> حقائق وأرقام لم يتم معالجتها.</p>
                <p><strong class="text-white">المعلومات:</strong> بيانات تمت معالجتها لتعطي معنى.</p>
                <p><strong class="text-white">المعرفة:</strong> استخدام المعلومات لحل المشكلات أو اتخاذ قرار.</p>
                <div class="bg-slate-900/50 p-6 rounded-2xl border border-slate-700 text-lg mt-6">
                  <strong class="text-primary block mb-2">مثال يوضح الفرق:</strong>
                  الدرجات هي (بيانات) ➔ متوسط الدرجات هو (معلومات) ➔ قرار المذاكرة لتحسين المادة هو (معرفة).
                </div>
              </div>
            </div>

            <!-- Content 2 -->
            <div v-else-if="activeStep === 2" class="w-full max-w-3xl mx-auto" key="step2">
              <div class="flex items-center gap-4 mb-6">
                <div class="p-3 bg-accent/20 rounded-xl text-accent"><BookOpen size="28"/></div>
                <h3 class="text-3xl font-bold text-white">المصادر والتحقق المتبادل</h3>
              </div>
              <div class="space-y-6 text-xl text-slate-300 leading-relaxed">
                <p><strong class="text-white">المعلومات الأولية:</strong> تحصل عليها بنفسك (تجارب، استبيانات).</p>
                <p><strong class="text-white">المعلومات الثانوية:</strong> تحصل عليها عبر طرف ثالث (كتاب، مقال).</p>
                <div class="bg-slate-900/50 p-6 rounded-2xl border border-slate-700 mt-6">
                  <strong class="text-accent block mb-3 text-2xl">التحقق المتبادل (Cross-checking)</strong>
                  <p class="text-lg">هو مقارنة المعلومات التي تحصل عليها من مصادر متعددة مع بعضها لتحديد مدى دقتها وموثوقيتها وعدم الاكتفاء بمصدر واحد.</p>
                </div>
              </div>
            </div>

            <!-- Content 3 -->
            <div v-else-if="activeStep === 3" class="w-full max-w-3xl mx-auto" key="step3">
              <div class="flex items-center gap-4 mb-6">
                <div class="p-3 bg-green-500/20 rounded-xl text-green-500"><MonitorPlay size="28"/></div>
                <h3 class="text-3xl font-bold text-white">أنواع الوسائط (Media)</h3>
              </div>
              <div class="text-xl text-slate-300 leading-relaxed">
                <p class="mb-6">الوسائط هي وسائل لنقل المعلومات، وتنقسم إلى ثلاثة أنواع رئيسية:</p>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div class="bg-slate-900/50 p-6 rounded-2xl border border-slate-700">
                    <strong class="text-green-400 block mb-2">1. تعبيرية</strong>
                    <span class="text-base text-slate-400">للتعبير عن المعلومات (صورة، نص، صوت، فيديو)</span>
                  </div>
                  <div class="bg-slate-900/50 p-6 rounded-2xl border border-slate-700">
                    <strong class="text-green-400 block mb-2">2. نقل وإرسال</strong>
                    <span class="text-base text-slate-400">لنقل المعلومات (إنترنت، تلفزيون، راديو، هاتف)</span>
                  </div>
                  <div class="bg-slate-900/50 p-6 rounded-2xl border border-slate-700">
                    <strong class="text-green-400 block mb-2">3. تسجيل</strong>
                    <span class="text-base text-slate-400">لحفظ المعلومات (ورق، USB، سحابة، DVD)</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Content 4 -->
            <div v-else-if="activeStep === 4" class="w-full max-w-3xl mx-auto" key="step4">
              <div class="flex items-center gap-4 mb-6">
                <div class="p-3 bg-orange-500/20 rounded-xl text-orange-500"><ShieldCheck size="28"/></div>
                <h3 class="text-3xl font-bold text-white">الثقافة الإعلامية (Media Literacy)</h3>
              </div>
              <div class="space-y-6 text-xl text-slate-300 leading-relaxed">
                <p>هي القدرة على <strong>تفسير المعلومات</strong> التي يتم الحصول عليها من الوسائط بدقة وتحليلها.</p>
                <p>لا يجب أن نقبل كل ما يتم نشره بدون تفكير نقدي وبحث، لأن خاصيتي الاستمرارية والانتشار تجعلان من السهل بقاء وانتشار الأخبار المضللة.</p>
                <div class="bg-orange-500/10 p-6 rounded-2xl border border-orange-500/20 text-lg mt-6">
                  <strong class="text-orange-400 block mb-2">تذكر دائماً:</strong>
                  مجرد وجود المعلومة في فيديو أو خبر لا يعني أنها صحيحة، تأكد من المصدر واستخدم التحقق المتبادل.
                </div>
              </div>
            </div>
          </Transition>
          
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
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.3s ease;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
