import React from "react";
import { connect } from "react-redux";
import Button from "./Button";
import Count from "./Count";

const Counter = ({count}) => {
  return (
    <div className="max-w-md mx-auto mt-10 space-y-5">
      <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
        <Count count={count} />
        <div className="flex space-x-3">
          <Button>Increment</Button>
          <Button>Decrement</Button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.value
  }
}

const mapDispatchToProps = () => {
  return {
    hi: 'hello'
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);