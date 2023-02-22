import React from "react";
import Button from "./Button";
import Count from "./Count";

const Counter = ({count, increment, decrement}) => {
  return (
    <div className="max-w-md mx-auto mt-10 space-y-5">
      <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
        <Count count={count} />
        <div className="flex space-x-3">
          <Button handler={increment}>Increment</Button>
          <Button handler={decrement}>Decrement</Button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
