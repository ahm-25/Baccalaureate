import type { AssessmentBlock, EssayQuestion } from '../assessments/types';
import type { Question } from '../lesson-04-questions';
import { assessmentBlocks as lesson1 } from '../assessments/unit-02/lesson-01';
import { assessmentBlocks as lesson2 } from '../assessments/unit-02/lesson-02';
import { assessmentBlocks as lesson3 } from '../assessments/unit-02/lesson-03';
import { marksLabel } from '~/utils/marks';

// خمسة نماذج امتحانات على الوحدة الثانية، أسئلتها مأخوذة من تقييمات الدروس الثلاثة
// (كتاب «الأداءات والتقييمات»). كل نموذج: 12 سؤال اختيار من متعدد (4 من كل درس)
// و6 أسئلة مقالية (2 من كل درس). أسئلة الاختيار من متعدد لا تتكرر بين النماذج،
// والأسئلة ذات الفكرة الواحدة موزعة على نماذج مختلفة.
//
// توزيع الدرجات (من 100): الاختيار من متعدد 12 × 3 = 36 درجة،
// والمقالي 64 درجة: 11 درجة لكل سؤال، و10 درجات للسؤالين الأقصر إجابةً.

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

export const TOTAL_MARKS = 100;
const MCQ_MARKS = 3;

interface ModelSpec {
  mcqs: string[];
  // [question id, marks]
  essays: [string, number][];
}

const specs: ModelSpec[] = [
  {
    mcqs: [
      'as21-p1c-m1', 'as21-p2c-m2', 'as21-p1h-m1', 'as21-b-m4',
      'as22-p1h-m1', 'as22-p1c-m2', 'as22-p2c-m1', 'as22-p1c-m1',
      'as23-p1c-m1', 'as23-p1c-m2', 'as23-p1h-m1', 'as23-p1h-m2'
    ],
    essays: [
      ['as21-p1c-e1', 11],
      ['as21-p1h-e2', 11],
      ['as22-p1c-e1', 11],
      ['as22-p2c-e2', 10],
      ['as23-p1c-e1', 10],
      ['as23-p1h-e2', 11]
    ]
  },
  {
    mcqs: [
      'as21-p1c-m2', 'as21-p2c-m1', 'as21-c-m2', 'as21-c-m3',
      'as22-p1h-m2', 'as22-a-m1', 'as22-p2c-m2', 'as22-p2h-m2',
      'as23-a-m1', 'as23-p2c-m1', 'as23-a-m4', 'as23-p2h-m1'
    ],
    essays: [
      ['as21-p1c-e2', 11],
      ['as21-b-e3', 10],
      ['as22-p1c-e2', 11],
      ['as22-p1h-e2', 10],
      ['as23-p1c-e2', 11],
      ['as23-p2h-e1', 11]
    ]
  },
  {
    mcqs: [
      'as21-a-m1', 'as21-a-m3', 'as21-p1h-m2', 'as21-b-m3',
      'as22-c-m4', 'as22-a-m2', 'as22-a-m3', 'as22-p2h-m1',
      'as23-b-m1', 'as23-p2c-m2', 'as23-c-m4', 'as23-p2h-m2'
    ],
    essays: [
      ['as21-p2c-e2', 11],
      ['as21-b-e4', 11],
      ['as22-p1h-e1', 10],
      ['as22-p2h-e1', 11],
      ['as23-p1h-e1', 10],
      ['as23-b-e2', 11]
    ]
  },
  {
    mcqs: [
      'as21-b-m1', 'as21-b-m2', 'as21-p2h-m2', 'as21-c-m4',
      'as22-a-m4', 'as22-b-m4', 'as22-b-m3', 'as22-b-m2',
      'as23-c-m1', 'as23-a-m2', 'as23-b-m3', 'as23-c-m3'
    ],
    essays: [
      ['as21-b-e2', 10],
      ['as21-p2h-e1', 11],
      ['as22-b-e2', 11],
      ['as22-b-e3', 11],
      ['as23-p2c-e1', 10],
      ['as23-b-e4', 11]
    ]
  },
  {
    mcqs: [
      'as21-p2h-m1', 'as21-c-m1', 'as21-a-m2', 'as21-a-m4',
      'as22-b-m1', 'as22-c-m1', 'as22-c-m2', 'as22-c-m3',
      'as23-b-m2', 'as23-c-m2', 'as23-a-m3', 'as23-b-m4'
    ],
    essays: [
      ['as21-b-e1', 11],
      ['as21-c-e4', 11],
      ['as22-c-e1', 10],
      ['as22-c-e2', 11],
      ['as23-p2c-e2', 10],
      ['as23-c-e4', 11]
    ]
  }
];

export const unit2Models: AssessmentBlock[][] = specs.map((spec, i) => {
  const mcqTotal = spec.mcqs.length * MCQ_MARKS;
  const essayTotal = spec.essays.reduce((sum, [, marks]) => sum + marks, 0);
  if (mcqTotal + essayTotal !== TOTAL_MARKS) {
    throw new Error(`Unit 2 model ${i + 1} totals ${mcqTotal + essayTotal} marks, expected ${TOTAL_MARKS}`);
  }

  const essays = pick(essayById, spec.essays.map(([id]) => id))
    .map((essay, j) => ({ ...essay, marks: spec.essays[j]![1] }));

  return [
    {
      id: `u2m${i + 1}-mcq`,
      period: `${spec.mcqs.length} سؤالًا × ${marksLabel(MCQ_MARKS)} = ${marksLabel(mcqTotal)}`,
      title: `أولًا: اختر الإجابة الصحيحة (${marksLabel(mcqTotal)})`,
      quizTitle: `أولًا: اختر الإجابة الصحيحة (${marksLabel(MCQ_MARKS)} لكل سؤال)`,
      essays: [],
      mcqs: pick(mcqById, spec.mcqs)
    },
    {
      id: `u2m${i + 1}-essay`,
      period: `${spec.essays.length} أسئلة = ${marksLabel(essayTotal)}`,
      title: `ثانيًا: أجب عما يأتي (${marksLabel(essayTotal)})`,
      essaysTitle: '✍️ الأسئلة المقالية',
      essays,
      mcqs: []
    }
  ];
});
