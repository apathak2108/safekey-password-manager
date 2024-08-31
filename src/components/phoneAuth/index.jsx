import React, { useState } from "react";
import {
  StyledContinueButton,
  StyledErrorMessage,
  StyledHeaderArticle,
  StyledIndiaIcon,
  StyledInputContainer,
  StyledMobileInputContainer,
  StyledPhoneAuthLoader,
  StyledPhoneInput,
  StyledTextArticle,
  StyledTextContainer,
} from "./phoneAuth.styled";
import { useDispatch, useSelector } from "react-redux";
import STRINGS from "../../constants/strings";
import { INDIA_ICON_PATH } from "../../constants/paths";
import { checkUserExistence } from "../../redux/actions/authActions";

const PhoneAuthComponent = () => {
  const dispatch = useDispatch();
  const [mobileError, setMobileError] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const { loading, userExists, error } = useSelector((state) => state?.auth);
  console.log(loading, "loading", userExists, "userExists", error, "error");

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

  const handlePhoneNumberContinue = () => {
    dispatch(checkUserExistence(mobileNumber));
  };

  return (
    <StyledMobileInputContainer>
      <StyledTextContainer>
        <StyledHeaderArticle>{STRINGS.WELCOME}</StyledHeaderArticle>
        <StyledTextArticle>{STRINGS.WELCOME_TEXT}</StyledTextArticle>
      </StyledTextContainer>
      <StyledInputContainer>
        <StyledPhoneInput
          placeholder={STRINGS.PHONE_PLACEHOLDER}
          type={STRINGS.PHONE_INPUT_TYPE}
          value={mobileNumber}
          onChange={handleMobileInputChange}
          maxLength={STRINGS.PHONE_MAXLEN}
        />
        {mobileError && <StyledErrorMessage>{mobileError}</StyledErrorMessage>}
        <StyledIndiaIcon src={INDIA_ICON_PATH} alt="india-icon" />
        <StyledContinueButton
          onClick={handlePhoneNumberContinue}
          disabled={mobileNumber.length !== 10}
        >
          {loading ? <StyledPhoneAuthLoader /> : STRINGS.CONTINUE}
        </StyledContinueButton>
      </StyledInputContainer>
    </StyledMobileInputContainer>
  );
};

export default PhoneAuthComponent;
