import React, { useEffect, useState } from "react";

import axios from "axios";

//Local components
import { useContent } from "../context/ContentContext";
import { ROOT_URL } from "../utils/constants";
import Slides from "./Slides";

export default function SlidesContainer() {
  const { slides } = useContent();

  const [slidesArr, setSlidesArr] = useState([]);

  useEffect(() => {
    setSlidesArr(slides.data);
  }, [slides]);

  const handleOnClick = event => {
    const slideId = event.target.id;
    let config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`
      }
    };

    axios
      .post(
        `${ROOT_URL}/completedslides/`,
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

  return <Slides slidesArr={slidesArr} handleOnClick={handleOnClick} />;
}
