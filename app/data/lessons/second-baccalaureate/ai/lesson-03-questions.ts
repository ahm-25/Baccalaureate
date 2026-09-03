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

// Daily Life AI
export const dailyLifeQuestions: Question[] = [
  {
    id: 'daily-1', type: 'mcq', difficulty: 'easy',
    text: 'أي من الخدمات التالية يعتمد على "نظام التوصية"؟',
    options: ['اقتراح مقاطع فيديو مشابهة لما تشاهده', 'فتح الهاتف بالوجه', 'طباعة المستندات', 'ترجمة النصوص'],
    correctAnswerIndex: 0, explanation: 'أنظمة التوصية تحلل سلوكك لتقترح لك محتوى مشابه.'
  },
  {
    id: 'daily-2', type: 'mcq', difficulty: 'easy',
    text: 'ما هي وظيفة المساعد الصوتي؟',
    options: ['التعرف على الصوت وفهم الأوامر وتنفيذها', 'تصوير الشاشة', 'تحليل الصور الطبية', 'كتابة الأكواد فقط'],
    correctAnswerIndex: 0, explanation: 'المساعد الصوتي يعتمد على معالجة اللغات الطبيعية لفهم الصوت.'
  }
];

// Industry AI
export const industryQuestions: Question[] = [
  {
    id: 'ind-1', type: 'mcq', difficulty: 'medium',
    text: 'كيف يساعد الذكاء الاصطناعي في الزراعة؟',
    options: ['التنبؤ بموعد الحصاد والكشف عن الآفات', 'الرد على المكالمات الهاتفية للمزرعة', 'زيادة مساحة الأرض الزراعية', 'لا يمكن استخدامه في الزراعة'],
    correctAnswerIndex: 0, explanation: 'يساعد AI في تحسين الإنتاج من خلال تحليل صور المحاصيل للتنبؤ بالأمراض.'
  },
  {
    id: 'ind-2', type: 'mcq', difficulty: 'medium',
    text: 'ما هو مصطلح التنبؤ بأعطال الآلات قبل وقوعها في المصانع؟',
    options: ['الصيانة التنبؤية', 'نظام التوصية', 'الصيانة التقليدية', 'التشخيص الطبي'],
    correctAnswerIndex: 0, explanation: 'الصيانة التنبؤية تستخدم بيانات الآلات لتوقع الأعطال وتجنب توقف الإنتاج.'
  }
];

// AI Strengths and Risks
export const risksQuestions: Question[] = [
  {
    id: 'risk-1', type: 'tf', difficulty: 'hard',
    text: 'يمكن ترك الأحكام الأخلاقية بالكامل للذكاء الاصطناعي دون الحاجة لتدخل بشري.',
    isTrue: false, explanation: 'الذكاء الاصطناعي يفتقر إلى الفهم الأخلاقي العميق وقد ينتج أحكاماً متحيزة.'
  },
  {
    id: 'risk-2', type: 'mcq', difficulty: 'medium',
    text: 'متى تصبح أحكام الذكاء الاصطناعي غير دقيقة أو متحيزة بشكل أساسي؟',
    options: ['عندما تكون بيانات التدريب متحيزة أو غير ممثلة', 'عندما يكون الجهاز قديماً', 'عندما لا يتصل بالإنترنت', 'لا يخطئ الذكاء الاصطناعي أبداً'],
    correctAnswerIndex: 0, explanation: 'جودة النتائج تعتمد بشكل مباشر على جودة بيانات التدريب (Garbage In, Garbage Out).'
  }
];

// True/False specific
export const trueFalseQuestions: Question[] = [
  {
    id: 'tf-1', type: 'tf', difficulty: 'easy',
    text: 'الذكاء الاصطناعي بارع في الاستدلال الاحتمالي والتنبؤ استنادًا إلى البيانات.',
    isTrue: true, explanation: 'هذه إحدى أهم نقاط قوة الذكاء الاصطناعي حيث يمكنه استنتاج الأنماط من البيانات.'
  },
  {
    id: 'tf-2', type: 'tf', difficulty: 'easy',
    text: 'الذكاء الاصطناعي بارع في التعرف على الصور والصوت.',
    isTrue: true, explanation: 'أنظمة الرؤية الحاسوبية ومعالجة اللغات حققت تطوراً هائلاً في هذه المجالات.'
  },
  {
    id: 'tf-3', type: 'tf', difficulty: 'medium',
    text: 'يمكن ترك الأحكام الأخلاقية بالكامل للذكاء الاصطناعي.',
    isTrue: false, explanation: 'يجب أن تظل الأحكام الأخلاقية تحت إشراف بشري نظراً لاحتمالية التحيز.'
  },
  {
    id: 'tf-4', type: 'tf', difficulty: 'medium',
    text: 'يمكن أن تصبح أحكام الذكاء الاصطناعي غير دقيقة عندما تكون بيانات التدريب متحيزة.',
    isTrue: true, explanation: 'النظام سيتعلم ويكرر نفس التحيز الموجود في البيانات التي تدرب عليها.'
  }
];

export const allQuestions = [
  ...dailyLifeQuestions,
  ...industryQuestions,
  ...risksQuestions,
  ...trueFalseQuestions
];

export const finalReviewQuiz: Question[] = [];
