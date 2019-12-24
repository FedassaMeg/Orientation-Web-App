import client from "../utils/api-client";

function getUsers() {
  return client(`/users`);
}

function getQuiz(id) {
  if (!id) {
    return Promise.resolve(null);
  }
  return client(`/quizs/${id}`);
}

function getQuizzes() {
  return client(`/quizs`);
}

function getScores() {
  return client(`/scores`);
}

function getUserScores(id) {
  if (!id) {
    return Promise.resolve(null);
  }
  return client(`/users/${id}/scores`);
}

function getUserAns(id) {
  if (!id) {
    return Promise.resolve(null);
  }
  return client(`/scores/${id}/useranswers`);
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
  getUsers,
  getQuiz,
  getQuizzes,
  getScores,
  getUserScores,
  getUserAns,
  getQuizQuestions,
  getQuizAnswers,
  getAnswers
};
