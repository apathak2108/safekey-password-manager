import React, { useEffect, useRef, useState } from "react";

import {
  StyledDigitInput,
  StyledInputCard,
  StyledMPINInputContainer,
  StyledTextContainer,
} from "./existingUserMpin.styled";
import STRINGS from "../../constants/strings";
import {
  StyledContinueButton,
  StyledErrorMessage,
} from "../phoneAuth/phoneAuth.styled";
import { handleMPINChange } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import {
  setIsLoggedIn,
  setISLoggedIn,
  setIsMpinCorrect,
} from "../../redux/actions/authActions";
import { useNavigate } from "react-router-dom";

const ExistingUserMPINComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [digits, setDigits] = useState(["", "", "", ""]);
  const [mpinError, setMPINError] = useState("");
  const inputRefs = useRef([]);
  const phoneNumber = useSelector((state) => state?.auth?.phoneNumber);
  const isMpinCorrect = useSelector((state) => state?.auth?.isMpinCorrect);
  const mpin = digits.join("");

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

  useEffect(() => {
    dispatch(setIsMpinCorrect(mpin, phoneNumber));
  }, [mpin.length === 4]);

  const handleIsExistingUser = () => {
    if (isMpinCorrect) {
      dispatch(setIsLoggedIn());
      navigate("/");
    } else {
      alert("Entered MPIN is wrong !");
    }
  };

  return (
    <StyledInputCard>
      <StyledTextContainer>{STRINGS.ENTER_MPIN}</StyledTextContainer>
      <StyledMPINInputContainer>
        {[0, 1, 2, 3].map((_, index) => (
          <StyledDigitInput
            key={index}
            type={STRINGS.PASSWORD_INPUT_TYPE}
            maxLength="1"
            onChange={(event) => handleInputChange(event, index)}
            ref={(el) => (inputRefs.current[index] = el)}
          />
        ))}
      </StyledMPINInputContainer>
      {mpinError && <StyledErrorMessage>{mpinError}</StyledErrorMessage>}
      <StyledContinueButton onClick={handleIsExistingUser}>
        {STRINGS.CONTINUE}
      </StyledContinueButton>
    </StyledInputCard>
  );
};

export default ExistingUserMPINComponent;
