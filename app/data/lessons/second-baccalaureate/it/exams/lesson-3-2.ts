import type { AssessmentBlock } from '../assessments/types';

// امتحان الدرس 3-2 في مذكرة الوحدتين الثالثة والرابعة («عبد الناصر في البرمجة»)، محلول وفق كتاب البرمجة والذكاء الاصطناعي.
// MCQ options keep the exam order (أ، ب، ج، د) so correctAnswerIndex matches the exam letter;
// true/false questions use option 0 for ✓ and option 1 for ✗.

export const assessmentBlocks: AssessmentBlock[] = [
  {
    id: 'ex32-mcq',
    period: '5 درجات',
    title: 'أولًا: اختر الإجابة الصحيحة',
    quizTitle: 'أولًا: اختر الإجابة الصحيحة',
    essays: [],
    mcqs: [
      {
        id: 'ex32-q1', type: 'mcq', difficulty: 'easy',
        text: 'البرنامج أو الجهاز الذي يرسل طلبًا إلى خدمة أخرى:',
        options: ['الخادم', 'العميل', 'قاعدة البيانات', 'API'],
        correctAnswerIndex: 1,
        explanation: 'الإجابة الصحيحة هي (ب) العميل.'
      },
      {
        id: 'ex32-q2', type: 'mcq', difficulty: 'easy',
        text: 'طريقة طلب HTTP المناسبة لإرسال معلومات تسجيل الدخول:',
        options: ['GET', 'POST', '404', 'JSON'],
        correctAnswerIndex: 1,
        explanation: 'الإجابة الصحيحة هي (ب) POST.'
      },
      {
        id: 'ex32-q3', type: 'mcq', difficulty: 'easy',
        text: 'رمز حالة HTTP الذي يعني نجاح معالجة الطلب:',
        options: ['200', '404', '500', '301'],
        correctAnswerIndex: 0,
        explanation: 'الإجابة الصحيحة هي (أ) 200.'
      },
      {
        id: 'ex32-q4', type: 'mcq', difficulty: 'easy',
        text: 'صيغة نصية شائعة لتمثيل البيانات المهيكلة بالمفتاح والقيمة:',
        options: ['HTML', 'JSON', 'HTTP', 'CSS'],
        correctAnswerIndex: 1,
        explanation: 'الإجابة الصحيحة هي (ب) JSON.'
      },
      {
        id: 'ex32-q5', type: 'mcq', difficulty: 'easy',
        text: 'البروتوكول الذي يستخدم HTTP عبر اتصال TLS آمن:',
        options: ['HTTPS', 'API', 'GET', 'FTP'],
        correctAnswerIndex: 0,
        explanation: 'الإجابة الصحيحة هي (أ) HTTPS.'
      }
    ]
  },
  {
    id: 'ex32-tf',
    period: '5 درجات',
    title: 'ثانيًا: ضع علامة (✓) أو علامة (✗)',
    quizTitle: 'ثانيًا: صح أم خطأ؟',
    essays: [],
    mcqs: [
      {
        id: 'ex32-q6', type: 'mcq', difficulty: 'easy',
        text: 'أسلوب GET يُستخدم عادةً لطلب مورد أو بيانات من الخادم.',
        options: ['✓ عبارة صحيحة', '✗ عبارة خاطئة'],
        correctAnswerIndex: 0,
        explanation: 'العبارة صحيحة ✓.'
      },
      {
        id: 'ex32-q7', type: 'mcq', difficulty: 'easy',
        text: 'رمز الحالة 500 يحدد بالتفصيل سبب خطأ الخادم.',
        options: ['✓ عبارة صحيحة', '✗ عبارة خاطئة'],
        correctAnswerIndex: 1,
        explanation: 'العبارة خاطئة ✗؛ الرمز 500 يشير إلى خطأ داخلي في الخادم، لكنه لا يحدد السبب التفصيلي وحده.'
      },
      {
        id: 'ex32-q8', type: 'mcq', difficulty: 'easy',
        text: 'API مجموعة قواعد تسمح لبرنامج بطلب بيانات أو وظائف من برنامج آخر.',
        options: ['✓ عبارة صحيحة', '✗ عبارة خاطئة'],
        correctAnswerIndex: 0,
        explanation: 'العبارة صحيحة ✓.'
      },
      {
        id: 'ex32-q9', type: 'mcq', difficulty: 'easy',
        text: 'مع HTTP العادي لا يستطيع المتجسس قراءة المحتوى.',
        options: ['✓ عبارة صحيحة', '✗ عبارة خاطئة'],
        correctAnswerIndex: 1,
        explanation: 'العبارة خاطئة ✗؛ HTTP العادي غير مشفر؛ أما HTTPS فيحمي سرية الاتصال وسلامته عبر TLS.'
      },
      {
        id: 'ex32-q10', type: 'mcq', difficulty: 'easy',
        text: 'المواقع التي تبدأ عناوينها بـ https:// تستخدم اتصال HTTPS.',
        options: ['✓ عبارة صحيحة', '✗ عبارة خاطئة'],
        correctAnswerIndex: 0,
        explanation: 'العبارة صحيحة ✓.'
      }
    ]
  },
  {
    id: 'ex32-fill',
    period: '4 درجات',
    title: 'ثالثًا: أكمل العبارات التالية',
    essaysTitle: '📝 أكمل العبارات',
    essays: [
      {
        id: 'ex32-q11',
        text: 'يُسمى الرقم الذي يعيده الخادم ليشير إلى نتيجة المعالجة ............',
        answer: [
          'رمز حالة HTTP'
        ]
      },
      {
        id: 'ex32-q12',
        text: 'رمز الحالة 404 يعني أن ............',
        answer: [
          'المورد المطلوب غير موجود'
        ]
      },
      {
        id: 'ex32-q13',
        text: 'في JSON التالي: "city": "Cairo" المفتاح هو ............ والقيمة ............',
        answer: [
          'city ، Cairo'
        ]
      },
      {
        id: 'ex32-q14',
        text: 'HTTP اختصار لـ ............',
        answer: [
          'بروتوكول نقل النص التشعبي'
        ]
      }
    ],
    mcqs: []
  },
  {
    id: 'ex32-essay',
    period: '6 درجات',
    title: 'رابعًا: أجب عما يأتي',
    essaysTitle: '✍️ الأسئلة المقالية',
    essays: [
      {
        id: 'ex32-q15',
        text: 'قارن بين GET وPOST من حيث الدور مع مثال لكل منهما.',
        answer: [
          'GET: طلب مورد أو بيانات من الخادم (عرض صفحة، نتائج بحث)',
          'POST: إرسال بيانات ليعالجها الخادم (تسجيل الدخول، إرسال نموذج).'
        ]
      },
      {
        id: 'ex32-q16',
        text: 'مدرسة تصمم تطبيقًا يسجل فيه الطلاب الدخول ويعرضون جدولهم: حدد الطريقة المناسبة لتسجيل الدخول وعرض الجدول، ولماذا يجب استخدام HTTPS؟',
        answer: [
          'تسجيل الدخول: POST',
          'عرض الجدول: GET',
          'HTTPS لتشفير كلمات المرور والبيانات فلا تُقرأ أو تُعدّل أثناء النقل.'
        ]
      }
    ],
    mcqs: []
  }
];
