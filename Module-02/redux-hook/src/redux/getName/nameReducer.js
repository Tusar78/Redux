import { NAME } from "./actionTypes";

const usersInitialState = [{
  id: 1,
  name: "Mashrafi"
}];

const nameReduce = (state = usersInitialState, action) => {
  switch (action.type) {
    case NAME:
      return [{...state, name: 'Tusar'}]  
    default:
      return state;  
  }
}

export default nameReduce;