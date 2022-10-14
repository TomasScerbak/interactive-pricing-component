import React from "react";

import classes from "./Card.module.css";
import Input from "./UI/Input";

const prices = [5, 16, 35];

function Card() {
  const priceChangeHandler = (index) => {
    const value = document.getElementById("price");
    value.innerHTML = `$${prices[index].toFixed(2)}`;
  };

  return (
    <div className={classes.card}>
      <div className={classes["card__grid"]}>
        <div className={classes["card__views"]}>100K previews</div>
        <Input onPriceChange={priceChangeHandler} />
        <div className={classes["card__payment-wrapper"]}>
          <span id="price" className={classes["card__range-value"]}>
            $16.00
          </span>
          <span className={classes["card__per-month"]}>/ month</span>
        </div>
        <div className={classes["billing-wrapper"]}>
          <div>Monthly Billing</div>
          <label className={classes.switch}>
            <input type="checkbox" />
            <span className={classes.slider}></span>
          </label>
          <div>Yearly Billing</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
