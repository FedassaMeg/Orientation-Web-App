/**@jsx jsx */
import { css, jsx } from "@emotion/core";

import Home from "../components/home/Home";
import NavbarContainer from "../components/navbar/NavbarContainer";

export default function HomePage() {
  return (
    <div css={container}>
      <NavbarContainer />
      <Home />
    </div>
  );
}

const container = css`
  display: flex;
  flex-direction: column;
  overflow-y: visible;
`;
