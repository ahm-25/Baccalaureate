import { ref } from 'vue'

const currentSectionIndex = ref(0)
const sections = ref([
  { id: 'hero', title: 'Hero' },
  { id: 'opening', title: 'سؤال البداية' },
  { id: 'info', title: 'المعلومات' },
  { id: 'verification', title: 'التحقق' },
  { id: 'media', title: 'الوسائط' },
  { id: 'media-types', title: 'أنواع الوسائط' },
  { id: 'literacy', title: 'الثقافة الإعلامية' },
  { id: 'data', title: 'البيانات' },
  { id: 'characteristics', title: 'خصائص المعلومات' },
  { id: 'activity', title: 'النشاط' },
  { id: 'quiz', title: 'الاختبار' },
  { id: 'summary', title: 'الملخص' },
  { id: 'challenge', title: 'التحدي' },
  { id: 'homework', title: 'الواجب' },
  { id: 'next', title: 'الدرس القادم' }
])
const courseTitle = ref('الأولى بكالوريا')
const lessonTitle = ref('الدرس الأول')

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
