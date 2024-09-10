import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {
  StyledEyeButton,
  StyledInputContainer,
  StyledInputField,
} from "./inputField.styled.js";
import STRINGS from "../../constants/strings";

const InputField = ({ value, type, placeholder, onChange, maxLength }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <StyledInputContainer>
      <StyledInputField
        type={showPassword ? `${STRINGS.TEXT_INPUT_TYPE}` : type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        maxLength={maxLength}
        required
      />
      {type === `${STRINGS.PASSWORD_INPUT_TYPE}` && (
        <StyledEyeButton
          type={STRINGS.BUTTON_INPUT_TYPE}
          onClick={togglePasswordVisibility}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </StyledEyeButton>
      )}
    </StyledInputContainer>
  );
};

export default InputField;
