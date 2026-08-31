export type Difficulty = 'easy' | 'medium' | 'hard' | 'challenge';
export type QuestionType = 'mcq' | 'match' | 'arrange';

export interface BaseQuestion {
  id: string;
  type: QuestionType;
  difficulty: Difficulty;
  text: string;
  explanation: string;
}

export interface MCQQuestion extends BaseQuestion {
  type: 'mcq';
  options: string[];
  correctAnswerIndex: number;
}

export interface MatchQuestion extends BaseQuestion {
  type: 'match';
  pairs: { left: string; right: string }[];
}

export interface ArrangeQuestion extends BaseQuestion {
  type: 'arrange';
  items: string[];
}

export type Question = MCQQuestion | MatchQuestion | ArrangeQuestion;

// 1. قسم: ما هو الذكاء الاصطناعي AI؟
export const whatIsAiQuestions: Question[] = [
  {
    id: 'ai-1', type: 'mcq', difficulty: 'easy',
    text: 'ما المقصود بالذكاء الاصطناعي؟',
    options: ['برنامج لتخزين الملفات فقط', 'مجال يضم أنظمة حاسوبية تستطيع تنفيذ مهام مثل التعلم والتنبؤ والتعرف وتوليد المحتوى', 'لغة برمجة', 'جهاز إلكتروني'],
    correctAnswerIndex: 1, explanation: 'الذكاء الاصطناعي هو المجال الأوسع الذي يضم الأنظمة الذكية التي تحاكي القدرات البشرية.'
  },
  {
    id: 'ai-2', type: 'mcq', difficulty: 'easy',
    text: 'أي مما يلي يعتبر مثالًا على استخدام الذكاء الاصطناعي؟',
    options: ['التعرف على الكلام', 'تشغيل المصباح يدويًا', 'توصيل كابل الشحن', 'فتح كتاب'],
    correctAnswerIndex: 0, explanation: 'التعرف على الكلام من المهام التي تتطلب تحليل وتعرّف ذكي، وهو من مهام الذكاء الاصطناعي.'
  },
  {
    id: 'ai-3', type: 'mcq', difficulty: 'medium',
    text: 'هاتفك يستطيع تحويل الكلام الذي تقوله إلى نص. هذا مثال على:',
    options: ['الذكاء الاصطناعي', 'التخزين', 'نظام التشغيل فقط', 'الشبكات'],
    correctAnswerIndex: 0, explanation: 'تحويل الصوت إلى نص يتطلب تقنيات الذكاء الاصطناعي لفهم ومعالجة اللغة الطبيعية.'
  },
  {
    id: 'ai-4', type: 'mcq', difficulty: 'easy',
    text: 'أي من التالي يمكن أن يكون من مهام أنظمة الذكاء الاصطناعي؟',
    options: ['التعرف', 'التنبؤ', 'توليد المحتوى', 'جميع ما سبق'],
    correctAnswerIndex: 3, explanation: 'الذكاء الاصطناعي قادر على التعرف على الصور، التنبؤ بالبيانات، وتوليد نصوص أو صور جديدة.'
  },
  {
    id: 'ai-5', type: 'mcq', difficulty: 'medium',
    text: 'هل الذكاء الاصطناعي يستخدم فقط في التطبيقات التي تتفاعل معها مباشرة؟',
    options: ['نعم', 'لا'],
    correctAnswerIndex: 1, explanation: 'قد يعمل الذكاء الاصطناعي في الخلفية مثل تصنيف الرسائل المزعجة أو توصية المنتجات.'
  },
  {
    id: 'ai-6', type: 'mcq', difficulty: 'easy',
    text: 'تطبيق الترجمة الموجود على الهاتف يمكن أن يستخدم:',
    options: ['الذكاء الاصطناعي', 'الطابعة', 'وحدة التخزين فقط', 'لوحة المفاتيح فقط'],
    correctAnswerIndex: 0, explanation: 'تطبيقات الترجمة الحديثة تعتمد بشكل كبير على الذكاء الاصطناعي لفهم السياق وترجمة النصوص.'
  },
  {
    id: 'ai-7', type: 'mcq', difficulty: 'medium',
    text: 'صح أم خطأ: كل نظام ذكاء اصطناعي يجب أن يكون قادرًا على القيام بكل المهام البشرية.',
    options: ['صح', 'خطأ'],
    correctAnswerIndex: 1, explanation: 'الأنظمة الحالية متخصصة (مثل التعرف على الوجه فقط) ولا تملك ذكاءً عاماً يضاهي البشر في كل شيء.'
  },
  {
    id: 'ai-8', type: 'mcq', difficulty: 'medium',
    text: 'موقف عملي: تطبيق هاتف يستطيع التعرف على وجه المستخدم لفتح الهاتف. هل هذه مهمة يمكن أن ينفذها نظام ذكاء اصطناعي؟',
    options: ['نعم', 'لا'],
    correctAnswerIndex: 0, explanation: 'التعرف على الوجوه يعتبر من أبرز مهام الرؤية الحاسوبية والذكاء الاصطناعي.'
  }
];

