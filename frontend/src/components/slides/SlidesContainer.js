import React, { useEffect, useState } from "react";

import axios from "axios";

import { ROOT_URL } from "../utils/constants";
import Slides from "./Slides";

const mdn = [
  {
    id: 1,
    title: "Module 1",
    subtitle: "Introduction to First Call"
  },
  { id: 3, title: "Module 3", subtitle: "Electronic Medical Record" },
  { id: 4, title: "Module 4", subtitle: "Introduction to Hospice" },
  { id: 5, title: "Module 5", subtitle: "Documentation" },
  { id: 6, title: "Module 6", subtitle: "Documenting Decline" },
  { id: 7, title: "Module 7", subtitle: "Symptom Management" },
  { id: 8, title: "Module 8", subtitle: "Plan of Care" },
  { id: 9, title: "Module 9", subtitle: "On Call is a Partnership" }
];

export default function SlidesContainer() {
  const [slidesArr, setSlidesArr] = useState([]);

  // Runs on component mount
  useEffect(() => {
    getSlides();
  }, []);

  const getSlides = () => {
    axios
      .get(`${ROOT_URL}/slides/`)
      .then(res => {
        setSlidesArr(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleOnClick = event => {
    const slideId = event.target.id;
    let config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`
      }
    };

    axios
      .post(
        `${ROOT_URL}/lookuptableslideusers/`,
        {
          slide: slideId,
          completed: true
        },
        config
      )
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <Slides slidesArr={slidesArr} handleOnClick={handleOnClick} mdn={mdn} />
  );
}
