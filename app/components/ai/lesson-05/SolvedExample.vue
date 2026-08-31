<template>
  <section id="solved-example" class="py-16 bg-white">
    <div class="container mx-auto px-6 max-w-4xl">
      <div
        class="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100"
      >
        <h2
          class="text-3xl font-extrabold text-blue-900 mb-8 flex items-center gap-3"
        >
          <span class="text-4xl text-blue-500">✏️</span> مثال محلول
        </h2>

        <p class="text-xl text-gray-700 font-medium mb-8">
          اقرأ العبارات التالية وحدد ما إذا كانت صحيحة (✓) أم خاطئة (✗)، ثم قارن
          إجاباتك بالإجابة النموذجية مع الشرح.
        </p>

        <div class="space-y-4 mb-8">
          <div
            v-for="(q, index) in questions"
            :key="index"
            class="bg-gray-50 p-4 rounded-xl border border-gray-200 flex flex-col md:flex-row md:items-center justify-between gap-4"
          >
            <span class="text-lg font-medium text-gray-800"
              >{{ index + 1 }}. {{ q.text }}</span
            >

            <div class="flex gap-2 shrink-0">
              <button
                @click="q.userAnswer = true"
                class="w-12 h-12 rounded-lg font-bold text-xl transition-colors border"
                :class="
                  q.userAnswer === true
                    ? 'bg-green-500 text-white border-green-600'
                    : 'bg-white text-gray-400 hover:bg-gray-100 border-gray-300'
                "
                :disabled="showAnswers"
              >
                ✓
              </button>
              <button
                @click="q.userAnswer = false"
                class="w-12 h-12 rounded-lg font-bold text-xl transition-colors border"
                :class="
                  q.userAnswer === false
                    ? 'bg-red-500 text-white border-red-600'
                    : 'bg-white text-gray-400 hover:bg-gray-100 border-gray-300'
                "
                :disabled="showAnswers"
              >
                ✗
              </button>
            </div>
          </div>
        </div>

        <div class="flex justify-center" v-if="!showAnswers">
          <button
            @click="checkAnswers"
            class="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-md transition-colors"
          >
            عرض الإجابات مع الشرح
          </button>
        </div>

        <transition name="slide-up">
          <div v-if="showAnswers" class="mt-8 space-y-4">
            <h3 class="text-2xl font-bold text-gray-900 mb-6 border-b pb-2">
              الإجابات الصحيحة:
            </h3>

            <div
              v-for="(q, index) in questions"
              :key="'ans-' + index"
              class="p-6 rounded-2xl border"
              :class="
                q.correct
                  ? 'bg-green-50 border-green-200'
                  : 'bg-red-50 border-red-200'
              "
            >
              <div class="flex items-start gap-4">
                <span class="text-3xl mt-1">{{ q.correct ? "✅" : "❌" }}</span>
                <div>
                  <h4
                    class="text-xl font-bold mb-2"
                    :class="q.correct ? 'text-green-800' : 'text-red-800'"
                  >
                    العبارة ({{ index + 1 }}):
                    {{ q.correct ? "صحيحة" : "خاطئة" }}
                  </h4>
                  <p class="text-gray-700 leading-relaxed">
                    <strong>السبب:</strong> {{ q.explanation }}
                  </p>
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
import { ref } from "vue";

const showAnswers = ref(false);

const questions = ref([
  {
    text: "التعلم الآلي هو إحدى تقنيات ومجالات الذكاء الاصطناعي.",
    correct: true,
    userAnswer: null as boolean | null,
    explanation:
      "لأن الذكاء الاصطناعي هو المجال الأوسع الذي يندرج تحته التعلم الآلي.",
  },
  {
    text: "التعلم العميق مختلف تمامًا ولا علاقة له بالتعلم الآلي.",
    correct: false,
    userAnswer: null as boolean | null,
    explanation:
      "التعلم العميق هو في الواقع جزء أو أسلوب من أساليب التعلم الآلي يعتمد على الشبكات العصبية العميقة.",
  },
  {
    text: "الذكاء الاصطناعي التوليدي غالبًا ما يستخدم نماذج التعلم العميق لتوليد محتوى جديد.",
    correct: true,
    userAnswer: null as boolean | null,
    explanation:
      "معظم أنظمة الذكاء الاصطناعي التوليدي الحديثة (مثل ChatGPT) تعتمد على شبكات عصبية عميقة (Deep Learning) لفهم وإنشاء النصوص أو الصور.",
  },
  {
    text: "الذكاء الاصطناعي والتعلم الآلي لهما نفس المعنى تمامًا ويمكن استخدامهما كمرادفات دائمًا.",
    correct: false,
    userAnswer: null as boolean | null,
    explanation:
      "الذكاء الاصطناعي هو المفهوم الشامل، بينما التعلم الآلي هو طريقة محددة لتحقيق ذلك الذكاء عن طريق التعلم من البيانات.",
  },
]);

const checkAnswers = () => {
  showAnswers.value = true;
};
</script>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.5s ease-out;
}

.slide-up-enter-from,
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
