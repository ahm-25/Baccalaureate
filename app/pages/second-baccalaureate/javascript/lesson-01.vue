<template>
  <div class="relative">
    <JavascriptHero />
    <JavascriptOpening />
    <JavascriptHowItWorks />
    <JavascriptWhatIsJS />
    <JavascriptFirstCode />
    <JavascriptUnderstandInstruction />
    <JavascriptDataIntro />
    <JavascriptTextAndNumbers />
    <JavascriptImportantExample />
    <JavascriptRealWorld />
    <JavascriptThinkLikeProgrammer />
    <JavascriptCommonMistakes />
    <JavascriptChallenges />
    <QuizLessonQuiz />
    <JavascriptFinalChallenge />
    <JavascriptSummary />
    <JavascriptNextLesson />
  </div>
</template>

<script setup lang="ts">
import { useLesson } from '~/composables/useLesson'
import { useQuiz } from '~/composables/useQuiz'
import { lessonData } from '~/data/lessons/second-baccalaureate/javascript/lesson-01'
import { onMounted, onUnmounted } from 'vue'

const { setSections, setLessonInfo, setCurrentSection, sections } = useLesson()
const { setQuestions } = useQuiz()

// Initialize lesson specific data
setLessonInfo(lessonData.courseTitle, lessonData.lessonTitle)
setSections(lessonData.sections)
setQuestions(lessonData.quiz)

let observer: IntersectionObserver

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id
        const index = sections.value.findIndex(s => s.id === id)
        if (index !== -1) {
          setCurrentSection(index)
        }
      }
    })
  }, { threshold: 0.3 })

  // Observe all sections
  document.querySelectorAll('section[id]').forEach(sec => {
    observer.observe(sec)
  })
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>

