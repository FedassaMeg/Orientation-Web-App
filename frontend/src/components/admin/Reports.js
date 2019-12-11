import React from "react";

import * as jsPDF from "jspdf";

import Button from "../components/Button";
import Card from "../components/Card";

export default function Reports(props) {
  const userList = props.userArray.map((user, index) => {
    const userFullName = user.last_name + ", " + user.first_name;
    return (
      <li>
        <Button key={index} id={user.id} onClick={props.handleOnSubmit}>
          {userFullName}
        </Button>
      </li>
    );
  });

  const scoreList = props.scoreArray.map((rowdata, index) => {
    return (
      <div key={index}>
        <div>{rowdata.related_quiz.title}</div>
        <div>
          {rowdata.score}/{rowdata.related_quiz.num_questions}
        </div>
        <Button>Re-take Test</Button>
      </div>
    );
  });

  const file = () => {
    const doc = new jsPDF();
    let newUser;
    props.userArray.map(user => {
      if (user.id == props.userId) {
        newUser = user;
      }
    });
    console.log(doc.getFontList());
    doc.addFont("OpenSans-Regular", "Open Sans", "");
    doc.setFont("Open Sans", "");
    doc.setFontSize(16);
    doc.text(
      `${newUser.last_name.toUpperCase()}, ${newUser.first_name.toUpperCase()}`,
      10,
      10
    );
    doc.text("Quiz Scores", 10, 25);
    props.scoreArray.map((score, index) => {
      doc.setFontSize(12);
      doc.text(
        `${score.related_quiz.title} - Score: ${score.score}/${score.related_quiz.num_questions}`,
        10,
        40 + index * 15
      );
      doc.text(
        `Completed on: ${score.signed_date.slice(0, 10)}`,
        150,
        40 + index * 15
      );
    });
    doc.save("a4.pdf");
  };
  return (
    <div>
      <Card header="User List">
        <ul>{userList}</ul>
      </Card>
      <div>
        {props.open && (
          <Card>
            {scoreList}
            <Button onClick={file}>Generate Report</Button>
          </Card>
        )}
      </div>
    </div>
  );
}
