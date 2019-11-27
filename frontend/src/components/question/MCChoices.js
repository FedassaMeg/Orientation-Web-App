import React, { useState } from "react";

// Material UI Components
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

//React-Icons Components
import { MdRadioButtonUnchecked, MdRadioButtonChecked } from "react-icons/md";

export default function MCChoices(props) {
  return (
    <FormControl component="fieldset">
      <RadioGroup
        aria-label="answer"
        name="answer"
        onChange={props.handleOnChange}
        value={null}
      >
        <FormControlLabel
          value="a"
          control={
            <Radio
              color="default"
              icon={<MdRadioButtonUnchecked fontSize="large" />}
              checkedIcon={<MdRadioButtonChecked fontSize="large" />}
            />
          }
          label={props.mcaRes.choice1}
          labelPlacement="end"
        />
        <FormControlLabel
          value="b"
          control={
            <Radio
              color="default"
              icon={<MdRadioButtonUnchecked fontSize="large" />}
              checkedIcon={<MdRadioButtonChecked fontSize="large" />}
            />
          }
          label={props.mcaRes.choice2}
          labelPlacement="end"
        />
        <FormControlLabel
          value="c"
          control={
            <Radio
              color="default"
              icon={<MdRadioButtonUnchecked fontSize="large" />}
              checkedIcon={<MdRadioButtonChecked fontSize="large" />}
            />
          }
          label={props.mcaRes.choice3}
          labelPlacement="end"
        />
        <FormControlLabel
          value="d"
          control={
            <Radio
              color="default"
              icon={<MdRadioButtonUnchecked fontSize="large" />}
              checkedIcon={<MdRadioButtonChecked fontSize="large" />}
            />
          }
          label={props.mcaRes.choice4}
          labelPlacement="end"
        />
      </RadioGroup>
    </FormControl>
  );
}
