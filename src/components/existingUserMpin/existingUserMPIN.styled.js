import styled from "styled-components";

export const StyledMPINInputContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 24px;
`;

export const StyledDigitInput = styled.input`
  height: 40px;
  width: 40px;
  text-align: center;
  font-size: 18px;
  border: 1px solid #000;
  border-radius: 4px;
`;

export const StyledTextContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  font-family: system-ui;
`;


export const StyledInputCard = styled.main`
  display: flex;
  flex-flow: column;
  background-color: #eaeded;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.6);
  border-radius: 6px;
  padding: 24px;
  gap: 4px;
`;
