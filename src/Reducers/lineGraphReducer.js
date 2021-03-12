import { FETCH_LINE_GRAPH_DATA } from "../constants";

export const initialLineGraphState = {
  lineGraphData: [],
};

export const lineGraphReducer = (state = initialLineGraphState, action) => {
  switch (action.type) {
    case FETCH_LINE_GRAPH_DATA:
      return { ...state, lineGraphData: action.payload };
    default:
      return state;
  }
};
