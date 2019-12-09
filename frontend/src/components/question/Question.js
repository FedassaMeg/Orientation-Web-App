//Consume logic from container component to "Route" different types of questions to the appropriate presentation components
/**@jsx jsx */
import { css, jsx } from "@emotion/core";

// Material UI Components
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

// Local Components
import Choices from "./Choices";
import QuestionContent from "./QuestionContent";

const useStyles = makeStyles({
  card: {
    maxWidth: 800,
    padding: 16
  }
});

export default function Question(props) {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <div css={question}>
            <QuestionContent activeIndex={props.activeIndex} />
          </div>
        </CardContent>
        <CardActions>
          <div css={choices}>
            <Choices
              activeIndex={props.activeIndex}
              handleOnChange={props.handleOnChange}
              answer={props.answer}
            />
          </div>
        </CardActions>
      </Card>
    </div>
  );
}

// export default function Question(props) {
//   return (
//     <div css={main}>
//       <div css={container}>
//         <div css={number}>{props.number}.</div>
//         <div css={question}> {props.question.question}</div>
//       </div>
//       <div css={checkbox}>
//         <input id={props.number} type="radio" onChange={props.onChange} />
//         <span>True</span>
//         <input id={props.number} type="radio" onChange={props.onChange} />
//         <span>False</span>
//       </div>
//     </div>
//   );
// }

// const main = css`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   padding: 8px;
//   &: hover {
//     background-color: #f0f0f0;
//   }
// `;

// const container = css`
//   display: flex;
//   flex-direction: row;
//   align-items: baseline;
// `;
// const number = css`
//   width: 28px;
//   padding-right: 8px;
//   text-align: right;
//   font-size: 16px;
//   font-weight: 600;
//   color: rgb(78, 78, 78);
// `;

const question = css`
  min-width: 720px;
  margin-left: 16px;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 300;
  color: rgb(78, 78, 78);
`;

const choices = css`
  margin-left: 56px;
`;
