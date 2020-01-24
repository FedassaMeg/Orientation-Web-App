import client from "../utils/api-client";

function getQuiz(id) {
  if (!id) {
    return Promise.resolve(null);
  }
  return client(`/quizs/${id}`);
}

function getQuizzes() {
  return client(`/quizs`);
}

function getQuizScores() {
  return client(`/scores`);
}

function getQuizQuestions(id) {
  if (!id) {
    return Promise.resolve(null);
  }
  return client(`/quizs/${id}/questions`);
}

function getQuizTFAnswers(id) {
  if (!id) {
    return Promise.resolve(null);
  }
  return client(`/quizs/${id}/tfanswers`);
}

function getQuizMCAnswers(id) {
  if (!id) {
    return Promise.resolve(null);
  }
  return client(`/quizs/${id}/mcanswers`);
}

function getQuizSAAnswers(id) {
  if (!id) {
    return Promise.resolve(null);
  }
  return client(`/quizs/${id}/saanswers`);
}

function getAnswers(id) {
  if (!id) {
    return Promise.resolve(null);
  }
  return client(`/answers/${id}`);
}

export {
  getQuiz,
  getQuizzes,
  getQuizScores,
  getQuizQuestions,
  getQuizTFAnswers,
  getQuizMCAnswers,
  getQuizSAAnswers,
  getAnswers
};
