import React from "react";

import * as jsPDF from "jspdf";

import Card from "../components/Card";

export default function Reports(props) {
  const file = () => {
    const doc = new jsPDF();
    doc.text("Test", 10, 10);
    doc.save("a4.pdf");
  };
  const userList = props.userArray.map((user, index) => {
    const userFullName = user.last_name + ", " + user.first_name;
    return (
      <li>
        <button key={index} id={user.id} onClick={props.handleOnSubmit}>
          {userFullName}
        </button>
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
      </div>
    );
  });

  return (
    <div>
      <Card>
        <ul>{userList}</ul>
      </Card>
      <div>{props.open && <Card>{scoreList}</Card>}</div>
    </div>
  );
}
