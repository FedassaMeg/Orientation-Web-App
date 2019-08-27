/**@jsx jsx */
import { css, jsx } from "@emotion/core";
import NavLink from "./NavLink";
import Nav from "./Nav";
import Navbar from "./Navbar";
import NavItem from "./NavItem";
import SignoutButton from "../components/SignoutButton";

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

export default function Navigation(props) {
  return (
    <Navbar>
      <div>
        <img src={require("../../imgs/logo.png")} alt="logo" css={logo} />
      </div>
      <div>
        <Nav>
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/slides">Slides</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/quizzes">Quizzes</NavLink>
          </NavItem>
          <div css={signoutBtnItem}>
            <SignoutButton type="signOut">Sign Out</SignoutButton>
          </div>
        </Nav>
      </div>
    </Navbar>
  );
}
