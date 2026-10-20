import type { AssessmentBlock } from '../assessments/types';

// امتحان الدرس 4-3 في مذكرة الوحدتين الثالثة والرابعة («عبد الناصر في البرمجة»)، محلول وفق كتاب البرمجة والذكاء الاصطناعي.
// MCQ options keep the exam order (أ، ب، ج، د) so correctAnswerIndex matches the exam letter;
// true/false questions use option 0 for ✓ and option 1 for ✗.

export const assessmentBlocks: AssessmentBlock[] = [
  {
    id: 'ex43-mcq',
    period: '5 درجات',
    title: 'أولًا: اختر الإجابة الصحيحة',
    quizTitle: 'أولًا: اختر الإجابة الصحيحة',
    essays: [],
    mcqs: [
      {
        id: 'ex43-q1', type: 'mcq', difficulty: 'easy',
        text: 'طريقة تقييم تفهم تجربة المستخدم وأسباب السلوك بالملاحظة والمقابلات:',
        options: ['التقييم النوعي', 'التقييم الكمي', 'PV', 'CVR'],
        correctAnswerIndex: 0,
        explanation: 'الإجابة الصحيحة هي (أ) التقييم النوعي.'
      },
      {
        id: 'ex43-q2', type: 'mcq', difficulty: 'easy',
        text: 'من طرق التقييم الكمي:',
        options: ['المقابلات', 'اختبار A/B', 'اختبار قابلية الاستخدام', 'التقييم الإرشادي'],
        correctAnswerIndex: 1,
        explanation: 'الإجابة الصحيحة هي (ب) اختبار A/B.'
      },
      {
        id: 'ex43-q3', type: 'mcq', difficulty: 'easy',
        text: 'العدد الإجمالي لمرات مشاهدة الصفحة:',
        options: ['CVR', 'PV', 'معدل الارتداد', 'UCD'],
        correctAnswerIndex: 1,
        explanation: 'الإجابة الصحيحة هي (ب) PV.'
      },
      {
        id: 'ex43-q4', type: 'mcq', difficulty: 'easy',
        text: 'نسبة المستخدمين الذين حققوا إجراءً مستهدفًا:',
        options: ['معدل الارتداد', 'PV', 'معدل التحويل', 'الوقت المستغرق'],
        correctAnswerIndex: 2,
        explanation: 'الإجابة الصحيحة هي (ج) معدل التحويل.'
      },
      {
        id: 'ex43-q5', type: 'mcq', difficulty: 'easy',
        text: 'مراجعة يجريها خبراء للواجهة وفق قواعد عملية:',
        options: ['التقييم الإرشادي', 'تحليلات الويب', 'اختبار A/B', 'المقابلات'],
        correctAnswerIndex: 0,
        explanation: 'الإجابة الصحيحة هي (أ) التقييم الإرشادي.'
      }
    ]
  },
  {
    id: 'ex43-tf',
    period: '5 درجات',
    title: 'ثانيًا: ضع علامة (✓) أو علامة (✗)',
    quizTitle: 'ثانيًا: صح أم خطأ؟',
    essays: [],
    mcqs: [
      {
        id: 'ex43-q6', type: 'mcq', difficulty: 'easy',
        text: 'PV يساوي عدد الأشخاص الفريدين.',
        options: ['✓ عبارة صحيحة', '✗ عبارة خاطئة'],
        correctAnswerIndex: 1,
        explanation: 'العبارة خاطئة ✗؛ PV إجمالي مرات المشاهدة وقد يشمل مشاهدات متكررة، فلا يساوي عدد الأشخاص الفريدين.'
      },
      {
        id: 'ex43-q7', type: 'mcq', difficulty: 'easy',
        text: 'معدل الارتداد وحده لا يفسر سبب ضعف التفاعل.',
        options: ['✓ عبارة صحيحة', '✗ عبارة خاطئة'],
        correctAnswerIndex: 0,
        explanation: 'العبارة صحيحة ✓.'
      },
      {
        id: 'ex43-q8', type: 'mcq', difficulty: 'easy',
        text: 'تختلف طريقة حساب معدل الارتداد بين أدوات التحليلات.',
        options: ['✓ عبارة صحيحة', '✗ عبارة خاطئة'],
        correctAnswerIndex: 0,
        explanation: 'العبارة صحيحة ✓.'
      },
      {
        id: 'ex43-q9', type: 'mcq', difficulty: 'easy',
        text: 'التقييم الإرشادي شكل من أشكال التقييم الكمي.',
        options: ['✓ عبارة صحيحة', '✗ عبارة خاطئة'],
        correctAnswerIndex: 1,
        explanation: 'العبارة خاطئة ✗؛ التقييم الإرشادي مراجعة يجريها خبراء وفق قواعد عملية، وهو شكل من التقييم النوعي.'
      },
      {
        id: 'ex43-q10', type: 'mcq', difficulty: 'easy',
        text: 'قد تجمع الدراسة الواحدة بين التقييم النوعي والكمي.',
        options: ['✓ عبارة صحيحة', '✗ عبارة خاطئة'],
        correctAnswerIndex: 0,
        explanation: 'العبارة صحيحة ✓.'
      }
    ]
  },
  {
    id: 'ex43-fill',
    period: '4 درجات',
    title: 'ثالثًا: أكمل العبارات التالية',
    essaysTitle: '📝 أكمل العبارات',
    essays: [
      {
        id: 'ex43-q11',
        text: 'تحليلات الويب أداة من أدوات التقييم ............',
        answer: [
          'الكمي'
        ]
      },
      {
        id: 'ex43-q12',
        text: 'من القواعد الإرشادية: الاتساق و ............ و ............',
        answer: [
          'منع الأخطاء، وضوح حالة النظام'
        ]
      },
      {
        id: 'ex43-q13',
        text: 'CVR اختصار لـ ............',
        answer: [
          'معدل التحويل'
        ]
      },
      {
        id: 'ex43-q14',
        text: 'الطرق الكمية تجيب عن "كم؟" والطرق النوعية تجيب عن "............"',
        answer: [
          'لماذا؟'
        ]
      }
    ],
    mcqs: []
  },
  {
    id: 'ex43-essay',
    period: '6 درجات',
    title: 'رابعًا: أجب عما يأتي',
    essaysTitle: '✍️ الأسئلة المقالية',
    essays: [
      {
        id: 'ex43-q15',
        text: 'صنّف ما يلي إلى نوعي أو كمي: (اختبار قابلية الاستخدام – تحليلات الويب – المقابلات – اختبار A/B)، وبيّن الفرق بين النوعين.',
        answer: [
          'نوعي: اختبار قابلية الاستخدام، المقابلات',
          'كمي: تحليلات الويب، اختبار A/B',
          'الكمي يقيس بالأرقام، والنوعي يفهم الأسباب.'
        ]
      },
      {
        id: 'ex43-q16',
        text: 'متجر كتب إلكتروني لديه PV مرتفع لكن CVR منخفض: ماذا تعني هذه الأرقام؟ واقترح طريقة نوعية لمعرفة السبب.',
        answer: [
          'كثيرون يزورون لكن قليلين يشترون',
          'طريقة نوعية: اختبار قابلية استخدام قصير أو مقابلات لمعرفة أين يتعثر المستخدم.'
        ]
      }
    ],
    mcqs: []
  }
];
