import React, { useState, useEffect } from "react";
import axios from "axios";

//Attempt to use render props for data fetching

export default function Resource(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get(props.url)
      .then(res => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error);
        setIsLoading(false);
      });
  };

  return <>{props.render({ isLoading, data, error })}</>;
}
