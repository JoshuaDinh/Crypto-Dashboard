import { SEARCH_COIN } from "../constants";
import { FETCH_SEARCHED_COIN } from "../constants";

const initialSearchCoinState = {
  searchCoin: "bitcoin",
  searchedCoin: [],
};

export const searchCoinReducer = (state = initialSearchCoinState, action) => {
  switch (action.type) {
    case SEARCH_COIN:
      return { ...state, searchCoin: action.payload };
    case FETCH_SEARCHED_COIN:
      return { ...state, searchedCoin: action.payload };
    default:
      return state;
  }
};
