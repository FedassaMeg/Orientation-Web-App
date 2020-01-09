/**@jsx jsx */
import { css, jsx } from "@emotion/core";
import { useRef, useState, useCallback } from "react";

import clamp from "lodash/clamp";

import posed, { PoseGroup } from "react-pose";

import { useContent } from "../context/ContentContext";
import Question from "../question/Question";

const items = [
  { key: 1, title: "one" },
  { key: 2, title: "two" },
  { key: 3, title: "three" },
  { key: 4, title: "four" },
  { key: 5, title: "five" }
];

const Num = posed.div({
  preEnter: {
    x: 50
  },
  enter: {
    x: 0,
    opacity: 1,
    transition: {
      x: { type: "spring", stiffness: 1000, damping: 15 },
      default: { duration: 300 }
    }
  },
  exit: {
    x: -50,
    opacity: 0,
    transition: { duration: 300 }
  }
});

export default function SlideAnimation() {
  const [isVisible, setIsVisible] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const toggle = () => {};
  const onClick = () => {
    setIsVisible(!isVisible);
    setActiveIndex(activeIndex + 1);
  };

  return (
    <div css={container}>
      <PoseGroup preEnterPose="preEnter">
        <Num key={activeIndex}>
          <div>
            <p>{items[activeIndex].key}</p>
            <div>{items[activeIndex].title}</div>
          </div>
        </Num>
      </PoseGroup>

      <button onClick={onClick}>Button</button>
      <button onClick={toggle}>visibility</button>
    </div>
  );
}

const container = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const blocks = css`
  width: 100px;
  height: 50px;
  font: 20px "Roboto", san-serif;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.87);
  background-color: dodgerblue;
`;
