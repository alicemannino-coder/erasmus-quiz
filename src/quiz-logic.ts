import type { QuizDefinition } from './quiz-data';

export type Detail = {
  question: string;
  answer: string;
  correctAnswer: string;
  correct: boolean;
  explanation?: string;
  sourceUrl?: string;
};

export function gradeQuiz(quiz: QuizDefinition, answers: number[]) {
  if (answers.length !== quiz.questions.length || answers.some((answer, index) =>
    !Number.isInteger(answer) || answer < 0 || answer >= quiz.questions[index].options.length
  )) {
    throw new Error('Completa tutte le domande prima di vedere il risultato.');
  }

  const details: Detail[] = quiz.questions.map((question, index) => ({
    question: question.text,
    answer: question.options[answers[index]],
    correctAnswer: question.options[question.correct],
    correct: answers[index] === question.correct,
    explanation: question.explanation,
    sourceUrl: question.sourceUrl,
  }));
  return { score: details.filter(detail => detail.correct).length, total: details.length, details };
}
