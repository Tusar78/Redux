import { DECREMENT, INCREMENT } from "./actionTypes";

const initialState = {
  value: 0,
};

const createReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        value: state.value + action.payload
      }
    case DECREMENT:
      return {
        ...state,
        value: state.value - action.payload < 0 ? 0 : state.value - action.payload
      }  
    default:
      return state;
  }
}

export default createReducer;