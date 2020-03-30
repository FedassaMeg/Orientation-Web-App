import {
  getQuiz,
  getQuizQuestions,
  getQuizTFAnswers,
  getQuizMCAnswers,
  getQuizSAAnswers
} from "./api-call-quiz";

async function bootstrapData(quizId) {
  try {
    const quizData = await getQuiz(quizId);
    const questionsData = await getQuizQuestions(quizId);
    const tfanswersData = await getQuizTFAnswers(quizId);
    const mcanswersData = await getQuizMCAnswers(quizId);
    const saanswersData = await getQuizSAAnswers(quizId);
    const answers = [
      ...tfanswersData.data,
      ...mcanswersData.data,
      ...saanswersData.data
    ];
    const data = Object.freeze(
      Object.assign(
        {},
        { quiz: quizData.data },
        { questions: questionsData.data },
        {
          answers
        }
      )
    );
    return data;
  } catch (e) {
    console.log(e);
  }
}

export { bootstrapData };
