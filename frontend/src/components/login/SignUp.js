import React, { useState } from "react";
import axios from "axios";

import SignUpForm from "./SignUpForm";

export default function SignUp() {
  const initialState = {
    firstName: "",
    lastName: "",
    password: "",
    confirmPass: "",
    role: "OS"
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
      .post("http://localhost:8000/api/users/", {
        first_name: state.firstName,
        last_name: state.lastName,
        username: state.username,
        password: state.password,
        role: state.role
      })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      .catch(console.log("Catch!"));
  };
  return (
    <SignUpForm
      handleOnChange={handleOnChange}
      handleOnSubmit={handleOnSubmit}
      state={state}
    />
  );
}
