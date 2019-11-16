/**@jsx jsx */
import { css, jsx } from "@emotion/core";

import Routes from "./routes/Routes";

export default function App() {
  return (
    <div css={body}>
      <Routes />
    </div>
  );
}
const body = css`
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;
