import styled from "styled-components";
import {
  StyledAddModalButtonsContainer,
  StyledAddModalContainer,
  StyledAddModalInputContainer,
} from "../addModal/addModal.styled";

export const StyledEditModalContainer = styled(StyledAddModalContainer)`
  position: relative;
`;

export const StyledEditModalInputContainer = styled(
  StyledAddModalInputContainer
)``;

export const StyledEditModalButtonsContainer = styled(
  StyledAddModalButtonsContainer
)`
  justify-content: space-between;
`;

export const StyledBackIcon = styled.img`
  height: 24px;
  width: 24px;
  top: 6px;
  right: 6px;
  position: absolute;
  cursor: pointer;
`;

export const StyledRow = styled.hr`
  width: 100%;
  color: lightgray;
`;
