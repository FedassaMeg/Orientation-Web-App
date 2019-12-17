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
  display: flex;
  flex-direction: column;
  margin: 0;
  min-height: 100vh;
  background-color: whitesmoke;
`;
