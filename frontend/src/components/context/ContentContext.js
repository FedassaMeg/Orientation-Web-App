import React, { createContext, useContext } from "react";

//Utility hook for data fetching and promise resolution
import { useAsync } from "react-async";

//Local components
import * as apiClient from "../home/api-home";
import { useUser } from "./UserContext";

const getData = async () => {
  let quizzes;
  let slides;

  try {
    quizzes = await apiClient.getQuizzes();
    slides = await apiClient.getSlides();
  } catch (e) {
    throw new Error(e);
  }
  return { quizzes, slides };
};

const ContentContext = createContext();

function ContentProvider(props) {
  const { user } = useUser();

  const { data, error, isPending, isRejected } = useAsync({
    promiseFn: getData
  });

  if (isPending) {
    return null;
  }
  if (isRejected) {
    return (
      <div>
        <pre>{error.message}</pre>
      </div>
    );
  }
  return <ContentContext.Provider value={data} {...props} />;
}

function useContent() {
  const context = useContext(ContentContext);
  if (context === undefined) {
    throw new Error(`useContent must be used within a ContentProvider`);
  }
  return context;
}

export { ContentProvider, useContent };
