import React, { createContext, useContext, useEffect } from "react";

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

  const { data, error, isPending, isRejected, isInitial, run } = useAsync({
    deferFn: bootstrapData,
    quizId
  });

  useEffect(() => {
    if (quizzes.length > 0) {
      const currQuiz = quizzes.filter(item => {
        return item.url_value === quizUrl;
      });
      run(currQuiz[0].id);
    }
  }, [quizzes, quizUrl]);

  if (isPending) return null;
  if (isRejected) return <pre>{error.message}</pre>;
  if (data) {
    return (
      <QuizContext.Provider value={data} {...props}>
        {props.children}
      </QuizContext.Provider>
    );
  }
  return null;
}

function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error(`useQuiz must be used within a QuizProvider`);
  }
  return context;
}

export { QuizProvider, useQuiz };
