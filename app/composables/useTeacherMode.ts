import { ref, computed } from 'vue'
import { useLesson } from './useLesson'

export const useTeacherMode = () => {
  const isTeacherMode = ref(false)
  const { currentSectionIndex } = useLesson()

  const toggleTeacherMode = () => {
    isTeacherMode.value = !isTeacherMode.value
  }

  // Mock teacher notes per section index (can be expanded)
  const teacherNotes = {
    3: {
      question: "هل ممكن تكون المعلومة صحيحة لكن مصدرها غير موثوق؟",
      note: "خلي الطلاب يذكروا أمثلة من Facebook وTikTok.",
      time: "7 دقائق"
    }
  }

  const currentNotes = computed(() => {
    return teacherNotes[currentSectionIndex.value as keyof typeof teacherNotes] || {
      question: "اطرح سؤال تفاعلي هنا",
      note: "ركز على النقاش المفتوح مع الطلاب.",
      time: "5 دقائق"
    }
  })

  return {
    isTeacherMode,
    toggleTeacherMode,
    currentNotes
  }
}
