/**@jsx jsx */
import { css, jsx } from "@emotion/core";
import Slides from "../components/slides/Slides";
import Navigation from "../components/navbar/Navigation";

export default function SlidesPage() {
  return (
    <div css={container}>
      <Navigation />
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