// 2. قسم: العلاقة بين AI و ML
export const machineLearningQuestions: Question[] = [
  {
    id: 'ml-1', type: 'mcq', difficulty: 'easy',
    text: 'التعلم الآلي Machine Learning هو:',
    options: ['فرع من الذكاء الاصطناعي', 'نوع من أنواع التخزين', 'لغة برمجة', 'جهاز'],
    correctAnswerIndex: 0, explanation: 'التعلم الآلي يندرج تحت مظلة الذكاء الاصطناعي.'
  },
  {
    id: 'ml-2', type: 'mcq', difficulty: 'medium',
    text: 'ما الفرق الأساسي بين البرمجة التقليدية والتعلم الآلي؟',
    options: ['التعلم الآلي يعتمد على تعلم الأنماط من البيانات', 'التعلم الآلي لا يستخدم البيانات', 'البرمجة التقليدية لا تستخدم أي قواعد', 'لا يوجد فرق'],
    correctAnswerIndex: 0, explanation: 'بدلاً من كتابة كل قاعدة، نغذي النظام بالبيانات ليتعلم هو القواعد.'
  },
  {
    id: 'ml-3', type: 'mcq', difficulty: 'medium',
    text: 'نظام يتعلم من أمثلة سابقة لتصنيف الرسائل المزعجة يمثل:',
    options: ['Machine Learning', 'Keyboard', 'Database فقط', 'Monitor'],
    correctAnswerIndex: 0, explanation: 'استخدام الأمثلة السابقة للتعلم والتحسين هو جوهر التعلم الآلي.'
  },
  {
    id: 'ml-4', type: 'mcq', difficulty: 'easy',
    text: 'نظام توصية المنتجات في متجر إلكتروني يمكن أن يستخدم:',
    options: ['Machine Learning', 'Printer', 'Scanner فقط', 'File Manager'],
    correctAnswerIndex: 0, explanation: 'يتعلم النظام من سجل مشترياتك وتفضيلاتك ليقترح منتجات مناسبة.'
  },
  {
    id: 'ml-5', type: 'mcq', difficulty: 'easy',
    text: 'صح أم خطأ: Machine Learning فرع من Artificial Intelligence.',
    options: ['صح', 'خطأ'],
    correctAnswerIndex: 0, explanation: 'بالفعل، التعلم الآلي هو تقنية تندرج تحت الذكاء الاصطناعي.'
  },
  {
    id: 'ml-6', type: 'mcq', difficulty: 'hard',
    text: 'موقف: إذا قام النظام بتحليل عمليات شراء العملاء السابقة ثم توقع المنتجات التي قد يهتم بها العميل، فما الذي يحدث؟',
    options: ['يتعلم أنماطًا من البيانات', 'يحذف البيانات', 'يطبع البيانات', 'لا يستخدم البيانات'],
    correctAnswerIndex: 0, explanation: 'النظام يحلل البيانات ليستخرج منها أنماطاً تفيده في توقع سلوك العميل المستقبلي.'
  },
  {
    id: 'ml-7', type: 'mcq', difficulty: 'medium',
    text: 'لماذا تحتاج أنظمة التعلم الآلي إلى بيانات؟',
    options: ['لتتعلم منها الأنماط', 'لتغيير لون الشاشة', 'لتشغيل الجهاز فقط', 'لتخزين الصور فقط'],
    correctAnswerIndex: 0, explanation: 'البيانات هي الوقود الذي يبني من خلاله النظام خبرته وقدرته على اتخاذ القرارات.'
  },
  {
    id: 'ml-8', type: 'mcq', difficulty: 'medium',
    text: 'اختر العبارة الصحيحة:',
    options: ['AI أوسع من ML', 'ML أوسع من AI', 'لا توجد علاقة بينهما', 'AI وML لهما نفس المعنى'],
    correctAnswerIndex: 0, explanation: 'الذكاء الاصطناعي هو المجال الأكبر، والتعلم الآلي جزء منه.'
  }
];

