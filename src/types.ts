export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
}

export interface ExamConfig {
  skill: string;
  subject: string;
  duration: number;
  totalQuestions: number;
}

export interface Answer {
  questionId: number;
  selectedAnswer: string;
}