import axios from "axios";

import { AUTH_TOKEN, ROOT_URL } from "./constants";

function client(endpoint, { data, method, ...customConfig } = {}) {
  const token = window.localStorage.getItem(AUTH_TOKEN);
  const headers = { "content-type": "application/json" };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  const config = {
    url: `${ROOT_URL}${endpoint}`,
    method,
    responseType: "json",
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers
    }
  };
  if (data) {
    config.data = JSON.stringify(data);
  }

  return axios(config);
}

export default client;
