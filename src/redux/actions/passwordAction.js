import { toast } from "react-toastify";
import db from "../../firebase";
import {
  GET_USER_PASSWORDS_FAILURE,
  GET_USER_PASSWORDS_REQUEST,
  GET_USER_PASSWORDS_SUCCESS,
  SET_SELECTED_PASSWORD_INDEX,
  UPDATE_PASSWORD_REQUEST,
  UPDATE_PASSWORD_FAILURE,
  UPDATE_PASSWORD_SUCCESS,
  DELETE_PASSWORD_SUCCESS,
  DELETE_PASSWORD_FAILURE,
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

export const updatePasswordAtIndex = (
  index,
  updatedUsername,
  updatedPassword
) => {
  return async (dispatch) => {
    const mobileNumber = localStorage.getItem("loggedUser");

    try {
      const userQuerySnapshot = await db
        .collection("users")
        .where("mobileNumber", "==", mobileNumber)
        .get();

      if (!userQuerySnapshot.empty) {
        const userDoc = userQuerySnapshot.docs[0];
        const userData = userDoc.data();
        const updatedPasswords = [...userData.passwords];

        updatedPasswords[index] = {
          username: updatedUsername,
          password: updatedPassword,
        };

        await db.collection("users").doc(userDoc.id).update({
          passwords: updatedPasswords,
        });

        dispatch({
          type: UPDATE_PASSWORD_SUCCESS,
          payload: updatedPasswords,
        });
        toast.success("Credentials updated successfully!");
      }
    } catch (error) {
      dispatch({
        type: UPDATE_PASSWORD_FAILURE,
        error: error.message,
      });
      toast.error(error.message);
    }
  };
};

export const deletePassword = (index) => {
  return async (dispatch) => {
    const mobileNumber = localStorage.getItem("loggedUser");

    try {
      const userQuerySnapshot = await db
        .collection("users")
        .where("mobileNumber", "==", mobileNumber)
        .get();

      if (!userQuerySnapshot.empty) {
        const userDoc = userQuerySnapshot.docs[0];
        const userData = userDoc.data();
        const updatedPasswords = [...userData.passwords];

        updatedPasswords.splice(index, 1);

        await db.collection("users").doc(userDoc.id).update({
          passwords: updatedPasswords,
        });

        dispatch({
          type: DELETE_PASSWORD_SUCCESS,
          payload: updatedPasswords,
        });
        toast.success("Credentials deleted successfully!");
      }
    } catch (error) {
      dispatch({
        type: DELETE_PASSWORD_FAILURE,
        error: error.message,
      });
      toast.error("Error occurred in deleting credentials");
    }
  };
};
