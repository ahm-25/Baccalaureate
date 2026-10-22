// useState keeps one copy per request on the server and hands it to the browser,
// so the lesson bar never shows another visitor's lesson or mismatches on hydration
export const useLesson = () => {
  const currentSectionIndex = useState('lesson-current-section', () => 0)
  const sections = useState<{ id: string; title: string }[]>('lesson-sections', () => [])
  const courseTitle = useState('lesson-course-title', () => 'تانية بكالوريا')
  const lessonTitle = useState('lesson-title', () => 'البرمجة والذكاء الاصطناعي')

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
