import React, { useState, useEffect } from "react";

import EditQuestion from "./EditQuestion";
import EditQuestionList from "./EditQuestionList";
export default function EditQuestionContainer(props) {
  const [qstArr, setQstArr] = useState([]);
  const [index, setIndex] = useState(0);
  const [input, setInput] = useState(new Map());
  const [ansInput, setAnsInput] = useState([]);
  const [qtsInput, setQtsInput] = useState([]);

  useEffect(() => {
    let added = [];
    props.data.map((question, index) => {
      added.push({
        id: question.id,
        question: question.question
      });
    });
    setQtsInput(added);
    const arrTemp = [];
    props.data.map((question, index) => {
      arrTemp.push(
        <EditQuestion
          key={index}
          id={index + 1}
          value={question.question}
          question={question}
          handleChange={handleChange}
        />
      );
    });
    setQstArr(arrTemp);
    console.log(qtsInput);
  }, []);

  const next = () => {
    if (index < qstArr.length) {
      setIndex(index + 1);
    } else {
      alert("end");
    }
  };
  const handleChange = event => {
    const newMap = input;
    const key = parseInt(event.target.id, 10);
    let elm = input.get(key);
    let qst;
    let isOn;
    if (event.target.name) {
      isOn = true;
    } else {
      isOn = false;
    }
    if (event.target.type === "text") {
      elm.question = event.target.value;
      elm.answer = isOn;
      // newMap.set(key, elm);
      newMap.set(key, elm);
      setInput(newMap);
      console.log(newMap);
    } else if (event.target.type === "radio");
    {
      // elm.question = qst;
      elm.answer = isOn;
      // newMap.set(key, elm);
      // setInput(newMap);
      console.log(elm);
    }
  };

  return (
    <EditQuestionList
      index={index}
      qstArr={qstArr}
      next={next}
      handleOnClick={props.handleOnClick}
    />
  );
}
