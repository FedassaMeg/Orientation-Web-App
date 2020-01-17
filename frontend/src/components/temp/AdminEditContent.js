import React, { useState, useEffect } from "react";
import axios from "axios";
import EditContent from "../admin/EditContent";

import { ROOT_URL } from "../utils/constants";

export default function AdminEditContent(props) {
  const [quizArray, setQuizArray] = useState([]);
  useEffect(() => {
    getQuizzes();
  }, []);

  const getQuizzes = () => {
    axios
      .get(`${ROOT_URL}/quizs/`)
      .then(res => {
        setQuizArray(res.data);
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  // handleSubmit = event => {
  //     event.preventDefault();
  //     let config = {
  //         headers: {
  //             Authorization: `Bearer ${localStorage.getItem("token")}`
  //         }
  //     },
  //     // axios
  //     //     .post()
  // }
  return (
    <div>
      <EditContent qzArr={quizArray} />
    </div>
  );
}
