//Consume logic from container component to "Route" different types of questions to the appropriate presentation components
/**@jsx jsx */
import { css, jsx } from "@emotion/core";

import posed, { PoseGroup } from "react-pose";

// Local Components
import Card from "../components/Card";
import Choices from "./Choices";
import QuestionContent from "./QuestionContent";

const CardAnimate = posed.div({
  enter: {
    x: 0,
    opacity: 1,
    transition: {
      x: { type: "tween", ease: "easeInOut", duration: 400 },
      default: { duration: 600 }
    }
  },
  rightSide: {
    x: "50%",
    opacity: 0,
    transition: {
      x: { type: "tween", ease: "easeInOut", duration: 400 },
      default: { duration: 600 }
    }
  },
  leftSide: {
    x: "-50%",
    opacity: 0,
    transition: {
      x: { type: "tween", ease: "easeInOut", duration: 400 },
      default: { duration: 600 }
    }
  }
});

export default function Question(props) {
  const {
    activeIndex,
    animate,
    answer,
    choices,
    handleOnChange,
    question,
    type
  } = props;

  return (
    <PoseGroup
      preEnterPose={animate ? "leftSide" : "rightSide"}
      exitPose={animate ? "rightSide" : "leftSide"}
    >
      <CardAnimate key={activeIndex}>
        <Card>
          <div css={content}>
            <div css={question}>
              <QuestionContent activeIndex={activeIndex} question={question} />
            </div>
          </div>
          <div css={actions}>
            <Choices
              activeIndex={activeIndex}
              handleOnChange={handleOnChange}
              type={type}
              choices={choices}
              answer={answer}
            />
          </div>
        </Card>
      </CardAnimate>
    </PoseGroup>
  );
}

const content = css`
  width: 800px;
  padding: 16px;
`;

const question = css`
  min-width: 720px;
  margin-left: 16px;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 300;
  color: rgb(78, 78, 78);
`;

const actions = css`
  width: 100%;
  margin-right: 16px;
  margin-left: 56px;
`;
