import { useState } from "react";
import Counter from "./Components/Counter";
import Stats from "./Components/Stats";

const initialState = [
  {
    id: 1,
    count: 0,
  },
  {
    id: 2,
    count: 0,
  },
];

function App() {
  const [state, setState] = useState(initialState);
  const totalCount = () => {
    return state.reduce((total, counter) => total + counter.count, 0);
  }
  console.log(totalCount());
  return (
    <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
      <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
        Simple Counter Application
      </h1>

      <div className="max-w-md mx-auto mt-10 space-y-5">
        <Counter />
        <Counter />
        <Stats count={totalCount()} />
      </div>
    </div>
  );
}

export default App;
