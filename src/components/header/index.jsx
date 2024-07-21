import React from "react";
import {
  StyledHeaderAuthContainer,
  StyledHeaderContainer,
  StyledHeaderLogo,
  StyledHeaderLogoContainer,
  StyledUserDetails,
  StyledUserDetailsContainer,
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
          <StyledUserDetailsContainer>
            <StyledUserDetails>{`Hi, ${phoneNumber}`}</StyledUserDetails>
            <Button name={STRINGS.SIGN_OUT} onClick={handleUserSignOut} />
          </StyledUserDetailsContainer>
        </StyledHeaderAuthContainer>
      )}
    </StyledHeaderContainer>
  );
};

export default Header;
