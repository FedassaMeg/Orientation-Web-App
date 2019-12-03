import React, { useEffect, useState } from "react";

import { useAsync } from "react-async";

import * as apiClient from "../quiz/api-call-quiz";
import MCChoices from "./MCChoices";
import SAChoices from "./SAChoices";
import TFChoices from "./TFChoices";

export default function Choices(props) {
  if (props.question.type === "TF") {
    return (
      <TFChoices
        handleOnChange={props.handleOnChange}
        qstId={props.question.id}
        answers={props.answers}
        ansRes={props.ansRes}
      />
    );
  } else if (props.question.type === "MC") {
    return (
      <MCChoices
        handleOnChange={props.handleOnChange}
        qstId={props.question.id}
        answers={props.answers}
        qstChoices={props.question.choices}
      />
    );
  } else if (props.qstType === "SA") return null;
  return null;
}
