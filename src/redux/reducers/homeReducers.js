import { IS_MPIN_MODAL_OPEN, IS_PASSWORD_MODAL_OPEN } from "../actionTypes";

const initialState = {
  isPasswordModal: false,
  isMpinModal: false,
};

export const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_PASSWORD_MODAL_OPEN:
      return {
        ...state,
        isPasswordModal: !state?.isPasswordModal,
      };
    case IS_MPIN_MODAL_OPEN:
      return {
        ...state,
        isMpinModal: !state?.isMpinModal,
      };
    default:
      return state;
  }
};
