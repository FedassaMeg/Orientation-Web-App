import React from "react";

export default function QuestionForm(props) {
  return (
    <div>
      <span>Question:</span>
      <input type="text" />
      <button onClick={props.remove}>Remove</button>
    </div>
  );
}
