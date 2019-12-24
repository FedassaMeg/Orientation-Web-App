/**@jsx jsx */
import { css, jsx } from "@emotion/core";

import React from "react";

import { Switch } from "react-router-dom";

export const TransitionSwitch = ({ history, location, children, ...rest }) => {
  return (
    <div css={mainContainer}>
      <Switch location={location} {...rest}>
        {children}
      </Switch>
    </div>
  );
};

export default React.memo(TransitionSwitch);

// emotion Styles
// container bgcolor and shadow
const mainContainer = css`
  background-color: #40e0c5;
  box-shadow: inset 0 0 250px rgba(41, 139, 130, 0.45);
`;
