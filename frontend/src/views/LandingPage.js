/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { Link } from "react-router-dom";

//Local components
import NavbarContainer from "../components/navbar/NavbarContainer";

export default function LandingPage() {
  return (
    <div css={container}>
      <NavbarContainer />
      <div css={content}>
        <div css={msgGroup}>
          <span css={msgTop}>Welcome to</span>
          <span css={msgBottom}>First Call Orientation</span>
        </div>
        <div css={btnContainer}>
          <Link to="/signup">
            <button css={button}>Get Started</button>
          </Link>
        </div>
        <div css={shape} />
      </div>
    </div>
  );
}

// emotion styles
// Refactor css using composition

//Page container
const container = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100vh;
  background-color: rgb(64, 224, 197);
  box-shadow: inset 0 0 250px rgba(41, 139, 130, 0.45);
`;

//Container below navigation bar
const content = css`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 12%;
`;

//Container for welcome message
const msgGroup = css`
  display: flex;
  flex-direction: column;
`;

// header styles for top portion
const msgTop = css`
  font: 7vmin "Merriweather Sans", sans-serif;
  font-weight: 300;
  text-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
  color: white;
`;

// header styles for bottom portion
const msgBottom = css`
  font: 10vmin "Open Sans", sans-serif;
  font-weight: 600;
  text-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
  color: white;
`;

// button group container
const btnContainer = css`
  margin-top: 75px;
`;

// button styles
const button = css`
  padding: 5px 50px;
  border: 3px solid white;
  border-radius: 25px;
  background: none;
  color: white;
  font: 3vmin "Noto Sans JP", sans-serif;
  font-weight: 600;
  transition-duration: 0.4s;

  &:hover {
    color: #279186;
    background-color: white;
  }
`;

// shape styles
const shape = css`
  border-left: 800px solid transparent;
  border-right: 0px solid transparent;
  border-bottom: 271px solid gold;
  flex-grow: 1;
  align-self: flex-end;
  justify-self: flex-end;
`;
