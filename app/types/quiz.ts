export type QuestionType = 
  | 'multiple-choice' 
  | 'true-false' 
  | 'matching' 
  | 'classification' 
  | 'ordering' 
  | 'scenario';

export interface QuizOption {
  id: string;
  text: string;
}

export interface MatchingPair {
  left: string;  // Dragged item (example)
  right: string; // Target category (concept)
}

export interface ClassificationCategory {
  id: string;
  title: string;
}

export interface ClassificationItem {
  id: string;
  text: string;
  categoryId: string; // The correct category this item belongs to
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
  pairs: MatchingPair[];
}

export interface ClassificationQuestion extends BaseQuestion {
  type: 'classification';
  categories: ClassificationCategory[];
  items: ClassificationItem[];
}

export interface OrderingQuestion extends BaseQuestion {
  type: 'ordering';
  items: string[]; // Correct ordered items
}

export type QuizQuestion = 
  | MultipleChoiceQuestion 
  | MatchingQuestion 
  | ClassificationQuestion 
  | OrderingQuestion;

export interface QuizSectionData {
  id: string;
  title: string;
  questions: QuizQuestion[];
}
