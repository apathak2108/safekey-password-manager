import React, { useState } from "react";
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
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    const value = event?.target?.value;
    setUsername(value);
  };
  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };
  return (
    <StyledModalLayout>
      <StyledAddModalContainer>
        <StyledHeaderText>{STRINGS.ADD_NEW_PASSWORD}</StyledHeaderText>
        <StyledAddModalInputContainer>
          <span>{STRINGS.PASSWORD_TITLE}</span>
          <InputField
            type={STRINGS.TEXT_INPUT_TYPE}
            onChange={(e) => handleUsernameChange(e)}
            value={username}
          />
        </StyledAddModalInputContainer>
        <StyledAddModalInputContainer>
          <span>{STRINGS.PASSWORD}</span>
          <InputField
            type={STRINGS.PASSWORD_INPUT_TYPE}
            onChange={(e) => handlePasswordChange(e)}
            value={password}
          />
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
