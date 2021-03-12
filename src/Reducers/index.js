import { combineReducers } from "redux";
import { allCoinDataReducer } from "./allCoinDataReducer";

export default combineReducers({
  allCoinData: allCoinDataReducer,
});
