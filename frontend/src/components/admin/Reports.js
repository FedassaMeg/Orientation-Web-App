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
    let userFullName;
    if (user.last_name !== "") {
      userFullName = user.last_name + ", " + user.first_name;
    }
    return (
      <li key={index}>
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
      <Card css={cardCont} header="GENERATE REPORTS">
        <div css={content}>
          <div css={usersContainer}>
            <ul css={ulist}>{userList}</ul>
          </div>
          {open && (
            <div css={scoresContainer}>
              <div css={slist}>{scoreList}</div>
              <div css={footer}>
                <hr css={divider} />
                <Button onClick={file} css={generateBtn}>
                  Generate Report
                </Button>
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}

// emotion styling
const container = css``;

const usersContainer = css`
  padding: 16px;
  width: 200px;
`;

const cardCont = css`
  width: 700px;
`;

const content = css`
  display: flex;
  flex-direction: row;
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
const generateBtn = css`
  width: 120px;
  margin: 16px;
  border: 0.5px solid;
  border-color: dodgerblue;
  border-radius: 2px;
  color: dodgerblue;
  transition-duration: 0.4s;

  &: hover {
    border-radius: 2px;
    background-color: dodgerblue;
    color: white;
  }
`;
