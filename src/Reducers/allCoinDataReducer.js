import { FETCH_ALL_COIN_DATA } from "../constants";

export const allCoinDataReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_COIN_DATA:
      return { ...state, state: action.payload };
    default:
      return state;
  }
};
