import { combineReducers } from "redux";
import counterReducer from "./counter/reducer";
import dynamicCounterReducer from "./dynamicCounter/reducer";
import nameReduce from "./getName/nameReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  dynamicCounter: dynamicCounterReducer,
  users: nameReduce,
});

export default rootReducer;
