<template>
  <div class="relative bg-slate-50 min-h-screen pb-24 font-arabic">
    <!-- Header Hero -->
    <div class="bg-gradient-to-l from-emerald-700 via-teal-600 to-cyan-500 text-white py-16 px-6 shadow-lg mb-12 rounded-b-[3rem]">
      <div class="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div class="space-y-4 md:w-2/3">
          <span class="bg-white/20 text-white px-4 py-1.5 rounded-full text-sm font-semibold backdrop-blur-sm border border-white/30 inline-block">كتاب الأداءات والتقييمات - الصف الثاني الثانوي</span>
          <h1 class="text-3xl md:text-5xl font-extrabold leading-tight">{{ title }}</h1>
          <p class="text-lg md:text-xl text-emerald-50 max-w-2xl">{{ description }}</p>
        </div>
        <div class="hidden md:flex justify-center md:w-1/3">
          <div class="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md border-4 border-white/20 animate-pulse-slow">
            <span class="text-6xl">{{ icon }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Assessment Blocks -->
    <div class="max-w-4xl mx-auto px-4 md:px-6 space-y-16">
      <section
        v-for="block in blocks"
        :id="block.id"
        :key="block.id"
        class="space-y-8"
      >
        <div class="flex flex-wrap items-center gap-3">
          <span class="bg-amber-100 text-amber-800 px-4 py-1.5 rounded-full text-sm font-bold">{{ block.period }}</span>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800">{{ block.title }}</h2>
        </div>

        <AssessmentsEssayQuestions :essays="block.essays" />

        <QuizQuestionArena
          v-if="block.mcqs.length > 0"
          :questions="block.mcqs"
          :section-title="`الاختيار من متعدد - ${block.period} (${block.title})`"
          :section-id="block.id + '-quiz'"
        />
      </section>

      <div class="pt-8 border-t-2 border-dashed border-gray-300">
        <QuizQuestionArena
          v-if="finalQuiz.length > 0"
          :questions="finalQuiz"
          section-title="🏆 الاختبار الشامل على أسئلة التقييمات"
          section-id="final-review-quiz"
        />
      </div>
    </div>

    <!-- Floating Navigation -->
    <div class="fixed bottom-6 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-6 z-40 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200 flex items-center p-3 gap-6 transition-all hover:scale-105">
      <NuxtLink
        to="/"
        class="text-gray-600 hover:text-emerald-600 transition-colors text-sm font-bold flex items-center gap-2"
      >
        <span class="text-lg">&rarr;</span> القائمة الرئيسية
      </NuxtLink>
      <template v-for="link in links" :key="link.to">
        <div class="w-px h-6 bg-gray-300"></div>
        <NuxtLink
          :to="link.to"
          class="text-emerald-700 hover:text-emerald-900 transition-colors text-sm font-bold flex items-center gap-2"
        >
          {{ link.label }} <span class="text-lg">&larr;</span>
        </NuxtLink>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import type { Question } from '~/data/lessons/second-baccalaureate/it/lesson-04-questions';
import type { AssessmentBlock } from '~/data/lessons/second-baccalaureate/it/assessments/types';

const props = defineProps<{
  title: string
  description: string
  icon: string
  blocks: AssessmentBlock[]
  links: { to: string; label: string }[]
}>();

const allMcqs = computed(() => props.blocks.flatMap(block => block.mcqs));

const finalQuiz = ref<Question[]>([]);

onMounted(() => {
  // Select 10 random questions for the final comprehensive test
  const shuffled = [...allMcqs.value].sort(() => 0.5 - Math.random());
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
