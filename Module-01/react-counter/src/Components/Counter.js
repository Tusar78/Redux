import React from "react";

const Counter = () => {
  return (
    <div class="flex space-x-3">
      <button
        class="bg-indigo-400 text-white px-3 py-2 rounded shadow"
        id="increment"
      >
        Increment
      </button>
      <button
        class="bg-red-400 text-white px-3 py-2 rounded shadow"
        id="decrement"
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
