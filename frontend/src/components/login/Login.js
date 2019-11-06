import React, { useState } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import API from "../utils/API";
import { ROOT_URL } from "../utils/constants";

import LoginForm from "./LoginForm";

function Login(props) {
  const initialState = {
    username: "",
    password: ""
  };

  const [state, setState] = useState(initialState);

  const handleOnChange = event => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    });
  };

  const handleOnSubmit = event => {
    event.preventDefault();

    axios
      .post(`${ROOT_URL}/token/`, {
        username: state.username,
        password: state.password
      })
      .then(res => {
        localStorage.setItem("access_token", res.data.access);
        localStorage.setItem("refresh_token", res.data.refresh);
        props.history.push("/home");
      })
      .catch(err => {
        console.log(err);
      });
  };

  // API.interceptors.response.use(
  //   response => {
  //     return response;
  //   },
  //   error => {
  //     if (
  //       error.response.status === 401 &&
  //       error.config.url === "http://localhost:8000/api/token"
  //     ) {
  //       console.log("first case");
  //       // props.history.push("/login");
  //       return Promise.reject(error);
  //     }
  //     if (
  //       error.response.status === 401 &&
  //       !error.config.url === "http://localhost:8000/api/token"
  //     ) {
  //       console.log("second case");
  //       error.config._retry = true;
  //       const refreshToken = localStorage.getItem("refresh_token");
  //       return API.post("http://localhost:8000/api/token/refresh", {
  //         refresh: refreshToken
  //       }).then(res => {
  //         if (res.status === 201) {
  //           console.log("refreshed!");
  //           localStorage.setItem("access_token", res.data.access);
  //           return axios(error.config);
  //         }
  //       });
  //     }
  //     return Promise.reject(error);
  //   }
  // );

  return (
    <LoginForm
      handleOnChange={handleOnChange}
      handleOnSubmit={handleOnSubmit}
      state={state}
    />
  );
}

export default withRouter(Login);
