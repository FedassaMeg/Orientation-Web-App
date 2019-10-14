/**@jsx jsx */
import { css, jsx } from "@emotion/core";
import { MdEdit, MdAdd } from "react-icons/md";
import Card from "../components/Card";

export default function EditContent(props) {
  const quizzes = props.qzArr.map(quiz => {
    return (
      <div>
        <div>
          {quiz.title}
          <MdEdit />
        </div>
      </div>
    );
  });
  return (
    <div>
      <div>
        <Card header="Edit Quizzes">
          <ul>{quizzes}</ul>
        </Card>
      </div>
      <Card header="Create Quizzes">
        <button> Create a Quiz </button>
        <MdAdd />
      </Card>
    </div>
  );
}
