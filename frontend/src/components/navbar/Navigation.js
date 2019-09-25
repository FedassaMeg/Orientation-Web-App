/**@jsx jsx */
import { css, jsx } from "@emotion/core";
import NavLink from "./NavLink";
import Nav from "./Nav";
import Navbar from "./Navbar";
import NavItem from "./NavItem";
import SignoutButton from "../components/SignoutButton";

export default function Navigation(props) {
  const authToken = localStorage.getItem("token");
  return (
    <Navbar>
      <div>
        <img src={require("../../imgs/logo.png")} alt="logo" css={logo} />
      </div>
      {authToken ? (
        <div>
          <Nav>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/slides">Slides</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/quizs">Quizzes</NavLink>
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
  color: black;
  font: 16px "Open Sans", sans-serif;
  transition-duration: 0.4s;

  &:hover {
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  }
`;
