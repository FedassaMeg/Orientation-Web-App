// Presentation to display ui for user input/answer [ 'Routes' based on question type(t/f, multiple choice, general)]
// Consumes contain state to handle ui interaction
/**@jsx jsx */
import { css, jsx } from "@emotion/core";

// Material UI Components
import Radio from "@material-ui/core/Radio";

export default function TFChoices(props) {
  return (
    <div css={container}>
      <div css={choice}>
        <Radio
          color="default"
          checked={props.answer === true}
          onChange={props.handleOnChange}
          value={true}
        />{" "}
        True
      </div>
      <div css={choice}>
        <Radio
          color="default"
          checked={props.answer === false}
          onChange={props.handleOnChange}
          value={false}
        />{" "}
        False
      </div>
    </div>
  );
}

const container = css`
  display: flex;
  flex-direction: row;
`;

const choice = css``;
