import React, { createContext, useContext, useEffect, useState } from "react";

import { useAsync } from "react-async";

import * as apiClient from "../quiz/api-call-quiz";
import { useUser } from "../context/UserContext";

const QuizzesContext = createContext();

function QuizzesProvider(props) {
  const [qzs, setQzs] = useState({});
  console.log("Quizzes Context Rendered");
  useEffect(() => {
    console.log("Quizzes Context API call made");
    apiClient.getQuizzes().then(res => setQzs(res.data));
  }, []);

  // Default value for Anonymous User [Fixes null error with Navigation Component]
  if (qzs === null) {
    qzs = [{ url_value: "defaultValue" }];
  }

  // const { data, error, isRejected, isPending, isSettled, reload } = useAsync({
  //   promiseFn: quizzes
  // });

  // const { user } = useUser();

  return <QuizzesContext.Provider value={qzs} {...props} />;
}

function useQuizzes() {
  const context = useContext(QuizzesContext);
  if (context === undefined) {
    throw new Error("useQuizzes must be used within a QuizzesProvider");
  }
  return context;
}

export { QuizzesProvider, useQuizzes };
