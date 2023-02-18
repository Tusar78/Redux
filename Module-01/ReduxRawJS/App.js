// Get Dom Elements
const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");

// Create Initial State
const initialState = {
  value: 0,
}

// Create Redux Reducer
const createReducer = (state = initialState, action) => {
  if(action.type === 'increment') {
    return {
      ...state,
      value: state.value + 1
    }
  } else if (action.type === 'decrement') {
    return {
      ...state,
      value: state.value - 1
    }
  } else {
    return state;
  }
}

// Create Store
const store = Redux.createStore(createReducer);


// Event Listening
incrementEl.addEventListener('click', () => {
  store.dispatch({
    type: 'increment'
  })
})

decrementEl.addEventListener('click', () => {
  store.dispatch({
    type: 'decrement'
  })
})

const render = () => {
  const state = store.getState();
  counterEl.innerText = state.value;
}

store.subscribe(render);

// Initially Update ui
render();

// // Create Initial State
// const initialState = {
//   value: 0,
// };

// // Create Reducer Function
// const createReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return {
//       ...state,
//       value: state.value + 1,
//     };
//   } else if (action.type === "decrement") {
//     return {
//       ...state,
//       value: state.value - 1,
//     };
//   } else {
//     return state;
//   }
// };

// // Create a Redux store
// const store = Redux.createStore(createReducer);

// const render = () => {
//   const state = store.getState();
//   counterEl.innerText = state.value;
// }

// store.subscribe(render)

// //Button Event Listener
// incrementEl.addEventListener('click', () => {
//   store.dispatch({
//     type: 'increment'
//   })
// })

// decrementEl.addEventListener('click', () => {
//   store.dispatch({
//     type: 'decrement'
//   })
// })