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

function getTFAnswers(id) {
  if (!id) {
    return Promise.resolve(null);
  }
  return client(`/tfanswers/${id}`);
}

function getQuizMCAnswers(id) {
  if (!id) {
    return Promise.resolve(null);
  }
  return client(`/quizs/${id}/tfanswers`);
}

function getMCAnswers(id) {
  if (!id) {
    return Promise.resolve(null);
  }
  return client(`/mcanswers/${id}`);
}

function getQuizSAAnswers(id) {
  if (!id) {
    return Promise.resolve(null);
  }
  return client(`/quizs/${id}/tfanswers`);
}

function getSAAnswers(id) {
  if (!id) {
    return Promise.resolve(null);
  }
  return client(`/saanswers/${id}`);
}

function getQuestionType(id) {
  if (!id) {
    return Promise.resolve(null);
  }
  return client(`/questiontypes/${id}`);
}

export {
  getQuiz,
  getQuizzes,
  getQuizScores,
  getQuizQuestions,
  getQuizTFAnswers,
  getQuizMCAnswers,
  getQuizSAAnswers,
  getQuestionType,
  getMCAnswers,
  getSAAnswers,
  getTFAnswers
};
