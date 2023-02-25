// Get Dom Element
const deleteBtn = document.querySelectorAll(".lws-delete");
const matchName = document.querySelector(".lws-matchName");
const incrementField = document.querySelectorAll(".lws-increment");
const decrementField = document.querySelectorAll(".lws-decrement");
const matchResult = document.querySelector(".lws-singleResult");
const addMatchBtn = document.querySelector(".lws-addMatch");
const resetBtn = document.querySelector(".lws-reset");
const allMatches = document.querySelector(".all-matches");
// const matches = document.querySelectorAll(".match");

// Identifiers
const INCREMENT = "increment";
const DECREMENT = "decrement";

// Initial State
// const initialState = {
//   value: 0,
// };

const initialState = [{ value: 0 }];

// Action Creator
const increment = (value) => {
  return {
    type: INCREMENT,
    payload: value,
  };
};

const decrement = (value) => {
  return {
    type: DECREMENT,
    payload: value,
  };
};

// Create Reducer
const createReducer = (state = initialState, action) => {
  if (action.type === "reset") {
    return state.map((st) => ({ value: 0 }));
  }
  if (action.type === "delete") {
    const index = action.payload.index;
    const updatedState = [...state];
    updatedState.splice(index, 1);
    return updatedState;
  }
  if (action.type === "addMatch") {
    const newState = [...state, { value: 0 }]; // [{value: 0}, {value: 0}, {value:0}, {value:0}, {value:0}]
    console.log(newState);
    return newState;
  }
  if (action.type === "increment") {
    console.log(action);
    const matchElement = { ...state[action.payload.index] }; // {value: 0}
    matchElement.value += action.payload.value;
    const currState = [...state];
    currState[action.payload.index] = matchElement;
    console.log("Current State = ", currState);
    return currState;
    // return {
    //   ...state,
    //   value: state.value + action.payload, // payload = {value: 0, index: 0}
    // };
  } else if (action.type === "decrement") {
    console.log(action);
    const matchElement = { ...state[action.payload.index] };
    matchElement.value =
      matchElement.value - action.payload.value < 0
        ? 0
        : matchElement.value - action.payload.value;
    const currState = [...state];
    currState[action.payload.index] = matchElement;
    return currState;
    // return {
    //   ...state,
    //   value: state.value - action.payload,
    // };
  } else {
    return state;
  }
};

// Create store
const store = Redux.createStore(createReducer);

const incrementForm = document.querySelectorAll(".incrementForm");
const decrementForm = document.querySelectorAll(".decrementForm");
console.log(incrementForm);

incrementForm[incrementForm.length - 1].addEventListener("submit", (event) => {
  // console.log("Increment Form event", event.target.querySelector('input').value);
  // console.log("Increment Form event", i);
  event.preventDefault();
  let incValue = +incrementField[incrementField.length - 1].value;
  // let incValue = event.target.querySelector('input').value;
  console.log("Inc Value: ", incValue);
  console.log("Store length: ", store.getState().length);
  store.dispatch(increment({ value: incValue, index: 0 }));
  console.log(incValue);
  incrementField[decrementField.length - 1].value = "";
});

decrementForm[decrementForm.length - 1].addEventListener("submit", (event) => {
  // console.log("Increment Form event", event.target.querySelector('input').value);
  // console.log("Increment Form event", i);
  event.preventDefault();
  let decValue = +decrementField[decrementField.length - 1].value;
  // let incValue = event.target.querySelector('input').value;
  console.log("Store length: ", store.getState().length);
  store.dispatch(decrement({ value: decValue, index: 0 }));
  decrementField[decrementField.length - 1].value = "";
});

// for (let i = 0; i < incrementForm.length; i++) {
//   incrementForm[i].addEventListener("submit", (event) => {
//     console.log("Increment Form event");
//     event.preventDefault();
//     let incValue = +incrementField.value;
//     store.dispatch(increment({ value: incValue, index: i }));
//     console.log(incValue);
//     incrementField.value = "";
//   });
// }

// for (let i = 0; i < decrementForm.length; i++) {
//   decrementForm[i].addEventListener("submit", (event) => {
//     console.log("Decrement Form event");
//     event.preventDefault();
//     let decValue = +decrementField.value;
//     store.dispatch(decrement({ value: decValue, index: i }));
//     console.log(decValue);
//     decrementField.value = "";
//   });
// }

// Subscribe Function
const render = () => {
  const matchResult = document.querySelectorAll(".lws-singleResult");
  const state = store.getState();
  console.log("Subscribe State: ", state);
  for (let i = 0; i < matchResult.length; i++) {
    matchResult[i].innerText = state[i].value;
  }
  // if (state.length > 1) {
  //   addNewMatchInDom();
  // }
};

render();
store.subscribe(render);

deleteBtn[deleteBtn.length - 1].addEventListener("click", () => {
  const matches = document.querySelectorAll(".match");
  matches[0].remove();
  store.dispatch({ type: "delete", payload: {index: 0} });
});

