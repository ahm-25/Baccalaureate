import type { Question } from '~/data/lessons/second-baccalaureate/it/lesson-04-questions';

export interface EssayQuestion {
  id: string;
  text: string;
  answer: string[];
  // Nested labels, outermost first, for questions that ask for a diagram
  diagram?: string[];
}

export interface AssessmentBlock {
  id: string;
  period: string;
  title: string;
  essays: EssayQuestion[];
  mcqs: Question[];
}
