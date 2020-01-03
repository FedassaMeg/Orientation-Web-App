import React, { createContext, useContext } from "react";

//Utility hook for data fetching and promise resolution
import { useAsync } from "react-async";

//Local components
import { useContent } from "../context/ContentContext";
import { bootstrapData } from "./bootstrap-quiz-data";

const QuizContext = createContext();

function QuizProvider(props) {
  const { quizzes } = useContent();

  const quizUrl = props.match.params.id;

  let quizId;

  const { data, isSettled, isPending, isRejected, run } = useAsync({
    deferFn: bootstrapData,
    quizId
  });

  const fetchQuestion = id => {
    run(id);
  };

  const currQuiz = quizzes.data.filter(item => {
    return item.url_value === quizUrl;
  });

  fetchQuestion(currQuiz[0].id);

  return (
    <QuizContext.Provider value={data} {...props}>
      {props.children}
    </QuizContext.Provider>
  );
}

function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error(`useQuiz must be used within a QuizProvider`);
  }
  return context;
}

export { QuizProvider, useQuiz };
