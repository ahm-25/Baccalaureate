export type Difficulty = 'easy' | 'medium' | 'hard' | 'challenge';
export type QuestionType = 'mcq' | 'match' | 'arrange' | 'tf';

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

export interface TFQuestion extends BaseQuestion {
  type: 'tf';
  isTrue: boolean;
}

export type Question = MCQQuestion | MatchQuestion | ArrangeQuestion | TFQuestion;

export const allQuestions: Question[] = [
  {
    id: 'q1', type: 'mcq', difficulty: 'easy',
    text: 'عندما يقترح لك YouTube فيديو مشابه لما كنت تشاهده، فإنه يستخدم تقنية:',
    options: ['المساعد الصوتي', 'نظام التوصية', 'الترجمة الآلية', 'الصيانة التنبؤية'],
    correctAnswerIndex: 1, explanation: 'أنظمة التوصية تحلل البيانات وسلوكك لتقترح محتوى مفضل لك.'
  },
  {
    id: 'q2', type: 'mcq', difficulty: 'easy',
    text: 'أي من المهام التالية تُعد مثالاً على عمل المساعد الصوتي؟',
    options: ['التعرف على الأصوات لفهم وتنفيذ الأوامر (مثل تشغيل منبه)', 'اقتراح منتجات للشراء', 'اكتشاف الأمراض في النباتات', 'فتح الهاتف'],
    correctAnswerIndex: 0, explanation: 'المساعد الصوتي يعتمد على معالجة اللغات الطبيعية لفهم الصوت وتنفيذ الأمر.'
  },
  {
    id: 'q3', type: 'tf', difficulty: 'easy',
    text: 'الترجمة الآلية تعتمد فقط على ترجمة كل كلمة منفردة دون فهم السياق.',
    isTrue: false, explanation: 'الترجمة الآلية الحديثة تفهم سياق الجملة لتوفير ترجمة دقيقة وليست مجرد ترجمة حرفية.'
  },
  {
    id: 'q4', type: 'tf', difficulty: 'medium',
    text: 'يستخدم التعرف على الوجه لاكتشاف الوجوه في الصور وفتح الهواتف الذكية.',
    isTrue: true, explanation: 'تقنية التعرف على الوجه تحلل ملامح الوجه وتقارنها بالبيانات المحفوظة.'
  },
  {
    id: 'q5', type: 'mcq', difficulty: 'medium',
    text: 'لماذا يحتاج الطبيب إلى مراجعة قرارات الذكاء الاصطناعي في مجال الرعاية الصحية؟',
    options: ['لأن النظام قد يهلوس أو يخطئ والقرار له تأثير كبير على المريض', 'لأن الذكاء الاصطناعي لا يقرأ الصور', 'لأن الآلة بطيئة جداً', 'لأنها مكلفة'],
    correctAnswerIndex: 0, explanation: 'يجب أن يتدخل الإنسان عند اتخاذ قرارات عالية الأثر لضمان الدقة وتحمل المسؤولية.'
  },
  {
    id: 'q6', type: 'mcq', difficulty: 'medium',
    text: 'أحد أهم تطبيقات الذكاء الاصطناعي في الزراعة هو:',
    options: ['تحسين مسار الشاحنات', 'التنبؤ بموعد الحصاد والكشف عن الآفات', 'صيانة آلات المصنع', 'كتابة تقارير طبية'],
    correctAnswerIndex: 1, explanation: 'الذكاء الاصطناعي يساعد المزارعين على تحسين الإنتاج من خلال مراقبة المحاصيل وتوقع الآفات.'
  },
  {
    id: 'q7', type: 'mcq', difficulty: 'medium',
    text: 'الصيانة التنبؤية في التصنيع تعني:',
    options: ['إصلاح الآلة بعد توقفها تماماً', 'استخدام البيانات للتنبؤ بأعطال الآلات قبل وقوعها', 'تنظيف المصنع يومياً', 'شراء آلات جديدة دائماً'],
    correctAnswerIndex: 1, explanation: 'تعتمد الصيانة التنبؤية على تحليل بيانات الآلة واهتزازاتها لمعرفة متى قد تتعطل لتفادي توقف الإنتاج.'
  },
  {
    id: 'q8', type: 'tf', difficulty: 'medium',
    text: 'في الخدمات اللوجستية، يُستخدم الذكاء الاصطناعي لتقليل استهلاك الوقود باختيار أفضل المسارات.',
    isTrue: true, explanation: 'الذكاء الاصطناعي يحلل خرائط المرور والطقس ليرسم أسرع طريق للشاحنات ويوفر الوقت والوقود.'
  },
  {
    id: 'q9', type: 'tf', difficulty: 'medium',
    text: 'الذكاء الاصطناعي بارع جداً في إيجاد وتصنيف الأنماط في البيانات المعقدة مثل الصور.',
    isTrue: true, explanation: 'اكتشاف الأنماط هو نقطة القوة الأبرز لنماذج التعلم الآلي والشبكات العصبية.'
  },
  {
    id: 'q10', type: 'mcq', difficulty: 'hard',
    text: 'من أهم مخاطر الذكاء الاصطناعي التي تتطلب الحذر:',
    options: ['توليد معلومات غير صحيحة (الهلوسة)', 'سرعة اتخاذ القرار', 'دقة الترجمة', 'اكتشاف الأنماط'],
    correctAnswerIndex: 0, explanation: 'الهلوسة تعني أن يقوم النظام بإنتاج معلومات تبدو صحيحة ولكنها مختلقة تماماً أو لا تستند للواقع.'
  }
];

export const finalReviewQuiz: Question[] = [];
