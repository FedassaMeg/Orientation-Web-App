/**@jsx jsx */
import { css, jsx } from "@emotion/core";

import Home from "../components/home/Home";
import Navigation from "../components/navbar/Navigation";

export default function HomePage() {
  return (
    <div css={container}>
      <Navigation />
      <Home />
    </div>
  );
}

const container = css`
  display: flex;
  flex-direction: column;
  overflow-y: visible;
`;
