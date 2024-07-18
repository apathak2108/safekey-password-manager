import {
  SET_PHONE_NUMBER,
  CHECK_PHONE_NUMBER_REQUEST,
  CHECK_PHONE_NUMBER_SUCCESS,
  CHECK_PHONE_NUMBER_FAILURE,
  SET_AUTH_STATUS,
  SET_CREATED_MPIN,
  IS_MPIN_CREATED,
  CREATE_MPIN_POST_REQUEST,
  CREATE_MPIN_POST_FAILURE,
  CREATE_MPIN_POST_SUCCESS,
} from "../actionTypes";

const initialState = {
  phoneNumber: null,
  isAuth: false,
  loading: false,
  userExist: false,
  error: "",
  isMpinCreated: false,
  createdMpin: "",
  postResponseData: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PHONE_NUMBER:
      return {
        ...state,
        phoneNumber: action?.payload,
      };
    case CHECK_PHONE_NUMBER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CHECK_PHONE_NUMBER_SUCCESS:
      return {
        ...state,
        loading: false,
        userExist: action?.payload?.userExist,
      };
    case CHECK_PHONE_NUMBER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action?.error,
        userExist: false,
      };
    case SET_AUTH_STATUS:
      return {
        ...state,
        isAuth: true,
      };
    case IS_MPIN_CREATED:
      return {
        ...state,
        isMpinCreated: true,
      };
    case SET_CREATED_MPIN:
      return {
        ...state,
        createdMpin: action.payload,
      };
    case CREATE_MPIN_POST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_MPIN_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        postResponseData: action.payload,
      };
    case CREATE_MPIN_POST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
