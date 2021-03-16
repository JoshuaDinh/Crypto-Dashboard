import { combineReducers } from "redux";
import { allCoinDataReducer } from "./allCoinDataReducer";
import { searchCoinReducer } from "./searchCoinReducer";
import { searchedCoinReducer } from "./searchCoinReducer";
import { lineGraphDataReducer } from "./lineGraphDataReducer";
import { signUpModalReducer } from "./signUpModalReducer";

export default combineReducers({
  allCoinData: allCoinDataReducer,
  searchCoin: searchCoinReducer,
  searchedCoin: searchedCoinReducer,
  lineGraphData: lineGraphDataReducer,
  signUpModal: signUpModalReducer,
});
