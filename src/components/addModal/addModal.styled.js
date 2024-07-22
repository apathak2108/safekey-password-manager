import styled from "styled-components";
import { StyledLayout } from "../layout/layout.styled";

export const StyledAddModalContainer = styled.div`
  height: fit-content;
  padding: 24px;
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  gap: 24px;
  border-radius: 6px;
  background-color: #fff;
  box-shadow: 0px 1px 4px 1px rgba(01, 10, 10, 0.3);
`;

export const StyledAddModalInputContainer = styled.div`
  display: flex;
  flex-flow: column;
  gap: 4px;
`;

export const StyledHeaderText = styled.header`
  font-size: 18px;
  font-weight: 500;
`;

export const StyledModalButtons = styled.div`
  display: flex;
  width: 100%;
  gap: 12px;
  justify-content: flex-end;
`;

export const StyledAddModalButton = styled.button`
  padding: 3px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-weight: 500;
  border: 1px solid #1b2631;
  color: #1b2631;
  border-radius: 18px;
  background-color: transparent;

  &:hover {
    background-color: hsl(184, 5%, 85%);
  }
  &:active {
    background-color: hsl(184, 5%, 65%);
  }
`;

export const StyledEditButton = styled(StyledAddModalButton)`
  background-color: #eaf5f9;

  &:hover {
    background-color: #d6ecf2;
  }
`;

export const StyledDeleteButton = styled(StyledAddModalButton)`
  background-color: #ffbfbf;

  &:hover {
    background-color: #ff9999;
  }
`;

export const StyledModalLayout = styled.main`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;

export const StyledAddModalButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;
