/**@jsx jsx */
import { css, jsx } from "@emotion/core";

//Local components
import Nav from "./Nav";
import Navbar from "./Navbar";
import NavItem from "./NavItem";
import NavLink from "./NavLink";
import SignoutButton from "../components/SignoutButton";

export default function NavLinks({ admin, isAuthenticated, isAdmin }) {
  return (
    <Navbar>
      {!admin ? (
        <div>
          <img src={require("../../images/logo.png")} alt="logo" css={logo} />
        </div>
      ) : (
        <div css={nologo}>ADMIN PANEL</div>
      )}
      {isAuthenticated ? (
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
              <NavLink href="/handouts">Handouts</NavLink>
            </NavItem>
            {isAdmin && (
              <NavItem>
                <NavLink href="/site-admin">Admin</NavLink>
              </NavItem>
            )}

            <div css={navBtn}>
              <SignoutButton type="signOut">Sign Out</SignoutButton>
            </div>
          </Nav>
        </div>
      ) : (
        <div>
          <Nav>
            <div css={navBtn}>
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
//Logo
const logo = css`
  width: 185px;
  padding-left: 12px;
`;

//Logo placeholder for admin view
const nologo = css`
  height: 50px;
  width: 259px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 36px;
  font: 20px "Open Sans", san-serif;
  color: white;
  background-color: #353538;
`;

//Container for Sign out and Login buttons
const navBtn = css`
  margin-left: 48px;
  margin-top: 8px;
  margin-right: 8px;
`;

//Login button
const loginBtn = css`
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  background-color: #ffd700;
  color: white;
  font: 16px "Open Sans", sans-serif;
  font-weight: 600;
  transition-duration: 0.4s;

  &:hover {
    box-shadow: 0px 0px 5px 5px rgba(255, 215, 0, 0.1);
  }
`;
