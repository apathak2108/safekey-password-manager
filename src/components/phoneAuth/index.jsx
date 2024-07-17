import React, { useState } from "react";
import {
  StyledContinueButton,
  StyledErrorMessage,
  StyledHeaderArticle,
  StyledIndiaIcon,
  StyledInputContainer,
  StyledMobileInputContainer,
  StyledPhoneInput,
  StyledTextArticle,
  StyledTextContainer,
} from "./phoneAuth.styled";
import { useDispatch, useSelector } from "react-redux";
import STRINGS from "../../constants/strings";
import PATHS from "../../constants/paths";
import { setPhoneNumber } from "../../redux/actions/authActions";
import { handlePhoneInputChange } from "../../utils";

const PhoneAuthComponent = () => {
  const dispatch = useDispatch();
  const [phoneError, setPhoneError] = useState("");
  const phoneNumber = useSelector((state) => state?.auth?.phoneNumber);

  const handleInputChange = (event) => {
    handlePhoneInputChange(
      event,
      dispatch,
      setPhoneNumber,
      setPhoneError,
      STRINGS
    );
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
          value={phoneNumber}
          onChange={(event) => handleInputChange(event)}
          maxLength={STRINGS.PHONE_MAXLEN}
        />
        {phoneError && <StyledErrorMessage>{phoneError}</StyledErrorMessage>}
        <StyledIndiaIcon src={PATHS.INDIA_ICON} alt="india-icon" />
        <StyledContinueButton>{STRINGS.CONTINUE}</StyledContinueButton>
      </StyledInputContainer>
    </StyledMobileInputContainer>
  );
};

export default PhoneAuthComponent;
