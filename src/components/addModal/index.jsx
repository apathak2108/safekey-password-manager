import React from "react";
import {
  StyledAddModalButton,
  StyledAddModalButtonsContainer,
  StyledAddModalContainer,
  StyledAddModalInputContainer,
  StyledHeaderText,
  StyledModalButtons,
  StyledModalLayout,
} from "./addModal.styled";
import InputField from "../inputField";
import { useDispatch } from "react-redux";
import { setIsPasswordModalOpen } from "../../redux/actions/homeActions";
import STRINGS from "../../constants/strings";

const AddPasswordModal = () => {
  const dispatch = useDispatch();
  return (
    <StyledModalLayout>
      <StyledAddModalContainer>
        <StyledHeaderText>{STRINGS.ADD_NEW_PASSWORD}</StyledHeaderText>
        <StyledAddModalInputContainer>
          <span>{STRINGS.PASSWORD_TITLE}</span>
          <InputField type={STRINGS.TEXT_INPUT_TYPE} />
        </StyledAddModalInputContainer>
        <StyledAddModalInputContainer>
          <span>{STRINGS.PASSWORD}</span>
          <InputField type={STRINGS.PASSWORD_INPUT_TYPE} />
        </StyledAddModalInputContainer>
        <span>{STRINGS.ADD_PASSWORD_DESCRIPTION_TEXT}</span>
        <StyledAddModalButtonsContainer>
          <StyledModalButtons>
            <StyledAddModalButton
              onClick={() => dispatch(setIsPasswordModalOpen())}
            >
              {STRINGS.CANCEL}
            </StyledAddModalButton>
            <StyledAddModalButton onClick={() => console.log("Clicked save")}>
              {STRINGS.SAVE}
            </StyledAddModalButton>
          </StyledModalButtons>
        </StyledAddModalButtonsContainer>
      </StyledAddModalContainer>
    </StyledModalLayout>
  );
};

export default AddPasswordModal;
