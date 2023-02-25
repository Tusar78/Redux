import React from "react";

const Button = ({ children, classes}) => {
  return (
    <button class={classes}>
      {children}
    </button>
  );
};

export default Button;
