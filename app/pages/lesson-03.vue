<template>
  <div class="relative">
    <AiLesson03Hero />
    <AiLesson03Objectives />
    <AiLesson03LessonMap />
    
    <!-- مقدمة الدرس (سؤال افتتاحي) -->
    <AiLesson03StopThink />
    
    <!-- القسم الأول -->
    <AiLesson03DailyLife />
    
    <!-- القسم الثاني -->
    <AiLesson03Industry />
    
    <!-- الذكاء الاصطناعي والإنسان -->
    <AiLesson03HumanAi />
    
    <!-- القسم الرابع: ما الذي يتطلب الحذر؟ -->
    <AiLesson03Risks />
    
    <!-- توقف وفكر - الرعاية الصحية -->
    <AiLesson03StopThinkHealthcare />
    
    <!-- القسم الخامس: مخاطر استخدام الذكاء الاصطناعي -->
    <AiLesson03Dangers />
    
    <!-- طبّق ما تعلمته -->
    <AiLesson03ApplyWhatYouLearned />
    
    <!-- مثال محلول -->
    <AiLesson03SolvedExample />
    
    <!-- سؤال امتحان -->
    <AiLesson03ExamQuestion />
    
    <!-- فكر كمهندس -->
    <AiLesson03ThinkEngineer />
    
    <!-- الخلاصة -->
    <AiLesson03Summary />

    <!-- الاختبار الشامل -->
    <QuizQuestionArena
      v-if="finalQuiz.length > 0"
      :questions="finalQuiz"
      section-title="🏆 اختبار الدرس"
      section-id="quiz"
    />
    
    <!-- Top Navigation for Teacher/User -->
    <div
      class="fixed top-24 left-6 z-40 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-gray-100 flex items-center p-2 gap-4"
    >
      <NuxtLink
        to="/lesson-02"
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
        to="/lesson-04"
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
import { lessonData } from "~/data/lessons/second-baccalaureate/ai/lesson-03";
import type { Question } from "~/data/lessons/second-baccalaureate/it/lesson-04-questions";

import { allQuestions } from "~/data/lessons/second-baccalaureate/ai/lesson-03-questions";

const { setSections, setLessonInfo, setCurrentSection, sections } = useLesson();
const { setQuestions } = useQuiz();
const { toggleTeacherMode } = useTeacherMode();

setLessonInfo(lessonData.courseTitle, lessonData.lessonTitle);
setSections(lessonData.sections);
setQuestions(lessonData.quiz);

const finalQuiz = ref<Question[]>([]);
let observer: IntersectionObserver;

onMounted(() => {
  // Select up to 10 random questions for the final quiz
  const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
  finalQuiz.value = shuffled.slice(0, 10);

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
