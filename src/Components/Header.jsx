import React from "react";
import DecorCircles from "../Assets/pattern-circles.svg";

import classes from "./Header.module.css";

function Header() {
  return (
    <header>
      <h1 className={classes["header__title"]}>
        Simple, traffic-based pricing
      </h1>
      <div className={classes["header__text-wrapper"]}>
        <p className={classes["header__text"]}>Sing-up for our 30-day trial.</p>
        <p className={classes["header__text"]}>No credit card required.</p>
      </div>
      <img className={classes["header__image"]} src={DecorCircles} alt="#" />
    </header>
  );
}

export default Header;
