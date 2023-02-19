// const value = {
//   a : 10
// }

// const impure = () =>{
//   return value.a = value.a * 2
// }

// impure()
// impure()
// console.log(value.a);

// let b = 10;
// let c = 20;

// function a() {
//   return b * c;
// }

// console.log(b, c);

// Explore Immutability = 'পেরিবর্তন করা যাই না' এবং Mutable = 'পরিবর্তন করা যাই' ।
// let a = 10;
// let b = a;

// console.log(a, b);

// a = 5;
// console.log(a, b);

// let arr = [1, 2, 3];
// let arr2 = [...arr];

// console.log(arr);
// console.log(arr2);

// arr2[2] = 30;
// console.log(arr);
// console.log(arr2);

// const arr = [1, 2, 3, 4, 5];
// const reduceFunc = (total, curr) => {
//   return total + curr;
// }

// const totalN = arr.reduce(reduceFunc, 0);
// console.log(totalN);

const actions = [
  {type: 'increment', payload: 1},
  {type: 'increment', payload: 1},
  {type: 'increment', payload: 1},
  {type: 'decrement', payload: 1},
]

const initialValue = {
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
    return state;
  }
}

const updateVal = actions.reduce(createReducer, initialValue);

console.log(updateVal);