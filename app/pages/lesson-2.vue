<template>
  <div class="relative">
    <!-- 01 -->
    <Lesson02Hero />
    <!-- 02 -->
    <Lesson02OpeningQuestion />

    <!-- 03 -->
    <LazyLesson02Ethics />
    <QuizQuestionSection
      :questions="ethicsQuestions"
      section-title="أخلاقيات المعلومات"
      section-id="ethics" />

    <!-- 04 -->
    <LazyLesson02Publishing />
    <QuizQuestionSection
      :questions="publishingQuestions"
      section-title="قواعد النشر على الإنترنت"
      section-id="publishing" />

    <!-- 05 -->
    <LazyLesson02Geotagging />
    <QuizQuestionSection
      :questions="geotaggingQuestions"
      section-title="العلامة الجغرافية"
      section-id="geotagging" />

    <!-- 06 -->
    <LazyLesson02Disinformation />
    <QuizQuestionSection
      :questions="disinformationQuestions"
      section-title="المعلومات المضللة والشائعات"
      section-id="disinformation" />

    <!-- 07 -->
    <LazyLesson02SocialMedia />

    <!-- 08 -->
    <LazyLesson02Problems />
    <QuizQuestionSection
      :questions="problemsQuestions"
      section-title="مشاكل الهواتف الذكية ووسائل التواصل"
      section-id="problems" />

    <!-- 09 -->
    <LazyLesson02Activity />

    <!-- 10 -->
    <LazyLesson02BookExercises />

    <!-- 11 -->
    <LazyLesson02FinalQuiz />

    <!-- 12 -->
    <LazyLesson02Summary />

    <!-- 13 -->
    <LazyLesson02Challenge />

    <!-- 14 -->
    <LazyLesson02Homework />

    <!-- 15 -->
    <LazyLesson02NextLesson />
  </div>
</template>

<script setup lang="ts">
import { useLesson } from '~/composables/useLesson'
import { lessonData } from '~/data/lessons/first-baccalaureate/lesson-02'
import { lesson02Questions } from '~/data/lessons/first-baccalaureate/lesson-02-questions'
import { onMounted, onUnmounted, computed } from 'vue'

const { setSections, setLessonInfo, setCurrentSection, sections } = useLesson()

setLessonInfo(lessonData.courseTitle, lessonData.lessonTitle)
setSections(lessonData.sections)

const questionsFor = (id: string) => lesson02Questions.find(q => q.id === id)?.questions || []

const ethicsQuestions = computed(() => questionsFor('ethics'))
const publishingQuestions = computed(() => questionsFor('publishing'))
const geotaggingQuestions = computed(() => questionsFor('geotagging'))
const disinformationQuestions = computed(() => questionsFor('disinformation'))
const problemsQuestions = computed(() => questionsFor('problems'))

let observer: IntersectionObserver

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const index = sections.value.findIndex((s: any) => s.id === entry.target.id)
        if (index !== -1) setCurrentSection(index)
      }
    })
  }, { threshold: 0.3 })

  document.querySelectorAll('section[id]').forEach(sec => observer.observe(sec))
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>
