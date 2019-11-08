/**@jsx jsx */
import { css, jsx } from "@emotion/core";

import NavbarContainer from "../components/navbar/NavbarContainer";
import VideosContainer from "../components/video/VideosContainer";

export default function VideosPage() {
  return (
    <div css={container}>
      <NavbarContainer />
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
