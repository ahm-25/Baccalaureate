import type { AssessmentBlock } from '../assessments/types';

// امتحان الدرس 3-3 في مذكرة الوحدتين الثالثة والرابعة («عبد الناصر في البرمجة»)، محلول وفق كتاب البرمجة والذكاء الاصطناعي.
// MCQ options keep the exam order (أ، ب، ج، د) so correctAnswerIndex matches the exam letter;
// true/false questions use option 0 for ✓ and option 1 for ✗.

export const assessmentBlocks: AssessmentBlock[] = [
  {
    id: 'ex33-mcq',
    period: '5 درجات',
    title: 'أولًا: اختر الإجابة الصحيحة',
    quizTitle: 'أولًا: اختر الإجابة الصحيحة',
    essays: [],
    mcqs: [
      {
        id: 'ex33-q1', type: 'mcq', difficulty: 'easy',
        text: 'التقنية التي تحدد بنية (هيكل) صفحة الويب:',
        options: ['HTML', 'CSS', 'JavaScript', 'JSON'],
        correctAnswerIndex: 0,
        explanation: 'الإجابة الصحيحة هي (أ) HTML.'
      },
      {
        id: 'ex33-q2', type: 'mcq', difficulty: 'easy',
        text: 'تغيير لون النص وحجمه يتم باستخدام:',
        options: ['HTML', 'CSS', 'JavaScript', 'HTTP'],
        correctAnswerIndex: 1,
        explanation: 'الإجابة الصحيحة هي (ب) CSS.'
      },
      {
        id: 'ex33-q3', type: 'mcq', difficulty: 'easy',
        text: 'العنصر الدلالي الذي يمثل قائمة التنقل:',
        options: ['<header>', '<nav>', '<main>', '<footer>'],
        correctAnswerIndex: 1,
        explanation: 'الإجابة الصحيحة هي (ب) .'
      },
      {
        id: 'ex33-q4', type: 'mcq', difficulty: 'easy',
        text: 'إطار مبني على React لبناء تطبيقات الويب:',
        options: ['Vue', 'Next.js', 'CSS', 'JSON'],
        correctAnswerIndex: 1,
        explanation: 'الإجابة الصحيحة هي (ب) Next.js.'
      },
      {
        id: 'ex33-q5', type: 'mcq', difficulty: 'easy',
        text: 'مراعاة الشاشات الصغيرة منذ بداية التصميم تسمى:',
        options: ['الأولوية للجوال', 'HTML الدلالي', 'SEO', 'إطار العمل'],
        correctAnswerIndex: 0,
        explanation: 'الإجابة الصحيحة هي (أ) الأولوية للجوال.'
      }
    ]
  },
  {
    id: 'ex33-tf',
    period: '5 درجات',
    title: 'ثانيًا: ضع علامة (✓) أو علامة (✗)',
    quizTitle: 'ثانيًا: صح أم خطأ؟',
    essays: [],
    mcqs: [
      {
        id: 'ex33-q6', type: 'mcq', difficulty: 'easy',
        text: 'JavaScript تضيف السلوك والتفاعلية إلى صفحة الويب.',
        options: ['✓ عبارة صحيحة', '✗ عبارة خاطئة'],
        correctAnswerIndex: 0,
        explanation: 'العبارة صحيحة ✓.'
      },
      {
        id: 'ex33-q7', type: 'mcq', difficulty: 'easy',
        text: 'يجب أن تستخدم كل صفحة ويب HTML وCSS وJavaScript معًا.',
        options: ['✓ عبارة صحيحة', '✗ عبارة خاطئة'],
        correctAnswerIndex: 1,
        explanation: 'العبارة خاطئة ✗؛ ليس ضروريًا؛ يمكن أن تستخدم الصفحة HTML وحده أو مع CSS وJavaScript بحسب الوظائف المطلوبة.'
      },
      {
        id: 'ex33-q8', type: 'mcq', difficulty: 'easy',
        text: 'HTML الدلالي يضمن ترتيبًا أعلى في محركات البحث.',
        options: ['✓ عبارة صحيحة', '✗ عبارة خاطئة'],
        correctAnswerIndex: 1,
        explanation: 'العبارة خاطئة ✗؛ قد يساعد HTML الدلالي محركات البحث على فهم المحتوى، لكنه لا يضمن ترتيبًا أعلى.'
      },
      {
        id: 'ex33-q9', type: 'mcq', difficulty: 'easy',
        text: 'يساعد HTML الدلالي قارئ الشاشة على فهم بنية الصفحة.',
        options: ['✓ عبارة صحيحة', '✗ عبارة خاطئة'],
        correctAnswerIndex: 0,
        explanation: 'العبارة صحيحة ✓.'
      },
      {
        id: 'ex33-q10', type: 'mcq', difficulty: 'easy',
        text: 'إطار العمل يوفر مسبقًا وظائف ومكونات شائعة الاستخدام.',
        options: ['✓ عبارة صحيحة', '✗ عبارة خاطئة'],
        correctAnswerIndex: 0,
        explanation: 'العبارة صحيحة ✓.'
      }
    ]
  },
  {
    id: 'ex33-fill',
    period: '4 درجات',
    title: 'ثالثًا: أكمل العبارات التالية',
    essaysTitle: '📝 أكمل العبارات',
    essays: [
      {
        id: 'ex33-q11',
        text: 'تُشبَّه CSS بـ ............ للمبنى.',
        answer: [
          'الديكور الداخلي والخارجي'
        ]
      },
      {
        id: 'ex33-q12',
        text: 'العنصر الدلالي للمحتوى الرئيس هو ............',
        answer: [
          ''
        ]
      },
      {
        id: 'ex33-q13',
        text: 'مفهوم يُضبط فيه التخطيط تلقائيًا وفقًا لأحجام الشاشات: ............',
        answer: [
          'التصميم المتجاوب'
        ]
      },
      {
        id: 'ex33-q14',
        text: 'مكتبة JavaScript لبناء واجهات المستخدم من مكونات قابلة لإعادة الاستخدام: ............',
        answer: [
          'React'
        ]
      }
    ],
    mcqs: []
  },
  {
    id: 'ex33-essay',
    period: '6 درجات',
    title: 'رابعًا: أجب عما يأتي',
    essaysTitle: '✍️ الأسئلة المقالية',
    essays: [
      {
        id: 'ex33-q15',
        text: 'اذكر فائدتين لاستخدام HTML الدلالية.',
        answer: [
          'إمكانية الوصول: يساعد قارئ الشاشة على فهم البنية والتنقل',
          'قد يساعد محركات البحث على فهم بنية المحتوى (دون ضمان ترتيب أعلى).'
        ]
      },
      {
        id: 'ex33-q16',
        text: 'نادٍ طلابي يريد صفحة تعرض فعالياته وعدّاد التسجيل الحي: حدد التقنية المسؤولة عن (قائمة الفعاليات – ألوان النادي – العدّاد)، واذكر تغييرًا يسهّل القراءة على الهاتف.',
        answer: [
          'قائمة الفعاليات: HTML',
          'ألوان النادي وتخطيطه: CSS',
          'العداد الحي: JavaScript',
          'التغيير: التصميم المتجاوب.'
        ]
      }
    ],
    mcqs: []
  }
];
