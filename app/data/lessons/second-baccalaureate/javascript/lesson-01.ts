export const lessonData = {
  courseTitle: 'تانية بكالوريا',
  lessonTitle: 'الدرس الأول | أساسيات البرمجة باستخدام JavaScript',
  sections: [
    { id: 'hero', title: 'البداية' },
    { id: 'opening', title: 'يعني إيه برمجة؟' },
    { id: 'how-it-works', title: 'الكمبيوتر بيفهم إزاي؟' },
    { id: 'what-is-js', title: 'إزاي نكتب التعليمات دي؟' },
    { id: 'first-code', title: 'أول كود ليك في JavaScript' },
    { id: 'understand-instruction', title: 'إيه اللي حصل هنا؟' },
    { id: 'data-intro', title: 'البرنامج بيتعامل مع بيانات' },
    { id: 'text-and-numbers', title: 'النصوص والأرقام' },
    { id: 'important-example', title: 'خلي بالك من الفرق' },
    { id: 'real-world', title: 'أمثلة حقيقية' },
    { id: 'think-like-programmer', title: 'فكر كـ مبرمج' },
    { id: 'common-mistakes', title: 'أخطاء شائعة' },
    { id: 'challenges', title: 'جرب بنفسك' },
    { id: 'quiz', title: 'اختبر نفسك' },
    { id: 'final-challenge', title: 'تحدي الحصة' },
    { id: 'summary', title: 'ملخص الدرس' },
    { id: 'next', title: 'إيه اللي جاي؟' }
  ],
  quiz: [
    { text: "ما هي نتيجة console.log(10 + 20)؟", options: ["1020", "30", "Error"], correct: 1, explanation: "الأرقام يتم جمعها بشكل صحيح." },
    { text: 'ما هي نتيجة console.log("10" + "20")؟', options: ["30", "Error", "1020"], correct: 2, explanation: "لأن القيمتين نصوص (Strings)، يتم دمجهم وليس جمعهم." },
    { text: 'أي من القيم التالية يُعتبر رقماً (Number)؟', options: ['"50"', '50', '"Ahmed"'], correct: 1, explanation: "الرقم يكتب بدون Quotation marks." },
    { text: 'كيف نصلح هذا الكود: console.log(Hello);', options: ['إزالة الأقواس', 'كتابة console.log("Hello");', 'كتابة console.Log(Hello);'], correct: 1, explanation: "كلمة Hello نص، ويجب أن توضع بين Quotation marks." },
    { text: 'ما هي وظيفة الأمر console.log()؟', options: ['مسح البيانات', 'تلوين الصفحة', 'عرض قيمة أو رسالة في الـ Console'], correct: 2, explanation: "يُستخدم الأمر لعرض النتائج." }
  ]
}
