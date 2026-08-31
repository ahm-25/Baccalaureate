<template>
  <div class="relative">
    <AiLesson05Hero />
    <AiLesson05Objectives />
    <AiLesson05OpeningQuestion />
    
    <!-- 1. What is AI -->
    <AiLesson05WhatIsAi />
    <QuizQuestionArena
      v-if="whatIsAiQuestions.length > 0"
      :questions="whatIsAiQuestions"
      section-title="تطبيق عملي: ما هو الذكاء الاصطناعي؟"
      section-id="what-is-ai-quiz"
    />
    <AiLesson05DailyLife />
    
    <!-- 2,3,4. Hierarchy (ML, DL, ANN) -->
    <AiLesson05Hierarchy />
    
    <QuizQuestionArena
      v-if="machineLearningQuestions.length > 0"
      :questions="machineLearningQuestions"
      section-title="اختبر فهمك: التعلم الآلي (ML)"
      section-id="ml-quiz"
    />
    <QuizQuestionArena
      v-if="deepLearningQuestions.length > 0"
      :questions="deepLearningQuestions"
      section-title="اختبر فهمك: التعلم العميق (DL)"
      section-id="dl-quiz"
    />
    
    <AiLesson05ConceptCards />
    
    <QuizQuestionArena
      v-if="annQuestions.length > 0"
      :questions="annQuestions"
      section-title="اختبر فهمك: الشبكات العصبية الاصطناعية (ANN)"
      section-id="ann-quiz"
    />
    
    <!-- 5. GenAI -->
    <AiLesson05GenAi />
    <QuizQuestionArena
      v-if="genAiQuestions.length > 0"
      :questions="genAiQuestions"
      section-title="اختبر فهمك: الذكاء الاصطناعي التوليدي (GenAI)"
      section-id="genai-quiz"
    />
    
    <AiLesson05StopThink />
    
    <!-- 6. Relationships -->
    <AiLesson05Relationships />
    <QuizQuestionArena
      v-if="relationshipsQuestions.length > 0"
      :questions="relationshipsQuestions"
      section-title="اختبر فهمك: اربط المفاهيم معًا"
      section-id="relationships-quiz"
    />
    
    <!-- 7. Hallucination -->
    <AiLesson05Hallucination />
    <QuizQuestionArena
      v-if="hallucinationQuestions.length > 0"
      :questions="hallucinationQuestions"
      section-title="اختبر فهمك: هل الذكاء الاصطناعي دائمًا على حق؟"
      section-id="hallucination-quiz"
    />
    
    <AiLesson05SolvedExample />
    
    <!-- 8. Think Engineer -->
    <AiLesson05ThinkEngineer />
    
    <!-- 9. Final Review Quiz -->
    <QuizQuestionArena
      v-if="finalQuiz.length > 0"
      :questions="finalQuiz"
      section-title="🏆 تحدي الذكاء الاصطناعي (اختبار شامل)"
      section-id="final-review-quiz"
    />
    
    <AiLesson05Summary />
    <AiLesson05ExamQuestion />

    <!-- Top Navigation for Teacher/User (Optional floating or embedded) -->
    <div
      class="fixed top-24 left-6 z-40 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-gray-100 flex items-center p-2 gap-4"
    >
      <NuxtLink
        to="/lesson-04"
        class="text-gray-500 hover:text-purple-600 transition-colors text-sm font-bold flex items-center gap-1"
      >
        <span>&rarr;</span> السابق
      </NuxtLink>
      <div class="w-px h-4 bg-gray-300"></div>
      <button
        @click="toggleTeacherMode"
        class="text-purple-700 font-bold hover:text-purple-900 transition-colors flex items-center gap-2"
      >
        <span class="text-lg">🖊️</span> وضع الشرح
      </button>
      <div class="w-px h-4 bg-gray-300"></div>
      <NuxtLink
        to="/"
        class="text-gray-500 hover:text-purple-600 transition-colors text-sm font-bold flex items-center gap-1"
      >
        التالي <span>&larr;</span>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { useLesson } from "~/composables/useLesson";
import { useQuiz } from "~/composables/useQuiz";
import { useTeacherMode } from "~/composables/useTeacherMode";
import { lessonData } from "~/data/lessons/second-baccalaureate/ai/lesson-05";
import type { Question } from "~/data/lessons/second-baccalaureate/it/lesson-04-questions";
import AiLesson05Relationships from "~/components/ai/lesson-05/AiLesson05Relationships.vue";

import {
  whatIsAiQuestions,
  machineLearningQuestions,
  deepLearningQuestions,
  annQuestions,
  genAiQuestions,
  relationshipsQuestions,
  hallucinationQuestions,
  allQuestions
} from "~/data/lessons/second-baccalaureate/ai/lesson-05-questions";

const { setSections, setLessonInfo, setCurrentSection, sections } = useLesson();
const { setQuestions } = useQuiz();
const { toggleTeacherMode } = useTeacherMode();

setLessonInfo(lessonData.courseTitle, lessonData.lessonTitle);
setSections(lessonData.sections);
setQuestions(lessonData.quiz); // Just the summary questions if needed

const finalQuiz = ref<Question[]>([]);
let observer: IntersectionObserver;

onMounted(() => {
  // Select 15 random questions for the final quiz
  const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
  finalQuiz.value = shuffled.slice(0, 15);

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          const index = sections.value.findIndex((s: any) => s.id === id);
          if (index !== -1) {
            setCurrentSection(index);
          }
        }
      });
    },
    { threshold: 0.3 },
  );

  document.querySelectorAll("section[id]").forEach((sec) => {
    observer.observe(sec);
  });
});

onUnmounted(() => {
  if (observer) observer.disconnect();
});
</script>
