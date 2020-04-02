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
    <div css={container}>
      <div css={card}>
        <div css={header}>Login</div>
        <hr css={divider} />
        <div css={content}>
          <form onSubmit={handleOnSubmit} css={form}>
            <div>
              <input
                id="username"
                name="username"
                placeholder="Username"
                onChange={handleOnChange}
                css={inputStyle}
              />
              {isSubmitted ? (
                <div css={errorMsg}>
                  {formErrors.username ? formErrors.username : null}
                </div>
              ) : (
                <div />
              )}
            </div>
            <div>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                onChange={handleOnChange}
                css={inputStyle}
              />
              {isSubmitted ? (
                <div css={errorMsg}>
                  {formErrors.password ? formErrors.password : null}
                </div>
              ) : (
                <div />
              )}
            </div>

            {isRejected ? (
              <div css={mainErrorMsg}>
                Incorrect username password combination!
              </div>
            ) : (
              <div css={errorPlaceHolder} />
            )}

            <button type="submit" css={button}>
              {isPending ? (
                <CircularProgress color="inherit" size={20} />
              ) : (
                <div css={btnLabel}>
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
const container = css`
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const errorMsg = css`
  padding-left: 8px;
  padding-top: 4px;
  font: 12px "Roboto", san-serif;
  color: #b00020;
`;

const mainErrorMsg = css`
  padding-left: 8px;
  font: 14px "Roboto", san-serif;
  font-style: italic;
  color: #b00020;
`;

// login card styles
const card = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 32px;
  height: 550px;
  width: 400px;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.15);
`;

// login header styles
const header = css`
  margin-top: 24px;
  font: 40px "Roboto", sans-serif;
  font-weight: 600;
  text-align: center;
  color: #393e41;
`;

const divider = css`
  margin-top: 8px;
  margin-bottom: 8px;
  width: 96px;
  height: 4px;
  border: none;
  background: linear-gradient(to right, #fcdc51 20%, #25cfb2 90%);
`;

// login card body styles
const content = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  padding: 16px;
`;

const form = css`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: stretch;
  padding: 24px;
`;

// input styles
const inputStyle = css`
  width: 100%;
  height: 48px;
  border: 0.5px solid;
  border-color: rgba(0, 0, 0, 0.1);
  border-radius: 5px;

  &[placeholder] {
    font-size: 16px;
    font-family: "Open Sans", sans-serif;
    font-weight: 400;
    padding-left: 10px;
    padding-bottom: 0px;
  }

  &:focus {
    outline: none;
    border-width: 1px;
    border-color: #25cfb2;
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
  justify-self: flex-end;
  width: 100%;
  height: 40px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-right: 15px;
  border: none;
  border-radius: 5px;
  color: white;
  background-color: #ffd700;
  transition-duration: 0.4s;

  &:hover {
    box-shadow: 0px 0px 5px 5px rgba(255, 215, 0, 0.1);
  }

  &: focus {
    outline: none;
  }
`;

const btnLabel = css`
  font: 20px "Roboto condensed", sans-serif;
  font-weight: 400;
`;

// alternative links styles
const altLinks = css`
  color: rgba(0, 0, 0, 0.6);
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
`;

const errorPlaceHolder = css`
  height: 8px;
`;
