import { AccordionActions } from "@material-ui/core";
import { SELECTED_LINK } from "../constants";

export const selectSidebarLink = (text) => {
  return { type: SELECTED_LINK, payload: text };
};
