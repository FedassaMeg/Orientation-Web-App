import React, {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useState
} from "react";

//Utility hook for data fetching and promise resolution
import { useAsync } from "react-async";

//Local components
import * as apiClient from "./api-call-quiz";
import { bootstrapData } from "./bootstrap-quiz-data";

// Async wrapper function for api calls
const getData = async () => {
  let quizzes;
  try {
    quizzes = await apiClient.getQuizzes();
  } catch (e) {
    throw new Error(e);
  }
  return { quizzes };
};

const QuizContext = createContext();

function QuizProvider(props) {
  const quizUrl = props.match.params.id;

  let quizId;

  const [firstAttemptFinished, setFirstAttemptFinished] = useState(false);
  const [quizzes, setQuizzes] = useState([]);
  const [quiz, setQuiz] = useState({});

  const getQuizzesState = useAsync({
    promiseFn: getData
  });

  const getQuizState = useAsync({
    deferFn: bootstrapData,
    quizId
  });

  useLayoutEffect(() => {
    console.log("useLayoutEffect started");
    if (getQuizzesState.isSettled) {
      setFirstAttemptFinished(true);
      setQuizzes(getQuizzesState.data.quizzes.data);
    }
  }, [getQuizzesState.isSettled]);

  useEffect(() => {
    if (getQuizzesState.isFulfilled) {
      const currQuiz = getQuizzesState.data.quizzes.data.filter(item => {
        return item.url_value === quizUrl;
      });
      setQuiz(currQuiz[0]);
      fetchQuestion(currQuiz[0].id);
    }
  }, [getQuizzesState.isFulfilled]);

  if (!firstAttemptFinished) {
    if (getQuizzesState.isPending) {
      return <h3>Loading...</h3>;
    }
    if (getQuizzesState.isRejected) {
      return (
        <div>
          <pre>{getQuizzesState.error.message}</pre>
        </div>
      );
    }
  }

  const fetchQuestion = id => {
    if (getQuizzesState.isFulfilled) {
      getQuizState.run(id);
    }
  };

  if (getQuizState.isFulfilled) {
    const { data } = getQuizState;
    return (
      <QuizContext.Provider value={{ data }} {...props}>
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
