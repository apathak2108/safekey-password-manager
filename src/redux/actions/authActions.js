import axios from "axios";
import {
  SET_PHONE_NUMBER,
  CHECK_PHONE_NUMBER_REQUEST,
  CHECK_PHONE_NUMBER_SUCCESS,
  CHECK_PHONE_NUMBER_FAILURE,
  SET_AUTH_STATUS,
  IS_MPIN_CREATED,
  SET_CREATED_MPIN,
  CREATE_MPIN_POST_REQUEST,
  CREATE_MPIN_POST_SUCCESS,
  CREATE_MPIN_POST_FAILURE,
  IS_MPIN_CORRECT_REQUEST,
  IS_MPIN_CORRECT_SUCCESS,
  IS_MPIN_CORRECT_FAILURE,
  SET_IS_LOGGED_IN,
} from "../actionTypes";
import { API_URL } from "../../constants/paths";

export const setIsAuth = () => {
  return {
    type: SET_AUTH_STATUS,
  };
};

export const setPhoneNumber = (number) => {
  return {
    type: SET_PHONE_NUMBER,
    payload: number,
  };
};

export const checkPhoneNumber = (phoneNumber) => {
  return async (dispatch) => {
    dispatch({ type: CHECK_PHONE_NUMBER_REQUEST });
    try {
      const URL = `${API_URL}/checkUser/${phoneNumber}`;
      const response = await axios.get(URL);
      const data = response?.data;
      dispatch({
        type: CHECK_PHONE_NUMBER_SUCCESS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: CHECK_PHONE_NUMBER_FAILURE,
        error: err.message,
      });
    }
  };
};

export const setIsMpinCreated = () => {
  return {
    type: IS_MPIN_CREATED,
  };
};

export const setCreatedMPIN = (mpin) => {
  return {
    type: SET_CREATED_MPIN,
    payload: mpin,
  };
};

export const createMpinPost = (createdMpin, phoneNumber) => {
  return async (dispatch) => {
    dispatch({
      type: CREATE_MPIN_POST_REQUEST,
    });
    try {
      const URL = `${API_URL}/create/mPin`;
      const postData = { mpin: createdMpin, mobileNumber: phoneNumber };
      const response = await axios.post(URL, postData);
      dispatch({
        type: CREATE_MPIN_POST_SUCCESS,
        payload: response?.data,
      });
    } catch (err) {
      dispatch({
        type: CREATE_MPIN_POST_FAILURE,
        error: err.message,
      });
    }
  };
};

export const setIsMpinCorrect = (mpin, phoneNumber) => {
  return async (dispatch) => {
    dispatch({
      type: IS_MPIN_CORRECT_REQUEST,
    });
    try {
      const URL = `${API_URL}/mpin/correct/${phoneNumber}/${mpin}`;
      const response = await axios.get(URL);
      const data = response.data;
      dispatch({
        type: IS_MPIN_CORRECT_SUCCESS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: IS_MPIN_CORRECT_FAILURE,
        error: err.message,
      });
    }
  };
};

export const setIsLoggedIn = () => {
  return {
    type: SET_IS_LOGGED_IN,
  };
};
