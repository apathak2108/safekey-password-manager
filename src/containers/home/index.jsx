import React, { useEffect } from "react";
import Header from "../../components/header";
import {
  HomeLayout,
  PasswordContainerHeader,
  StyledAddButton,
  StyledArrowIcon,
  StyledDescriptionContainer,
  StyledHeaderText,
  StyledPasswordCard,
  StyledPasswordCardsContainer,
  StyledPasswordsMainContainer,
} from "./home.styled";
import AddPasswordModal from "../../components/addModal";
import STRINGS from "../../constants/strings";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserAllCredentials,
  setIsEditModalOpen,
  setIsMpinModalOpen,
  setIsPasswordModalOpen,
  setSelectedPassword,
  setSelectedUserId,
  setSelectedUsername,
} from "../../redux/actions/homeActions";
import ExistingUserMPINComponent from "../../components/existingUserMpin";
import EditAndDeleteModal from "../../components/editModal";

const HomeContainer = () => {
  const dispatch = useDispatch();
  const isNewPasswordModal = useSelector(
    (state) => state?.home?.isPasswordModal
  );
  const isMpinModal = useSelector((state) => state?.home?.isMpinModal);
  const isEditModal = useSelector((state) => state?.home?.isEditModal);
  const allUsernames = useSelector(
    (state) => state?.home?.userAllCredentials?.data
  );
  const phoneNumber = localStorage.getItem("loggedUser");
  const handleCredentialActions = (id, username, password) => {
    dispatch(setIsEditModalOpen(true));
    dispatch(setSelectedUserId(id));
    dispatch(setSelectedUsername(username));
    dispatch(setSelectedPassword(password));
  };

  useEffect(() => {
    dispatch(getUserAllCredentials(phoneNumber));
  }, []);

  return (
    <>
      <Header />
      <HomeLayout>
        {!isNewPasswordModal && !isMpinModal && !isEditModal && (
          <StyledPasswordsMainContainer>
            <PasswordContainerHeader>
              <StyledHeaderText>{STRINGS.PASSWORDS}</StyledHeaderText>
              <StyledAddButton
                onClick={() => dispatch(setIsPasswordModalOpen())}
              >
                {STRINGS.ADD}
              </StyledAddButton>
            </PasswordContainerHeader>
            <StyledDescriptionContainer>
              {STRINGS.HOME_DESCRIPTION_TEXT}
            </StyledDescriptionContainer>
            <StyledPasswordCardsContainer>
              {allUsernames?.map((credential, index) => (
                <StyledPasswordCard
                  key={index}
                  onClick={() =>
                    handleCredentialActions(
                      credential?._id,
                      credential?.originName,
                      credential?.originPassword
                    )
                  }
                >
                  {credential?.originName}
                  <StyledArrowIcon />
                </StyledPasswordCard>
              ))}
            </StyledPasswordCardsContainer>
          </StyledPasswordsMainContainer>
        )}
        {isNewPasswordModal && <AddPasswordModal />}
        {isMpinModal && <ExistingUserMPINComponent />}
        {isEditModal && <EditAndDeleteModal />}
      </HomeLayout>
    </>
  );
};

export default HomeContainer;
