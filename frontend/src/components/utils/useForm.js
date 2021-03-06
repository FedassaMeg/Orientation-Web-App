import { useState, useEffect, useCallback } from "react";

const useForm = (stateSchema, validationSchema = {}, callback) => {
  const [state, setState] = useState(stateSchema);
  const [formErrors, setFormErrors] = useState(stateSchema);
  const [isDirty, setIsDirty] = useState(false);
  const [disable, setDisable] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setDisable(true);
  }, []);

  useEffect(() => {
    if (isDirty) {
      setDisable(validateState());
    }
  }, [state, isDirty]);

  const validateState = useCallback(() => {
    const hasErrorInState = Object.keys(validationSchema).some(key => {
      const isInputFieldRequired = validationSchema[key].required;
      const stateValue = state[key];
      const inputError = formErrors[key];
      return (isInputFieldRequired && !stateValue) || inputError;
    });
    return hasErrorInState;
  }, [state, validationSchema]);

  const handleOnChange = useCallback(
    event => {
      setIsDirty(true);
      const name = event.target.name;
      const value = event.target.value;
      let error = "";
      if (validationSchema[name].required) {
        if (!value) {
          error = "This is a required field.";
        }
      }
      if (
        validationSchema[name].validator !== null &&
        typeof validationSchema[name].validator === "object"
      ) {
        if (value && validationSchema[name].validator.regEx === "") {
          if (value.length < 6) {
            error = validationSchema[name].validator.error;
          }
        } else if (
          value &&
          !validationSchema[name].validator.regEx.test(value)
        ) {
          error = validationSchema[name].validator.error;
        }
      }
      setState(prevState => ({
        ...prevState,
        [name]: value
      }));
      setFormErrors(prevState => ({
        ...prevState,
        [name]: error
      }));
    },
    [validationSchema]
  );

  const handleOnSubmit = useCallback(
    event => {
      event.preventDefault();
      if (!validateState()) {
        callback(state);
      }
      setIsSubmitted(true);
    },
    [state]
  );

  return {
    state,
    disable,
    formErrors,
    isSubmitted,
    handleOnChange,
    handleOnSubmit
  };
};
export default useForm;
