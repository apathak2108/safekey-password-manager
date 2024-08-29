import React, { useRef, useState } from "react";
import {
  StyledDigitInput,
  StyledInputCard,
  StyledMPINInputContainer,
  StyledTextContainer,
} from "../existingUserMpin/existingUserMpin.styled";
import STRINGS from "../../constants/strings";
import {
  StyledContinueButton,
  StyledErrorContainer,
  StyledErrorMessage,
} from "../phoneAuth/phoneAuth.styled";
import { handleCreateMPINChange, handleReEnterMPINChange } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import {
  createMpinPost,
  setCreatedMPIN,
  setIsMpinCreated,
} from "../../redux/actions/authActions";
import { useNavigate } from "react-router-dom";
import Loader from "../loader";

const NewUserMPINComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [createMPINdigits, setCreateMPINDigits] = useState(["", "", "", ""]);
  const [reEnterMPINdigits, setReEnterMPINDigits] = useState(["", "", "", ""]);
  const [reEnterMPINError, setReEnterMPINError] = useState("");
  const [createMPINError, setCreateMPINError] = useState("");
  const [isContinueDisabled, setIsContinueDisabled] = useState(true);
  const phoneNumber = useSelector((state) => state?.auth?.phoneNumber);
  const loading = useSelector((state) => state?.auth?.loading);
  const error = useSelector((state) => state?.auth?.error);

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
    const createdMpin = createMPINdigits.join("");
    dispatch(setIsMpinCreated());
    dispatch(setCreatedMPIN(createMPINdigits.join("")));
    dispatch(createMpinPost(createdMpin, phoneNumber));
    navigate("/");
    localStorage.setItem("isLoggedIn", true);
    localStorage.setItem("loggedUser", phoneNumber);
  };

  return (
    <>
      {loading && !error && <Loader />}
      {!loading && error && <StyledErrorContainer>{error}</StyledErrorContainer>}
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
          <StyledContinueButton
            disabled={isContinueDisabled}
            onClick={handleNewMpinCreated}
          >
            {STRINGS.CONTINUE}
          </StyledContinueButton>
        </StyledInputCard>
      )}{" "}
    </>
  );
};

export default NewUserMPINComponent;
