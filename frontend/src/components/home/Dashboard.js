/**@jsx jsx */
import { css, jsx } from "@emotion/core";

import Container from "../components/Container";
import Card from "../components/Card";

export default function Dashboard(props) {
  const quizProgress = props.quizArray.map(quiz => {
    return (
      <div>
        <div>
          <div></div>
          <div>{quiz.title}</div>
        </div>
      </div>
    );
  });
  return (
    <div>
      <div css={pageheader}>My Dashboard</div>
      <hr css={divider} />
      <div css={cardscontainer}>
        <div>
          <div>Quizzes</div>
          <hr />
          <div>{quizProgress}</div>
        </div>
        <Card />
      </div>
    </div>
  );
}

const pageheader = css`
  font-family: "Noto Sans JP", sans-serif;
  font-size: 45px;
  padding-left: 90px;
  color: rgb(78, 78, 78);
  width: 100%;
  padding-bottom: 10px;
  background-color: rgb(252, 252, 252);
`;

const divider = css`
  margin: 0;
  border: 0.5px solid lightgrey;
`;

const cardscontainer = css`
  width: 100%;
  padding: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: 1;
`;
