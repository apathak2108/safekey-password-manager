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
import { useDispatch, useSelector } from "react-redux";
import {
  setIsPasswordModalOpen,
  setUsernameAndPassword,
} from "../../redux/actions/homeActions";
import STRINGS from "../../constants/strings";
import { useNavigate } from "react-router-dom";

const AddPasswordModal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const phoneNumber = useSelector((state) => state?.auth?.phoneNumber);

  const handleUsernameChange = (event) => {
    const value = event?.target?.value;
    setUsername(value);
  };
  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  const handleAddPasswordOnSave = () => {
    dispatch(setUsernameAndPassword(phoneNumber, username, password));
    dispatch(setIsPasswordModalOpen());
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
            <StyledAddModalButton
              onClick={() => dispatch(setIsPasswordModalOpen())}
            >
              {STRINGS.CANCEL}
            </StyledAddModalButton>
            <StyledAddModalButton onClick={handleAddPasswordOnSave}>
              {STRINGS.SAVE}
            </StyledAddModalButton>
          </StyledModalButtons>
        </StyledAddModalButtonsContainer>
      </StyledAddModalContainer>
    </StyledModalLayout>
  );
};

export default AddPasswordModal;
