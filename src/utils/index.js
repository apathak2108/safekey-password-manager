// phoneAuth
export const handlePhoneInputChange = (
  event,
  dispatch,
  setPhoneNumber,
  setPhoneError,
  STRINGS
) => {
  const enteredNumber = event.target.value;
  if (/^\d*$/.test(enteredNumber)) {
    if (enteredNumber.length <= 10) {
      dispatch(setPhoneNumber(enteredNumber));
      setPhoneError("");
    } else {
      setPhoneError(STRINGS.MAXLEN_ERROR_MESSAGE);
    }
  }
};

// existingUserMpin
export const handleMPINChange = (
  event,
  index,
  digits,
  setDigits,
  setMPINError,
  inputRefs,
  STRINGS
) => {
  const enteredDigit = event.target.value;
  if (/^[0-9]?$/.test(enteredDigit)) {
    setMPINError("");
    const newValues = [...digits];
    newValues[index] = enteredDigit;
    setDigits(newValues);

    if (enteredDigit && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  } else {
    setMPINError(STRINGS.NUM_ERROR_MESSAGE);
  }
};

// handling backspace on mpin input field
export const handleKeyDown = (event, index, digits, inputRefs, handleInputChange) => {
  if (event.key === "Backspace") {
    if (!digits[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
    if (digits[index]) {
      handleInputChange({ target: { value: "" } }, index);
    }
  } else if (event.key === "ArrowLeft" && index > 0 && !digits[index]) {
    inputRefs.current[index - 1].focus();
  } else if (
    event.key === "ArrowRight" &&
    index < inputRefs.current.length - 1 &&
    !digits[index]
  ) {
    inputRefs.current[index + 1].focus();
  }
};


// newUserMpin
export const handleCreateMPINChange = (
  event,
  index,
  createMPINdigits,
  setCreateMPINDigits,
  setCreateMPINError,
  createInputRefs,
  STRINGS
) => {
  const enteredDigit = event.target.value;
  if (/^[0-9]?$/.test(enteredDigit)) {
    setCreateMPINError("");
    const newMPINdigits = [...createMPINdigits];
    newMPINdigits[index] = enteredDigit;
    setCreateMPINDigits(newMPINdigits);

    if (enteredDigit && index < createInputRefs.current.length - 1) {
      createInputRefs.current[index + 1].focus();
    }
  } else {
    setCreateMPINError(STRINGS.NUM_ERROR_MESSAGE);
  }
};

export const handleReEnterMPINChange = (
  event,
  index,
  reEnterMPINdigits,
  setReEnterMPINDigits,
  createMPINdigits,
  setReEnterMPINError,
  reEnterInputRefs,
  setIsContinueDisabled
) => {
  const reEnteredDigit = event.target.value;
  const newMPINdigits = [...reEnterMPINdigits];
  newMPINdigits[index] = reEnteredDigit;
  setReEnterMPINDigits(newMPINdigits);

  if (reEnteredDigit && index < reEnterInputRefs.current.length - 1) {
    reEnterInputRefs.current[index + 1].focus();
  }
  if (newMPINdigits.join("") !== createMPINdigits.join("")) {
    setReEnterMPINError("MPINs do not match !");
    setIsContinueDisabled(true);
  } else {
    setReEnterMPINError("");
    setIsContinueDisabled(false);
  }
};
