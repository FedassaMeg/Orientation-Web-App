import React from "react";

//Local components
import QuizContainer from "../components/quiz/QuizContainer";
import ViewWrapper from "./ViewWrapper";

export default function QuizPage({ match }) {
  return (
    <ViewWrapper>
      <QuizContainer match={match} />
    </ViewWrapper>
  );
}