function addNewMatchInDom() {
  let index = store.getState().length - 1;
  const match = document.createElement("div");
  match.className = "match";
  match.innerHTML = `
  <div class="wrapper">
    <button class="lws-delete">
      <img src="./image/delete.svg" alt="" />
    </button>
    <h3 class="lws-matchName">Match ${index + 1}</h3>
  </div>
  <div class="inc-dec">
    <form class="incrementForm">
      <h4>Increment</h4>
      <input type="number" name="increment" class="lws-increment" />
    </form>
    <form class="decrementForm">
      <h4>Decrement</h4>
      <input type="number" name="decrement" class="lws-decrement" />
    </form>
  </div>
  <div class="numbers">
    <h2 class="lws-singleResult">0</h2>
  </div>
  `;

  allMatches.appendChild(match);

  const incrementForm = document.querySelectorAll(".incrementForm");
  const decrementForm = document.querySelectorAll(".decrementForm");
  const incrementField = document.querySelectorAll(".lws-increment");
  const decrementField = document.querySelectorAll(".lws-decrement");
  const deleteBtn = document.querySelectorAll(".lws-delete");

  // const onSubmitClick = (event, i) => {
  //   // console.log("Increment Form event", event.target.querySelector('input').value);
  //   // console.log("Increment Form event", i);
  //   event.preventDefault();
  //   let incValue = +incrementField[i].value;
  //   // let incValue = event.target.querySelector('input').value;
  //   console.log("Inc Value: ", incValue);
  //   store.dispatch(increment({ value: incValue, index: i }));
  //   console.log(incValue);
  //   incrementField.value = "";
  // };

  console.log("Last Increment Form: ", incrementForm[incrementForm.length - 1]);

  incrementForm[incrementForm.length - 1].addEventListener(
    "submit",
    (event) => {
      // console.log("Increment Form event", event.target.querySelector('input').value);
      // console.log("Increment Form event", i);
      event.preventDefault();
      let incValue = +incrementField[incrementField.length - 1].value;
      // let incValue = event.target.querySelector('input').value;
      console.log("Inc Value: ", incValue);
      console.log("Store length: ", store.getState().length);
      store.dispatch(increment({ value: incValue, index: index }));
      console.log(incValue);
      incrementField[incrementField.length - 1].value = "";
    }
  );

  decrementForm[decrementForm.length - 1].addEventListener(
    "submit",
    (event) => {
      // console.log("Increment Form event", event.target.querySelector('input').value);
      // console.log("Increment Form event", i);
      event.preventDefault();
      let decValue = +decrementField[decrementField.length - 1].value;
      // let incValue = event.target.querySelector('input').value;
      console.log("Dec Value: ", decValue);
      console.log("Store length: ", store.getState().length);
      store.dispatch(decrement({ value: decValue, index: index }));
      console.log(decValue);
      decrementField[decrementField.length - 1].value = "";
    }
  );

  deleteBtn[deleteBtn.length - 1].addEventListener("click", () => {
    const matches = document.querySelectorAll(".match");
    matches[index].remove();
    store.dispatch({ type: "delete", payload: {index: index} });
  });

  // for (let i = 0; i < incrementForm.length; i++) {
  //   incrementForm[i].removeEventListener("submit", onSubmitClick);
  // }

  // for (let i = 0; i < incrementForm.length; i++) {
  //   incrementForm[i].addEventListener("submit", (event) => onSubmitClick(event, i));
  // }

  // for (let i = 0; i < decrementForm.length; i++) {
  //   decrementForm[i].addEventListener("submit", (event) => {
  //     console.log("Decrement Form event");
  //     event.preventDefault();
  //     let decValue = +decrementField[i].value;
  //     console.log("Dec Value: ", decValue);
  //     store.dispatch(decrement({ value: decValue, index: i }));
  //     console.log(decValue);
  //     decrementField.value = "";
  //   });
  // }
}

addMatchBtn.addEventListener("click", () => {
  store.dispatch({ type: "addMatch" });
  addNewMatchInDom();
  // const match = document.createElement("div");
  // match.className = "match";
  // match.innerHTML = `
  // <div class="wrapper">
  //   <button class="lws-delete">
  //     <img src="./image/delete.svg" alt="" />
  //   </button>
  //   <h3 class="lws-matchName">Match 1</h3>
  // </div>
  // <div class="inc-dec">
  //   <form class="incrementForm">
  //     <h4>Increment</h4>
  //     <input type="number" name="increment" class="lws-increment" />
  //   </form>
  //   <form class="decrementForm">
  //     <h4>Decrement</h4>
  //     <input type="number" name="decrement" class="lws-decrement" />
  //   </form>
  // </div>
  // <div class="numbers">
  //   <h2 class="lws-singleResult">0</h2>
  // </div>
  // `;

  // allMatches.appendChild(match);

  // const incrementForm = document.querySelectorAll(".incrementForm");
  // const decrementForm = document.querySelectorAll(".decrementForm");

  // for (let i = 0; i < incrementForm.length; i++) {
  //   incrementForm[i].addEventListener("submit", (event) => {
  //     event.preventDefault();
  //     const incrementField = document.querySelectorAll(".lws-increment");
  //     console.log(incrementField[1]);
  //     let incValue = +incrementField[1].value;
  //     store.dispatch(increment(incValue));
  //     console.log(incValue);
  //     incrementField[1].value = "";
  //   });
  // }

  // for (let i = 0; i < decrementForm.length; i++) {
  //   decrementForm[i].addEventListener("submit", (event) => {
  //     event.preventDefault();
  //     const decrementField = document.querySelector(".lws-decrement");
  //     let decValue = +decrementField.value;
  //     store.dispatch(decrement(decValue));
  //     console.log(decValue);
  //     decrementField.value = "";
  //   });
  // }
});

resetBtn.addEventListener("click", () => {
  store.dispatch({ type: "reset" });
});
