import React from 'react';
import Counter from './Components/Counter';

const App = () => {
  return (
    <div class="w-screen h-screen p-10 bg-gray-100 text-slate-700">
    <h1 class="max-w-md mx-auto text-center text-2xl font-bold todo-title">
      Simple Counter Application
    </h1>
    <div class="max-w-md mx-auto mt-10 space-y-5">
      <div
        class="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow"
      >
        <div class="text-2xl font-semibold" id="counter">0</div>
        <Counter />
      </div>
    </div>
  </div>
  );
};

export default App;