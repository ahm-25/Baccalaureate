<template>
  <section id="apply-learned" class="py-20 bg-green-50 border-y border-green-100">
    <div class="container mx-auto px-6 max-w-4xl">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-extrabold text-green-900 mb-4 flex items-center justify-center gap-3">
          <span class="text-3xl">⚙️</span> طبّق ما تعلمته
        </h2>
      </div>

      <div class="bg-white rounded-3xl p-8 border border-green-200 shadow-md">
        <div class="mb-8">
          <p class="text-xl text-gray-800 font-bold leading-relaxed mb-4">
            الموقف: "يريد مزارع استخدام نظام ذكاء اصطناعي للتمييز بين صور المحاصيل السليمة والمصابة بالأمراض."
          </p>
        </div>

        <div class="space-y-6">
          <div class="flex flex-col">
            <label class="text-lg font-bold text-gray-700 mb-2">1. ما نوع البيانات التي يحتاجها النظام للتدريب؟</label>
            <textarea v-model="q1" rows="2" class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all outline-none resize-none" placeholder="اكتب إجابتك هنا..."></textarea>
          </div>

          <div class="flex flex-col">
            <label class="text-lg font-bold text-gray-700 mb-2">2. اذكر عاملًا واحدًا قد يجعل تنبؤه خاطئًا.</label>
            <textarea v-model="q2" rows="2" class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all outline-none resize-none" placeholder="اكتب إجابتك هنا..."></textarea>
          </div>

          <div class="flex flex-col">
            <label class="text-lg font-bold text-gray-700 mb-2">3. لماذا يجب التحقق من النتيجة؟</label>
            <textarea v-model="q3" rows="2" class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all outline-none resize-none" placeholder="اكتب إجابتك هنا..."></textarea>
          </div>
        </div>

        <div class="mt-8 text-center">
          <button v-if="!showFeedback" @click="checkAnswers" class="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl shadow transition-colors">
            تحقق من الإجابات
          </button>
        </div>

        <transition name="fade">
          <div v-if="showFeedback" class="mt-8 bg-green-100 p-6 rounded-2xl border border-green-200 text-right">
            <h4 class="font-bold text-green-900 mb-4 text-xl">💡 إجابات استرشادية:</h4>
            <ul class="space-y-4 text-green-800">
              <li><strong>1. نوع البيانات:</strong> آلاف الصور لمحاصيل سليمة وأخرى مصابة بأمراض مختلفة مع تصنيف كل صورة (Labels).</li>
              <li><strong>2. عامل الخطأ:</strong> بيانات تدريب متحيزة (مثل تدريبه على نوع واحد من المحاصيل فقط)، أو ظروف إضاءة مختلفة في المزرعة عما تدرب عليه (هلوسة).</li>
              <li><strong>3. سبب التحقق:</strong> لأن الذكاء الاصطناعي قد يخطئ أو لا يتعرف على مرض جديد لم يتدرب عليه. الإشراف البشري ضروري لمنع الخسائر المادية للمزارع.</li>
            </ul>
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const q1 = ref('');
const q2 = ref('');
const q3 = ref('');
const showFeedback = ref(false);

const checkAnswers = () => {
  if (q1.value.trim() === '' || q2.value.trim() === '' || q3.value.trim() === '') {
    alert("الرجاء محاولة الإجابة على جميع الأسئلة أولاً!");
    return;
  }
  showFeedback.value = true;
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
