import {
  CREATE_NEW_USER_REQUEST,
  CREATE_NEW_USER_SUCCESS,
  UPDATE_USER_DATA_SUCCESS,
  CREATE_NEW_USER_FAILURE,
} from "../actionTypes";

const initialState = {
  loading: false,
  user: null,
  error: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_NEW_USER_REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case CREATE_NEW_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        error: "",
      };
    case UPDATE_USER_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        error: "",
      };
    case CREATE_NEW_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default userReducer;