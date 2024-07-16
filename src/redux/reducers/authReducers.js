import { SET_PHONE_NUMBER } from "../actionTypes";

const initialState = {
  phoneNumber: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PHONE_NUMBER:
      return {
        ...state,
        phoneNumber: action?.payload,
      };
    default:
        return state;
  }
};
