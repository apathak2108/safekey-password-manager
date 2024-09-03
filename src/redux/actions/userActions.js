import db from "../../firebase";
import {
  CREATE_NEW_USER_REQUEST,
  CREATE_NEW_USER_SUCCESS,
  UPDATE_USER_DATA_SUCCESS,
  CREATE_NEW_USER_FAILURE,
} from "../actionTypes";

export const createUserOrUpdate = (mobileNumber) => {
  return async (dispatch) => {
    dispatch({
      type: CREATE_NEW_USER_REQUEST,
    });
    try {
      const userQuerySnapshot = await db
        .collection("users")
        .where("mobileNumber", "==", mobileNumber)
        .get();

      if (userQuerySnapshot.empty) {
        const newUser = {
          mobileNumber,
          isLoggedIn: false,
          mpin: null,
          loggedInTime: null,
          userCreatedTimeFrame: db.FieldValue.serverTimeStamp(),
          passwords: [],
        };
        await db.collection("users").add(newUser);
        dispatch({
          type: CREATE_NEW_USER_SUCCESS,
          payload: newUser,
        });
      } else {
        const userDoc = userQuerySnapshot.docs[0];
        const updatedUser = {
          ...userDoc.data(),
          loggedInTime: null,
        };
        await db.collection("users").doc(userDoc.id).update(updatedUser);
        dispatch({
          type: UPDATE_USER_DATA_SUCCESS,
          payload: updatedUser,
        });
      }
    } catch (err) {
      dispatch({
        type: CREATE_NEW_USER_FAILURE,
        error: err.message,
      });
    }
  };
};
