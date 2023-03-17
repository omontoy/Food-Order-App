import React from "react";
import classes from "./Input.module.css";

/* forwardRef is used here so that we can use refs on 'Input' component which 
is a custome component */
const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
