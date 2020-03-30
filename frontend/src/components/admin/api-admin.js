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

function getUserTFAnswers(id) {
  if (!id) {
    return Promise.resolve(null);
  }
  return client(`/scores/${id}/tfuseranswers`);
}

function getUserMCAnswers(id) {
  if (!id) {
    return Promise.resolve(null);
  }
  return client(`/scores/${id}/mcuseranswers`);
}

function getUserSAAnswers(id) {
  if (!id) {
    return Promise.resolve(null);
  }
  return client(`/scores/${id}/sauseranswers`);
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

export {
  getUsers,
  getQuiz,
  getQuizzes,
  getScores,
  getUserScores,
  getUserTFAnswers,
  getUserMCAnswers,
  getUserSAAnswers,
  getQuizQuestions,
  getQuizTFAnswers,
  getQuizMCAnswers,
  getQuizSAAnswers
};
