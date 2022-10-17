import React, { useContext } from "react";
import InputRangeContext from "../../Contexts/inputrange-context";

import classes from "./Input-checkbox.module.css";

const prices = [8, 13, 16, 24, 36];
const discountPrice = prices.map((price) => price - (price / 100) * 25);

const InputCheckbox = () => {
  let { value, checked, setIsChecked } = useContext(InputRangeContext);

  const isCheckedHandler = (e) => {
    setIsChecked((checked = e.target.checked));
  };

  const discountChangeHandler = () => {
    const price = document.getElementById("price");

    if (!checked) {
      price.innerHTML = `$${discountPrice[value].toFixed(2)}`;
    } else {
      price.innerHTML = `$${prices[value].toFixed(2)}`;
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
