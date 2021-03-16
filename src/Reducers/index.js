import { combineReducers } from "redux";
import { allCoinDataReducer } from "./allCoinDataReducer";
import { searchCoinReducer } from "./searchCoinReducer";
import { searchedCoinReducer } from "./searchCoinReducer";
import { lineGraphDataReducer } from "./lineGraphDataReducer";
import { signUpModalReducer } from "./authenticationReducer";
import { signInModalReducer } from "./authenticationReducer";

export default combineReducers({
  allCoinData: allCoinDataReducer,
  searchCoin: searchCoinReducer,
  searchedCoin: searchedCoinReducer,
  lineGraphData: lineGraphDataReducer,
  signUpModal: signUpModalReducer,
  signInModal: signInModalReducer,
});
