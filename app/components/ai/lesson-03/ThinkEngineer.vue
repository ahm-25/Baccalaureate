<template>
  <section id="think-engineer" class="py-20 bg-gray-50 border-t border-gray-200">
    <div class="container mx-auto px-6 max-w-5xl">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 flex items-center justify-center gap-3">
          <span class="text-4xl">⚙️</span> فكر كمهندس: ابحث ثم قرر
        </h2>
        <p class="text-lg text-gray-600">اختر صناعة، وحدد مشكلة حقيقية، ثم صمم حلاً يعتمد على الذكاء الاصطناعي لتخرج ببطاقة "القرار الهندسي".</p>
      </div>

      <div class="bg-white rounded-3xl p-8 border border-gray-200 shadow-xl">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <!-- Form -->
          <div class="space-y-6">
            <div>
              <label class="block text-sm font-bold text-gray-700 mb-2">اختر الصناعة المستهدفة:</label>
              <select v-model="form.industry" class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none bg-gray-50">
                <option value="الرعاية الصحية">🏥 الرعاية الصحية</option>
                <option value="الزراعة">🌾 الزراعة</option>
                <option value="التصنيع">🏭 التصنيع</option>
                <option value="الخدمات اللوجستية">🚚 الخدمات اللوجستية</option>
              </select>
            </div>

            <div>
              <label class="block text-sm font-bold text-gray-700 mb-2">1. ما هي المشكلة الحقيقية؟</label>
              <input v-model="form.problem" type="text" class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none" placeholder="مثال: تأخر اكتشاف الأمراض" />
            </div>

            <div>
              <label class="block text-sm font-bold text-gray-700 mb-2">2. كيف يمكن استخدام الذكاء الاصطناعي لحلها؟</label>
              <input v-model="form.solution" type="text" class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none" placeholder="مثال: تحليل صور الأشعة وتحديد الأورام" />
            </div>

            <div>
              <label class="block text-sm font-bold text-gray-700 mb-2">3. ما البيانات التي يحتاجها للتدريب؟</label>
              <input v-model="form.data" type="text" class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none" placeholder="مثال: آلاف من صور الأشعة السابقة" />
            </div>

            <div>
              <label class="block text-sm font-bold text-gray-700 mb-2">4. اذكر فائدة واحدة للنظام:</label>
              <input v-model="form.benefit" type="text" class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none" placeholder="مثال: إنقاذ الأرواح بالاكتشاف المبكر" />
            </div>

            <div>
              <label class="block text-sm font-bold text-gray-700 mb-2">5. اذكر خطراً محتملاً:</label>
              <input v-model="form.risk" type="text" class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none" placeholder="مثال: تشخيص خاطئ بسبب بيانات متحيزة" />
            </div>

            <div>
              <label class="block text-sm font-bold text-gray-700 mb-2">6. متى يحتاج الإنسان (المتخصص) إلى التدخل؟</label>
              <input v-model="form.humanIntervention" type="text" class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none" placeholder="مثال: لمراجعة التشخيص واتخاذ القرار النهائي" />
            </div>
            
            <button @click="generateCard = true" class="w-full py-4 bg-gray-900 hover:bg-gray-800 text-white font-bold rounded-xl shadow-lg transition-colors">
              استخراج بطاقة القرار الهندسي
            </button>
          </div>

          <!-- Result Card -->
          <div class="relative flex items-center justify-center">
            <div v-if="!generateCard" class="text-center text-gray-400">
              <span class="text-6xl block mb-4 opacity-50">🪪</span>
              <p>املأ النموذج واضغط على استخراج لرؤية البطاقة</p>
            </div>
            
            <transition name="fade">
              <div v-if="generateCard" class="w-full bg-gradient-to-br from-blue-900 to-indigo-900 text-white p-8 rounded-3xl shadow-2xl relative overflow-hidden">
                <!-- Watermark -->
                <div class="absolute -right-8 -bottom-8 text-9xl opacity-10">⚙️</div>
                
                <div class="border-b border-blue-700 pb-4 mb-6 flex justify-between items-center">
                  <h3 class="text-2xl font-bold text-blue-100">بطاقة قرار هندسي</h3>
                  <span class="bg-blue-500/30 text-blue-100 px-3 py-1 rounded-lg text-sm font-bold">{{ form.industry }}</span>
                </div>
                
                <div class="space-y-4 relative z-10">
                  <div>
                    <span class="text-blue-300 text-sm block mb-1">المشكلة:</span>
                    <p class="font-semibold text-lg">{{ form.problem || '---' }}</p>
                  </div>
                  <div>
                    <span class="text-blue-300 text-sm block mb-1">الحل بالذكاء الاصطناعي:</span>
                    <p class="font-semibold text-lg text-blue-100">{{ form.solution || '---' }}</p>
                  </div>
                  <div>
                    <span class="text-blue-300 text-sm block mb-1">البيانات المطلوبة:</span>
                    <p class="font-semibold">{{ form.data || '---' }}</p>
                  </div>
                  
                  <div class="grid grid-cols-2 gap-4 py-2 border-y border-blue-800 my-4">
                    <div>
                      <span class="text-green-300 text-sm block mb-1">الفائدة:</span>
                      <p class="text-sm font-semibold">{{ form.benefit || '---' }}</p>
                    </div>
                    <div>
                      <span class="text-red-300 text-sm block mb-1">الخطر:</span>
                      <p class="text-sm font-semibold">{{ form.risk || '---' }}</p>
                    </div>
                  </div>
                  
                  <div class="bg-blue-950/50 p-4 rounded-xl border border-blue-800">
                    <span class="text-yellow-300 text-sm block mb-1 font-bold">⚠️ دور الإنسان (الإشراف):</span>
                    <p class="font-bold text-yellow-100">{{ form.humanIntervention || '---' }}</p>
                  </div>
                </div>
                
                <div class="mt-6 text-center">
                  <button @click="generateCard = false" class="text-sm text-blue-300 hover:text-white underline">
                    تعديل البيانات
                  </button>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';

const form = reactive({
  industry: 'الرعاية الصحية',
  problem: '',
  solution: '',
  data: '',
  benefit: '',
  risk: '',
  humanIntervention: ''
});

const generateCard = ref(false);
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>
