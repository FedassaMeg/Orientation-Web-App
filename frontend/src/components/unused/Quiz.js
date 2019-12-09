//Consume logic from container component to "Route" different types of quizzes to the appropriate presentation components

/**@jsx jsx */
import { css, jsx } from "@emotion/core";

//Local Components
import Question from "../question/Question";
import QuizContent from "../quiz/QuizContent";
import ReviewAnswers from "../quiz/ReviewAnswers";

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
        back={props.back}
        handleOnChange={props.handleOnChange}
        handleOnClick={props.handleOnClick}
        handleSubmit={props.handleSubmit}
        isCompleted={props.isCompleted}
        answers={props.answers}
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
