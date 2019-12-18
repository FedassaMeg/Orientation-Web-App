/**@jsx jsx */
import { css, jsx } from "@emotion/core";

// Material UI Components
import Radio from "@material-ui/core/Radio";

export default function MCChoices(props) {
  return (
    <div css={container}>
      <div css={choice}>
        <Radio
          color="default"
          checked={props.answer === "a"}
          onChange={props.handleOnChange}
          value="a"
        />{" "}
        {props.qstChoices[0].choice}
      </div>
      <div css={choice}>
        <Radio
          color="default"
          checked={props.answer === "b"}
          onChange={props.handleOnChange}
          value="b"
        />{" "}
        {props.qstChoices[1].choice}
      </div>
      <div css={choice}>
        <Radio
          color="default"
          checked={props.answer === "c"}
          onChange={props.handleOnChange}
          value="c"
        />{" "}
        {props.qstChoices[2].choice}
      </div>
      <div css={choice}>
        <Radio
          color="default"
          checked={props.answer === "d"}
          onChange={props.handleOnChange}
          value="d"
        />{" "}
        {props.qstChoices[3].choice}
      </div>
    </div>
  );
}

const container = css`
  display: flex;
  flex-direction: column;
`;

const choice = css``;
