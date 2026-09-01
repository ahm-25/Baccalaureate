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

    <!-- Link on to lesson two -->
    <LessonSectionsSectionNextLessonLink />
  </div>
</template>

<script setup lang="ts">
import { useLesson } from '~/composables/useLesson'
import { onMounted, onUnmounted, computed } from 'vue'
import { lesson01Questions } from '~/data/lessons/first-baccalaureate/lesson-01-questions'

const { setCurrentSection, setSections, setLessonInfo, sections } = useLesson()

// useLesson holds one shared state for every lesson page, so this page has to
// claim it back after a visit to another lesson — otherwise the side rail keeps
// showing that lesson's sections. The ids below are the ones this page renders.
setLessonInfo('الأولى بكالوريا', 'الدرس الأول')
setSections([
  { id: 'hero', title: 'البداية' },
  { id: 'opening', title: 'سؤال البداية' },
  { id: 'dik', title: 'البيانات والمعلومات والمعرفة' },
  { id: 'data', title: 'من البيانات إلى المعرفة' },
  { id: 'activity', title: 'النشاط' },
  { id: 'properties', title: 'خصائص المعلومات' },
  { id: 'info', title: 'المعلومات الأولية والثانوية' },
  { id: 'verification', title: 'التحقق المتبادل' },
  { id: 'media-types', title: 'الوسائط وأنواعها' },
  { id: 'media-literacy', title: 'الثقافة الإعلامية' },
  { id: 'book-exercises', title: 'تحدى معلوماتك' },
  { id: 'final-review', title: 'المراجعة الشاملة' },
  { id: 'next-lesson-link', title: 'الدرس القادم' }
])

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
        const index = sections.value.findIndex((s: any) => s.id === id)
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
