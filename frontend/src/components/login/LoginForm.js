/**@jsx jsx */
import { css, jsx } from "@emotion/core";

import { Link } from "react-router-dom";

import CircularProgress from "@material-ui/core/CircularProgress";

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
        <div css={header}>First Call Hospice Orientation</div>
        <div css={bodyContainer}>
          <form
            onSubmit={handleOnSubmit}
            css={{
              display: "flex",
              flexDirection: "column",
              alignItems: "stretch",
              "> div": {
                margin: "10px auto",
                width: "100%",
                maxWidth: "300px"
              }
            }}
          >
            <div>
              <label htmlFor="username">Username</label>
              <input
                id="username"
                name="username"
                onChange={handleOnChange}
                css={usernameStyle}
              />
              {isSubmitted ? (
                <div css={{ color: "red" }}>{formErrors.username}</div>
              ) : (
                <div> </div>
              )}
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                onChange={handleOnChange}
                css={passwordStyle}
              />
              {isSubmitted ? (
                <div css={{ color: "red" }}>{formErrors.password}</div>
              ) : (
                <div> </div>
              )}
            </div>
            {isRejected ? (
              <div css={{ color: "red" }}>
                Incorrect username password combination!
              </div>
            ) : (
              <div> </div>
            )}
            <div>
              <button type="submit" css={button}>
                {isPending ? (
                  <CircularProgress color="inherit" size={20} />
                ) : (
                  "Login"
                )}
              </button>
            </div>
          </form>

          <div css={link}>
            <Link to="/signup">
              <span css={altLinks}>Register a new account</span>
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
const usernameStyle = css`
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
  width: 150px;
  border: none;
  border-radius: 5px;
  background-color: #128f82;
  text-align: center;
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
  color: #5a5a5a;
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
`;
