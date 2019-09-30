/**@jsx jsx */

import { css, jsx } from "@emotion/core";

export default function Question(props) {
  return (
    <div>
      <div>
        {props.number}. {props.question.question}
      </div>
      <div>
        <input
          id={props.question.id}
          type="checkbox"
          onChange={props.onChange}
        />
      </div>
    </div>
  );
}
