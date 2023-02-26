import React from "react";
import { connect } from "react-redux";
import { decrement, increment } from "../redux/counter/actionCreator";
import { dynamicDecrement, dynamicIncrement } from "../redux/dynamicCounter/actionCreator";
import Button from "./Button";
import ShowCount from "./ShowCount";

const ConnectCounter = ({ count, incrementHandler, decrementHandler }) => {
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

const mapStateToProps = (state, ownProps) => {
  return {
    count: ownProps.dynamic ? state.dynamicCounter.value : state.counter.value,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    incrementHandler: ownProps.dynamic ? () => dispatch(dynamicIncrement(10)) : () => dispatch(increment()),
    decrementHandler: ownProps.dynamic ? () => dispatch(dynamicDecrement(5)) : () => dispatch(decrement()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ConnectCounter);
