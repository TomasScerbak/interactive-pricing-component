import React, { useState } from "react";

import classes from "./Input.module.css";

const rangeArray = [
  {
    range: 0,
    price: 5,
  },
  {
    range: 1,
    price: 16,
  },
  {
    range: 2,
    price: 30,
  },
];

function Input() {
  const [value, setValue] = useState(rangeArray[1].range);

  const valueChangeHandler = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  return (
    <input
      className={classes["card__input"]}
      type="range"
      value={value.price}
      min={0}
      max={2}
      step={1}
      onChange={valueChangeHandler}
    />
  );
}

export default Input;
