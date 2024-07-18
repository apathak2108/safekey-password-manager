import React from "react";
import { StyledAuthLayout } from "./auth.styled";
import Header from "../../components/header";
import PhoneAuthComponent from "../../components/phoneAuth";
import ExistingUserMPINComponent from "../../components/existingUserMpin";
import NewUserMPINComponent from "../../components/newUserMpin";
import { useSelector } from "react-redux";

const AuthContainer = () => {
  const isAuth = useSelector((state) => state?.auth?.isAuth);
  const userExist = useSelector((state) => state?.auth?.userExist);

  return (
    <>
      <Header flag={false} />
      <StyledAuthLayout>
        {!isAuth && <PhoneAuthComponent />}
        {userExist && isAuth && <ExistingUserMPINComponent />}
        {!userExist && isAuth && <NewUserMPINComponent />}
      </StyledAuthLayout>
    </>
  );
};

export default AuthContainer;
