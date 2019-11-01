//**@jsx jsx */
import Routes from "./utils/Routes";
import React from "react";
import { css, jsx } from "@emotion/core";

function App() {
  return (
    <div className="App" css={body}>
      <Routes />
    </div>
  );
}

export default App;

const body = css`
  margin: 0;
  padding: 0;
  background-color: #f8f8f8;
  min-height: 100vh;
  height: 100%;
`;
