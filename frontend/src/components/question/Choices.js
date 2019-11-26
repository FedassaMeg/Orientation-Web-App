import React, { useEffect, useState } from "react";

import { useAsync } from "react-async";

import * as apiClient from "../quiz/api-call-quiz";
import MCChoices from "./MCChoices";
import SAChoices from "./SAChoices";
import TFChoices from "./TFChoices";

const getAnswerData = async ({ args }) => {
  let tfanswer;
  let mcanswer;
  let saanswer;
  if (args.qstType.type === "TF") {
    try {
      tfanswer = await apiClient.getTFAnswers(args.qstId);
    } catch (e) {
      throw new Error(e);
    }
  }
  if (args.qstType.type === "MC") {
    try {
      mcanswer = await apiClient.getMCAnswers(args.qstId);
    } catch (e) {
      throw new Error(e);
    }
  }
  if (args.qstType.type === "SA") {
    try {
      saanswer = await apiClient.getSAAnswers(args.qstId);
    } catch (e) {
      throw new Error(e);
    }
  }

  return { tfanswer, mcanswer, saanswer };
};

export default function Choices({ qstType, handleOnChange, qstId, answers }) {
  const [answer, setAnswer] = useState(null);

  const { data, error, isPending, isSettled } = useAsync({
    watch: qstId,
    promiseFn: getAnswerData,
    args: { qstId, qstType }
  });
  useEffect(() => {
    if (isSettled) {
      setAnswer(data);
    }
  }, [isSettled]);

  if (isPending) {
    return <div>Loading...</div>;
  }
  if (error) return <div>Something went wrong: {error}</div>;
  if (data) {
    if (answer === null) {
      return <div>Data not ready</div>;
    } else {
      if (qstType.type === "TF") {
        return (
          <TFChoices
            handleOnChange={handleOnChange}
            qstId={qstId}
            answers={answers}
            qstAns={answer.tfanswer.data}
          />
        );
      } else if (qstType.type === "MC") {
        return (
          <MCChoices
            handleOnChange={handleOnChange}
            qstId={qstId}
            answers={answers}
            qstAns={answer.mcanswer.data}
          />
        );
      } else if (qstType.type === "SA") return null;
      return null;
    }
  }
}
