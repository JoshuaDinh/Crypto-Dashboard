import { GOOGLE_AUTH_TOKEN } from "../constants";

export const setAuthToken = (text) => {
  return { type: GOOGLE_AUTH_TOKEN, payload: text };
};
