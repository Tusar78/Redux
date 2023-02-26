import React from "react";

const Button = ({ children, classes, ...rest}) => {
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
};

export default Button;
