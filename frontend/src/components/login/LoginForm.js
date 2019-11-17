/**@jsx jsx */
import { css, jsx } from "@emotion/core";
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
              <input
                id="username"
                name="username"
                placeholder="Username"
                onChange={handleOnChange}
                css={usernameStyle}
              />
              {isSubmitted ? (
                <div css={{ color: "red" }}>
                  {formErrors.username ? formErrors.username : null}
                </div>
              ) : null}
            </div>
            <div>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                onChange={handleOnChange}
                css={passwordStyle}
              />
              {isSubmitted ? (
                <div css={{ color: "red" }}>
                  {formErrors.password ? formErrors.password : null}
                </div>
              ) : null}
            </div>
            {isRejected ? (
              <div css={{ color: "red" }}>
                Incorrect username password combination!
              </div>
            ) : (
              <div css={{ backgroundColor: "whitesmoke" }}>
                Error Message Area
              </div>
            )}
            <div>
              <button type="submit" css={button}>
                {isPending ? (
                  <CircularProgress color="inherit" size={20} />
                ) : (
                  <>
                    <FiArrowRightCircle /> sign in
                  </>
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
  background-color: #40e0c5;
  box-shadow: inset 0 0 250px rgba(41, 139, 130, 0.45);
`;

// login card styles
const loginCard = css`
  padding-top: 35px;
  padding-right: 35px;
  padding-left: 35px;
  height: 550px;
  width: 450px;
  background-color: #f6f6f6;
  box-shadow: 0 32px 24px -24px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

// login header styles
const header = css`
  margin-top: 24px;
  font: 46px "Roboto", sans-serif;
  font-weight: 600;
  text-align: center;
  color: #393e41;
`;

const headerDivide = css`
  margin-top: 8px;
  width: 100px;
  height: 4px;
  border: none;
  background: linear-gradient(to right, #f6cb14, #25cfb2);
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
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px 45px;
  width: 150px;
  border: none;
  border-radius: 5px;
  // background: linear-gradient(45deg, #f6cb14 30%, #25cfb2 90%);
  text-align: center;
  color: white;
  font: 14px "Open Sans", sans-serif;
  font-weight: 400;
  box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.15);
  transition-duration: 0.4s;

  &:hover {
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.25);
  }
`;

const loginBtnContent = css`
  display: flex;
  flex-direction: row;
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
