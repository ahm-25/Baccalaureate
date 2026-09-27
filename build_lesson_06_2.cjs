const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'app/components/ai/lesson-06');
const dataDir = path.join(__dirname, 'app/data/lessons/second-baccalaureate/ai');
const pagesDir = path.join(__dirname, 'app/pages');

fs.mkdirSync(componentsDir, { recursive: true });
fs.mkdirSync(dataDir, { recursive: true });
fs.mkdirSync(pagesDir, { recursive: true });

const write = (p, content) => fs.writeFileSync(p, content);

// Data files
write(path.join(dataDir, 'lesson-06.ts'), `export const lessonData = {
  courseTitle: "تانية بكالوريا",
  lessonTitle: "1-4 القضايا الأخلاقية المتعلقة بالذكاء الاصطناعي",
  sections: [
    { id: "hero", title: "البداية" },
    { id: "objectives", title: "أهداف التعلم" },
    { id: "lesson-map", title: "خريطة الدرس" },
    { id: "opening-question", title: "مقدمة" },
    { id: "algorithmic-bias", title: "التحيز الخوارزمي" },
    { id: "stop-think", title: "توقف وفكر" },
    { id: "training-data", title: "بيانات التدريب" },
    { id: "privacy", title: "الخصوصية" },
    { id: "xai", title: "الذكاء الاصطناعي القابل للتفسير (XAI)" },
    { id: "black-box", title: "مشكلة الصندوق الأسود" },
    { id: "principles", title: "مبادئ أخلاقيات الذكاء الاصطناعي" },
    { id: "responsibility", title: "المسؤولية" },
    { id: "case-study", title: "حالة دراسية" },
    { id: "solved-example", title: "مثال محلول" },
    { id: "exam-question", title: "سؤال امتحان" },
    { id: "practice-quiz", title: "تدرّب" },
    { id: "think-engineer", title: "فكر كمهندس" },
    { id: "apply-learned", title: "طبّق ما تعلمته" },
    { id: "summary", title: "الخلاصة" },
    { id: "reflection", title: "فكر وتحدَّ نفسك" }
  ],
  quiz: []
};`);

write(path.join(dataDir, 'lesson-06-questions.ts'), `export interface Question {
  text: string;
  options: string[];
  correct: number;
  explanation: string;
}
export const allQuestions: Question[] = [
  { text: "ما المقصود بالتحيز الخوارزمي؟", options: ["نمط في مخرجات الذكاء الاصطناعي قد يؤدي إلى نتائج غير عادلة.", "سرعة تنفيذ الخوارزمية للعمليات الحسابية.", "قدرة النظام على تفسير قراراته بشكل واضح.", "خطأ في كتابة الكود البرمجي للنظام."], correct: 0, explanation: "التحيز الخوارزمي هو نمط يؤدي لنتائج غير عادلة وغالبًا ما ينشأ من بيانات التدريب." },
  { text: "ما المقصود ببيانات التدريب؟", options: ["البيانات التي تُستخدم لاختبار سرعة الجهاز.", "الأمثلة التي يتعلم منها نظام الذكاء الاصطناعي أنماطه قبل استخدامه.", "بيانات شخصية يجمعها النظام أثناء التشغيل.", "نتائج النظام بعد الانتهاء من العمل."], correct: 1, explanation: "بيانات التدريب هي الأمثلة الأساسية التي يُبنى عليها النظام ويتعلم منها." },
  { text: "لماذا يمكن أن تؤدي بيانات التدريب المتحيزة إلى نتائج غير عادلة؟", options: ["لأنها تجعل النظام أبطأ في اتخاذ القرارات.", "لأن النظام يحذف هذه البيانات تلقائيًا.", "لأن النظام يتعلم هذا النمط ويكرره في قراراته.", "لأنها تزيد من سعة التخزين المطلوبة."], correct: 2, explanation: "نظام الذكاء الاصطناعي يحاكي الأنماط الموجودة في البيانات، فإذا كانت متحيزة، ستكون النتائج كذلك." },
  { text: "ما المقصود بالعدالة في أخلاقيات الذكاء الاصطناعي؟", options: ["توزيع النظام مجانًا على جميع المستخدمين.", "عدم التمييز ظلمًا ضد شخص أو مجموعة.", "إتاحة كود النظام المصدري للجميع.", "سرعة استجابة النظام لكل المستخدمين بالتساوي."], correct: 1, explanation: "العدالة تعني ضمان أن النظام لا يتحيز ضد فئة معينة ويوفر نتائج متكافئة وعادلة." },
  { text: "ما المقصود بالشفافية؟", options: ["تصميم واجهة مستخدم بألوان فاتحة.", "إتاحة معلومات واضحة ومناسبة عن النظام واستخدامه وعملية اتخاذ القرار.", "تحديد المسؤول عن تشغيل النظام.", "حماية بيانات المستخدمين من الاختراق."], correct: 1, explanation: "الشفافية تضمن وضوح كيفية عمل النظام وحدوده والبيانات التي يستخدمها." },
  { text: "ما وظيفة الذكاء الاصطناعي القابل للتفسير (XAI)؟", options: ["تسريع عملية معالجة البيانات.", "تشغيل النظام بدون الحاجة للإنترنت.", "مساعدة البشر على فهم العوامل التي أسهمت في وصول النظام لقراره.", "حماية النظام من الفيروسات والاختراقات."], correct: 2, explanation: "يساعد XAI في حل مشكلة الصندوق الأسود عبر توضيح سبب اتخاذ النظام لقرار معين." },
  { text: "ما الفرق بين XAI والمساءلة؟", options: ["XAI يحدد المسؤول، والمساءلة تشرح القرار.", "XAI يساعد على شرح القرار، والمساءلة تعني تحديد من يتحمل المسؤولية.", "لا يوجد فرق، كلاهما يعبران عن نفس المفهوم.", "XAI يستخدم في الطب، والمساءلة في الهندسة."], correct: 1, explanation: "XAI هو وسيلة تقنية لفهم القرار، بينما المساءلة هي مبدأ أخلاقي وقانوني لتحديد المسؤول." },
  { text: "أي مما يلي يُعد مثالًا على مشكلة تتعلق بخصوصية البيانات عند استخدام الذكاء الاصطناعي؟", options: ["بطء نظام التوظيف في قراءة السير الذاتية.", "المراقبة الجماعية باستخدام كاميرات التعرف على الوجه في الأماكن العامة.", "عدم قدرة النظام على تفسير أسباب قراره.", "رفض النظام لطلب توظيف بسبب خطأ في برمجة الواجهة."], correct: 1, explanation: "التعرف على الوجه وجمع البيانات الشخصية دون إذن صريح هو من أبرز تحديات الخصوصية." }
];`);

