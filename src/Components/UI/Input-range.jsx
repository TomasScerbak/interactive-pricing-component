import { useContext } from "react";
import InputRangeContext from "../../Contexts/inputrange-context";

import classes from "./Input-range.module.css";

const InputRange = () => {
  let { value, setValue } = useContext(InputRangeContext);

  const valueChangeHandler = (e) => {
    const views = document.getElementById("views");
    setValue((value = e.target.value));

    if (value === "0") {
      views.innerHTML = "10K pageviews";
    } else if (value === "1") {
      views.innerHTML = "50K pageviews";
    } else if (value === "2") {
      views.innerHTML = "100K pageviews";
    } else if (value === "3") {
      views.innerHTML = "500K pageviews";
    } else if (value === "4") {
      views.innerHTML = "1M pageviews";
    }
  };

  return (
    <input
      className={classes["card__input"]}
      type="range"
      min={0}
      max={4}
      step={1}
      value={value}
      onChange={valueChangeHandler}
    />
  );
};

export default InputRange;
