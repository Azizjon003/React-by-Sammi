import { useState } from "react";

const useInputValidation = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const validateInput = () => {
    return value.search(/\d/) >= 0;
  };

  const color = validateInput() ? "text-danger" : null;

  return { value, onChange, color };
};

export default useInputValidation;