// 3. قسم: التعلم العميق Deep Learning
export const deepLearningQuestions: Question[] = [
  {
    id: 'dl-1', type: 'mcq', difficulty: 'easy',
    text: 'التعلم العميق Deep Learning هو:',
    options: ['أسلوب من أساليب التعلم الآلي', 'نظام تشغيل', 'قاعدة بيانات', 'لغة برمجة'],
    correctAnswerIndex: 0, explanation: 'التعلم العميق هو مجموعة فرعية وتقنية متطورة من التعلم الآلي.'
  },
  {
    id: 'dl-2', type: 'mcq', difficulty: 'medium',
    text: 'يعتمد التعلم العميق بشكل أساسي على:',
    options: ['الشبكات العصبية متعددة الطبقات', 'الطابعات', 'لوحات المفاتيح', 'الملفات النصية فقط'],
    correctAnswerIndex: 0, explanation: 'الطبقات المتعددة تسمح بتعلم أنماط شديدة التعقيد.'
  },
  {
    id: 'dl-3', type: 'mcq', difficulty: 'easy',
    text: 'أي من التالي مثال مناسب للتعلم العميق؟',
    options: ['تحليل الصور', 'كتابة اسم المستخدم', 'تشغيل الجهاز', 'تغيير خلفية الشاشة'],
    correctAnswerIndex: 0, explanation: 'تحليل الصور يحتاج لمعالجة بيانات معقدة جداً، وهو ما يمتاز به التعلم العميق.'
  },
  {
    id: 'dl-4', type: 'mcq', difficulty: 'medium',
    text: 'يمكن استخدام Deep Learning في:',
    options: ['التعرف على الكلام', 'تحليل الصور', 'كلاهما', 'لا شيء مما سبق'],
    correctAnswerIndex: 2, explanation: 'يستخدم بنجاح في معالجة الصور والصوت واللغة.'
  },
  {
    id: 'dl-5', type: 'mcq', difficulty: 'easy',
    text: 'صح أم خطأ: التعلم العميق مستقل تمامًا عن التعلم الآلي.',
    options: ['صح', 'خطأ'],
    correctAnswerIndex: 1, explanation: 'التعلم العميق هو في الواقع جزء من التعلم الآلي، وليس مستقلاً عنه.'
  },
  {
    id: 'dl-6', type: 'mcq', difficulty: 'hard',
    text: 'لماذا قد يحتاج التعلم العميق إلى كمية كبيرة نسبيًا من البيانات؟',
    options: ['حتى يتعلم أنماطًا موثوقة', 'حتى يزيد حجم الشاشة', 'حتى يسرع الإنترنت', 'حتى يقلل مساحة التخزين'],
    correctAnswerIndex: 0, explanation: 'كلما زادت تعقيدات النموذج، زادت حاجته للبيانات لتجنب الأخطاء والتعرف بدقة على التفاصيل.'
  },
  {
    id: 'dl-7', type: 'mcq', difficulty: 'medium',
    text: 'موقف عملي: نظام يحلل آلاف الصور الطبية لاكتشاف أنماط معينة. أي تقنية مناسبة أكثر؟',
    options: ['Deep Learning', 'Calculator', 'Text Editor', 'File Explorer'],
    correctAnswerIndex: 0, explanation: 'الصور الطبية تحوي تفاصيل معقدة ودقيقة يبرع التعلم العميق في اكتشافها.'
  },
  {
    id: 'dl-8', type: 'mcq', difficulty: 'hard',
    text: 'إذا رأى نموذج Deep Learning شيئًا نادرًا جدًا في بيانات التدريب، لماذا قد يواجه صعوبة في التعامل معه؟',
    options: ['لأنه لم ير أمثلة كافية لهذا النمط أثناء التدريب', 'لأنه مبرمج على تجاهل البيانات النادرة', 'لأن الإنترنت كان ضعيفًا', 'لأنه ليس من مهام الذكاء الاصطناعي'],
    correctAnswerIndex: 0, explanation: 'النموذج يتعلم من التكرار، إذا لم توجد أمثلة كافية فلن يستطيع التعرف على النمط.'
  }
];

