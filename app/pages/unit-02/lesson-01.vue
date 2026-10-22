<template>
  <div class="relative bg-slate-50 min-h-screen pb-24">
    <CyberLesson07Hero />
    <CyberLesson07Objectives />
    <CyberLesson07LessonMap />
    <CyberLesson07OpeningQuestion />
    <CyberLesson07HttpsConnection />
    <CyberLesson07TlsHandshake />
    <CyberLesson07Authentication />
    <CyberLesson07SecurityCombination />
    <CyberLesson07StopThink />
    <CyberLesson07SolvedExample />
    <CyberLesson07ExamQuestion />
    <CyberLesson07Practice />
    <CyberLesson07ThinkEngineer />
    <CyberLesson07ApplyLearned />
    <CyberLesson07MainAnswer />
    <CyberLesson07Summary />
    <CyberLesson07Exercises />
    <section id="practice-quiz">
      <QuizQuestionArena
        v-if="practiceQuiz.length > 0"
        :questions="practiceQuiz"
        section-title="تقنيات التشفير والمصادقة"
        section-id="practice-quiz"
      />
    </section>
    <CyberLesson07Reflect />
    <CyberLesson07NextLesson />

    <!-- Navigation -->
    <div class="fixed top-24 left-6 z-40 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-slate-200 flex items-center p-2 gap-4">
      <NuxtLink to="/unit-01/lesson-04" class="text-slate-600 hover:text-indigo-600 transition-colors text-sm font-bold flex items-center gap-1">
        <span>&rarr;</span> السابق
      </NuxtLink>
      <div class="w-px h-4 bg-slate-300"></div>
      <button @click="toggleTeacherMode" class="text-indigo-700 font-bold hover:text-indigo-900 transition-colors flex items-center gap-2">
        <span class="text-lg">🖊️</span> وضع الشرح
      </button>
      <div class="w-px h-4 bg-slate-300"></div>
      <NuxtLink to="/unit-02/lesson-02" class="text-slate-600 hover:text-indigo-600 transition-colors text-sm font-bold flex items-center gap-1">
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
import { lessonData } from "~/data/lessons/second-baccalaureate/cyber/lesson-07";
import { allQuestions } from "~/data/lessons/second-baccalaureate/cyber/lesson-07-questions";
import type { Question } from "~/data/lessons/second-baccalaureate/it/lesson-04-questions";

const { setSections, setLessonInfo, setCurrentSection, sections } = useLesson();
const { setQuestions } = useQuiz();
const { toggleTeacherMode } = useTeacherMode();

setLessonInfo(lessonData.courseTitle, lessonData.lessonTitle);
setSections(lessonData.sections);
setQuestions(lessonData.quiz);

const practiceQuiz = ref<Question[]>([]);
let observer: IntersectionObserver | null = null;

onMounted(() => {
  practiceQuiz.value = allQuestions;

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        const index = sections.value.findIndex((s: any) => s.id === id);
        if (index !== -1) {
          setCurrentSection(index);
        }
      }
    });
  }, { threshold: 0.3 });

  setTimeout(() => {
    document.querySelectorAll("section[id], header[id]").forEach((sec) => {
      if (observer) observer.observe(sec);
    });
  }, 500);
});

onUnmounted(() => {
  if (observer) observer.disconnect();
});
</script>
