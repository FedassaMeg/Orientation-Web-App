import React from "react";

//Local components
import MCChoices from "./MCChoices";
import SAChoices from "./SAChoices";
import TFChoices from "./TFChoices";

export default function Choices(props) {
  const { activeIndex, handleOnChange, answer, type, choices } = props;
  if (type === 3) {
    return (
      <TFChoices
        activeIndex={activeIndex}
        handleOnChange={handleOnChange}
        answer={answer}
      />
    );
  } else if (type === 2) {
    return (
      <MCChoices
        activeIndex={activeIndex}
        handleOnChange={handleOnChange}
        qstChoices={choices}
        answer={answer}
      />
    );
  } else if (type === 1) {
    return (
      <SAChoices
        activeIndex={activeIndex}
        handleOnChange={handleOnChange}
        answer={answer}
      />
    );
  }
  return null;
}
