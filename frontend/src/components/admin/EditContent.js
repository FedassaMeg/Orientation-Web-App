/**@jsx jsx */
import { css, jsx } from "@emotion/core";
import { MdEdit } from "react-icons/md";
import Card from "../components/Card";
import CreateQuizContainer from "./CreateQuizContainer";
import EditQuiz from "./EditQuiz";

export default function EditContent(props) {
  let clicked = true;
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
        <Card header="Edit Quizzes" line>
          {!clicked ? <ul>{quizzes}</ul> : <EditQuiz quizId={1} />}
        </Card>
      </div>
      <Card header="">
        <CreateQuizContainer />
      </Card>
    </div>
  );
}
