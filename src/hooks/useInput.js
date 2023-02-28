import { useState } from "react";
//import { ONLY_NUMBER_REGEX } from '../modules/InteractiveCard/utils/validations';

export const ONLY_NUMBER_REGEX = /^[0-9 ]+$/;

const useInput = ({ evals, initialValue }) => {
  const [hasError, setHasError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [value, setValue] = useState(initialValue);

  const handleChange = (event) => {
    console.log({ evals, event });
    if (evals?.max && event.target.value.length > evals.max) return;

    setValue(event.target.value);
    setHasError(false);

    if (evals?.type === "number") {
      const validation = ONLY_NUMBER_REGEX.test(event.target.value);
      setHasError(!validation);
      setErrorMsg("Wrong format, numbers only");
    }

    if (!event.target.value) {
      setHasError(true);
      setErrorMsg("Can't be blank");
    }
  };

  const reset = () => {
    setValue("");
  };

  return {
    value,
    onChange: handleChange,
    reset,
    errorMsg,
    hasError,
  };
};

export default useInput;
