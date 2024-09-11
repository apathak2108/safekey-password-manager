import React, { useEffect, useState } from "react";
import { StyledAuthLayout } from "./auth.styled.js";
import Header from "../../components/header";
import PhoneAuthComponent from "../../components/phoneAuth";
import ExistingUserMPINComponent from "../../components/existingUserMpin";
import NewUserMPINComponent from "../../components/newUserMpin";
import { useSelector, useDispatch } from "react-redux";
import { checkUserExistence } from "../../redux/actions/authActions";
import STRINGS from "../../constants/strings";
import { createUserOrUpdate } from "../../redux/actions/userActions";
import { useNavigate } from "react-router-dom";

const AuthContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [mobileError, setMobileError] = useState(STRINGS.EMPTY_STRING);
  const [mobileNumber, setMobileNumber] = useState(STRINGS.EMPTY_STRING);
  const [currentComponent, setCurrentComponent] = useState(
    STRINGS.PHONE_AUTH_STATE
  );
  const userExists = useSelector((state) => state?.auth?.userExists);

  const handlePhoneNumberContinue = () => {
    if (mobileNumber.length !== 10) {
      setMobileError(STRINGS.INVALID_PHONE_ERROR);
      return;
    }
    dispatch(checkUserExistence(mobileNumber));
  };

  const handleMobileInputChange = (e) => {
    const enteredNumber = e.target.value;
    if (/^\d*$/.test(enteredNumber)) {
      if (enteredNumber.length <= 10) {
        setMobileNumber(enteredNumber);
        setMobileError(STRINGS.EMPTY_STRING);
      } else {
        setMobileError(STRINGS.MAXLEN_ERROR_MESSAGE);
      }
    }
  };

  useEffect(() => {
    if (userExists === true) {
      setCurrentComponent(STRINGS.ENTER_MPIN_STATE);
    } else if (userExists === false) {
      setCurrentComponent(STRINGS.CREATE_MPIN_STATE);
      dispatch(
        createUserOrUpdate(mobileNumber, STRINGS.EMPTY_STRING, navigate)
      );
    }
  }, [userExists]);

  return (
    <>
      <Header flag={false} />
      <StyledAuthLayout>
        {currentComponent === STRINGS.PHONE_AUTH_STATE && (
          <PhoneAuthComponent
            mobileNumber={mobileNumber}
            onChange={handleMobileInputChange}
            onContinue={handlePhoneNumberContinue}
            err={mobileError}
          />
        )}
        {currentComponent === STRINGS.ENTER_MPIN_STATE && (
          <ExistingUserMPINComponent mobileNumber={mobileNumber} />
        )}
        {currentComponent === STRINGS.CREATE_MPIN_STATE && (
          <NewUserMPINComponent mobileNumber={mobileNumber} />
        )}
      </StyledAuthLayout>
    </>
  );
};

export default AuthContainer;
