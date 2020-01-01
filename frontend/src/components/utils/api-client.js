import axios from "axios";

import { AUTH_TOKEN } from "./constants";

function client(endpoint, { data, ...customConfig } = {}) {
  const token = window.localStorage.getItem(AUTH_TOKEN);
  const headers = { "content-type": "application/json" };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  const config = {
    url: `http://10.2.7.208/api${endpoint}`,
    method: data ? "POST" : "GET",
    baseUrl: "http://10.2.7.208/api",
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
