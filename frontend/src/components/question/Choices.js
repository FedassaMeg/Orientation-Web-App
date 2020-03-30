import React from "react";

//Local components
import MCChoices from "./MCChoices";
import SAChoices from "./SAChoices";
import TFChoices from "./TFChoices";

export default function Choices(props) {
  const { answer, choices, handleOnChange, type } = props;
  switch (type) {
    case 1:
      return <SAChoices answer={answer} handleOnChange={handleOnChange} />;
    case 2:
      return (
        <MCChoices
          answer={answer}
          choices={choices}
          handleOnChange={handleOnChange}
        />
      );
    case 3:
      return <TFChoices answer={answer} handleOnChange={handleOnChange} />;
    default:
      return null;
  }
}