// 4. قسم: الشبكات العصبية الاصطناعية ANN
export const annQuestions: Question[] = [
  {
    id: 'ann-1', type: 'mcq', difficulty: 'easy',
    text: 'الشبكة العصبية الاصطناعية مستوحاة بصورة مبسطة من:',
    options: ['ترابط العصبونات', 'عمل الطابعة', 'القرص الصلب', 'لوحة المفاتيح'],
    correctAnswerIndex: 0, explanation: 'الشبكات العصبية الاصطناعية تحاكي بشكل مبسط طريقة عمل وتشابك خلايا الدماغ البشري.'
  },
  {
    id: 'ann-2', type: 'mcq', difficulty: 'easy',
    text: 'تتكون الشبكة العصبية الاصطناعية من:',
    options: ['وحدات مترابطة', 'ملفات فقط', 'شاشات', 'طابعات'],
    correctAnswerIndex: 0, explanation: 'تتكون من عقد (Nodes) أو وحدات اصطناعية تتواصل وتترابط فيما بينها.'
  },
  {
    id: 'ann-3', type: 'mcq', difficulty: 'hard',
    text: 'ماذا يحدث لأوزان الوحدات أثناء التدريب؟',
    options: ['تتغير لتتعلم أنماطًا من البيانات', 'يتم حذفها', 'تصبح ملفات', 'لا تتغير أبدًا'],
    correctAnswerIndex: 0, explanation: 'تعديل الأوزان هو الآلية الرياضية التي تتم بها عملية "التعلم" في الشبكة العصبية.'
  },
  {
    id: 'ann-4', type: 'mcq', difficulty: 'medium',
    text: 'ما وظيفة الشبكة العصبية؟',
    options: ['التعلم من البيانات وإصدار أحكام أو تنبؤات', 'تخزين الملفات فقط', 'تشغيل الشاشة', 'إرسال البريد فقط'],
    correctAnswerIndex: 0, explanation: 'وظيفتها معالجة المدخلات لاستخراج نتيجة مفيدة مثل التنبؤ أو التصنيف.'
  },
  {
    id: 'ann-5', type: 'mcq', difficulty: 'easy',
    text: 'صح أم خطأ: الشبكات العصبية الاصطناعية تتكون من وحدات مترابطة.',
    options: ['صح', 'خطأ'],
    correctAnswerIndex: 0, explanation: 'صحيح، تترابط الوحدات في طبقات لتبادل ومعالجة المعلومات.'
  },
  {
    id: 'ann-6', type: 'mcq', difficulty: 'medium',
    text: 'موقف: تم تدريب شبكة عصبية على صور كثيرة لقطط وكلاب. بعد التدريب، أعطيتها صورة جديدة. ما الذي يمكن أن تفعله؟',
    options: ['تحاول تصنيف الصورة بناءً على الأنماط التي تعلمتها', 'تحذف الصورة', 'تطبع الصورة', 'تغلق الجهاز'],
    correctAnswerIndex: 0, explanation: 'ستستخدم الأوزان التي ضبطتها أثناء التدريب لتصنيف الصورة الجديدة (قطة أم كلب).'
  },
  {
    id: 'ann-7', type: 'mcq', difficulty: 'medium',
    text: 'إذا تم تدريب الشبكة العصبية على بيانات غير جيدة، فهل يمكن أن تتأثر النتائج؟',
    options: ['نعم', 'لا'],
    correctAnswerIndex: 0, explanation: '"بيانات رديئة تعطي نتائج رديئة"، فالشبكة تعكس جودة البيانات التي تدربت عليها.'
  },
  {
    id: 'ann-8', type: 'arrange', difficulty: 'hard',
    text: 'رتب المفاهيم التالية من الأوسع إلى الأكثر تخصصًا:',
    items: ['الذكاء الاصطناعي (AI)', 'التعلم الآلي (ML)', 'التعلم العميق (DL)'],
    explanation: 'التعلم العميق هو الأكثر تخصصاً تحت مظلة التعلم الآلي التي تقع تحت مظلة الذكاء الاصطناعي.'
  }
];

