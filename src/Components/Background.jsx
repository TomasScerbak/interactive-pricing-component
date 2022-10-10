import React from "react";
import background from "../Assets/bg-pattern.svg";

import classes from "./Background.module.css";

function Background() {
  return <img className={classes.background} src={background} alt="#" />;
}

export default Background;
