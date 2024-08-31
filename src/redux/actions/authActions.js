import axios from "axios";
import {
  CHECK_USER_EXISTENCE_REQUEST,
  CHECK_USER_EXISTENCE_SUCCESS,
  CHECK_USER_EXISTENCE_FAILURE,
} from "../actionTypes";
import db from "../../firebase";

export const checkUserExistence = (mobileNumber) => {
  return async (dispatch) => {
    dispatch({
      type: CHECK_USER_EXISTENCE_REQUEST,
    });
    try {
      const userQuerySnapshot = await db
        .collection("users")
        .where("mobileNumber", "==", mobileNumber)
        .get();

      const userExists = !userQuerySnapshot.empty;
      dispatch({
        type: CHECK_USER_EXISTENCE_SUCCESS,
        payload: userExists,
      });
    } catch (err) {
      dispatch({
        type: CHECK_USER_EXISTENCE_FAILURE,
        error: err.message,
      });
    }
  };
};
