//Consume logic from container component to "Route" different types of quizzes to the appropriate presentation components

/**@jsx jsx */
import { css, jsx } from "@emotion/core";

//Local Components
import Question from "../question/Question";
import QuizContent from "./QuizContent";
import ReviewAnswers from "./ReviewAnswers";

export default function Quiz(props) {
  return (
    <div css={container}>
      <QuizContent
        quiz={props.quiz}
        data={props.data}
        totCount={props.totCount}
        question={props.question}
        activeIndex={props.activeIndex}
        next={props.next}
        prev={props.prev}
        radioValue={props.radioValue}
        handleOnChange={props.handleOnChange}
        isCompleted={props.isCompleted}
      />
    </div>
  );
}

// Emotion Css-in-Js Styling

// Main [div]
const container = css`
  background-color: #f4f4f4;
  align-self: center;
  max-width: 120vmin;
  width: 1500px;
  padding-bottom: 24px;
`;
