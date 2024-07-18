import React from "react";
import { StyledAuthLayout } from "./auth.styled";
import Header from "../../components/header";
import PhoneAuthComponent from "../../components/phoneAuth";
import ExistingUserMPINComponent from "../../components/existingUserMpin";
import NewUserMPINComponent from "../../components/newUserMpin";

const AuthContainer = () => {
  return (
    <>
      <Header flag={false} />
      <StyledAuthLayout>
        <PhoneAuthComponent />
        {/* <ExistingUserMPINComponent /> */}
        {/* <NewUserMPINComponent /> */}
      </StyledAuthLayout>
    </>
  );
};

export default AuthContainer;
