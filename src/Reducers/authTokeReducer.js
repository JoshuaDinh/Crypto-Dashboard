import { GOOGLE_AUTH_TOKEN } from "../constants";

export const googleAuthReducer = (state = "", action) => {
  switch (action.type) {
    case GOOGLE_AUTH_TOKEN:
      return action.payload;
    default:
      return state;
  }
};
