import type { AssessmentBlock } from '../assessments/types';

// امتحان الدرس 4-4 في مذكرة الوحدتين الثالثة والرابعة («عبد الناصر في البرمجة»)، محلول وفق كتاب البرمجة والذكاء الاصطناعي.
// MCQ options keep the exam order (أ، ب، ج، د) so correctAnswerIndex matches the exam letter;
// true/false questions use option 0 for ✓ and option 1 for ✗.

export const assessmentBlocks: AssessmentBlock[] = [
  {
    id: 'ex44-mcq',
    period: '5 درجات',
    title: 'أولًا: اختر الإجابة الصحيحة',
    quizTitle: 'أولًا: اختر الإجابة الصحيحة',
    essays: [],
    mcqs: [
      {
        id: 'ex44-q1', type: 'mcq', difficulty: 'easy',
        text: 'ترتيب خطوات دورة PDCA:',
        options: ['نفّذ ← خطّط ← تصرّف ← تحقّق', 'خطّط ← نفّذ ← تحقّق ← تصرّف', 'تحقّق ← خطّط ← نفّذ ← تصرّف', 'خطّط ← تحقّق ← نفّذ ← تصرّف'],
        correctAnswerIndex: 1,
        explanation: 'الإجابة الصحيحة هي (ب) خطّط ← نفّذ ← تحقّق ← تصرّف.'
      },
      {
        id: 'ex44-q2', type: 'mcq', difficulty: 'easy',
        text: '"غيّر تصميم الصفحة الرئيسية" تقابل خطوة:',
        options: ['خطّط', 'نفّذ', 'تحقّق', 'تصرّف'],
        correctAnswerIndex: 1,
        explanation: 'الإجابة الصحيحة هي (ب) نفّذ.'
      },
      {
        id: 'ex44-q3', type: 'mcq', difficulty: 'easy',
        text: 'أول خطوة في التفكير التصميمي:',
        options: ['التعريف', 'التعاطف', 'الاختبار', 'النموذج الأولي'],
        correctAnswerIndex: 1,
        explanation: 'الإجابة الصحيحة هي (ب) التعاطف.'
      },
      {
        id: 'ex44-q4', type: 'mcq', difficulty: 'easy',
        text: 'إنشاء مسودة سريعة قابلة للاختبار:',
        options: ['النموذج الأولي', 'التعريف', 'التعاطف', 'خط الأساس'],
        correctAnswerIndex: 0,
        explanation: 'الإجابة الصحيحة هي (أ) النموذج الأولي.'
      },
      {
        id: 'ex44-q5', type: 'mcq', difficulty: 'easy',
        text: 'مقارنة نسختين وفق مقياس محدد مسبقًا:',
        options: ['دورة PDCA', 'اختبار A/B', 'التقييم الإرشادي', 'شخصية المستخدم'],
        correctAnswerIndex: 1,
        explanation: 'الإجابة الصحيحة هي (ب) اختبار A/B.'
      }
    ]
  },
  {
    id: 'ex44-tf',
    period: '5 درجات',
    title: 'ثانيًا: ضع علامة (✓) أو علامة (✗)',
    quizTitle: 'ثانيًا: صح أم خطأ؟',
    essays: [],
    mcqs: [
      {
        id: 'ex44-q6', type: 'mcq', difficulty: 'easy',
        text: 'دورة PDCA تُستخدم فقط في المواقع الإلكترونية.',
        options: ['✓ عبارة صحيحة', '✗ عبارة خاطئة'],
        correctAnswerIndex: 1,
        explanation: 'العبارة خاطئة ✗؛ تُستخدم دورة PDCA على نطاق واسع، مثل تحسين الأعمال وإدارة الجودة.'
      },
      {
        id: 'ex44-q7', type: 'mcq', difficulty: 'easy',
        text: 'في التفكير التصميمي يمكن الرجوع بين الأنماط.',
        options: ['✓ عبارة صحيحة', '✗ عبارة خاطئة'],
        correctAnswerIndex: 0,
        explanation: 'العبارة صحيحة ✓.'
      },
      {
        id: 'ex44-q8', type: 'mcq', difficulty: 'easy',
        text: 'اختبار حزمة تغييرات يكشف أثر كل عنصر منفردًا.',
        options: ['✓ عبارة صحيحة', '✗ عبارة خاطئة'],
        correctAnswerIndex: 1,
        explanation: 'العبارة خاطئة ✗؛ اختبار حزمة تغييرات يقيس أثر الحزمة كلها، ولا يكشف أثر كل عنصر منفردًا.'
      },
      {
        id: 'ex44-q9', type: 'mcq', difficulty: 'easy',
        text: 'يجب تحديد المقياس وخطة التحليل قبل اختبار A/B.',
        options: ['✓ عبارة صحيحة', '✗ عبارة خاطئة'],
        correctAnswerIndex: 0,
        explanation: 'العبارة صحيحة ✓.'
      },
      {
        id: 'ex44-q10', type: 'mcq', difficulty: 'easy',
        text: 'قد يكون التغيير في التحسين التكراري صغيرًا أو كبيرًا بحسب الهدف والدليل.',
        options: ['✓ عبارة صحيحة', '✗ عبارة خاطئة'],
        correctAnswerIndex: 0,
        explanation: 'العبارة صحيحة ✓.'
      }
    ]
  },
  {
    id: 'ex44-fill',
    period: '4 درجات',
    title: 'ثالثًا: أكمل العبارات التالية',
    essaysTitle: '📝 أكمل العبارات',
    essays: [
      {
        id: 'ex44-q11',
        text: 'خطوات التفكير التصميمي: التعاطف، التعريف، ............، النموذج الأولي، ............',
        answer: [
          'توليد الأفكار، الاختبار'
        ]
      },
      {
        id: 'ex44-q12',
        text: 'خطوة PDCA التي نقيس فيها النتائج ونقارنها بالهدف: ............',
        answer: [
          'تحقّق (Check)'
        ]
      },
      {
        id: 'ex44-q13',
        text: 'في اختبار A/B يُوزَّع المستخدمون بين النسختين بطريقة ............ قدر الإمكان.',
        answer: [
          'عشوائية'
        ]
      },
      {
        id: 'ex44-q14',
        text: 'التحسن قليلًا في كل مرة يسمى ............',
        answer: [
          'التحسين المستمر'
        ]
      }
    ],
    mcqs: []
  },
  {
    id: 'ex44-essay',
    period: '6 درجات',
    title: 'رابعًا: أجب عما يأتي',
    essaysTitle: '✍️ الأسئلة المقالية',
    essays: [
      {
        id: 'ex44-q15',
        text: 'اذكر خطوات دورة PDCA مع مثال على كل خطوة في تحسين موقع إلكتروني.',
        answer: [
          'خطّط: هدف رفع إكمال التسجيل من 40% إلى 50%',
          'نفّذ: تغيير الصفحة الرئيسية',
          'تحقّق: قياس نسبة الإكمال ومقارنتها بالهدف',
          'تصرّف: اعتماد التغيير أو مراجعة الخطة.'
        ]
      },
      {
        id: 'ex44-q16',
        text: 'نادٍ مدرسي يسجل فيه عدد قليل من الطلاب لفعاليته: صف جولة PDCA واحدة، وحدد الفرق بين النسختين A وB والمقياس.',
        answer: [
          'خط الأساس: عدد من يجدون رابط التسجيل خلال 5 ثوانٍ',
          'تغيير واحد: نقل الرابط أعلى الصفحة',
          'A: الرابط في مكانه، B: الرابط أعلى الصفحة',
          'المقياس: نسبة إتمام التسجيل.'
        ]
      }
    ],
    mcqs: []
  }
];
