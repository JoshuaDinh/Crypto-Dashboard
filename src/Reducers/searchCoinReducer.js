import { SEARCH_COIN } from "../constants";
import { FETCH_SEARCHED_COIN } from "../constants";
import { IS_PENDING } from "../constants";

export const initialSearchCoinState = {
  searchCoin: "",
  searchedCoin: [],
  isPending: false,
};

export const searchCoinReducer = (state = initialSearchCoinState, action) => {
  switch (action.type) {
    case SEARCH_COIN:
      return { ...state, searchCoin: action.payload };
    default:
      return state;
  }
};
export const searchedCoinReducer = (state = initialSearchCoinState, action) => {
  switch (action.type) {
    case FETCH_SEARCHED_COIN:
      return { ...state, searchedCoin: action.payload };
    case IS_PENDING:
      return { ...state, isPending: action.payload };
    default:
      return state;
  }
};
