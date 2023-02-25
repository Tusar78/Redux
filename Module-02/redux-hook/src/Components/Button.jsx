import React from "react";

const Button = ({ children, classes}) => {
  return (
    <button className={classes}>
      {children}
    </button>
  );
};

export default Button;
