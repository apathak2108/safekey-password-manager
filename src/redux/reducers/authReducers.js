import {
  CHECK_USER_EXISTENCE_REQUEST,
  CHECK_USER_EXISTENCE_SUCCESS,
  CHECK_USER_EXISTENCE_FAILURE,
} from "../actionTypes";

const initialState = {
  loading: false,
  userExists: null,
  error: "",
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_USER_EXISTENCE_REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case CHECK_USER_EXISTENCE_SUCCESS:
      return {
        ...state,
        loading: false,
        userExists: action.payload,
      };
    case CHECK_USER_EXISTENCE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
