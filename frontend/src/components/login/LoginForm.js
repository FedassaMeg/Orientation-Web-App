/**@jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import { Link } from "react-router-dom";

import CircularProgress from "@material-ui/core/CircularProgress";

import { FiArrowRightCircle } from "react-icons/fi";

export default function LoginForm(props) {
  const {
    formErrors,
    isSubmitted,
    handleOnChange,
    handleOnSubmit,
    isPending,
    isRejected
  } = props;

  return (
    <div css={mainContainer}>
      <div css={loginCard}>
        <div css={header}>Login</div>
        <hr css={headerDivide} />
        <div css={bodyContainer}>
          <form onSubmit={handleOnSubmit} css={formStyle}>
            <input
              id="username"
              name="username"
              placeholder="Username"
              onChange={handleOnChange}
              css={inputStyle}
            />
            {isSubmitted ? (
              <div css={{ color: "red" }}>
                {formErrors.username ? formErrors.username : null}
              </div>
            ) : null}

            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleOnChange}
              css={inputStyle}
            />
            {isSubmitted ? (
              <div css={{ color: "red" }}>
                {formErrors.password ? formErrors.password : null}
              </div>
            ) : null}

            {isRejected ? (
              <div css={{ color: "red" }}>
                Incorrect username password combination!
              </div>
            ) : (
              <div></div>
            )}

            <button type="submit" css={button}>
              {isPending ? (
                <CircularProgress color="inherit" size={20} />
              ) : (
                <div css={loginBtnContent}>
                  <FiArrowRightCircle /> sign in
                </div>
              )}
            </button>
          </form>

          <div css={link}>
            <Link to="/signup">
              <span css={altLinks}>Register a new account.</span>
            </Link>
          </div>
        </div>
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
  background-color: #40e0c5;
  box-shadow: inset 0 0 250px rgba(41, 139, 130, 0.45);
`;

// login card styles
const loginCard = css`
  padding: 35px;
  height: 550px;
  width: 450px;
  background-color: #f6f6f6;
  box-shadow: 0 32px 24px -24px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

// login header styles
const header = css`
  margin-top: 24px;
  font: 40px "Roboto", sans-serif;
  font-weight: 600;
  text-align: center;
  color: #393e41;
`;

const headerDivide = css`
  margin-top: 8px;
  margin-bottom: 8px;
  width: 96px;
  height: 4px;
  border: none;
  background: linear-gradient(to right, #f6cb14 20%, #25cfb2 90%);
  // background-color: #f6cb14;
`;

// login card body styles
const bodyContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 85%;
  padding: 25px;
`;

const formStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-grow: 1;
  align-items: stretch;
  padding: 25px;
`;

// input styles
const inputStyle = css`
  height: 50px;
  width: 100%;
  margin-top: 16px;
  margin-bottom: 16px;
  border-style: solid;
  border-width: 1px;
  border-color: #d5d5d5;
  border-radius: 5px;

  &[placeholder] {
    font-size: 18px;
    font-family: "Open Sans", sans-serif;
    padding-left: 10px;
    padding-bottom: 0px;
  }
`;

// react-router link container style
const link = css`
  align-self: center;
`;

// login button styles
const button = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: center;
  width: 180px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-right: 15px;
  border: none;
  border-radius: 5px;
  margin-top: 36px;
  color: white;
  // background: linear-gradient(25deg, #f6cb14 1%, #25cfb2 15%);
  // background: linear-gradient(5deg, #1fab93 1%, #25cfb2 15%);
  // background: linear-gradient(5deg, #e8c015 1%, #f6cb14 15%);
  background-color: #f6cb14;
  box-shadow: inset 0 0 3px rgba(232, 192, 21, 0.15);
  transition-duration: 0.4s;

  &:hover {
    box-shadow: 0px 0px 5px 5px rgba(204, 168, 16, 0.1);
  }
`;

const loginBtnContent = css`
  font: 18px "Roboto", sans-serif;
  font-weight: 600;
`;

// alternative links styles
const altLinks = css`
  color: #787878;
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
`;
