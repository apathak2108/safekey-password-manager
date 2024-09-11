import React, { useState } from "react";
import {
  StyledDeleteButton,
  StyledEditButton,
  StyledModalLayout,
} from "../addModal/addModal.styled.js";
import {
  StyledBackIcon,
  StyledEditModalButtonsContainer,
  StyledEditModalContainer,
  StyledEditModalInputContainer,
  StyledRow,
} from "./editModal.styled.js";
import InputField from "../inputField";
import STRINGS from "../../constants/strings";
import { useDispatch, useSelector } from "react-redux";
import { setIsEditModalOpen } from "../../redux/actions/homeActions";
import {
  deletePassword,
  updatePasswordAtIndex,
} from "../../redux/actions/passwordAction";
import { BACK_ICON_PATH } from "../../constants/paths.js";

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
        <StyledRow />
        <StyledEditModalButtonsContainer>
          <StyledEditButton onClick={handleEditCredential}>
            {STRINGS.EDIT}
          </StyledEditButton>
          <StyledDeleteButton onClick={handleDeleteCredential}>
            {STRINGS.DELETE}
          </StyledDeleteButton>
        </StyledEditModalButtonsContainer>
        <StyledBackIcon
          src={BACK_ICON_PATH}
          alt={STRINGS.BACK_ICON}
          onClick={handleBackIcon}
        />
      </StyledEditModalContainer>
    </StyledModalLayout>
  );
};

export default EditAndDeleteModal;
