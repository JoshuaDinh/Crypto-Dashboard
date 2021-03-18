import { SIGN_UP_MODAL } from "../constants";
import { SIGN_IN_MODAL } from "../constants";

export const signUpModalReducer = (state = false, action) => {
  switch (action.type) {
    case SIGN_UP_MODAL:
      return !state;
    default:
      return state;
  }
};

export const signInModalReducer = (state = false, action) => {
  switch (action.type) {
    case SIGN_IN_MODAL:
      return !state;
    default:
      return state;
  }
};
