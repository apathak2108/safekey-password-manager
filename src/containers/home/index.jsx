import React, { useState, useEffect } from "react";
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
} from "./home.styled.js";
import AddPasswordModal from "../../components/addModal";
import STRINGS from "../../constants/strings";
import { useDispatch, useSelector } from "react-redux";
import {
  setIsEditModalOpen,
  setIsPasswordModalOpen,
} from "../../redux/actions/homeActions";
import ExistingUserMPINComponent from "../../components/existingUserMpin";
import EditAndDeleteModal from "../../components/editModal";
import {
  getUserPasswords,
  setSelectedPasswordIndex,
} from "../../redux/actions/passwordAction";
import Loader from "../../components/loader";

const HomeContainer = () => {
  const dispatch = useDispatch();
  const isNewPasswordModal = useSelector(
    (state) => state?.home?.isPasswordModal
  );
  const isMpinModal = useSelector((state) => state?.home?.isMpinModal);
  const isEditModal = useSelector((state) => state?.home?.isEditModal);
  const { passwords, loading, error } = useSelector((state) => state?.password);

  const handleCredentialActions = (index) => {
    dispatch(setIsEditModalOpen(true));
    dispatch(setSelectedPasswordIndex(index));
  };

  useEffect(() => {
    dispatch(getUserPasswords());
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
              {loading && <Loader />}
              {error && <span>{error}</span>}
              {!loading && passwords.length === 0 && (
                <span>{STRINGS.NO_PASSWORDS}</span>
              )}
              {passwords?.map((credential, index) => (
                <StyledPasswordCard
                  key={index}
                  onClick={() => handleCredentialActions(index)}
                >
                  {credential?.username}
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
