<template>
  <section class="py-12 bg-white flex justify-center dir-rtl">
    <div class="container mx-auto px-4 max-w-5xl">
      <!-- Main Container matching the image style -->
      <div class="bg-purple-50 rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-purple-100/50">
        
        <!-- Header -->
        <h2 class="text-3xl md:text-4xl font-extrabold text-purple-900 mb-10 text-center md:text-right">
          مثال عملي: التنبؤ بنجاح الطلاب
        </h2>

        <!-- Flex Layout for the 3 columns -->
        <div class="flex flex-col md:flex-row items-center gap-8 md:gap-4 lg:gap-8">
          
          <!-- Right Column: Training Data -->
          <div class="w-full md:w-[45%] bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex-shrink-0">
            <h3 class="text-center font-bold text-gray-800 text-lg mb-6">
              بيانات التدريب (Training Data)
            </h3>
            
            <div class="space-y-4">
              <!-- Item 1 -->
              <div class="bg-red-50/50 rounded-xl p-4 flex items-center justify-between border border-red-100/50">
                <span class="text-gray-700 font-medium text-sm md:text-base">
                  "ذاكر ساعتين، حضور 40%"
                </span>
                <span class="bg-red-100 text-red-600 px-3 py-1 rounded-md text-sm font-bold shadow-sm">
                  راسب
                </span>
              </div>
              
              <!-- Item 2 -->
              <div class="bg-green-50/50 rounded-xl p-4 flex items-center justify-between border border-green-100/50">
                <span class="text-gray-700 font-medium text-sm md:text-base">
                  "ذاكر 15 ساعة، حضور 95%"
                </span>
                <span class="bg-green-100 text-green-700 px-3 py-1 rounded-md text-sm font-bold shadow-sm">
                  ناجح
                </span>
              </div>
              
              <!-- Item 3 -->
              <div class="bg-red-50/50 rounded-xl p-4 flex items-center justify-between border border-red-100/50">
                <span class="text-gray-700 font-medium text-sm md:text-base">
                  "ذاكر 5 ساعات، حضور 60%"
                </span>
                <span class="bg-red-100 text-red-600 px-3 py-1 rounded-md text-sm font-bold shadow-sm">
                  راسب
                </span>
              </div>
            </div>
          </div>

          <!-- Middle Column: Arrow -->
          <div class="flex flex-col items-center justify-center gap-2 flex-shrink-0">
            <!-- Left Arrow Icon -->
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-purple-400 rotate-90 md:rotate-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span class="text-purple-500 font-bold text-sm whitespace-nowrap">يتعلم الأنماط</span>
          </div>

          <!-- Left Column: Model and Prediction -->
          <div class="w-full md:w-[45%] flex flex-col gap-6 flex-shrink-0">
            
            <!-- Top Box: ML Model -->
            <div class="bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl p-8 text-center text-white shadow-md relative overflow-hidden h-[180px] flex flex-col items-center justify-center">
              <!-- Pattern overlay -->
              <div class="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8cGF0aCBkPSJNMCAwTDggOFpNOCAwTDAgOFoiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4=')]"></div>
              
              <div class="relative z-10 flex flex-col items-center gap-3">
                <span class="text-4xl">🧠</span>
                <h3 class="font-extrabold text-xl md:text-2xl">نموذج التعلم الآلي</h3>
                <p class="text-purple-100 text-sm md:text-base font-medium">
                  تعلم العلاقة بين المذاكرة والنجاح
                </p>
              </div>
            </div>

            <!-- Bottom Box: Prediction -->
            <div class="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center h-auto min-h-[160px] justify-center relative transition-all">
              <h3 class="font-bold text-gray-800 text-lg mb-4">
                طالب جديد (Prediction)
              </h3>
              
              <!-- Interactive Prediction Mode -->
              <div v-if="!showResult" class="w-full max-w-xs space-y-3">
                <div class="flex items-center gap-2 bg-gray-50 rounded-lg p-2 border border-gray-100">
                  <span class="text-sm font-medium text-gray-600 w-16 text-right">ساعات:</span>
                  <input type="number" v-model="newHours" placeholder="مثال: 12" class="w-full bg-transparent outline-none text-center font-bold text-gray-800" min="0" max="40">
                </div>
                <div class="flex items-center gap-2 bg-gray-50 rounded-lg p-2 border border-gray-100">
                  <span class="text-sm font-medium text-gray-600 w-16 text-right">حضور %:</span>
                  <input type="number" v-model="newAttendance" placeholder="مثال: 80" class="w-full bg-transparent outline-none text-center font-bold text-gray-800" min="0" max="100">
                </div>
                <button 
                  @click="predict" 
                  class="w-full py-2 bg-purple-100 text-purple-700 font-bold rounded-lg hover:bg-purple-200 transition-colors"
                  :disabled="!newHours || !newAttendance"
                >
                  صنّف الطالب
                </button>
              </div>

              <!-- Result Mode -->
              <div v-else class="w-full flex flex-col items-center gap-3 animate-fade-in">
                <p class="text-gray-600 font-medium italic text-sm md:text-base">
                  "ذاكر {{ newHours }} ساعة، حضور {{ newAttendance }}%"
                </p>
                <div 
                  class="flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-lg shadow-sm"
                  :class="isPass ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'"
                >
                  <span v-if="isPass">✅ تم التصنيف: ناجح</span>
                  <span v-else>🚨 تم التصنيف: راسب</span>
                </div>
                <button @click="resetPrediction" class="text-xs text-gray-400 hover:text-gray-600 underline mt-2">
                  جرب طالب آخر
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const newHours = ref<number | null>(null);
const newAttendance = ref<number | null>(null);
const showResult = ref(false);
const isPass = ref(false);

const predict = () => {
  if (newHours.value === null || newAttendance.value === null) return;
  
  // Logic: if (hours * 3 + attendance) >= 100 -> Pass
  const score = (newHours.value * 3) + newAttendance.value;
  isPass.value = score >= 100;
  showResult.value = true;
};

const resetPrediction = () => {
  showResult.value = false;
  newHours.value = null;
  newAttendance.value = null;
};
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.4s ease-out forwards;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(5px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Fix RTL for inputs to look good */
input {
  direction: ltr;
}
input::placeholder {
  text-align: right;
  direction: rtl;
}
</style>
