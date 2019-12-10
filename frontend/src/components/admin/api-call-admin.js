import client from "../utils/api-client";

function getUsers() {
  return client(`/users`);
}

function getQuizzes() {
  return client(`/quizs`);
}

function getScores() {
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
  getUsers,
  getQuizzes,
  getScores,
  getQuizQuestions,
  getQuizAnswers,
  getAnswers
};
