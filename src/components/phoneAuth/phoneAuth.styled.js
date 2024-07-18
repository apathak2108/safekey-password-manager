import styled from "styled-components";

export const StyledMobileInputContainer = styled.main`
  display: flex;
  flex-flow: column;
  background-color: #eaeded;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.6);
  border-radius: 6px;
  padding: 24px;
  gap: 48px;
`;

export const StyledTextContainer = styled.section`
  display: flex;
  flex-flow: column;
  font-family: system-ui;
  gap: 8px;
`;

export const StyledInputContainer = styled.section`
  display: flex;
  flex-flow: column;
`;

export const StyledHeaderArticle = styled.article`
  font-size: 36px;
  font-weight: 500;
  letter-spacing: 1.5px;
`;

export const StyledTextArticle = styled.article`
  font-size: 18px;
`;

export const StyledPhoneInput = styled.input`
  border: none;
  width: 100%;
  height: 32px;
  border: 1px solid #1b2631;
  border-radius: 4px;
  background-color: #fff;
  text-indent: 44px;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 2px;
  position: relative;
  z-index: 1;
  &::placeholder {
    letter-spacing: 0;
  }
`;

export const StyledIndiaIcon = styled.img`
  z-index: 1;
  position: absolute;
  height: 36px;
  margin-left: 4px;
`;

export const StyledContinueButton = styled.button`
  width: 100%;
  height: 36px;
  border: none;
  background-color: #1b2631;
  border-radius: 4px;
  color: #fff;
  margin-left: 3px;
  cursor: pointer;
  font-size: 1rem;
  letter-spacing: 2px;
  margin-top: 32px;

  &:hover {
    background-color: #141b23;
  }
  &:disabled {
    cursor: not-allowed;
  }
`;

export const StyledErrorMessage = styled.p`
  margin: 0;
  padding: 0;
  font-size: 14px;
  color: red;
  margin-top: 8px;
`;