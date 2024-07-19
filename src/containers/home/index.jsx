import React, { useState } from "react";
import Layout from "../../components/layout";
import Header from "../../components/header";
import {
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
  setIsMpinModalOpen,
  setIsPasswordModalOpen,
} from "../../redux/actions/homeActions";
import ExistingUserMPINComponent from "../../components/existingUserMpin";
import EditAndDeleteModal from "../../components/editModal";

const HomeContainer = () => {
  const dispatch = useDispatch();
  const isModal = useSelector((state) => state?.home?.isPasswordModal);
  const isMpinModal = useSelector((state) => state?.home?.isMpinModal);

  return (
    <>
      <Header />
      <Layout>
        {!isModal && !isMpinModal && (
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
              {[1, 1, 1, 1, 1, 1, 1].map((_, index) => (
                <StyledPasswordCard
                  key={index}
                  onClick={() => dispatch(setIsMpinModalOpen())}
                >
                  Dummy Title
                  <StyledArrowIcon />
                </StyledPasswordCard>
              ))}
            </StyledPasswordCardsContainer>
          </StyledPasswordsMainContainer>
        )}
        {isModal && <AddPasswordModal />}
        {isMpinModal && <ExistingUserMPINComponent />}
        {/* <EditAndDeleteModal /> */}
      </Layout>
    </>
  );
};

export default HomeContainer;
