<template>
  <section id="exam-question" class="py-20 bg-white">
    <div class="container mx-auto px-6 max-w-4xl">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-extrabold text-gray-900 mb-4 flex items-center justify-center gap-3">
          <span class="text-3xl">🎯</span> سؤال على نمط الامتحان
        </h2>
      </div>

      <div class="bg-white rounded-3xl p-8 md:p-12 border-2 border-purple-200 shadow-xl relative overflow-hidden">
        <!-- Decoration -->
        <div class="absolute top-0 right-0 w-32 h-32 bg-purple-100 rounded-bl-full opacity-50"></div>
        <div class="absolute top-4 right-4 text-purple-300 text-6xl opacity-20 font-serif">Q</div>

        <div class="relative z-10">
          <div class="flex justify-between items-start mb-6">
            <span class="bg-purple-100 text-purple-800 text-sm font-bold px-3 py-1 rounded-full">
              سؤال مقالي
            </span>
            <span class="text-gray-500 font-bold">[6 درجات]</span>
          </div>

          <h3 class="text-2xl font-bold text-gray-900 mb-8 leading-relaxed">
            "حلل لماذا يناسب الذكاء الاصطناعي بعض المهام، بينما يتطلب الحذر الشديد في مهام أخرى."
          </h3>

          <div class="bg-gray-50 p-6 rounded-2xl border border-gray-200 mb-8">
            <p class="text-sm font-bold text-gray-700 mb-3">💡 نقاط تساعدك في بناء الإجابة، يجب أن تتضمن:</p>
            <ul class="text-sm text-gray-600 space-y-2 list-disc list-inside">
              <li>إيجاد الأنماط والتعرف والتنبؤ.</li>
              <li>الأحكام الأخلاقية والخصوصية.</li>
              <li>أهمية الإشراف البشري في اتخاذ القرار النهائي.</li>
            </ul>
          </div>

          <div class="text-center">
            <button
              v-if="!showAnswer"
              @click="showAnswer = true"
              class="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-2xl shadow-lg shadow-purple-500/30 transition-all duration-300"
            >
              عرض نموذج الإجابة
            </button>
          </div>

          <transition name="fade">
            <div v-if="showAnswer" class="mt-8 bg-green-50 p-8 rounded-2xl border-2 border-green-200">
              <h4 class="font-bold text-green-900 mb-4 text-lg border-b border-green-200 pb-2">
                نموذج الإجابة:
              </h4>
              <div class="text-gray-800 space-y-4 leading-relaxed">
                <p>
                  <strong>يناسب الذكاء الاصطناعي بعض المهام لأنه يبرع في:</strong> إيجاد الأنماط المعقدة في البيانات، والتعرف (على الصور والأصوات)، والتنبؤ بناءً على البيانات التاريخية (مثل التنبؤ بالطقس أو الأعطال)، حيث يقوم بمعالجة كميات ضخمة من البيانات بسرعة ودقة تفوق البشر.
                </p>
                <p>
                  <strong>بينما يتطلب الحذر في مهام أخرى بسبب:</strong> افتقاره للوعي بالأحكام الأخلاقية (مما قد يؤدي للتمييز)، ومخاوف انتهاك الخصوصية عند استخدام البيانات الحساسة.
                </p>
                <p>
                  <strong>أهمية الإشراف البشري:</strong> كلما كان للقرار أثر كبير على حياة الإنسان (مثل التشخيص الطبي أو الأحكام القضائية)، زادت أهمية الإشراف البشري لتحمل المسؤولية وتصحيح الأخطاء المحتملة أو الهلوسة التي قد يقع فيها النظام.
                </p>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const showAnswer = ref(false);
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
