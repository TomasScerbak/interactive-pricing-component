import React, { useState } from "react";

import classes from "./Card.module.css";
import InputRange from "./UI/Input-range";
import InputCheckbox from "./UI/Input-checkbox";
import CheckIcon from "../Assets/icon-check.svg";
import Button from "./UI/Button";
import InputRangeContext from "../Contexts/inputrange-context";

const prices = [8, 13, 16, 24, 36];

const Card = () => {
  const [value, setValue] = useState(2);
  const [checked, setIsChecked] = useState(false);

  return (
    <InputRangeContext.Provider
      value={{
        checked: checked,
        value: value,
        setValue,
        setIsChecked,
      }}
    >
      <div className={classes.card}>
        <div className={classes["card__grid"]}>
          <div id="views" className={classes["card__views"]}>
            100K pageviews
          </div>
          <InputRange />
          <div className={classes["card__payment-wrapper"]}>
            <span id="price" className={classes["card__range-value"]}>
              {`$${prices[value].toFixed(2)}`}
            </span>
            <span className={classes["card__per-month"]}>/ month</span>
          </div>
        </div>
        <div className={classes["billing-wrapper"]}>
          <span className={classes.month}>Monthly Billing</span>
          <InputCheckbox />
          <span className={classes.year}>Yearly Billing</span>
          <div className={classes.discount}>-25% discount</div>
        </div>
        <div className={classes.line}></div>
        <div className={classes["card-footer"]}>
          <ul>
            <li className={classes["list-item"]}>
              <img className={classes["check-icon"]} src={CheckIcon} alt="#" />
              <p className={classes["list__text"]}>Unlimited Websites</p>
            </li>
            <li className={classes["list-item"]}>
              <img className={classes["check-icon"]} src={CheckIcon} alt="#" />
              <p className={classes["list__text"]}>100% data ownership</p>
            </li>
            <li className={classes["list-item"]}>
              <img className={classes["check-icon"]} src={CheckIcon} alt="#" />
              <p className={classes["list__text"]}>Email reports</p>
            </li>
          </ul>
          <Button />
        </div>
      </div>
    </InputRangeContext.Provider>
  );
};

export default Card;
