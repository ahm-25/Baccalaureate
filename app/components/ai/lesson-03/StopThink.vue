<template>
  <section id="stop-think" class="py-20 bg-yellow-50 border-y border-yellow-100">
    <div class="container mx-auto px-6 max-w-4xl">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-extrabold text-yellow-900 mb-4 flex items-center justify-center gap-3">
          <span class="text-4xl">💡</span> توقف وفكر
        </h2>
      </div>

      <div class="max-w-3xl mx-auto">
        <div class="bg-white rounded-3xl p-8 border border-yellow-200 shadow-md">
          <div class="flex items-start gap-4 mb-6">
            <span class="text-4xl">🤔</span>
            <p class="text-xl text-gray-800 font-bold leading-relaxed">
              غالبًا ما تستخدم خدمات الذكاء الاصطناعي بياناتك الشخصية — ما تشاهده، تشتريه، أو تقوله. لماذا يثير هذا مخاوف بشأن الخصوصية، ومن ينبغي أن يقرر كيفية استخدام بياناتك؟
            </p>
          </div>
          
          <div class="text-center mt-8" v-if="!showIdea">
            <button @click="showIdea = true" class="px-8 py-3 bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-bold rounded-xl shadow transition-colors">
              اعرض فكرة مقترحة
            </button>
          </div>
          
          <transition name="slide-fade">
            <div v-if="showIdea" class="bg-green-50 p-6 rounded-2xl border border-green-200 mt-6 text-green-900 text-lg flex gap-3 items-start">
              <span class="text-2xl">💡</span>
              <p>
                تُجمع هذه البيانات لبناء ملف شخصي عنك، مما يثير مخاوف تسريب معلوماتك الحساسة أو استخدامها للتأثير على قراراتك. يجب أن يكون للمستخدم الحق الأساسي في الموافقة الصريحة ومعرفة من يستخدم بياناته ولأي غرض.
              </p>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const showIdea = ref(false);
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
