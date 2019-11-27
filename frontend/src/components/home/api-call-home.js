import client from "../utils/api-client";

function getQuizzes() {
  return client(`/quizs`);
}

function getSlides() {
  return client(`/slides`);
}

function getCompletedQuizzes(user_id) {
  return client(`/users/${user_id}/scores`);
}

function getCompletedSlides(user_id) {
  return client(`/users/${user_id}/completedslides`);
}

function getQuizTypes() {
  return client(`/quiztypes`);
}

export {
  getQuizzes,
  getSlides,
  getCompletedQuizzes,
  getCompletedSlides,
  getQuizTypes
};
