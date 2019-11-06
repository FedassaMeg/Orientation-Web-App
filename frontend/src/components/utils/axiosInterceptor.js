import axios from "axios";

export default () => {
  axios.interceptors.response.use(
    response => {
      console.log(response);
    },
    error => {
      if (error.response.status != 401) {
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
