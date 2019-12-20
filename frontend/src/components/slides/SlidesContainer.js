//TODO: Add module model on the backend and get data from the database

import React, { useEffect, useState } from "react";

import { useAsync } from "react-async";

import axios from "axios";

//Local components
import * as apiClient from "./api-slides";
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

const getData = async () => {
  let slides;
  try {
    slides = await apiClient.getSlides();
  } catch (e) {
    throw new Error(e);
  }
  return { slides };
};

export default function SlidesContainer() {
  const [slidesArr, setSlidesArr] = useState([]);

  const { data, error, isPending, isSettled, isFulfilled } = useAsync({
    promiseFn: getData
  });

  useEffect(() => {
    if (isSettled) {
      setSlidesArr(data.slides.data);
    }
  }, [isSettled]);

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
      .catch(err => {
        console.log(err);
      });
  };

  if (isPending) return null;
  if (error) return null;
  if (isFulfilled) {
    return (
      <Slides slidesArr={slidesArr} handleOnClick={handleOnClick} mdn={mdn} />
    );
  }
  return null;
}