// 5. قسم: الذكاء الاصطناعي التوليدي GenAI
export const genAiQuestions: Question[] = [
  {
    id: 'gen-1', type: 'mcq', difficulty: 'easy',
    text: 'ما المقصود بالذكاء الاصطناعي التوليدي؟',
    options: ['أنظمة تنشئ محتوى جديدًا', 'أنظمة تخزن الملفات فقط', 'نظام تشغيل', 'شبكة إنترنت'],
    correctAnswerIndex: 0, explanation: 'كما يدل اسمه (Generative)، فهو يقوم بابتكار وتوليد بيانات ومحتوى جديد كلياً.'
  },
  {
    id: 'gen-2', type: 'mcq', difficulty: 'easy',
    text: 'يمكن لـ Generative AI إنشاء:',
    options: ['نصوص', 'صور', 'صوت', 'جميع ما سبق'],
    correctAnswerIndex: 3, explanation: 'التوليد يشمل نصوص (مثل ChatGPT)، صور (مثل Midjourney)، وحتى ملفات صوت وفيديو.'
  },
  {
    id: 'gen-3', type: 'mcq', difficulty: 'easy',
    text: 'أي مما يلي مثال على Generative AI؟',
    options: ['ChatGPT', 'آلة حاسبة بسيطة', 'لوحة مفاتيح', 'مدير الملفات'],
    correctAnswerIndex: 0, explanation: 'ChatGPT هو نموذج لغوي كبير يقوم بتوليد النصوص.'
  },
  {
    id: 'gen-4', type: 'mcq', difficulty: 'medium',
    text: 'إذا طلبت من نظام GenAI: "اكتب قصة قصيرة عن طالب يتعلم البرمجة" فما الذي يقوم به النظام؟',
    options: ['يولد محتوى جديدًا استنادًا إلى الأنماط التي تعلمها', 'يفتح ملفًا محفوظًا بالضرورة', 'يطفئ الجهاز', 'يحذف البيانات'],
    correctAnswerIndex: 0, explanation: 'النظام لا يبحث عن قصة جاهزة محفوظة، بل يبتكر القصة كلمة بكلمة.'
  },
  {
    id: 'gen-5', type: 'mcq', difficulty: 'easy',
    text: 'صح أم خطأ: الذكاء الاصطناعي التوليدي يستطيع إنشاء محتوى جديد مثل النصوص والصور والصوت.',
    options: ['صح', 'خطأ'],
    correctAnswerIndex: 0, explanation: 'صحيح، هو مصمم لتوليد كافة أنواع الوسائط.'
  },
  {
    id: 'gen-6', type: 'mcq', difficulty: 'hard',
    text: 'ما العلاقة بين GenAI وDeep Learning؟',
    options: ['تعتمد غالبية أنظمة GenAI الحديثة على نماذج Deep Learning', 'لا توجد علاقة', 'GenAI هو نظام تشغيل', 'Deep Learning يستخدم GenAI فقط'],
    correctAnswerIndex: 0, explanation: 'توليد محتوى جديد عالي الدقة يعتمد بقوة على قوة الشبكات العصبية العميقة.'
  },
  {
    id: 'gen-7', type: 'mcq', difficulty: 'medium',
    text: 'أي من التالي ليس مثالًا على GenAI؟',
    options: ['نظام لتوليد الصور', 'ChatGPT', 'نظام لتوليد الصوت', 'مرشح الرسائل المزعجة'],
    correctAnswerIndex: 3, explanation: 'مرشح الرسائل المزعجة هو (تصنيف) وليس (توليد) محتوى.'
  },
  {
    id: 'gen-8', type: 'mcq', difficulty: 'medium',
    text: 'موقف عملي: طالب استخدم GenAI لإنشاء صورة لمشروع مدرسي. هل هذا مثال على استخدام Generative AI؟',
    options: ['نعم', 'لا'],
    correctAnswerIndex: 0, explanation: 'نعم، لأن النظام قام بـ"توليد" صورة جديدة للمشروع المدرسي.'
  }
];

