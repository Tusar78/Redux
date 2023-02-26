import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/counter/actionCreator";
import Button from "./Button";
import ShowCount from "./ShowCount";

const Counter = () => {
  const count = useSelector((state) => state.value);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    return dispatch(increment());
  };

  const decrementHandler = () => {
    return dispatch(decrement());
  };
  return (
    <div className="max-w-md mx-auto mt-10 space-y-5">
      <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
        <ShowCount count={count} />
        <div className="flex space-x-3">
          <Button
            classes="bg-indigo-400 text-white px-3 py-2 rounded shadow"
            onClick={incrementHandler}
          >
            Increment
          </Button>
          <Button
            classes="bg-red-400 text-white px-3 py-2 rounded shadow"
            onClick={decrementHandler}
          >
            Decrement
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
