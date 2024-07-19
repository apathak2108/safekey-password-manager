import axios from "axios";
import { API_URL } from "../../constants/paths";
import {
  IS_PASSWORD_MODAL_OPEN,
  IS_MPIN_MODAL_OPEN,
  ADD_USERNAME_AND_PASS_REQUEST,
  ADD_USERNAME_AND_PASS_SUCCESS,
  ADD_USERNAME_AND_PASS_FAILURE,
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
  console.log("reached actions");
  return async (dispatch) => {
    dispatch({ type: ADD_USERNAME_AND_PASS_REQUEST });
    try {
      const URL = `${API_URL}/create/originandpassword/${phoneNumber}`;
      const postData = {
        originName: userName,
        originPassword: password,
      };
      console.log("inside try 1");
      const response = await axios.post(URL, postData);
      console.log("inside try 2");
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
