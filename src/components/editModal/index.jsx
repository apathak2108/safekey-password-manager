import React, { useState } from "react";
import {
  StyledDeleteButton,
  StyledEditButton,
  StyledModalLayout,
} from "../addModal/addModal.styled";
import {
  StyledBackIcon,
  StyledEditModalButtonsContainer,
  StyledEditModalContainer,
  StyledEditModalInputContainer,
} from "./editModal.styled";
import InputField from "../inputField";
import STRINGS from "../../constants/strings";
import { useDispatch, useSelector } from "react-redux";
import { setIsEditModalOpen } from "../../redux/actions/homeActions";
import {
  deletePassword,
  updatePasswordAtIndex,
} from "../../redux/actions/passwordAction";

const EditAndDeleteModal = () => {
  const dispatch = useDispatch();
  const selectedIndex = useSelector((state) => state?.password?.selectedIndex);
  const selectedCredential = useSelector(
    (state) => state?.password?.passwords[selectedIndex]
  );
  const [username, setUsername] = useState(selectedCredential.username);
  const [password, setPassword] = useState(selectedCredential.password);

  const handleDeleteCredential = () => {
    dispatch(deletePassword(selectedIndex));
    dispatch(setIsEditModalOpen(false));
  };

  const handleEditCredential = () => {
    dispatch(updatePasswordAtIndex(selectedIndex, username, password));
    dispatch(setIsEditModalOpen(false));
  };

  const handleBackIcon = () => {
    dispatch(setIsEditModalOpen(false));
  };

  return (
    <StyledModalLayout>
      <StyledEditModalContainer>
        <StyledEditModalInputContainer>
          <span>{STRINGS.PASSWORD_TITLE}</span>
          <InputField
            type={STRINGS.TEXT_INPUT_TYPE}
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </StyledEditModalInputContainer>
        <StyledEditModalInputContainer>
          <span>{STRINGS.PASSWORD}</span>
          <InputField
            type={STRINGS.PASSWORD_INPUT_TYPE}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </StyledEditModalInputContainer>
        <hr style={{ width: "100%", color: "lightgray" }} />
        <StyledEditModalButtonsContainer>
          <StyledEditButton onClick={handleEditCredential}>
            {STRINGS.EDIT}
          </StyledEditButton>
          <StyledDeleteButton onClick={handleDeleteCredential}>
            {STRINGS.DELETE}
          </StyledDeleteButton>
        </StyledEditModalButtonsContainer>
        <StyledBackIcon
          src="https://img.icons8.com/?size=100&id=yiR4rPf7BGje&format=png&color=000000"
          alt="back-icon"
          onClick={handleBackIcon}
        />
      </StyledEditModalContainer>
    </StyledModalLayout>
  );
};

export default EditAndDeleteModal;
