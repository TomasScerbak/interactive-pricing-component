import React, { useState } from "react";

import classes from "./Input-checkbox.module.css";

const prices = [8, 13, 16, 24, 36];
const discountPrice = prices.map((price) => price - (price / 100) * 25);

const InputCheckbox = () => {
  const [checked, setIsChecked] = useState(true);

  const isCheckedHandler = () => {
    setIsChecked((prev) => (prev ? false : true));
  };

  const discountChangeHandler = () => {
    const price = document.getElementById("price");

    if (price.innerHTML === "$8.00" && checked === true) {
      price.innerHTML = `$${discountPrice[0].toFixed(2)}`;
    } else if (price.innerHTML === "$13.00" && checked === true) {
      price.innerHTML = `$${discountPrice[1].toFixed(2)}`;
    } else if (price.innerHTML === "$16.00" && checked === true) {
      price.innerHTML = `$${discountPrice[2].toFixed(2)}`;
    } else if (price.innerHTML === "$24.00" && checked === true) {
      price.innerHTML = `$${discountPrice[3].toFixed(2)}`;
    } else if (price.innerHTML === "$36.00" && checked === true) {
      price.innerHTML = `$${discountPrice[4].toFixed(2)}`;
    }
  };

  return (
    <label className={classes.switch}>
      <input
        onChange={isCheckedHandler}
        onClick={discountChangeHandler}
        type="checkbox"
      />
      <span className={classes.slider}></span>
    </label>
  );
};

export default InputCheckbox;
