import React from "react";

import classes from "./Card.module.css";

function Card() {
  return (
    <div className={classes.card}>
      <div className={classes["card__grid"]}>
        <div className={classes["card__views"]}>100K previews</div>
        <input
          className={classes["card__input"]}
          type="range"
          name="range"
          id="range-input"
          min={1}
          max={3}
          step={1}
        />
        <div className={classes["card__payment-wrapper"]}>
          <span className={classes["card__range-value"]}>$16.00</span>
          <span className={classes["card__per-month"]}>/ month</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
