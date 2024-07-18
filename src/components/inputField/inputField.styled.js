import styled from "styled-components";

export const StyledInputContainer = styled.div`
  width: 100%;
  position: relative;
`;

export const StyledInputField = styled.input`
  height: 24px;
  text-indent: 4px;
  border: 1px solid #ccc;
  padding: 8px;
  border-radius: 4px;
`;

export const StyledEyeButton = styled.button`
  position: absolute;
  right: 0;
  bottom: 0;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
