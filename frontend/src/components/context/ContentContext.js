import React, { createContext, useContext, useEffect, useState } from "react";

//Utility hook for data fetching and promise resolution
import { useAsync } from "react-async";

//Local components
import * as apiClient from "../home/api-home";
import { useUser } from "./UserContext";
import FullPageSpinner from "../components/FullPageSpinner";

const filterActive = arr => {
  return arr.filter(item => {
    return item.is_active === true;
  });
};

const filterByUserRole = (arr, role) => {
  return arr.filter(item => {
    return item.group.indexOf(role) !== -1;
  });
};

const getData = async () => {
  let quizzes;
  let content;

  try {
    quizzes = await apiClient.getQuizzes();
    content = await apiClient.getContent();
  } catch (e) {
    throw new Error(e);
  }
  return { quizzes, content };
};

const ContentContext = createContext();

function ContentProvider(props) {
  const { user, isAuthenticated } = useUser();

  const [content, setContent] = useState([]);
  const [quizzes, setQuizzes] = useState([]);

  const { data, error, isPending, isFulfilled, isRejected, run } = useAsync({
    deferFn: getData
  });

  useEffect(() => {
    if (isAuthenticated) {
      run();
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (isFulfilled) {
      const activeQuizzes = filterActive(data.quizzes.data);
      //const activeSlides = filterActive(data.slides.data);
      const userQuizzes = filterByUserRole(activeQuizzes, user.role);
      const userContent = filterByUserRole(data.content.data, user.role);
      setQuizzes(userQuizzes);
      setContent(userContent);
    }
  }, [isFulfilled, data, user]);

  if (isPending) {
    return <FullPageSpinner />;
  }
  if (isRejected) {
    return (
      <div>
        <pre>{error.message}</pre>
      </div>
    );
  }

  console.log(quizzes);

  return <ContentContext.Provider value={{ content, quizzes }} {...props} />;
}
function useContent() {
  const context = useContext(ContentContext);
  if (context === undefined) {
    throw new Error(`useContent must be used within a ContentProvider`);
  }
  return context;
}

export { ContentProvider, useContent };
