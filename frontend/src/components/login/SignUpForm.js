/**@jsx jsx */
import { css, jsx } from "@emotion/core";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

import FormError from "./FormError";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  formControl: {
    width: "100%",
    height: 45,
    marginTop: 8,
    marginBottom: 8
  },
  button: {
    backgroundColor: "#289086",
    color: "#ffffff",
    "&:hover": {
      backgroundColor: "#289086"
    }
  }
}));

export default function SignUpForm(props) {
  const classes = useStyles();
  // return (
  //   <div css={mainContainer}>
  //     <div css={loginCard}>
  //       <div css={header}>Create Account</div>
  //       <hr css={headerDivide} />
  //       <Box
  //         display="flex"
  //         flexDirection="column"
  //         justifyContent="space-around"
  //         alignItems="center"
  //         height="100%"
  //       >
  //         <FormControl
  //           required
  //           error={!props.firstNameValid}
  //           component="fieldset"
  //           className={classes.formControl}
  //         >
  //           <InputLabel htmlFor="first-name">First Name</InputLabel>
  //           <Input
  //             id="first-name"
  //             value={props.state.firstName}
  //             name="firstName"
  //             onChange={props.handleOnChange}
  //           />
  //           <FormHelperText id="first-name-error-text">
  //             {props.formErrors.firstName}
  //           </FormHelperText>
  //         </FormControl>
  //         <FormControl
  //           required
  //           error={!props.lastNameValid}
  //           component="fieldset"
  //           className={classes.formControl}
  //         >
  //           <InputLabel htmlFor="last-name">Last Name</InputLabel>
  //           <Input
  //             id="last-name"
  //             value={props.state.lastName}
  //             name="lastName"
  //             onChange={props.handleOnChange}
  //           />
  //           <FormHelperText id="last-name-error-text">
  //             {props.formErrors.lastName}
  //           </FormHelperText>
  //         </FormControl>
  //         <FormControl
  //           required
  //           error={!props.roleValid}
  //           component="fieldset"
  //           className={classes.formControl}
  //         >
  //           <InputLabel htmlFor="role">Role</InputLabel>
  //           <Select
  //             id="role"
  //             value={props.state.role}
  //             name="role"
  //             onChange={props.handleOnChange}
  //           >
  //             <MenuItem value="RN">Nurse - RN</MenuItem>
  //             <MenuItem value="LV">Nurse - LVN</MenuItem>
  //             <MenuItem value="HA">Hospice Aide</MenuItem>
  //             <MenuItem value="SP">Spiritual Care Provider</MenuItem>
  //             <MenuItem value="SW">Social Worker</MenuItem>
  //             <MenuItem value="OS">Office Staff</MenuItem>
  //           </Select>
  //           <FormHelperText id="role-error-text">
  //             {props.formErrors.role}
  //           </FormHelperText>
  //         </FormControl>
  //         <FormControl
  //           required
  //           error={!props.passwordValid}
  //           component="fieldset"
  //           className={classes.formControl}
  //         >
  //           <InputLabel htmlFor="password">Password</InputLabel>
  //           <Input
  //             id="password"
  //             value={props.state.password}
  //             name="password"
  //             onChange={props.handleOnChange}
  //             type="password"
  //           />
  //           <FormHelperText id="password-error-text">
  //             {props.formErrors.password}
  //           </FormHelperText>
  //         </FormControl>
  //         <FormControl
  //           required
  //           error={!props.confirmPasswordValid}
  //           component="fieldset"
  //           className={classes.formControl}
  //         >
  //           <InputLabel htmlFor="confirm-password">Confirm Password</InputLabel>
  //           <Input
  //             id="confirm-password"
  //             value={props.state.confirmPassword}
  //             name="confirmPassword"
  //             onChange={props.handleOnChange}
  //             type="password"
  //           />
  //           <FormHelperText id="confirm-password-error-text">
  //             {props.formErrors.confirmPassword}
  //           </FormHelperText>
  //         </FormControl>
  //         <div css={{ color: "red" }}>
  //           {props.error ? props.error.message : null}
  //         </div>
  //         <div css={actionBar}>
  //           <Link to="/login">
  //             <span css={altLinks}>Already have an account?</span>
  //           </Link>

  //           <Button
  //             variant="contained"
  //             type="submit"
  //             className={classes.button}
  //             onClick={props.handleOnSubmit}
  //           >
  //             Create Account
  //           </Button>
  //         </div>
  //       </Box>
  //     </div>
  //   </div>
  // );

  return (
    <div css={mainContainer}>
      <div css={loginCard}>
        <div css={header}>Create an Account</div>
        <div css={bodyContainer}>
          <form css={formStyle} onSubmit={props.handleOnSubmit}>
            <div>
              <input
                value={props.state.firstName}
                name="firstName"
                type="text"
                onChange={props.handleOnChange}
                css={inputStyle}
                placeholder="First Name"
              />
            </div>
            <div>
              <input
                value={props.state.lastName}
                name="lastName"
                type="text"
                onChange={props.handleOnChange}
                css={inputStyle}
                placeholder="Last Name"
              />
            </div>
            <div>
              <select
                id="role"
                value={props.state.role}
                name="role"
                onChange={props.handleOnChange}
                css={selectStyle}
              >
                <option value="RN">Nurse - RN</option>
                <option value="LV">Nurse - LVN</option>
                <option value="HA">Hospice Aide</option>
                <option value="SP">Spiritual Care Provider</option>
                <option value="SW">Social Worker</option>
                <option value="OS">Office Staff</option>
              </select>
            </div>
            <div>
              <input
                value={props.state.password}
                name="password"
                type="password"
                onChange={props.handleOnChange}
                css={inputStyle}
                placeholder="Password"
              />
            </div>
            <div>
              <input
                value={props.state.confirmPass}
                name="confirmPass"
                type="password"
                onChange={props.handleOnChange}
                css={inputStyle}
                placeholder="Confirm Password"
              />
            </div>
            <FormError formErrors={props.formErrors} />
            <button css={button} type="submit">
              <div css={loginBtnContent}>Create Account</div>
            </button>
            <div css={link}>
              <Link to="/login">
                <span css={altLinks}>Already have an account?</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
  //}
}

const mainContainer = css`
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

// login card styles
const loginCard = css`
  padding: 35px;
  height: 550px;
  width: 450px;
  background-color: white;
  box-shadow: 0 32px 24px -24px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

// Signup header styles
const header = css`
  margin-top: 12px;
  font: 24px "Roboto", sans-serif;
  font-weight: 600;
  text-align: center;
  color: #393e41;
`;

const headerDivide = css`
  margin-top: 8px;
  margin-bottom: 8px;
  width: 180px;
  height: 4px;
  border: none;
  background: linear-gradient(to right, #fcdc51 20%, #25cfb2 90%);
  // background-color: #f6cb14;
`;

// login card body styles
const bodyContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 85%;
  padding-left: 25px;
  padding-right: 25px;
  padding-bottom: 25px;
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
  height: 45px;
  width: 100%;
  margin-top: 8px;
  margin-bottom: 8px;
  border-style: solid;
  border-width: 1px;
  border-color: #d5d5d5;
  border-radius: 5px;

  &[placeholder] {
    font-size: 14px;
    font-family: "Open Sans", sans-serif;
    padding-left: 10px;
    padding-bottom: 0px;
  }
`;

// input styles
const selectStyle = css`
  height: 45px;
  width: 100%;
  margin-top: 8px;
  margin-bottom: 8px;
  border-style: solid;
  border-width: 1px;
  border-color: #d5d5d5;
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
  align-self: center;
  width: 240px;
  padding-top: 8px;
  padding-bottom: 8px;
  border: none;
  border-radius: 5px;
  margin-top: 18px;
  margin-bottom: 26px;
  color: white;
  // background: linear-gradient(25deg, #f6cb14 1%, #25cfb2 15%);
  // background: linear-gradient(5deg, #1fab93 1%, #25cfb2 15%);
  // background: linear-gradient(5deg, #e8c015 1%, #f6cb14 15%);
  background-color: #f6cb14;
  box-shadow: inset 0 0 3px rgba(232, 192, 21, 0.15);
  transition-duration: 1s;

  &:hover {
    box-shadow: 0px 0px 5px 5px rgba(204, 168, 16, 0.1);
    background: linear-gradient(45deg, #fcdc51 20%, #25cfb2 90%);
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

const actionBar = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  margin-top: 20px;
`;
