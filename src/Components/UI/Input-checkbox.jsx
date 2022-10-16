import React from "react";

import classes from "./Input-checkbox.module.css";

const InputCheckbox = () => {
  return (
    <label className={classes.switch}>
      <input type="checkbox" />
      <span className={classes.slider}></span>
    </label>
  );
};

export default InputCheckbox;
