import db from "../../firebase";
import {
  GET_USER_PASSWORDS_FAILURE,
  GET_USER_PASSWORDS_REQUEST,
  GET_USER_PASSWORDS_SUCCESS,
  SET_SELECTED_PASSWORD_INDEX,
} from "../actionTypes";

export const getUserPasswords = () => {
  return async (dispatch) => {
    dispatch({
      type: GET_USER_PASSWORDS_REQUEST,
    });
    try {
      const mobileNumber = localStorage.getItem("loggedUser");
      const userQuerySnapshot = await db
        .collection("users")
        .where("mobileNumber", "==", mobileNumber)
        .get();
      const userDoc = userQuerySnapshot.docs[0];
      const userData = userDoc.data();
      if (userData && userData.passwords) {
        dispatch({
          type: GET_USER_PASSWORDS_SUCCESS,
          payload: userData.passwords,
        });
      } else {
        dispatch({
          type: GET_USER_PASSWORDS_FAILURE,
          error: "No passwords found!",
        });
      }
    } catch (err) {
      dispatch({
        type: GET_USER_PASSWORDS_FAILURE,
        error: err.message,
      });
    }
  };
};

export const setSelectedPasswordIndex = (index) => ({
  type: SET_SELECTED_PASSWORD_INDEX,
  payload: index,
});
