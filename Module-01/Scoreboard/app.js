// Get Dom Element
const deleteBtn = document.querySelector('.lws-delete');
const matchName = document.querySelector('.lws-matchName');
const incrementF = document.querySelector('.lws-increment');
const decrementF = document.querySelector('.lws-decrement');
const matchResult = document.querySelector('.lws-singleResult');
const addMatchBtn = document.querySelector('.lws-addMatch');
const resetBtn = document.querySelector('.lws-reset');


// Identifiers
const INCREMENT = 'increment';
const DECREMENT = 'decrement';

// Initial State
const initialState = {
  value: 0,
}

// Action Creator
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


// Create Reducer
const createReducer = (state = initialState, action) => {
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
    return state;
  }
}

// Create store
const store = Redux.createStore(createReducer);

incrementF.addEventListener('change', () => {
  let incValue = incrementF.value;
  store.dispatch(increment(incValue));
})

// Subscribe Function
const render = () => {
  const state = store.getState();
  matchResult.innerText = state.value;
}

render()
store.subscribe(render);