<template>
  <section id="stop-think-healthcare" class="py-20 bg-blue-50 border-y border-blue-100">
    <div class="container mx-auto px-6 max-w-4xl">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-extrabold text-blue-900 mb-4 flex items-center justify-center gap-3">
          <span class="text-4xl">🤔</span> توقف وفكر — الرعاية الصحية
        </h2>
      </div>

      <div class="bg-white rounded-3xl p-8 border border-blue-200 shadow-md">
        <div class="mb-8">
          <p class="text-xl text-gray-700 font-semibold mb-4 bg-gray-50 p-4 rounded-xl border border-gray-200">
            "يفكر مستشفى في استخدام الذكاء الاصطناعي للتشخيص بالصور للكشف عن الأمراض من صور الأشعة السينية."
          </p>
          <p class="text-2xl text-gray-900 font-bold leading-relaxed">
            لماذا ينبغي أن يؤكد التشخيص النهائي طبيب بشري بدلًا من تركه للذكاء الاصطناعي وحده؟
          </p>
        </div>

        <div class="space-y-4" v-if="!showExplanation">
          <button @click="selectAnswer('a')" class="w-full text-right px-6 py-4 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-xl font-bold text-gray-700 transition-colors">
            أ) لأن الذكاء الاصطناعي غير قادر على رؤية الصور بوضوح.
          </button>
          <button @click="selectAnswer('b')" class="w-full text-right px-6 py-4 bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-300 rounded-xl font-bold text-gray-700 transition-colors">
            ب) لأن القرار له أثر مباشر على حياة الإنسان، وقد يخطئ النظام أو يعتمد على بيانات متحيزة.
          </button>
          <button @click="selectAnswer('c')" class="w-full text-right px-6 py-4 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-xl font-bold text-gray-700 transition-colors">
            جـ) لأن الأطباء يحتاجون إلى التدرب على تشخيص الصور لكي لا ينسوا.
          </button>
        </div>

        <transition name="slide-fade">
          <div v-if="showExplanation" class="mt-8 p-6 rounded-2xl border" :class="isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'">
            <div class="flex items-center gap-3 mb-3">
              <span class="text-3xl">{{ isCorrect ? '✅' : '❌' }}</span>
              <h3 class="text-xl font-bold" :class="isCorrect ? 'text-green-900' : 'text-red-900'">
                {{ isCorrect ? 'إجابة صحيحة!' : 'حاول مرة أخرى.' }}
              </h3>
            </div>
            <p class="text-lg" :class="isCorrect ? 'text-green-800' : 'text-red-800'">
              الطبيب البشري يمتلك الخبرة الشاملة ويتحمل المسؤولية الأخلاقية والقانونية. الذكاء الاصطناعي قد يهلوس أو يخطئ نتيجة لحالة نادرة لم يتدرب عليها، لذا يجب أن يكون دوره مساعداً للطبيب وليس بديلاً عنه في القرارات عالية الأثر.
            </p>
            <button v-if="!isCorrect" @click="showExplanation = false" class="mt-4 px-6 py-2 bg-white border border-red-200 text-red-700 font-bold rounded-lg hover:bg-red-100 transition-colors">
              إعادة المحاولة
            </button>
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const showExplanation = ref(false);
const isCorrect = ref(false);

const selectAnswer = (answer: string) => {
  if (answer === 'b') {
    isCorrect.value = true;
  } else {
    isCorrect.value = false;
  }
  showExplanation.value = true;
};
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
