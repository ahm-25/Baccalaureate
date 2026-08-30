<template>
  <section id="stop-think-1" class="py-16 bg-white">
    <div class="container mx-auto px-6 max-w-4xl">
      <div class="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl p-8 md:p-12 shadow-lg border border-yellow-200 relative">
        <div class="absolute -top-6 -right-6 text-6xl drop-shadow-xl animate-bounce" style="animation-duration: 3s;">💡</div>
        
        <h2 class="text-3xl font-extrabold text-yellow-800 mb-6">توقف وفكر</h2>
        
        <p class="text-xl text-gray-800 leading-relaxed mb-8 font-medium">
          مرشحات الرسائل المزعجة (Spam Filters) وتوصيات المنتجات كلاهما مثالان على التعلم الآلي، لكن المهام مختلفة تمامًا. 
          <br><br>
          <strong class="text-yellow-900 text-2xl">من منظور كيفية عمل الذكاء الاصطناعي، ما الشيء الذي تشترك فيه الأداتان؟</strong>
        </p>
        
        <div class="mb-6">
          <textarea 
            v-model="userAnswer" 
            rows="4" 
            placeholder="اكتب إجابتك هنا..." 
            class="w-full px-5 py-4 rounded-2xl border-2 border-yellow-200 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 resize-none transition-all"
            :disabled="showAnswer"
          ></textarea>
        </div>
        
        <div class="flex justify-center" v-if="!showAnswer">
          <button 
            @click="showAnswer = true" 
            class="px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-bold rounded-xl shadow-md transition-colors"
          >
            شوف الإجابة النموذجية
          </button>
        </div>
        
        <transition name="slide-up">
          <div v-if="showAnswer" class="mt-8 bg-white p-6 rounded-2xl border-2 border-green-200 shadow-inner">
            <h4 class="font-bold text-green-700 mb-2 flex items-center gap-2">
              <span>✅</span> الإجابة النموذجية:
            </h4>
            <p class="text-lg text-gray-800 leading-relaxed">
              كلاهما يعتمد على نماذج <strong class="text-green-600">تتعلم أنماطًا من البيانات</strong> 
              (بيانات الرسائل السابقة أو بيانات المشتريات السابقة)، ثم تستخدم هذه الأنماط لإجراء تصنيف (Spam/Not Spam) أو توصية بمنتج جديد، بدلاً من الاعتماد على قواعد برمجية ثابتة.
            </p>
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const userAnswer = ref('')
const showAnswer = ref(false)
</script>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.4s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
