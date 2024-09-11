import React, { useState } from "react";
import {
  StyledAddModalButtonsContainer,
  StyledAddModalContainer,
  StyledAddModalInputContainer,
  StyledDeleteButton,
  StyledEditButton,
  StyledHeaderText,
  StyledModalButtons,
  StyledModalLayout,
} from "./addModal.styled.js";
import InputField from "../inputField";
import { useDispatch } from "react-redux";
import { setIsPasswordModalOpen } from "../../redux/actions/homeActions";
import STRINGS from "../../constants/strings";
import { useNavigate } from "react-router-dom";
import {
  addPassword,
  getUserPasswords,
} from "../../redux/actions/passwordAction";
import { ROUTES } from "../../constants/paths.js";

const AddPasswordModal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState(STRINGS.EMPTY_STRING);
  const [password, setPassword] = useState(STRINGS.EMPTY_STRING);

  const handleUsernameChange = (event) => {
    const value = event?.target?.value;
    setUsername(value);
  };
  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  const handleAddPasswordOnSave = () => {
    const newPassword = { username, password };
    dispatch(addPassword(newPassword));
    dispatch(setIsPasswordModalOpen());
    dispatch(getUserPasswords());
    navigate(ROUTES.HOME);
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
            <StyledDeleteButton
              onClick={() => dispatch(setIsPasswordModalOpen())}
            >
              {STRINGS.CANCEL}
            </StyledDeleteButton>
            <StyledEditButton onClick={handleAddPasswordOnSave}>
              {STRINGS.SAVE}
            </StyledEditButton>
          </StyledModalButtons>
        </StyledAddModalButtonsContainer>
      </StyledAddModalContainer>
    </StyledModalLayout>
  );
};

export default AddPasswordModal;
