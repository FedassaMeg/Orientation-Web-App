import {
  getQuiz,
  getQuizQuestions,
  getQuizTFAnswers,
  getQuizMCAnswers,
  getQuizSAAnswers
} from "./api-call-quiz";

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

  const tfanswersRes = await getQuizTFAnswers(quizId);
  const mcanswersRes = await getQuizMCAnswers(quizId);
  const saanswersRes = await getQuizSAAnswers(quizId);

  const answers = tfanswersRes.data.concat(
    mcanswersRes.data.concat(saanswersRes.data)
  );

  return { quiz, questions, answers };
}

export { bootstrapData };
