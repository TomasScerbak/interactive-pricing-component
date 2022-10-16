import { useState } from "react";

import classes from "./Input-range.module.css";

const InputRange = (props) => {
  const [value, setValue] = useState(1);

  const valueChangeHandler = (e) => {
    setValue(e.target.value);
    props.onPriceChange(e.target.value);
  };

  return (
    <input
      className={classes["card__input"]}
      type="range"
      min={0}
      max={2}
      step={1}
      value={value}
      onChange={valueChangeHandler}
    />
  );
};

export default InputRange;
