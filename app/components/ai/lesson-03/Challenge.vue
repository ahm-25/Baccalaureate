<template>
  <section id="challenge" class="py-20 bg-gradient-to-b from-white to-gray-50 border-t border-gray-200">
    <div class="container mx-auto px-6 max-w-3xl">
      <div class="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-1 md:p-2 shadow-2xl relative">
        <div class="absolute -top-6 -right-6 text-6xl transform rotate-12">🧠</div>
        
        <div class="bg-white rounded-[20px] p-8 md:p-12 h-full w-full relative z-10">
          <div class="text-center mb-8">
            <h2 class="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-2">
              تحدي الدرس
            </h2>
            <p class="text-gray-500 font-medium">طبق ما تعلمته في موقف عملي</p>
          </div>

          <div class="bg-indigo-50 border border-indigo-100 rounded-2xl p-6 mb-8 text-indigo-900 leading-relaxed font-medium">
            "اختر استخدامًا واحدًا للذكاء الاصطناعي في الحياة اليومية أو الصناعة، ثم:
            <ol class="list-decimal list-inside mt-4 space-y-2">
              <li>اشرح كيف يستخدم AI في هذا المثال.</li>
              <li>اذكر فائدة واحدة واضحة.</li>
              <li>اذكر خطرًا أو مصدر قلق محتمل.</li>
              <li>حدد متى يحتاج هذا النظام إلى إشراف بشري ولماذا؟"</li>
            </ol>
          </div>

          <div class="space-y-4">
            <label class="block text-gray-700 font-bold mb-2">إجابتك:</label>
            <textarea 
              v-model="answer" 
              rows="6" 
              class="w-full rounded-xl border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-4 resize-none transition-all"
              placeholder="اكتب إجابتك المنظمة هنا..."
            ></textarea>
            
            <div class="flex justify-between items-center mt-4">
              <span class="text-xs text-gray-400">سيتم حفظ إجابتك تلقائيًا</span>
              <button 
                class="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold rounded-xl shadow-lg transition-transform hover:scale-105"
                @click="saveAnswer"
              >
                {{ saved ? 'تم الحفظ ✓' : 'حفظ الإجابة' }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const answer = ref('');
const saved = ref(false);

const saveAnswer = () => {
  if (answer.value.trim().length > 0) {
    saved.value = true;
    setTimeout(() => {
      saved.value = false;
    }, 2000);
  }
};
</script>
