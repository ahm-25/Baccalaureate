import { ref, computed } from 'vue'

export const useQuiz = () => {
  const currentQuestion = ref(0)
  const score = ref(0)
  const isFinished = ref(false)
  
  const questions = [
    { text: "تعتبر التجربة الشخصية من مصادر:", options: ["المعلومات الأولية", "المعلومات الثانوية", "الوسائط"], correct: 0, explanation: "لأن المعلومات تم الحصول عليها بشكل مباشر." },
    { text: "قراءة مقال في جريدة يعتبر:", options: ["معلومات أولية", "معلومات ثانوية", "بيانات"], correct: 1, explanation: "لأن المعلومات تم الحصول عليها عبر طرف ثالث (الصحيفة)." },
    { text: "الوسائل المستخدمة للتعبير عن المعلومات تسمى:", options: ["وسائل التخزين", "وسائل النقل", "وسائل الإعلام التعبيرية"], correct: 2, explanation: "مثل النص والصور والصوت." },
    { text: "أي من التالي يعتبر من وسائل التخزين؟", options: ["التلفزيون", "محرك USB", "الصورة"], correct: 1, explanation: "USB يستخدم لتخزين وتسجيل المعلومات." },
    { text: "القدرة على تفسير المعلومات بدقة هي:", options: ["الثقافة الإعلامية", "البيانات", "المعرفة"], correct: 0, explanation: "الثقافة الإعلامية تعني تحليل وفهم المعلومات القادمة من الوسائط." },
    { text: "درجات الطلاب 85, 90, 75 هي مثال على:", options: ["البيانات", "المعلومات", "المعرفة"], correct: 0, explanation: "البيانات هي حقائق خام قبل معالجتها." },
    { text: "متوسط درجات الطلاب هو مثال على:", options: ["البيانات", "المعلومات", "المعرفة"], correct: 1, explanation: "المعلومات هي بيانات تمت معالجتها ليكون لها معنى." },
    { text: "اتخاذ قرار بناءً على المعلومات يعتبر:", options: ["بيانات", "معلومات", "معرفة"], correct: 2, explanation: "المعرفة هي استخدام المعلومات بشكل منهجي لحل المشكلات." }
  ]

  const answerQuestion = (optionIndex: number) => {
    const isCorrect = optionIndex === questions[currentQuestion.value].correct
    if (isCorrect) score.value++
    return {
      isCorrect,
      explanation: questions[currentQuestion.value].explanation
    }
  }

  const nextQuestion = () => {
    if (currentQuestion.value < questions.length - 1) {
      currentQuestion.value++
    } else {
      isFinished.value = true
    }
  }

  const resetQuiz = () => {
    currentQuestion.value = 0
    score.value = 0
    isFinished.value = false
  }

  return {
    currentQuestion,
    questions,
    score,
    isFinished,
    answerQuestion,
    nextQuestion,
    resetQuiz
  }
}
