import { FETCH_ALL_COIN_DATA } from "../constants";

export const allCoinDataReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_COIN_DATA:
      return action.payload;
    default:
      return state;
  }
};
