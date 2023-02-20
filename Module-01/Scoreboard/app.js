// Get Dom Element
const deleteBtn = document.querySelector('.lws-delete');
const matchName = document.querySelector('.lws-matchName');
const incrementForm = document.querySelector('.incrementForm');
const incrementField = document.querySelector('.lws-increment');
const decrementForm = document.querySelector('.decrementForm');
const decrementField = document.querySelector('.lws-decrement');
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

incrementForm.addEventListener('submit', (event) => {
  event.preventDefault();
})

incrementField.addEventListener('keyup', (event) => {
  if (event.key === "Enter") {
    let incValue = +incrementField.value;
    store.dispatch(increment(incValue));
    console.log(incValue);
  }
})

decrementField.addEventListener('change', (event) => {
  event.preventDefault();
  let incValue = +decrementF.value;
  store.dispatch(decrement(incValue));
})

// Subscribe Function
const render = () => {
  const state = store.getState();
  const scoreValue = state.value;
  if (scoreValue > 0) {
    matchResult.innerText = state.value;
  } else {
    matchResult.innerText = 0;
  }
}

render()
store.subscribe(render);