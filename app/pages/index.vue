<template>
  <div class="relative">
    <LessonSectionsSectionHero />
    <LessonSectionsSectionOpeningQuestion />
    <!-- Section 1: DIK -->
    <LessonSectionsDikSectionDIK />
    <LessonSectionsSectionDataTransformation />
    <LessonSectionsSectionActivity />
    <QuizSystemQuizSection sectionId="dik" />
    <!-- Section 2: Properties of Information -->
    <LessonSectionsSectionInformationProperties />
    <QuizSystemQuizSection sectionId="properties" />
    <!-- Section 3 & 4: Primary/Secondary & Cross-checking -->
    <LessonSectionsSectionInfoComparison />
    <LessonSectionsSectionVerification />
    <QuizSystemQuizSection sectionId="primary-secondary-cross" />
    <!-- Section 5: Media -->
    <LessonSectionsSectionMediaExplorer />
    <QuizSystemQuizSection sectionId="media" />
    <!-- Section 6: Media Literacy -->
    <LessonSectionsSectionMediaLiteracy />
    <QuizSystemQuizSection sectionId="media-literacy" />
    <!-- Section 7: Final Review -->
    <LessonSectionsSectionFinalReview />
    <QuizSystemQuizSection sectionId="final-review" />
  </div>
</template>

<script setup lang="ts">
import { useLesson } from '~/composables/useLesson'
import { onMounted, onUnmounted } from 'vue'
import { PartyPopper, Clock } from 'lucide-vue-next'

const { setCurrentSection, sections } = useLesson()

let observer: IntersectionObserver

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id
        const index = sections.findIndex(s => s.id === id)
        if (index !== -1) {
          setCurrentSection(index)
        }
      }
    })
  }, { threshold: 0.5 })

  document.querySelectorAll('section[id]').forEach(sec => {
    observer.observe(sec)
  })
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>
