<template>
  <div class="relative">
    <JavascriptL3Hero />
    <JavascriptL3OpeningQuestion />
    <JavascriptL3ProgrammingDecisions />
    <JavascriptL3RealLifeConditions />
    <JavascriptL3WhatIsCondition />
    <JavascriptL3IfStatement />
    <JavascriptL3ComparisonOperators />
    <JavascriptL3TrueFalse />
    <JavascriptL3IfVariables />
    <JavascriptL3ElseStatement />
    <JavascriptL3ElseIfStatement />
    <JavascriptL3DecisionFlowVisualizer />
    <JavascriptL3PlaygroundSection />
    <JavascriptL3RealWorld />
    <JavascriptL3MiniChallenges />
    <QuizLessonQuiz />
    <JavascriptL3CommonMistakes />
    <JavascriptL3FinalChallenge />
    <JavascriptL3Summary />
    <JavascriptL3Homework />
    <JavascriptL3NextLesson />
  </div>
</template>

<script setup lang="ts">
import { useLesson } from '~/composables/useLesson'
import { useQuiz } from '~/composables/useQuiz'
import { lessonData } from '~/data/lessons/second-baccalaureate/javascript/lesson-03'
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
