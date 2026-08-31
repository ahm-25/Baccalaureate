<template>
  <section id="exam-question" class="py-20 bg-white">
    <div class="container mx-auto px-6 max-w-4xl">
      <div
        class="bg-blue-50 rounded-3xl p-8 md:p-12 border-2 border-blue-200 shadow-lg relative"
      >
        <div
          class="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-6 py-2 rounded-full font-bold shadow-md flex items-center gap-2"
        >
          <span>🎯</span> سؤال على نمط الامتحان
        </div>

        <div class="mt-6 mb-8 text-center">
          <h2
            class="text-2xl md:text-3xl font-extrabold text-blue-900 leading-relaxed"
          >
            "حلل العلاقة بين الذكاء الاصطناعي، والتعلم الآلي، والتعلم العميق،
            والذكاء الاصطناعي التوليدي."
          </h2>
          <div
            class="mt-4 bg-white p-4 rounded-xl inline-block shadow-sm border border-blue-100 text-right"
          >
            <p class="text-blue-800 font-bold mb-2">في إجابتك يجب أن تتضمن:</p>
            <ul class="list-disc list-inside text-gray-700 text-sm">
              <li>استخدام فكرة الفئات المتداخلة (المظلة الكبرى والأصغر).</li>
              <li>ذكر مثال واحد على الأقل لكل مفهوم.</li>
            </ul>
          </div>
        </div>

        <div class="mb-6">
          <textarea
            v-model="userAnswer"
            rows="6"
            placeholder="اكتب إجابتك التحليلية هنا..."
            class="w-full px-5 py-4 rounded-2xl border-2 border-blue-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 resize-none transition-all text-gray-800"
            :disabled="showAnswer"
          ></textarea>
        </div>

        <div class="flex justify-center" v-if="!showAnswer">
          <button
            @click="showAnswer = true"
            class="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-md transition-colors"
          >
            عرض نموذج الإجابة
          </button>
        </div>

        <transition name="fade">
          <div
            v-if="showAnswer"
            class="mt-8 bg-white p-6 md:p-8 rounded-2xl border-2 border-green-300 shadow-inner"
          >
            <h3
              class="font-bold text-green-700 mb-4 text-xl flex items-center gap-2 border-b border-green-100 pb-2"
            >
              <span>✅</span> نموذج الإجابة:
            </h3>
            <div class="text-gray-800 leading-relaxed space-y-4">
              <p>
                العلاقة بين هذه المفاهيم هي علاقة
                <strong>فئات متداخلة (Nested Categories)</strong> تتدرج من الأعم
                إلى الأخص:
              </p>
              <ul class="space-y-3">
                <li>
                  <strong class="text-blue-700">نموذج الإجابة:</strong><br/>
                  الذكاء الاصطناعي مجال واسع يضم أنظمة قادرة على تنفيذ مهام مثل التعرف والتنبؤ وتوليد المحتوى. ويعد التعلم الآلي فرعًا من الذكاء الاصطناعي يتعلم الأنماط من البيانات، بينما يعد التعلم العميق أسلوبًا من أساليب التعلم الآلي يعتمد على الشبكات العصبية متعددة الطبقات. وتعتمد غالبية أنظمة الذكاء الاصطناعي التوليدي الحديثة على نماذج التعلم العميق.
                </li>
              </ul>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

const userAnswer = ref("");
const showAnswer = ref(false);
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
