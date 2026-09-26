<template>
  <section id="industry" class="py-20 bg-gray-50 border-t border-gray-200">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 flex items-center justify-center gap-3">
          <span class="text-4xl">🏭</span> الذكاء الاصطناعي في الصناعة
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          في الصناعة، يمكن استخدام الذكاء الاصطناعي لتحليل الصور الطبية، والتنبؤ بأعطال الآلات، وتحسين مسارات التوصيل.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <!-- 1. Healthcare -->
        <div class="bg-white rounded-3xl p-8 border border-blue-100 shadow-md hover:shadow-xl transition-all duration-300">
          <div class="flex items-center justify-center gap-3 mb-6 border-b border-gray-100 pb-4">
             <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl">🏥</div>
             <h3 class="text-2xl font-bold text-blue-900">الرعاية الصحية</h3>
          </div>
          
          <ul class="text-gray-700 text-sm mb-6 space-y-2">
            <li class="flex items-start gap-2"><span class="text-blue-500">✓</span> التشخيص بالصور</li>
            <li class="flex items-start gap-2"><span class="text-blue-500">✓</span> الكشف عن الأمراض من صور الأشعة السينية والتصوير المقطعي</li>
            <li class="flex items-start gap-2"><span class="text-blue-500">✓</span> دعم اكتشاف الأدوية</li>
          </ul>

          <div class="bg-gray-50 rounded-2xl p-6 border border-gray-200 text-center cursor-pointer group hover:shadow-md transition-all duration-300 relative overflow-hidden" @click="analyzeXray = !analyzeXray">
            <!-- Decorative background -->
            <div class="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-transparent opacity-0 transition-opacity duration-500" :class="{ 'opacity-100': analyzeXray }"></div>
            
            <div class="flex items-center justify-between relative z-10">
              <!-- Input (RTL: Right) -->
              <div class="flex flex-col items-center w-1/3">
                <div class="w-14 h-14 bg-white rounded-2xl border border-gray-200 shadow-sm flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  <Scan class="w-7 h-7 text-gray-500" />
                </div>
                <span class="text-sm font-bold text-gray-600">صورة أشعة</span>
              </div>
              
              <!-- Action (Middle) -->
              <div class="flex-1 flex flex-col items-center justify-center px-2">
                <div class="w-full h-1 bg-gray-200 rounded-full relative mb-4">
                  <div class="absolute right-0 top-0 h-full bg-blue-500 rounded-full transition-all duration-1000 ease-in-out"
                       :style="{ width: analyzeXray ? '100%' : '0%' }"></div>
                </div>
                <div class="text-sm font-bold px-4 py-2 rounded-xl transition-all duration-300"
                     :class="analyzeXray ? 'bg-blue-100 text-blue-700' : 'bg-white border border-gray-200 text-gray-500 shadow-sm group-hover:border-blue-300 group-hover:text-blue-500'">
                  {{ analyzeXray ? 'تم التحليل ✨' : 'اضغط للتحليل 👈' }}
                </div>
              </div>
              
              <!-- Output (RTL: Left) -->
              <div class="flex flex-col items-center w-1/3 transition-all duration-500"
                   :class="analyzeXray ? 'opacity-100' : 'opacity-40 grayscale blur-[1px]'">
                <div class="w-14 h-14 bg-white rounded-2xl border transition-colors duration-500 shadow-sm flex items-center justify-center mb-3"
                     :class="analyzeXray ? 'border-green-200 bg-green-50/50' : 'border-gray-200'">
                  <Stethoscope class="w-7 h-7 transition-colors duration-500" :class="analyzeXray ? 'text-green-600' : 'text-gray-400'" />
                </div>
                <span class="text-sm font-bold transition-colors duration-500" :class="analyzeXray ? 'text-green-700' : 'text-gray-500'">نتيجة مساعدة</span>
              </div>
            </div>
            
            <div v-if="analyzeXray" class="mt-5 p-3 bg-yellow-50/80 text-yellow-800 text-xs rounded-xl border border-yellow-200/60 animate-fade-in flex items-center gap-2 text-right relative z-10">
              <AlertTriangle class="w-5 h-5 text-yellow-600 flex-shrink-0" />
              <span class="leading-relaxed text-sm"><strong>تنبيه:</strong> القرار النهائي يجب أن يظل تحت إشراف الطبيب البشري.</span>
            </div>
          </div>
        </div>

        <!-- 2. Agriculture -->
        <div class="bg-white rounded-3xl p-8 border border-green-100 shadow-md hover:shadow-xl transition-all duration-300">
          <div class="flex items-center justify-center gap-3 mb-6 border-b border-gray-100 pb-4">
             <div class="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-2xl">🌾</div>
             <h3 class="text-2xl font-bold text-green-900">الزراعة</h3>
          </div>
          
          <ul class="text-gray-700 text-sm mb-6 space-y-2">
            <li class="flex items-start gap-2"><span class="text-green-500">✓</span> التنبؤ بموعد الحصاد</li>
            <li class="flex items-start gap-2"><span class="text-green-500">✓</span> الكشف عن الآفات والأمراض</li>
          </ul>

          <div class="bg-gray-50 rounded-2xl p-4 border border-gray-200">
            <div class="flex justify-around items-center mb-4">
              <div class="text-center cursor-pointer hover:scale-110 transition-transform" @click="plantState = 'healthy'">
                <span class="text-4xl">🌿</span>
                <p class="text-xs text-gray-500 mt-1">نبات 1</p>
              </div>
              <div class="text-center cursor-pointer hover:scale-110 transition-transform" @click="plantState = 'sick'">
                <span class="text-4xl opacity-80">🥀</span>
                <p class="text-xs text-gray-500 mt-1">نبات 2</p>
              </div>
            </div>
            
            <div class="bg-white p-3 rounded-xl border border-gray-200 text-center min-h-[80px] flex flex-col justify-center">
              <span v-if="!plantState" class="text-sm text-gray-500">اضغط على أحد النباتات لتحليله بالذكاء الاصطناعي</span>
              <div v-else-if="plantState === 'healthy'" class="animate-fade-in text-green-700 font-bold">
                ✅ AI: النبات سليم 100%
              </div>
              <div v-else-if="plantState === 'sick'" class="animate-fade-in text-red-600 font-bold">
                ⚠️ AI: تم اكتشاف آفة زراعية! ينصح بالتدخل.
              </div>
            </div>
          </div>
        </div>

        <!-- 3. Manufacturing -->
        <div class="bg-white rounded-3xl p-8 border border-orange-100 shadow-md hover:shadow-xl transition-all duration-300">
          <div class="flex items-center justify-center gap-3 mb-6 border-b border-gray-100 pb-4">
             <div class="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-2xl">🏭</div>
             <h3 class="text-2xl font-bold text-orange-900">التصنيع</h3>
          </div>
          
          <ul class="text-gray-700 text-sm mb-6 space-y-2">
            <li class="flex items-start gap-2"><span class="text-orange-500">✓</span> أتمتة فحص جودة المنتج</li>
            <li class="flex items-start gap-2"><span class="text-orange-500">✓</span> الصيانة التنبؤية</li>
          </ul>

          <div class="bg-gray-50 rounded-2xl p-4 border border-gray-200 text-center overflow-hidden relative">
            <div class="flex justify-center items-center gap-4 mb-4">
              <span class="text-4xl" :class="machineRunning ? 'animate-spin-slow' : ''">⚙️</span>
              <span class="text-4xl" :class="machineRunning ? 'animate-spin-slow-reverse' : ''">⚙️</span>
            </div>
            <button @click="machineRunning = !machineRunning" class="px-4 py-2 bg-orange-100 hover:bg-orange-200 text-orange-800 rounded-lg text-sm font-bold mb-3 transition-colors">
              {{ machineRunning ? 'إيقاف الآلة' : 'تشغيل الآلة' }}
            </button>
            <p class="text-xs text-gray-600 bg-white p-2 rounded border border-gray-100">
              <strong class="text-orange-700">الصيانة التنبؤية:</strong> تساعد على التنبؤ بأعطال الآلات قبل وقوعها من خلال تحليل أصواتها واهتزازاتها أثناء التشغيل.
            </p>
          </div>
        </div>

        <!-- 4. Logistics -->
        <div class="bg-white rounded-3xl p-8 border border-teal-100 shadow-md hover:shadow-xl transition-all duration-300">
          <div class="flex items-center justify-center gap-3 mb-6 border-b border-gray-100 pb-4">
             <div class="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-2xl">🚚</div>
             <h3 class="text-2xl font-bold text-teal-900">الخدمات اللوجستية</h3>
          </div>
          
          <ul class="text-gray-700 text-sm mb-6 space-y-2">
            <li class="flex items-start gap-2"><span class="text-teal-500">✓</span> تحسين مسارات التوصيل</li>
            <li class="flex items-start gap-2"><span class="text-teal-500">✓</span> تقليل استهلاك الوقود والوقت</li>
          </ul>

          <div class="bg-gray-50 rounded-2xl p-4 border border-gray-200 text-center cursor-pointer" @click="optimizeRoute = !optimizeRoute">
             <div class="h-32 relative bg-white border border-gray-200 rounded-xl mb-2 overflow-hidden flex items-center justify-center">
               <span class="absolute top-2 right-2 text-xl z-10">🏢 مستودع</span>
               <span class="absolute bottom-2 left-2 text-xl z-10">🏠 عميل</span>
               
               <!-- Bad Route -->
               <svg v-if="!optimizeRoute" class="w-full h-full absolute inset-0 text-red-400 animate-dash" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M 80,20 Q 50,50 80,80 Q 20,80 20,80" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="4,4" />
               </svg>
               
               <!-- AI Route -->
               <svg v-if="optimizeRoute" class="w-full h-full absolute inset-0 text-teal-500 animate-dash" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M 80,20 L 20,80" fill="none" stroke="currentColor" stroke-width="3" stroke-dasharray="6,4" />
               </svg>
             </div>
             
             <span class="text-sm font-bold" :class="optimizeRoute ? 'text-teal-600' : 'text-gray-500'">
               {{ optimizeRoute ? 'مسار محسّن بواسطة الذكاء الاصطناعي ✨' : 'مسار عادي (اضغط للتحسين)' }}
             </span>
          </div>
        </div>

      </div>

      <!-- Interactive Industry Explorer -->
      <div class="mt-20 max-w-5xl mx-auto">
        <div class="text-center mb-10">
          <h3 class="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">
            <span class="text-3xl">🌍</span> استكشف استخدام الذكاء الاصطناعي في الصناعات
          </h3>
          <p class="text-gray-600">اختر إحدى الصناعات لتعرف كيف غيّرها الذكاء الاصطناعي وما هي التحديات.</p>
        </div>

        <div class="flex flex-wrap justify-center gap-4 mb-8">
          <button v-for="(ind, key) in industriesData" :key="key" 
                  @click="selectedIndustry = key as string"
                  :class="selectedIndustry === key ? 'bg-blue-600 text-white shadow-lg scale-105' : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'"
                  class="px-6 py-3 rounded-xl font-bold transition-all duration-300 flex items-center gap-2">
            <span class="text-2xl">{{ ind.icon }}</span> {{ ind.name }}
          </button>
        </div>

        <transition name="fade-slide" mode="out-in">
          <div :key="selectedIndustry" class="bg-white rounded-3xl p-8 border border-gray-200 shadow-xl relative overflow-hidden">
            <div class="absolute top-0 left-0 w-full h-2" :class="industriesData[selectedIndustry].color"></div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div class="space-y-6">
                <div>
                  <h4 class="text-lg font-bold text-gray-500 mb-2">المشكلة</h4>
                  <p class="text-gray-900 font-semibold bg-gray-50 p-4 rounded-xl">{{ industriesData[selectedIndustry].problem }}</p>
                </div>
                <div>
                  <h4 class="text-lg font-bold text-blue-600 mb-2">كيف يستخدم AI؟</h4>
                  <p class="text-gray-900 font-semibold bg-blue-50 p-4 rounded-xl">{{ industriesData[selectedIndustry].how }}</p>
                </div>
                <div>
                  <h4 class="text-lg font-bold text-purple-600 mb-2">البيانات المستخدمة</h4>
                  <p class="text-gray-900 font-semibold bg-purple-50 p-4 rounded-xl">{{ industriesData[selectedIndustry].data }}</p>
                </div>
              </div>
              
              <div class="space-y-6">
                <div>
                  <h4 class="text-lg font-bold text-green-600 mb-2 flex items-center gap-2"><span class="text-xl">✅</span> الفائدة</h4>
                  <div class="bg-green-50 p-4 rounded-xl border border-green-100 h-full">
                    <p class="text-green-900 font-semibold">{{ industriesData[selectedIndustry].benefit }}</p>
                  </div>
                </div>
                <div>
                  <h4 class="text-lg font-bold text-red-600 mb-2 flex items-center gap-2"><span class="text-xl">⚠️</span> الخطر المحتمل</h4>
                  <div class="bg-red-50 p-4 rounded-xl border border-red-100 h-full">
                    <p class="text-red-900 font-semibold">{{ industriesData[selectedIndustry].risk }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { Scan, Stethoscope, AlertTriangle } from 'lucide-vue-next';

const analyzeXray = ref(false);
const plantState = ref<string | null>(null);
const machineRunning = ref(false);
const optimizeRoute = ref(false);

const selectedIndustry = ref('healthcare');

const industriesData = reactive<Record<string, any>>({
  healthcare: {
    name: 'الرعاية الصحية',
    icon: '🏥',
    color: 'bg-blue-500',
    problem: 'صعوبة اكتشاف الأمراض الدقيقة في صور الأشعة والوقت الطويل الذي يستغرقه ذلك.',
    how: 'يحلل الذكاء الاصطناعي صور الأشعة ويقارنها بملايين الصور لتحديد الأنماط الشاذة.',
    data: 'صور أشعة سينية (X-Rays)، تصوير مقطعي (CT scans)، وتاريخ طبي سابق.',
    benefit: 'سرعة التشخيص وتقليل نسبة الخطأ البشري، مما يساعد على إنقاذ الأرواح.',
    risk: 'قد يخطئ في التشخيص (هلوسة) أو يعتمد على بيانات متحيزة، لذلك يجب مراجعة الطبيب.'
  },
  agriculture: {
    name: 'الزراعة',
    icon: '🌾',
    color: 'bg-green-500',
    problem: 'صعوبة التنبؤ بأوقات الحصاد واكتشاف الأمراض الزراعية مبكراً في المساحات الشاسعة.',
    how: 'استخدام الطائرات بدون طيار (الدرونز) ومستشعرات التربة لتحليل صحة المحاصيل.',
    data: 'صور من الأقمار الصناعية والدرونز، بيانات التربة، الرطوبة، والطقس.',
    benefit: 'زيادة إنتاجية المحاصيل وتقليل استخدام المبيدات الكيميائية.',
    risk: 'قد يؤدي الاعتماد المفرط عليه إلى خسائر كبيرة إذا تعطل النظام ولم يلاحظ المزارع المشكلة.'
  },
  manufacturing: {
    name: 'التصنيع',
    icon: '🏭',
    color: 'bg-orange-500',
    problem: 'أعطال الآلات المفاجئة التي توقف الإنتاج وعيوب التصنيع التي لا تُرى بالعين المجردة.',
    how: 'الصيانة التنبؤية وكاميرات الفحص الآلي في خطوط الإنتاج.',
    data: 'اهتزازات الآلات، أصوات التشغيل، درجات الحرارة، وصور المنتجات.',
    benefit: 'تقليل التكاليف الناتجة عن توقف المصنع وتحسين جودة المنتجات بشكل كبير.',
    risk: 'تسريح العمالة بسبب الأتمتة الكاملة ومخاطر الأمن السيبراني في المصانع المتصلة بالإنترنت.'
  },
  logistics: {
    name: 'الخدمات اللوجستية',
    icon: '🚚',
    color: 'bg-teal-500',
    problem: 'تأخير التوصيل، استهلاك الكثير من الوقود، وتحديد المسار الأفضل للشاحنات.',
    how: 'حساب ملايين الاحتمالات لاختيار الطريق الأسرع والأكثر توفيراً للوقود في الوقت الفعلي.',
    data: 'حالة المرور، حالة الطقس، خرائط الطرق، وأماكن التسليم.',
    benefit: 'سرعة وصول الشحنات للعملاء وتقليل التلوث وانبعاثات الكربون.',
    risk: 'قد يوجه السائقين إلى طرق خطرة أو غير مهيأة إذا لم يتم تحديث الخرائط بدقة.'
  }
});
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.5s ease-in;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.animate-spin-slow {
  animation: spin 4s linear infinite;
}

.animate-spin-slow-reverse {
  animation: spinReverse 4s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes spinReverse {
  from { transform: rotate(360deg); }
  to { transform: rotate(0deg); }
}

.animate-dash {
  animation: dash 2s linear infinite;
}
@keyframes dash {
  to {
    stroke-dashoffset: -20;
  }
}
</style>
