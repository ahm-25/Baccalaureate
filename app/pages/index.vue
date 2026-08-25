<template>
  <div class="relative">
    <LessonSectionsSectionHero />
    <LessonSectionsSectionOpeningQuestion />
    
    <!-- Section 1: DIK -->
    <LessonSectionsDikSectionDIK />
    <LessonSectionsSectionDataTransformation />
    <LessonSectionsSectionActivity />
    <QuizQuestionSection :questions="dikQuestions" section-title="البيانات والمعلومات والمعرفة" section-id="dik" />
    
    <!-- Section 2: Properties of Information -->
    <LessonSectionsSectionInformationProperties />
    <QuizQuestionSection :questions="propertiesQuestions" section-title="خصائص المعلومات" section-id="properties" />
    
    <!-- Section 3: Primary/Secondary Information -->
    <LessonSectionsSectionInfoComparison />
    <QuizQuestionSection :questions="srcQuestions" section-title="المعلومات الأولية والثانوية" section-id="primary-secondary" />
    
    <!-- Section 4: Cross-checking -->
    <LessonSectionsSectionVerification />
    <QuizQuestionSection :questions="crossQuestions" section-title="التحقق المتبادل" section-id="cross-checking" />
    
    <!-- Section 5 & 6: Media -->
    <LessonSectionsSectionMediaExplorer />
    <QuizQuestionSection :questions="mediaQuestions" section-title="الوسائط وأنواعها" section-id="media" />
    
    <!-- Section 7: Media Literacy -->
    <LessonSectionsSectionMediaLiteracy />
    <QuizQuestionSection :questions="literacyQuestions" section-title="الثقافة الإعلامية" section-id="media-literacy" />
    
    <!-- Section 8: Book Challenges -->
    <LessonSectionsSectionBookChallenges />
    
    <!-- Final Review -->
    <LessonSectionsSectionFinalReview />
    <QuizQuestionSection :questions="finalQuestions" section-title="الاختبار النهائي الشامل" section-id="final-review" />
  </div>
</template>

<script setup lang="ts">
import { useLesson } from '~/composables/useLesson'
import { onMounted, onUnmounted, computed } from 'vue'
import { lesson01Questions } from '~/data/lessons/first-baccalaureate/lesson-01-questions'

const { setCurrentSection, sections } = useLesson()

const getQuestionsFor = (id: string) => {
  return lesson01Questions.find(q => q.id === id)?.questions || []
}

const dikQuestions = computed(() => getQuestionsFor('dik'))
const propertiesQuestions = computed(() => getQuestionsFor('properties'))
const srcQuestions = computed(() => getQuestionsFor('primary-secondary'))
const crossQuestions = computed(() => getQuestionsFor('cross-checking'))
const mediaQuestions = computed(() => getQuestionsFor('media'))
const literacyQuestions = computed(() => getQuestionsFor('media-literacy'))
const finalQuestions = computed(() => getQuestionsFor('final-review'))

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
