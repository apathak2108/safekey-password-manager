import {
  GET_USER_PASSWORDS_FAILURE,
  GET_USER_PASSWORDS_REQUEST,
  GET_USER_PASSWORDS_SUCCESS,
  SET_SELECTED_PASSWORD_INDEX,
} from "../actionTypes";

const initialState = {
  passwords: [],
  loading: false,
  error: "",
  selectedIndex: null,
};

const passwordReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_PASSWORDS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_USER_PASSWORDS_SUCCESS:
      return {
        ...state,
        loading: false,
        passwords: action.payload,
        error: "",
      };
    case GET_USER_PASSWORDS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case SET_SELECTED_PASSWORD_INDEX:
      return {
        ...state,
        selectedIndex: action.payload,
      }
    default:
      return state;
  }
};

export default passwordReducer;
