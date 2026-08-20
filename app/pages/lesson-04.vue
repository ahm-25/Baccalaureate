<template>
  <div class="relative">
    <ItLesson04Hero />
    <ItLesson04Objectives />
    <ItLesson04DailyLife />
    <ItLesson04BigIdea />
    <ItLesson04EvolutionTimeline />
    <ItLesson04MooresLaw />
    <ItLesson04SocietyImpact />
    <ItLesson04SocialVisual />
    <ItLesson04EmergingTech />
    <ItLesson04KeyTerms />
    <ItLesson04SolvedExample />
    <QuizLessonQuiz />
    <ItLesson04InteractiveActivity />
    <ItLesson04ApplyLearned />
    <ItLesson04ThinkEngineer />
    <ItLesson04ExamStyle />
    <ItLesson04Summary />
  </div>
</template>

<script setup lang="ts">
import { useLesson } from '~/composables/useLesson'
import { useQuiz } from '~/composables/useQuiz'
import { lessonData } from '~/data/lessons/second-baccalaureate/it/lesson-04'
import { onMounted, onUnmounted } from 'vue'

const { setSections, setLessonInfo, setCurrentSection, sections } = useLesson()
const { setQuestions } = useQuiz()

setLessonInfo(lessonData.courseTitle, lessonData.lessonTitle)
setSections(lessonData.sections)
setQuestions(lessonData.quiz)

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
