import React, { useState, useEffect } from "react";

import { useAsync } from "react-async";

import axios from "axios";

import { assign } from "lodash";

//Local components
import * as apiClient from "./api-home";
import { ROOT_URL } from "../utils/constants";
import { useContent } from "../context/ContentContext";
import { useUser } from "../context/UserContext";
import Dashboard from "./Dashboard";

//Function to filter array by module number
const filterByModule = (arr, module) => {
  return arr.filter(item => {
    return item.module === module;
  });
};

//Function to calculate the percentage of two given numbers
const calculatePercentage = (num1, num2) => {
  let newPercentage;
  if (num2 === 0) {
    newPercentage = "Not Applicable";
  } else {
    newPercentage = Math.round((num1 / num2) * 100);
  }
  return newPercentage;
};

//Function to determine the sum of content and quizzes in an arr
//Helper function for calculatePercentage
const sumTotal = arr => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total++;
    if (arr[i].quiz) {
      total++;
    }
  }
  return total;
};

//Function to determine the sum of completed content and quizzes in an arr
//Helper function for calculatePercentage
const sumCompleted = arr => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].is_content_completed) {
      total++;
    }
    if (arr[i].is_quiz_completed) {
      total++;
    }
  }
  return total;
};

//Async API call to get completed content and quizzes
const getData = async ({ user_id }) => {
  let completedQuizzes;
  let completedContent;
  try {
    completedQuizzes = await apiClient.getCompletedQuizzes(user_id);
    completedContent = await apiClient.getCompletedContent(user_id);
  } catch (e) {
    throw new Error(e);
  }
  return { completedQuizzes, completedContent };
};

export default function DashboardContainer() {
  const { content, quizzes, modules } = useContent();

  const { user } = useUser();
  const user_id = user.id;

  console.log(modules);

  const initialStateMd = {
    md1: [],
    md2: [],
    md3: [],
    md4: [],
    md5: [],
    md6: [],
    md7: [],
    md8: [],
    md9: []
  };

  const initialStatePrc = {
    prc1: [],
    prc2: [],
    prc3: [],
    prc4: [],
    prc5: [],
    prc6: [],
    prc7: [],
    prc8: [],
    prc9: []
  };

  const [contentPerModules, setContentPerModules] = useState(initialStateMd);
  const [percentagePerModules, setPercentagePerModules] = useState(
    initialStatePrc
  );
  const [completedArray, setCompletedArray] = useState([]);
  const [completedContentArray, setCompletedContentArray] = useState([]);
  const [completedQuizzesArray, setCompletedQuizzesArray] = useState([]);
  const [toggle, setToggle] = useState(false);

  const { data, error, isSettled, isPending, isRejected } = useAsync({
    watch: toggle,
    promiseFn: getData,
    user_id
  });

  useEffect(() => {
    if (isSettled) {
      setCompletedQuizzesArray(data.completedQuizzes.data);
    }
  }, [isSettled]);

  useEffect(() => {
    if (isSettled) {
      setCompletedContentArray(data.completedContent.data);
    }
  }, [isSettled, data]);

  useEffect(() => {
    const combinedArr = content
      .filter(item => {
        return quizzes.filter(quiz => {
          return item.id === quiz.content.id && assign(item, { quiz: quiz });
        });
      })
      .filter(item => {
        return completedQuizzesArray.filter(quiz => {
          return (
            item.id === quiz.related_quiz.content.id &&
            assign(item, { is_quiz_completed: quiz.is_completed })
          );
        });
      })
      .filter(item => {
        return completedContentArray.filter(content => {
          return (
            item.id === content.content &&
            assign(item, { is_content_completed: content.is_completed })
          );
        });
      });

    setCompletedArray(combinedArr);
  }, [content, quizzes, completedQuizzesArray, completedContentArray]);

  useEffect(() => {
    const md1Arr = filterByModule(completedArray, 1);
    const md2Arr = filterByModule(completedArray, 2);
    const md3Arr = filterByModule(completedArray, 3);
    const md4Arr = filterByModule(completedArray, 4);
    const md5Arr = filterByModule(completedArray, 5);
    const md6Arr = filterByModule(completedArray, 6);
    const md7Arr = filterByModule(completedArray, 7);
    const md8Arr = filterByModule(completedArray, 8);
    const md9Arr = filterByModule(completedArray, 9);

    const percentage1 = calculatePercentage(
      sumCompleted(md1Arr),
      sumTotal(md1Arr)
    );
    const percentage2 = calculatePercentage(
      sumCompleted(md2Arr),
      sumTotal(md2Arr)
    );
    const percentage3 = calculatePercentage(
      sumCompleted(md3Arr),
      sumTotal(md3Arr)
    );
    const percentage4 = calculatePercentage(
      sumCompleted(md4Arr),
      sumTotal(md4Arr)
    );
    const percentage5 = calculatePercentage(
      sumCompleted(md5Arr),
      sumTotal(md5Arr)
    );
    const percentage6 = calculatePercentage(
      sumCompleted(md6Arr),
      sumTotal(md6Arr)
    );
    const percentage7 = calculatePercentage(
      sumCompleted(md7Arr),
      sumTotal(md7Arr)
    );
    const percentage8 = calculatePercentage(
      sumCompleted(md8Arr),
      sumTotal(md8Arr)
    );
    const percentage9 = calculatePercentage(
      sumCompleted(md9Arr),
      sumTotal(md9Arr)
    );

    setContentPerModules({
      md1: md1Arr,
      md2: md2Arr,
      md3: md3Arr,
      md4: md4Arr,
      md5: md5Arr,
      md6: md6Arr,
      md7: md7Arr,
      md8: md8Arr,
      md9: md9Arr
    });

    setPercentagePerModules({
      prc1: percentage1,
      prc2: percentage2,
      prc3: percentage3,
      prc4: percentage4,
      prc5: percentage5,
      prc6: percentage6,
      prc7: percentage7,
      prc8: percentage8,
      prc9: percentage9
    });
  }, [completedArray]);

  //Handle api post request for slide links that have been clicked on
  const handleOnClick = event => {
    setToggle(!toggle);

    const contentId = event.target.id;

    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`
      }
    };

    axios
      .post(
        `${ROOT_URL}/completedcontent/`,
        {
          content: contentId,
          is_completed: true,
          is_active: true
        },
        config
      )
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <Dashboard
      contentPerModules={contentPerModules}
      percentagePerModules={percentagePerModules}
      handleOnClick={handleOnClick}
    />
  );
}
