/**@jsx jsx */
import { useState } from "react";
import { css, jsx } from "@emotion/core";
import { Link } from "react-router-dom";
import { useForm } from "../utils/useForm";

export default function SignUpForm(props) {
  const stateSchema = {
    firstName: { value: "", error: "" },
    lastName: { value: "", error: "" },
    password: { value: "", error: "" },
    confirmPassword: { value: "", error: "" }
  };

  const validationStateSchema = {
    firstName: {
      required: true,
      validator: {
        regEx: /^[a-zA-Z]+$/,
        error: "Invalid first name format."
      }
    },
    lastName: {
      required: true,
      validator: {
        regEx: /^[a-zA-Z]+$/,
        error: "Invalid last name format."
      }
    },
    password: {
      required: true,
      validator: {
        regEx: /^(,?\w{3,})+$/,
        error: "Invalid password format."
      }
    },
    confirmPassword: {
      required: true,
      validator: {
        regEx: /^(,?\w{3,})+$/,
        error: "Invalid password format."
      }
    }
  };

  const onSubmitForm = state => {
    props.signUp({
      variables: { ...state, [name]: name.value }
    });
  };

  const { state, handleOnChange, handleOnSubmit, disable } = useForm(
    stateSchema,
    validationStateSchema,
    onSubmitForm
  );

  return (
    <div css={mainContainer}>
      <div css={loginCard}>
        <div css={header}>Create an Account</div>
        <form onSubmit={handleOnSubmit} css={bodyContainer}>
          <div>
            <input
              value={state.firstName.value}
              name="firstName"
              type="text"
              onChange={handleOnChange}
              css={nameStyle}
              placeholder="First Name"
            />
          </div>
          {state.firstName.error && <p>{state.firstName.error}</p>}
          <div>
            <input
              value={state.lastName.value}
              name="lastName"
              type="text"
              onChange={handleOnChange}
              css={nameStyle}
              placeholder="Last Name"
            />
          </div>
          {state.lastName.error && <p>{state.lastName.error}</p>}
          <div>
            <input
              value={state.password.value}
              name="password"
              type="password"
              onChange={handleOnChange}
              css={passwordStyle}
              placeholder="Password"
            />
          </div>
          {state.password.error && <p>{state.password.error}</p>}
          <div>
            <input
              value={state.confirmPassword.value}
              name="confirmPassword"
              type="password"
              onChange={handleOnChange}
              css={passwordStyle}
              placeholder="Confirm Password"
            />
          </div>
          {state.confirmPassword.error && <p>{state.confirmPassword.error}</p>}
          <Link to="/home">
            <button css={button} type="submit" onClick={handleOnSubmit}>
              Create Account
            </button>
          </Link>
          <div css={altLinks}>
            <Link to="/login">
              <span>Already have an accout?</span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

// emotion Styles
// container bgcolor and shadow
const mainContainer = css`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(64, 224, 197);
  box-shadow: inset 0 0 250px rgba(41, 139, 130, 0.45);
`;

// login card styles
const loginCard = css`
  padding-top: 35px;
  padding-right: 35px;
  padding-left: 35px;
  height: 550px;
  width: 450px;
  background-color: white;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
`;

// login header styles
const header = css`
  margin-top: 25px;
  font: 36px "Open Sans", sans-serif;
  font-weight: 600;
  text-align: center;
  margin-bottom: 25px;
  color: #289086;
`;

// login card body styles
const bodyContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: stretch;
  height: 60%;
  padding-right: 25px;
  padding-left: 25px;
  padding-top: 20px;
`;

// username input styles
const nameStyle = css`
  height: 50px;
  width: 100%;
  border: none;
  background-color: whitesmoke;

  &[placeholder] {
    font-size: 16px;
    font-family: "Open Sans", sans-serif;
    padding-left: 10px;
    padding-bottom: 0px;
  }
`;

// password input styles
const passwordStyle = css`
  height: 50px;
  width: 100%;
  border: none;
  background-color: whitesmoke;

  &[placeholder] {
    font-size: 16px;
    font-family: "Open Sans", sans-serif;
    padding-left: 10px;
    padding-bottom: 0px;
  }
`;

// react-router link container style
const link = css`
  align-self: flex-end;
`;

// login button styles
const button = css`
  padding: 5px 45px;
  border: none;
  border-radius: 25px;
  background-color: #128f82;
  color: white;
  font: 18px "Open Sans", sans-serif;
  transition-duration: 0.4s;

  &:hover {
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.25);
  }
`;

// alternative links styles
const altLinks = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
  color: #128f82;
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
`;
