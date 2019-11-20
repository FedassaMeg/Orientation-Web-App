/**@jsx jsx */
import { css, jsx } from "@emotion/core";

import NavbarContainer from "../components/navbar/NavbarContainer";
export default function ViewWrapper({ children }) {
  return (
    <div css={container}>
      <NavbarContainer />
      {children}
    </div>
  );
}

const container = css`
  margin: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
