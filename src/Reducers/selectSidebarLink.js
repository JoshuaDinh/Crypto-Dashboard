import { SELECTED_LINK } from "../constants";

export const selectSidebarLinkReducer = (state = "Dashboard", action) => {
  switch (action.type) {
    case SELECTED_LINK:
      return action.payload;
    default:
      return state;
  }
};
