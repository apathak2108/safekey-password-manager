import React, { useEffect, useState } from "react";
import { StyledAuthLayout } from "./auth.styled";
import Header from "../../components/header";
import PhoneAuthComponent from "../../components/phoneAuth";
import ExistingUserMPINComponent from "../../components/existingUserMpin";
import NewUserMPINComponent from "../../components/newUserMpin";
import { useSelector, useDispatch } from "react-redux";
import { checkUserExistence } from "../../redux/actions/authActions";
import STRINGS from "../../constants/strings";

const AuthContainer = () => {
  const dispatch = useDispatch();
  const [mobileError, setMobileError] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [currentComponent, setCurrentComponent] = useState("phoneAuth");
  const userExists = useSelector((state) => state?.auth?.userExists);
  console.log(userExists, "userExists");
  console.log(currentComponent, "currentComponent");

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
          <NewUserMPINComponent />
        )}
      </StyledAuthLayout>
    </>
  );
};

export default AuthContainer;
