<template>
  <section id="final-review" class="min-h-screen relative flex flex-col pt-32 pb-24 px-6 sm:px-12 bg-surface overflow-hidden">
    <!-- Decorative background elements -->
    <div class="absolute top-1/4 -right-64 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
    <div class="absolute bottom-0 -left-64 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px] pointer-events-none"></div>

    <div class="max-w-7xl mx-auto w-full relative z-10 flex flex-col gap-16">
      
      <!-- Header Section -->
      <div class="text-center max-w-4xl mx-auto">
        <h2 class="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-maintext to-mutedtext mb-6 tracking-tight">من البيانات إلى المعرفة</h2>
        <div class="inline-block bg-primary/10 text-primary font-bold px-8 py-3 rounded-full mb-8 border border-primary/20 shadow-[0_0_20px_rgba(var(--color-primary),0.15)] backdrop-blur-md">
          المراجعة الشاملة
        </div>
        <p class="text-xl md:text-2xl text-mutedtext leading-relaxed font-medium">
          اضغط على كل مرحلة لتتذكر أهم ما تعلمناه في هذا الدرس.
        </p>
      </div>

      <div class="relative w-full max-w-5xl mx-auto flex flex-col gap-16">
        
        <!-- Steps Navigation -->
        <div class="relative w-full">
          <!-- Connecting Line -->
          <div class="absolute top-[40px] right-[12.5%] left-[12.5%] h-1.5 bg-border rounded-full hidden md:block z-0 overflow-hidden backdrop-blur-sm" dir="rtl">
            <div class="absolute top-0 right-0 h-full transition-all duration-700 ease-in-out shadow-[0_0_10px_currentColor]"
                 :class="[
                   activeStep === 1 ? 'bg-primary text-primary' : '',
                   activeStep === 2 ? 'bg-accent text-accent' : '',
                   activeStep === 3 ? 'bg-green-500 text-green-500' : '',
                   activeStep === 4 ? 'bg-orange-500 text-orange-500' : ''
                 ]"
                 :style="{ width: ((activeStep - 1) / 3) * 100 + '%' }">
            </div>
          </div>
          
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
            <!-- Step 1 -->
            <div class="flex flex-col items-center group cursor-pointer" @click="activeStep = 1">
              <div class="w-20 h-20 rounded-full flex items-center justify-center mb-4 transition-all duration-500 border-4 relative"
                   :class="activeStep === 1 ? 'bg-background border-primary shadow-[0_0_30px_rgba(var(--color-primary),0.3)] scale-110' : 'bg-background border-border text-mutedtext group-hover:border-primary/50 group-hover:text-primary/70'">
                <Database size="32" :class="activeStep === 1 ? 'text-primary' : ''" />
              </div>
              <h3 class="text-lg font-bold text-center transition-colors duration-300" :class="activeStep === 1 ? 'text-maintext' : 'text-mutedtext'">البيانات والمعرفة</h3>
            </div>

            <!-- Step 2 -->
            <div class="flex flex-col items-center group cursor-pointer" @click="activeStep = 2">
              <div class="w-20 h-20 rounded-full flex items-center justify-center mb-4 transition-all duration-500 border-4 relative"
                   :class="activeStep === 2 ? 'bg-background border-accent shadow-[0_0_30px_rgba(var(--color-accent),0.3)] scale-110' : 'bg-background border-border text-mutedtext group-hover:border-accent/50 group-hover:text-accent/70'">
                <BookOpen size="32" :class="activeStep === 2 ? 'text-accent' : ''" />
              </div>
              <h3 class="text-lg font-bold text-center transition-colors duration-300" :class="activeStep === 2 ? 'text-maintext' : 'text-mutedtext'">المصادر والتحقق</h3>
            </div>

            <!-- Step 3 -->
            <div class="flex flex-col items-center group cursor-pointer" @click="activeStep = 3">
              <div class="w-20 h-20 rounded-full flex items-center justify-center mb-4 transition-all duration-500 border-4 relative"
                   :class="activeStep === 3 ? 'bg-background border-green-500 shadow-[0_0_30px_rgba(34,197,94,0.3)] scale-110' : 'bg-background border-border text-mutedtext group-hover:border-green-500/50 group-hover:text-green-500/70'">
                <MonitorPlay size="32" :class="activeStep === 3 ? 'text-green-500' : ''" />
              </div>
              <h3 class="text-lg font-bold text-center transition-colors duration-300" :class="activeStep === 3 ? 'text-maintext' : 'text-mutedtext'">الوسائط</h3>
            </div>

            <!-- Step 4 -->
            <div class="flex flex-col items-center group cursor-pointer" @click="activeStep = 4">
              <div class="w-20 h-20 rounded-full flex items-center justify-center mb-4 transition-all duration-500 border-4 relative"
                   :class="activeStep === 4 ? 'bg-background border-orange-500 shadow-[0_0_30px_rgba(249,115,22,0.3)] scale-110' : 'bg-background border-border text-mutedtext group-hover:border-orange-500/50 group-hover:text-orange-500/70'">
                <ShieldCheck size="32" :class="activeStep === 4 ? 'text-orange-500' : ''" />
              </div>
              <h3 class="text-lg font-bold text-center transition-colors duration-300" :class="activeStep === 4 ? 'text-maintext' : 'text-mutedtext'">الثقافة الإعلامية</h3>
            </div>
          </div>
        </div>

        <!-- Content Area -->
        <div class="bg-background/60 backdrop-blur-2xl rounded-[2.5rem] p-8 md:p-14 border border-white/40 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.08)] relative overflow-hidden min-h-[450px] flex items-center justify-center text-right">
          <!-- Inner glow effect -->
          <div class="absolute inset-0 bg-gradient-to-b from-white/40 dark:from-white/5 to-transparent pointer-events-none"></div>

          <Transition name="fade-slide" mode="out-in">
            <!-- Content 1 -->
            <div v-if="activeStep === 1" class="w-full max-w-3xl mx-auto relative z-10" key="step1">
              <div class="flex items-center gap-5 mb-8">
                <div class="p-4 bg-gradient-to-br from-primary/30 to-primary/5 rounded-2xl border border-primary/20 text-primary shadow-[0_0_20px_rgba(var(--color-primary),0.2)]">
                  <Database size="32"/>
                </div>
                <h3 class="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-l from-maintext to-mutedtext">البيانات والمعلومات والمعرفة</h3>
              </div>
              
              <div class="space-y-6 text-xl text-mutedtext leading-relaxed">
                <div class="flex items-start gap-4">
                  <div class="w-2 h-2 rounded-full bg-mutedtext mt-3 flex-shrink-0"></div>
                  <p><strong class="text-maintext text-2xl font-bold">البيانات:</strong> حقائق وأرقام لم يتم معالجتها.</p>
                </div>
                <div class="flex items-start gap-4">
                  <div class="w-2 h-2 rounded-full bg-mutedtext mt-3 flex-shrink-0"></div>
                  <p><strong class="text-maintext text-2xl font-bold">المعلومات:</strong> بيانات تمت معالجتها لتعطي معنى.</p>
                </div>
                <div class="flex items-start gap-4">
                  <div class="w-2 h-2 rounded-full bg-mutedtext mt-3 flex-shrink-0"></div>
                  <p><strong class="text-maintext text-2xl font-bold">المعرفة:</strong> استخدام المعلومات لحل المشكلات أو اتخاذ قرار.</p>
                </div>

                <div class="relative overflow-hidden bg-primary/5 p-8 rounded-3xl border border-primary/20 mt-10 group hover:bg-primary/10 transition-colors shadow-sm">
                  <div class="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -mr-16 -mt-16 pointer-events-none"></div>
                  <div class="relative z-10">
                    <strong class="text-primary text-xl flex items-center gap-2 mb-6">
                      <Zap size="24" class="text-primary" />
                      مثال يوضح الفرق:
                    </strong>
                    <div class="flex flex-wrap items-center gap-3 text-lg text-maintext font-medium">
                      <span class="bg-surface/80 px-5 py-3 rounded-2xl border border-border shadow-sm">الدرجات (بيانات)</span>
                      <ArrowLeft size="20" class="text-primary/60" />
                      <span class="bg-surface/80 px-5 py-3 rounded-2xl border border-border shadow-sm">متوسط الدرجات (معلومات)</span>
                      <ArrowLeft size="20" class="text-primary/60" />
                      <span class="bg-primary/10 px-5 py-3 rounded-2xl border border-primary/30 text-primary font-bold shadow-[0_0_15px_rgba(var(--color-primary),0.2)]">قرار المذاكرة (معرفة)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Content 2 -->
            <div v-else-if="activeStep === 2" class="w-full max-w-3xl mx-auto relative z-10" key="step2">
              <div class="flex items-center gap-5 mb-8">
                <div class="p-4 bg-gradient-to-br from-accent/30 to-accent/5 rounded-2xl border border-accent/20 text-accent shadow-[0_0_20px_rgba(var(--color-accent),0.2)]">
                  <BookOpen size="32"/>
                </div>
                <h3 class="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-l from-maintext to-mutedtext">المصادر والتحقق المتبادل</h3>
              </div>
              
              <div class="space-y-6 text-xl text-mutedtext leading-relaxed">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div class="bg-surface/60 p-8 rounded-3xl border border-border hover:border-accent/30 transition-colors shadow-sm">
                    <div class="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-5 text-accent text-2xl font-bold">1</div>
                    <strong class="text-maintext text-2xl block mb-3">المعلومات الأولية</strong>
                    <p class="text-lg text-mutedtext">تحصل عليها بنفسك من خلال التجارب أو الاستبيانات.</p>
                  </div>
                  <div class="bg-surface/60 p-8 rounded-3xl border border-border hover:border-accent/30 transition-colors shadow-sm">
                    <div class="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-5 text-accent text-2xl font-bold">2</div>
                    <strong class="text-maintext text-2xl block mb-3">المعلومات الثانوية</strong>
                    <p class="text-lg text-mutedtext">تحصل عليها عبر طرف ثالث مثل كتاب، مقال، أو إنترنت.</p>
                  </div>
                </div>

                <div class="bg-accent/5 p-8 rounded-3xl border border-accent/20 relative overflow-hidden shadow-sm mt-4">
                  <div class="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl -mr-16 -mt-16 pointer-events-none"></div>
                  <div class="relative z-10">
                    <strong class="text-accent flex items-center gap-3 mb-4 text-2xl font-bold">
                      <ShieldCheck size="28" />
                      التحقق المتبادل (Cross-checking)
                    </strong>
                    <p class="text-lg text-maintext font-medium leading-relaxed">
                      هو مقارنة المعلومات التي تحصل عليها من مصادر متعددة مع بعضها لتحديد مدى دقتها وموثوقيتها وعدم الاكتفاء بمصدر واحد.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Content 3 -->
            <div v-else-if="activeStep === 3" class="w-full max-w-3xl mx-auto relative z-10" key="step3">
              <div class="flex items-center gap-5 mb-8">
                <div class="p-4 bg-gradient-to-br from-green-500/30 to-green-500/5 rounded-2xl border border-green-500/20 text-green-500 shadow-[0_0_20px_rgba(34,197,94,0.2)]">
                  <MonitorPlay size="32"/>
                </div>
                <h3 class="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-l from-maintext to-mutedtext">أنواع الوسائط (Media)</h3>
              </div>
              
              <div class="text-xl text-mutedtext leading-relaxed">
                <p class="mb-8 text-2xl font-medium text-maintext">الوسائط هي وسائل لنقل المعلومات، وتنقسم إلى ثلاثة أنواع رئيسية:</p>
                
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div class="bg-surface/60 p-8 rounded-3xl border border-border hover:-translate-y-2 hover:border-green-500/40 transition-all duration-300 group shadow-sm hover:shadow-md">
                    <div class="w-14 h-14 rounded-2xl bg-green-500/10 border border-green-500/20 text-green-500 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-green-500/20 transition-all">
                      <Image size="28" />
                    </div>
                    <strong class="text-maintext text-xl block mb-3">1. تعبيرية</strong>
                    <span class="text-base text-mutedtext block leading-relaxed">للتعبير عن المعلومات كالصورة، النص، الصوت، أو الفيديو.</span>
                  </div>
                  <div class="bg-surface/60 p-8 rounded-3xl border border-border hover:-translate-y-2 hover:border-green-500/40 transition-all duration-300 group shadow-sm hover:shadow-md">
                    <div class="w-14 h-14 rounded-2xl bg-green-500/10 border border-green-500/20 text-green-500 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-green-500/20 transition-all">
                      <Wifi size="28" />
                    </div>
                    <strong class="text-maintext text-xl block mb-3">2. نقل وإرسال</strong>
                    <span class="text-base text-mutedtext block leading-relaxed">لنقل المعلومات عبر الإنترنت، التلفزيون، الراديو، أو الهاتف.</span>
                  </div>
                  <div class="bg-surface/60 p-8 rounded-3xl border border-border hover:-translate-y-2 hover:border-green-500/40 transition-all duration-300 group shadow-sm hover:shadow-md">
                    <div class="w-14 h-14 rounded-2xl bg-green-500/10 border border-green-500/20 text-green-500 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-green-500/20 transition-all">
                      <Save size="28" />
                    </div>
                    <strong class="text-maintext text-xl block mb-3">3. تسجيل</strong>
                    <span class="text-base text-mutedtext block leading-relaxed">لحفظ المعلومات كالورق، USB، السحابة، أو أقراص DVD.</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Content 4 -->
            <div v-else-if="activeStep === 4" class="w-full max-w-3xl mx-auto relative z-10" key="step4">
              <div class="flex items-center gap-5 mb-8">
                <div class="p-4 bg-gradient-to-br from-orange-500/30 to-orange-500/5 rounded-2xl border border-orange-500/20 text-orange-500 shadow-[0_0_20px_rgba(249,115,22,0.2)]">
                  <ShieldCheck size="32"/>
                </div>
                <h3 class="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-l from-maintext to-mutedtext">الثقافة الإعلامية (Media Literacy)</h3>
              </div>
              
              <div class="space-y-6 text-xl text-mutedtext leading-relaxed">
                <p class="text-2xl font-medium leading-loose text-maintext">
                  هي القدرة على <strong class="text-maintext bg-orange-500/10 px-3 py-1.5 rounded-xl border border-orange-500/20">تفسير المعلومات</strong> التي يتم الحصول عليها من الوسائط بدقة وتحليلها ومشاركتها بشكل مسؤول.
                </p>
                
                <div class="flex gap-5 items-start bg-orange-500/5 p-8 rounded-3xl border border-orange-500/20 mt-8">
                  <AlertTriangle size="32" class="text-orange-500 flex-shrink-0 mt-1" />
                  <p class="text-lg text-maintext leading-relaxed font-medium">
                    لا يجب أن نقبل كل ما يتم نشره بدون تفكير نقدي وبحث، لأن خاصيتي الاستمرارية والانتشار تجعلان من السهل بقاء وانتشار الأخبار المضللة والشائعات.
                  </p>
                </div>

                <div class="bg-gradient-to-r from-orange-500/10 to-orange-500/5 p-8 rounded-3xl border border-orange-500/20 mt-6 relative overflow-hidden shadow-sm">
                  <div class="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl -mr-16 -mt-16 pointer-events-none"></div>
                  <div class="relative z-10">
                    <strong class="text-orange-500 block mb-4 text-2xl flex items-center gap-3">
                      <Lightbulb size="28" />
                      تذكر دائماً:
                    </strong>
                    <p class="text-xl text-maintext font-bold">
                      مجرد وجود المعلومة في فيديو أو خبر لا يعني أنها صحيحة، تأكد من المصدر واستخدم التحقق المتبادل.
                    </p>
                  </div>
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
import { Database, BookOpen, MonitorPlay, ShieldCheck, Zap, ArrowLeft, Image, Wifi, Save, AlertTriangle, Lightbulb } from 'lucide-vue-next'

const activeStep = ref(1)
</script>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(20px) scale(0.98);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-20px) scale(0.98);
}
</style>
