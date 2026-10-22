import { ref } from 'vue'

const currentSectionIndex = ref(0)
const sections = ref<{ id: string; title: string }[]>([])
const courseTitle = ref('تانية بكالوريا')
const lessonTitle = ref('البرمجة والذكاء الاصطناعي')

export const useLesson = () => {
  const setCurrentSection = (index: number) => {
    if (index >= 0 && index < sections.value.length) {
      currentSectionIndex.value = index
    }
  }

  const setSections = (newSections: { id: string; title: string }[]) => {
    sections.value = newSections
    currentSectionIndex.value = 0
  }

  const setLessonInfo = (course: string, lesson: string) => {
    courseTitle.value = course
    lessonTitle.value = lesson
  }

  return {
    currentSectionIndex,
    sections,
    courseTitle,
    lessonTitle,
    setCurrentSection,
    setSections,
    setLessonInfo
  }
}
