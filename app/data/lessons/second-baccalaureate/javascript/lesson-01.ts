export const lessonData = {
  courseTitle: 'الثانية بكالوريا',
  lessonTitle: 'الدرس الأول | مقدمة إلى JavaScript',
  sections: [
    { id: 'hero', title: 'البداية' },
    { id: 'opening', title: 'سؤال البداية' },
    { id: 'programming', title: 'البرمجة' },
    { id: 'javascript', title: 'JavaScript' },
    { id: 'why-js', title: 'لماذا JavaScript' },
    { id: 'html-css-js', title: 'HTML / CSS / JS' },
    { id: 'how-it-works', title: 'كيف تعمل JavaScript' },
    { id: 'first-code', title: 'أول كود' },
    { id: 'console-log', title: 'console.log' },
    { id: 'playground', title: 'Playground' },
    { id: 'real-world', title: 'JavaScript في حياتنا' },
    { id: 'challenges', title: 'Challenges' },
    { id: 'quiz', title: 'Quiz' },
    { id: 'summary', title: 'Summary' },
    { id: 'final-challenge', title: 'Final Challenge' },
    { id: 'homework', title: 'Homework' },
    { id: 'next', title: 'Next Lesson' }
  ],
  quiz: [
    { text: "JavaScript هي...", options: ["لغة لتنسيق الألوان فقط", "لغة برمجة", "لغة لتخزين الصور"], correct: 1, explanation: "JavaScript هي لغة برمجة تستخدم لإضافة التفاعل للمواقع." },
    { text: "مين المسؤول عن شكل الصفحة وتنسيقها؟", options: ["HTML", "CSS", "JavaScript"], correct: 1, explanation: "CSS هي المسؤولة عن المظهر والألوان والتصميم." },
    { text: "مين المسؤول عن التفاعل والسلوك في صفحة الويب؟", options: ["HTML", "CSS", "JavaScript"], correct: 2, explanation: "JavaScript تضيف المنطق والتفاعل للعناصر." },
    { text: "ما هي وظيفة console.log()؟", options: ["تلوين النصوص", "إخفاء الصفحة", "عرض قيمة أو رسالة في الـConsole"], correct: 2, explanation: "console.log() تستخدم لطباعة النتائج لكي نتمكن من رؤيتها." },
    { text: 'ما هي نتيجة console.log("Hello")؟', options: ["Error", "Hello", "Nothing"], correct: 1, explanation: "ستطبع كلمة Hello تماماً كما كُتبت." },
    { text: "ما هي نتيجة console.log(10 + 20)؟", options: ["1020", "30", "Error"], correct: 1, explanation: "JavaScript ستقوم بجمع الرقمين وتطبع 30." },
    { text: "هل JavaScript تستخدم فقط في المواقع؟", options: ["نعم، فقط في المتصفح", "لا، يمكن استخدامها في الخوادم والتطبيقات أيضاً", "نعم، للمواقع البسيطة فقط"], correct: 1, explanation: "بفضل بيئات مثل Node.js، تُستخدم JavaScript في العديد من المجالات." },
    { text: "لو ضغطت على زر والموقع استجاب للضغط، مين غالبًا مسؤول عن السلوك ده؟", options: ["HTML", "CSS", "JavaScript"], correct: 2, explanation: "JavaScript هي المسؤولة عن الاستجابة لأفعال المستخدم (مثل النقر)." }
  ]
}
