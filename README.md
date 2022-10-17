# Frontend Mentor - Interactive pricing component solution

This is a solution to the [Interactive pricing component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-pricing-component-t0m8PIyY8). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Use the slider and toggle to see prices for different page view numbers

### Links

- Solution URL: [Add solution URL here](https://github.com/TomasScerbak/interactive-pricing-component.git)
- Live Site URL: [Add live site URL here](https://scintillating-fudge-ad9b1a.netlify.app)

## My process

### Built with

- Semantic HTML5 markup
- CSS modules
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

I've learned how to pass data from child to parent component via technique called "lifting state up", but since I've managed more states across multiple components I've refactored this challange to use useContext Hook.

I also learned how to create custom styled input but still persists semantic input element.

```js
import React from "react";

const InputRangeContext = React.createContext({});

export default InputRangeContext;
```

```js
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
```

```js
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
```

## Author

- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/TomasScerbak)
