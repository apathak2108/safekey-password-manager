import {
  ADD_USERNAME_AND_PASS_FAILURE,
  ADD_USERNAME_AND_PASS_REQUEST,
  ADD_USERNAME_AND_PASS_SUCCESS,
  IS_MPIN_MODAL_OPEN,
  IS_PASSWORD_MODAL_OPEN,
} from "../actionTypes";

const initialState = {
  loading: false,
  postResponseData: null,
  error: "",
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
    case ADD_USERNAME_AND_PASS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_USERNAME_AND_PASS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case ADD_USERNAME_AND_PASS_SUCCESS:
      return {
        ...state,
        loading: false,
        postResponseData: action.payload,
      };
    default:
      return state;
  }
};
