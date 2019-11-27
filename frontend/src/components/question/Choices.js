import React, { useEffect, useState } from "react";

import { useAsync } from "react-async";

import * as apiClient from "../quiz/api-call-quiz";
import MCChoices from "./MCChoices";
import SAChoices from "./SAChoices";
import TFChoices from "./TFChoices";

export default function Choices(props) {
  if (props.qstTypeRes.type === "TF") {
    return (
      <TFChoices
        handleOnChange={props.handleOnChange}
        qstId={props.qstId}
        answers={props.answers}
        tfaRes={props.tfaRes}
      />
    );
  } else if (props.qstTypeRes.type === "MC") {
    return (
      <MCChoices
        handleOnChange={props.handleOnChange}
        qstId={props.qstId}
        answers={props.answers}
        mcaRes={props.mcaRes}
      />
    );
  } else if (props.qstType.type === "SA") return null;
  return null;
}
