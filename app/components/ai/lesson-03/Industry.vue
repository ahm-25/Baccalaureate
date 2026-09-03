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
          <div class="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
             <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl">🏥</div>
             <h3 class="text-2xl font-bold text-blue-900">الرعاية الصحية</h3>
          </div>
          
          <ul class="text-gray-700 text-sm mb-6 space-y-2">
            <li class="flex items-start gap-2"><span class="text-blue-500">✓</span> التشخيص بالصور</li>
            <li class="flex items-start gap-2"><span class="text-blue-500">✓</span> الكشف عن الأمراض من صور الأشعة السينية والتصوير المقطعي</li>
            <li class="flex items-start gap-2"><span class="text-blue-500">✓</span> دعم اكتشاف الأدوية</li>
          </ul>

          <div class="bg-gray-50 rounded-2xl p-4 border border-gray-200 text-center cursor-pointer group" @click="analyzeXray = !analyzeXray">
            <div class="flex items-center justify-center gap-4">
              <div class="flex flex-col items-center">
                <span class="text-3xl mb-2 grayscale opacity-70">🩻</span>
                <span class="text-xs text-gray-500">صورة أشعة</span>
              </div>
              
              <div class="text-gray-400 font-bold">
                <span v-if="!analyzeXray">← اضغط للتحليل →</span>
                <span v-else class="text-blue-500">AI يحلل الأنماط</span>
              </div>
              
              <div class="flex flex-col items-center transition-all duration-500" :class="analyzeXray ? 'opacity-100 scale-110' : 'opacity-30 blur-sm'">
                <span class="text-3xl mb-2 text-green-500">🩺</span>
                <span class="text-xs font-bold text-green-600">نتيجة مساعدة للطبيب</span>
              </div>
            </div>
            
            <div v-if="analyzeXray" class="mt-4 p-2 bg-yellow-50 text-yellow-800 text-xs rounded border border-yellow-200 animate-fade-in">
              <strong>تنبيه:</strong> القرار النهائي يجب أن يظل تحت إشراف الطبيب.
            </div>
          </div>
        </div>

        <!-- 2. Agriculture -->
        <div class="bg-white rounded-3xl p-8 border border-green-100 shadow-md hover:shadow-xl transition-all duration-300">
          <div class="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
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
          <div class="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
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
          <div class="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
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
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const analyzeXray = ref(false);
const plantState = ref<string | null>(null);
const machineRunning = ref(false);
const optimizeRoute = ref(false);
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
