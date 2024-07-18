import React from "react";
import { StyledAddModalButton, StyledAddModalButtonsContainer, StyledModalLayout } from "../addModal/addModal.styled";
import { StyledEditModalButtonsContainer, StyledEditModalContainer, StyledEditModalInputContainer } from "./editModal.styled";
import InputField from "../inputField";
import STRINGS from "../../constants/strings";

const EditAndDeleteModal = () => {
  return (
    <StyledModalLayout>
      <StyledEditModalContainer>
        <StyledEditModalInputContainer>
          <span>{STRINGS.PASSWORD_TITLE}</span>
          <InputField
            type={STRINGS.TEXT_INPUT_TYPE}
            // onChange={(e) => handleUsernameChange(e)}
            // value={username}
          />
        </StyledEditModalInputContainer>
        <StyledEditModalInputContainer>
          <span>{STRINGS.PASSWORD}</span>
          <InputField
            type={STRINGS.PASSWORD_INPUT_TYPE}
            // onChange={(e) => handleUsernameChange(e)}
            // value={username}
          />
        </StyledEditModalInputContainer>
        <hr style={{width: '100%', color: "lightgray"}} />
        <StyledEditModalButtonsContainer>
          <StyledAddModalButton>Edit</StyledAddModalButton>
          <StyledAddModalButton>Delete</StyledAddModalButton>
        </StyledEditModalButtonsContainer>
      </StyledEditModalContainer>
    </StyledModalLayout>
  );
};

export default EditAndDeleteModal;
