import React from "react";

import { useAuth } from "../context/AuthContext";
import useForm from "../utils/useForm";
import useCallbackStatus from "../utils/use-callback-status";
import LoginForm from "./LoginForm";

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
      formErrors={formErrors}
      isSubmitted={isSubmitted}
      handleOnSubmit={handleOnSubmit}
      handleOnChange={handleOnChange}
      isPending={isPending}
      isRejected={isRejected}
    />
  );
}
