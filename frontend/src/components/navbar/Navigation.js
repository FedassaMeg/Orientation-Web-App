/**@jsx jsx */
import { css, jsx } from "@emotion/core";
import NavLink from "./NavLink";
import Nav from "./Nav";
import Navbar from "./Navbar";
import NavItem from "./NavItem";
import SignoutButton from "../components/SignoutButton";

export default function Navigation(props) {
  const authToken = localStorage.getItem("access_token");
  return (
    <Navbar>
      {!props.admin ? (
        <div>
          <img src={require("../../images/logo.png")} alt="logo" css={logo} />
        </div>
      ) : (
        <div css={nologo}></div>
      )}
      {authToken ? (
        <div>
          <Nav>
            <NavItem>
              <NavLink href="/home">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/slides">Slides</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/quizs">Quizzes</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/videos">Videos</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/admin">Admin</NavLink>
            </NavItem>
            <div css={signoutBtnItem}>
              <SignoutButton type="signOut">Sign Out</SignoutButton>
            </div>
          </Nav>
        </div>
      ) : (
        <div>
          <Nav>
            <div css={signoutBtnItem}>
              <NavLink href="/login">
                <button css={loginBtn}>Login</button>
              </NavLink>
            </div>
          </Nav>
        </div>
      )}
    </Navbar>
  );
}

//emotion styles
// logo
const logo = css`
  width: 185px;
  padding-left: 12px;
`;
const nologo = css`
  height: 48.5px;
`;

const signoutBtnItem = css`
  margin-left: 48px;
  margin-top: 8px;
  margin-right: 8px;
`;

const loginBtn = css`
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  background-color: #f6cb14;
  color: white;
  font: 16px "Open Sans", sans-serif;
  font-weight: 600;
  transition-duration: 0.4s;

  &:hover {
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  }
`;
