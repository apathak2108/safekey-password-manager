import React, { useState } from "react";
import {
  StyledAuthLayout,
  StyledContinueButton,
  StyledErrorMessage,
  StyledHeaderArticle,
  StyledIndiaIcon,
  StyledInputContainer,
  StyledMobileInputContainer,
  StyledPhoneInput,
  StyledTextArticle,
  StyledTextContainer,
} from "./auth.styled";
import Header from "../../components/header";
import { useDispatch, useSelector } from "react-redux";
import { setPhoneNumber } from "../../redux/actions/authActions";
import STRINGS from "../../constants/strings";
import PATHS from "../../constants/paths";

const AuthContainer = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState("");

  const phoneNumber = useSelector((state) => state?.auth?.phoneNumber);

  const handleChange = (event) => {
    const newValue = event.target.value;
    if (/^\d*$/.test(newValue)) {
      if (newValue.length <= 10) {
        dispatch(setPhoneNumber(newValue));
        setError("");
      } else {
        setError(STRINGS.MAXLEN_ERROR_MESSAGE);
      }
    }
  };
  return (
    <>
      <Header flag={false} />
      <StyledAuthLayout>
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
              onChange={(e) => handleChange(e)}
              maxLength={STRINGS.PHONE_MAXLEN}
            />
            {error && <StyledErrorMessage>{error}</StyledErrorMessage>}
            <StyledIndiaIcon src={PATHS.INDIA_ICON} alt="india-icon" />
            <StyledContinueButton>{STRINGS.CONTINUE}</StyledContinueButton>
          </StyledInputContainer>
        </StyledMobileInputContainer>
      </StyledAuthLayout>
      <hr />
      <StyledAuthLayout>
        <StyledMobileInputContainer>
          <StyledTextContainer>Enter MPIN</StyledTextContainer>
          <StyledInputContainer></StyledInputContainer>
        </StyledMobileInputContainer>
      </StyledAuthLayout>
    </>
  );
};

export default AuthContainer;
