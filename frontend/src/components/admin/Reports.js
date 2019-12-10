import React from "react";
import PdfComponent from "../unused/PdfComponent";
import * as jsPDF from "jspdf";
export default function Reports(props) {
  const file = () => {
    const doc = new jsPDF();
    doc.text("Test", 10, 10);
    doc.save("a4.pdf");
  };

  const userList = props.userArray.map((user, index) => {
    const userFullName = user.last_name + ", " + user.first_name;
    return (
      <option id={index} value={user.id}>
        {userFullName}
      </option>
    );
  });

  return (
    <div>
      <select>
        <option selected></option>
        {userList}
      </select>
      <button onClick={props.handleOnClick}>File</button>
      <div>
        {props.open && <div>List of Scores and option to generate report</div>}
      </div>
    </div>
  );
}
