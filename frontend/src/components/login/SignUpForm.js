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
    margin: theme.spacing(0),
    width: 280
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
  return (
    <div css={mainContainer}>
      <div css={loginCard}>
        {/* <div css={header}>Create Account</div> */}
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-around"
          alignItems="center"
          height="100%"
        >
          <FormControl
            required
            error={!props.firstNameValid}
            component="fieldset"
            className={classes.formControl}
          >
            <InputLabel htmlFor="first-name">First Name</InputLabel>
            <Input
              id="first-name"
              value={props.state.firstName}
              name="firstName"
              onChange={props.handleOnChange}
            />
            <FormHelperText id="first-name-error-text">
              {props.formErrors.firstName}
            </FormHelperText>
          </FormControl>
          <FormControl
            required
            error={!props.lastNameValid}
            component="fieldset"
            className={classes.formControl}
          >
            <InputLabel htmlFor="last-name">Last Name</InputLabel>
            <Input
              id="last-name"
              value={props.state.lastName}
              name="lastName"
              onChange={props.handleOnChange}
            />
            <FormHelperText id="last-name-error-text">
              {props.formErrors.lastName}
            </FormHelperText>
          </FormControl>
          <FormControl
            required
            error={!props.roleValid}
            component="fieldset"
            className={classes.formControl}
          >
            <InputLabel htmlFor="role">Role</InputLabel>
            <Select
              id="role"
              value={props.state.role}
              name="role"
              onChange={props.handleOnChange}
            >
              <MenuItem value="RN">Nurse - RN</MenuItem>
              <MenuItem value="LVN">Nurse - LVN</MenuItem>
              <MenuItem value="HA">Hospice Aide</MenuItem>
              <MenuItem value="SP">Spiritual Care Provider</MenuItem>
              <MenuItem value="SW">Social Worker</MenuItem>
              <MenuItem value="OS">Office Staff</MenuItem>
            </Select>
            <FormHelperText id="role-error-text">
              {props.formErrors.role}
            </FormHelperText>
          </FormControl>
          <FormControl
            required
            error={!props.passwordValid}
            component="fieldset"
            className={classes.formControl}
          >
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              id="password"
              value={props.state.password}
              name="password"
              onChange={props.handleOnChange}
              type="password"
            />
            <FormHelperText id="password-error-text">
              {props.formErrors.password}
            </FormHelperText>
          </FormControl>
          <FormControl
            required
            error={!props.confirmPasswordValid}
            component="fieldset"
            className={classes.formControl}
          >
            <InputLabel htmlFor="confirm-password">Confirm Password</InputLabel>
            <Input
              id="confirm-password"
              value={props.state.confirmPassword}
              name="confirmPassword"
              onChange={props.handleOnChange}
              type="password"
            />
            <FormHelperText id="confirm-password-error-text">
              {props.formErrors.confirmPassword}
            </FormHelperText>
          </FormControl>
          <div css={actionBar}>
            <Link to="/login">
              <span css={altLinks}>Already have an account?</span>
            </Link>

            <Button
              variant="contained"
              type="submit"
              className={classes.button}
            >
              Create Account
            </Button>
          </div>
        </Box>
      </div>
    </div>
  );

  // return (
  //   <div css={mainContainer}>
  //     <div css={loginCard}>
  //       <div css={header}>Create an Account</div>
  //       <form css={bodyContainer} onSubmit={this.props.handleOnSubmit}>
  //         <div>
  //           <input
  //             value={this.props.state.firstName}
  //             name="firstName"
  //             type="text"
  //             onChange={this.props.handleOnChange}
  //             css={nameStyle}
  //             placeholder="First Name"
  //           />
  //         </div>
  //         <div>
  // <input
  //   value={this.props.state.lastName}
  //   name="lastName"
  //   type="text"
  //   onChange={this.props.handleOnChange}
  //   css={nameStyle}
  //   placeholder="Last Name"
  // />
  //         </div>
  //         <div>
  // <input
  //   value={this.props.state.role}
  //   name="role"
  //   type="text"
  //   css={nameStyle}
  //   placeholder="Role"
  // />
  //         </div>
  //         <div>
  // <input
  //   value={this.props.state.password}
  //   name="password"
  //   type="password"
  //   onChange={this.props.handleOnChange}
  //   css={passwordStyle}
  //   placeholder="Password"
  // />
  //         </div>
  //         <div>
  //           <input
  //             value={this.props.state.confirmPass}
  //             name="confirmPass"
  //             type="password"
  //             onChange={this.props.handleOnChange}
  //             css={passwordStyle}
  //             placeholder="Confirm Password"
  //           />
  //         </div>
  //         <FormError formErrors={this.props.formErrors} />
  //         <button css={button} type="submit">
  //           Create Account
  //         </button>
  // <div css={altLinks}>
  //   <Link to="/login">
  //     <span>Already have an account?</span>
  //   </Link>
  // </div>
  //       </form>
  //     </div>
  //   </div>
  // );
  // }
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
  font: 24px "Open Sans", sans-serif;
  font-weight: 600;
  text-align: center;
  color: #000000;
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
  color: #5a5a5a;
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  margin-right: 20px;
`;

const actionBar = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  margin-top: 20px;
`;
