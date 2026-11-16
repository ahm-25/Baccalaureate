import type { AssessmentBlock, EssayQuestion } from '../assessments/types';
import type { Question } from '../lesson-04-questions';
import { assessmentBlocks as lesson1 } from '../assessments/unit-02/lesson-01';
import { assessmentBlocks as lesson2 } from '../assessments/unit-02/lesson-02';
import { assessmentBlocks as lesson3 } from '../assessments/unit-02/lesson-03';

// خمسة نماذج امتحانات على الوحدة الثانية، أسئلتها مأخوذة من تقييمات الدروس الثلاثة
// (كتاب «الأداءات والتقييمات»). كل نموذج: 12 سؤال اختيار من متعدد (4 من كل درس)
// و6 أسئلة مقالية (2 من كل درس). أسئلة الاختيار من متعدد لا تتكرر بين النماذج،
// والأسئلة ذات الفكرة الواحدة موزعة على نماذج مختلفة.

const allBlocks = [...lesson1, ...lesson2, ...lesson3];
const mcqById = new Map<string, Question>(allBlocks.flatMap(b => b.mcqs.map(q => [q.id, q] as const)));
const essayById = new Map<string, EssayQuestion>(allBlocks.flatMap(b => b.essays.map(q => [q.id, q] as const)));

function pick<T>(source: Map<string, T>, ids: string[]): T[] {
  return ids.map(id => {
    const question = source.get(id);
    if (!question) throw new Error(`Unknown unit-2 assessment question id: ${id}`);
    return question;
  });
}

interface ModelSpec {
  mcqs: string[];
  essays: string[];
}

const specs: ModelSpec[] = [
  {
    mcqs: [
      'as21-p1c-m1', 'as21-p2c-m2', 'as21-p1h-m1', 'as21-b-m4',
      'as22-p1h-m1', 'as22-p1c-m2', 'as22-p2c-m1', 'as22-p1c-m1',
      'as23-p1c-m1', 'as23-p1c-m2', 'as23-p1h-m1', 'as23-p1h-m2'
    ],
    essays: ['as21-p1c-e1', 'as21-p1h-e2', 'as22-p1c-e1', 'as22-p2c-e2', 'as23-p1c-e1', 'as23-p1h-e2']
  },
  {
    mcqs: [
      'as21-p1c-m2', 'as21-p2c-m1', 'as21-c-m2', 'as21-c-m3',
      'as22-p1h-m2', 'as22-a-m1', 'as22-p2c-m2', 'as22-p2h-m2',
      'as23-a-m1', 'as23-p2c-m1', 'as23-a-m4', 'as23-p2h-m1'
    ],
    essays: ['as21-p1c-e2', 'as21-b-e3', 'as22-p1c-e2', 'as22-p1h-e2', 'as23-p1c-e2', 'as23-p2h-e1']
  },
  {
    mcqs: [
      'as21-a-m1', 'as21-a-m3', 'as21-p1h-m2', 'as21-b-m3',
      'as22-c-m4', 'as22-a-m2', 'as22-a-m3', 'as22-p2h-m1',
      'as23-b-m1', 'as23-p2c-m2', 'as23-c-m4', 'as23-p2h-m2'
    ],
    essays: ['as21-p2c-e2', 'as21-b-e4', 'as22-p1h-e1', 'as22-p2h-e1', 'as23-p1h-e1', 'as23-b-e2']
  },
  {
    mcqs: [
      'as21-b-m1', 'as21-b-m2', 'as21-p2h-m2', 'as21-c-m4',
      'as22-a-m4', 'as22-b-m4', 'as22-b-m3', 'as22-b-m2',
      'as23-c-m1', 'as23-a-m2', 'as23-b-m3', 'as23-c-m3'
    ],
    essays: ['as21-b-e2', 'as21-p2h-e1', 'as22-b-e2', 'as22-b-e3', 'as23-p2c-e1', 'as23-b-e4']
  },
  {
    mcqs: [
      'as21-p2h-m1', 'as21-c-m1', 'as21-a-m2', 'as21-a-m4',
      'as22-b-m1', 'as22-c-m1', 'as22-c-m2', 'as22-c-m3',
      'as23-b-m2', 'as23-c-m2', 'as23-a-m3', 'as23-b-m4'
    ],
    essays: ['as21-b-e1', 'as21-c-e4', 'as22-c-e1', 'as22-c-e2', 'as23-p2c-e2', 'as23-c-e4']
  }
];

export const unit2Models: AssessmentBlock[][] = specs.map((spec, i) => [
  {
    id: `u2m${i + 1}-mcq`,
    period: `${spec.mcqs.length} سؤالًا`,
    title: 'أولًا: اختر الإجابة الصحيحة',
    quizTitle: 'أولًا: اختر الإجابة الصحيحة',
    essays: [],
    mcqs: pick(mcqById, spec.mcqs)
  },
  {
    id: `u2m${i + 1}-essay`,
    period: `${spec.essays.length} أسئلة`,
    title: 'ثانيًا: أجب عما يأتي',
    essaysTitle: '✍️ الأسئلة المقالية',
    essays: pick(essayById, spec.essays),
    mcqs: []
  }
]);
