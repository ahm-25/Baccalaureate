<template>
  <div class="relative">
    <JavascriptHero />
    <JavascriptOpening />
    <JavascriptWhatIsProgramming />
    <JavascriptWhatIsJS />
    <JavascriptWhyJS />
    <JavascriptHtmlCssJs />
    <JavascriptHowItWorks />
    <JavascriptFirstCode />
    <JavascriptConsoleLog />
    
    <!-- Using id 'playground' mapped to the section real-world to match our section data, or wait, playground was not a separate full section but a component. Let's make sure the IDs match the lesson-01.ts definitions -->
    <section id="playground" class="hidden"></section> <!-- Placeholder to satisfy the scrollspy if playground is just a component inside others -->
    
    <JavascriptRealWorld />
    <JavascriptChallenges />
    <QuizLessonQuiz />
    <JavascriptSummary />
    <JavascriptFinalChallenge />
    <JavascriptHomework />
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
