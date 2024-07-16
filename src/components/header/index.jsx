import React from "react";
import {
  StyledHeaderAuthContainer,
  StyledHeaderContainer,
  StyledHeaderLogo,
  StyledHeaderLogoContainer,
} from "./header.styled";
import HeaderLogo from "../../assets/header/safekey-logo-white.png";
import Button from "../button";

const Header = ({ flag = true }) => {
  return (
    <StyledHeaderContainer>
      <StyledHeaderLogoContainer>
        <StyledHeaderLogo src={HeaderLogo} />
      </StyledHeaderLogoContainer>
      {flag && (
        <StyledHeaderAuthContainer>
          <Button name="Sign Out" />
        </StyledHeaderAuthContainer>
      )}
    </StyledHeaderContainer>
  );
};

export default Header;
