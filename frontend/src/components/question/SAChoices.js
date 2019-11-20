import React, { useState } from "react";

// Material UI Components
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";

//React-Icons Components
import { MdRadioButtonUnchecked, MdRadioButtonChecked } from "react-icons/md";

export default function SAChoices() {
  const [state, setState] = useState();
  const handleOnChange = event => {
    const choice = event.target.value;
    setState(choice);
    console.log(state);
  };
  return (
    <FormControl fullWidth component="fieldset">
      <Input id="answer" onChange={handleOnChange} multiline />
    </FormControl>
  );
}
