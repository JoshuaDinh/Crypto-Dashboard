import { MOBILE_NAV } from "../constants";

export const mobileNavReducer = (state = false, action) => {
  switch (action.type) {
    case MOBILE_NAV:
      return !state;
    default:
      return state;
  }
};
