//**@jsx jsx */
import { css, jsx } from "@emotion/core";

import React from "react";

import Routes from "./utils/Routes";

export default function App() {
  return (
    <div className="App" css={body}>
      <Routes />
    </div>
  );
}

const body = css`
  margin: 0;
  padding: 0;
  background-color: #f8f8f8;
  min-height: 100vh;
  height: 100%;
  overflow-y: visible;
`;
