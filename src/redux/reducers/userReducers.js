import {
  CREATE_NEW_USER_REQUEST,
  CREATE_NEW_USER_SUCCESS,
  UPDATE_USER_DATA_SUCCESS,
  CREATE_NEW_USER_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
} from "../actionTypes";

const initialState = {
  loading: false,
  user: null,
  error: "",
  isLoggedIn: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_NEW_USER_REQUEST:
    case USER_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case CREATE_NEW_USER_SUCCESS:
    case UPDATE_USER_DATA_SUCCESS:
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        isLoggedIn: true,
        error: "",
      };
    case CREATE_NEW_USER_FAILURE:
    case USER_LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default userReducer;
