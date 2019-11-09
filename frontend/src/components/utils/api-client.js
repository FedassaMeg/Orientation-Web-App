import axios from "axios";

import { AUTH_TOKEN, ROOT_URL } from "./constants";

function client(endpoint, { data, ...customConfig } = {}) {
  const token = window.localStorage.getItem(AUTH_TOKEN);
  const headers = { "content-type": "application/json" };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  const config = {
    url: `${ROOT_URL}${endpoint}`,
    method: data ? "POST" : "GET",
    baseUrl: ROOT_URL,
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
