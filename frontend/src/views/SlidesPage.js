/**@jsx jsx */
import { css, jsx } from "@emotion/core";
import Slides from "../components/slides/Slides";
import NavbarContainer from "../components/navbar/NavbarContainer";

export default function SlidesPage() {
  return (
    <div css={container}>
      <NavbarContainer />
      <Slides />
    </div>
  );
}
const container = css`
  margin: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
