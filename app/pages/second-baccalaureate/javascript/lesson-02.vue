<template>
  <div class="relative">
    <JavascriptL2Hero />
    <JavascriptL2OpeningQuestion />
    <JavascriptL2WhatIsVariable />
    <JavascriptL2RealLifeAnalogy />
    <JavascriptL2CreatingVariables />
    <JavascriptL2Let />
    <JavascriptL2Const />
    <JavascriptL2LetVsConst />
    <JavascriptL2VariableNaming />
    <JavascriptL2DataTypes />
    <JavascriptL2TypeString />
    <JavascriptL2TypeNumber />
    <JavascriptL2TypeBoolean />
    <JavascriptL2DataTypeGame />
    <JavascriptL2ConsoleLog />
    <JavascriptL2PlaygroundSection />
    <JavascriptL2ChangeValue />
    <JavascriptL2Challenges />
    <QuizLessonQuiz />
    <JavascriptL2CommonMistakes />
    <JavascriptL2RealWorld />
    <JavascriptL2FinalChallenge />
    <JavascriptL2Summary />
    <JavascriptL2Homework />
    <JavascriptL2NextLesson />
  </div>
</template>

<script setup lang="ts">
import { useLesson } from '~/composables/useLesson'
import { useQuiz } from '~/composables/useQuiz'
import { lessonData } from '~/data/lessons/second-baccalaureate/javascript/lesson-02'
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
