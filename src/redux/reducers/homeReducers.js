import {
  ADD_USERNAME_AND_PASS_FAILURE,
  ADD_USERNAME_AND_PASS_REQUEST,
  ADD_USERNAME_AND_PASS_SUCCESS,
  DELETE_USER_CREDENTIAL_FAILURE,
  DELETE_USER_CREDENTIAL_REQUEST,
  DELETE_USER_CREDENTIAL_SUCCESS,
  GET_USER_PASSWORDS_FAILURE,
  GET_USER_PASSWORDS_REQUEST,
  GET_USER_PASSWORDS_SUCCESS,
  IS_MPIN_MODAL_OPEN,
  IS_PASSWORD_MODAL_OPEN,
  SET_LOGGEDIN_USER_MPIN,
  SET_SELECTED_ID,
  SET_SELECTED_PASSWORD,
  SET_SELECTED_USERNAME,
  SET_UPDATED_CREDENTIAL_FAILURE,
  SET_UPDATED_CREDENTIAL_REQUEST,
  SET_UPDATED_CREDENTIAL_SUCCESS,
} from "../actionTypes";

const initialState = {
  loading: false,
  postResponseData: null,
  error: "",
  isPasswordModal: false,
  isMpinModal: false,
  userAllCredentials: null,
  deleteResponseData: null,
  loggedInUserMpin: null,
  selectedId: null,
  selectedUsername: "",
  selectedPassword: "",
  updatedDataResponse: null,
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
        e,
        error: action?.error,
      };
    case ADD_USERNAME_AND_PASS_SUCCESS:
      return {
        ...state,
        loading: false,
        postResponseData: action?.payload,
      };
    case GET_USER_PASSWORDS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_USER_PASSWORDS_SUCCESS:
      return {
        ...state,
        loading: false,
        userAllCredentials: action?.payload,
      };
    case GET_USER_PASSWORDS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action?.error,
      };
    case DELETE_USER_CREDENTIAL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_USER_CREDENTIAL_SUCCESS:
      return {
        ...state,
        loading: false,
        deleteResponseData: action?.payload,
      };
    case DELETE_USER_CREDENTIAL_FAILURE:
      return {
        ...state,
        loading: false,
        error: action?.error,
      };
    case SET_LOGGEDIN_USER_MPIN:
      return {
        ...state,
        loggedInUserMpin: action?.payload,
      };
    case SET_SELECTED_USERNAME:
      return {
        ...state,
        selectedUsername: action?.payload,
      };
    case SET_SELECTED_PASSWORD:
      return {
        ...state,
        selectedPassword: action?.payload,
      };
    case SET_SELECTED_ID:
      return {
        ...state,
        selectedId: action?.payload,
      };
    case SET_UPDATED_CREDENTIAL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SET_UPDATED_CREDENTIAL_SUCCESS:
      return {
        ...state,
        updatedDataResponse: action?.payload,
        loading: false,
      };
    case SET_UPDATED_CREDENTIAL_FAILURE:
      return {
        ...state,
        loading: false,
        error: action?.error,
      };
    default:
      return state;
  }
};
