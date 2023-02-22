import React from "react";

const Stats = ({ count }) => {
  return (
    <div className="max-w-md mx-auto mt-10 space-y-5">
      <div className="p-4 h-28 flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
        <div className="text-2xl font-semibold" id="counter">
          Total Count: <span className="text-blue-400 font-bold">{count}</span>
        </div>
      </div>
    </div>
  );
};

export default Stats;
