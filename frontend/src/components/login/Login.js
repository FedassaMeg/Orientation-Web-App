import React, { useState } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { ROOT_URL } from "../utils/constants";
import { useAuth } from "../utils/auth-client";

import jwt from "jsonwebtoken";

import LoginForm from "./LoginForm";

function Login(props) {
  const { login, register } = useAuth();
  // const initialState = {
  //   username: "",
  //   password: ""
  // };

  // const [state, setState] = useState(initialState);

  // const handleOnChange = event => {
  //   setState({
  //     ...state,
  //     [event.target.name]: event.target.value
  //   });
  // };

  // const handleOnSubmit = event => {
  //   event.preventDefault();

  //   axios
  //     .post(`${ROOT_URL}/token/`, {
  //       username: state.username,
  //       password: state.password
  //     })
  //     .then(res => {
  //       localStorage.setItem("access_token", res.data.access);
  //       localStorage.setItem("refresh_token", res.data.refresh);
  //       getCurrentUser();
  //       props.history.push("/home");
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };

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
  // const initialUser = {
  //   id: "",
  //   username: "",
  //   first_name: "",
  //   last_name: "",
  //   role: "",
  //   site_admin: "",
  //   is_staff: ""
  // };
  // const [user, setUser] = useState(initialUser);

  // const getCurrentUser = () => {
  //   let config = {
  //     headers: {
  //       Authorization: `Bearer ${localStorage.getItem("access_token")}`
  //     }
  //   };
  //   const userId = getUserIdfromToken();
  //   axios
  //     .get(`${ROOT_URL}/users/${userId}`, config)
  //     .then(res => {
  //       setUser({
  //         id: res.data.id,
  //         username: res.data.username,
  //         first_name: res.data.first_name,
  //         last_name: res.data.last_name,
  //         role: res.data.role,
  //         site_admin: res.data.site_admin,
  //         is_staff: res.data.is_staff
  //       });
  //       localStorage.setItem("userIsStaff", res.data.is_staff);
  //       return res.data;
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };
  // const getUserIdfromToken = () => {
  //   const token = localStorage.getItem("access_token");
  //   const decode = jwt.decode(token);
  //   return decode.user_id;
  // };
  return <LoginForm onSubmit={login} />;
}

export default withRouter(Login);
