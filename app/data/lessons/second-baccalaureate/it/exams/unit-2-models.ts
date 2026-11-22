import type { AssessmentBlock, EssayQuestion } from '../assessments/types';
import type { Question } from '../lesson-04-questions';
import { assessmentBlocks as lesson1 } from '../assessments/unit-02/lesson-01';
import { assessmentBlocks as lesson2 } from '../assessments/unit-02/lesson-02';
import { assessmentBlocks as lesson3 } from '../assessments/unit-02/lesson-03';
import { marksLabel } from '~/utils/marks';

// خمسة نماذج امتحانات على الوحدة الثانية، أسئلتها مأخوذة من تقييمات الدروس الثلاثة
// (كتاب «الأداءات والتقييمات»). كل نموذج: 10 أسئلة اختيار من متعدد و5 أسئلة مقالية،
// بحيث يكون لكل درس 5 أسئلة في النموذج (4 اختيار + 1 مقالي، أو 3 اختيار + 2 مقالي).
// الأسئلة لا تتكرر بين النماذج، والأسئلة ذات الفكرة الواحدة موزعة على نماذج مختلفة.
//
// زمن الامتحان: ساعة واحدة. توزيع الدرجات (من 50): الاختيار من متعدد 10 × 2 = 20 درجة،
// والمقالي 5 × 6 = 30 درجة.

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

export const TOTAL_MARKS = 50;
export const DURATION = 'ساعة واحدة';
const MCQ_MARKS = 2;
const ESSAY_MARKS = 6;

interface ModelSpec {
  mcqs: string[];
  essays: string[];
}

const specs: ModelSpec[] = [
  {
    mcqs: [
      'as21-p1c-m1', 'as21-p2c-m2', 'as21-p1h-m1', 'as21-b-m4',
      'as22-p1h-m1', 'as22-p1c-m2', 'as22-p2c-m1',
      'as23-p1c-m1', 'as23-p1c-m2', 'as23-p1h-m1'
    ],
    essays: ['as21-p1c-e1', 'as22-p1c-e1', 'as22-p2c-e2', 'as23-p1c-e1', 'as23-p1h-e2']
  },
  {
    mcqs: [
      'as21-p1c-m2', 'as21-p2c-m1', 'as21-c-m3',
      'as22-p1h-m2', 'as22-a-m1', 'as22-p2c-m2', 'as22-p2h-m2',
      'as23-a-m1', 'as23-p2c-m1', 'as23-a-m4'
    ],
    essays: ['as21-p1c-e2', 'as21-b-e3', 'as22-p1h-e2', 'as23-p1c-e2', 'as23-p2h-e1']
  },
  {
    mcqs: [
      'as21-a-m1', 'as21-p1h-m2', 'as21-b-m3',
      'as22-c-m4', 'as22-a-m2', 'as22-a-m3',
      'as23-b-m1', 'as23-p2c-m2', 'as23-c-m4', 'as23-p2h-m2'
    ],
    essays: ['as21-p2c-e2', 'as21-b-e4', 'as22-p1h-e1', 'as22-p2h-e1', 'as23-p1h-e1']
  },
  {
    mcqs: [
      'as21-b-m1', 'as21-b-m2', 'as21-p2h-m2', 'as21-c-m4',
      'as22-a-m4', 'as22-b-m4', 'as22-b-m3',
      'as23-c-m1', 'as23-a-m2', 'as23-c-m3'
    ],
    essays: ['as21-b-e2', 'as22-b-e2', 'as22-b-e3', 'as23-p2c-e1', 'as23-b-e4']
  },
  {
    mcqs: [
      'as21-p2h-m1', 'as21-a-m2', 'as21-a-m4',
      'as22-b-m1', 'as22-c-m1', 'as22-c-m2', 'as22-c-m3',
      'as23-b-m2', 'as23-c-m2', 'as23-b-m4'
    ],
    essays: ['as21-b-e1', 'as21-c-e4', 'as22-c-e2', 'as23-p2c-e2', 'as23-c-e4']
  }
];

export const unit2Models: AssessmentBlock[][] = specs.map((spec, i) => {
  const mcqTotal = spec.mcqs.length * MCQ_MARKS;
  const essayTotal = spec.essays.length * ESSAY_MARKS;
  if (mcqTotal + essayTotal !== TOTAL_MARKS) {
    throw new Error(`Unit 2 model ${i + 1} totals ${mcqTotal + essayTotal} marks, expected ${TOTAL_MARKS}`);
  }

  const essays = pick(essayById, spec.essays).map(essay => ({ ...essay, marks: ESSAY_MARKS }));

  return [
    {
      id: `u2m${i + 1}-mcq`,
      period: `${spec.mcqs.length} أسئلة × ${marksLabel(MCQ_MARKS)} = ${marksLabel(mcqTotal)}`,
      title: `أولًا: اختر الإجابة الصحيحة (${marksLabel(mcqTotal)})`,
      quizTitle: `أولًا: اختر الإجابة الصحيحة (${marksLabel(MCQ_MARKS)} لكل سؤال)`,
      essays: [],
      mcqs: pick(mcqById, spec.mcqs)
    },
    {
      id: `u2m${i + 1}-essay`,
      period: `${spec.essays.length} أسئلة × ${marksLabel(ESSAY_MARKS)} = ${marksLabel(essayTotal)}`,
      title: `ثانيًا: أجب عما يأتي (${marksLabel(essayTotal)})`,
      essaysTitle: '✍️ الأسئلة المقالية',
      essays,
      mcqs: []
    }
  ];
});
