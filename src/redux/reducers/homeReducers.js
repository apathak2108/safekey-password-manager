import { IS_PASSWORD_MODAL_OPEN } from "../actionTypes";

const initialState = {
  isPasswordModal: false,
};

export const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_PASSWORD_MODAL_OPEN:
      return {
        ...state,
        isPasswordModal: !state?.isPasswordModal,
      };
    default:
      return state;
  }
};
