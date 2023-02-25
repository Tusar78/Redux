import { createStore } from "redux";
import createReducer from "./counter/reducer";

const store = createStore(createReducer);

export default store;
