<template>
  <section id="opening-question" class="py-16 bg-purple-50">
    <div class="container mx-auto px-6 max-w-4xl">
      <div
        class="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-purple-100 relative overflow-hidden"
      >
        <!-- Decoration -->
        <div
          class="absolute top-0 right-0 w-32 h-32 bg-purple-100 rounded-full mix-blend-multiply filter blur-2xl opacity-50 -translate-y-1/2 translate-x-1/2"
        ></div>
        <div
          class="absolute bottom-0 left-0 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-50 translate-y-1/2 -translate-x-1/2"
        ></div>

        <div class="relative z-10 text-center">
          <h2
            class="text-2xl md:text-3xl font-bold text-purple-800 mb-8 flex items-center justify-center gap-3"
          >
            <span class="text-3xl">🤔</span> قبل ما نبدأ...
          </h2>

          <p class="text-xl md:text-2xl text-gray-800 mb-6 leading-relaxed font-bold">
            كم مرة استخدمت الذكاء الاصطناعي اليوم دون أن تشعر؟
          </p>

          <div
            class="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center text-right mb-8"
            v-if="!hasAnswered"
          >
            <button
              @click="answer()"
              class="px-6 py-4 bg-gray-50 hover:bg-gray-100 text-gray-800 font-bold rounded-2xl border border-gray-200 transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
            >
              <span class="text-2xl">📱</span> شاهدت فيديو مقترحًا لك
            </button>
            <button
              @click="answer()"
              class="px-6 py-4 bg-gray-50 hover:bg-gray-100 text-gray-800 font-bold rounded-2xl border border-gray-200 transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
            >
              <span class="text-2xl">🎤</span> استخدمت مساعدًا صوتيًا
            </button>
            <button
              @click="answer()"
              class="px-6 py-4 bg-gray-50 hover:bg-gray-100 text-gray-800 font-bold rounded-2xl border border-gray-200 transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
            >
              <span class="text-2xl">🌍</span> استخدمت الترجمة
            </button>
            <button
              @click="answer()"
              class="px-6 py-4 bg-gray-50 hover:bg-gray-100 text-gray-800 font-bold rounded-2xl border border-gray-200 transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
            >
              <span class="text-2xl">📷</span> فتحت الهاتف بالتعرف على الوجه
            </button>
            <button
              @click="answer()"
              class="px-6 py-4 bg-gray-50 hover:bg-gray-100 text-gray-800 font-bold rounded-2xl border border-gray-200 transition-all duration-300 transform hover:scale-105 flex items-center gap-3 sm:col-span-2 sm:max-w-md sm:mx-auto w-full"
            >
              <span class="text-2xl">🛒</span> حصلت على اقتراح لمنتج
            </button>
          </div>

          <transition name="fade">
            <div
              v-if="hasAnswered"
              class="mt-8 p-6 rounded-2xl border text-right bg-purple-50 border-purple-200"
            >
              <div class="flex items-start gap-4">
                <div class="text-4xl shrink-0">
                  🎉
                </div>
                <div>
                  <h4
                    class="text-xl font-bold mb-2 text-purple-800"
                  >
                    مفاجأة!
                  </h4>
                  <p class="text-lg text-gray-700 leading-relaxed">
                    الذكاء الاصطناعي موجود بالفعل في كثير من الخدمات التي نستخدمها يوميًا. لم يعد مجرد خيال علمي، بل أصبح جزءاً لا يتجزأ من روتيننا اليومي.
                  </p>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

const hasAnswered = ref(false);

const answer = () => {
  hasAnswered.value = true;
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.5s ease,
    transform 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
