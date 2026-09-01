import type { QuizSectionData } from '~/types/quiz';

export const lesson02Questions: QuizSectionData[] = [
  {
    id: 'ethics',
    title: 'أخلاقيات المعلومات',
    questions: [
      {
        id: 'eth-1',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'ما هو المصطلح الذي يعني: المفاهيم والتوجهات الأساسية اللازمة للقيام بأنشطة مناسبة في مجتمع المعلومات؟',
        options: [
          { id: 'eth-1-a', text: 'الثقافة الإعلامية (Media Literacy)' },
          { id: 'eth-1-b', text: 'أخلاقيات المعلومات (Information Ethics)' },
          { id: 'eth-1-c', text: 'الجريمة الإلكترونية (Cybercrime)' },
          { id: 'eth-1-d', text: 'العلامة الجغرافية (Geotagging)' }
        ],
        correctOptionId: 'eth-1-b',
        explanation: 'هذا هو نص تعريف الكتاب لأخلاقيات المعلومات (Information Ethics).'
      },
      {
        id: 'eth-2',
        type: 'true-false',
        difficulty: 'easy',
        question: 'صح أم خطأ: أخلاقيات المعلومات مطلوبة فقط في حالة وجود قانون يفرضها.',
        options: [
          { id: 'eth-2-a', text: 'صح' },
          { id: 'eth-2-b', text: 'خطأ' }
        ],
        correctOptionId: 'eth-2-b',
        explanation: 'خطأ. ينص الكتاب على أن أخلاقيات المعلومات مطلوبة "بغض النظر عن وجود أو عدم وجود قوانين (laws)".'
      },
      {
        id: 'eth-3',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'ما الفرق الأساسي بين القانون والأخلاقيات؟',
        options: [
          { id: 'eth-3-a', text: 'القانون ملزِم وله عقوبة، أما الأخلاقيات فاختيار ووعي وضمير.' },
          { id: 'eth-3-b', text: 'الأخلاقيات ملزِمة ولها عقوبة، أما القانون فاختياري.' },
          { id: 'eth-3-c', text: 'لا يوجد فرق، كلاهما نفس الشيء.' }
        ],
        correctOptionId: 'eth-3-a',
        explanation: 'القانون تفرضه الدولة وله عقوبة محددة، بينما الأخلاقيات يفرضها الشخص على نفسه بدافع الوعي والضمير.'
      },
      {
        id: 'eth-4',
        type: 'scenario',
        difficulty: 'medium',
        question: 'قال طالب: "التعليق ده مش مخالف للقانون، يبقى عادي أكتبه عن زميلي." ما تقييمك لكلامه؟',
        options: [
          { id: 'eth-4-a', text: 'كلامه صحيح، طالما لا يوجد قانون يمنعه.' },
          { id: 'eth-4-b', text: 'كلامه غير صحيح، فالأخلاقيات تمنع السلوك غير اللائق حتى لو لم يمنعه قانون.' },
          { id: 'eth-4-c', text: 'كلامه صحيح لأن الإنترنت مساحة حرة بالكامل.' }
        ],
        correctOptionId: 'eth-4-b',
        explanation: 'حتى لو لم يكن شيء ما محظورًا بواسطة القوانين، لا يزال يجب عليك الامتناع عن الانخراط في سلوك غير لائق.'
      },
      {
        id: 'eth-5',
        type: 'multiple-choice',
        difficulty: 'medium',
        question: 'في أي مجتمع تُطبَّق أخلاقيات المعلومات وفقًا للتعريف الوارد في الكتاب؟',
        options: [
          { id: 'eth-5-a', text: 'مجتمع المعلومات' },
          { id: 'eth-5-b', text: 'المجتمع الزراعي' },
          { id: 'eth-5-c', text: 'المجتمع الصناعي فقط' }
        ],
        correctOptionId: 'eth-5-a',
        explanation: 'التعريف ينص على أنها المفاهيم والتوجهات اللازمة للقيام بأنشطة مناسبة في "مجتمع المعلومات".'
      },
      {
        id: 'eth-6',
        type: 'classification',
        difficulty: 'hard',
        question: 'صنّف كل عبارة: هل تصف القانون أم الأخلاقيات؟',
        categories: [
          { id: 'cat-law', title: 'القانون (Laws)' },
          { id: 'cat-ethics', title: 'الأخلاقيات (Ethics)' }
        ],
        items: [
          { id: 'eth-6-i1', text: 'له عقوبة محددة تفرضها الدولة', categoryId: 'cat-law' },
          { id: 'eth-6-i2', text: 'رقابته الأساسية هي ضمير الشخص', categoryId: 'cat-ethics' },
          { id: 'eth-6-i3', text: 'مكتوب ومنشور رسميًا وملزِم للجميع', categoryId: 'cat-law' },
          { id: 'eth-6-i4', text: 'ليست دائمًا مكتوبة، لكنها توجّه السلوك', categoryId: 'cat-ethics' }
        ],
        explanation: 'القانون سلطة خارجية ملزِمة بعقوبة، والأخلاقيات التزام داخلي نابع من الوعي والضمير.'
      },
      {
        id: 'eth-7',
        type: 'matching',
        difficulty: 'hard',
        question: 'وصّل كل مصطلح بمعناه الصحيح:',
        pairs: [
          { left: 'Information Ethics', right: 'أخلاقيات المعلومات' },
          { left: 'Laws', right: 'القوانين' },
          { left: 'مجتمع المعلومات', right: 'المجتمع الذي تُطبَّق فيه أخلاقيات المعلومات' }
        ],
        explanation: 'المصطلحات الإنجليزية كما وردت في الكتاب: Information Ethics و Laws.'
      },
      {
        id: 'eth-8',
        type: 'multiple-choice',
        difficulty: 'challenge',
        question: 'لماذا لا يكفي القانون وحده لتنظيم سلوك الناس على الإنترنت؟',
        options: [
          { id: 'eth-8-a', text: 'لأن القوانين تتغير كل يوم فلا يمكن الاعتماد عليها.' },
          { id: 'eth-8-b', text: 'لأن هناك تصرفات غير لائقة لا ينص عليها قانون، والأخلاقيات هي التي تمنعها.' },
          { id: 'eth-8-c', text: 'لأن القانون لا يُطبَّق على الإنترنت إطلاقًا.' }
        ],
        correctOptionId: 'eth-8-b',
        explanation: 'أخلاقيات المعلومات تغطي المساحة التي لا يصل إليها نص قانوني، وهي أساس السلوك المناسب في مجتمع المعلومات.'
      }
    ]
  },
  {
    id: 'publishing',
    title: 'قواعد النشر على الإنترنت',
    questions: [
      {
        id: 'pub-1',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'ما هي خاصية المعلومات على الإنترنت كما وردت في الكتاب؟',
        options: [
          { id: 'pub-1-a', text: 'تنتشر بصعوبة وتختفي بسرعة.' },
          { id: 'pub-1-b', text: 'تنتشر بسهولة، وبمجرد انتشارها فإنها لا تختفي بسهولة.' },
          { id: 'pub-1-c', text: 'تُحذف تلقائيًا بعد مدة محددة.' }
        ],
        correctOptionId: 'pub-1-b',
        explanation: 'نص الكتاب: المعلومات تنتشر بسهولة، وبمجرد انتشارها فإنها لا تختفي بسهولة.'
      },
      {
        id: 'pub-2',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'صديقك أرسل لك صورة خاصة به. ماذا يجب أن تفعل قبل نشرها؟',
        options: [
          { id: 'pub-2-a', text: 'أنشرها فورًا لأنها وصلتني بالفعل.' },
          { id: 'pub-2-b', text: 'أحصل على إذنه أولًا قبل النشر.' },
          { id: 'pub-2-c', text: 'أنشرها بدون اسمه فلا مشكلة.' }
        ],
        correctOptionId: 'pub-2-b',
        explanation: 'لا يجوز لك مشاركة الصور أو مقاطع الفيديو التي يمتلكها الآخرون دون الحصول على إذن.'
      },
      {
        id: 'pub-3',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'نشر رقم هاتف زميلك في جروب عام دون علمه يُعد:',
        options: [
          { id: 'pub-3-a', text: 'تسريبًا للمعلومات الشخصية (personal information)' },
          { id: 'pub-3-b', text: 'انتهاكًا لحقوق المؤلف (copyright)' },
          { id: 'pub-3-c', text: 'تصرفًا عاديًا لأنه زميلك' }
        ],
        correctOptionId: 'pub-3-a',
        explanation: 'لا يجب عليك تسريب المعلومات الشخصية لشخص آخر على الإنترنت.'
      },
      {
        id: 'pub-4',
        type: 'true-false',
        difficulty: 'medium',
        question: 'صح أم خطأ: مشاركة فيلم أو أغنية يملك الآخرون حقوق المؤلف عليها علنًا دون إذن أمر مسموح.',
        options: [
          { id: 'pub-4-a', text: 'صح' },
          { id: 'pub-4-b', text: 'خطأ' }
        ],
        correctOptionId: 'pub-4-b',
        explanation: 'خطأ. لا يجوز لك مشاركة المحتوى الذي يحتفظ الآخرون بحقوق المؤلف (copyright) عليه علنًا دون إذن.'
      },
      {
        id: 'pub-5',
        type: 'scenario',
        difficulty: 'medium',
        question: 'مجموعة طلاب أنشأوا جروبًا للسخرية من زميل لهم ونشر صور معدّلة له. هذا التصرف يُسمى:',
        options: [
          { id: 'pub-5-a', text: 'التنمر الإلكتروني (cyber bullying)' },
          { id: 'pub-5-b', text: 'الثقافة الإعلامية (media literacy)' },
          { id: 'pub-5-c', text: 'العلامة الجغرافية (geotagging)' }
        ],
        correctOptionId: 'pub-5-a',
        explanation: 'التنمر الإلكتروني من أهم ما يجب الامتناع عنه عند التعامل على الإنترنت.'
      },
      {
        id: 'pub-6',
        type: 'classification',
        difficulty: 'hard',
        question: 'صنّف كل تصرّف: مقبول أم مرفوض عند نشر المعلومات؟',
        categories: [
          { id: 'cat-ok', title: 'تصرّف مقبول ✅' },
          { id: 'cat-no', title: 'تصرّف مرفوض ❌' }
        ],
        items: [
          { id: 'pub-6-i1', text: 'أستأذن صاحب الصورة قبل نشرها', categoryId: 'cat-ok' },
          { id: 'pub-6-i2', text: 'أنشر تعليقًا يشهّر بزميل لي', categoryId: 'cat-no' },
          { id: 'pub-6-i3', text: 'أتأكد أن ما أنشره لا ينتهك خصوصية أحد', categoryId: 'cat-ok' },
          { id: 'pub-6-i4', text: 'أعيد نشر محتوى محمي بحقوق المؤلف بدون إذن', categoryId: 'cat-no' }
        ],
        explanation: 'القاعدة العامة: إذن صاحب المحتوى + احترام الخصوصية = مقبول، والتشهير وانتهاك الحقوق = مرفوض.'
      },
      {
        id: 'pub-7',
        type: 'ordering',
        difficulty: 'hard',
        question: 'رتّب ما يحدث للمعلومة بعد نشرها على الإنترنت:',
        items: [
          'تنشر المعلومة على الإنترنت',
          'ينسخها الآخرون ويحفظونها',
          'تنتشر عبر مواقع وحسابات كثيرة',
          'حتى لو حذفت الأصل، تبقى النسخ موجودة'
        ],
        explanation: 'لأن المعلومات تنتشر بسهولة ولا تختفي بسهولة، فالتفكير يكون قبل النشر لا بعده.'
      },
      {
        id: 'pub-8',
        type: 'multiple-choice',
        difficulty: 'challenge',
        question: 'ما السبب الجوهري الذي يجعل التفكير قبل النشر أهم من محاولة الحذف بعده؟',
        options: [
          { id: 'pub-8-a', text: 'لأن الحذف يستغرق وقتًا طويلًا في المواقع.' },
          { id: 'pub-8-b', text: 'لأن المعلومة تنتشر بسهولة وتُنسخ، فلا تختفي بسهولة بعد انتشارها.' },
          { id: 'pub-8-c', text: 'لأن المواقع تمنع الحذف نهائيًا.' }
        ],
        correctOptionId: 'pub-8-b',
        explanation: 'خاصية الانتشار وعدم الاختفاء تجعل الحذف غير كافٍ، فالمسؤولية تبدأ قبل الضغط على زر النشر.'
      }
    ]
  },
  {
    id: 'geotagging',
    title: 'العلامة الجغرافية',
    questions: [
      {
        id: 'geo-1',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'ما المصطلح الذي يعني معلومات الموقع التي يمكن إضافتها إلى وسائط مختلفة مثل الصور ومقاطع الفيديو؟',
        options: [
          { id: 'geo-1-a', text: 'الوسائط (Media)' },
          { id: 'geo-1-b', text: 'العلامة الجغرافية (Geotagging)' },
          { id: 'geo-1-c', text: 'الثقافة الإعلامية (Media Literacy)' },
          { id: 'geo-1-d', text: 'حقوق المؤلف (Copyright)' }
        ],
        correctOptionId: 'geo-1-b',
        explanation: 'العلامة الجغرافية (Geotagging) هي معلومات تتضمن خطوط الطول والعرض المضمنة في الصور ومقاطع الفيديو.'
      },
      {
        id: 'geo-2',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'ما نوع البيانات التي تتضمنها العلامة الجغرافية تحديدًا؟',
        options: [
          { id: 'geo-2-a', text: 'أسماء الأشخاص الموجودين في الصورة' },
          { id: 'geo-2-b', text: 'خطوط الطول والعرض' },
          { id: 'geo-2-c', text: 'نوع الكاميرا فقط دون أي بيانات أخرى' }
        ],
        correctOptionId: 'geo-2-b',
        explanation: 'التعريف ينص على أنها معلومات تتضمن خطوط الطول والعرض المضمنة في الصور ومقاطع الفيديو.'
      },
      {
        id: 'geo-3',
        type: 'true-false',
        difficulty: 'easy',
        question: 'صح أم خطأ: هناك خطر أن يتم التعرف على عنوان منزلك من العلامات الجغرافية المضمنة في الصور.',
        options: [
          { id: 'geo-3-a', text: 'صح' },
          { id: 'geo-3-b', text: 'خطأ' }
        ],
        correctOptionId: 'geo-3-a',
        explanation: 'صحيح. ينص الكتاب على خطر التعرض للتحديد والكشف عن موقعك، مثل تحديد موقع منزلك بناءً على مكان التقاط الصورة.'
      },
      {
        id: 'geo-4',
        type: 'multiple-choice',
        difficulty: 'medium',
        question: 'بأي الأجهزة تُلتقط الصور التي قد تحتوي على علامة جغرافية وفقًا للكتاب؟',
        options: [
          { id: 'geo-4-a', text: 'الهواتف الذكية والهواتف المحمولة' },
          { id: 'geo-4-b', text: 'أجهزة الفاكس' },
          { id: 'geo-4-c', text: 'الطابعات الرقمية' }
        ],
        correctOptionId: 'geo-4-a',
        explanation: 'الكتاب يحدد الصور ومقاطع الفيديو التي تم التقاطها بالهواتف الذكية والهواتف المحمولة.'
      },
      {
        id: 'geo-5',
        type: 'scenario',
        difficulty: 'medium',
        question: 'طالبة تنشر يوميًا صورة من شرفة منزلها في نفس التوقيت وبخاصية الموقع مفعّلة. ما الخطر الأكبر هنا؟',
        options: [
          { id: 'geo-5-a', text: 'استهلاك مساحة تخزين كبيرة على الهاتف' },
          { id: 'geo-5-b', text: 'إمكانية تحديد مكان سكنها وروتينها اليومي' },
          { id: 'geo-5-c', text: 'انخفاض جودة الصور بمرور الوقت' }
        ],
        correctOptionId: 'geo-5-b',
        explanation: 'تكرار النشر من نفس الموقع مع تفعيل الموقع يكشف مكان السكن ونمط الحركة، وهذا هو الخطر الذي يحذر منه الكتاب.'
      },
      {
        id: 'geo-6',
        type: 'multiple-choice',
        difficulty: 'medium',
        question: 'ما أفضل إجراء وقائي مباشر قبل نشر صورك على الإنترنت؟',
        options: [
          { id: 'geo-6-a', text: 'إغلاق خدمة الموقع (Location) في إعدادات الكاميرا' },
          { id: 'geo-6-b', text: 'تصغير حجم الصورة قبل رفعها' },
          { id: 'geo-6-c', text: 'نشر الصورة بالأبيض والأسود' }
        ],
        correctOptionId: 'geo-6-a',
        explanation: 'إغلاق خدمة الموقع يمنع تضمين إحداثيات المكان في الصورة من الأساس.'
      },
      {
        id: 'geo-7',
        type: 'classification',
        difficulty: 'hard',
        question: 'صنّف كل تصرّف: يحمي موقعك أم يكشفه؟',
        categories: [
          { id: 'cat-safe', title: 'يحمي موقعك 🛡️' },
          { id: 'cat-risk', title: 'يكشف موقعك ⚠️' }
        ],
        items: [
          { id: 'geo-7-i1', text: 'إغلاق خدمة الموقع في الكاميرا', categoryId: 'cat-safe' },
          { id: 'geo-7-i2', text: 'نشر صورة تظهر فيها لافتة شارع ورقم العمارة', categoryId: 'cat-risk' },
          { id: 'geo-7-i3', text: 'مراجعة خلفية الصورة قبل نشرها', categoryId: 'cat-safe' },
          { id: 'geo-7-i4', text: 'نشر صور يومية من نفس المكان وبنفس التوقيت', categoryId: 'cat-risk' }
        ],
        explanation: 'الحماية تكون بإغلاق بيانات الموقع ومراجعة ما تكشفه الصورة نفسها، أما التكرار وإظهار معالم المكان فيكشفان موقعك.'
      },
      {
        id: 'geo-8',
        type: 'multiple-choice',
        difficulty: 'challenge',
        question: 'لماذا تُعد العلامة الجغرافية خطرًا حتى لو لم تكتب موقعك في المنشور؟',
        options: [
          { id: 'geo-8-a', text: 'لأن الموقع مضمَّن داخل ملف الصورة نفسه دون أن تكتبه.' },
          { id: 'geo-8-b', text: 'لأن المواقع تطلب منك دائمًا كتابة عنوانك قبل النشر.' },
          { id: 'geo-8-c', text: 'لأن الصور لا يمكن حذفها من الهاتف.' }
        ],
        correctOptionId: 'geo-8-a',
        explanation: 'بيانات خط الطول والعرض تُضاف تلقائيًا داخل الملف عند التصوير، فتنتقل مع الصورة دون علم صاحبها.'
      }
    ]
  },
  {
    id: 'disinformation',
    title: 'المعلومات المضللة والشائعات',
    questions: [
      {
        id: 'dis-1',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'ما المصطلح الذي يعني معلومات كاذبة يتم نشرها عمدًا أو شائعات لا أساس لها؟',
        options: [
          { id: 'dis-1-a', text: 'المعلومات الثانوية' },
          { id: 'dis-1-b', text: 'المعلومات المضللة والشائعات (Disinformation and rumors)' },
          { id: 'dis-1-c', text: 'المعرفة (Knowledge)' },
          { id: 'dis-1-d', text: 'وسائل التواصل الاجتماعي' }
        ],
        correctOptionId: 'dis-1-b',
        explanation: 'هذا نص تعريف الكتاب للمعلومات المضللة والشائعات (Disinformation and rumors).'
      },
      {
        id: 'dis-2',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'ما الكلمة المفتاحية التي تميز "المعلومات المضللة" في التعريف؟',
        options: [
          { id: 'dis-2-a', text: 'أنها تُنشر عمدًا' },
          { id: 'dis-2-b', text: 'أنها تُنشر بالخطأ فقط' },
          { id: 'dis-2-c', text: 'أنها تُنشر في الصحف الورقية فقط' }
        ],
        correctOptionId: 'dis-2-a',
        explanation: 'التعريف ينص على أنها معلومات كاذبة يتم نشرها "عمدًا"، أو شائعات لا أساس لها.'
      },
      {
        id: 'dis-3',
        type: 'true-false',
        difficulty: 'easy',
        question: 'صح أم خطأ: مواقع الويب ملزمة قانونيًا بتقديم معلومات دقيقة دائمًا.',
        options: [
          { id: 'dis-3-a', text: 'صح' },
          { id: 'dis-3-b', text: 'خطأ' }
        ],
        correctOptionId: 'dis-3-b',
        explanation: 'خطأ. لا يوجد إلزام كهذا، ولهذا السبب يجب عليك التحقق من المعلومات بنفسك.'
      },
      {
        id: 'dis-4',
        type: 'scenario',
        difficulty: 'medium',
        question: 'وصلك منشور: "عاجل!! انشر قبل الحذف" بدون ذكر أي مصدر. ما التصرف الصحيح؟',
        options: [
          { id: 'dis-4-a', text: 'أنشره فورًا حتى يعرف الجميع' },
          { id: 'dis-4-b', text: 'أتحقق من مصدر رسمي وأقارنه بمصادر أخرى قبل أي شيء' },
          { id: 'dis-4-c', text: 'أنشره وأكتب "منقول" حتى أتجنب المسؤولية' }
        ],
        correctOptionId: 'dis-4-b',
        explanation: 'التحقق المتبادل (Cross-checking) قبل النشر هو الحاجز الأول أمام انتشار الشائعات، وكلمة "منقول" لا تلغي مسؤوليتك.'
      },
      {
        id: 'dis-5',
        type: 'multiple-choice',
        difficulty: 'medium',
        question: 'أي المهارتين من الدرس الأول تساعدك على مواجهة المعلومات المضللة؟',
        options: [
          { id: 'dis-5-a', text: 'التحقق المتبادل (Cross-checking) والثقافة الإعلامية (Media Literacy)' },
          { id: 'dis-5-b', text: 'وسائط التسجيل ووسائط النقل' },
          { id: 'dis-5-c', text: 'قابلية التكرار والانتشار' }
        ],
        correctOptionId: 'dis-5-a',
        explanation: 'التحقق المتبادل يقارن المصادر، والثقافة الإعلامية تجعلك تقرأ المحتوى بعقل ناقد.'
      },
      {
        id: 'dis-6',
        type: 'classification',
        difficulty: 'hard',
        question: 'صنّف كل مؤشر: هل يزيد الثقة في الخبر أم يثير الشك فيه؟',
        categories: [
          { id: 'cat-trust', title: 'يزيد الثقة ✅' },
          { id: 'cat-doubt', title: 'يثير الشك ⚠️' }
        ],
        items: [
          { id: 'dis-6-i1', text: 'الخبر منشور على الموقع الرسمي للجهة المعنية', categoryId: 'cat-trust' },
          { id: 'dis-6-i2', text: 'لغة مثيرة وتحريض على النشر السريع', categoryId: 'cat-doubt' },
          { id: 'dis-6-i3', text: 'يمكن العثور على نفس الخبر في أكثر من مصدر موثوق', categoryId: 'cat-trust' },
          { id: 'dis-6-i4', text: 'المصدر صفحة مجهولة بدون أي دليل', categoryId: 'cat-doubt' }
        ],
        explanation: 'المصدر الرسمي وتطابق المصادر يرفعان الثقة، بينما الإثارة وغياب المصدر من أوضح علامات الشائعة.'
      },
      {
        id: 'dis-7',
        type: 'ordering',
        difficulty: 'hard',
        question: 'رتّب خطوات التعامل مع خبر مشكوك فيه:',
        items: [
          'اقرأ الخبر بتمعّن دون التسرع في تصديقه',
          'ابحث عن مصدره الأصلي',
          'قارنه بمصادر أخرى موثوقة (التحقق المتبادل)',
          'قرر: تنشره أو تتجاهله بناءً على نتيجة التحقق'
        ],
        explanation: 'الترتيب المنطقي: تمهّل، ثم ابحث عن المصدر، ثم قارن، ثم اتخذ القرار — والنشر يأتي أخيرًا لا أولًا.'
      },
      {
        id: 'dis-8',
        type: 'multiple-choice',
        difficulty: 'challenge',
        question: 'شخص أعاد نشر شائعة وهو يظن أنها صحيحة. كيف نقيّم موقفه؟',
        options: [
          { id: 'dis-8-a', text: 'لا مسؤولية عليه إطلاقًا لأنه لم يقصد.' },
          { id: 'dis-8-b', text: 'حسن النية لا يمنع الضرر، فهو ساهم في انتشار معلومة كاذبة وكان عليه التحقق أولًا.' },
          { id: 'dis-8-c', text: 'يكفي أن يحذف المنشور لتعود الأمور كما كانت.' }
        ],
        correctOptionId: 'dis-8-b',
        explanation: 'المعلومات تنتشر بسهولة ولا تختفي بسهولة، لذلك مسؤولية التحقق تقع على كل من ينشر، حتى لو كان حسن النية.'
      }
    ]
  },
  {
    id: 'problems',
    title: 'مشاكل الهواتف الذكية ووسائل التواصل',
    questions: [
      {
        id: 'prb-1',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'ما المصطلح الشامل للخدمات التي توفر منصات للأفراد للتواصل مع بعضهم البعض على الإنترنت؟',
        options: [
          { id: 'prb-1-a', text: 'الهندسة الاجتماعية (Social engineering)' },
          { id: 'prb-1-b', text: 'التسويق الاجتماعي (Social marketing)' },
          { id: 'prb-1-c', text: 'خدمة الشبكة الاجتماعية (Social networking service)' },
          { id: 'prb-1-d', text: 'نظام الشبكة الاجتماعية (Social network system)' }
        ],
        correctOptionId: 'prb-1-c',
        explanation: 'المصطلح الصحيح هو خدمة الشبكة الاجتماعية (Social Networking Service - SNS)، وهو الاسم الآخر لوسائل التواصل الاجتماعي.'
      },
      {
        id: 'prb-2',
        type: 'true-false',
        difficulty: 'easy',
        question: 'صح أم خطأ: وسائل التواصل الاجتماعي ليست أكثر من أداة خطيرة تسبب المتاعب.',
        options: [
          { id: 'prb-2-a', text: 'صح' },
          { id: 'prb-2-b', text: 'خطأ' }
        ],
        correctOptionId: 'prb-2-b',
        explanation: 'خطأ. هي أداة مفيدة للتواصل، لكنها تصبح خطيرة إذا لم تُستخدم بشكل صحيح.'
      },
      {
        id: 'prb-3',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'ما المصطلح الشامل للجرائم التي تنطوي على إساءة استخدام أجهزة الكمبيوتر والشبكات؟',
        options: [
          { id: 'prb-3-a', text: 'الجريمة الإلكترونية (Cybercrime)' },
          { id: 'prb-3-b', text: 'إدمان الإنترنت (Internet addiction)' },
          { id: 'prb-3-c', text: 'انتحال الشخصية (Identity theft)' }
        ],
        correctOptionId: 'prb-3-a',
        explanation: 'الجريمة الإلكترونية هي إساءة استخدام أجهزة الكمبيوتر والشبكات في الأنشطة الإجرامية.'
      },
      {
        id: 'prb-4',
        type: 'multiple-choice',
        difficulty: 'medium',
        question: 'ما المصطلح للحالة التي يُعطي فيها الشخص الأولوية لاستخدام الإنترنت على الدراسة والعمل والصحة؟',
        options: [
          { id: 'prb-4-a', text: 'تسريب المعلومات الشخصية' },
          { id: 'prb-4-b', text: 'إدمان الإنترنت' },
          { id: 'prb-4-c', text: 'الثقافة الإعلامية' }
        ],
        correctOptionId: 'prb-4-b',
        explanation: 'إدمان الإنترنت: حالة يصبح فيها الشخص منغمسًا بشكل مفرط في الإنترنت إلى درجة تعطيل الحياة اليومية.'
      },
      {
        id: 'prb-5',
        type: 'scenario',
        difficulty: 'medium',
        question: 'وصلتك رسالة من حساب باسم وصورة مدرّسك يطلب فيها كلمة مرور حسابك المدرسي. ما اسم هذه المشكلة؟',
        options: [
          { id: 'prb-5-a', text: 'انتحال الشخصية (Identity theft)' },
          { id: 'prb-5-b', text: 'إدمان الإنترنت (Internet addiction)' },
          { id: 'prb-5-c', text: 'استخدام الهاتف أثناء المشي' }
        ],
        correctOptionId: 'prb-5-a',
        explanation: 'انتحال الشخصية هو قيام شخص آخر بانتحال شخصية فرد أو مؤسسة لسرقة هويات أو كلمات مرور.'
      },
      {
        id: 'prb-6',
        type: 'matching',
        difficulty: 'hard',
        question: 'وصّل كل مشكلة بتعريفها الصحيح:',
        pairs: [
          { left: 'Internet addiction', right: 'انغماس مفرط في الإنترنت لدرجة تعطيل الحياة اليومية' },
          { left: 'Cybercrime', right: 'إساءة استخدام أجهزة الكمبيوتر والشبكات في الأنشطة الإجرامية' },
          { left: 'Identity theft', right: 'انتحال شخصية فرد أو مؤسسة لسرقة هويات أو كلمات مرور' },
          { left: 'Leakage of personal information', right: 'الكشف عن معلومات شخصية يجب أن تظل سرية لطرف ثالث' }
        ],
        explanation: 'هذه هي التعريفات الأربعة كما وردت في الكتاب، والخامسة هي استخدام الهاتف الذكي أثناء المشي.'
      },
      {
        id: 'prb-7',
        type: 'classification',
        difficulty: 'hard',
        question: 'صنّف كل موقف تحت المشكلة التي يمثلها:',
        categories: [
          { id: 'cat-add', title: 'إدمان الإنترنت' },
          { id: 'cat-leak', title: 'تسريب المعلومات الشخصية' },
          { id: 'cat-walk', title: 'الاستخدام أثناء المشي' }
        ],
        items: [
          { id: 'prb-7-i1', text: 'يسهر يوميًا على الهاتف وينام في الحصة ولا يستطيع التوقف', categoryId: 'cat-add' },
          { id: 'prb-7-i2', text: 'صورة كارنيه المدرسة انتشرت في جروب عام', categoryId: 'cat-leak' },
          { id: 'prb-7-i3', text: 'يعبر الشارع وعينه على الشاشة', categoryId: 'cat-walk' },
          { id: 'prb-7-i4', text: 'رقم هاتف وعنوان شخص أصبحا متاحين لطرف ثالث', categoryId: 'cat-leak' }
        ],
        explanation: 'التمييز بين المشاكل الخمس يعتمد على جوهر الضرر: وقت وسيطرة (إدمان)، سلامة (المشي)، وسرية بيانات (تسريب).'
      },
      {
        id: 'prb-8',
        type: 'multiple-choice',
        difficulty: 'challenge',
        question: 'قال طالب: "أنا مش بستخدم الإنترنت كتير، يبقى مستحيل أكون ضحية جريمة إلكترونية." ما تقييمك؟',
        options: [
          { id: 'prb-8-a', text: 'كلامه صحيح تمامًا، الابتعاد عن الإنترنت يحميك بالكامل.' },
          { id: 'prb-8-b', text: 'كلامه غير صحيح، فبياناتك قد تكون مسجّلة لدى جهات أخرى متصلة بالإنترنت.' },
          { id: 'prb-8-c', text: 'كلامه صحيح لأن الجرائم الإلكترونية تستهدف الشركات فقط.' }
        ],
        correctOptionId: 'prb-8-b',
        explanation: 'حتى لو عشت حياة منفصلة عن الإنترنت، فبياناتك مسجّلة لدى مدرسة أو مستشفى أو بنك متصل بالشبكة.'
      }
    ]
  },
  {
    id: 'final-quiz',
    title: 'الاختبار الشامل',
    questions: [
      {
        id: 'fin-1',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'أي العبارات التالية تصف العلاقة بين أخلاقيات المعلومات والقوانين بدقة؟',
        options: [
          { id: 'fin-1-a', text: 'الأخلاقيات مطلوبة بغض النظر عن وجود أو عدم وجود قوانين.' },
          { id: 'fin-1-b', text: 'الأخلاقيات تحل محل القوانين تمامًا.' },
          { id: 'fin-1-c', text: 'الأخلاقيات تُطبَّق فقط حين ينص عليها قانون.' }
        ],
        correctOptionId: 'fin-1-a',
        explanation: 'هذا هو جوهر تعريف أخلاقيات المعلومات في الكتاب: مطلوبة بغض النظر عن وجود أو عدم وجود قوانين (laws).'
      },
      {
        id: 'fin-2',
        type: 'matching',
        difficulty: 'medium',
        question: 'وصّل كل مصطلح بتعريفه الصحيح:',
        pairs: [
          { left: 'Geotagging', right: 'معلومات خطوط الطول والعرض المضمنة في الصور والفيديوهات' },
          { left: 'Disinformation and rumors', right: 'معلومات كاذبة تُنشر عمدًا أو شائعات لا أساس لها' },
          { left: 'Social media', right: 'خدمات توفر منصات للتواصل بين الأفراد على الإنترنت' },
          { left: 'Information Ethics', right: 'المفاهيم والتوجهات اللازمة لأنشطة مناسبة في مجتمع المعلومات' }
        ],
        explanation: 'هذه هي المصطلحات الأربعة الأساسية في الدرس كما وردت في الكتاب.'
      },
      {
        id: 'fin-3',
        type: 'scenario',
        difficulty: 'medium',
        question: 'زميلك صوّر ورقة إجابتك بدون إذنك ونشرها في جروب الدفعة. ما التوصيف الأدق لتصرّفه؟',
        options: [
          { id: 'fin-3-a', text: 'تصرّف عادي لأن الورقة كانت في الفصل' },
          { id: 'fin-3-b', text: 'انتهاك للخصوصية ونشر لمحتوى يخصك دون إذن' },
          { id: 'fin-3-c', text: 'إدمان إنترنت' }
        ],
        correctOptionId: 'fin-3-b',
        explanation: 'النشر دون إذن وانتهاك خصوصية الآخرين من القواعد التي يمنعها الكتاب صراحةً عند نشر المعلومات.'
      },
      {
        id: 'fin-4',
        type: 'true-false',
        difficulty: 'medium',
        question: 'صح أم خطأ: بمجرد انتشار المعلومات على الإنترنت فإنها لا تختفي بسهولة.',
        options: [
          { id: 'fin-4-a', text: 'صح' },
          { id: 'fin-4-b', text: 'خطأ' }
        ],
        correctOptionId: 'fin-4-a',
        explanation: 'صحيح، وهذه هي خاصية المعلومات على الإنترنت التي ينص عليها الكتاب: تنتشر بسهولة ولا تختفي بسهولة.'
      },
      {
        id: 'fin-5',
        type: 'classification',
        difficulty: 'hard',
        question: 'صنّف كل موقف تحت المشكلة التي يمثلها:',
        categories: [
          { id: 'cat-crime', title: 'الجريمة الإلكترونية' },
          { id: 'cat-theft', title: 'انتحال الشخصية' },
          { id: 'cat-geo', title: 'خطر العلامة الجغرافية' }
        ],
        items: [
          { id: 'fin-5-i1', text: 'اختراق حساب بنكي عبر رابط مزيف', categoryId: 'cat-crime' },
          { id: 'fin-5-i2', text: 'حساب باسم وصورة مؤسسة رسمية يطلب كلمات المرور', categoryId: 'cat-theft' },
          { id: 'fin-5-i3', text: 'تحديد عنوان منزل شخص من صورة نشرها', categoryId: 'cat-geo' },
          { id: 'fin-5-i4', text: 'استخدام الشبكات في نشاط إجرامي منظم', categoryId: 'cat-crime' }
        ],
        explanation: 'الجريمة الإلكترونية إساءة استخدام الأجهزة والشبكات، والانتحال ادعاء هوية شخص أو مؤسسة، والجيوتاج يكشف الموقع.'
      },
      {
        id: 'fin-6',
        type: 'multiple-choice',
        difficulty: 'hard',
        question: 'ما الفرق بين "الشائعة" و"المعلومات المضللة" وفقًا لصياغة التعريف؟',
        options: [
          { id: 'fin-6-a', text: 'الشائعة لا أساس لها، والمعلومات المضللة معلومات كاذبة تُنشر عمدًا.' },
          { id: 'fin-6-b', text: 'الشائعة تُنشر عمدًا، والمعلومات المضللة تُنشر بالخطأ.' },
          { id: 'fin-6-c', text: 'لا فرق، فكلاهما مصطلح لمعلومة صحيحة غير مكتملة.' }
        ],
        correctOptionId: 'fin-6-a',
        explanation: 'التعريف يجمع الحالتين: معلومات كاذبة يتم نشرها عمدًا (disinformation)، أو شائعات لا أساس لها (rumors).'
      },
      {
        id: 'fin-7',
        type: 'ordering',
        difficulty: 'hard',
        question: 'رتّب الخطوات التي يجب أن تمر بها قبل نشر أي معلومة:',
        items: [
          'تأكد من صحة المعلومة والتحقق من مصدرها',
          'تأكد أنها لا تنتهك خصوصية أحد أو حقوق المؤلف',
          'احصل على إذن صاحب المحتوى إن لزم الأمر',
          'انشرها وأنت مدرك أنها لن تختفي بسهولة'
        ],
        explanation: 'التحقق ثم مراجعة الحقوق والخصوصية ثم الإذن — والنشر يأتي أخيرًا وبوعي كامل بنتائجه.'
      },
      {
        id: 'fin-8',
        type: 'multiple-choice',
        difficulty: 'challenge',
        question: 'ما القاعدة الجامعة التي تلخّص هذا الدرس كله؟',
        options: [
          { id: 'fin-8-a', text: 'كل ما لا يمنعه القانون فهو مسموح على الإنترنت.' },
          { id: 'fin-8-b', text: 'على الجانب الآخر من الشاشة أشخاص حقيقيون، فتصرّف بمسؤولية حتى لو لم يمنعك قانون.' },
          { id: 'fin-8-c', text: 'الأفضل الابتعاد عن الإنترنت تمامًا لتجنب كل المشاكل.' }
        ],
        correctOptionId: 'fin-8-b',
        explanation: 'أخلاقيات المعلومات تقوم على إدراك أن هناك أشخاصًا حقيقيين على الجانب الآخر، ومشاركة المعلومات مع مراعاة وجهة نظرهم.'
      }
    ]
  }
];
