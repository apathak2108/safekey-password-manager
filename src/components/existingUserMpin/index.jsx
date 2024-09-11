import React, { useRef, useState } from "react";
import {
  StyledDigitInput,
  StyledInputCard,
  StyledMPINInputContainer,
  StyledTextContainer,
} from "./existingUserMPIN.styled.js";
import STRINGS from "../../constants/strings";
import {
  StyledContinueButton,
  StyledErrorMessage,
  StyledPhoneAuthLoader,
} from "../phoneAuth/phoneAuth.styled.js";
import { handleKeyDown, handleMPINChange } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { verifyAndLoginUser } from "../../redux/actions/userActions";
import { DIGITS_EMPTY_ARRAY } from "../../constants/paths.js";

const ExistingUserMPINComponent = ({ mobileNumber }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [digits, setDigits] = useState(DIGITS_EMPTY_ARRAY);
  const [mpinError, setMPINError] = useState(STRINGS.EMPTY_STRING);
  const inputRefs = useRef([]);
  const loading = useSelector((state) => state?.user?.loading);
  const mpin = digits.join(STRINGS.EMPTY_STRING);

  const handleInputChange = (event, index) => {
    handleMPINChange(
      event,
      index,
      digits,
      setDigits,
      setMPINError,
      inputRefs,
      STRINGS
    );
  };

  const handleClearNumber = (event, index) => {
    handleKeyDown(event, index, digits, inputRefs, handleInputChange);
  };

  const handleExistingUserContinue = () => {
    setMPINError(STRINGS.EMPTY_STRING);
    dispatch(verifyAndLoginUser(mobileNumber, mpin, navigate));
  };

  return (
    <>
      {!loading && (
        <StyledInputCard>
          <StyledTextContainer>{STRINGS.ENTER_MPIN}</StyledTextContainer>
          <StyledMPINInputContainer>
            {[0, 1, 2, 3].map((_, index) => (
              <StyledDigitInput
                key={index}
                type={STRINGS.PASSWORD_INPUT_TYPE}
                maxLength="1"
                onChange={(event) => handleInputChange(event, index)}
                onKeyDown={(event) => handleClearNumber(event, index)}
                ref={(el) => (inputRefs.current[index] = el)}
              />
            ))}
          </StyledMPINInputContainer>
          {mpinError && <StyledErrorMessage>{mpinError}</StyledErrorMessage>}
          <StyledContinueButton onClick={handleExistingUserContinue}>
            {loading ? <StyledPhoneAuthLoader /> : STRINGS.CONTINUE}
          </StyledContinueButton>
        </StyledInputCard>
      )}
    </>
  );
};

export default ExistingUserMPINComponent;
