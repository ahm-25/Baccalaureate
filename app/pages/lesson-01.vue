<template>
  <div class="relative bg-slate-50 min-h-screen pb-24 font-arabic">
    <!-- Header Hero -->
    <div class="bg-gradient-to-l from-indigo-700 via-blue-600 to-cyan-500 text-white py-16 px-6 shadow-lg mb-12 rounded-b-[3rem]">
      <div class="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div class="space-y-4 md:w-2/3">
          <span class="bg-white/20 text-white px-4 py-1.5 rounded-full text-sm font-semibold backdrop-blur-sm border border-white/30 inline-block">تكنولوجيا المعلومات - الصف الثاني الثانوي</span>
          <h1 class="text-3xl md:text-5xl font-extrabold leading-tight">الدرس الأول: تطور تكنولوجيا المعلومات والتحول الاجتماعي</h1>
          <p class="text-lg md:text-xl text-blue-100 max-w-2xl">
            مراجعة تفاعلية شاملة لأسئلة الدرس. اختبر فهمك لرحلة تطور الحواسيب، قانون مور، التقنيات الناشئة وأثرها على مجتمعاتنا.
          </p>
        </div>
        <div class="hidden md:flex justify-center md:w-1/3">
          <div class="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md border-4 border-white/20 animate-pulse-slow">
            <span class="text-6xl">🚀</span>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Quizzes Area -->
    <div class="max-w-4xl mx-auto px-4 md:px-6 space-y-16">
      
      <QuizQuestionArena
        v-if="evolutionQuestions.length > 0"
        :questions="evolutionQuestions"
        section-title="تطور تكنولوجيا المعلومات"
        section-id="evolution-quiz"
      />

      <QuizQuestionArena
        v-if="mooresLawQuestions.length > 0"
        :questions="mooresLawQuestions"
        section-title="قانون مور (Moore's Law)"
        section-id="moores-law-quiz"
      />

      <QuizQuestionArena
        v-if="socialTransformationQuestions.length > 0"
        :questions="socialTransformationQuestions"
        section-title="التحولات الاجتماعية"
        section-id="social-transformation-quiz"
      />

      <QuizQuestionArena
        v-if="cloudEdgeQuestions.length > 0"
        :questions="cloudEdgeQuestions"
        section-title="الحوسبة السحابية والطرفية"
        section-id="cloud-edge-quiz"
      />

      <QuizQuestionArena
        v-if="arVrQuestions.length > 0"
        :questions="arVrQuestions"
        section-title="الواقع الافتراضي والمعزز"
        section-id="ar-vr-quiz"
      />

      <QuizQuestionArena
        v-if="emergingTechQuestions.length > 0"
        :questions="emergingTechQuestions"
        section-title="التقنيات الناشئة وأثرها"
        section-id="emerging-tech-quiz"
      />
      
      <div class="pt-8 border-t-2 border-dashed border-gray-300">
        <QuizQuestionArena
          v-if="finalQuiz.length > 0"
          :questions="finalQuiz"
          section-title="🏆 الاختبار الشامل على الدرس الأول"
          section-id="final-review-quiz"
        />
      </div>
    </div>

    <!-- Floating Navigation -->
    <div class="fixed bottom-6 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-6 z-40 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200 flex items-center p-3 gap-6 transition-all hover:scale-105">
      <NuxtLink
        to="/"
        class="text-gray-600 hover:text-indigo-600 transition-colors text-sm font-bold flex items-center gap-2"
      >
        <span class="text-lg">&rarr;</span> القائمة الرئيسية
      </NuxtLink>
      <div class="w-px h-6 bg-gray-300"></div>
      <NuxtLink
        to="/lesson-2"
        class="text-indigo-700 hover:text-indigo-900 transition-colors text-sm font-bold flex items-center gap-2"
      >
        الدرس الثاني <span class="text-lg">&larr;</span>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useQuiz } from '~/composables/useQuiz';
import type { Question } from '~/data/lessons/second-baccalaureate/it/lesson-04-questions';

import {
  evolutionQuestions,
  mooresLawQuestions,
  socialTransformationQuestions,
  cloudEdgeQuestions,
  arVrQuestions,
  emergingTechQuestions,
  allLesson01Questions
} from '~/data/lessons/second-baccalaureate/it/lesson-01-questions';

useHead({
  title: 'الدرس الأول - أسئلة وتدريبات | تكنولوجيا المعلومات'
});

const { setQuestions } = useQuiz();

// Set all questions to the global state if needed
setQuestions(allLesson01Questions);

const finalQuiz = ref<Question[]>([]);

onMounted(() => {
  // Select 10 random questions for the final comprehensive test
  const shuffled = [...allLesson01Questions].sort(() => 0.5 - Math.random());
  finalQuiz.value = shuffled.slice(0, 10);
});
</script>

<style>
.font-arabic {
  font-family: 'Cairo', 'Tajawal', 'Almarai', sans-serif;
}
.animate-pulse-slow {
  animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: .7;
  }
}
</style>
