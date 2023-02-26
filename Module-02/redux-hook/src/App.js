import React from "react";
import { Provider } from "react-redux";
import ConnectCounter from "./components/ConnectCounter";
import Counter from "./components/Counter";
import DynamicCounter from "./components/DynamicCounter";
import UserName from "./components/UserName";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
        <h1 className="max-w-md mx-auto text-center text-2xl font-bold todo-title">
          Simple Counter Application
        </h1>
        <UserName />
        <Counter />
        <DynamicCounter />
        <ConnectCounter />
        <ConnectCounter dynamic />
      </div>
    </Provider>
  );
};

export default App;
