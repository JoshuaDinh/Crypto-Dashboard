import { SIGN_UP_MODAL } from "../constants";

export const signUpModalReducer = (state = false, action) => {
  switch (action.type) {
    case SIGN_UP_MODAL:
      return { ...state, state: action.payload };

    default:
      return state;
  }
};
