import jwt from "jsonwebtoken";

import client from "./api-client";
import { AUTH_TOKEN } from "./constants";

function getUserIdfromToken() {
  const token = localStorage.getItem(AUTH_TOKEN);
  const decode = jwt.decode(token);
  return decode.user_id;
}

function getToken() {
  return window.localStorage.getItem(AUTH_TOKEN);
}

function handleUserResponse({ user: { token, ...user } }) {
  window.localStorage.setItem(AUTH_TOKEN, token);
  return user;
}

function getUser() {
  const token = getToken();
  if (!token) {
    return Promise.resolve(null);
  }
  const userId = getUserIdfromToken();
  return client(`/users/${userId}`).catch(error => {
    logout();
    return Promise.reject(error);
  });
}

function login({ username, password }) {
  return client("/token/", { data: { username, password } }).then(res => {
    handleUserResponse({ user: { token: res.data.access } });
  });
}

function register({ first_name, last_name, role, password }) {
  return client("/users/", {
    data: { first_name, last_name, password, role }
  })
    .then(res => {
      const username = res.data.username;
      return login({ username, password });
    })
    .catch(error => console.log(error));
}

function logout() {
  window.localStorage.removeItem(AUTH_TOKEN);
  return Promise.resolve();
}

function authenticated() {
  const token = getToken();
  if (!token) {
    return Promise.resolve(null);
  }
  return client(`/token/verify/`, { data: { token: token } });
}

export { login, register, logout, getToken, getUser, authenticated };
