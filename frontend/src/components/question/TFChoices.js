// Presentation to display ui for user input/answer [ 'Routes' based on question type(t/f, multiple choice, general)]
// Consumes contain state to handle ui interaction

import React, { useState } from "react";

// Material UI Components
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

//React-Icons Components
import { MdRadioButtonUnchecked, MdRadioButtonChecked } from "react-icons/md";

export default function TFChoices(props) {
  let value;

  return (
    <FormControl component="fieldset">
      <RadioGroup
        aria-label="answer"
        name="answer"
        onChange={props.handleOnChange}
        value={value}
        row
      >
        <FormControlLabel
          value="true"
          control={
            <Radio
              color="default"
              icon={<MdRadioButtonUnchecked fontSize="large" />}
              checkedIcon={<MdRadioButtonChecked fontSize="large" />}
            />
          }
          label="True"
          labelPlacement="end"
        />
        <FormControlLabel
          value="false"
          control={
            <Radio
              color="default"
              icon={<MdRadioButtonUnchecked fontSize="large" />}
              checkedIcon={<MdRadioButtonChecked fontSize="large" />}
            />
          }
          label="False"
          labelPlacement="end"
        />
      </RadioGroup>
    </FormControl>
  );
}
