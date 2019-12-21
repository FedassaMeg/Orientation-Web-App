/**@jsx jsx */
import { css, jsx } from "@emotion/core";

//Material UI Components
import Box from "@material-ui/core/Box";

//Local component
import { useQuiz } from "../quiz/QuizContext";

export default function QuestionContent(props) {
  const { data } = useQuiz();
  return (
    <div css={container}>
      <Box display="flex" fontSize={16} fontWeight={500} color="text.primary">
        <div css={number}>{props.activeIndex + 1}.</div>
        <div css={question}>{data.questions[props.activeIndex].question} </div>
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
