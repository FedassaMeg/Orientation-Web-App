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

const getUser = () => {
  const token = getToken();
  if (!token) {
    return Promise.resolve(null);
  }
  const userId = getUserIdfromToken();

  return client(`/users/${userId}`).catch(error => {
    logout();
    return Promise.reject(error);
  });
};

const login = async ({ username, password }) => {
  try {
    const res = await client("/token/", {
      data: { username, password },
      method: "post"
    });
    handleUserResponse({ user: { token: res.data.access } });
  } catch (error) {
    return Promise.reject(error);
  }
};

const register = async ({ first_name, last_name, role, password }) => {
  try {
    const res = await client("/users/", {
      data: { first_name, last_name, password, role },
      method: "post"
    });
    return login({ username: res.data.username, password });
  } catch (error) {
    return Promise.reject(error);
  }
};

const logout = () => {
  window.localStorage.removeItem(AUTH_TOKEN);
  return Promise.resolve();
};

const authenticated = () => {
  const token = getToken();
  if (!token) {
    return Promise.resolve(null);
  }
  return client(`/token/verify/`, { data: { token: token }, method: "post" });
};

export { login, register, logout, getToken, getUser, authenticated };
