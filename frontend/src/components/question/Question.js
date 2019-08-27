import React from "react";

export default function Question(props) {
  return (
    <div>
      <div>
        {props.question.id}. {props.question.question} (
        {props.question.answer ? "True" : "False"})
      </div>
    </div>
  );
}
