import React from "react";
import { StyledButton } from "./button.styled";

const Button = ({ name, onClick }) => {
  return <StyledButton onClick={onClick}>{name}</StyledButton>;
};

export default Button;
