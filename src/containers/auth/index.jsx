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
  const [mobileError, setMobileError] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [currentComponent, setCurrentComponent] = useState("phoneAuth");
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
        setMobileError("");
      } else {
        setMobileError(STRINGS.MAXLEN_ERROR_MESSAGE);
      }
    }
  };

  useEffect(() => {
    if (userExists === true) {
      setCurrentComponent("enterMpin");
    } else if (userExists === false) {
      setCurrentComponent("createMpin");
      dispatch(createUserOrUpdate(mobileNumber, "", navigate));
    }
  }, [userExists]);

  return (
    <>
      <Header flag={false} />
      <StyledAuthLayout>
        {currentComponent === "phoneAuth" && (
          <PhoneAuthComponent
            mobileNumber={mobileNumber}
            onChange={handleMobileInputChange}
            onContinue={handlePhoneNumberContinue}
            err={mobileError}
          />
        )}
        {currentComponent === "enterMpin" && (
          <ExistingUserMPINComponent mobileNumber={mobileNumber} />
        )}
        {currentComponent === "createMpin" && (
          <NewUserMPINComponent mobileNumber={mobileNumber} />
        )}
      </StyledAuthLayout>
    </>
  );
};

export default AuthContainer;
