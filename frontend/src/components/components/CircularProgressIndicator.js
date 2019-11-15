/**@jsx jsx */
import { css, jsx } from "@emotion/core";
import React, { useRef } from "react";
export default function CicularProgressIndicator(props) {
  const VIEWBOX_HEIGHT = 200;
  const VIEWBOX_WIDTH = 200;

  return (
    <div className="single-chart">
      <div className="single-chart-title">{props.config.title}</div>
      <svg
        className=""
        width="200"
        height="200"
        viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
      >
        <circle
          r="90"
          cx="100"
          cy="100"
          fill="transparent"
          strokeDasharray="565.48"
          strokeDashoffset="3.14"
          css={circle}
        />
        <circle
          r="90"
          cx="100"
          cy="100"
          fill="transparent"
          strokeDasharray="565.48"
          strokeDashoffset="1.57"
          css={circlebar}
        />
      </svg>
    </div>
  );
}

const circle = css`
  stroke-dashoffset: 0;
  transition: stroke-dashoffset 1s linear;
  stroke: #565658;
  stroke-width: 1em;
`;

const circlebar = css`
  stroke-dashoffset: 0;
  transition: stroke-dashoffset 1s linear;
  stroke: #000000;
  stroke-width: 1em;
`;
