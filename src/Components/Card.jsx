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
    const views = document.getElementById("views");
    price.innerHTML = `$${prices[index].toFixed(2)}`;

    if (index === "0") {
      views.innerHTML = "10K pageviews";
    } else if (index === "1") {
      views.innerHTML = "50K pageviews";
    } else if (index === "2") {
      views.innerHTML = "100K pageviews";
    } else if (index === "3") {
      views.innerHTML = "500K pageviews";
    } else if (index === "4") {
      views.innerHTML = "1M pageviews";
    }
  };

  return (
    <div className={classes.card}>
      <div className={classes["card__grid"]}>
        <div id="views" className={classes["card__views"]}>
          100K pageviews
        </div>
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
