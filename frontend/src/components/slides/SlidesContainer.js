import React from "react";

import axios from "axios";

//Local components
import { ROOT_URL } from "../utils/constants";
import Slides from "./Slides";

export default function SlidesContainer() {
  const handleOnClick = event => {
    const contentId = event.target.id;

    let config = {
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

  return <Slides handleOnClick={handleOnClick} />;
}
