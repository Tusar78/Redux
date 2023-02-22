import React, { useState } from "react";
import Counter from "./components/Counter";

const App = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    return setCount((prevCount) => prevCount + 1);
  }
  const decrement = () => {
    return setCount((prevCount) => prevCount - 1);
  }
  return (
    <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
      <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
        Simple Counter Application
      </h1>
      <Counter count={count} increment={increment} decrement={decrement} />
    </div>
  );
};

export default App;
