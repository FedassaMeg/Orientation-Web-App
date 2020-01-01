/**@jsx jsx */
import { css, jsx } from "@emotion/core";

//Local components
import Button from "../components/Button";
import Card from "../components/Card";

export default function Reports(props) {
  const {
    userArray,
    scoreArray,
    open,
    file,
    handleOnSubmit,
    handleResubmit
  } = props;

  const userList = userArray.map((user, index) => {
    const userFullName = user.last_name + ", " + user.first_name;
    return (
      <li>
        <Button key={index} id={user.id} onClick={handleOnSubmit}>
          {userFullName}
        </Button>
      </li>
    );
  });

  const scoreList = scoreArray.map((rowdata, index) => {
    if (rowdata.is_completed) {
      return (
        <div key={index} css={scorerow}>
          <div css={title}>{rowdata.related_quiz.title}</div>
          <div css={quizscore}>
            {rowdata.score}/{rowdata.related_quiz.num_questions}
          </div>
          <Button id={rowdata.id} onClick={handleResubmit} css={testbtn}>
            Re-take Test
          </Button>
        </div>
      );
    }
  });

  return (
    <div css={container}>
      <Card header="USER LIST">
        <div css={usersContainer}>
          <ul css={ulist}>{userList}</ul>
        </div>
      </Card>

      {open && (
        <Card css={cardCont}>
          <div css={scoresContainer}>
            <div css={slist}>{scoreList}</div>
            <div css={footer}>
              <hr css={divider} />
              <Button onClick={file}>Generate Report</Button>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}

// emotion styling
const container = css`
  display: flex;
  flex-direction: row;
`;

const usersContainer = css`
  padding: 16px;
  width: 200px;
`;

const cardCont = css`
  height: 100%;
`;

const ulist = css`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

const scoresContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 500px;
  height: 300px;
`;

const slist = css``;

const footer = css`
  justify-self: flex-end;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const scorerow = css`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 40px;
`;

const title = css`
  width: 300px;
`;

const quizscore = css`
  width: 80px;
`;

const divider = css`
  width: 480px;
  margin: 16px;
  border: 0.5px solid lightgrey;
`;

const testbtn = css`
  margin: 0;
`;
