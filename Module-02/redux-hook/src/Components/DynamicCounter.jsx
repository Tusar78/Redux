import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { dynamicDecrement, dynamicIncrement } from "../redux/dynamicCounter/actionCreator";
import Button from "./Button";
import ShowCount from "./ShowCount";

const DynamicCounter = () => {
  const dynamicCount = useSelector((state) => state.dynamicCounter.value);
  const dispatch = useDispatch();

  const incrementHandler = (value) => {
    return dispatch(dynamicIncrement(value));
  };

  const decrementHandler = (value) => {
    return dispatch(dynamicDecrement(value));
  };

  return (
    <div className="max-w-md mx-auto mt-10 space-y-5">
      <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
        <ShowCount count={dynamicCount} />
        <div className="flex space-x-3">
          <Button
            classes="bg-indigo-400 text-white px-3 py-2 rounded shadow"
            onClick={() => incrementHandler(15)}
          >
            Increment
          </Button>
          <Button
            classes="bg-red-400 text-white px-3 py-2 rounded shadow"
            onClick={() => decrementHandler(7)}
          >
            Decrement
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DynamicCounter;
