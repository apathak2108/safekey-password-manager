import db from "../../firebase";
import {
  CHECK_USER_EXISTENCE_REQUEST,
  CHECK_USER_EXISTENCE_SUCCESS,
  CHECK_USER_EXISTENCE_FAILURE,
  CREATE_NEW_USER_REQUEST,
  CREATE_NEW_USER_SUCCESS,
  UPDATE_USER_DATA_SUCCESS,
  CREATE_NEW_USER_FAILURE,
} from "../actionTypes";

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
        error: err,
      });
    }
  };
};