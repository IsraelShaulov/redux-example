import { BUY_CAKE } from './allActionsType';

// default value is 1
export const buyCake = (numberOfCakesToBuy = 1) => {
  return {
    type: BUY_CAKE,
    payload: numberOfCakesToBuy,
  };
};
