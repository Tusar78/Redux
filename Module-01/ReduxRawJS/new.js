// const elementSelector = (name) => {
//   return document.querySelector(name);
// };

// const counterEl = elementSelector("#counter");
// const incrementEl = elementSelector("#increment");
// const decrementEl = elementSelector("#decrement");

// // Action identifier
// const INCREMENT = "increment";
// const DECREMENT = "decrement";

// // Action Creator
// const increment = (val) => {
//   return {
//     type: INCREMENT,
//     payload: val,
//   };
// };

// const decrement = (val) => {
//   return {
//     type: DECREMENT,
//     payload: val,
//   };
// };

// const createReducer = (state = { value: 0 }, action) => {
//   console.log("Come Action: ", action);
//   if (action.type === INCREMENT) {
//     return {
//       ...state,
//       value: state.value + action.payload,
//     };
//   } else if (action.type === DECREMENT) {
//     return {
//       ...state,
//       value: state.value !== 0 ? state.value - action.payload : state.value,
//     };
//   } else {
//     return { ...state };
//   }
// };

// const store = Redux.createStore(createReducer);

// incrementEl.addEventListener("click", () => {
//   store.dispatch(increment(10));
// });

// decrementEl.addEventListener("click", () => {
//   store.dispatch(decrement(5));
// });

// const render = () => {
//   const state = store.getState();
//   counterEl.innerText = state.value;
// };

// render();
// store.subscribe(render);

const actions = [
  {type: 'increment', payload: 1},
  {type: 'increment', payload: 1},
  {type: 'increment', payload: 1},
  {type: 'decrement', payload: 1},
]

const initialState = {
  value: 0
}

const createReducer = (state, action) => {
  if (action.type === 'increment') {
    return {
      ...state,
      value: state.value + action.payload
    }
  } else if (action.type === 'decrement') {
    return {
      ...state,
      value: state.value - action.payload
    }
  } else {
    return {...state}
  }
}

const finalResult = actions.reduce(createReducer, initialState);
console.log(finalResult);
