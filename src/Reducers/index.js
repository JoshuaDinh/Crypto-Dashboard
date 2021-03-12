import { combineReducers } from "redux";
import { allCoinDataReducer } from "./allCoinDataReducer";
import { searchCoinReducer } from "./searchCoinReducer";

export default combineReducers({
  allCoinData: allCoinDataReducer,
  searchCoin: searchCoinReducer,
});
