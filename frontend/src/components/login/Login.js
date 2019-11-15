import React from "react";

import { useAuth } from "../context/AuthContext";
import useForm from "../utils/useForm";
import useCallbackStatus from "../utils/use-callback-status";
import LoginForm from "./LoginForm";

export default function Login() {
  const stateSchema = {
    username: { value: "", error: "" },
    password: { value: "", error: "" }
  };

  const validationSchema = {
    username: {
      required: true,
      validator: { regEx: /^\s*$/, error: "Please enter username" }
    },
    password: {
      required: true,
      validator: { regEx: /^\s*$/, error: "Please enter password" }
    }
  };
  const { state, disable, handleOnChange, handleOnSubmit } = useForm(
    stateSchema,
    validationSchema,
    onSubmitForm
  );

  const { login } = useAuth();

  const { isPending, isRejected, error, run } = useCallbackStatus();

  function onSubmitForm(state) {
    run(
      login({
        username: state.username.value,
        password: state.password.value
      })
    );
  }

  return (
    <LoginForm
      handleOnSubmit={handleOnSubmit}
      handleOnChange={handleOnChange}
      disable={disable}
      isPending={isPending}
      isRejected={isRejected}
      error={error}
    />
  );
}