// 6. قسم مهم جدًا: AI vs ML vs DL vs GenAI
export const relationshipsQuestions: Question[] = [
  {
    id: 'rel-1', type: 'mcq', difficulty: 'medium',
    text: 'أي ترتيب يمثل العلاقة التعليمية المبسطة الصحيحة؟',
    options: ['AI → ML → DL', 'DL → ML → AI', 'ML → AI → DL', 'GenAI → AI → ML'],
    correctAnswerIndex: 0, explanation: 'AI هو المظلة، يندرج تحته ML، الذي يندرج تحته DL.'
  },
  {
    id: 'rel-2', type: 'mcq', difficulty: 'hard',
    text: 'إذا كان لدينا نظام يتعلم الأنماط من البيانات باستخدام شبكات عصبية متعددة الطبقات، فهذا أقرب إلى:',
    options: ['ML فقط', 'Deep Learning', 'Operating System', 'Database'],
    correctAnswerIndex: 1, explanation: 'الشبكات العصبية متعددة الطبقات هي جوهر التعلم العميق (Deep Learning).'
  },
  {
    id: 'rel-3', type: 'mcq', difficulty: 'medium',
    text: 'أي عبارة صحيحة؟',
    options: ['AI مجال واسع', 'ML فرع من AI', 'DL أسلوب من ML', 'جميع ما سبق'],
    correctAnswerIndex: 3, explanation: 'كل العبارات صحيحة وتصف التسلسل الهرمي للمجال.'
  },
  {
    id: 'rel-4', type: 'match', difficulty: 'medium',
    text: 'اربط كل مفهوم بتعريفه الصحيح:',
    pairs: [
      { left: 'المظلة الكبرى للأنظمة الذكية', right: 'AI' },
      { left: 'يتعلم الأنماط بدون برمجة صريحة لكل قاعدة', right: 'ML' },
      { left: 'يستخدم شبكات عصبية متعددة الطبقات', right: 'DL' },
      { left: 'يولد محتوى جديداً كالصور والنصوص', right: 'GenAI' }
    ],
    explanation: 'هذا يوضح دور وموقع كل تقنية.'
  },
  {
    id: 'rel-5', type: 'mcq', difficulty: 'easy',
    text: 'صح أم خطأ: العلاقة (AI -> ML -> DL) هي علاقة احتواء صارمة في كل الحالات.',
    options: ['صح', 'خطأ'],
    correctAnswerIndex: 1, explanation: 'هي علاقة تعليمية مبسطة، فمجال الذكاء الاصطناعي متداخل وموسع.'
  },
  {
    id: 'rel-6', type: 'mcq', difficulty: 'medium',
    text: 'من أين تستمد معظم أنظمة GenAI الحديثة قدرتها؟',
    options: ['من نماذج التعلم العميق (DL)', 'من الطابعات', 'من مساحة التخزين', 'من البرمجة التقليدية'],
    correctAnswerIndex: 0, explanation: 'قوة GenAI حالياً تستند إلى تطور الشبكات العصبية العميقة.'
  },
  {
    id: 'rel-7', type: 'mcq', difficulty: 'hard',
    text: 'عندما نستخدم مصطلح "الذكاء الاصطناعي"، هل نقصد بالضرورة "التعلم العميق"؟',
    options: ['نعم دائماً', 'لا، قد نستخدم تقنيات أخرى مثل ML التقليدي أو القواعد البرمجية الخبيرة'],
    correctAnswerIndex: 1, explanation: 'الذكاء الاصطناعي أوسع بكثير من مجرد التعلم العميق.'
  },
  {
    id: 'rel-8', type: 'mcq', difficulty: 'medium',
    text: 'تطبيق يصنف رسائل البريد الإلكتروني دون توليد ردود جديدة يمثل بشكل رئيسي:',
    options: ['GenAI', 'ML للتصنيف', 'الطباعة السحابية', 'ألعاب الفيديو'],
    correctAnswerIndex: 1, explanation: 'بما أنه يصنف فقط ولا يولد بيانات، فهو من تطبيقات الـ ML وليس الـ GenAI.'
  }
];

