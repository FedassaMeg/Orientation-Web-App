//Consume logic from container component to "Route" different types of questions to the appropriate presentation components
/**@jsx jsx */
import { css, jsx } from "@emotion/core";

// Local Components
import Card from "../components/Card";
import Choices from "./Choices";
import QuestionContent from "./QuestionContent";

export default function Question(props) {
  return (
    <Card>
      <div css={content}>
        <div css={question}>
          <QuestionContent activeIndex={props.activeIndex} />
        </div>
      </div>
      <div css={actions}>
        <Choices
          activeIndex={props.activeIndex}
          handleOnChange={props.handleOnChange}
          answer={props.answer}
        />
      </div>
    </Card>
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
