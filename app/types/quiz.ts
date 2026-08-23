export type QuestionType = 'multiple-choice' | 'true-false' | 'matching' | 'scenario';

export interface QuizOption {
  id: string;
  text: string;
}

export interface MatchingPair {
  id: string;
  item: string; // The item to match
  matchId: string; // The ID of the category it belongs to
}

export interface MatchingCategory {
  id: string;
  title: string;
}

export interface BaseQuestion {
  id: string;
  type: QuestionType;
  question: string;
  explanation: string;
  difficulty?: 'easy' | 'medium' | 'hard' | 'challenge';
}

export interface MultipleChoiceQuestion extends BaseQuestion {
  type: 'multiple-choice' | 'true-false' | 'scenario';
  options: QuizOption[];
  correctOptionId: string;
}

export interface MatchingQuestion extends BaseQuestion {
  type: 'matching';
  items: MatchingPair[];
  categories: MatchingCategory[];
}

export type QuizQuestion = MultipleChoiceQuestion | MatchingQuestion;

export interface QuizSectionData {
  id: string;
  title: string;
  questions: QuizQuestion[];
}
