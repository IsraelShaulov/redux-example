import { BUY_CAKE } from '../actions/allActionsType';

const initialState = {
  numOfCakes: 10,
};

const cakeReducer = (state = initialState, action) => {
  if (action.type === BUY_CAKE) {
    const numberOfCakesToBuy = action.payload;
    return { ...state, numOfCakes: state.numOfCakes - numberOfCakesToBuy };
  }
  return state;
};

export default cakeReducer;
