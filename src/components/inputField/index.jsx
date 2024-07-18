import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { StyledInputField } from "./inputField.styled";

const InputField = ({ value, type, placeholder, onChange, maxLength }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    onChange(value);
  };

  return (
    <div style={{ position: "relative" }}>
      <StyledInputField
        type={showPassword ? "text" : type}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        maxLength={maxLength}
        required
      />
      {type === "password" && (
        <button
          type="button"
          onClick={togglePasswordVisibility}
          style={{
            position: "absolute",
            right: "0",
            bottom: "0",
            transform: "translateY(-50%)",
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
          }}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      )}
    </div>
  );
};

export default InputField;
