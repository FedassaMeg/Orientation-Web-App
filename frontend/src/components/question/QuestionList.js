import React from "react";

import Question from "./Question";
import Resource from "../utils/Resource";
import { ROOT_URL } from "../utils/constants";

export default function QuestionList(props) {
  return (
    <Resource
      url={`${ROOT_URL}quizs/${this.props.quizId}/questions`}
      render={({ isLoading, error, data }) => (
        <>
          {isLoading ? (
            <h3>Loading...</h3> //Replace with Skeleton Component
          ) : (
            <>
              {data.map((question, index) => (
                <Question
                  key={index}
                  question={question}
                  number={index + 1}
                  onChange={this.props.onChange}
                />
              ))}
            </>
          )}
        </>
      )}
    />
  );
}
