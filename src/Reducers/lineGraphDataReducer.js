import { FETCH_LINE_GRAPH_DATA, SELECT_LINE_GRAPH_DAY } from "../constants";

export const initialLineGraphState = {
  lineGraphData: [],
  selectedLineGraphDay: 30,
};

export const lineGraphDataReducer = (state = initialLineGraphState, action) => {
  switch (action.type) {
    case FETCH_LINE_GRAPH_DATA:
      return { ...state, lineGraphData: action.payload };
    case SELECT_LINE_GRAPH_DAY:
      return { ...state, selectedLineGraphDay: action.payload };

    default:
      return state;
  }
};
