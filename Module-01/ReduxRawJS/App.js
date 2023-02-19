// Get Dom Elements
const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");

// Dispatch Identifier
const INCREMENT = 'increment';
const DECREMENT = 'decrement';

// Initialize Count 
const initializeValue = {
  value: 0,
}

const increment = (value) => {
  return {
    type: INCREMENT,
    payload: value
  }
}

const decrement = (value) => {
  return {
    type: DECREMENT,
    payload: value
  }
}

// Create Redux Reducer
const createReducer = (state = initializeValue, {type, payload}) => {
  if (type === 'increment') {
    return {
      ...state,
      value: state.value + payload
    }
  } else if (type === 'decrement') {
    return {
      ...state,
      value: state.value - payload
    }
  } else {
    return state;
  }
}

// Create Redux store
const store = Redux.createStore(createReducer);

// Action dispatch
incrementEl.addEventListener('click', () => {
  store.dispatch(increment(7))
})

decrementEl.addEventListener('click', () => {
  store.dispatch(decrement(9))
})

// Store subscribe
const render = () => {
  const state = store.getState();
  counterEl.innerText = state.value;
}

render()

store.subscribe(render)

// // Initialize Value
// const initializeValue = {
//   value: 0,
// };

// // Create Reducer Function
// const createReducer = (state = initializeValue, { type, payload }) => {
//   if (type === "increment") {
//     return {
//       ...state,
//       value: state.value + payload,
//     };
//   } else if (type === "decrement") {
//     return {
//       ...state,
//       value: state.value - payload,
//     };
//   } else {
//     return state;
//   }
// };

// const store = Redux.createStore(createReducer);

// // Event Listening - Dispatch
// incrementEl.addEventListener("click", () => {
//   store.dispatch({
//     type: "increment",
//     payload: 5,
//   });
// });

// decrementEl.addEventListener("click", () => {
//   store.dispatch({
//     type: "decrement",
//     payload: 7,
//   });
// });

// const render = () => {
//   const { value } = store.getState();
//   counterEl.innerText = value.toString();
// };

// store.subscribe(render);
