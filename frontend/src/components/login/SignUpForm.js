/**@jsx jsx */
import { css, jsx } from "@emotion/core";

import { Link } from "react-router-dom";

import CircularProgress from "@material-ui/core/CircularProgress";

//Local components
import FormError from "./FormError";

export default function SignUpForm(props) {
  const {
    handleOnSubmit,
    state,
    handleOnChange,
    formErrors,
    isPending
  } = props;
  return (
    <div css={container}>
      <div css={card}>
        <div css={content}>
          <form css={form} onSubmit={handleOnSubmit}>
            <div>
              <input
                value={state.firstName}
                name="firstName"
                type="text"
                onChange={handleOnChange}
                css={inputStyle}
                placeholder="First Name"
              />
            </div>
            <div>
              <input
                value={state.lastName}
                name="lastName"
                type="text"
                onChange={handleOnChange}
                css={inputStyle}
                placeholder="Last Name"
              />
            </div>
            <div>
              <select
                id="role"
                value={state.role}
                name="role"
                onChange={handleOnChange}
                css={selectStyle}
              >
                <option selected></option>
                <option value={21}>Nurse - RN</option>
                <option value={24}>Nurse - LVN</option>
                <option value={27}>Hospice Aide</option>
                <option value={29}>Spiritual Care Provider</option>
                <option value={31}>Social Worker</option>
                <option value={17}>Office Staff</option>
                <option value={18}>Office Staff - Clinical</option>
              </select>
            </div>
            <div>
              <input
                value={state.password}
                name="password"
                type="password"
                onChange={handleOnChange}
                css={inputStyle}
                placeholder="Password"
              />
            </div>
            <div>
              <input
                value={state.confirmPass}
                name="confirmPass"
                type="password"
                onChange={handleOnChange}
                css={inputStyle}
                placeholder="Confirm Password"
              />
            </div>
            <FormError formErrors={formErrors} />
            <button type="submit" css={button}>
              {isPending ? (
                <CircularProgress color="inherit" size={20} />
              ) : (
                <div css={btnLabel}>create account</div>
              )}
            </button>
          </form>
          <div css={link}>
            <Link to="/login">
              <span css={altLinks}>Already have an account?</span>
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

// login card styles
const card = css`
  padding: 32px;
  height: 550px;
  width: 400px;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.15);
`;

// login card body styles
const content = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
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

// input styles
const selectStyle = css`
  width: 100%;
  height: 48px;
  border: 0.5px solid;
  border-color: rgba(0, 0, 0, 0.1);
  border-radius: 5px;
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
  font: 18px "Roboto Condensed", sans-serif;
  font-weight: 400;
`;

// alternative links styles
const altLinks = css`
  color: rgba(0, 0, 0, 0.6);
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
`;
