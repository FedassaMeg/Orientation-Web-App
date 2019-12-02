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

function getQuizAnswers(id) {
  if (!id) {
    return Promise.resolve(null);
  }
  return client(`/quizs/${id}/answers`);
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
  getQuizAnswers,
  getAnswers
};
