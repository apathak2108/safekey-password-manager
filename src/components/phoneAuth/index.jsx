import React from "react";
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
} from "./phoneAuth.styled.js";
import { useSelector } from "react-redux";
import STRINGS from "../../constants/strings";
import { INDIA_ICON_PATH } from "../../constants/paths";

const PhoneAuthComponent = ({ mobileNumber, onChange, onContinue, err }) => {
  const { loading } = useSelector((state) => state?.auth);

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
          onChange={onChange}
          maxLength={STRINGS.PHONE_MAXLEN}
        />
        {err && <StyledErrorMessage>{err}</StyledErrorMessage>}
        <StyledIndiaIcon src={INDIA_ICON_PATH} alt="india-icon" />
        <StyledContinueButton
          onClick={onContinue}
          disabled={mobileNumber.length !== 10 || loading}
        >
          {loading ? <StyledPhoneAuthLoader /> : STRINGS.CONTINUE}
        </StyledContinueButton>
      </StyledInputContainer>
    </StyledMobileInputContainer>
  );
};

export default PhoneAuthComponent;