// 7. قسم: الهلوسة Hallucination
export const hallucinationQuestions: Question[] = [
  {
    id: 'hal-1', type: 'mcq', difficulty: 'medium',
    text: 'ما المقصود بـ Hallucination في الذكاء الاصطناعي التوليدي؟',
    options: ['توليد إجابة تبدو صحيحة ولكنها غير صحيحة أو مختلقة', 'إغلاق الجهاز فجأة', 'حذف الملفات', 'بطء الإنترنت'],
    correctAnswerIndex: 0, explanation: 'الهلوسة تعني اختلاق الذكاء الاصطناعي لمعلومات واثقة ولكنها لا تمت للواقع بصلة.'
  },
  {
    id: 'hal-2', type: 'mcq', difficulty: 'medium',
    text: 'طالب طلب من AI معلومة تاريخية، وأعطاه AI إجابة تبدو منطقية. هل يجب أن يضعها الطالب مباشرة في البحث؟',
    options: ['نعم', 'لا'],
    correctAnswerIndex: 1, explanation: 'يجب التحقق من المعلومات ومصادرها قبل الاعتماد عليها لتجنب الهلوسات.'
  },
  {
    id: 'hal-3', type: 'mcq', difficulty: 'easy',
    text: 'ما الخطر الأساسي من Hallucination؟',
    options: ['الحصول على معلومات خاطئة تبدو صحيحة', 'زيادة حجم الشاشة', 'بطء لوحة المفاتيح', 'فقدان الإنترنت'],
    correctAnswerIndex: 0, explanation: 'الخطر الأكبر هو ثقة المستخدم بالمعلومات الخاطئة لأنها مصاغة بشكل جيد ومنطقي.'
  },
  {
    id: 'hal-4', type: 'mcq', difficulty: 'hard',
    text: 'AI أعطاك اسم كتاب ومؤلفًا، لكنك لا تجد الكتاب في أي مصدر موثوق. ماذا تفعل؟',
    options: ['تستخدم المعلومة مباشرة', 'تتحقق من مصادر موثوقة وقد تتجاهل المعلومة إذا لم تجدها', 'ترسلها لأصدقائك', 'تعتبرها صحيحة لأن AI قالها'],
    correctAnswerIndex: 1, explanation: 'في كثير من الأحيان، يختلق الذكاء الاصطناعي عناوين كتب وأسماء مؤلفين وهمية.'
  },
  {
    id: 'hal-5', type: 'mcq', difficulty: 'medium',
    text: 'صح أم خطأ: لا ينبغي أبداً الاعتماد على مخرجات AI بشكل أعمى بدون مراجعة بشرية.',
    options: ['صح', 'خطأ'],
    correctAnswerIndex: 0, explanation: 'المراجعة البشرية ضرورية لأن الذكاء الاصطناعي ليس معصوماً من الأخطاء.'
  },
  {
    id: 'hal-6', type: 'mcq', difficulty: 'medium',
    text: 'أي من الطرق التالية تساعد في تجنب مخاطر هلوسة الذكاء الاصطناعي؟',
    options: ['التحقق من المخرجات ومقارنتها بمصادر موثوقة', 'قراءة المخرجات بسرعة والنسخ', 'الاعتماد على AI فقط كمصدر وحيد للمعلومات'],
    correctAnswerIndex: 0, explanation: 'تقاطع المعلومات ومقارنتها بالمصادر الأصلية هو الحل الأفضل للتحقق.'
  },
  {
    id: 'hal-7', type: 'mcq', difficulty: 'medium',
    text: 'لماذا تحدث الهلوسة في نماذج الذكاء الاصطناعي اللغوية؟',
    options: ['لأنها تتنبأ بالكلمة التالية لتشكيل نص يبدو منطقياً، وليس بالضرورة صحيحاً واقعياً', 'لأن الشاشة معطلة', 'لأن المبرمج تعمد الكذب'],
    correctAnswerIndex: 0, explanation: 'النماذج اللغوية مصممة لتوليد لغة تبدو بشرية، وليست محركات بحث عن الحقيقة المطلقة.'
  },
  {
    id: 'hal-8', type: 'mcq', difficulty: 'easy',
    text: 'هل الذكاء الاصطناعي التوليدي دائمًا على حق؟',
    options: ['نعم', 'لا'],
    correctAnswerIndex: 1, explanation: 'ليس دائماً على حق، فهو قد يخطئ ويختلق المعلومات (يهلوس).'
  }
];

// All Questions Array (for random selection)
export const allQuestions = [
  ...whatIsAiQuestions,
  ...machineLearningQuestions,
  ...deepLearningQuestions,
  ...annQuestions,
  ...genAiQuestions,
  ...relationshipsQuestions,
  ...hallucinationQuestions
];

export const finalReviewQuiz: Question[] = []; // will be filled randomly on client side
