import React, { useState } from "react";
import { withRouter } from "react-router-dom";

import axios from "axios";

import SignUpForm from "./SignUpForm";

function SignUp(props) {
  const initialState = {
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    role: ""
  };

  const initialFormError = {
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    role: ""
  };

  const [state, setState] = useState(initialState);
  const [formErrors, setFormErrors] = useState(initialFormError);
  const [firstNameValid, setFirstNameValid] = useState(false);
  const [lastNameValid, setLastNameValid] = useState(false);
  const [roleValid, setRoleValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(false);
  const [formValid, setFormValid] = useState(false);

  const validateField = (field, value) => {
    let fieldValidationErrors = formErrors;
    let isFirstNameValid = firstNameValid;
    let isLastNameValid = lastNameValid;
    let isRoleValid = roleValid;
    let isPasswordValid = passwordValid;
    let isConfirmPasswordValid = confirmPasswordValid;
    switch (field) {
      case "firstName":
        isFirstNameValid = !value.match(/^\s*$/);
        fieldValidationErrors.firstName = isFirstNameValid
          ? ""
          : " Please enter first name";
        break;
      case "lastName":
        isLastNameValid = !value.match(/^\s*$/);
        fieldValidationErrors.lastName = isLastNameValid
          ? ""
          : " Please enter last name";
        break;
      case "password":
        isPasswordValid = value.length >= 6;
        fieldValidationErrors.password = isPasswordValid
          ? ""
          : " Password needs to be at least 6 characters long";
        break;
      case "confirmPassword":
        isConfirmPasswordValid = value === state.password;
        fieldValidationErrors.confirmPassword = isConfirmPasswordValid
          ? ""
          : " Passwords don't match";
        break;
      case "role":
        isRoleValid = value != null;
        fieldValidationErrors.role = isRoleValid ? "" : " Please select role";
    }
    setFormErrors(fieldValidationErrors);
    setFirstNameValid(isFirstNameValid);
    setLastNameValid(isLastNameValid);
    setPasswordValid(isPasswordValid);
    setConfirmPasswordValid(isConfirmPasswordValid);
    setRoleValid(isRoleValid);
  };

  const validateForm = () => {
    setFormValid(
      firstNameValid &&
        lastNameValid &&
        passwordValid &&
        confirmPasswordValid &&
        roleValid
    );
  };

  const handleOnChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    setState({
      ...state,
      [name]: value
    });
    validateField(name, value);
  };

  const handleOnSubmit = event => {
    // event.preventDefault();
    // schema
    //   .validate([
    //     state.firstName,
    //     state.lastName,
    //     state.role,
    //     state.password,
    //     state.confirmPass
    //   ])
    //   .then(value => {
    //     console.log(value);
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
    // })
    // .catch(err => {
    //   console.log(err.message);
    // });
  };
  return (
    <SignUpForm
      handleOnChange={handleOnChange}
      handleOnSubmit={handleOnSubmit}
      state={state}
      formErrors={formErrors}
      firstNameValid={firstNameValid}
      lastNameValid={lastNameValid}
      roleValid={roleValid}
      passwordValid={passwordValid}
      confirmPassword={confirmPasswordValid}
    />
  );
}

export default withRouter(SignUp);
