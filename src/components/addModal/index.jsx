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
} from "./addModal.styled";
import InputField from "../inputField";
import { useDispatch, useSelector } from "react-redux";
import { setIsPasswordModalOpen } from "../../redux/actions/homeActions";
import STRINGS from "../../constants/strings";
import { useNavigate } from "react-router-dom";
import { addPassword } from "../../redux/actions/userActions";
import { getUserPasswords } from "../../redux/actions/passwordAction";

const AddPasswordModal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const mobileNumber = localStorage.getItem("loggedUser");

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
    dispatch(addPassword(mobileNumber, newPassword));
    dispatch(setIsPasswordModalOpen());
    dispatch(getUserPasswords());
    navigate("/");
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
