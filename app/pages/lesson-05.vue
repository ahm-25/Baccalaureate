<template>
  <div class="relative">
    <AiLesson05Hero />
    <AiLesson05Objectives />
    <AiLesson05OpeningQuestion />
    <AiLesson05WhatIsAi />
    <QuizQuestionArena 
      :questions="whatIsAiQuestions" 
      section-title="تطبيق عملي: ما هو الذكاء الاصطناعي؟" 
      section-id="what-is-ai-quiz" 
    />
    <AiLesson05DailyLife />
    <AiLesson05Hierarchy />
    <AiLesson05ConceptCards />
    <AiLesson05GenAi />
    <AiLesson05StopThink />
    <AiLesson05Hallucination />
    <AiLesson05SolvedExample />
    <AiLesson05ThinkEngineer />
    <QuizQuestionArena 
      :questions="finalReviewQuiz" 
      section-title="اختبار الدرس الشامل" 
      section-id="final-review" 
    />
    <AiLesson05Summary />
    <AiLesson05ExamQuestion />

    <!-- Top Navigation for Teacher/User (Optional floating or embedded) -->
    <div class="fixed top-24 left-6 z-40 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-gray-100 flex items-center p-2 gap-4">
      <NuxtLink to="/lesson-04" class="text-gray-500 hover:text-purple-600 transition-colors text-sm font-bold flex items-center gap-1">
        <span>&rarr;</span> السابق
      </NuxtLink>
      <div class="w-px h-4 bg-gray-300"></div>
      <button @click="toggleTeacherMode" class="text-purple-700 font-bold hover:text-purple-900 transition-colors flex items-center gap-2">
        <span class="text-lg">🖊️</span> وضع الشرح
      </button>
      <div class="w-px h-4 bg-gray-300"></div>
      <NuxtLink to="/" class="text-gray-500 hover:text-purple-600 transition-colors text-sm font-bold flex items-center gap-1">
        التالي <span>&larr;</span>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useLesson } from '~/composables/useLesson'
import { useQuiz } from '~/composables/useQuiz'
import { useTeacherMode } from '~/composables/useTeacherMode'
import { lessonData } from '~/data/lessons/second-baccalaureate/ai/lesson-05'
import { whatIsAiQuestions, finalReviewQuiz } from '~/data/lessons/second-baccalaureate/ai/lesson-05-questions'
import { onMounted, onUnmounted } from 'vue'

const { setSections, setLessonInfo, setCurrentSection, sections } = useLesson()
const { setQuestions } = useQuiz()
const { toggleTeacherMode } = useTeacherMode()

setLessonInfo(lessonData.courseTitle, lessonData.lessonTitle)
setSections(lessonData.sections)
setQuestions(lessonData.quiz) // Just the summary questions if needed

let observer: IntersectionObserver

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id
        const index = sections.value.findIndex((s: any) => s.id === id)
        if (index !== -1) {
          setCurrentSection(index)
        }
      }
    })
  }, { threshold: 0.3 })

  document.querySelectorAll('section[id]').forEach(sec => {
    observer.observe(sec)
  })
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>
