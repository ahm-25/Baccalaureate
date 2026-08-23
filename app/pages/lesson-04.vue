<template>
  <div class="relative">
    <ItLesson04Hero />
    <ItLesson04Objectives />
    <ItLesson04DailyLife />
    <QuizQuestionArena 
      :questions="dailyLifeQuestions" 
      section-title="تكنولوجيا المعلومات حولك" 
      section-id="daily-life" 
    />
    <ItLesson04BigIdea />
    <ItLesson04EvolutionTimeline />
    <QuizQuestionArena 
      :questions="timelineQuestions" 
      section-title="تاريخ تكنولوجيا المعلومات" 
      section-id="timeline" 
    />
    <ItLesson04MooresLaw />
    <QuizQuestionArena 
      :questions="mooresLawQuestions" 
      section-title="قانون مور" 
      section-id="moores-law" 
    />
    <ItLesson04SocietyImpact />
    <QuizQuestionArena 
      :questions="socialChangesQuestions" 
      section-title="التغيرات الاجتماعية الناتجة عن تكنولوجيا المعلومات" 
      section-id="social-changes" 
    />
    <ItLesson04SocialVisual />
    <QuizQuestionArena 
      :questions="socialVisualQuestions" 
      section-title="كيف تغيّرت حياتنا؟" 
      section-id="social-visual-quiz" 
    />
    <ItLesson04EmergingTech />
    <QuizQuestionArena 
      :questions="emergingTechQuestions" 
      section-title="التقنيات الناشئة - مراجعة شاملة" 
      section-id="emerging-tech-summary" 
    />
    <QuizQuestionArena 
      :questions="keyTermsQuestions" 
      section-title="مصطلحات أساسية" 
      section-id="key-terms" 
    />
    <ItLesson04SolvedExample />
    <QuizQuestionArena 
      :questions="solvedExampleQuestions" 
      section-title="أسئلة تطبيقية" 
      section-id="solved-example-quiz" 
    />
    <QuizQuestionArena 
      :questions="finalReviewQuiz" 
      section-title="اختبر معلوماتك" 
      section-id="final-review" 
    />
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
import { 
  dailyLifeQuestions, 
  timelineQuestions,
  mooresLawQuestions,
  socialChangesQuestions,
  socialVisualQuestions,
  emergingTechQuestions,
  keyTermsQuestions,
  solvedExampleQuestions,
  finalReviewQuiz
} from '~/data/lessons/second-baccalaureate/it/lesson-04-questions'
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
