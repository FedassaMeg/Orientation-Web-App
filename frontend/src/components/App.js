/**@jsx jsx */
import { css, jsx } from "@emotion/core";

import { Scrollbars } from "react-custom-scrollbars";

import Routes from "./routes/Routes";

export default function App() {
  return (
    <div css={body}>
      <Scrollbars
        style={{ width: "100vw", height: "100vh" }}
        hideTracksWhenNotNeeded
        autoHide
      >
        <Routes />
      </Scrollbars>
    </div>
  );
}
const body = css``;
