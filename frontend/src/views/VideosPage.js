/**@jsx jsx */
import { css, jsx } from "@emotion/core";

import Navigation from "../components/navbar/Navigation";
import VideosContainer from "../components/video/VideosContainer";

export default function VideosPage() {
  return (
    <div css={container}>
      <Navigation />
      <VideosContainer />
    </div>
  );
}

const container = css`
  margin: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
