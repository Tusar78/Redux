import React from "react";

const ShowCount = ({count}) => {
  return (
    <span className="inline-block text-2xl font-semibold" id="counter">{count}</span>
  );
};

export default ShowCount;
