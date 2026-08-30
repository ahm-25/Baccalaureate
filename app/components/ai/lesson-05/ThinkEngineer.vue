<template>
  <section id="think-engineer" class="py-20 bg-green-50">
    <div class="container mx-auto px-6 max-w-5xl">
      <div class="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-green-200">
        <h2 class="text-3xl font-extrabold text-green-800 mb-6 flex items-center gap-3">
          <span class="text-4xl text-green-500">🌾</span> فكر كمهندس ذكاء اصطناعي
        </h2>
        
        <p class="text-xl text-gray-800 leading-relaxed mb-8">
          <strong>الموقف:</strong> يريد مزارع استخدام نظام ذكاء اصطناعي (تحديداً التعلم الآلي) للتمييز بين صور المحاصيل السليمة والمصابة بالأمراض، لكي يرش المبيدات على النباتات المريضة فقط ويوفر التكاليف.
        </p>

        <!-- Visual Flow -->
        <div class="bg-green-50 rounded-2xl p-6 mb-12 border border-green-100 overflow-x-auto">
          <div class="flex flex-col md:flex-row items-center justify-between gap-4 min-w-[600px]">
            
            <!-- Data -->
            <div class="flex flex-col gap-2 items-center bg-white p-4 rounded-xl shadow-sm border border-gray-100 w-48">
              <span class="text-sm font-bold text-gray-500 mb-2">بيانات التدريب</span>
              <div class="flex gap-2">
                <div class="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center text-2xl border border-green-200" title="نبات سليم">🌿</div>
                <div class="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center text-2xl border border-red-200" title="نبات مريض">🥀</div>
              </div>
              <span class="text-xs text-gray-400 mt-1">آلاف الصور المصنفة</span>
            </div>

            <div class="text-green-400 text-2xl font-bold animate-pulse">➡</div>

            <!-- Model -->
            <div class="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-xl shadow-md w-48 text-center relative overflow-hidden group">
               <div class="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
               <span class="text-3xl block mb-2">🧠</span>
               <span class="font-bold">نموذج التعلم الآلي</span>
            </div>

            <div class="text-green-400 text-2xl font-bold animate-pulse">➡</div>

            <!-- Prediction -->
            <div class="bg-white p-4 rounded-xl shadow-sm border border-gray-100 w-48 text-center">
               <span class="text-sm font-bold text-gray-500 mb-2 block">تنبؤ (صورة جديدة)</span>
               <div class="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center text-2xl mx-auto mb-2">❓</div>
               <span class="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded">التصنيف: سليم 🌿</span>
            </div>

          </div>
        </div>

        <!-- Questions -->
        <div class="space-y-8">
          <div class="bg-gray-50 p-6 rounded-2xl border border-gray-200">
            <h3 class="font-bold text-gray-900 mb-3 text-lg">1. ما نوع البيانات التي يحتاجها هذا النظام للتدريب لكي يعمل بكفاءة؟</h3>
            <textarea 
              v-model="answer1" 
              rows="3" 
              class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 mb-3 resize-none"
              placeholder="فكر في نوع وكمية الصور..."
            ></textarea>
            <div class="bg-green-100/50 p-4 rounded-xl border border-green-200" v-if="showHints">
              <span class="font-bold text-green-800 text-sm block mb-1">تلميح مهندس:</span>
              <p class="text-green-700 text-sm">يحتاج النظام إلى آلاف الصور الواضحة للمحاصيل السليمة والمصابة (مختلف زوايا التصوير، إضاءة مختلفة، أنواع مختلفة من الأمراض) ويجب أن تكون مصنفة بدقة بواسطة خبراء زراعيين.</p>
            </div>
          </div>

          <div class="bg-gray-50 p-6 rounded-2xl border border-gray-200">
            <h3 class="font-bold text-gray-900 mb-3 text-lg">2. ما العامل الذي قد يجعل تنبؤ هذا النظام خاطئاً عند استخدامه في المزرعة الحقيقية؟</h3>
            <textarea 
              v-model="answer2" 
              rows="3" 
              class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 mb-3 resize-none"
              placeholder="فكر في الاختلاف بين صور التدريب والواقع..."
            ></textarea>
            <div class="bg-green-100/50 p-4 rounded-xl border border-green-200" v-if="showHints">
              <span class="font-bold text-green-800 text-sm block mb-1">تلميح مهندس:</span>
              <p class="text-green-700 text-sm">إذا تم تدريبه على صور ملتقطة نهاراً في شمس ساطعة، قد يفشل في التعرف على الصور في الأيام الغائمة. أو إذا ظهر مرض جديد لم يكن موجوداً في بيانات التدريب. <strong>النموذج جيد بقدر جودة بياناته فقط!</strong></p>
            </div>
          </div>
        </div>

        <div class="mt-8 flex justify-center">
          <button 
            @click="showHints = !showHints" 
            class="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl shadow-md transition-colors"
          >
            {{ showHints ? 'إخفاء تلميحات المهندس' : 'عرض تلميحات المهندس' }}
          </button>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const answer1 = ref('')
const answer2 = ref('')
const showHints = ref(false)
</script>
