import React, { useState } from "react";

import classes from "./Input.module.css";

const rangeArray = [
  {
    range: 1,
    price: 5,
  },
  {
    range: 2,
    price: 16,
  },
  {
    range: 3,
    price: 30,
  },
];

function Input() {
  const [value, setValue] = useState(rangeArray[1].range);

  const valueChangeHandler = (e) => {
    e.preventDefault();
    console.log(e);
    setValue(e.target.value - 1);
  };

  return (
    <input
      className={classes["card__input"]}
      type="range"
      value={value.range}
      min={0}
      max={2}
      step={1}
      onChange={valueChangeHandler}
    />
  );
}

export default Input;
