import React from "react";
import { connect } from "react-redux";
import { decrement, increment } from "../redux/counter/actionsCreator";

const Counter = ({ count, increment, decrement, id }) => {
  return (
    <div className="max-w-md mx-auto mt-10 space-y-5">
      <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
        <div className="text-2xl font-semibold" id="counter">
          {count}
        </div>
        <div className="flex space-x-3">
          <button
            className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
            onClick={increment}
          >
            Increment
          </button>
          <button
            className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
            onClick={decrement}
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     count: state.value,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: (value) => dispatch(increment(value)),
//     decrement: (value) => dispatch(decrement(value)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);

const mapStateToProps = (state) => {
  return {
    count: state.value,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: (value) => dispatch(increment(value)),
    decrement: (value) => dispatch(decrement(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
