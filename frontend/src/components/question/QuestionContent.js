//Presentation component to display the question text

/**@jsx jsx */
import { css, jsx } from "@emotion/core";

//Material UI Components
import Box from "@material-ui/core/Box";

export default function QuestionContent(props) {
  return (
    <div css={container}>
      <Box display="flex" fontSize={16} fontWeight={500} color="text.primary">
        <div css={number}>{props.activeIndex + 1}.</div>
        <div css={question}>{props.question} </div>
      </Box>
    </div>
  );
}

const container = css``;

const number = css`
  margin-right: 24px;
`;

const question = css`
  padding-bottom: 16px;
`;
