import React from "react";

import classes from "./Input.module.css";

function Input() {
  return (
    <input
      className={classes["card__input"]}
      type="range"
      min={1}
      max={3}
      step={1}
    />
  );
}

export default Input;
