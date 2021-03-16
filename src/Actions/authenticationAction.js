import { SIGN_UP_MODAL } from "../constants";
import { SIGN_IN_MODAL } from "../constants";

export const displaySignUpModal = () => {
  return { type: SIGN_UP_MODAL, payload: true };
};
export const displaySignInModal = () => {
  return { type: SIGN_IN_MODAL, payload: true };
};
