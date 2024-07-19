import React from "react";
import {
  StyledHeaderAuthContainer,
  StyledHeaderContainer,
  StyledHeaderLogo,
  StyledHeaderLogoContainer,
  StyledUserDetails,
} from "./header.styled";
import HeaderLogo from "../../assets/header/safekeyLogoWhite.png";
import Button from "../button";
import STRINGS from "../../constants/strings";
import { useDispatch, useSelector } from "react-redux";
import { setIsLoggedIn } from "../../redux/actions/authActions";

const Header = ({ flag = true }) => {
  const dispatch = useDispatch();
  const phoneNumber = useSelector((state) => state?.auth?.phoneNumber);

  const handleUserSignOut = () => {
    dispatch(setIsLoggedIn());
    location.reload();
  };

  return (
    <StyledHeaderContainer>
      <StyledHeaderLogoContainer>
        <StyledHeaderLogo src={HeaderLogo} />
      </StyledHeaderLogoContainer>
      {flag && (
        <StyledHeaderAuthContainer>
          <StyledUserDetails>{`Hi, ${phoneNumber}`}</StyledUserDetails>
          <Button name={STRINGS.SIGN_OUT} onClick={handleUserSignOut} />
        </StyledHeaderAuthContainer>
      )}
    </StyledHeaderContainer>
  );
};

export default Header;
