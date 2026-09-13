<template>
  <section id="solved-example" class="py-20 bg-white">
    <div class="container mx-auto px-6 max-w-4xl">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-extrabold text-gray-900 mb-4 flex items-center justify-center gap-3">
          <span class="text-3xl">✏️</span> مثال محلول
        </h2>
      </div>

      <div class="bg-gray-50 rounded-3xl p-8 border border-gray-200 shadow-md">
        <p class="text-xl font-bold text-gray-800 mb-6 text-center">
          لكل مثال، طابق تقنية الذكاء الاصطناعي المناسبة:
        </p>

        <div class="space-y-6 max-w-2xl mx-auto">
          <div v-for="(q, index) in questions" :key="index" class="bg-white p-4 rounded-xl border border-gray-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div class="font-medium text-gray-800">
              <span class="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm font-bold ml-2">{{ index + 1 }}</span>
              {{ q.text }}
            </div>
            <div class="flex items-center gap-2 shrink-0">
              <select v-model="q.selected" class="p-2 border border-gray-300 rounded-lg outline-none focus:border-purple-500 bg-gray-50 min-w-[160px]" :disabled="showResults">
                <option value="">-- اختر التقنية --</option>
                <option value="A">أ — نظام التوصية</option>
                <option value="B">ب — المساعد الصوتي</option>
                <option value="C">جـ — الترجمة الآلية</option>
                <option value="D">د — التعرف على الوجه</option>
              </select>
              <span v-if="showResults" class="text-2xl font-bold">
                {{ q.selected === q.correct ? '✅' : '❌' }}
              </span>
            </div>
          </div>
        </div>

        <div class="mt-8 text-center space-y-4">
          <button v-if="!showResults" @click="checkAnswers" class="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl shadow transition-colors">
            تحقق من الإجابات
          </button>
          <button v-else @click="reset" class="px-8 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold rounded-xl shadow transition-colors">
            إعادة المحاولة
          </button>

          <transition name="fade">
            <div v-if="showResults" class="bg-green-100 text-green-900 p-6 rounded-2xl text-right border border-green-200 mt-6">
              <h4 class="font-bold mb-4 text-xl border-b border-green-200 pb-2">الحل والتفسير:</h4>
              <ul class="space-y-4 text-sm leading-relaxed">
                <li><strong class="text-purple-700">1 ➔ أ (نظام التوصية):</strong> يحلل YouTube بيانات مشاهداتك السابقة وسلوكك ليقترح مقاطع فيديو جديدة تناسب تفضيلاتك.</li>
                <li><strong class="text-purple-700">2 ➔ ب (المساعد الصوتي):</strong> يستخدم الهاتف التعرف على الصوت وفهم اللغة الطبيعية لتلقي أمرك (الطقس) وتنفيذه.</li>
                <li><strong class="text-purple-700">3 ➔ جـ (الترجمة الآلية):</strong> الذكاء الاصطناعي يفهم سياق النص باللغة الأجنبية وينقله إلى اللغة الأم بشكل صحيح.</li>
                <li><strong class="text-purple-700">4 ➔ د (التعرف على الوجه):</strong> تقوم كاميرا الهاتف بمعالجة بيانات الصورة لاستخراج ملامح الوجه ومطابقتها أو تحديد موقعها.</li>
              </ul>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const showResults = ref(false);

const questions = ref([
  { text: 'YouTube يوصي بمقاطع فيديو تناسب تفضيلات المستخدم.', correct: 'A', selected: '' },
  { text: 'التحدث إلى هاتف ذكي للتحقق من الطقس.', correct: 'B', selected: '' },
  { text: 'ترجمة موقع إلكتروني بلغة أجنبية إلى اللغة الأم.', correct: 'C', selected: '' },
  { text: 'كاميرا الهاتف الذكي تكتشف وجه الشخص تلقائيًا.', correct: 'D', selected: '' }
]);

const checkAnswers = () => {
  const allAnswered = questions.value.every(q => q.selected !== '');
  if (!allAnswered) {
    alert("الرجاء الإجابة على جميع الأسئلة أولاً!");
    return;
  }
  showResults.value = true;
};

const reset = () => {
  showResults.value = false;
  questions.value.forEach(q => q.selected = '');
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
