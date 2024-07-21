import React from "react";
import {
  StyledAddModalButton,
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
import { setSelectedPassword, setSelectedUsername } from "../../redux/actions/homeActions";

const EditAndDeleteModal = () => {
  const dispatch = useDispatch();
  const selectedUsername = useSelector(
    (state) => state?.home?.selectedUsername
  );
  const selectedPassword = useSelector(
    (state) => state?.home?.selectedPassword
  );
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
          <StyledAddModalButton>Edit</StyledAddModalButton>
          <StyledAddModalButton>Delete</StyledAddModalButton>
        </StyledEditModalButtonsContainer>
      </StyledEditModalContainer>
    </StyledModalLayout>
  );
};

export default EditAndDeleteModal;
