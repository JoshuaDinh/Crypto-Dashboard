import { FETCH_NEWS_DATA, IS_PENDING } from "../constants";

const initialNewsDataState = {
  newsData: [],
  isPending: true,
};

export const fetchNewsDataReducer = (state = initialNewsDataState, action) => {
  switch (action.type) {
    case FETCH_NEWS_DATA:
      return { ...state, newsData: action.payload };
    case IS_PENDING:
      return { ...state, isPending: action.payload };
    default:
      return state;
  }
};
