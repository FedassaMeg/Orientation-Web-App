/**@jsx jsx */
import { css, jsx } from "@emotion/core";

//import ClipLoader from "react-spinners/ClipLoader";

//import CircularProgress from "@material-ui/core/CircularProgress";

export default function FullPageSpinner() {
  return (
    <div css={container}>
      <div css={overide}>Loading...</div>
    </div>
  );
}

const container = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100%;
`;

const overide = css`
  font-family: "Roboto", sans-serif;
  font-size: 48px;
  font-weight: 800;
  color: #d9d9d9;
`;
