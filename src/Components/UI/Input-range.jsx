import { useState } from "react";

import classes from "./Input-range.module.css";

const InputRange = (props) => {
  const [value, setValue] = useState(2);

  const valueChangeHandler = (e) => {
    setValue(e.target.value);
    props.onPriceChange(e.target.value);
  };

  return (
    <input
      className={classes["card__input"]}
      type="range"
      min={0}
      max={4}
      step={1}
      value={value}
      onChange={valueChangeHandler}
    />
  );
};

export default InputRange;
