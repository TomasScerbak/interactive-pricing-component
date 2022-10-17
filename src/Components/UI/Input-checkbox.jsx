import React from "react";

import classes from "./Input-checkbox.module.css";

const InputCheckbox = () => {
  const asdf = (e) => {
    console.log(e);
  };

  return (
    <label className={classes.switch}>
      <input onChange={asdf} type="checkbox" />
      <span className={classes.slider}></span>
    </label>
  );
};

export default InputCheckbox;
