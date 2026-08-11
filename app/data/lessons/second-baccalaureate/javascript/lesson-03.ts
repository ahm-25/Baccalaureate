export const lessonData = {
  courseTitle: 'الثانية بكالوريا',
  lessonTitle: 'الدرس الثالث | الشروط واتخاذ القرارات',
  sections: [
    { id: 'hero', title: 'البداية' },
    { id: 'opening', title: 'سؤال البداية' },
    { id: 'programming-decisions', title: 'البرامج بتاخد قرارات' },
    { id: 'real-life', title: 'في حياتنا' },
    { id: 'what-is-condition', title: 'يعني إيه Condition؟' },
    { id: 'if-statement', title: 'if' },
    { id: 'comparison-operators', title: 'إزاي نسأل البرنامج؟' },
    { id: 'true-false', title: 'الشرط إجابته إيه؟' },
    { id: 'if-variables', title: 'فاكر الـVariables؟' },
    { id: 'else-statement', title: 'طيب لو الشرط غلط؟' },
    { id: 'else-if-statement', title: 'لو عندنا أكتر من احتمال؟' },
    { id: 'decision-visualizer', title: 'شجرة القرارات' },
    { id: 'playground', title: 'Playground' },
    { id: 'real-world', title: 'في التطبيقات الحقيقية' },
    { id: 'mini-challenges', title: 'تحديات صغيرة' },
    { id: 'quiz', title: 'Quiz' },
    { id: 'common-mistakes', title: 'أخطاء شائعة' },
    { id: 'final-challenge', title: 'التحدي الكبير' },
    { id: 'summary', title: 'ملخص' },
    { id: 'homework', title: 'الواجب' },
    { id: 'next', title: 'الدرس القادم' }
  ],
  quiz: [
    { text: "يعني إيه if؟", options: ["بنعرف بيها متغير", "بتكرر الكود", "بتنفذ الكود لو الشرط صحيح"], correct: 2, explanation: "كلمة if بتستخدم لتنفيذ بلوك من الكود لو كان الشرط صحيح (true)." },
    { text: "كلمة else بتعمل إيه؟", options: ["تنفذ البديل لما الشرط يكون خطأ", "بتوقف البرنامج", "بتطبع نص على الشاشة"], correct: 0, explanation: "كلمة else بتوفر مسار بديل للتنفيذ لو كان الشرط بتاع if غير صحيح (false)." },
    { text: "إيه هي النتيجة بتاعة 10 > 5؟", options: ["true", "false", "Error"], correct: 0, explanation: "عشرة أكبر من خمسة عبارة صحيحة، فبتكون النتيجة true." },
    { text: "إيه هي النتيجة بتاعة 5 > 10؟", options: ["true", "false", "Error"], correct: 1, explanation: "خمسة مش أكبر من عشرة، فبتكون النتيجة false." },
    { text: "إيه هي النتيجة بتاعة 10 === 10؟", options: ["true", "false", "Error"], correct: 0, explanation: "العشرة بتساوي عشرة، فبتكون النتيجة true." },
    { text: "معنى علامة >= إيه؟", options: ["أكبر من", "أكبر من أو يساوي", "يساوي"], correct: 1, explanation: "العلامة دي معناها أكبر من أو يساوي." },
    { text: "لو الكود ده اشتغل هيطبع إيه؟ let age = 20; if (age >= 18) { console.log('Adult'); }", options: ["Adult", "ولا حاجة", "Error"], correct: 0, explanation: "بما إن الـ age قيمته 20 وهي أكبر من 18، فالشرط صحيح وهيطبع Adult." },
    { text: "إيه اللي هيحصل لو شرط if خطأ وفي else موجودة؟", options: ["هيحصل Error", "هيتنفذ كود if", "هيتنفذ الكود اللي جوه else"], correct: 2, explanation: "لو الشرط خطأ، البرنامج بيتجاهل كود if وبيروح ينفذ الكود اللي في else." },
    { text: "إيه الكلمة اللي بتسمح لنا نضيف شرط إضافي؟", options: ["if else", "else if", "then"], correct: 1, explanation: "نستخدم else if لو عايزين نختبر شرط تاني لو الشرط الأول مانفعش." },
    { text: "أي شرط في البرمجة نتيجته النهائية لازم تكون إيه؟", options: ["رقم", "نص", "true أو false"], correct: 2, explanation: "أي شرط (Condition) في النهاية بيتم تقييمه إلى قيمة منطقية: يا إما true (صحيح) أو false (خطأ)." }
  ]
}
