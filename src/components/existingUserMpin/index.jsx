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
  StyledErrorContainer,
  StyledErrorMessage,
} from "../phoneAuth/phoneAuth.styled";
import { handleKeyDown, handleMPINChange } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import { setIsMpinCorrect } from "../../redux/actions/authActions";
import { useNavigate } from "react-router-dom";
import {
  setIsEditModalOpen,
  setIsMpinModalOpen,
} from "../../redux/actions/homeActions";
import Loader from "../loader";

const ExistingUserMPINComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [digits, setDigits] = useState(["", "", "", ""]);
  const [mpinError, setMPINError] = useState("");
  const inputRefs = useRef([]);
  const phoneNumber = useSelector((state) => state?.auth?.phoneNumber);
  const isMpinCorrect = useSelector((state) => state?.auth?.isMpinCorrect);
  const loading = useSelector((state) => state?.auth?.loading);
  const error = useSelector((state) => state?.auth?.error);
  const mpin = digits.join("");
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  console.log("error:", error, "loading:", loading);

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

  useEffect(() => {
    dispatch(setIsMpinCorrect(mpin, phoneNumber));
  }, [mpin.length === 4]);

  const handleIsExistingUser = () => {
    if (isLoggedIn) {
      dispatch(setIsEditModalOpen(true));
      dispatch(setIsMpinModalOpen());
    } else {
      if (isMpinCorrect) {
        navigate("/");
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("loggedUser", phoneNumber);
      } else {
        alert("Entered MPIN is wrong !");
      }
    }
  };

  return (
    <>
      {loading && <Loader />}
      {!loading && error && (
        <StyledErrorContainer>{error}</StyledErrorContainer>
      )}
      {!loading && !error && (
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
          <StyledContinueButton onClick={handleIsExistingUser}>
            {STRINGS.CONTINUE}
          </StyledContinueButton>
        </StyledInputCard>
      )}
    </>
  );
};

export default ExistingUserMPINComponent;
