import React, { Fragment } from "react";
import axios from "axios";

import Question from "./Question";

export default class QuestionList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        {this.props.questions.map((question, index) => (
          <Question
            key={index}
            question={question}
            number={index + 1}
            onChange={this.props.onChange}
          />
        ))}
      </Fragment>
    );
  }
}
