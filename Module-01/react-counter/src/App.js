import React, { useState } from "react";
import Counter from "./Components/Counter";
import Stats from "./Components/Stats";

const initialState = [
  {
    id: 1,
    value: 0,
  },
  {
    id: 2,
    value: 0
  }
]

const App = () => {
  const [states, setStates] = useState(initialState);

  const increment = (id) => {
    const updateCounter = states.map(c => {
      if (c.id === id) {
        return {
          ...c,
          value: c.value + 1
        }
      } else {
        return {...c}
      }
    })

    console.log(updateCounter);

    setStates(updateCounter);
  }

  const decrement = id => {
    const updateCounter = states.map(c => {
      if (c.id === id) {
        return {
          ...c,
          value: c.value - 1
        }
      } else {
        return {...c}
      }
    })

    setStates(updateCounter)
  }


  const totalCount = () => {
    return states.reduce((total, counter) => total + counter.value, 0);
  }
  return (
    <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
      <h1 className="max-w-md mx-auto text-center text-2xl font-bold todo-title">
        Simple Counter Application
      </h1>
      {
        states.map(count => (
          <Counter key={count.id} count={count.value} id={count.id} increment={increment} decrement={decrement} />
        ))
      }
      <Stats count={totalCount()} />
    </div>
  );
};

export default App;
