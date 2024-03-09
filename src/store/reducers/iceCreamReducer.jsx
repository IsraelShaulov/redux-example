import { BUY_ICECREAM } from '../actions/allActionsType';

const initialState = {
  numOfIceCreams: 10,
};

const iceCreamReducer = (state = initialState, action) => {
  if (action.type === BUY_ICECREAM) {
    return { ...state, numOfIceCreams: state.numOfIceCreams - 1 };
  }
  return state;
};

export default iceCreamReducer;
