import React from "react";
import { StyledAuthLayout } from "./auth.styled";
import Header from "../../components/header";
import PhoneAuthComponent from "../../components/phoneAuth";
import ExistingUserMPINComponent from "../../components/existingUserMpin";
import NewUserMPINComponent from "../../components/newUserMpin";
import { useSelector } from "react-redux";
import Loader from "../../components/loader";

const AuthContainer = () => {
  const isAuth = useSelector((state) => state?.auth?.isAuth);
  const userExists = useSelector((state) => state?.auth?.userExists);

  return (
    <>
      <Header flag={false} />
      <StyledAuthLayout>
        {!isAuth && <PhoneAuthComponent />}
        {userExists && <ExistingUserMPINComponent />}
        {/* {!userExist && isAuth && <NewUserMPINComponent />} */}
      </StyledAuthLayout>
    </>
  );
};

export default AuthContainer;
