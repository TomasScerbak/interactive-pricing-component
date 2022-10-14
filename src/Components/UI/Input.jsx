import { useState } from "react";

import classes from "./Input.module.css";

const prices = [5, 16, 35];

function Input() {
  const [value, setValue] = useState({ currentIndex: 0 });

  const valueChangeHandler = (e) => {
    setValue((prev) => {
      return { ...prev, currentIndex: e.target.value };
    });
  };

  console.log(value);

  return (
    <div>
      <input
        className={classes["card__input"]}
        type="range"
        min={0}
        max={2}
        step={1}
        value={value}
        onChange={valueChangeHandler}
      />
      <div className="output">{prices[value.currentIndex]}</div>
    </div>
  );
}

export default Input;
