import { combineReducers } from "redux";
import { allCoinDataReducer } from "./allCoinDataReducer";
import { searchCoinReducer } from "./searchCoinReducer";
import { searchedCoinReducer } from "./searchCoinReducer";
import { lineGraphDataReducer } from "./lineGraphDataReducer";

export default combineReducers({
  allCoinData: allCoinDataReducer,
  searchCoin: searchCoinReducer,
  searchedCoin: searchedCoinReducer,
  lineGraphData: lineGraphDataReducer,
});
