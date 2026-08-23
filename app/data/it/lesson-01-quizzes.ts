import type { QuizSectionData } from '~/types/quiz';

export const lesson01Quizzes: QuizSectionData[] = [
  {
    id: 'dik',
    title: 'البيانات، المعلومات، والمعرفة',
    questions: [
      {
        id: 'q1-1',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'ما هي الحقائق التي تمثل باستخدام الأرقام أو الأحرف أو الرموز؟',
        options: [
          { id: 'opt1', text: 'المعرفة' },
          { id: 'opt2', text: 'البيانات' },
          { id: 'opt3', text: 'المعلومات' },
          { id: 'opt4', text: 'الثقافة الإعلامية' }
        ],
        correctOptionId: 'opt2',
        explanation: 'البيانات هي المادة الخام (كالأرقام والحروف) التي لم تتم معالجتها بعد.'
      },
      {
        id: 'q1-2',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'أي من التالي يُعتبر "معلومات"؟',
        options: [
          { id: 'opt1', text: '70، 85، 60، 90' },
          { id: 'opt2', text: 'متوسط درجات الطالب 76' },
          { id: 'opt3', text: 'الرقم 5' },
          { id: 'opt4', text: 'أحرف مبعثرة' }
        ],
        correctOptionId: 'opt2',
        explanation: 'متوسط الدرجات يعتبر "معلومات" لأنه يعطي معنى للبيانات الخام.'
      },
      {
        id: 'q1-3',
        type: 'scenario',
        difficulty: 'medium',
        question: 'مجموعة من درجات الحرارة المسجلة خلال أسبوع: 25، 28، 31. ما الذي تمثله؟',
        options: [
          { id: 'opt1', text: 'المعرفة' },
          { id: 'opt2', text: 'المعلومات' },
          { id: 'opt3', text: 'البيانات' }
        ],
        correctOptionId: 'opt3',
        explanation: 'الأرقام المجردة بدون سياق واضح هي دائماً "بيانات".'
      },
      {
        id: 'q1-4',
        type: 'true-false',
        difficulty: 'medium',
        question: 'المعلومات لها شكل وكيان ثابت مثل الأشياء المادية الملموسة.',
        options: [
          { id: 'opt1', text: 'صح' },
          { id: 'opt2', text: 'خطأ' }
        ],
        correctOptionId: 'opt2',
        explanation: 'المعلومات ليس لها كيان مادي ثابت، بل هي معنى وقيمة للمتلقي.'
      },
      {
        id: 'q1-5',
        type: 'scenario',
        difficulty: 'medium',
        question: 'بناءً على متوسط درجات الحرارة الذي يبلغ 31 درجة، قرر أحمد تشغيل مكيف الهواء. ما الذي يمثله قرار أحمد؟',
        options: [
          { id: 'opt1', text: 'بيانات' },
          { id: 'opt2', text: 'معلومات' },
          { id: 'opt3', text: 'معرفة' }
        ],
        correctOptionId: 'opt3',
        explanation: 'المعرفة هي استخدام المعلومات وتحليلها لاتخاذ قرار أو حل مشكلة.'
      },
      {
        id: 'q1-6',
        type: 'matching',
        difficulty: 'hard',
        question: 'قم بمطابقة كل مثال مع المفهوم المناسب:',
        categories: [
          { id: 'cat1', title: 'بيانات' },
          { id: 'cat2', title: 'معلومات' },
          { id: 'cat3', title: 'معرفة' }
        ],
        items: [
          { id: 'item1', item: '75, 80, 90', matchId: 'cat1' },
          { id: 'item2', item: 'متوسط الدرجات 81', matchId: 'cat2' },
          { id: 'item3', item: 'الطالب يحتاج لدعم في الرياضيات', matchId: 'cat3' }
        ],
        explanation: 'الأرقام هي بيانات، والمتوسط هو معلومات، والاستنتاج بناءً على المتوسط هو معرفة.'
      },
      {
        id: 'q1-7',
        type: 'scenario',
        difficulty: 'hard',
        question: 'مدير مبيعات وجد أن أرباح شهر مارس كانت الأقل خلال العام، فقرر إطلاق حملة إعلانية جديدة. "قرار إطلاق الحملة" هو مثال على:',
        options: [
          { id: 'opt1', text: 'بيانات' },
          { id: 'opt2', text: 'معلومات' },
          { id: 'opt3', text: 'معرفة' }
        ],
        correctOptionId: 'opt3',
        explanation: 'استخدام المعلومة (أرباح مارس الأقل) لحل مشكلة (انخفاض الأرباح) يعتبر "معرفة".'
      },
      {
        id: 'q1-8',
        type: 'multiple-choice',
        difficulty: 'challenge',
        question: 'أي من الترتيبات التالية هو الترتيب المنطقي الصحيح لاستخراج القيمة؟',
        options: [
          { id: 'opt1', text: 'معلومات -> بيانات -> معرفة' },
          { id: 'opt2', text: 'بيانات -> معلومات -> معرفة' },
          { id: 'opt3', text: 'معرفة -> معلومات -> بيانات' },
          { id: 'opt4', text: 'بيانات -> معرفة -> معلومات' }
        ],
        correctOptionId: 'opt2',
        explanation: 'نبدأ بجمع (البيانات)، ثم نعالجها لتصبح (معلومات)، ثم نستخدمها لنصل إلى (المعرفة).'
      }
    ]
  },
  {
    id: 'properties',
    title: 'خصائص المعلومات',
    questions: [
      {
        id: 'q2-1',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'أي من التالية هي إحدى خصائص المعلومات كما ورد في الكتاب؟',
        options: [
          { id: 'opt1', text: 'صعوبة الفهم' },
          { id: 'opt2', text: 'الاستمرارية (Persistence)' },
          { id: 'opt3', text: 'الندرة' },
          { id: 'opt4', text: 'الوزن المادي' }
        ],
        correctOptionId: 'opt2',
        explanation: 'من أهم خصائص المعلومات: الاستمرارية، قابلية التكرار، والانتشار.'
      },
      {
        id: 'q2-2',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'القدرة على نسخ المعلومات بسهولة وبكميات كبيرة هي خاصية:',
        options: [
          { id: 'opt1', text: 'الانتشار' },
          { id: 'opt2', text: 'قابلية التكرار (Reproducibility)' },
          { id: 'opt3', text: 'الاستمرارية' }
        ],
        correctOptionId: 'opt2',
        explanation: 'قابلية التكرار تعني سهولة أخذ نسخ متعددة دون فقدان الجودة.'
      },
      {
        id: 'q2-3',
        type: 'true-false',
        difficulty: 'medium',
        question: 'بمجرد نشر المعلومات، يمكن محوها بالكامل بسهولة وبضغطة زر.',
        options: [
          { id: 'opt1', text: 'صح' },
          { id: 'opt2', text: 'خطأ' }
        ],
        correctOptionId: 'opt2',
        explanation: 'خطأ. بسبب خاصية "الاستمرارية"، بمجرد إنشاء المعلومات لا يمكن محوها بالكامل بسهولة.'
      },
      {
        id: 'q2-4',
        type: 'scenario',
        difficulty: 'medium',
        question: 'رسالة أو خبر ينتشر عبر الإنترنت بسرعة كبيرة ليصل لملايين الأشخاص في ثوانٍ. ما الخاصية التي تصف ذلك؟',
        options: [
          { id: 'opt1', text: 'قابلية التكرار' },
          { id: 'opt2', text: 'الانتشار (Propagation)' },
          { id: 'opt3', text: 'الاستمرارية' }
        ],
        correctOptionId: 'opt2',
        explanation: 'الانتشار هو سهولة وسرعة توصيل المعلومات عبر المسافات.'
      },
      {
        id: 'q2-5',
        type: 'matching',
        difficulty: 'medium',
        question: 'طابق كل مثال مع الخاصية المناسبة:',
        categories: [
          { id: 'cat1', title: 'الاستمرارية' },
          { id: 'cat2', title: 'الانتشار' },
          { id: 'cat3', title: 'قابلية التكرار' }
        ],
        items: [
          { id: 'item1', item: 'الشائعات قد تستمر حتى بعد حذفها', matchId: 'cat1' },
          { id: 'item2', item: 'إرسال بريد إلكتروني لشخص في دولة أخرى فوراً', matchId: 'cat2' },
          { id: 'item3', item: 'نسخ ملف فيديو لعدة هواتف محمولة', matchId: 'cat3' }
        ],
        explanation: 'الاستمرارية (بقاء المعلومة)، الانتشار (سرعة النقل)، قابلية التكرار (النسخ).'
      },
      {
        id: 'q2-6',
        type: 'multiple-choice',
        difficulty: 'hard',
        question: 'تم إطلاق إشاعة على مواقع التواصل وتم حذف المنشور الأصلي بعد ساعة، لكن الإشاعة ما زالت متداولة. ما الخاصية التي تفسر ذلك؟',
        options: [
          { id: 'opt1', text: 'قابلية التكرار' },
          { id: 'opt2', text: 'الاستمرارية (Persistence)' },
          { id: 'opt3', text: 'الانتشار' }
        ],
        correctOptionId: 'opt2',
        explanation: 'الاستمرارية تعني بقاء المعلومة في البيئة الرقمية أو في الذاكرة حتى لو اختفى المصدر.'
      },
      {
        id: 'q2-7',
        type: 'scenario',
        difficulty: 'hard',
        question: 'قمت بنسخ مستند نصي مئة مرة. هل ستنخفض جودة النص في النسخة رقم 100؟ ولماذا؟',
        options: [
          { id: 'opt1', text: 'نعم، بسبب الانتشار' },
          { id: 'opt2', text: 'لا، بسبب الاستمرارية' },
          { id: 'opt3', text: 'لا، بسبب قابلية التكرار (Reproducibility)' }
        ],
        correctOptionId: 'opt3',
        explanation: 'المعلومات الرقمية تتميز بقابلية التكرار حيث لا تفقد جودتها مهما تعددت النسخ.'
      },
      {
        id: 'q2-8',
        type: 'multiple-choice',
        difficulty: 'challenge',
        question: 'ما هو الخطر الأكبر لخصائص المعلومات الثلاث مجتمعة إذا تم استخدامها لنشر الأخبار الكاذبة؟',
        options: [
          { id: 'opt1', text: 'تكلفة النشر مرتفعة' },
          { id: 'opt2', text: 'سيصعب تصحيحها، وسيسهل نسخها، وستصل للجميع بسرعة' },
          { id: 'opt3', text: 'ستختفي بعد يوم واحد' },
          { id: 'opt4', text: 'لن يستطيع أحد نسخها' }
        ],
        correctOptionId: 'opt2',
        explanation: 'تضافر الاستمرارية (صعوبة الحذف) وقابلية التكرار (النسخ) والانتشار (السرعة) يجعل التحكم في الأخبار الكاذبة أمراً معقداً.'
      }
    ]
  },
  {
    id: 'primary-secondary-cross',
    title: 'المصادر والتحقق',
    questions: [
      {
        id: 'q3-1',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'المعلومات التي تحصل عليها من خلال تجربتك الشخصية المباشرة تسمى:',
        options: [
          { id: 'opt1', text: 'معلومات ثانوية' },
          { id: 'opt2', text: 'معلومات أولية (Primary Information)' },
          { id: 'opt3', text: 'بيانات مجهولة' }
        ],
        correctOptionId: 'opt2',
        explanation: 'المعلومات الأولية هي ما تحصل عليه بنفسك عبر التجربة أو البحث.'
      },
      {
        id: 'q3-2',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'المعلومات التي تحصل عليها من خلال طرف ثالث ككتاب أو صحيفة تسمى:',
        options: [
          { id: 'opt1', text: 'معلومات ثانوية (Secondary Information)' },
          { id: 'opt2', text: 'معلومات أولية' },
          { id: 'opt3', text: 'بيانات خام' }
        ],
        correctOptionId: 'opt1',
        explanation: 'أنت لم تقم بالتجربة بنفسك، بل نقلتها عن مصدر آخر، لذا هي ثانوية.'
      },
      {
        id: 'q3-3',
        type: 'scenario',
        difficulty: 'medium',
        question: 'أحمد أجرى استطلاعاً بنفسه لزملائه في الفصل وسجل النتائج. هل هذه معلومات أولية أم ثانوية؟',
        options: [
          { id: 'opt1', text: 'أولية (Primary)' },
          { id: 'opt2', text: 'ثانوية (Secondary)' }
        ],
        correctOptionId: 'opt1',
        explanation: 'لأن أحمد هو من قام بالاستطلاع بشكل مباشر.'
      },
      {
        id: 'q3-4',
        type: 'scenario',
        difficulty: 'medium',
        question: 'قرأ أحمد نتيجة دراسة علمية في صحيفة محلية. هل هذه معلومات أولية أم ثانوية؟',
        options: [
          { id: 'opt1', text: 'أولية (Primary)' },
          { id: 'opt2', text: 'ثانوية (Secondary)' }
        ],
        correctOptionId: 'opt2',
        explanation: 'هو لم يجرِ الدراسة بنفسه، بل حصل عليها من خلال طرف ثالث (الصحيفة).'
      },
      {
        id: 'q3-5',
        type: 'true-false',
        difficulty: 'medium',
        question: 'المعلومات الثانوية لا تختلف أبداً عن المعلومات الأصلية ولا تحتوي على أي تفسيرات إضافية.',
        options: [
          { id: 'opt1', text: 'صح' },
          { id: 'opt2', text: 'خطأ' }
        ],
        correctOptionId: 'opt2',
        explanation: 'خطأ. المعلومات الثانوية غالباً ما تختلف عن الأصلية وقد تحتوي على تفسيرات أو آراء للطرف الثالث.'
      },
      {
        id: 'q3-6',
        type: 'multiple-choice',
        difficulty: 'hard',
        question: 'ما هو مفهوم "التحقق المتبادل" (Cross-checking)؟',
        options: [
          { id: 'opt1', text: 'حذف المعلومات بعد قراءتها' },
          { id: 'opt2', text: 'مقارنة المعلومات من مصادر متعددة مع بعضها لتحديد دقتها وموثوقيتها' },
          { id: 'opt3', text: 'تصديق أول خبر تقرأه' }
        ],
        correctOptionId: 'opt2',
        explanation: 'التحقق المتبادل هو عملية البحث عن مصادر مختلفة ومقارنتها لضمان صحة المعلومة.'
      },
      {
        id: 'q3-7',
        type: 'scenario',
        difficulty: 'hard',
        question: 'وجدت سارة خبراً مهماً على موقع واحد فقط، ماذا يجب أن تفعل بناءً على مفهوم التحقق المتبادل؟',
        options: [
          { id: 'opt1', text: 'تنشره فوراً' },
          { id: 'opt2', text: 'تبحث عن أدلة أخرى وتقارن المصادر المختلفة قبل التصديق' },
          { id: 'opt3', text: 'تتجاهل الخبر تماماً' }
        ],
        correctOptionId: 'opt2',
        explanation: 'الخطوة السليمة دائماً هي البحث في مصادر أخرى للمقارنة والتحقق.'
      },
      {
        id: 'q3-8',
        type: 'matching',
        difficulty: 'challenge',
        question: 'قم بتصنيف الأمثلة التالية كأولية أو ثانوية:',
        categories: [
          { id: 'cat1', title: 'معلومات أولية' },
          { id: 'cat2', title: 'معلومات ثانوية' }
        ],
        items: [
          { id: 'item1', item: 'نتائج استبيان أجريته بنفسك', matchId: 'cat1' },
          { id: 'item2', item: 'مقال رأي في مجلة', matchId: 'cat2' },
          { id: 'item3', item: 'تجربة علمية قمت بها في المعمل', matchId: 'cat1' },
          { id: 'item4', item: 'نشرة أخبار التلفزيون', matchId: 'cat2' }
        ],
        explanation: 'التجارب والاستبيانات الشخصية هي أولية. الصحف والمجلات والتلفاز ثانوية.'
      }
    ]
  },
  {
    id: 'media',
    title: 'الوسائط',
    questions: [
      {
        id: 'q4-1',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'ما هي "الوسائط" (Media) بشكل عام؟',
        options: [
          { id: 'opt1', text: 'أجهزة الكمبيوتر فقط' },
          { id: 'opt2', text: 'وسائل لنقل المعلومات إلى عدد من الأفراد' },
          { id: 'opt3', text: 'شركات الاتصالات' }
        ],
        correctOptionId: 'opt2',
        explanation: 'الوسائط هي الأداة أو الوسيلة التي نستخدمها لتوصيل ونقل المعلومة.'
      },
      {
        id: 'q4-2',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'كم عدد أنواع الوسائط كما تم تصنيفها في الكتاب؟',
        options: [
          { id: 'opt1', text: 'نوع واحد' },
          { id: 'opt2', text: 'نوعان' },
          { id: 'opt3', text: 'ثلاثة أنواع' },
          { id: 'opt4', text: 'أربعة أنواع' }
        ],
        correctOptionId: 'opt3',
        explanation: 'تم تصنيفها إلى: التعبيرية، النقل/الإرسال، والتسجيل.'
      },
      {
        id: 'q4-3',
        type: 'multiple-choice',
        difficulty: 'medium',
        question: 'الوسائط المستخدمة كوسيلة للتعبير عن المعلومات (كالنص والصورة) تسمى:',
        options: [
          { id: 'opt1', text: 'وسائط النقل' },
          { id: 'opt2', text: 'وسائط الإعلام التعبيرية (Expression Media)' },
          { id: 'opt3', text: 'وسائط التسجيل' }
        ],
        correctOptionId: 'opt2',
        explanation: 'الكلمات، الصور، الأصوات هي الطرق التي نُعبّر بها عن المعلومة.'
      },
      {
        id: 'q4-4',
        type: 'scenario',
        difficulty: 'medium',
        question: 'التلفزيون، الراديو، والإنترنت تعتبر وسائط تُستخدم لنقل وتبادل المعلومات. ما هو نوعها؟',
        options: [
          { id: 'opt1', text: 'وسائط النقل / الإرسال' },
          { id: 'opt2', text: 'وسائط التعبير' },
          { id: 'opt3', text: 'وسائط التسجيل' }
        ],
        correctOptionId: 'opt1',
        explanation: 'لأنها تقوم بنقل أو إرسال المعلومة من المصدر للمتلقي.'
      },
      {
        id: 'q4-5',
        type: 'multiple-choice',
        difficulty: 'medium',
        question: 'الورق، وحدة التخزين (USB)، والتخزين السحابي هي أمثلة على:',
        options: [
          { id: 'opt1', text: 'وسائط التعبير' },
          { id: 'opt2', text: 'وسائط النقل' },
          { id: 'opt3', text: 'وسائط التسجيل (Recording Media)' }
        ],
        correctOptionId: 'opt3',
        explanation: 'هي وسائط نستخدمها لحفظ وتخزين وتسجيل المعلومات للرجوع إليها لاحقاً.'
      },
      {
        id: 'q4-6',
        type: 'matching',
        difficulty: 'hard',
        question: 'طابق كل أداة بنوع الوسائط المناسب:',
        categories: [
          { id: 'cat1', title: 'تعبير (Expression)' },
          { id: 'cat2', title: 'نقل وإرسال (Transmission)' },
          { id: 'cat3', title: 'تسجيل (Recording)' }
        ],
        items: [
          { id: 'item1', item: 'صورة فوتوغرافية', matchId: 'cat1' },
          { id: 'item2', item: 'الهاتف', matchId: 'cat2' },
          { id: 'item3', item: 'قرص مدمج (DVD)', matchId: 'cat3' }
        ],
        explanation: 'الصورة هي تعبير، الهاتف وسيلة نقل، والـ DVD وسيلة تسجيل.'
      },
      {
        id: 'q4-7',
        type: 'scenario',
        difficulty: 'hard',
        question: 'عندما تكتب نصاً (1) على هاتفك (2) وتقوم بحفظه على التخزين السحابي (3). ما هي أنواع الوسائط بالترتيب؟',
        options: [
          { id: 'opt1', text: 'نقل -> تسجيل -> تعبير' },
          { id: 'opt2', text: 'تعبير -> نقل -> تسجيل' },
          { id: 'opt3', text: 'تسجيل -> تعبير -> نقل' }
        ],
        correctOptionId: 'opt2',
        explanation: 'النص (تعبير)، الهاتف (نقل)، السحابة (تسجيل).'
      },
      {
        id: 'q4-8',
        type: 'true-false',
        difficulty: 'challenge',
        question: 'الإنترنت يُصنف دائماً كوسيط تسجيل فقط لأنه يحتوي على سيرفرات تحفظ البيانات.',
        options: [
          { id: 'opt1', text: 'صح' },
          { id: 'opt2', text: 'خطأ' }
        ],
        correctOptionId: 'opt2',
        explanation: 'خطأ، الإنترنت يُصنف بشكل أساسي كوسيط "نقل / إرسال" لأنه الأداة التي توصلنا بالمعلومة.'
      }
    ]
  },
  {
    id: 'media-literacy',
    title: 'الثقافة الإعلامية',
    questions: [
      {
        id: 'q5-1',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'ما هو تعريف "الثقافة الإعلامية" (Media Literacy)؟',
        options: [
          { id: 'opt1', text: 'استخدام الإنترنت لساعات طويلة' },
          { id: 'opt2', text: 'القدرة على تفسير المعلومات من الوسائط بدقة وتحليلها' },
          { id: 'opt3', text: 'حفظ جميع المعلومات الموجودة على الشبكة' }
        ],
        correctOptionId: 'opt2',
        explanation: 'الثقافة الإعلامية هي امتلاك وعي كافٍ لتحليل وتفسير ما نقرأه ونشاهده.'
      },
      {
        id: 'q5-2',
        type: 'true-false',
        difficulty: 'easy',
        question: 'مجرد رؤيتك لمعلومة أو خبر في فيديو على يوتيوب يعني أنها صحيحة بالضرورة.',
        options: [
          { id: 'opt1', text: 'صح' },
          { id: 'opt2', text: 'خطأ' }
        ],
        correctOptionId: 'opt2',
        explanation: 'يجب دائماً التفكير النقدي وعدم قبول أي معلومة بدون تحليل وتفسير.'
      },
      {
        id: 'q5-3',
        type: 'scenario',
        difficulty: 'medium',
        question: 'وصلت لريم رسالة واتساب عاجلة تطلب التبرع لجهة غير معروفة. التصرف الذي يدل على الثقافة الإعلامية هو:',
        options: [
          { id: 'opt1', text: 'إعادة إرسال الرسالة لكل الأصدقاء فوراً' },
          { id: 'opt2', text: 'التأكد من مصدر الرسالة والجهة قبل فعل أي شيء' },
          { id: 'opt3', text: 'مسح الواتساب من الهاتف' }
        ],
        correctOptionId: 'opt2',
        explanation: 'التحقق والتأكد هما من أساسيات الثقافة الإعلامية.'
      },
      {
        id: 'q5-4',
        type: 'multiple-choice',
        difficulty: 'medium',
        question: 'الثقافة الإعلامية تتطلب من الشخص ألا يقبل كل ما ينشر بدون:',
        options: [
          { id: 'opt1', text: 'دفع المال' },
          { id: 'opt2', text: 'تفكير وتحليل' },
          { id: 'opt3', text: 'مشاركة' }
        ],
        correctOptionId: 'opt2',
        explanation: 'التفكير النقدي هو الدرع الأول في مواجهة المعلومات المضللة.'
      },
      {
        id: 'q5-5',
        type: 'true-false',
        difficulty: 'medium',
        question: 'الثقافة الإعلامية تعني فقط معرفة كيفية تشغيل التلفاز وتصفح المواقع الإخبارية.',
        options: [
          { id: 'opt1', text: 'صح' },
          { id: 'opt2', text: 'خطأ' }
        ],
        correctOptionId: 'opt2',
        explanation: 'خطأ، الثقافة الإعلامية هي مهارة عقلية للتحليل والتفسير، وليس مجرد استخدام الأجهزة.'
      },
      {
        id: 'q5-6',
        type: 'scenario',
        difficulty: 'hard',
        question: 'خبر على فيسبوك يقول أن "العلماء اكتشفوا كوكباً جديداً مصنوعاً من الذهب". صديقك شاركه فوراً. ما رأيك في تصرفه من منظور الثقافة الإعلامية؟',
        options: [
          { id: 'opt1', text: 'تصرف صحيح لنشر العلم' },
          { id: 'opt2', text: 'يفتقر للثقافة الإعلامية لأنه لم يتحقق من دقة المعلومة ومصدرها' }
        ],
        correctOptionId: 'opt2',
        explanation: 'كان عليه استخدام "التحقق المتبادل" في مواقع علمية موثوقة قبل المشاركة.'
      },
      {
        id: 'q5-7',
        type: 'multiple-choice',
        difficulty: 'hard',
        question: 'تفسير المعلومات بدقة يساعد الطالب على تجنب:',
        options: [
          { id: 'opt1', text: 'التعلم' },
          { id: 'opt2', text: 'المعلومات المضللة والشائعات' },
          { id: 'opt3', text: 'النجاح' }
        ],
        correctOptionId: 'opt2',
        explanation: 'التحليل الدقيق يفضح الأخبار الكاذبة والمضللة.'
      },
      {
        id: 'q5-8',
        type: 'scenario',
        difficulty: 'challenge',
        question: 'كيف ترتبط "الثقافة الإعلامية" بخاصية "الاستمرارية والانتشار" للمعلومات؟',
        options: [
          { id: 'opt1', text: 'لا علاقة بينهما' },
          { id: 'opt2', text: 'لأن المعلومات تنتشر وتستمر طويلاً، نحتاج للثقافة الإعلامية للتمييز بين الصحيح والمزيف قبل أن ينتشر' },
          { id: 'opt3', text: 'الثقافة الإعلامية تمنع انتشار المعلومات' }
        ],
        correctOptionId: 'opt2',
        explanation: 'نظراً لصعوبة إيقاف المعلومات الخاطئة متى ما انتشرت، فإن الوعي (الثقافة الإعلامية) هو الحل لمنع انتشارها من الأساس.'
      }
    ]
  },
  {
    id: 'final-review',
    title: 'الاختبار النهائي الشامل',
    questions: [
      {
        id: 'q6-1',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'الحقائق والأرقام المجردة التي لم تُعالج تسمى:',
        options: [
          { id: 'opt1', text: 'المعرفة' },
          { id: 'opt2', text: 'البيانات' },
          { id: 'opt3', text: 'الثقافة' }
        ],
        correctOptionId: 'opt2',
        explanation: 'البيانات هي المادة الأولية.'
      },
      {
        id: 'q6-2',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'القرص الصلب والفلاش ميموري أمثلة على وسائط:',
        options: [
          { id: 'opt1', text: 'تعبير' },
          { id: 'opt2', text: 'نقل' },
          { id: 'opt3', text: 'تسجيل' }
        ],
        correctOptionId: 'opt3',
        explanation: 'وسائط تسجيل لحفظ المعلومات.'
      },
      {
        id: 'q6-3',
        type: 'multiple-choice',
        difficulty: 'medium',
        question: 'خاصية المعلومات التي تعني صعوبة محوها أو إزالتها تماماً من البيئة:',
        options: [
          { id: 'opt1', text: 'الاستمرارية' },
          { id: 'opt2', text: 'الانتشار' },
          { id: 'opt3', text: 'التكرار' }
        ],
        correctOptionId: 'opt1',
        explanation: 'الاستمرارية تعني البقاء وعدم الزوال بسهولة.'
      },
      {
        id: 'q6-4',
        type: 'scenario',
        difficulty: 'medium',
        question: 'حصلت على نتيجة بحث قام به طالب آخر، هذه المعلومة تعتبر بالنسبة لك:',
        options: [
          { id: 'opt1', text: 'أولية' },
          { id: 'opt2', text: 'ثانوية' }
        ],
        correctOptionId: 'opt2',
        explanation: 'ثانوية لأنك حصلت عليها عبر طرف ثالث (الطالب الآخر).'
      },
      {
        id: 'q6-5',
        type: 'multiple-choice',
        difficulty: 'medium',
        question: 'مقارنة المعلومات من عدة مصادر للتأكد من صحتها يسمى:',
        options: [
          { id: 'opt1', text: 'الاستمرارية' },
          { id: 'opt2', text: 'التحقق المتبادل' },
          { id: 'opt3', text: 'وسائط النقل' }
        ],
        correctOptionId: 'opt2',
        explanation: 'Cross-checking هو التحقق المتبادل.'
      },
      {
        id: 'q6-6',
        type: 'matching',
        difficulty: 'hard',
        question: 'طابق كل مثال مع نوع الوسائط الأقرب له:',
        categories: [
          { id: 'cat1', title: 'وسائط تعبير' },
          { id: 'cat2', title: 'وسائط نقل' },
          { id: 'cat3', title: 'وسائط تسجيل' }
        ],
        items: [
          { id: 'item1', item: 'مقطع صوتي (Audio)', matchId: 'cat1' },
          { id: 'item2', item: 'موجات الراديو', matchId: 'cat2' },
          { id: 'item3', item: 'ورق مطبوع', matchId: 'cat3' }
        ],
        explanation: 'الصوت أداة تعبير، الراديو أداة نقل، والورق أداة تسجيل وحفظ.'
      },
      {
        id: 'q6-7',
        type: 'scenario',
        difficulty: 'hard',
        question: 'يستخدم الطبيب (معلومات) نتائج التحاليل لوصف الدواء المناسب للمريض. هذا يمثل:',
        options: [
          { id: 'opt1', text: 'إنشاء بيانات' },
          { id: 'opt2', text: 'الوصول إلى المعرفة' },
          { id: 'opt3', text: 'التحقق المتبادل' }
        ],
        correctOptionId: 'opt2',
        explanation: 'تطبيق المعلومات لتحليل مشكلة (المرض) واتخاذ قرار (العلاج) هو المعرفة.'
      },
      {
        id: 'q6-8',
        type: 'scenario',
        difficulty: 'challenge',
        question: 'شخص قرأ خبراً في صحيفة (مصدر 1)، فقام بالبحث عن نفس الخبر في مواقع عالمية (مصدر 2) قبل أن يصنع مقطع فيديو (وسيط 3) يشرح فيه الخبر للناس بصورة صحيحة. هذا الشخص طبق:',
        options: [
          { id: 'opt1', text: 'التحقق المتبادل والثقافة الإعلامية' },
          { id: 'opt2', text: 'المعلومات الأولية فقط' },
          { id: 'opt3', text: 'خاصية الاستمرارية فقط' }
        ],
        correctOptionId: 'opt1',
        explanation: 'بحثه في مصادر أخرى هو (تحقق متبادل)، وتفكيره النقدي قبل النشر هو (ثقافة إعلامية).'
      }
    ]
  }
];
