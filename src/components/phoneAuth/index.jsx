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
import { INDIA_ICON_PATH } from "../../constants/paths";
import {
  checkPhoneNumber,
  setIsAuth,
  setPhoneNumber,
} from "../../redux/actions/authActions";
import { handlePhoneInputChange } from "../../utils";
import Loader from "../loader";

const PhoneAuthComponent = () => {
  const dispatch = useDispatch();
  const [phoneError, setPhoneError] = useState("");
  const phoneNumber = useSelector((state) => state?.auth?.phoneNumber);
  const loading = useSelector((state) => state?.auth?.loading);

  const handleInputChange = (event) => {
    handlePhoneInputChange(
      event,
      dispatch,
      setPhoneNumber,
      setPhoneError,
      STRINGS
    );
  };
  const handlePhoneNumberContinue = () => {
    dispatch(checkPhoneNumber(phoneNumber));
    dispatch(setIsAuth());
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
        <StyledIndiaIcon src={INDIA_ICON_PATH} alt="india-icon" />
        <StyledContinueButton onClick={handlePhoneNumberContinue}>
          {loading ? <Loader /> : STRINGS.CONTINUE}
        </StyledContinueButton>
      </StyledInputContainer>
    </StyledMobileInputContainer>
  );
};

export default PhoneAuthComponent;
