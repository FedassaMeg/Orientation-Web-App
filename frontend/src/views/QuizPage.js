import React from "react";

//Local components
import { QuizProvider } from "../components/quiz/QuizContext";
import QuizContainer from "../components/quiz/QuizContainer";
import ViewWrapper from "../components/components/ViewWrapper";

export default function QuizPage() {
  return (
    <QuizProvider>
      <ViewWrapper>
        <QuizContainer />
      </ViewWrapper>
    </QuizProvider>
  );
}
