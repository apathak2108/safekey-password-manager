import styled from "styled-components";

export const StyledHeaderContainer = styled.header`
  height: 64px;
  width: 100%;
  background-color: #1b2631;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  z-index: 1;
`;

export const StyledHeaderLogoContainer = styled.section`
  height: 100%;
  width: 50%;
  display: flex;
  align-items: center;
`;

export const StyledHeaderAuthContainer = styled.section`
  height: 100%;
  width: 30%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: #fff;
`;

export const StyledHeaderLogo = styled.img`
  height: 70%;
  margin-left: 24px;

  @media (max-width: 768px) {
    height: 50%;
    margin-left: 12px;
  }
`;

export const StyledUserDetails = styled.span`

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const StyledUserDetailsContainer = styled.div`
  display: flex;
  gap: 36px;
  align-items: center;
`;