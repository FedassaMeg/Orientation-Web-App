import React, { useEffect } from "react";

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
      <TFChoices
        activeIndex={props.activeIndex}
        handleOnChange={props.handleOnChange}
        answer={props.answer}
      />
    );
  } else if (qstType === "MC") {
    return (
      <MCChoices
        activeIndex={props.activeIndex}
        handleOnChange={props.handleOnChange}
        qstChoices={qstChoices}
        answer={props.answer}
      />
    );
  } else if (qstType === "SA") {
    return (
      <SAChoices
        activeIndex={props.activeIndex}
        handleOnChange={props.handleOnChange}
        answer={props.answer}
      />
    );
  }
  return null;
}
