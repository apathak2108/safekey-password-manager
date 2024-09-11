import React from "react";
import {
  StyledHeaderAuthContainer,
  StyledHeaderContainer,
  StyledHeaderLogo,
  StyledHeaderLogoContainer,
  StyledUserDetails,
  StyledUserDetailsContainer,
} from "./header.styled.js";
import HeaderLogo from "../../assets/header/safekeyLogoWhite.png";
import Button from "../button";
import STRINGS from "../../constants/strings";
import { useDispatch } from "react-redux";
import { createUserOrUpdate } from "../../redux/actions/userActions";
import { useNavigate } from "react-router-dom";

const Header = ({ flag = true }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const mobileNumber = localStorage.getItem(STRINGS.LOGGED_USER);

  const handleUserSignOut = () => {
    if (mobileNumber) {
      dispatch(createUserOrUpdate(mobileNumber, null, navigate, true));
    }
  };

  return (
    <StyledHeaderContainer>
      <StyledHeaderLogoContainer>
        <StyledHeaderLogo src={HeaderLogo} />
      </StyledHeaderLogoContainer>
      {flag && (
        <StyledHeaderAuthContainer>
          <StyledUserDetailsContainer>
            <StyledUserDetails>{`Hi, ${mobileNumber}`}</StyledUserDetails>
            <Button name={STRINGS.SIGN_OUT} onClick={handleUserSignOut} />
          </StyledUserDetailsContainer>
        </StyledHeaderAuthContainer>
      )}
    </StyledHeaderContainer>
  );
};

export default Header;
