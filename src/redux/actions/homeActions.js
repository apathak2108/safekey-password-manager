import axios from "axios";
import { API_URL } from "../../constants/paths";
import {
  IS_PASSWORD_MODAL_OPEN,
  IS_MPIN_MODAL_OPEN,
  ADD_USERNAME_AND_PASS_REQUEST,
  ADD_USERNAME_AND_PASS_SUCCESS,
  ADD_USERNAME_AND_PASS_FAILURE,
  GET_USER_PASSWORDS_REQUEST,
  GET_USER_PASSWORDS_SUCCESS,
  GET_USER_PASSWORDS_FAILURE,
  DELETE_USER_CREDENTIAL_REQUEST,
  DELETE_USER_CREDENTIAL_FAILURE,
  DELETE_USER_CREDENTIAL_SUCCESS,
  SET_LOGGEDIN_USER_MPIN,
  SET_SELECTED_USERNAME,
} from "../actionTypes";

export const setIsPasswordModalOpen = () => {
  return {
    type: IS_PASSWORD_MODAL_OPEN,
  };
};

export const setIsMpinModalOpen = () => {
  return {
    type: IS_MPIN_MODAL_OPEN,
  };
};

export const setUsernameAndPassword = (phoneNumber, userName, password) => {
  return async (dispatch) => {
    dispatch({ type: ADD_USERNAME_AND_PASS_REQUEST });
    try {
      const URL = `${API_URL}/create/originandpassword/${phoneNumber}`;
      const postData = {
        originName: userName,
        originPassword: password,
      };
      const response = await axios.post(URL, postData);
      dispatch({
        type: ADD_USERNAME_AND_PASS_SUCCESS,
        payload: response?.data,
      });
    } catch (err) {
      console.log(err, "error");
      dispatch({
        type: ADD_USERNAME_AND_PASS_FAILURE,
        error: err.message,
      });
    }
  };
};

export const getUserAllCredentials = (phoneNumber) => {
  return async (dispatch) => {
    dispatch({
      type: GET_USER_PASSWORDS_REQUEST,
    });
    try {
      const URL = `${API_URL}/getall/oringpass/${phoneNumber}`;
      const response = await axios.get(URL);
      const data = response?.data;
      dispatch({
        type: GET_USER_PASSWORDS_SUCCESS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: GET_USER_PASSWORDS_FAILURE,
        error: err.message,
      });
    }
  };
};

export const deleteUserCrederential = (id) => {
  return async (dispatch) => {
    dispatch({
      type: DELETE_USER_CREDENTIAL_REQUEST,
    });

    try {
      const URL = `${API_URL}/delete/originandpassword/${id}`;
      const response = await axios.delete(URL);
      dispatch({
        type: DELETE_USER_CREDENTIAL_SUCCESS,
        payload: response?.data,
      });
    } catch (err) {
      dispatch({
        type: DELETE_USER_CREDENTIAL_FAILURE,
        error: err.message,
      });
    }
  };
};

export const setLoggedInUserMpin = (mpin) => {
  return {
    type: SET_LOGGEDIN_USER_MPIN,
    payload: mpin,
  };
};

export const setSelectedUsername = (username) => {
  return {
    type: SET_SELECTED_USERNAME,
    payload: username,
  };
};

export const setSelectedPassword = (password) => {
  return {
    type: SET_SELECTED_USERNAME,
    payload: password,
  };
};

export const setSelectedUserId = (id) => {
  return {
    type: SET_SELECTED_ID,
    payload: id,
  };
};
