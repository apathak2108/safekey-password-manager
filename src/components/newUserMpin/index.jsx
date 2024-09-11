import React, { useRef, useState } from "react";
import {
  StyledDigitInput,
  StyledInputCard,
  StyledMPINInputContainer,
  StyledTextContainer,
} from "../existingUserMpin/existingUserMPIN.styled.js";
import STRINGS from "../../constants/strings";
import {
  StyledContinueButton,
  StyledErrorContainer,
  StyledErrorMessage,
} from "../phoneAuth/phoneAuth.styled.js";
import { handleCreateMPINChange, handleReEnterMPINChange } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "../loader";
import { createUserOrUpdate } from "../../redux/actions/userActions";
import { DIGITS_EMPTY_ARRAY } from "../../constants/paths.js";

const NewUserMPINComponent = ({ mobileNumber }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [createMPINdigits, setCreateMPINDigits] = useState(DIGITS_EMPTY_ARRAY);
  const [reEnterMPINdigits, setReEnterMPINDigits] = useState(DIGITS_EMPTY_ARRAY);
  const [reEnterMPINError, setReEnterMPINError] = useState(STRINGS.EMPTY_STRING);
  const [createMPINError, setCreateMPINError] = useState(STRINGS.EMPTY_STRING);
  const [isContinueDisabled, setIsContinueDisabled] = useState(true);
  const { loading, error } = useSelector((state) => state?.user);

  const createInputRefs = useRef([]);
  const reEnterInputRefs = useRef([]);

  const handleCreateInputChange = (event, index) => {
    handleCreateMPINChange(
      event,
      index,
      createMPINdigits,
      setCreateMPINDigits,
      setCreateMPINError,
      createInputRefs,
      STRINGS
    );
  };

  const handleReEnterInputChange = (event, index) => {
    handleReEnterMPINChange(
      event,
      index,
      reEnterMPINdigits,
      setReEnterMPINDigits,
      createMPINdigits,
      setReEnterMPINError,
      reEnterInputRefs,
      setIsContinueDisabled
    );
  };

  const handleNewMpinCreated = () => {
    const createdMpin = createMPINdigits.join(STRINGS.EMPTY_STRING);
    dispatch(createUserOrUpdate(mobileNumber, createdMpin, navigate));
  };

  return (
    <>
      {!loading && error && (
        <StyledErrorContainer>{error}</StyledErrorContainer>
      )}
      {!loading && !error && (
        <StyledInputCard>
          <StyledTextContainer>{STRINGS.CREATE_MPIN}</StyledTextContainer>
          <StyledMPINInputContainer>
            {[0, 1, 2, 3].map((_, index) => (
              <StyledDigitInput
                key={index}
                type={STRINGS.PASSWORD_INPUT_TYPE}
                maxLength={STRINGS.MPIN_MAXLEN}
                onChange={(event) => handleCreateInputChange(event, index)}
                ref={(el) => (createInputRefs.current[index] = el)}
              />
            ))}
          </StyledMPINInputContainer>
          {createMPINError && (
            <StyledErrorMessage>{createMPINError}</StyledErrorMessage>
          )}
          <hr />
          <StyledTextContainer>{STRINGS.RE_ENTER_MPIN}</StyledTextContainer>
          <StyledMPINInputContainer>
            {[0, 1, 2, 3].map((_, index) => (
              <StyledDigitInput
                key={index}
                type={STRINGS.PASSWORD_INPUT_TYPE}
                maxLength="1"
                onChange={(event) => handleReEnterInputChange(event, index)}
                ref={(el) => (reEnterInputRefs.current[index] = el)}
              />
            ))}
          </StyledMPINInputContainer>
          {reEnterMPINError && (
            <StyledErrorMessage>{reEnterMPINError}</StyledErrorMessage>
          )}
          {loading ? (
            <Loader />
          ) : (
            <StyledContinueButton
              disabled={isContinueDisabled}
              onClick={handleNewMpinCreated}
            >
              {STRINGS.CONTINUE}
            </StyledContinueButton>
          )}
        </StyledInputCard>
      )}{" "}
    </>
  );
};

export default NewUserMPINComponent;
