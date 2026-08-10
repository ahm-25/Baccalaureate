import { ref } from 'vue'

export const useLesson = () => {
  const currentSectionIndex = ref(0)
  
  const sections = [
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
  ]

  const setCurrentSection = (index: number) => {
    if (index >= 0 && index < sections.length) {
      currentSectionIndex.value = index
    }
  }

  return {
    currentSectionIndex,
    sections,
    setCurrentSection
  }
}
