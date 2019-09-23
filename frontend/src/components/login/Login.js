import React, { useState } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

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
      .post("http://localhost:8000/api/token/", {
        username: state.username,
        password: state.password
      })
      .then(res => {
        localStorage.setItem("token", res.data.access);
        props.history.push("/home");
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <LoginForm
      handleOnChange={handleOnChange}
      handleOnSubmit={handleOnSubmit}
      state={state}
    />
  );
}

export default withRouter(Login);
