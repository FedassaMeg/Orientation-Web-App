import client from "../utils/api-client";

function getQuizzes() {
  return client(`/quizs/`);
}

function getContent() {
  return client(`/content/`);
}

function getModules() {
  return client(`/modules/`);
}

function getTypes() {
  return client(`/contenttypes/`);
}

function getCompletedQuizzes(user_id) {
  return client(`/users/${user_id}/scores/`);
}

function getCompletedContent(user_id) {
  return client(`/users/${user_id}/completedcontent/`);
}

export {
  getQuizzes,
  getContent,
  getCompletedQuizzes,
  getCompletedContent,
  getModules,
  getTypes
};
