/**@jsx jsx */
import { useState } from "react";
import { css, jsx } from "@emotion/core";
import { MdEdit } from "react-icons/md";
import Card from "../components/Card";
import CreateQuizContainer from "./CreateQuizContainer";
import EditQuiz from "./EditQuiz";

export default function EditContent(props) {
  const [isClicked, setIsClicked] = useState(false);
  const [quizId, setQuizId] = useState(1);
  const handleOnClick = e => {
    if (e.target.name === "button") {
      setQuizId(e.target.id);
    }
    setIsClicked(!isClicked);
  };
  const quizzes = props.qzArr.map(quiz => {
    return (
      <div>
        <div>
          {quiz.title}
          <button id={quiz.id} onClick={handleOnClick} name="button">
            <MdEdit />
          </button>
        </div>
      </div>
    );
  });
  return (
    <div>
      <div>
        <Card header="Edit Quizzes" line>
          {!isClicked ? (
            <ul>{quizzes}</ul>
          ) : (
            <EditQuiz quizId={quizId} handleOnClick={handleOnClick} />
          )}
        </Card>
      </div>
      <Card header="">
        <CreateQuizContainer />
      </Card>
    </div>
  );
}
