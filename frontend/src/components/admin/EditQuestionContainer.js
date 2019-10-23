import React, { useState, useEffect } from "react";

import EditQuestion from "./EditQuestion";
import EditQuestionList from "./EditQuestionList";
export default function EditQuestionContainer(props) {
  const [qstArr, setQstArr] = useState([]);
  const [index, setIndex] = useState(0);
  const [input, setInput] = useState(new Map());
  const [ans, setAns] = useState([]);
  const [qtsInput, setQtsInput] = useState({});

  useEffect(() => {
    const arrTemp = [];
    const vlsArr = [];
    props.data.map((question, index) => {
      // const value = values[index];
      arrTemp.push(
        <EditQuestion
          key={index}
          id={index + 1}
          value={qtsInput}
          question={question}
          handleChange={handleChange}
        />
      );
    });
    props.data.map(question => {
      setInput(
        input.set(question.id, { question: question.question, answer: false })
      );
    });
    setQstArr(arrTemp);
    console.log(input);
  }, []);

  const next = () => {
    if (index < qstArr.length) {
      setIndex(index + 1);
    } else {
      alert("end");
    }
  };

  const handleChange = event => {
    if (event.target.type === "text") {
      setQtsInput({ ...qtsInput, [event.target.key]: event.target.value });
      console.log(qtsInput);
    }

    // const key = parseInt(event.target.id, 10);
    // const qst = event.target.value;
    // let isOn;
    // if (event.target.name) {
    //   isOn = true;
    // } else {
    //   isOn = false;
    // }
    // const newMap = input.set(key, { question: qst, answer: isOn });
    // setInput(newMap);
    // console.log(newMap);
    // const elm = input.set(key, {answer: true});
    // setValue({ value: event.target.value });
  };

  return <EditQuestionList index={index} qstArr={qstArr} next={next} />;
}
