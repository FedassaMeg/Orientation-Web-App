import React, { useState } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import * as yup from "yup";

import SignUpForm from "./SignUpForm";

function SignUp(props) {
  const initialState = {
    firstName: "",
    lastName: "",
    password: "",
    confirmPass: "",
    role: "OS"
  };

  const [state, setState] = useState(initialState);

  let schema = yup.object().shape({
    first_name: yup.string().required("Please enter your first name"),
    last_name: yup.string().required("Please enter your last name"),
    role: yup.string(),
    password: yup
      .string()
      .required("Please enter your password")
      .matches(/[A-Za-zd@$!%*#?&]{8,}$/, "Must contain 8 characters"),
    confirmPass: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords must match")
      .required("Password confirm is required")
  });

  const handleOnChange = event => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    });
  };

  const handleOnSubmit = event => {
    event.preventDefault();
    schema
      .isValid({
        first_name: state.firstName,
        last_name: state.lastName,
        role: state.role,
        password: state.password,
        confirmPass: state.confirmPass
      })
      .then(valid => {
        console.log(valid);
        // if (valid) {
        //   axios
        //     .post("http://localhost:8000/api/users/", {
        //       first_name: state.firstName,
        //       last_name: state.lastName,
        //       password: state.password,
        //       role: state.role
        //     })
        //     .then(res => {
        //       console.log(res);
        //       console.log(res.data);
        //       props.history.push("/login");
        //     })
        //     .catch(console.log("Catch!"));
        // }
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <SignUpForm
      handleOnChange={handleOnChange}
      handleOnSubmit={handleOnSubmit}
      state={state}
    />
  );
}

export default withRouter(SignUp);