// Page
write(path.join(pagesDir, 'lesson-06.vue'), \`<template>
  <div class="relative">
    <AiLesson06Hero />
    <AiLesson06Objectives />
    <AiLesson06LessonMap />
    <AiLesson06OpeningQuestion />
    <AiLesson06AlgorithmicBias />
    <AiLesson06StopThink />
    <AiLesson06TrainingData />
    <AiLesson06Privacy />
    <AiLesson06Xai />
    <AiLesson06BlackBox />
    <AiLesson06Principles />
    <AiLesson06Responsibility />
    <AiLesson06CaseStudy />
    <AiLesson06SolvedExample />
    <AiLesson06ExamQuestion />
    <QuizQuestionArena v-if="practiceQuiz.length > 0" :questions="practiceQuiz" section-title="📝 تدرّب" section-id="practice-quiz" />
    <AiLesson06ThinkEngineer />
    <AiLesson06ApplyLearned />
    <AiLesson06Summary />
    <AiLesson06InteractiveReflect />
    <div class="fixed top-24 left-6 z-40 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-gray-100 flex items-center p-2 gap-4">
      <NuxtLink to="/lesson-05" class="text-gray-500 hover:text-indigo-600 transition-colors text-sm font-bold flex items-center gap-1"><span>&rarr;</span> السابق</NuxtLink>
      <div class="w-px h-4 bg-gray-300"></div>
      <button @click="toggleTeacherMode" class="text-indigo-700 font-bold hover:text-indigo-900 transition-colors flex items-center gap-2"><span class="text-lg">🖊️</span> وضع الشرح</button>
      <div class="w-px h-4 bg-gray-300"></div>
      <NuxtLink to="/lesson-02" class="text-gray-500 hover:text-indigo-600 transition-colors text-sm font-bold flex items-center gap-1">التالي <span>&larr;</span></NuxtLink>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { useLesson } from "~/composables/useLesson";
import { useQuiz } from "~/composables/useQuiz";
import { useTeacherMode } from "~/composables/useTeacherMode";
import { lessonData } from "~/data/lessons/second-baccalaureate/ai/lesson-06";
import { allQuestions } from "~/data/lessons/second-baccalaureate/ai/lesson-06-questions";
import type { Question } from "~/data/lessons/second-baccalaureate/it/lesson-04-questions";
const { setSections, setLessonInfo, setCurrentSection, sections } = useLesson();
const { setQuestions } = useQuiz();
const { toggleTeacherMode } = useTeacherMode();
setLessonInfo(lessonData.courseTitle, lessonData.lessonTitle);
setSections(lessonData.sections);
setQuestions(lessonData.quiz);
const practiceQuiz = ref<Question[]>([]);
let observer: IntersectionObserver;
onMounted(() => {
  practiceQuiz.value = allQuestions;
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        const index = sections.value.findIndex((s: any) => s.id === id);
        if (index !== -1) { setCurrentSection(index); }
      }
    });
  }, { threshold: 0.3 });
  document.querySelectorAll("section[id]").forEach((sec) => observer.observe(sec));
});
onUnmounted(() => { if (observer) observer.disconnect(); });
</script>\`);

console.log('Setup basic files.');
