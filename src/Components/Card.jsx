import React from "react";

import classes from "./Card.module.css";
import InputRange from "./UI/Input-range";
import InputCheckbox from "./UI/Input-checkbox";
import CheckIcon from "../Assets/icon-check.svg";
import Button from "./UI/Button";

const prices = [8, 13, 16, 24, 36];

const Card = () => {
  const priceChangeHandler = (index) => {
    const price = document.getElementById("price");
    price.innerHTML = `$${prices[index].toFixed(2)}`;
  };

  return (
    <div className={classes.card}>
      <div className={classes["card__grid"]}>
        <div className={classes["card__views"]}>100K previews</div>
        <InputRange onPriceChange={priceChangeHandler} />
        <div className={classes["card__payment-wrapper"]}>
          <span id="price" className={classes["card__range-value"]}>
            $16.00
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
  );
};

export default Card;
