import { getQuiz, getQuizQuestions, getQuizAnswers } from "./api-call-quiz";

async function bootstrapData(quizId) {
  const res = await getQuiz(quizId);
  if (!res) {
    return { quiz: null };
  }
  const quiz = res.data;

  const questionsRes = await getQuizQuestions(quizId);
  if (!questionsRes) {
    return { questions: null };
  }
  const questions = questionsRes.data;

  const answersRes = await getQuizAnswers(quizId);
  if (!answersRes) {
    return { answers: null };
  }
  const answers = answersRes.data;

  return { quiz, questions, answers };
}

export { bootstrapData };
