import styled from "styled-components";
import { PiArrowCircleRightDuotone } from "react-icons/pi";

export const StyledPasswordsMainContainer = styled.main`
  width: 100%;
  padding: 32px 216px 0;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 12px;
  margin-top: 260px;
`;

export const PasswordContainerHeader = styled.header`
  width: 100%;
  padding: 24px;
  display: flex;
  justify-content: space-between;
`;

export const StyledHeaderText = styled.span`
  font-size: 24px;
  font-weight: 400;
`;

export const StyledAddButton = styled.button`
  padding: 3px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-weight: 500;
  border: 1px solid #1b2631;
  color: #1b2631;
  border-radius: 18px;

  &:hover {
    background-color: hsl(184, 5%, 85%);
  }
  &:active {
    background-color: hsl(184, 5%, 65%);
  }
`;

export const StyledDescriptionContainer = styled.article`
  width: 100%;
  font-weight: 400;
`;

export const StyledPasswordCardsContainer = styled.div`
  border-radius: 12px;
  width: 100%;
  margin-top: 32px;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
  padding: 16px;
  background-color: hsl(184, 5%, 85%);
  position: relative;
  gap: 16px;
  padding-top: 16px;
`;

export const StyledPasswordCard = styled.div`
  height: 100%;
  width: 100%;
  font-weight: 400;
  font-size: 18px;
  border-bottom: 1px solid grey;
  cursor: pointer;
  padding-bottom: 12px;

  &:hover {
    font-weight: 500;
  }
`;

export const StyledArrowIcon = styled(PiArrowCircleRightDuotone)`
  position: absolute;
  right: 28px;
  cursor: pointer;
  font-size: larger;
`;
