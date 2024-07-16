import { SET_PHONE_NUMBER } from "../actionTypes";

export const setPhoneNumber = (number) => {
  return {
    type: SET_PHONE_NUMBER,
    payload: number,
  };
};
