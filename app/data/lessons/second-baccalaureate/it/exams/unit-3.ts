import type { AssessmentBlock } from '../assessments/types';

// الاختبار الشامل في مذكرة الوحدتين الثالثة والرابعة («عبد الناصر في البرمجة»)، محلول وفق كتاب البرمجة والذكاء الاصطناعي.
// MCQ options keep the exam order (أ، ب، ج، د) so correctAnswerIndex matches the exam letter;
// true/false questions use option 0 for ✓ and option 1 for ✗.

export const assessmentBlocks: AssessmentBlock[] = [
  {
    id: 'exu3-mcq',
    period: '5 درجات',
    title: 'أولًا: اختر الإجابة الصحيحة',
    quizTitle: 'أولًا: اختر الإجابة الصحيحة',
    essays: [],
    mcqs: [
      {
        id: 'exu3-q1', type: 'mcq', difficulty: 'easy',
        text: 'الطبقة التي تحفظ البيانات وتوفرها عند الحاجة:',
        options: ['الواجهة الأمامية', 'الواجهة الخلفية', 'قاعدة البيانات', 'المتصفح'],
        correctAnswerIndex: 2,
        explanation: 'الإجابة الصحيحة هي (ج) قاعدة البيانات.'
      },
      {
        id: 'exu3-q2', type: 'mcq', difficulty: 'easy',
        text: 'يعيد الخادم رمز الحالة 404 عندما:',
        options: ['تتم المعالجة بنجاح', 'يكون المورد المطلوب غير موجود', 'يحدث خطأ داخلي في الخادم', 'يتم تشفير الاتصال'],
        correctAnswerIndex: 1,
        explanation: 'الإجابة الصحيحة هي (ب) يكون المورد المطلوب غير موجود.'
      },
      {
        id: 'exu3-q3', type: 'mcq', difficulty: 'easy',
        text: 'ترسل الواجهة الأمامية طلبات إلى خدمة خلفية وتستقبل منها البيانات عبر:',
        options: ['API', 'CSS', 'DMZ', 'HTML'],
        correctAnswerIndex: 0,
        explanation: 'الإجابة الصحيحة هي (أ) API.'
      },
      {
        id: 'exu3-q4', type: 'mcq', difficulty: 'easy',
        text: 'التقنية التي تُفعّل الاستجابة عند الضغط على زر وتحدّث جزءًا من الشاشة:',
        options: ['HTML', 'CSS', 'JavaScript', 'JSON'],
        correctAnswerIndex: 2,
        explanation: 'الإجابة الصحيحة هي (ج) JavaScript.'
      },
      {
        id: 'exu3-q5', type: 'mcq', difficulty: 'easy',
        text: 'إرسال محتويات نموذج التواصل إلى الخادم يتم بطريقة:',
        options: ['GET', 'POST', '200', '404'],
        correctAnswerIndex: 1,
        explanation: 'الإجابة الصحيحة هي (ب) POST.'
      }
    ]
  },
  {
    id: 'exu3-tf',
    period: '5 درجات',
    title: 'ثانيًا: ضع علامة (✓) أو علامة (✗)',
    quizTitle: 'ثانيًا: صح أم خطأ؟',
    essays: [],
    mcqs: [
      {
        id: 'exu3-q6', type: 'mcq', difficulty: 'easy',
        text: 'المتصفح مثال على العميل.',
        options: ['✓ عبارة صحيحة', '✗ عبارة خاطئة'],
        correctAnswerIndex: 0,
        explanation: 'العبارة صحيحة ✓.'
      },
      {
        id: 'exu3-q7', type: 'mcq', difficulty: 'easy',
        text: 'تُكتب صفحة الويب دائمًا باستخدام JavaScript فقط.',
        options: ['✓ عبارة صحيحة', '✗ عبارة خاطئة'],
        correctAnswerIndex: 1,
        explanation: 'العبارة خاطئة ✗؛ يمكن أن تستخدم الصفحة HTML وحده أو مع CSS وJavaScript بحسب الوظائف التي تحتاج إليها.'
      },
      {
        id: 'exu3-q8', type: 'mcq', difficulty: 'easy',
        text: 'التحقق من المخزون في متجر إلكتروني من مهام الواجهة الخلفية.',
        options: ['✓ عبارة صحيحة', '✗ عبارة خاطئة'],
        correctAnswerIndex: 0,
        explanation: 'العبارة صحيحة ✓.'
      },
      {
        id: 'exu3-q9', type: 'mcq', difficulty: 'easy',
        text: 'JSON صيغة لتنسيق مظهر صفحات الويب.',
        options: ['✓ عبارة صحيحة', '✗ عبارة خاطئة'],
        correctAnswerIndex: 1,
        explanation: 'العبارة خاطئة ✗؛ JSON صيغة نصية لتمثيل البيانات المهيكلة وتبادلها؛ أما المظهر فتحدده CSS.'
      },
      {
        id: 'exu3-q10', type: 'mcq', difficulty: 'easy',
        text: 'يساعد التصميم المتجاوب الصفحة على التكيف مع أحجام الشاشات المختلفة.',
        options: ['✓ عبارة صحيحة', '✗ عبارة خاطئة'],
        correctAnswerIndex: 0,
        explanation: 'العبارة صحيحة ✓.'
      }
    ]
  },
  {
    id: 'exu3-fill',
    period: '4 درجات',
    title: 'ثالثًا: أكمل العبارات التالية',
    essaysTitle: '📝 أكمل العبارات',
    essays: [
      {
        id: 'exu3-q11',
        text: 'الجانب الذي يستقبل الطلبات من العملاء ويعالجها ويعيد الاستجابات يسمى ............',
        answer: [
          'الخادم'
        ]
      },
      {
        id: 'exu3-q12',
        text: 'الواجهة الأمامية تعرض وتجمع، والواجهة الخلفية ............ و ............',
        answer: [
          'تقرر، تعالج'
        ]
      },
      {
        id: 'exu3-q13',
        text: 'يساعد HTML الدلالي ............ على فهم بنية الصفحة والتنقل فيها.',
        answer: [
          'قارئ الشاشة'
        ]
      },
      {
        id: 'exu3-q14',
        text: 'رمز حالة HTTP الذي يعني خطأً داخليًا في الخادم هو ............',
        answer: [
          '500'
        ]
      }
    ],
    mcqs: []
  },
  {
    id: 'exu3-essay',
    period: '6 درجات',
    title: 'رابعًا: أجب عما يأتي',
    essaysTitle: '✍️ الأسئلة المقالية',
    essays: [
      {
        id: 'exu3-q15',
        text: 'تطبيق طقس يكتب فيه المستخدم اسم مدينة ليرى التوقعات: حدّد مهمة كل طبقة من الطبقات الثلاث، وطريقة طلب HTTP المناسبة لطلب التوقعات.',
        answer: [
          'الواجهة الأمامية: استقبال اسم المدينة وعرض التوقعات',
          'الواجهة الخلفية: البحث عن بيانات التوقعات ومعالجتها',
          'قاعدة البيانات: تخزين التوقعات',
          'طريقة الطلب: GET.'
        ]
      },
      {
        id: 'exu3-q16',
        text: 'قارن بين HTML وCSS وJavaScript من حيث الدور والتشبيه.',
        answer: [
          'HTML: تحدد البنية — هيكل مبنى',
          'CSS: تحدد المظهر — الديكور الداخلي والخارجي',
          'JavaScript: تضيف السلوك والتفاعلية — أنظمة الكهرباء والسباكة.'
        ]
      }
    ],
    mcqs: []
  }
];
