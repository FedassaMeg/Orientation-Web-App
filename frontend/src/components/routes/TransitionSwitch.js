/**@jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import { Switch } from "react-router-dom";
import posed, { PoseGroup } from "react-pose";

export const TransitionSwitch = ({ history, location, children, ...rest }) => {
  const reverse = location.pathname === "/login";
  return (
    <div css={mainContainer}>
      <PoseGroup>
        <RouteContainer key={location.pathname}>
          <Switch location={location} {...rest}>
            {children}
          </Switch>
        </RouteContainer>
      </PoseGroup>
    </div>
  );
};

export default React.memo(TransitionSwitch);

// emotion Styles
// container bgcolor and shadow
const mainContainer = css`
  //   height: 100vh;
  //   display: flex;
  //   flex-direction: row;
  //   justify-content: center;
  //   align-items: center;
  background-color: #40e0c5;
  box-shadow: inset 0 0 250px rgba(41, 139, 130, 0.45);
  //
`;

const RouteContainer = posed.div({
  enter: { opacity: 1, delay: 200, beforeChildren: true },
  exit: { opacity: 0 }
});

export const TIMING = {
  INSTANT: 0,
  FAST: 200,
  NORMAL: 400,
  SLOW: 600
};

{
  /* <PoseGroup>
  <RouteContainer key={location.pathname}>
    <Switch location={location} {...rest}>
      {children}
    </Switch>
  </RouteContainer>
</PoseGroup>; */
}

{
  /* <PoseGroup
        flipMove={false}
        preEnterPose={reverse ? "leftSide" : "rightSide"}
      >
        <ContextRouteAnimation key={location.pathname} reverse={reverse}>
          <Switch location={location} {...rest}>
            {children}
          </Switch>
        </ContextRouteAnimation>
      </PoseGroup> */
}

// const ContextRouteAnimation = posed.div({
//   enter: {
//     x: 0,
//     opacity: 1,
//     transition: {
//       type: "tween",
//       ease: "easeInOut",
//       duration: TIMING.SLOW
//     }
//   },
//   exit: {
//     x: 0,
//     opacity: 1,
//     transition: {
//       duration: TIMING.INSTANT
//     }
//   },
//   leftSide: {
//     x: "-40%",
//     transition: {
//       type: "tween",
//       ease: "easeInOut",
//       duration: TIMING.SLOW
//     }
//   },
//   rightSide: {
//     x: "40%",
//     transition: {
//       type: "tween",
//       ease: "easeInOut",
//       duration: TIMING.SLOW
//     }
//   }
// });
