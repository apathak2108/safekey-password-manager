import React, { useState } from "react";
import {
  StyledDeleteButton,
  StyledEditButton,
  StyledModalLayout,
} from "../addModal/addModal.styled";
import {
  StyledEditModalButtonsContainer,
  StyledEditModalContainer,
  StyledEditModalInputContainer,
} from "./editModal.styled";
import InputField from "../inputField";
import STRINGS from "../../constants/strings";
import { useDispatch, useSelector } from "react-redux";

const EditAndDeleteModal = () => {
  const dispatch = useDispatch();
  const selectedIndex = useSelector((state) => state?.password?.selectedIndex);
  const selectedCredential = useSelector(
    (state) => state?.password?.passwords[selectedIndex]
  );
  const [username, setUsername] = useState(selectedCredential.username);
  const [password, setPassword] = useState(selectedCredential.password);

  const handleDeleteCredential = () => {
    dispatch(deleteUserCrederential(selectedId));
  };

  // const handleEditCredential = () => {
  //   dispatch(
  //     setUpdatedCredential(selectedId, selectedUsername, selectedPassword)
  //   );
  // };

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
      </StyledEditModalContainer>
    </StyledModalLayout>
  );
};

export default EditAndDeleteModal;
