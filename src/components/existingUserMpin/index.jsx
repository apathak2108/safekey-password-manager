import React, { useRef, useState } from "react";

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

const ExistingUserMPINComponent = () => {
  const [digits, setDigits] = useState(["", "", "", ""]);
  const [mpinError, setMPINError] = useState("");
  const inputRefs = useRef([]);

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

  return (
    <StyledInputCard>
      <StyledTextContainer>{STRINGS.ENTER_MPIN}</StyledTextContainer>
      <StyledMPINInputContainer>
        {[0, 1, 2, 3].map((key, index) => (
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
      <StyledContinueButton>{STRINGS.CONTINUE}</StyledContinueButton>
    </StyledInputCard>
  );
};

export default ExistingUserMPINComponent;
