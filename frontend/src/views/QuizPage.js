import React from "react";

//Local components
import { QuizProvider } from "../components/quiz/QuizContext";
import QuizContainer from "../components/quiz/QuizContainer";
import ViewWrapper from "./ViewWrapper";

export default function QuizPage({ match }) {
  return (
    <QuizProvider match={match}>
      <ViewWrapper>
        <QuizContainer match={match} />
      </ViewWrapper>
    </QuizProvider>
  );
}
