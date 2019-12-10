import React, { useEffect } from "react";

// Material UI Components
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

//React-Icons Components
import { MdRadioButtonUnchecked, MdRadioButtonChecked } from "react-icons/md";

export default function MCChoices(props) {
  let initialValue;

  useEffect(() => {
    let initialValue = null;
  }, [props.activeIndex]);

  return (
    <FormControl component="fieldset">
      <RadioGroup
        aria-label="answer"
        name="answer"
        onChange={props.handleOnChange}
        value={initialValue}
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
          label={props.qstChoices[0].choice}
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
          label={props.qstChoices[1].choice}
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
          label={props.qstChoices[2].choice}
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
          label={props.qstChoices[3].choice}
          labelPlacement="end"
        />
      </RadioGroup>
    </FormControl>
  );
}
