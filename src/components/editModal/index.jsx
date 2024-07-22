import React from "react";
import {
  StyledAddModalButton,
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
import {
  deleteUserCrederential,
  setSelectedPassword,
  setSelectedUsername,
  setUpdatedCredential,
} from "../../redux/actions/homeActions";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditAndDeleteModal = () => {
  const dispatch = useDispatch();
  const selectedUsername = useSelector(
    (state) => state?.home?.selectedUsername
  );
  const selectedPassword = useSelector(
    (state) => state?.home?.selectedPassword
  );
  const selectedId = useSelector((state) => state?.home?.selectedId);
  const deleteResponseData = useSelector(
    (state) => state?.home?.deleteResponseData
  );
  const loading = useSelector((state) => state?.home?.loading);
  const handleDeleteCredential = () => {
    dispatch(deleteUserCrederential(selectedId));
  };

  const handleEditCredential = () => {
    dispatch(
      setUpdatedCredential(selectedId, selectedUsername, selectedPassword)
    );
  };

  return (
    <StyledModalLayout>
      <StyledEditModalContainer>
        <StyledEditModalInputContainer>
          <span>{STRINGS.PASSWORD_TITLE}</span>
          <InputField
            type={STRINGS.TEXT_INPUT_TYPE}
            onChange={(e) => dispatch(setSelectedUsername(e.target.value))}
            value={selectedUsername}
          />
        </StyledEditModalInputContainer>
        <StyledEditModalInputContainer>
          <span>{STRINGS.PASSWORD}</span>
          <InputField
            type={STRINGS.PASSWORD_INPUT_TYPE}
            onChange={(e) => dispatch(setSelectedPassword(e.target.value))}
            value={selectedPassword}
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
