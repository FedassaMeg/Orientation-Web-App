import React, { useEffect } from "react";

import Resource from "./Resource";
import { ROOT_URL } from "../utils/constants";
import EditQuestionContainer from "./EditQuestionContainer";

export default function EditQuiz(props) {
  // useEffect(() => {
  //   return;
  // }, [props.quizId]);
  return (
    <Resource
      url={`${ROOT_URL}/quizs/${props.quizId}/questions`}
      render={({ isLoading, error, data }) => (
        <>
          {isLoading ? (
            <h3>Loading...</h3> //Replace with Skeleton Component
          ) : (
            <EditQuestionContainer
              data={data}
              handleOnClick={props.handleOnClick}
            />
          )}
        </>
      )}
    />
  );
}
