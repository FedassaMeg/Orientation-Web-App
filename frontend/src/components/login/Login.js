import React, { useState } from "react";

//Local components
import { useAuth } from "../context/AuthContext";
import LoginForm from "./LoginForm";
import useCallbackStatus from "../utils/use-callback-status";
import useForm from "../utils/useForm";

export default function Login() {
  const stateSchema = {
    username: "",
    password: ""
  };

  const validationSchema = {
    username: {
      required: true
    },
    password: {
      required: true
    }
  };

  const { login } = useAuth();

  const { isPending, isRejected, run } = useCallbackStatus();

  const { formErrors, isSubmitted, handleOnChange, handleOnSubmit } = useForm(
    stateSchema,
    validationSchema,
    onSubmitForm
  );

  function onSubmitForm(state) {
    run(
      login({
        username: state.username,
        password: state.password
      })
    );
  }

  return (
    <LoginForm
      isSubmitted={isSubmitted}
      isPending={isPending}
      isRejected={isRejected}
      formErrors={formErrors}
      handleOnChange={handleOnChange}
      handleOnSubmit={handleOnSubmit}
    />
  );
}
