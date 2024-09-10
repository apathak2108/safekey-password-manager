import React from "react";
import { StyledLayout } from "./layout.styled.js";

const Layout = ({ children }) => {
  return <StyledLayout>{children}</StyledLayout>;
};

export default Layout;
