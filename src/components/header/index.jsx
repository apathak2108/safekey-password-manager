import React from "react";
import {
  StyledHeaderAuthContainer,
  StyledHeaderContainer,
  StyledHeaderLogo,
  StyledHeaderLogoContainer,
} from "./header.styled";
import HeaderLogo from "../../assets/header/safekeyLogoWhite.png";
import Button from "../button";
import STRINGS from "../../constants/strings";

const Header = ({ flag = true }) => {
  return (
    <StyledHeaderContainer>
      <StyledHeaderLogoContainer>
        <StyledHeaderLogo src={HeaderLogo} />
      </StyledHeaderLogoContainer>
      {flag && (
        <StyledHeaderAuthContainer>
          <Button name={STRINGS.SIGN_OUT} />
        </StyledHeaderAuthContainer>
      )}
    </StyledHeaderContainer>
  );
};

export default Header;
