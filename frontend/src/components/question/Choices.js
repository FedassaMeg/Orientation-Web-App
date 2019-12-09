import React from "react";

//Local components
import { useQuiz } from "../quiz/QuizContext";
import MCChoices from "./MCChoices";
import SAChoices from "./SAChoices";
import TFChoices from "./TFChoices";

export default function Choices(props) {
  const { data } = useQuiz();

  const qstType = data.questions[props.activeIndex].type;
  const qstChoices = data.questions[props.activeIndex].choices;

  if (qstType === "TF") {
    return (
      <TFChoices handleOnChange={props.handleOnChange} answer={props.answer} />
    );
  } else if (qstType === "MC") {
    return (
      <MCChoices
        handleOnChange={props.handleOnChange}
        qstChoices={qstChoices}
        answer={props.answer}
      />
    );
  } else if (qstType === "SA") return null;
  return null;
}
