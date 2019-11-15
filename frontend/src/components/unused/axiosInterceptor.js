import axios from "axios";

import { ROOT_URL } from "../utils/constants";

let isRefreshing = false;

export default () => {
  axios.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      const {
        config,
        response: { status }
      } = error;
      const originalRequest = config;

      if (status != 401) {
        if (!isRefreshing) {
          isRefreshing = true;
          axios.post(`${ROOT_URL}/token/refresh/`);
        }
        return new Promise((resolve, reject) => {
          reject(error);
        });
      }
      if (
        error.config.url == "/api/token/refresh" ||
        error.response.message == "Account is disabled."
      ) {
        localStorage.clear();
        return new Promise((resolve, reject) => {
          reject(error);
        });
      }
    }
  );
};
