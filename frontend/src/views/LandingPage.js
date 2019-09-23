/**@jsx jsx */
import { Link } from "react-router-dom";
import { css, jsx } from "@emotion/core";
import Navigation from "../components/navbar/Navigation";

export default function LandingPage() {
  return (
    <div css={mainContainer}>
      <Navigation />

      <div css={pageContent}>
        <div css={spanGroup}>
          <span css={headerTop}>Welcome to</span>
          <span css={headerBottom}>First Call Orientation</span>
        </div>

        <div css={buttonGroup}>
          <Link to="/login">
            <button css={button}>Get Started</button>
          </Link>
        </div>
        <div css={shape} />
      </div>
    </div>
  );
}

// emotion styles
// container bgcolor and shadow
const mainContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100vh;
  background-color: rgb(64, 224, 197);
  box-shadow: inset 0 0 250px rgba(41, 139, 130, 0.45);
`;

const pageContent = css`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 12%;
`;

const spanGroup = css`
  display: flex;
  flex-direction: column;
`;

// header styles for top portion
const headerTop = css`
  font: 7vmin "Merriweather Sans", sans-serif;
  font-weight: 300;
  text-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
  color: white;
`;

// header styles for bottom portion
const headerBottom = css`
  font: 10vmin "Noto Sans JP", sans-serif;
  font-weight: 600;
  text-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
  color: white;
`;

// button group container
const buttonGroup = css`
  margin-top: 75px;
`;

// button styles
const button = css`
  padding: 5px 50px;
  border: 2px solid white;
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
