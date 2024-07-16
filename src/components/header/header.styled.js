import styled from "styled-components";

export const StyledHeaderContainer = styled.header`
  height: 64px;
  width: 100%;
  background-color: #1b2631;
  position: fixed;
  top: 0;
  display: flex;
`;

export const StyledHeaderLogoContainer = styled.section`
  height: 100%;
  width: 50%;
  display: flex;
  align-items: center;
`;

export const StyledHeaderAuthContainer = styled.section`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: end;
  align-items: center;
`;

export const StyledHeaderLogo = styled.img`
  height: 70%;
  margin-left: 24px;
`;
