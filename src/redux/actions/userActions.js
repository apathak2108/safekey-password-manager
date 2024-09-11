import { toast } from "react-toastify";
import db from "../../firebase";
import {
  CREATE_NEW_USER_REQUEST,
  CREATE_NEW_USER_SUCCESS,
  UPDATE_USER_DATA_SUCCESS,
  CREATE_NEW_USER_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
} from "../actionTypes";

export const createUserOrUpdate = (
  mobileNumber,
  mpin,
  navigate,
  signOut = false
) => {
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
          userCreatedTimeFrame: Date.now(),
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
          mpin: mpin || userDoc.data().mpin,
          isLoggedIn: !signOut,
          loggedInTime: signOut ? null : new Date(),
        };
        await db.collection("users").doc(userDoc.id).update(updatedUser);
        dispatch({
          type: UPDATE_USER_DATA_SUCCESS,
          payload: updatedUser,
        });
        if (signOut) {
          localStorage.removeItem("isLoggedIn");
          localStorage.removeItem("loggedUser");
          window.location.reload();
        } else {
          localStorage.setItem("isLoggedIn", true);
          localStorage.setItem("loggedUser", mobileNumber);
          window.location.href = "/";
        }
      }
    } catch (err) {
      dispatch({
        type: CREATE_NEW_USER_FAILURE,
        error: err.message,
      });
    }
  };
};

export const verifyAndLoginUser = (mobileNumber, enteredMpin, navigate) => {
  return async (dispatch) => {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    try {
      const userQuerySnapshot = await db
        .collection("users")
        .where("mobileNumber", "==", mobileNumber)
        .get();

      if (!userQuerySnapshot.empty) {
        const userDoc = userQuerySnapshot.docs[0];
        const userData = userDoc.data();

        if (userData.mpin === enteredMpin) {
          const loggedInTime = new Date();
          const updatedUser = {
            ...userData,
            isLoggedIn: true,
            loggedInTime,
          };

          await db.collection("users").doc(userDoc.id).update(updatedUser);

          dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: updatedUser,
          });
          toast.success("LoggedIn successfully!");
          window.location.href = "/";
          localStorage.setItem("isLoggedIn", true);
          localStorage.setItem("loggedUser", mobileNumber);
        } else {
          dispatch({
            type: USER_LOGIN_FAILURE,
            error: "Invalid MPIN",
          });
          toast.error("Entered MPIN is wrong!");
        }
      } else {
        dispatch({
          type: USER_LOGIN_FAILURE,
          error: "User not found",
        });
      }
    } catch (err) {
      dispatch({
        type: USER_LOGIN_FAILURE,
        error: err.message,
      });
    }
  };
};
